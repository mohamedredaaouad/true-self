import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CkO9YZ4x.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
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
function Symbol$1({ size = 24, className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 100 100",
      width: size,
      height: size,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `inline-block align-middle transition-transform duration-500 hover:rotate-12 ${className}`,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "50",
            cy: "55",
            r: "22",
            stroke: "currentColor",
            strokeWidth: "2.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "72",
            cy: "33",
            r: "5.5",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Logo({
  layout = "horizontal",
  symbolSize,
  textSize,
  taglineSize,
  className = "",
  showTagline = true
}) {
  if (layout === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-3 select-none ${className}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Symbol$1,
        {
          size: symbolSize || 18,
          className: "text-foreground transition-transform duration-500 hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display tracking-[0.15em] text-foreground uppercase ${textSize || "text-sm sm:text-base"}`, children: "TRUE SELF" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-center text-center gap-4 select-none ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Symbol$1,
      {
        size: symbolSize || 64,
        className: "text-foreground transition-transform duration-700 hover:scale-105"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display tracking-[0.25em] text-foreground uppercase block font-medium ${textSize || "text-2xl md:text-3xl"}`, children: "TRUE SELF" }),
      showTagline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono tracking-[0.3em] text-muted-foreground uppercase block leading-none ${taglineSize || "text-[9px] md:text-[10px]"}`, children: "LIVE FOR YOURSELF." })
    ] })
  ] });
}
export {
  Logo as L,
  Symbol$1 as S,
  createOrderFn as c,
  getOrdersFn as g,
  updateOrderStatusFn as u
};
