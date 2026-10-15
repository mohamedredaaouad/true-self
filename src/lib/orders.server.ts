import { createServerFn } from "@tanstack/react-start";

export interface OrderItem {
  productId: number;
  name: string;
  quote: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerCity: string;
  customerAddress: string;
  customerNotes?: string;
  items: OrderItem[];
  totalPrice: number;
  status: "New" | "Confirmed" | "Shipped" | "Delivered";
}

// ==========================================
// Session & Security Configuration
// ==========================================
const SESSION_NAME = "ts_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours in seconds

function getSessionConfig() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not configured or is shorter than 32 characters on the server."
    );
  }
  return {
    name: SESSION_NAME,
    password: secret,
    maxAge: SESSION_MAX_AGE,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" || !!process.env.VERCEL,
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

// Helper to retrieve current H3 server event from TanStack Start event storage
function getH3ServerEvent(): any {
  const globalObj = globalThis as any;
  const storage = globalObj[Symbol.for("tanstack-start:event-storage")];
  const store = storage?.getStore();
  const event = store?.h3Event;
  if (!event) {
    throw new Error("No server event context found in runtime.");
  }
  return event;
}

// In-memory rate limiting against brute-force attacks
interface RateLimitRecord {
  attempts: number;
  blockedUntil: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes lockout

async function getClientIp(event: any): Promise<string> {
  try {
    const h3 = await import("h3-v2");
    const ip = h3.getRequestIP(event);
    if (ip) return ip;
    const forwarded = event?.req?.headers?.get("x-forwarded-for");
    if (forwarded) {
      const first = forwarded.split(",")[0].trim();
      if (first) return first;
    }
    const realIp = event?.req?.headers?.get("x-real-ip");
    if (realIp) return realIp.trim();
  } catch {}
  return "unknown-client";
}

function checkRateLimit(ip: string): { allowed: boolean; waitMinutes?: number } {
  const record = rateLimitMap.get(ip);
  if (!record) return { allowed: true };

  const now = Date.now();
  if (record.blockedUntil > now) {
    const remainingMs = record.blockedUntil - now;
    const waitMinutes = Math.ceil(remainingMs / (60 * 1000));
    return { allowed: false, waitMinutes };
  }

  if (record.blockedUntil > 0 && record.blockedUntil <= now) {
    rateLimitMap.delete(ip);
    return { allowed: true };
  }

  return { allowed: true };
}

function recordFailedAttempt(ip: string) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { attempts: 0, blockedUntil: 0 };
  record.attempts += 1;
  if (record.attempts >= MAX_FAILED_ATTEMPTS) {
    record.blockedUntil = now + LOCKOUT_DURATION_MS;
  }
  rateLimitMap.set(ip, record);
}

function resetRateLimit(ip: string) {
  rateLimitMap.delete(ip);
}

// Constant-time password verification to prevent timing attacks
async function verifyPassword(provided: string, expected: string): Promise<boolean> {
  if (!provided || !expected) return false;
  const crypto = await import("node:crypto");
  const providedBuffer = Buffer.from(provided, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");
  if (providedBuffer.length !== expectedBuffer.length) {
    crypto.timingSafeEqual(providedBuffer, providedBuffer);
    return false;
  }
  return crypto.timingSafeEqual(providedBuffer, expectedBuffer);
}

// Server guard asserting admin authentication
export async function assertAdminAuthenticated() {
  const h3 = await import("h3-v2");
  const event = getH3ServerEvent();
  try {
    const config = getSessionConfig();
    const session = await h3.useSession(event, config);
    if (!session.data || !session.data.authenticated) {
      if (event.res) event.res.status = 401;
      throw h3.createError({ statusCode: 401, statusMessage: "Unauthorized: Admin session required" });
    }
    return session;
  } catch (err: any) {
    if (err?.statusCode === 401 || err?.status === 401) {
      throw err;
    }
    if (err?.message?.startsWith("ADMIN_SESSION_SECRET")) {
      if (event.res) event.res.status = 500;
      throw h3.createError({ statusCode: 500, statusMessage: err.message });
    }
    if (event.res) event.res.status = 401;
    throw h3.createError({ statusCode: 401, statusMessage: "Unauthorized: Admin session required" });
  }
}

// ==========================================
// Order Storage Helpers
// ==========================================
async function readOrders(): Promise<Order[]> {
  try {
    const fs = await import("fs");
    const path = await import("path");
    
    const isVercel = !!process.env.VERCEL;
    const ordersFilePath = isVercel
      ? "/tmp/orders.json"
      : path.resolve("./orders.json");
    
    if (!fs.existsSync(ordersFilePath)) {
      if (isVercel) {
        fs.writeFileSync(ordersFilePath, "[]", "utf8");
      }
      return [];
    }
    const content = fs.readFileSync(ordersFilePath, "utf8");
    return JSON.parse(content || "[]");
  } catch (err) {
    console.error("Error reading orders file:", err);
    return [];
  }
}

async function writeOrders(orders: Order[]) {
  try {
    const fs = await import("fs");
    const path = await import("path");
    
    const isVercel = !!process.env.VERCEL;
    const ordersFilePath = isVercel
      ? "/tmp/orders.json"
      : path.resolve("./orders.json");
    
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing orders file:", err);
  }
}

// ==========================================
// Authentication Server Actions
// ==========================================

export const adminLoginFn = createServerFn({ method: "POST" })
  .inputValidator((data: { password?: string }) => data)
  .handler(async ({ data }) => {
    const h3 = await import("h3-v2");
    const event = getH3ServerEvent();
    const ip = await getClientIp(event);

    // 1. Rate-limiting check
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      if (event.res) event.res.status = 429;
      return {
        success: false,
        error: `Trop de tentatives de connexion. Réessayez dans ${rateCheck.waitMinutes} minute(s).`,
      };
    }

    // 2. Server environment configuration check
    const expectedPassword = process.env.ADMIN_PASSWORD;
    if (!expectedPassword) {
      console.error("[Admin Auth] ADMIN_PASSWORD environment variable is not defined on the server.");
      if (event.res) event.res.status = 500;
      return {
        success: false,
        error: "Configuration serveur incomplète (ADMIN_PASSWORD non défini).",
      };
    }

    let sessionConfig;
    try {
      sessionConfig = getSessionConfig();
    } catch (err: any) {
      console.error("[Admin Auth] ADMIN_SESSION_SECRET error:", err?.message);
      if (event.res) event.res.status = 500;
      return {
        success: false,
        error: "Configuration serveur incomplète (ADMIN_SESSION_SECRET non configuré ou < 32 car.).",
      };
    }

    // 3. Constant-time password verification
    const password = data?.password ?? "";
    const isValid = await verifyPassword(password, expectedPassword);

    if (!isValid) {
      recordFailedAttempt(ip);
      if (event.res) event.res.status = 401;
      return {
        success: false,
        error: "Mot de passe incorrect. Protect your peace.",
      };
    }

    // 4. Success: reset failed attempts & set encrypted HttpOnly session
    resetRateLimit(ip);
    const session = await h3.useSession(event, sessionConfig);
    await session.update({
      authenticated: true,
      authenticatedAt: Date.now(),
    });

    console.log("[Admin Auth] Successful admin login from IP:", ip);
    return { success: true };
  });

export const adminLogoutFn = createServerFn({ method: "POST" })
  .handler(async () => {
    try {
      const h3 = await import("h3-v2");
      const event = getH3ServerEvent();
      const config = getSessionConfig();
      const session = await h3.useSession(event, config);
      await session.clear();
      console.log("[Admin Auth] Admin session logged out and cleared.");
    } catch (err) {
      console.error("[Admin Auth] Error during admin logout:", err);
    }
    return { success: true };
  });

export const checkAdminAuthFn = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      const h3 = await import("h3-v2");
      const event = getH3ServerEvent();
      const config = getSessionConfig();
      const session = await h3.useSession(event, config);
      return { authenticated: Boolean(session.data?.authenticated) };
    } catch {
      return { authenticated: false };
    }
  });

