import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as useLanguage, e as useCart, L as Logo } from "./router-MTDi5Sqt.mjs";
function Nav({ wishlistCount = 0, onOpenWishlist }) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { cartCount, setCartOpen } = useCart();
  const [cartAnimate, setCartAnimate] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (cartCount > 0) {
      setCartAnimate(true);
      const timer = setTimeout(() => setCartAnimate(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);
  const navLinkClass = "relative py-1 hover:text-foreground text-foreground/80 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xs" : "bg-gradient-to-b from-background/95 via-background/60 to-transparent pb-6"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:opacity-85 transition-opacity py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Logo,
          {
            layout: "horizontal",
            symbolClassName: "w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[28px] md:h-[28px]",
            textSize: "text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-brand"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6 lg:gap-8 text-[10px] sm:text-xs tracking-brand uppercase font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", search: { category: "all" }, className: navLinkClass, children: t("category.all") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", search: { category: "tshirt" }, className: navLinkClass, children: t("category.tshirt") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", search: { category: "sweatshirt" }, className: navLinkClass, children: t("category.sweatshirt") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", search: { category: "hoodie" }, className: navLinkClass, children: t("category.hoodie") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", activeProps: { className: "underline underline-offset-4 font-semibold text-foreground" }, className: navLinkClass, children: t("story.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "brand-symbol", className: navLinkClass, children: t("nav.philosophy") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 text-[10px] sm:text-xs tracking-brand uppercase text-foreground/90 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 border-r border-border/60 pr-5 select-none font-mono", children: ["fr", "en", "ar"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setLanguage(lang),
              className: `text-[9px] font-semibold tracking-normal transition-all duration-300 hover:text-foreground ${language === lang ? "text-foreground underline underline-offset-4 font-bold scale-105" : "text-muted-foreground hover:text-foreground/80"}`,
              children: lang.toUpperCase()
            },
            lang
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#collection", className: "hidden sm:inline-block hover:text-foreground/60 transition-colors", children: t("nav.search") }),
          onOpenWishlist && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onOpenWishlist,
              className: "hover:text-foreground/60 transition-colors font-mono font-medium cursor-pointer",
              children: [
                t("wishlist.title"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
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
              className: "relative hover:text-foreground/60 transition-colors font-mono font-medium flex items-center gap-1 cursor-pointer",
              "aria-label": "Open Cart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("nav.bag") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `inline-block text-muted-foreground font-normal transition-transform duration-300 ${cartAnimate ? "animate-badge-pop text-foreground font-semibold" : ""}`,
                    children: [
                      "(",
                      cartCount,
                      ")"
                    ]
                  }
                )
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
  duration = 900,
  className = "",
  variant = "fade-up",
  threshold = 0.15
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  const [prefersReduced, setPrefersReduced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReduced(mediaQuery.matches);
      if (mediaQuery.matches) {
        setVisible(true);
        return;
      }
    }
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
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  if (prefersReduced) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
  }
  let initialTransform = "translateY(24px)";
  let targetTransform = "translateY(0)";
  if (variant === "scale") {
    initialTransform = "scale(0.96)";
    targetTransform = "scale(1)";
  } else if (variant === "fade") {
    initialTransform = "none";
    targetTransform = "none";
  } else if (variant === "mask") {
    initialTransform = "translateY(100%)";
    targetTransform = "translateY(0%)";
  }
  const baseStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? targetTransform : initialTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: visible ? "auto" : "opacity, transform"
  };
  if (variant === "mask") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: baseStyle, children }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, style: baseStyle, children });
}
export {
  Nav as N,
  Reveal as R
};
