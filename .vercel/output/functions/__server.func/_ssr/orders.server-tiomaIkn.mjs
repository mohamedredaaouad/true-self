import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CCDptq_C.mjs";
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
const adminLoginFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("0b5d8222b5c5a5ff0f3803ede304ca52c9c10930a4565e2a4f72a783bdc1e4b6"));
const adminLogoutFn = createServerFn({
  method: "POST"
}).handler(createSsrRpc("ad2d1adea7cacd7aadc7949f303d1d45d753a0b6af4dfbc011b658dbfec24060"));
const checkAdminAuthFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("04ab80446e4cad863179eef6336b29a74d685340ba866db7e3333a7019b456bc"));
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
  adminLoginFn as a,
  adminLogoutFn as b,
  checkAdminAuthFn as c,
  createOrderFn as d,
  getOrdersFn as g,
  updateOrderStatusFn as u
};
