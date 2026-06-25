import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useLanguage, u as useCart } from "./router-D8QfgQtv.mjs";
import { L as Logo } from "./BrandLogo-Be2G5YYH.mjs";
function Nav({ wishlistCount = 0, onOpenWishlist }) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { cartCount, setCartOpen } = useCart();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:opacity-85 transition-opacity py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Logo,
          {
            layout: "horizontal",
            symbolClassName: "w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[28px] md:h-[28px]",
            textSize: "text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-brand"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10 text-xs tracking-brand uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", className: "hover:opacity-60 transition-opacity", children: t("nav.shop") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", activeProps: { className: "underline underline-offset-4 font-semibold text-foreground" }, className: "hover:opacity-60 transition-opacity", children: t("story.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "philosophy", className: "hover:opacity-60 transition-opacity", children: t("nav.philosophy") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "lookbook", className: "hover:opacity-60 transition-opacity", children: t("nav.lookbook") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "journal", className: "hover:opacity-60 transition-opacity", children: t("nav.journal") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 text-xs tracking-brand uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 border-r border-border/60 pr-5 select-none font-mono", children: ["fr", "en", "ar"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setLanguage(lang),
              className: `text-[9px] font-semibold tracking-normal transition-all duration-300 hover:text-foreground ${language === lang ? "text-foreground underline underline-offset-4 font-bold scale-105" : "text-muted-foreground opacity-70"}`,
              children: lang.toUpperCase()
            },
            lang
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden sm:block hover:opacity-60 transition-opacity", children: t("nav.search") }),
          onOpenWishlist && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onOpenWishlist,
              className: "hover:opacity-60 transition-opacity font-mono font-medium",
              children: [
                t("wishlist.title"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "(",
                  wishlistCount,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCartOpen(true),
              className: "relative hover:opacity-60 transition-opacity font-mono font-medium",
              children: [
                t("nav.bag"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "(",
                  cartCount,
                  ")"
                ] })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1.1s var(--ease-soft) ${delay}ms, transform 1.1s var(--ease-soft) ${delay}ms`
      },
      children
    }
  );
}
export {
  Nav as N,
  Reveal as R
};
