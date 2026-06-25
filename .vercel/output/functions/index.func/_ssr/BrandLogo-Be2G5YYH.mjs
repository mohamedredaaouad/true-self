import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Symbol$1({ size = 24, className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 100 100",
      width: size,
      height: size,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `inline-block align-middle transition-transform duration-700 group/symbol ${className}`,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "50",
            cy: "55",
            r: "22",
            stroke: "currentColor",
            strokeWidth: "2.5",
            className: "transition-opacity duration-700 group-hover/symbol:opacity-80"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "72",
            cy: "33",
            r: "5.5",
            fill: "currentColor",
            className: "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-[72px_33px] group-hover/symbol:scale-130 group-hover/symbol:translate-x-1 group-hover/symbol:-translate-y-1"
          }
        )
      ]
    }
  );
}
function Logo({
  layout = "horizontal",
  symbolSize,
  symbolClassName,
  textSize,
  taglineSize,
  className = "",
  showTagline = true
}) {
  if (layout === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-3 select-none group/symbol cursor-pointer ${className}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Symbol$1,
        {
          size: symbolSize,
          className: `${symbolClassName || ""}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display tracking-[0.15em] text-foreground uppercase transition-colors duration-700 group-hover/symbol:opacity-80 ${textSize || "text-sm sm:text-base"}`, children: "TRUE SELF" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-center text-center gap-4 select-none group/symbol cursor-pointer ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Symbol$1,
      {
        size: symbolSize || 64,
        className: `${symbolClassName || ""}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display tracking-[0.25em] text-foreground uppercase block font-medium transition-colors duration-700 group-hover/symbol:opacity-80 ${textSize || "text-2xl md:text-3xl"}`, children: "TRUE SELF" }),
      showTagline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono tracking-[0.3em] text-muted-foreground uppercase block leading-none transition-colors duration-700 group-hover/symbol:opacity-80 ${taglineSize || "text-[9px] md:text-[10px]"}`, children: "LIVE FOR YOURSELF." })
    ] })
  ] });
}
export {
  Logo as L,
  Symbol$1 as S
};
