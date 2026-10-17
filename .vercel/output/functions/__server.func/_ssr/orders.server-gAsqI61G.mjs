import { T as TSS_SERVER_FUNCTION, b as createServerFn } from "./server-zaSQRbKD.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const SESSION_NAME = "ts_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24;
function getSessionConfig() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET is not configured or is shorter than 32 characters on the server.");
  }
  return {
    name: SESSION_NAME,
    password: secret,
    maxAge: SESSION_MAX_AGE,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/"
    }
  };
}
function getH3ServerEvent() {
  const globalObj = globalThis;
  const storage = globalObj[/* @__PURE__ */ Symbol.for("tanstack-start:event-storage")];
  const store = storage?.getStore();
  const event = store?.h3Event;
  if (!event) {
    throw new Error("No server event context found in runtime.");
  }
  return event;
}
const rateLimitMap = /* @__PURE__ */ new Map();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1e3;
async function getClientIp(event) {
  try {
    const h3 = await import("../_libs/h3-v2.mjs");
    const ip = h3.getRequestIP(event);
    if (ip) return ip;
    const forwarded = event?.req?.headers?.get("x-forwarded-for");
    if (forwarded) {
      const first = forwarded.split(",")[0].trim();
      if (first) return first;
    }
    const realIp = event?.req?.headers?.get("x-real-ip");
    if (realIp) return realIp.trim();
  } catch {
  }
  return "unknown-client";
}
function checkRateLimit(ip) {
  const record = rateLimitMap.get(ip);
  if (!record) return {
    allowed: true
  };
  const now = Date.now();
  if (record.blockedUntil > now) {
    const remainingMs = record.blockedUntil - now;
    const waitMinutes = Math.ceil(remainingMs / (60 * 1e3));
    return {
      allowed: false,
      waitMinutes
    };
  }
  if (record.blockedUntil > 0 && record.blockedUntil <= now) {
    rateLimitMap.delete(ip);
    return {
      allowed: true
    };
  }
  return {
    allowed: true
  };
}
function recordFailedAttempt(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || {
    attempts: 0,
    blockedUntil: 0
  };
  record.attempts += 1;
  if (record.attempts >= MAX_FAILED_ATTEMPTS) {
    record.blockedUntil = now + LOCKOUT_DURATION_MS;
  }
  rateLimitMap.set(ip, record);
}
function resetRateLimit(ip) {
  rateLimitMap.delete(ip);
}
async function verifyPassword(provided, expected) {
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
async function assertAdminAuthenticated() {
  const h3 = await import("../_libs/h3-v2.mjs");
  const event = getH3ServerEvent();
  try {
    const config = getSessionConfig();
    const session = await h3.useSession(event, config);
    if (!session.data || !session.data.authenticated) {
      if (event.res) event.res.status = 401;
      throw h3.createError({
        statusCode: 401,
        statusMessage: "Unauthorized: Admin session required"
      });
    }
    return session;
  } catch (err) {
    if (err?.statusCode === 401 || err?.status === 401) {
      throw err;
    }
    if (err?.message?.startsWith("ADMIN_SESSION_SECRET")) {
      if (event.res) event.res.status = 500;
      throw h3.createError({
        statusCode: 500,
        statusMessage: err.message
      });
    }
    if (event.res) event.res.status = 401;
    throw h3.createError({
      statusCode: 401,
      statusMessage: "Unauthorized: Admin session required"
    });
  }
}
async function readOrders() {
  try {
    const {
      getSupabaseServerClient
    } = await import("./supabase.server-CTlXEW4q.mjs");
    const supabase = getSupabaseServerClient();
    if (supabase) {
      const {
        data,
        error
      } = await supabase.from("orders").select("*").order("created_at", {
        ascending: false
      });
      if (error) {
        console.error("[Supabase Orders] Fetch error:", error.message);
      } else if (data) {
        return data.map((row) => ({
          id: row.id,
          createdAt: row.created_at,
          customerName: row.customer_name,
          customerPhone: row.customer_phone,
          customerCity: row.customer_city,
          customerAddress: row.customer_address,
          customerNotes: row.customer_notes || void 0,
          items: typeof row.items === "string" ? JSON.parse(row.items) : row.items || [],
          totalPrice: Number(row.total_price),
          status: row.status
        }));
      }
    }
  } catch (err) {
    console.error("[Supabase Orders] Error attempting Supabase read:", err);
  }
  try {
    const fs = await import("fs");
    const path = await import("path");
    const isVercel = !!process.env.VERCEL;
    const ordersFilePath = isVercel ? "/tmp/orders.json" : path.resolve("./orders.json");
    if (!fs.existsSync(ordersFilePath)) {
      if (isVercel) {
        fs.writeFileSync(ordersFilePath, "[]", "utf8");
      }
      return [];
    }
    const content = fs.readFileSync(ordersFilePath, "utf8");
    return JSON.parse(content || "[]");
  } catch (err) {
    console.error("Error reading fallback orders file:", err);
    return [];
  }
}
async function writeOrders(orders) {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const isVercel = !!process.env.VERCEL;
    const ordersFilePath = isVercel ? "/tmp/orders.json" : path.resolve("./orders.json");
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing fallback orders file:", err);
  }
}
const adminLoginFn_createServerFn_handler = createServerRpc({
  id: "0b5d8222b5c5a5ff0f3803ede304ca52c9c10930a4565e2a4f72a783bdc1e4b6",
  name: "adminLoginFn",
  filename: "src/lib/orders.server.ts"
}, (opts) => adminLoginFn.__executeServer(opts));
const adminLoginFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(adminLoginFn_createServerFn_handler, async ({
  data
}) => {
  const h3 = await import("../_libs/h3-v2.mjs");
  const event = getH3ServerEvent();
  const ip = await getClientIp(event);
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    if (event.res) event.res.status = 429;
    return {
      success: false,
      error: `Trop de tentatives de connexion. Réessayez dans ${rateCheck.waitMinutes} minute(s).`
    };
  }
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    console.error("[Admin Auth] ADMIN_PASSWORD environment variable is not defined on the server.");
    if (event.res) event.res.status = 500;
    return {
      success: false,
      error: "Configuration serveur incomplète (ADMIN_PASSWORD non défini)."
    };
  }
  let sessionConfig;
  try {
    sessionConfig = getSessionConfig();
  } catch (err) {
    console.error("[Admin Auth] ADMIN_SESSION_SECRET error:", err?.message);
    if (event.res) event.res.status = 500;
    return {
      success: false,
      error: "Configuration serveur incomplète (ADMIN_SESSION_SECRET non configuré ou < 32 car.)."
    };
  }
  const password = data?.password ?? "";
  const isValid = await verifyPassword(password, expectedPassword);
  if (!isValid) {
    recordFailedAttempt(ip);
    if (event.res) event.res.status = 401;
    return {
      success: false,
      error: "Mot de passe incorrect. Protect your peace."
    };
  }
  resetRateLimit(ip);
  const session = await h3.useSession(event, sessionConfig);
  await session.update({
    authenticated: true,
    authenticatedAt: Date.now()
  });
  console.log("[Admin Auth] Successful admin login from IP:", ip);
  return {
    success: true
  };
});
const adminLogoutFn_createServerFn_handler = createServerRpc({
  id: "ad2d1adea7cacd7aadc7949f303d1d45d753a0b6af4dfbc011b658dbfec24060",
  name: "adminLogoutFn",
  filename: "src/lib/orders.server.ts"
}, (opts) => adminLogoutFn.__executeServer(opts));
const adminLogoutFn = createServerFn({
  method: "POST"
}).handler(adminLogoutFn_createServerFn_handler, async () => {
  try {
    const h3 = await import("../_libs/h3-v2.mjs");
    const event = getH3ServerEvent();
    const config = getSessionConfig();
    const session = await h3.useSession(event, config);
    await session.clear();
    console.log("[Admin Auth] Admin session logged out and cleared.");
  } catch (err) {
    console.error("[Admin Auth] Error during admin logout:", err);
  }
  return {
    success: true
  };
});
const checkAdminAuthFn_createServerFn_handler = createServerRpc({
  id: "04ab80446e4cad863179eef6336b29a74d685340ba866db7e3333a7019b456bc",
  name: "checkAdminAuthFn",
  filename: "src/lib/orders.server.ts"
}, (opts) => checkAdminAuthFn.__executeServer(opts));
const checkAdminAuthFn = createServerFn({
  method: "GET"
}).handler(checkAdminAuthFn_createServerFn_handler, async () => {
  try {
    const h3 = await import("../_libs/h3-v2.mjs");
    const event = getH3ServerEvent();
    const config = getSessionConfig();
    const session = await h3.useSession(event, config);
    return {
      authenticated: Boolean(session.data?.authenticated)
    };
  } catch {
    return {
      authenticated: false
    };
  }
});
const createOrderFn_createServerFn_handler = createServerRpc({
  id: "0b1d791ec81a3d0a4252766c5f213de9e95dc8deb15e746e4a8369e5de20e062",
  name: "createOrderFn",
  filename: "src/lib/orders.server.ts"
}, (opts) => createOrderFn.__executeServer(opts));
const createOrderFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createOrderFn_createServerFn_handler, async ({
  data
}) => {
  const newOrder = {
    ...data,
    id: "TS-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    status: "New"
  };
  try {
    const {
      getSupabaseServerClient
    } = await import("./supabase.server-CTlXEW4q.mjs");
    const supabase = getSupabaseServerClient();
    if (supabase) {
      const {
        error
      } = await supabase.from("orders").insert({
        id: newOrder.id,
        created_at: newOrder.createdAt,
        customer_name: newOrder.customerName,
        customer_phone: newOrder.customerPhone,
        customer_city: newOrder.customerCity,
        customer_address: newOrder.customerAddress,
        customer_notes: newOrder.customerNotes || null,
        items: newOrder.items,
        total_price: newOrder.totalPrice,
        status: newOrder.status
      });
      if (error) {
        console.error("[Supabase Orders] Insert error:", error.message);
        const orders = await readOrders();
        orders.push(newOrder);
        await writeOrders(orders);
      } else {
        console.log(`[Supabase Orders] Saved new order ${newOrder.id}`);
      }
    } else {
      const orders = await readOrders();
      orders.push(newOrder);
      await writeOrders(orders);
      console.log(`[File Orders] Saved new order ${newOrder.id}`);
    }
  } catch (err) {
    console.error("[Orders Server] Error saving order:", err);
    const orders = await readOrders();
    orders.push(newOrder);
    await writeOrders(orders);
  }
  return newOrder;
});
const getOrdersFn_createServerFn_handler = createServerRpc({
  id: "4da6ed92fc94ebf6c0a8932f19c99ab60a000695af9dbcc44b5ac25671f83b7a",
  name: "getOrdersFn",
  filename: "src/lib/orders.server.ts"
}, (opts) => getOrdersFn.__executeServer(opts));
const getOrdersFn = createServerFn({
  method: "GET"
}).handler(getOrdersFn_createServerFn_handler, async () => {
  await assertAdminAuthenticated();
  return await readOrders();
});
const updateOrderStatusFn_createServerFn_handler = createServerRpc({
  id: "ff7cbb0d15363131f77420f707143b0cf9e674ee544c429c38510ff1cf368a3f",
  name: "updateOrderStatusFn",
  filename: "src/lib/orders.server.ts"
}, (opts) => updateOrderStatusFn.__executeServer(opts));
const updateOrderStatusFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(updateOrderStatusFn_createServerFn_handler, async ({
  data
}) => {
  await assertAdminAuthenticated();
  try {
    const {
      getSupabaseServerClient
    } = await import("./supabase.server-CTlXEW4q.mjs");
    const supabase = getSupabaseServerClient();
    if (supabase) {
      const {
        data: updated,
        error
      } = await supabase.from("orders").update({
        status: data.status
      }).eq("id", data.id).select().single();
      if (error) {
        console.error("[Supabase Orders] Update status error:", error.message);
      } else if (updated) {
        console.log(`[Supabase Orders] Updated status of order ${data.id} to ${data.status}`);
        return {
          id: updated.id,
          createdAt: updated.created_at,
          customerName: updated.customer_name,
          customerPhone: updated.customer_phone,
          customerCity: updated.customer_city,
          customerAddress: updated.customer_address,
          customerNotes: updated.customer_notes || void 0,
          items: typeof updated.items === "string" ? JSON.parse(updated.items) : updated.items,
          totalPrice: Number(updated.total_price),
          status: updated.status
        };
      }
    }
  } catch (err) {
    console.error("[Orders Server] Error updating order via Supabase:", err);
  }
  const orders = await readOrders();
  const orderIndex = orders.findIndex((o) => o.id === data.id);
  if (orderIndex === -1) {
    throw new Error(`Order ${data.id} not found`);
  }
  orders[orderIndex].status = data.status;
  await writeOrders(orders);
  return orders[orderIndex];
});
export {
  adminLoginFn_createServerFn_handler,
  adminLogoutFn_createServerFn_handler,
  checkAdminAuthFn_createServerFn_handler,
  createOrderFn_createServerFn_handler,
  getOrdersFn_createServerFn_handler,
  updateOrderStatusFn_createServerFn_handler
};
