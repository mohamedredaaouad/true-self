import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-BWodeRAh.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
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
async function readOrders() {
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
    console.error("Error reading orders file:", err);
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
    console.error("Error writing orders file:", err);
  }
}
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
  const orders = await readOrders();
  const newOrder = {
    ...data,
    id: Math.random().toString(36).substring(2, 11).toUpperCase(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    status: "New"
  };
  orders.push(newOrder);
  await writeOrders(orders);
  console.log(`[Order Server] Saved new order ${newOrder.id}`);
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
  console.log("[Order Server] Fetching all orders");
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
export {
  createOrderFn_createServerFn_handler,
  getOrdersFn_createServerFn_handler,
  updateOrderStatusFn_createServerFn_handler
};
