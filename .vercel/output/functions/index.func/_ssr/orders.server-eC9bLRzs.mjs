import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-Bspg8XK9.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const createOrderFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("0b1d791ec81a3d0a4252766c5f213de9e95dc8deb15e746e4a8369e5de20e062"));
const getOrdersFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4da6ed92fc94ebf6c0a8932f19c99ab60a000695af9dbcc44b5ac25671f83b7a"));
const updateOrderStatusFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("ff7cbb0d15363131f77420f707143b0cf9e674ee544c429c38510ff1cf368a3f"));
export {
  createOrderFn as c,
  getOrdersFn as g,
  updateOrderStatusFn as u
};
