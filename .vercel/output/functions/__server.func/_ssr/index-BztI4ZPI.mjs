import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Nav, R as Reveal } from "./Reveal-BGTdLwmE.mjs";
import { f as useLanguage, R as Route$1, e as useCart, S as Symbol$1, L as Logo } from "./router-lR-N5aK3.mjs";
import { p as p1Back, a as p1Front, b as p2Back, c as p2Front, d as p3Back, e as p3Front, f as p4Back, g as p4Front, h as p6Back, i as p6Front, j as p7Back, k as p7Front, S as SizeGuideModal } from "./product-7-back-DQQQUtAO.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import "../_libs/seroval.mjs";
import { X, k as Ruler, Z as Zap, l as ShoppingBag, T as Trash2, E as Eye, A as ArrowUpRight, g as Pause, h as Play, c as ChevronRight, b as ChevronLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-C98cEizI.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
const AUTOPLAY_INTERVAL = 6e3;
function CinematicCarousel({
  products,
  onOpenProduct,
  language,
  t
}) {
  const isAr = language === "ar";
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const [scrollSnaps, setScrollSnaps] = reactExports.useState([]);
  const [isPlaying, setIsPlaying] = reactExports.useState(true);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = reactExports.useState(false);
  const [hoveredThumbId, setHoveredThumbId] = reactExports.useState(null);
  const progressTimerRef = reactExports.useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 35,
    skipSnaps: false,
    direction: isAr ? "rtl" : "ltr"
  });
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) setIsPlaying(false);
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);
  const onSelect = reactExports.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  reactExports.useEffect(() => {
    if (!emblaApi || !isPlaying || isHovered || prefersReducedMotion) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
    progressTimerRef.current = timer;
    return () => clearInterval(timer);
  }, [emblaApi, isPlaying, isHovered, prefersReducedMotion, selectedIndex]);
  const scrollPrev = reactExports.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = reactExports.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = reactExports.useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        isAr ? scrollNext() : scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        isAr ? scrollPrev() : scrollNext();
      }
    },
    [scrollPrev, scrollNext, isAr]
  );
  if (!products || products.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full overflow-hidden select-none",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onKeyDown: handleKeyDown,
      tabIndex: 0,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": "TRUE SELF® Editorial Campaign Carousel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: emblaRef, className: "overflow-hidden cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: products.map((product, idx) => {
          const isActive = selectedIndex === idx;
          const campaignImage = product.campaignImg || product.imgBack || product.imgFront;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-[0_0_100%] min-w-0 relative",
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${idx + 1} of ${products.length} - ${t(`product.name.${product.key}`)}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] w-full overflow-hidden flex flex-col justify-end bg-secondary/30", children: [
                product.campaignVideo && !prefersReducedMotion ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "video",
                  {
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    preload: "metadata",
                    poster: campaignImage,
                    className: "absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: product.campaignVideo, type: "video/mp4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: campaignImage,
                          alt: t(`product.name.${product.key}`),
                          className: "h-full w-full object-cover object-[center_35%]"
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: campaignImage,
                    alt: `TRUE SELF® Campaign — ${t(`product.name.${product.key}`)}`,
                    loading: idx === 0 ? "eager" : "lazy",
                    fetchPriority: idx === 0 ? "high" : "auto",
                    className: `absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "scale-100 opacity-100" : "scale-[1.03] opacity-80"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `absolute inset-0 pointer-events-none transition-opacity duration-700 ${isAr ? "bg-gradient-to-t md:bg-gradient-to-l from-background/95 via-background/65 md:via-background/40 to-transparent" : "bg-gradient-to-t md:bg-gradient-to-r from-background/95 via-background/65 md:via-background/40 to-transparent"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/70 to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-12 py-12 md:py-20 flex flex-col md:flex-row items-end md:items-end justify-between gap-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl text-start space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-brand uppercase text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-2xs bg-foreground text-background font-semibold", children: [
                        "0",
                        idx + 1,
                        " // ",
                        t("collection.featured")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: t(`category.${product.category}`) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: t(product.tag) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: `font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[5rem] text-foreground italic font-light tracking-tight leading-[0.98] transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                        children: t(`product.quote.${product.key}`)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1 border-t border-border/30 max-w-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] sm:text-xs uppercase tracking-brand text-muted-foreground", children: t(`product.name.${product.key}`) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-foreground/85 font-light leading-relaxed line-clamp-2 sm:line-clamp-3", children: t(`product.story.${product.key}`) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center gap-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xl sm:text-2xl font-bold text-foreground", children: product.price }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", title: "Color options", children: product.colors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => onOpenProduct(product, color.name),
                          className: "group/color relative p-0.5 rounded-full border border-border/60 hover:border-foreground transition-all duration-200 cursor-pointer",
                          title: color.name,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "w-3.5 h-3.5 rounded-full block border border-black/10 shadow-xs",
                              style: { backgroundColor: color.hex }
                            }
                          )
                        },
                        color.name
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 flex flex-wrap items-center gap-4 font-mono", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => onOpenProduct(product),
                          className: "border border-foreground bg-foreground text-background px-7 py-3 text-[10px] sm:text-xs tracking-brand uppercase font-bold hover:bg-transparent hover:text-foreground transition-all duration-300 rounded-xs shadow-soft flex items-center gap-2 cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "اكتشف القطعة" : language === "fr" ? "Découvrir la pièce" : "Discover the piece" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: `/product/${product.id}`,
                          className: "inline-flex items-center gap-1.5 text-[10px] sm:text-xs tracking-brand uppercase text-foreground/80 hover:text-foreground transition-colors underline underline-offset-4 py-2 px-1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "التفاصيل الكاملة" : language === "fr" ? "Fiche produit" : "Full details" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 13 })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "hidden sm:block shrink-0 cursor-pointer text-start",
                      onClick: () => onOpenProduct(product),
                      onMouseEnter: () => setHoveredThumbId(product.id),
                      onMouseLeave: () => setHoveredThumbId(null),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-36 lg:w-44 aspect-[3/4] bg-background/90 backdrop-blur-md border border-border/60 rounded-xs p-2 shadow-card transition-all duration-500 hover:scale-105 hover:border-foreground/80 group/thumb", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full overflow-hidden rounded-2xs bg-secondary/30", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: product.imgFront,
                              alt: `${t(`product.name.${product.key}`)} front`,
                              className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredThumbId === product.id ? "opacity-0" : "opacity-100"}`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: product.imgBack,
                              alt: `${t(`product.name.${product.key}`)} back`,
                              className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredThumbId === product.id ? "opacity-100" : "opacity-0"}`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1.5 inset-x-1.5 text-center bg-background/85 backdrop-blur-2xs py-0.5 text-[7px] font-mono tracking-widest uppercase text-foreground/80 pointer-events-none border border-border/30", children: hoveredThumbId === product.id ? "DOS" : "DEVANT" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex justify-between items-center text-[7px] font-mono text-muted-foreground uppercase px-0.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.category }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SER.100" })
                        ] })
                      ] })
                    }
                  )
                ] })
              ] })
            },
            product.id
          );
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-6 right-6 lg:left-12 lg:right-12 z-20 flex items-center justify-between text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: scrollSnaps.map((_, snapIdx) => {
              const isCurrent = selectedIndex === snapIdx;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => scrollTo(snapIdx),
                  "aria-label": `Go to slide ${snapIdx + 1}`,
                  className: "relative py-2 px-0.5 group/bar cursor-pointer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `h-[2px] transition-all duration-500 rounded-full ${isCurrent ? "w-8 sm:w-12 bg-foreground" : "w-3 sm:w-4 bg-foreground/25 group-hover/bar:bg-foreground/50"}`
                    }
                  )
                },
                snapIdx
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground uppercase", children: [
              "0",
              selectedIndex + 1,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "/" }),
              " 0",
              products.length
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono", children: [
            !prefersReducedMotion && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsPlaying(!isPlaying),
                className: "p-2 sm:p-2.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-300 text-foreground cursor-pointer shadow-xs",
                title: isPlaying ? "Pause autoplay" : "Play autoplay",
                "aria-label": isPlaying ? "Pause autoplay" : "Play autoplay",
                children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { size: 11 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 11 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: isAr ? scrollNext : scrollPrev,
                className: "p-2 sm:p-2.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-300 text-foreground cursor-pointer shadow-xs",
                title: "Previous slide",
                "aria-label": "Previous slide",
                children: isAr ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 13 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: isAr ? scrollPrev : scrollNext,
                className: "p-2 sm:p-2.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-300 text-foreground cursor-pointer shadow-xs",
                title: "Next slide",
                "aria-label": "Next slide",
                children: isAr ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13 })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const c1 = "/assets/campaign-1-real-perfect-tqoibsKY.png";
const c2 = "/assets/campaign-2-be-real-CwQAm26-.png";
const c3 = "/assets/campaign-3-not-fit-in-BZ1lYk1u.png";
const c4 = "/assets/campaign-4-their-opinion-CRE_u-GJ.png";
const cSunset = "/assets/hero-coastal-sunset-D2NpmeX9.jpg";
const heroPoster = "/assets/hero-coastal-sunset-D2NpmeX9.jpg";
const philosophy = "/assets/philosophy-IBsmd_ue.jpg";
const g1 = "/assets/gallery-1-BmHPx37f.png";
const g2 = "/assets/gallery-2-CuvGBdm0.png";
const g3 = "/assets/gallery-3-CBFiNZkc.png";
const g4 = "/assets/gallery-4-Cri2Y3kI.png";
const cinematic = "/assets/cinematic_interlude-BCwM1kPs.png";
function Index() {
  const {
    t,
    language
  } = useLanguage();
  const isAr = language === "ar";
  const searchParams = Route$1.useSearch();
  const {
    cartItems,
    addToCart,
    buyNow,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartCount,
    cartOpen,
    setCartOpen
  } = useCart();
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const [hoveredProduct, setHoveredProduct] = reactExports.useState(null);
  const [selectedSize, setSelectedSize] = reactExports.useState("");
  const [sizeGuideOpen, setSizeGuideOpen] = reactExports.useState(false);
  const [selectedColor, setSelectedColor] = reactExports.useState("");
  const [activeQuickViewImage, setActiveQuickViewImage] = reactExports.useState("");
  const [lightboxImage, setLightboxImage] = reactExports.useState(null);
  const [zoomStyle, setZoomStyle] = reactExports.useState({});
  const [activeTab, setActiveTab] = reactExports.useState("all");
  reactExports.useEffect(() => {
    if (searchParams?.category && ["all", "tshirt", "sweatshirt", "hoodie"].includes(searchParams.category)) {
      setActiveTab(searchParams.category);
    }
  }, [searchParams?.category]);
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [recentlyViewed, setRecentlyViewed] = reactExports.useState([]);
  const [wishlistOpen, setWishlistOpen] = reactExports.useState(false);
  const [showScrollTop, setShowScrollTop] = reactExports.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);
  const products = [{
    id: 1,
    key: "1",
    category: "hoodie",
    price: "650 MAD",
    imgFront: p1Front,
    imgBack: p1Back,
    campaignImg: c1,
    tag: "collection.bestsellers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Charcoal",
      hex: "#2C2C2A"
    }, {
      name: "Cream",
      hex: "#F9F6F0"
    }],
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    philosophy: "authenticity"
  }, {
    id: 2,
    key: "2",
    category: "tshirt",
    price: "350 MAD",
    imgFront: p2Front,
    imgBack: p2Back,
    campaignImg: c2,
    tag: "collection.new",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Cream",
      hex: "#F9F6F0"
    }, {
      name: "Olive",
      hex: "#4F5243"
    }],
    isFeatured: false,
    isBestSeller: false,
    isNew: true,
    philosophy: "authenticity"
  }, {
    id: 3,
    key: "3",
    category: "sweatshirt",
    price: "550 MAD",
    imgFront: p3Front,
    imgBack: p3Back,
    campaignImg: c3,
    tag: "collection.new",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Olive",
      hex: "#4F5243"
    }, {
      name: "Charcoal",
      hex: "#2C2C2A"
    }],
    isFeatured: false,
    isBestSeller: false,
    isNew: true,
    philosophy: "confidence"
  }, {
    id: 4,
    key: "4",
    category: "tshirt",
    price: "350 MAD",
    imgFront: p4Front,
    imgBack: p4Back,
    campaignImg: c4,
    tag: "collection.bestsellers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Charcoal",
      hex: "#2C2C2A"
    }, {
      name: "Cream",
      hex: "#F9F6F0"
    }],
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    philosophy: "freedom"
  }, {
    id: 5,
    key: "5",
    category: "hoodie",
    price: "650 MAD",
    imgFront: p1Front,
    imgBack: p1Back,
    tag: "collection.new",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Charcoal",
      hex: "#2C2C2A"
    }, {
      name: "Beige",
      hex: "#D8D0C5"
    }],
    isFeatured: false,
    isBestSeller: false,
    isNew: true,
    philosophy: "freedom"
  }, {
    id: 6,
    key: "6",
    category: "hoodie",
    price: "650 MAD",
    imgFront: p6Front,
    imgBack: p6Back,
    tag: "collection.bestsellers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Cream",
      hex: "#F9F6F0"
    }, {
      name: "Charcoal",
      hex: "#2C2C2A"
    }],
    isFeatured: false,
    isBestSeller: true,
    isNew: false,
    philosophy: "peace"
  }, {
    id: 7,
    key: "7",
    category: "sweatshirt",
    price: "550 MAD",
    imgFront: p7Front,
    imgBack: p7Back,
    tag: "collection.new",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Olive",
      hex: "#4F5243"
    }, {
      name: "Cream",
      hex: "#F9F6F0"
    }],
    isFeatured: true,
    isBestSeller: false,
    isNew: true,
    philosophy: "peace"
  }, {
    id: 8,
    key: "8",
    category: "tshirt",
    price: "350 MAD",
    imgFront: p2Front,
    imgBack: p2Back,
    campaignImg: cSunset,
    tag: "collection.bestsellers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Cream",
      hex: "#F9F6F0"
    }, {
      name: "Olive",
      hex: "#4F5243"
    }],
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    philosophy: "confidence"
  }];
  const marqueePhrases = [t("nav.bereal").toLowerCase(), isAr ? "احمِ سلامك." : language === "fr" ? "protégez votre paix." : "protect your peace.", isAr ? "لسنا للإبهار." : language === "fr" ? "pas là pour impressionner." : "not here to impress.", isAr ? "السلام فوق الضجيج." : language === "fr" ? "la paix sur le bruit." : "peace over noise.", isAr ? "عِش لنفسك." : language === "fr" ? "vivez pour vous-même." : "live for yourself.", isAr ? "حقيقي جداً للتزييف." : language === "fr" ? "trop vrai pour faire semblant." : "too real to fake it.", "true self.", isAr ? "اختر الهدوء." : language === "fr" ? "choisissez le calme." : "choose calm."];
  const communityQuotes = [{
    author: isAr ? "أنيس، 24 سنة، الدار البيضاء" : "Anis, 24, Casablanca",
    quote: isAr ? "«قضيت سنوات في دراسة تخصص كرهته فقط لأن هذا ما توقعه والداي مني. اليوم الذي توقفت فيه عن التمثيل كان اليوم الذي بدأت فيه العيش فعلاً.»" : language === "fr" ? "« J'ai passé des années à étudier un domaine que je détestais simplement parce que c'est ce que mes parents attendaient de moi. Le jour où j'ai arrêté de jouer un rôle est le jour où j'ai commencé à vivre. »" : "“I spent years studying a field I hated simply because it was what my parents expected of me. The day I stopped performing was the day I started living.”"
  }, {
    author: isAr ? "سارة، 21 سنة، طنجة" : "Sarah, 21, Tangier",
    quote: isAr ? "«الجميع على وسائل التواصل الاجتماعي يرتدون أقنعة، ويعرضون حياتهم المثالية المصطنعة. نحن بحاجة إلى مساحات تذكرنا بأن نكون حقيقيين ونبسط الأمور.»" : language === "fr" ? "« Tout le monde sur les réseaux sociaux porte un masque et affiche une vie parfaite. Nous avons besoin de rappels physiques pour rester réels et respirer. »" : "“Everyone on social media is wearing a mask, showing a perfect life. We need physical reminders to just stay real and breathe.”"
  }, {
    author: isAr ? "يوسف، 27 سنة، مراكش" : "Youssef, 27, Marrakech",
    quote: isAr ? "«السلام الداخلي ليس شيئاً تبحث عنه؛ بل هو شيء تحميه بنشاط. يجب أن تتعلم كيف تقول لا لتوقعات الآخرين لتبدأ في سماع نفسك.»" : language === "fr" ? "« La paix n'est pas quelque chose que l'on trouve ; c'est quelque chose que l'on protège. Il faut apprendre à dire non aux attentes des autres pour s'entendre. »" : "“Peace isn't something you find; it's something you actively protect. You have to learn to say no to other people's expectations to hear yourself.”"
  }];
  reactExports.useEffect(() => {
    if (selectedProduct || cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct, cartOpen]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedWishlist = localStorage.getItem("ts_wishlist");
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
        const savedRecent = localStorage.getItem("ts_recently_viewed");
        if (savedRecent) setRecentlyViewed(JSON.parse(savedRecent));
      } catch (err) {
        console.error("Error loading localStorage items:", err);
      }
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ts_wishlist", JSON.stringify(wishlist));
      } catch (err) {
        console.error("Error saving wishlist:", err);
      }
    }
  }, [wishlist]);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ts_recently_viewed", JSON.stringify(recentlyViewed));
      } catch (err) {
        console.error("Error saving recently viewed:", err);
      }
    }
  }, [recentlyViewed]);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openProduct = (p, initialColor) => {
    setSelectedProduct(p);
    setSelectedSize(p.sizes[0] || "");
    setSelectedColor(initialColor || p.colors[0]?.name || "");
    setActiveQuickViewImage(p.imgFront);
    setZoomStyle({});
    setIsAddedSuccess(false);
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== p.id);
      return [p.id, ...filtered].slice(0, 3);
    });
  };
  const toggleWishlist = (productId) => {
    setWishlist((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]);
  };
  const handleMouseMove = (e) => {
    const {
      left,
      top,
      width,
      height
    } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(1.8)"
    });
  };
  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center"
    });
  };
  const handleAddToCart = () => {
    if (!selectedProduct || !selectedSize || !selectedColor) return;
    addToCart({
      productId: selectedProduct.id,
      name: t(`product.name.${selectedProduct.key}`),
      quote: t(`product.quote.${selectedProduct.key}`),
      image: selectedProduct.imgFront,
      size: selectedSize,
      color: selectedColor,
      price: parseFloat(selectedProduct.price.replace(" MAD", ""))
    });
    setSelectedProduct(null);
  };
  const handleBuyNow = () => {
    if (!selectedProduct || !selectedSize || !selectedColor) return;
    buyNow({
      productId: selectedProduct.id,
      name: t(`product.name.${selectedProduct.key}`),
      quote: t(`product.quote.${selectedProduct.key}`),
      image: selectedProduct.imgFront,
      size: selectedSize,
      color: selectedColor,
      price: parseFloat(selectedProduct.price.replace(" MAD", ""))
    });
    setSelectedProduct(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "bg-background text-foreground overflow-x-hidden", dir: isAr ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { wishlistCount: wishlist.length, onOpenWishlist: () => setWishlistOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen w-full overflow-hidden flex flex-col justify-end", children: [
      prefersReducedMotion ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroPoster, alt: "TRUE SELF® — Two models wearing authentic streetwear by the Moroccan Atlantic coast at sunset", width: 1600, height: 1920, fetchPriority: "high", className: "absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("video", { autoPlay: true, muted: true, loop: true, playsInline: true, preload: "auto", poster: heroPoster, className: "absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none hero-video", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/videos/hero-cinematic.mp4", type: "video/mp4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/videos/hero-cinematic.webm", type: "video/webm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroPoster, alt: "TRUE SELF® — Two models wearing authentic streetwear by the Moroccan Atlantic coast at sunset", width: 1600, height: 1920, fetchPriority: "high", className: "absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/35 via-background/20 to-background/95 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-20 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 32, animated: true, className: "text-foreground shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-px bg-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-fade text-[10px] sm:text-xs tracking-brand uppercase text-foreground/80 font-mono", children: t("hero.vol") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 font-display text-[15vw] leading-[0.88] sm:text-[11vw] lg:text-[8rem] text-balance", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-mask-up", children: "LIVE FOR" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-mask-up delay-1", children: "YOURSELF." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block mt-4 font-sans text-lg md:text-2xl font-light tracking-wide text-foreground/90 uppercase animate-fade delay-3", children: [
            "TRUE SELF",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: "®" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-rise delay-2 mt-8 flex flex-col sm:flex-row gap-8 sm:items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm leading-relaxed text-foreground/80 font-light text-balance", children: t("hero.desc") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 self-start sm:self-auto font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#collection", className: "border border-foreground bg-foreground text-background px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs shadow-xs", children: t("hero.shop") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#story", className: "border border-foreground/45 bg-background/20 backdrop-blur px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-foreground hover:text-background transition-all duration-300 font-semibold rounded-xs shadow-xs text-center", children: t("story.title") })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 right-6 lg:right-12 z-10 flex flex-col items-center gap-2 pointer-events-none select-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono tracking-[0.25em] text-foreground/60 uppercase", children: "SCROLL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-9 bg-foreground/20 overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-foreground animate-scroll-pulse" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "featured-products", className: "bg-background text-foreground py-16 sm:py-24 border-b border-border/40 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 mb-8 sm:mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "mask", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start border-b border-border/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
            t("collection.featured"),
            " // ",
            t("hero.vol").split(" — ")[0]
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl text-balance max-w-2xl", children: language === "fr" ? "Campagne Éditoriale" : language === "ar" ? "حملة الموسم السينمائية" : "Editorial Campaign" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-brand", children: "VOLUME 01 // ATLANTIC HORIZONS" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CinematicCarousel, { products: products.filter((p) => p.campaignImg), onOpenProduct: (p, color) => openProduct(p, color), language, t })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-hidden": true, className: "border-y border-border/80 bg-background overflow-hidden py-6 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex whitespace-nowrap animate-marquee ${isAr ? "flex-row-reverse" : ""}`, children: [...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((phrase, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl md:text-4xl italic px-10 text-foreground/80 font-light", children: [
      phrase,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic text-foreground/35 mx-3", children: "✦" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "story", className: "theme-dark bg-background text-foreground py-20 lg:py-28 relative overflow-hidden grain border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
        "// ",
        t("problem.tag"),
        " & ",
        t("solution.tag")
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-balance max-w-3xl mx-auto italic font-light text-foreground/95", children: t("problem.title") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 max-w-2xl mx-auto space-y-4 text-sm leading-relaxed text-foreground/80 font-light text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("solution.desc2") }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 450, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 inline-flex flex-wrap items-center justify-center gap-3 text-[10px] tracking-widest text-muted-foreground font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-border/60 hidden sm:inline-block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CASABLANCA 33.5731° N" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TANGIER 35.7595° N" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-border/60 hidden sm:inline-block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "text-foreground hover:text-foreground/80 underline underline-offset-4 font-semibold transition-colors ms-2", children: [
          t("story.title"),
          " →"
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "collection", className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-32 border-b border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("hero.vol").split(" — ")[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl lg:text-7xl text-balance max-w-2xl", children: t("featured.title") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-start gap-3 sm:gap-6 border-b border-border/40 pb-6 mb-12 font-mono", children: ["all", "tshirt", "sweatshirt", "hoodie"].map((tab) => {
        const keyMap = {
          all: "category.all",
          tshirt: "category.tshirt",
          sweatshirt: "category.sweatshirt",
          hoodie: "category.hoodie"
        };
        const count = tab === "all" ? products.length : products.filter((p) => p.category === tab).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(tab), className: `text-xs tracking-brand uppercase pb-2 transition-all duration-300 relative cursor-pointer inline-flex items-center gap-2 ${activeTab === tab ? "text-foreground font-bold border-b-2 border-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(keyMap[tab]) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] px-1.5 py-0.5 rounded-2xs font-mono ${activeTab === tab ? "bg-foreground text-background font-bold" : "bg-secondary/60 text-muted-foreground"}`, children: count })
        ] }, tab);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16", children: products.filter((p) => {
        if (activeTab === "all") return true;
        return p.category === activeTab;
      }).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group text-start relative flex flex-col justify-between h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => openProduct(p), className: "block relative cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.imgFront, alt: t(`product.name.${p.key}`), loading: "lazy", className: "h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] group-hover:opacity-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.imgBack, alt: `${t(`product.name.${p.key}`)} back view`, loading: "lazy", className: "h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] opacity-0 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            openProduct(p);
          }, className: "absolute bottom-4 left-4 right-4 bg-background/95 hover:bg-foreground hover:text-background text-foreground py-2.5 text-[10px] tracking-brand uppercase font-mono font-medium border border-border/40 text-center transition-all duration-300 rounded-2xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0", children: language === "fr" ? "Aperçu Rapide" : language === "ar" ? "ألقِ نظرة" : "Quick View" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-4 ${isAr ? "right-4" : "left-4"} text-[8px] tracking-brand uppercase bg-background/95 backdrop-blur-xs px-2 py-0.5 text-foreground/90 font-mono border border-border/40`, children: t(p.tag) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            toggleWishlist(p.id);
          }, className: `absolute top-4 ${isAr ? "left-4" : "right-4"} z-20 p-1.5 rounded-full bg-background/90 hover:bg-background text-foreground transition-all duration-300 border border-border/40 shadow-xs cursor-pointer`, title: wishlist.includes(p.id) ? "Remove from Wishlist" : "Add to Wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: wishlist.includes(p.id) ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `w-3.5 h-3.5 ${wishlist.includes(p.id) ? "text-red-500 fill-red-500 animate-pulse" : "text-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex-1 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => openProduct(p), className: "block group-hover:opacity-85 transition-opacity cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl tracking-tight text-foreground/95 italic leading-snug", children: t(`product.quote.${p.key}`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded-2xs bg-secondary/80 border border-border/40 text-foreground", children: t(`category.${p.category}`) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono uppercase", children: t(`product.name.${p.key}`) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 font-light leading-relaxed max-w-sm", children: t(`product.story.${p.key}`) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border/30 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-base font-bold text-foreground", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", onClick: (e) => e.stopPropagation(), children: p.colors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openProduct(p, color.name), className: "w-3.5 h-3.5 rounded-full border border-border hover:scale-125 transition-transform duration-200", style: {
              backgroundColor: color.hex
            }, title: color.name }, color.name)) })
          ] })
        ] })
      ] }) }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "lookbook", className: "border-b border-border/40 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[48vh] sm:h-[55vh] w-full overflow-hidden border-b border-border/40 select-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cinematic, alt: "Misty Atlantic ocean landscape representing movement in silence", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover grayscale opacity-75 scale-105 animate-kenburns" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/20 backdrop-blur-3xs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-brand uppercase text-background bg-foreground/60 px-3 py-1 mb-4 inline-block rounded-2xs", children: [
            "// ",
            t("lookbook.title"),
            " // LITTORAL ATLANTIQUE"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-background italic font-light drop-shadow-md", children: isAr ? "الحركة في السكون" : language === "fr" ? "Le mouvement dans le calme." : "Movement in silence." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-32 text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("lookbook.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-4xl md:text-5xl text-balance", children: t("lookbook.desc").split(". ")[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground font-light tracking-wide max-w-md", children: t("lookbook.desc").split(". ").slice(1).join(". ") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5 md:mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g1, alt: "Authentic Moroccan portrait, Casablanca Lookbook", loading: "lazy", width: 1024, height: 1365, className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CASABLANCA, MOROCCO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "18:24 PM" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-secondary aspect-square rounded-xs border border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g2, alt: "Candid moment of meditation under sun-dappled shadows", loading: "lazy", width: 1024, height: 1024, className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "MEDITERRANEAN COAST" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "11:45 AM" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-secondary aspect-square rounded-xs border border-border/30 sm:mt-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g3, alt: "African model in green organic clothing, looking calm", loading: "lazy", width: 1024, height: 1024, className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "RIAD ZEN" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "15:10 PM" })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, className: "block mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-secondary aspect-[16/10] rounded-xs border border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g4, alt: "Authentic Moroccan face looking over the rooftops of Tangier", loading: "lazy", width: 1280, height: 800, className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.02]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TANGIER, MOROCCO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "07:15 AM" })
              ] })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "philosophy", className: "bg-background text-foreground border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden bg-secondary aspect-[4/5] rounded-xs border border-border/30 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: philosophy, alt: "Quiet moment of reflection, choosing inner calm over expectation", loading: "lazy", width: 1280, height: 1600, className: "w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-[1.02]" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "lg:col-span-7 text-start space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
            "// ",
            t("nav.philosophy"),
            " // ",
            t("specs.tag")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.1]", children: t("philosophy.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-foreground/85 leading-relaxed font-light text-sm max-w-xl", children: [
            t("philosophy.desc1"),
            " ",
            t("specs.desc")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-6 text-xs tracking-brand uppercase border-t border-border/30 pt-6 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl lg:text-3xl normal-case tracking-normal italic text-foreground", children: t("philosophy.val1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] text-muted-foreground font-mono lowercase", children: t("philosophy.sub1") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl lg:text-3xl normal-case tracking-normal italic text-foreground", children: t("philosophy.val2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] text-muted-foreground font-mono lowercase", children: t("philosophy.sub2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl lg:text-3xl normal-case tracking-normal italic text-foreground", children: t("philosophy.val3") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] text-muted-foreground font-mono lowercase", children: t("philosophy.sub3") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs font-mono border-t border-border/40 pt-6 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border/30 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.weight") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "100% Coton peigné bio lourd (420 GSM / 240 GSM)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border/30 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.fit") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("specs.fitVal") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border/30 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.detail") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("specs.detailVal") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.origin") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              t("specs.originVal"),
              " (Casablanca & Tanger)"
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "brand-symbol", className: "bg-background text-foreground py-20 lg:py-32 border-b border-border/40 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5 flex justify-center lg:justify-start lg:ps-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[360px] lg:p-12 lg:bg-secondary/15 lg:rounded-xs lg:border lg:border-border/30 lg:aspect-square flex items-center justify-center lg:shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 font-mono text-[8px] text-muted-foreground/45 hidden lg:block", children: "// ARCHIVE 001 // IDENTITY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 font-mono text-[8px] text-muted-foreground/45 hidden lg:block", children: "33.5731° N · 7.5898° W" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { animated: true, className: "text-foreground hover:scale-110 duration-700 ease-soft w-[90px] h-[90px] lg:w-[160px] lg:h-[160px]" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "lg:col-span-7 text-start space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
            "// ",
            t("symbol.title")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-balance italic font-light", children: t("symbol.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 max-w-xl text-foreground/80 leading-relaxed font-light text-base border-l-2 border-border/40 ps-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-balance", children: t("symbol.desc1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-balance", children: t("symbol.desc2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl italic text-foreground tracking-wide text-balance leading-normal", children: t("symbol.desc3") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60", children: "LIVE FOR YOURSELF." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/35 py-20 lg:py-28 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("drops.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl max-w-xl mx-auto", children: t("drops.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto font-light", children: t("drops.desc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "mt-12 max-w-lg mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border/60 p-8 rounded-xs shadow-soft text-start relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-4 font-mono text-[8px] opacity-30 select-none", children: "DROP 01 // SER.100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-foreground text-background font-mono tracking-widest px-2 py-0.5 rounded-2xs font-semibold uppercase", children: "DROP 01 — ACTIVE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl lg:text-3xl", children: "Volume 01: Be Real, Protect Your Peace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground font-light leading-relaxed", children: "Our first release highlights heavyweight custom-dyed fabrics with minimal, ton-sur-ton embroidery phrases." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4 border-t border-border/40 pt-6 font-mono text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Availability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground/95", children: "93 / 100 Runs Remaining" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-secondary w-full rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-foreground rounded-full w-[93%]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Exclusivity details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "Hand-numbered labels" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "community", className: "theme-dark bg-background text-foreground py-20 lg:py-32 border-b border-border/50 text-center relative grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("community.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-balance", children: t("community.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/80 leading-relaxed font-light max-w-lg mx-auto text-balance", children: t("community.desc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-start", children: communityQuotes.map((c, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/50 bg-secondary/10 p-8 rounded-xs h-full flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl leading-relaxed text-foreground/90 italic font-light", children: c.quote }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-border/40 pt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "VOICE 0",
            index + 1
          ] })
        ] })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${"212652617044".replace(/[^0-9]/g, "")}`, target: "_blank", rel: "noopener noreferrer", className: "inline-block border border-foreground bg-foreground text-background px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs font-mono", children: isAr ? "شاركنا صوتك" : "Share Your Voice" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 text-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("packaging.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl text-balance", children: t("packaging.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground font-light leading-relaxed max-w-md", children: t("packaging.desc") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-8 rounded-xs text-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground block mb-4", children: "01 // LABELS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Unbleached Organic Cotton" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-light leading-relaxed", children: "Stitched onto the inner neck and outer hems, representing quiet branding and zero skin irritation." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-8 rounded-xs text-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground block mb-4", children: "02 // BOXES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Custom Textured Kraft Paper" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-light leading-relaxed", children: "Rigid, coordinates-textured card boxes designed from post-consumer waste paper. Recyclable, biodegradable." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-8 rounded-xs text-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground block mb-4", children: "03 // SEED-CARD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Spreadable Authenticity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-light leading-relaxed", children: "Each delivery features a plantable card loaded with wild chamomile seeds, ensuring your footprint is beautiful." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background pt-24 pb-16 text-sm text-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { layout: "stacked", symbolSize: 44, textSize: "text-xl font-medium tracking-[0.2em]", taglineSize: "text-[8px] tracking-[0.25em]", className: `${isAr ? "items-end text-end" : "items-start text-start"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-sm text-xs text-muted-foreground italic leading-relaxed", children: [
              '"',
              t("philosophy.desc1").split(". ")[1] || "Live for yourself.",
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 10, className: "text-muted-foreground/60 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-brand uppercase text-muted-foreground block", children: [
                "// ",
                t("footer.newsletter.title")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-light leading-relaxed", children: t("footer.newsletter.desc") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex flex-col sm:flex-row gap-3 max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: t("news.placeholder"), className: "flex-1 bg-transparent border-b border-foreground/45 px-1 py-3 text-xs focus:outline-none focus:border-foreground placeholder:text-foreground/45 text-start font-mono" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border border-foreground bg-foreground text-background px-6 py-3 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-colors font-semibold rounded-xs font-mono cursor-pointer", children: t("news.btn") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            t("nav.shop")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", className: "hover:text-foreground transition-colors block", children: t("collection.all") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", className: "hover:text-foreground transition-colors block", children: t("collection.best_sellers") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "collection", className: "hover:text-foreground transition-colors block", children: t("collection.new_arrivals") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            isAr ? "الفئات" : "Catégories"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("tshirt");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("category.tshirt") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("sweatshirt");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("category.sweatshirt") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("hoodie");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("category.hoodie") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            isAr ? "ذاتنا" : "About"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground transition-colors block", children: t("story.title") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "manifesto", className: "hover:text-foreground transition-colors block", children: t("manifesto.title") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            isAr ? "الدعم" : "Support"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors block", children: t("footer.support.faq") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors block", children: t("footer.support.shipping") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors block", children: t("footer.support.returns") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${"212652617044".replace(/[^0-9]/g, "")}`, target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground transition-colors block", children: t("footer.support.contact") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 lg:col-start-7 xl:col-start-11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: "// Follow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors block", children: "Instagram" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors block", children: "TikTok" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 pt-8 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " true self studio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic font-display text-sm normal-case tracking-normal text-foreground/80", children: '"Be Real, khalli nass thder."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.rights") })
      ] }) })
    ] }),
    selectedProduct && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-end bg-background/40 backdrop-blur-md transition-all duration-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: () => setSelectedProduct(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full lg:w-[85vw] xl:w-[75vw] h-full bg-background border-l border-border/60 shadow-soft flex flex-col md:flex-row overflow-y-auto z-10 animate-fade", dir: isAr ? "rtl" : "ltr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedProduct(null), className: `absolute top-6 ${isAr ? "left-6" : "right-6"} z-30 p-2 hover:opacity-60 transition-opacity bg-background/80 backdrop-blur-xs rounded-full border border-border/40`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-secondary/10 p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-border/40 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] w-full max-w-[400px] border border-border/40 bg-background rounded-xs overflow-hidden shadow-card cursor-zoom-in", onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onClick: () => setLightboxImage(activeQuickViewImage), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activeQuickViewImage, alt: t(`product.name.${selectedProduct.key}`), className: "w-full h-full object-cover transition-transform duration-100 ease-out", style: zoomStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 bg-background/90 text-[8px] tracking-widest uppercase font-mono px-2 py-0.5 border border-border/40 pointer-events-none", children: isAr ? "انقر للتكبير" : language === "fr" ? "Clic pour agrandir" : "Click to enlarge" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveQuickViewImage(selectedProduct.imgFront), className: `w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${activeQuickViewImage === selectedProduct.imgFront ? "border-foreground scale-105 shadow-sm" : "border-border/40 opacity-70 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedProduct.imgFront, alt: "Front thumbnail", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveQuickViewImage(selectedProduct.imgBack), className: `w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${activeQuickViewImage === selectedProduct.imgBack ? "border-foreground scale-105 shadow-sm" : "border-border/40 opacity-70 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedProduct.imgBack, alt: "Back thumbnail", className: "w-full h-full object-cover" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-[400px] lg:w-[460px] p-8 md:p-12 lg:p-16 flex flex-col justify-between text-start bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-auto space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-[9px] tracking-brand uppercase text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-2xs bg-secondary/80 border border-border/40 text-foreground font-semibold", children: t(`category.${selectedProduct.category}`) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(selectedProduct.tag) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SER.100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl xl:text-6xl text-foreground/95 italic font-light leading-tight", children: t(`product.quote.${selectedProduct.key}`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t border-border/40 pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                "// ",
                t("specs.tag")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/80 font-light", children: t(`product.story.${selectedProduct.key}`) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground font-light italic", children: t("specs.desc") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: "// Size Selector" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSizeGuideOpen(true), className: "font-mono text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1 underline underline-offset-4 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { size: 11 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "دليل المقاسات" : "Guide des Tailles" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: selectedProduct.sizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedSize(size), className: `font-mono text-xs border px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 ${selectedSize === size ? "bg-foreground text-background border-foreground font-bold" : "border-border/60 text-foreground"}`, children: size }, size)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                "// ",
                isAr ? "اللون" : language === "fr" ? "Couleur" : "Color",
                ": ",
                selectedColor
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: selectedProduct.colors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedColor(color.name), className: `group relative flex items-center justify-center p-0.5 rounded-full border transition-all duration-300 ${selectedColor === color.name ? "border-foreground scale-110" : "border-border/40 hover:border-foreground/50"}`, title: color.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full block border border-black/10 shadow-xs", style: {
                backgroundColor: color.hex
              } }) }, color.name)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: "// Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xl font-bold text-foreground", children: selectedProduct.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleBuyNow, className: "w-full border border-foreground bg-foreground text-background py-4 text-xs tracking-brand uppercase hover:bg-secondary/90 hover:text-foreground transition-all duration-300 font-bold rounded-xs shadow-soft flex items-center justify-center gap-2 group cursor-pointer font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14, className: "fill-current text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "اشتري الآن (الدفع عند الاستلام)" : "Commander Directement (Paiement à la livraison)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleAddToCart, className: "w-full border border-border/80 bg-background text-foreground py-3 text-xs tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs flex items-center justify-center gap-2 group cursor-pointer font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "أضف إلى السلة" : "Ajouter au Panier" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${selectedProduct.id}`, className: "block text-center font-mono text-[9px] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 pt-1", children: isAr ? "عرض التفاصيل في صفحة مستقلة ←" : language === "fr" ? "Ouvrir la page complète du produit ↗" : "Open standalone product page ↗" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                "// ",
                isAr ? "الآراء" : language === "fr" ? "Avis Clients" : "Customer Reviews"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-amber-500 mb-1 select-none", children: "★★★★★" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/80 font-light italic leading-relaxed", children: [
                    '"',
                    t("review.q1.text"),
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-mono text-muted-foreground block mt-1", children: [
                    "— ",
                    isAr ? "أنس، الدار البيضاء" : "Anas, Casablanca",
                    " // ",
                    isAr ? "مراجعة الجودة" : "Quality Review"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-amber-500 mb-1 select-none", children: "★★★★★" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/80 font-light italic leading-relaxed", children: [
                    '"',
                    t(`review.e${selectedProduct.id % 2 === 0 ? "2" : "1"}.text`),
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-mono text-muted-foreground block mt-1", children: [
                    "— ",
                    isAr ? "سلمى، مراكش" : "Salma, Marrakech",
                    " // ",
                    isAr ? "مراجعة عاطفية" : "Emotional Review"
                  ] })
                ] })
              ] })
            ] }),
            recentlyViewed.filter((id) => id !== selectedProduct.id).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                "// ",
                t("recent.title")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: recentlyViewed.filter((id) => id !== selectedProduct.id).slice(0, 3).map((id) => {
                const rp = products.find((p) => p.id === id);
                if (!rp) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => {
                  openProduct(rp);
                }, className: "group cursor-pointer text-start space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rp.imgFront, alt: t(`product.name.${rp.key}`), className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] font-bold text-foreground block truncate", children: rp.price })
                ] }, rp.id);
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border/40 font-mono text-[8px] text-muted-foreground tracking-widest flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 10, className: "text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TRUE SELF STUDIO®" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "33.5731° N, 7.5898° W" })
          ] })
        ] })
      ] })
    ] }),
    wishlistOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[110] flex items-center justify-end bg-background/50 backdrop-blur-md transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: () => setWishlistOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-[480px] h-full bg-background border-l border-border/60 shadow-soft flex flex-col justify-between overflow-hidden z-10 animate-fade", dir: isAr ? "rtl" : "ltr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border/40 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 16, className: "text-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold tracking-brand uppercase", children: [
              t("wishlist.title"),
              " (",
              wishlist.length,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWishlistOpen(false), className: "p-1 hover:opacity-60 transition-opacity border border-border/40 rounded-full bg-background/80 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: wishlist.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl italic text-muted-foreground", children: t("wishlist.empty") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 font-mono", children: isAr ? "احمِ سلامك." : "Protect your peace." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/30", children: wishlist.map((id) => {
          const item = products.find((p) => p.id === id);
          if (!item) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-4 flex items-center justify-between gap-4 first:pt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 cursor-pointer group", onClick: () => {
              openProduct(item);
              setWishlistOpen(false);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 aspect-[3/4] border border-border/40 bg-secondary/15 rounded-2xs overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.imgFront, alt: t(`product.name.${item.key}`), className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl leading-tight text-foreground/95 group-hover:text-foreground/80 transition-colors", children: t(`product.quote.${item.key}`) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[9px] text-muted-foreground uppercase mt-0.5", children: [
                  t(`product.name.${item.key}`).split(" ")[t(`product.name.${item.key}`).split(" ").length - 1],
                  " // ",
                  t(`philosophy.${item.philosophy}`)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3 font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: item.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWishlist(item.id), className: "text-muted-foreground/60 hover:text-red-500 transition-colors p-1 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
            ] })
          ] }, item.id);
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-t border-border/40 bg-secondary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWishlistOpen(false), className: "w-full border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft cursor-pointer font-mono", children: isAr ? "العودة للتصفح" : language === "fr" ? "Retour au shopping" : "Back to shopping" }) })
      ] })
    ] }),
    lightboxImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLightboxImage(null), className: "absolute top-6 right-6 z-50 p-2 hover:opacity-60 transition-opacity bg-foreground/10 text-foreground rounded-full border border-border/20 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-[90vw] max-h-[90vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightboxImage, alt: "Enlarged view", className: "max-w-full max-h-[90vh] object-contain rounded-xs border border-border/20 shadow-2xl animate-fade" }) })
    ] }),
    showScrollTop && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }), className: `fixed bottom-6 ${isAr ? "left-6" : "right-6"} z-50 p-3 rounded-full bg-background hover:bg-foreground hover:text-background text-foreground transition-all duration-300 border border-border/40 shadow-soft cursor-pointer animate-fade`, title: "Back to top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m18 15-6-6-6 6" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SizeGuideModal, { isOpen: sizeGuideOpen, onClose: () => setSizeGuideOpen(false) })
  ] });
}
export {
  Index as component
};
