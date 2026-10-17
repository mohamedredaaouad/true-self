import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useLanguage } from "./router-B0sL9v5M.mjs";
import { g as Ruler, X, a as Check } from "../_libs/lucide-react.mjs";
function SizeGuideModal({ isOpen, onClose }) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [unit, setUnit] = reactExports.useState("cm");
  if (!isOpen) return null;
  const multiplier = unit === "inch" ? 0.3937 : 1;
  const round = (val) => unit === "inch" ? (val * multiplier).toFixed(1) : Math.round(val);
  const sizeTable = [
    { size: "S", chest: 108, length: 70, shoulder: 52, sleeve: 22 },
    { size: "M", chest: 114, length: 73, shoulder: 54, sleeve: 23 },
    { size: "L", chest: 120, length: 76, shoulder: 56, sleeve: 24 },
    { size: "XL", chest: 126, length: 79, shoulder: 58, sleeve: 25 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[150] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade", dir: isAr ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        onClick: onClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-xl bg-background border border-border/70 rounded-xs shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { size: 18, className: "text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-light italic", children: isAr ? "دليل المقاسات الرسمية" : "Guide des Tailles — TRUE SELF®" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "p-1.5 hover:opacity-70 transition-opacity border border-border/40 rounded-full cursor-pointer",
            "aria-label": "Fermer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/15 border border-border/40 p-4 rounded-xs mb-6 text-xs font-mono text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground block mb-1 uppercase tracking-wider text-[9px]", children: [
          "// ",
          isAr ? "القصة المميزة" : "COUPE SIGNATURE : OVERSIZED BOXY FIT"
        ] }),
        isAr ? "قطعنا مصممة بقصة واسعة ومريحة (Oversized). للحصول على مظهر الشارع العصري الواسع، اختر مقاسك المعتاد. لمظهر كلاسيكي عادي، اختر مقاساً أصغر." : "Nos pièces sont taillées dans une coupe 'Oversized Boxy' haut de gamme. Pour un style streetwear ample et décontracté, prenez votre taille habituelle. Pour un fit plus cintré, optez pour la taille inférieure."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4 font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-[10px] uppercase tracking-widest", children: isAr ? "جدول القياسات" : "Tableau de mesures" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-border/60 rounded-2xs overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setUnit("cm"),
              className: `px-3 py-1 text-[10px] transition-colors ${unit === "cm" ? "bg-foreground text-background font-bold" : "hover:bg-secondary/20"}`,
              children: "CM"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setUnit("inch"),
              className: `px-3 py-1 text-[10px] transition-colors ${unit === "inch" ? "bg-foreground text-background font-bold" : "hover:bg-secondary/20"}`,
              children: "INCHES"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto border border-border/40 rounded-xs mb-6 font-mono text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-center divide-y divide-border/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/20 text-[9px] uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 text-start", children: isAr ? "المقاس" : "Taille" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3", children: isAr ? "عرض الصدر" : "Poitrine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3", children: isAr ? "الطول" : "Longueur" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3", children: isAr ? "الأكتاف" : "Épaules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3", children: isAr ? "الأكمام" : "Manches" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/20", children: sizeTable.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-start font-bold text-foreground", children: row.size }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 text-muted-foreground", children: [
            round(row.chest),
            " ",
            unit
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 text-muted-foreground", children: [
            round(row.length),
            " ",
            unit
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 text-muted-foreground", children: [
            round(row.shoulder),
            " ",
            unit
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 text-muted-foreground", children: [
            round(row.sleeve),
            " ",
            unit
          ] })
        ] }, row.size)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-mono text-muted-foreground border-t border-border/30 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, className: "text-[#25D366]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "تبديل المقاس متوفر وسهل" : "Échange de taille facile et rapide" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, className: "text-[#25D366]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "قطن 100% ممتاز مضاد للانكماش" : "100% Coton lourd prélavé anti-rétrécissement" })
        ] })
      ] })
    ] })
  ] });
}
const p1Front = "/assets/product-1-front-DsK_FXw0.png";
const p1Back = "/assets/product-1-back-bpp-qDHF.png";
const p2Front = "/assets/product-2-front-CG1KdDTI.png";
const p2Back = "/assets/product-2-back-CubsBKtg.png";
const p3Front = "/assets/product-3-front-BfvZP2AU.png";
const p3Back = "/assets/product-3-back-nJVkdERi.png";
const p4Front = "/assets/product-4-front-BbYN-clV.png";
const p4Back = "/assets/product-4-back-B7xUtYnz.png";
const p5Front = "/assets/product-5-front-DQ08Usol.png";
const p5Back = "/assets/product-5-back-CqTgOs4w.png";
const p6Front = "/assets/product-6-front-Ce8E_T8j.png";
const p6Back = "/assets/product-6-back-CFfaBhD4.png";
const p7Front = "/assets/product-7-front-BRxVIy_C.png";
const p7Back = "/assets/product-7-back-BrPywBPn.png";
const p8Front = "/assets/product-8-front-BWaUSivq.png";
const p8Back = "/assets/product-8-back-CnR0q2Ze.png";
export {
  SizeGuideModal as S,
  p1Front as a,
  p2Back as b,
  p2Front as c,
  p3Back as d,
  p3Front as e,
  p4Back as f,
  p4Front as g,
  p5Back as h,
  p5Front as i,
  p6Back as j,
  p6Front as k,
  p7Back as l,
  p7Front as m,
  p8Back as n,
  p8Front as o,
  p1Back as p
};
