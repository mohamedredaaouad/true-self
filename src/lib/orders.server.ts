import { createServerFn } from "@tanstack/react-start";

export interface OrderItem {
  productId: number;
  name: string;
  quote: string;
  size: string;
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

// Helper to read orders safely on the server
async function readOrders(): Promise<Order[]> {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const ordersFilePath = path.resolve("./orders.json");
    
    if (!fs.existsSync(ordersFilePath)) {
      return [];
    }
    const content = fs.readFileSync(ordersFilePath, "utf8");
    return JSON.parse(content || "[]");
  } catch (err) {
    console.error("Error reading orders file:", err);
    return [];
  }
}

// Helper to write orders safely on the server
async function writeOrders(orders: Order[]) {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const ordersFilePath = path.resolve("./orders.json");
    
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing orders file:", err);
  }
}

// 1. Server Action to Create a New Order
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

// 2. Server Action to Get All Orders
export const getOrdersFn = createServerFn({ method: "GET" })
  .handler(async () => {
    console.log("[Order Server] Fetching all orders");
    return await readOrders();
  });

// 3. Server Action to Update Order Status
export const updateOrderStatusFn = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string; status: Order["status"] }) => data)
  .handler(async ({ data }) => {
    const orders = await readOrders();
    const orderIndex = orders.findIndex((o) => o.id === data.id);
    
    if (orderIndex === -1) {
      throw new Error(`Order ${data.id} not found`);
    }
    
    orders[orderIndex].status = data.status;
    await writeOrders(orders);
    
    console.log(`[Order Server] Updated status of order ${data.id} to ${data.status}`);
    return orders[orderIndex];
  });