// ==========================================
// Order Server Actions
// ==========================================

// 1. Server Action to Create a New Order (Public - Used at Checkout)
export const createOrderFn = createServerFn({ method: "POST" })
  .inputValidator((data: Omit<Order, "id" | "createdAt" | "status">) => data)
  .handler(async ({ data }) => {
    const orders = await readOrders();
    
    const newOrder: Order = {
      ...data,
      id: Math.random().toString(36).substring(2, 11).toUpperCase(),
      createdAt: new Date().toISOString(),
      status: "New",
    };
    
    orders.push(newOrder);
    await writeOrders(orders);
    
    console.log(`[Order Server] Saved new order ${newOrder.id}`);
    return newOrder;
  });

// 2. Server Action to Get All Orders (Protected - Requires Admin Session)
export const getOrdersFn = createServerFn({ method: "GET" })
  .handler(async () => {
    await assertAdminAuthenticated();
    console.log("[Order Server] Authenticated admin fetching all orders");
    return await readOrders();
  });

// 3. Server Action to Update Order Status (Protected - Requires Admin Session)
export const updateOrderStatusFn = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string; status: Order["status"] }) => data)
  .handler(async ({ data }) => {
    await assertAdminAuthenticated();
    const orders = await readOrders();
    const orderIndex = orders.findIndex((o) => o.id === data.id);
    
    if (orderIndex === -1) {
      throw new Error(`Order ${data.id} not found`);
    }
    
    orders[orderIndex].status = data.status;
    await writeOrders(orders);
    
    console.log(`[Order Server] Authenticated admin updated status of order ${data.id} to ${data.status}`);
    return orders[orderIndex];
  });
