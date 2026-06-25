import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Nav, R as Reveal } from "./Reveal-BJC1y1j8.mjs";
import { a as useLanguage, u as useCart } from "./router-D8QfgQtv.mjs";
import { S as Symbol$1, L as Logo } from "./BrandLogo-Be2G5YYH.mjs";
import { c as createOrderFn } from "./orders.server-eC9bLRzs.mjs";
import { p as p1Back, a as p1Front, b as p2Back, c as p2Front, d as p3Back, e as p3Front, f as p4Back, g as p4Front, h as p5Back, i as p5Front, j as p6Back, k as p6Front, l as p7Back, m as p7Front, n as p8Back, o as p8Front } from "./product-8-back-CL2V7HrX.mjs";
import "../_libs/seroval.mjs";
import { X, a as Check, S as ShoppingBag, T as Trash2, M as Minus, d as Plus } from "../_libs/lucide-react.mjs";
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
import "./server-Bspg8XK9.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const hero = "/assets/hero-B87RwUwA.jpg";
const philosophy = "/assets/philosophy-IBsmd_ue.jpg";
const g1 = "/assets/gallery-1-C_lzCq2K.jpg";
const g2 = "/assets/gallery-2-BAdcgdVA.jpg";
const g3 = "/assets/gallery-3-OIFu6pc7.jpg";
const g4 = "/assets/gallery-4-bIHymz_g.jpg";
function Index() {
  const {
    t,
    language
  } = useLanguage();
  const isAr = language === "ar";
  const {
    cartItems,
    addToCart,
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
  const [isAdding, setIsAdding] = reactExports.useState(false);
  const [isAddedSuccess, setIsAddedSuccess] = reactExports.useState(false);
  const [selectedColor, setSelectedColor] = reactExports.useState("");
  const [activeQuickViewImage, setActiveQuickViewImage] = reactExports.useState("");
  const [lightboxImage, setLightboxImage] = reactExports.useState(null);
  const [zoomStyle, setZoomStyle] = reactExports.useState({});
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [recentlyViewed, setRecentlyViewed] = reactExports.useState([]);
  const [wishlistOpen, setWishlistOpen] = reactExports.useState(false);
  const [showScrollTop, setShowScrollTop] = reactExports.useState(false);
  const [checkoutStep, setCheckoutStep] = reactExports.useState("cart");
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [address, setAddress] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [isSubmittingOrder, setIsSubmittingOrder] = reactExports.useState(false);
  const [orderError, setOrderError] = reactExports.useState("");
  const products = [{
    id: 1,
    key: "1",
    price: "650 MAD",
    imgFront: p1Front,
    imgBack: p1Back,
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
    price: "350 MAD",
    imgFront: p2Front,
    imgBack: p2Back,
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
    price: "550 MAD",
    imgFront: p3Front,
    imgBack: p3Back,
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
    price: "350 MAD",
    imgFront: p4Front,
    imgBack: p4Back,
    tag: "collection.bestsellers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Beige",
      hex: "#D8D0C5"
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
    price: "650 MAD",
    imgFront: p5Front,
    imgBack: p5Back,
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
    price: "350 MAD",
    imgFront: p8Front,
    imgBack: p8Back,
    tag: "collection.bestsellers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{
      name: "Beige",
      hex: "#D8D0C5"
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
        if (checkoutStep !== "success") {
          setCartOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [checkoutStep, setCartOpen]);
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
    setIsAdding(true);
    setTimeout(() => {
      addToCart({
        productId: selectedProduct.id,
        name: t(`product.name.${selectedProduct.key}`),
        quote: t(`product.quote.${selectedProduct.key}`),
        image: selectedProduct.imgFront,
        size: selectedSize,
        color: selectedColor,
        price: parseFloat(selectedProduct.price.replace(" MAD", ""))
      });
      setIsAdding(false);
      setIsAddedSuccess(true);
      setTimeout(() => {
        setIsAddedSuccess(false);
        setSelectedProduct(null);
      }, 1e3);
    }, 800);
  };
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone || !city || !address) {
      setOrderError(isAr ? "يرجى ملء جميع الحقول المطلوبة." : "Please fill in all required fields.");
      return;
    }
    setIsSubmittingOrder(true);
    setOrderError("");
    try {
      const orderItems = cartItems.map((item) => ({
        productId: item.productId,
        name: item.name,
        quote: item.quote,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.price
      }));
      await createOrderFn({
        data: {
          customerName: fullName,
          customerPhone: phone,
          customerCity: city,
          customerAddress: address,
          customerNotes: notes || void 0,
          items: orderItems,
          totalPrice: cartSubtotal
        }
      });
      clearCart();
      setFullName("");
      setPhone("");
      setCity("");
      setAddress("");
      setNotes("");
      setCheckoutStep("success");
    } catch (err) {
      console.error("Error submitting order:", err);
      setOrderError(isAr ? "حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى." : "There was an error processing your order. Please try again.");
    } finally {
      setIsSubmittingOrder(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "bg-background text-foreground overflow-x-hidden", dir: isAr ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { wishlistCount: wishlist.length, onOpenWishlist: () => setWishlistOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen w-full overflow-hidden flex flex-col justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Authentic Moroccan face looking into the distance, representing inner peace and freedom", width: 1600, height: 1920, fetchPriority: "high", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/15 to-background/95" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-20 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-fade text-[10px] sm:text-xs tracking-brand uppercase text-foreground/80 font-mono", children: t("hero.vol") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-rise delay-1 mt-6 font-display text-[15vw] leading-[0.85] sm:text-[11vw] lg:text-[8rem] text-balance", children: [
          "LIVE FOR YOURSELF.",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block mt-4 font-sans text-lg md:text-2xl font-light tracking-wide text-foreground/90 uppercase", children: [
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "featured-products", className: "bg-background text-foreground py-24 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-16 border-b border-border/40 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
          t("collection.featured"),
          " // ",
          t("hero.vol").split(" — ")[0]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl text-balance max-w-2xl", children: language === "fr" ? "Sélection de Saison" : language === "ar" ? "المميزة هذا الموسم" : "Seasonal Featured" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: products.filter((p) => p.isFeatured).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group text-start relative flex flex-col justify-between h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${p.id}`, className: "block relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/product/${p.id}`, className: "block group-hover:opacity-85 transition-opacity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl tracking-tight text-foreground/95 italic leading-snug", children: t(`product.quote.${p.key}`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono mt-1 uppercase", children: t(`product.name.${p.key}`) }),
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
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-hidden": true, className: "border-y border-border/80 bg-background overflow-hidden py-6 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex whitespace-nowrap animate-marquee ${isAr ? "flex-row-reverse" : ""}`, children: [...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((phrase, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl md:text-4xl italic px-10 text-foreground/80 font-light", children: [
      phrase,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic text-foreground/35 mx-3", children: "✦" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "story", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "problem", className: "bg-background text-foreground border-b border-border/40 py-24 lg:py-36 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("problem.tag") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-balance max-w-3xl mx-auto italic font-light text-foreground/90", children: t("problem.title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 max-w-2xl mx-auto space-y-5 text-sm leading-relaxed text-muted-foreground font-light text-balance", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("problem.desc1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("problem.desc2") })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "solution", className: "theme-dark bg-background text-foreground py-24 lg:py-36 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("solution.tag") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-balance max-w-3xl mx-auto italic font-light text-foreground/95", children: t("solution.title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 max-w-2xl mx-auto space-y-5 text-sm leading-relaxed text-foreground/80 font-light text-balance", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("solution.desc1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("solution.desc2") })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-36 overflow-hidden bg-secondary/35 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1000px] px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("story.title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-balance max-w-4xl mx-auto italic font-light text-foreground/90", children: t("story.quote") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-2xl mx-auto text-sm leading-relaxed text-muted-foreground font-light text-balance", children: t("story.desc") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 450, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 inline-flex items-center gap-4 text-[10px] tracking-widest text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CASABLANCA 33.5731° N" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TANGIER 35.7595° N" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border/60" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-center my-8 opacity-45", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-border/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 14, className: "mx-4 text-muted-foreground animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-border/60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "brand-symbol", className: "bg-background text-foreground py-16 lg:py-36 border-b border-border/40 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5 flex justify-center lg:justify-start lg:ps-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[360px] lg:p-12 lg:bg-secondary/15 lg:rounded-xs lg:border lg:border-border/30 lg:aspect-square flex items-center justify-center lg:shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 font-mono text-[8px] text-muted-foreground/45 hidden lg:block", children: "// ARCHIVE 001 // IDENTITY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 font-mono text-[8px] text-muted-foreground/45 hidden lg:block", children: "33.5731° N · 7.5898° W" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { className: "text-foreground hover:scale-110 duration-700 ease-soft w-[90px] h-[90px] lg:w-[160px] lg:h-[160px]" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "lg:col-span-7 text-start space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
            "// ",
            t("symbol.title")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance italic font-light", children: t("symbol.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-xl text-foreground/80 leading-relaxed font-light text-base border-l-2 border-border/40 ps-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-balance", children: t("symbol.desc1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-balance", children: t("symbol.desc2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl italic text-foreground tracking-wide text-balance leading-normal", children: t("symbol.desc3") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60", children: "LIVE FOR YOURSELF." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-center my-8 opacity-45", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-border/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 14, className: "mx-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-border/60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "collection", className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 border-b border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("hero.vol").split(" — ")[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-7xl text-balance max-w-2xl", children: t("featured.title") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-start gap-4 md:gap-8 border-b border-border/40 pb-6 mb-12 font-mono", children: ["all", "authenticity", "freedom", "peace", "confidence"].map((tab) => {
        const keyMap = {
          all: "collection.all",
          authenticity: "philosophy.authenticity",
          freedom: "philosophy.freedom",
          peace: "philosophy.peace",
          confidence: "philosophy.confidence"
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab(tab), className: `text-xs tracking-brand uppercase pb-2 transition-all duration-300 relative cursor-pointer ${activeTab === tab ? "text-foreground font-bold border-b-2 border-foreground" : "text-muted-foreground hover:text-foreground"}`, children: t(keyMap[tab]) }, tab);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16", children: products.filter((p) => {
        if (activeTab === "all") return true;
        return p.philosophy === activeTab;
      }).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group text-start relative flex flex-col justify-between h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${p.id}`, className: "block relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/product/${p.id}`, className: "block group-hover:opacity-85 transition-opacity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl tracking-tight text-foreground/95 italic leading-snug", children: t(`product.quote.${p.key}`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono mt-1 uppercase", children: t(`product.name.${p.key}`) }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "philosophy", className: "bg-background text-foreground border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden bg-secondary aspect-[4/5] rounded-xs border border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: philosophy, alt: "Quiet moment of reflection, choosing inner calm over expectation", loading: "lazy", width: 1280, height: 1600, className: "w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-[1.02]" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "lg:col-span-7 lg:ps-6 text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("nav.philosophy") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-6xl text-balance leading-[1.1]", children: t("philosophy.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6 text-foreground/80 leading-relaxed font-light text-sm max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: t("philosophy.desc1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("philosophy.desc2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-3 gap-6 text-xs tracking-brand uppercase border-t border-border/30 pt-8 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl normal-case tracking-normal italic text-foreground", children: t("philosophy.val1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10px] text-muted-foreground font-mono lowercase", children: t("philosophy.sub1") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl normal-case tracking-normal italic text-foreground", children: t("philosophy.val2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10px] text-muted-foreground font-mono lowercase", children: t("philosophy.sub2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl normal-case tracking-normal italic text-foreground", children: t("philosophy.val3") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10px] text-muted-foreground font-mono lowercase", children: t("philosophy.sub3") })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "manifesto", className: "bg-secondary/25 py-24 lg:py-36 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("nav.philosophy") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-6xl text-balance", children: t("manifesto.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground font-light leading-relaxed", children: t("manifesto.desc") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [1, 2, 3, 4].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: num * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border/60 bg-background p-8 rounded-xs text-start h-full flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-muted-foreground block mb-4", children: [
          "0",
          num,
          " // VALUE"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3 text-foreground/95", children: t(`manifesto.p${num}.title`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-light leading-relaxed", children: t(`manifesto.p${num}.desc`) })
      ] }) }) }, num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[65vh] w-full overflow-hidden border-b border-border/40 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "absolute inset-0 h-full w-full object-cover grayscale opacity-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "https://player.vimeo.com/external/459389137.sd.mp4?s=8948d1d73b5bf95cf859082cedabf558a2d1d0e5&profile_id=139&oauth2_token_id=57447761", type: "video/mp4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/10 backdrop-blur-3xs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-brand uppercase text-background bg-foreground/50 px-2 py-0.5 mb-4 inline-block", children: "// cinematic loop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-background italic font-light drop-shadow-md", children: isAr ? "الحركة في السكون" : language === "fr" ? "Le mouvement dans le calme." : "Movement in silence." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "lookbook", className: "py-24 lg:py-36 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 text-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("lookbook.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl text-balance", children: t("lookbook.desc").split(". ")[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground font-light tracking-wide max-w-md", children: t("lookbook.desc").split(". ").slice(1).join(". ") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5 md:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-secondary aspect-square rounded-xs border border-border/30 sm:mt-16", children: [
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
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-24 lg:py-36 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("drops.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-6xl max-w-xl mx-auto", children: t("drops.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-md mx-auto font-light", children: t("drops.desc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "mt-16 max-w-lg mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border/60 p-8 rounded-xs shadow-soft text-start relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-4 font-mono text-[8px] opacity-30 select-none", children: "DROP 01 // SER.100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-foreground text-background font-mono tracking-widest px-2 py-0.5 rounded-2xs font-semibold uppercase", children: "DROP 01 — ACTIVE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl", children: "Volume 01: Be Real, Protect Your Peace" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid md:grid-cols-2 border-b border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p4Front, alt: "Embellished minimal design, representing silent strength", loading: "lazy", width: 1024, height: 1280, className: "absolute inset-0 h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "flex items-center bg-secondary/20 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 lg:px-20 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("specs.tag") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-6xl text-balance", children: t("specs.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-foreground/80 leading-relaxed max-w-md font-light", children: t("specs.desc") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-12 space-y-4 text-xs font-mono border-t border-border/50 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border/40 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.weight") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("specs.weight") === "Intention" ? "Intention" : "Support of the message" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border/40 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.fit") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("specs.fitVal") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border/40 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.detail") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("specs.detailVal") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("specs.origin") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("specs.originVal") })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "journal", className: "py-24 lg:py-36 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("journal.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl", children: t("journal.title") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group border border-border/50 bg-background/50 hover:bg-secondary/20 p-8 rounded-xs transition-all duration-500 cursor-pointer text-start flex flex-col justify-between h-full min-h-[300px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-mono block mb-4 uppercase", children: "Journal — Entry 01 · 6 Min Read" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl group-hover:text-foreground/80 transition-colors", children: t("journal.entry1.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed font-light", children: t("journal.entry1.desc") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-[10px] tracking-brand uppercase border-b border-foreground w-max pb-0.5 group-hover:opacity-75 transition-opacity font-semibold", children: isAr ? "اقرأ التدوينة ←" : "Read Entry →" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group border border-border/50 bg-background/50 hover:bg-secondary/20 p-8 rounded-xs transition-all duration-500 cursor-pointer text-start flex flex-col justify-between h-full min-h-[300px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-mono block mb-4 uppercase", children: "Journal — Entry 02 · 4 Min Read" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl group-hover:text-foreground/80 transition-colors", children: t("journal.entry2.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed font-light", children: t("journal.entry2.desc") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-[10px] tracking-brand uppercase border-b border-foreground w-max pb-0.5 group-hover:opacity-75 transition-opacity font-semibold", children: isAr ? "اقرأ التدوينة ←" : "Read Entry →" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "community", className: "theme-dark bg-background text-foreground py-24 lg:py-36 border-b border-border/50 text-center relative grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("community.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl md:text-6xl text-balance", children: t("community.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-foreground/80 leading-relaxed font-light max-w-lg mx-auto text-balance", children: t("community.desc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-start", children: communityQuotes.map((c, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/50 bg-secondary/10 p-8 rounded-xs h-full flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl leading-relaxed text-foreground/90 italic font-light", children: c.quote }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-border/40 pt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "VOICE 0",
            index + 1
          ] })
        ] })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "inline-block border border-foreground bg-foreground text-background px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs", children: isAr ? "شاركنا صوتك" : "Share Your Voice" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-36 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 text-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("packaging.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl text-balance", children: t("packaging.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground font-light leading-relaxed max-w-md", children: t("packaging.desc") })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 border-b border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: t("peace.tag") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl md:text-6xl text-balance", children: t("peace.title") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-3 gap-8 text-start", children: [{
        t: t("peace.h1"),
        d: t("peace.d1")
      }, {
        t: t("peace.h2"),
        d: t("peace.d2")
      }, {
        t: t("peace.h3"),
        d: t("peace.d3")
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-foreground pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] text-muted-foreground", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed font-light", children: c.d })
      ] }) }, c.t)) })
    ] }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: "// Collections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("authenticity");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("philosophy.authenticity") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("freedom");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("philosophy.freedom") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("peace");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("philosophy.peace") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveTab("confidence");
              window.scrollTo({
                top: document.getElementById("collection")?.offsetTop || 0,
                behavior: "smooth"
              });
            }, className: "hover:text-foreground transition-colors text-start cursor-pointer block", children: t("philosophy.confidence") }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors block", children: t("footer.support.contact") }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono text-[9px] tracking-brand uppercase text-muted-foreground", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: "// Size Selector" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddToCart, disabled: isAdding, className: "w-full border border-foreground bg-foreground text-background py-4 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 group cursor-pointer font-mono", children: isAdding ? /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 16, className: "animate-spin text-background" }) : isAddedSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("cart.added.journey") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "أضف إلى السلة" : "Add To Cart" })
            ] }) }),
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
    cartOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[110] flex items-center justify-end bg-background/50 backdrop-blur-md transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: () => {
        if (checkoutStep !== "success") {
          setCartOpen(false);
        }
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-[480px] h-full bg-background border-l border-border/60 shadow-soft flex flex-col justify-between overflow-hidden z-10 animate-fade", dir: isAr ? "rtl" : "ltr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border/40 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 16, className: "text-foreground animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-semibold tracking-brand uppercase", children: [
              isAr ? "حقيبتك" : "Your Bag",
              " (",
              cartCount,
              ")"
            ] })
          ] }),
          checkoutStep !== "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setCheckoutStep("cart");
            setCartOpen(false);
          }, className: "p-1 hover:opacity-60 transition-opacity border border-border/40 rounded-full bg-background/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        cartItems.length > 0 && checkoutStep !== "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 px-6 py-3 border-b border-border/30 text-center text-[10px] sm:text-xs italic font-light font-mono text-muted-foreground animate-fade", children: [
          "✦ ",
          t("cart.emotion.banner")
        ] }),
        checkoutStep === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 bg-foreground text-background flex items-center justify-center rounded-full animate-bounce shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 32, className: "text-background animate-pulse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl lg:text-4xl leading-tight", children: isAr ? "شكراً لاختيارك ذاتك" : language === "fr" ? "Merci de vous choisir." : "Thank You For Choosing Yourself." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-light leading-relaxed max-w-xs", children: isAr ? "لقد بدأت رحلتك معنا بنجاح. سنتواصل معك لتأكيد خطوتك القادمة قريباً." : language === "fr" ? "Votre voyage commence. Nous vous contacterons sous peu pour confirmer votre chemin." : "Your journey has officially begun. We will contact you shortly to confirm your path." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setCheckoutStep("cart");
            setCartOpen(false);
          }, className: "border border-foreground bg-foreground text-background px-8 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs font-mono", children: isAr ? "العودة للمجموعة" : "Return to Collection" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: cartItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl italic text-muted-foreground", children: isAr ? "حقيبتك فارغة" : "Your bag is empty." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 font-mono", children: isAr ? "اختر الهدوء." : "Choose calm." })
          ] }) : checkoutStep === "cart" ? (
            /* Cart list */
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/30", children: cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-4 flex items-center justify-between gap-4 first:pt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 aspect-[3/4] border border-border/40 bg-secondary/15 rounded-2xs overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl leading-tight text-foreground/95", children: item.quote }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[9px] text-muted-foreground uppercase mt-0.5", children: [
                    item.name.split(" ")[item.name.split(" ").length - 1],
                    " // ",
                    isAr ? "المقاس" : language === "fr" ? "Taille" : "Size",
                    ": ",
                    item.size,
                    " // ",
                    isAr ? "اللون" : language === "fr" ? "Couleur" : "Color",
                    ": ",
                    item.color
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 font-mono", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateQuantity(item.id, -1), className: "border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 8 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1", children: item.quantity }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateQuantity(item.id, 1), className: "border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 8 }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3 font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", children: [
                  item.price * item.quantity,
                  " MAD"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(item.id), className: "text-muted-foreground/60 hover:text-red-500 transition-colors p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
              ] })
            ] }, item.id)) })
          ) : (
            /* Checkout form */
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCheckoutSubmit, className: "space-y-5 text-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4 italic font-light", children: isAr ? "مرحباً بك في ذاتك الحقيقية" : language === "fr" ? "Bienvenue chez TRUE SELF" : "Welcome To TRUE SELF" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[8px] tracking-widest text-muted-foreground uppercase", children: [
                  isAr ? "الاسم الكامل" : "Full Name",
                  " *"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: fullName, onChange: (e) => setFullName(e.target.value), className: "w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground", placeholder: isAr ? "أدخل اسمك الكامل" : "Enter your full name" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[8px] tracking-widest text-muted-foreground uppercase", children: [
                  isAr ? "رقم الهاتف" : "Phone Number",
                  " *"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, value: phone, onChange: (e) => setPhone(e.target.value), className: "w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground text-start", placeholder: isAr ? "أدخل رقم هاتفك" : "Enter your phone number" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[8px] tracking-widest text-muted-foreground uppercase", children: [
                  isAr ? "المدينة" : "City",
                  " *"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: city, onChange: (e) => setCity(e.target.value), className: "w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground", placeholder: isAr ? "الدار البيضاء، الرباط..." : "Casablanca, Rabat..." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[8px] tracking-widest text-muted-foreground uppercase", children: [
                  isAr ? "العنوان الكامل" : "Full Address",
                  " *"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 2, value: address, onChange: (e) => setAddress(e.target.value), className: "w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground resize-none", placeholder: isAr ? "أدخل عنوانك بالتفصيل" : "Enter your complete delivery address" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[8px] tracking-widest text-muted-foreground uppercase", children: isAr ? "ملاحظات إضافية (اختياري)" : "Notes (Optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 1, value: notes, onChange: (e) => setNotes(e.target.value), className: "w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground resize-none", placeholder: isAr ? "أي تعليمات خاصة بالتوصيل" : "Any special delivery instructions" })
              ] }),
              orderError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-500 font-mono", children: orderError })
            ] })
          ) }),
          cartItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-border/40 bg-secondary/10 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: isAr ? "المجموع الفرعي" : "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-semibold", children: [
                cartSubtotal,
                " MAD"
              ] })
            ] }),
            checkoutStep === "cart" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCheckoutStep("checkout"), className: "w-full border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft cursor-pointer font-mono", children: isAr ? "ابدأ رحلتك" : language === "fr" ? "Commencer votre voyage" : "Start Your Journey" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setCheckoutStep("cart"), className: "flex-1 border border-border/60 bg-background text-foreground py-3.5 text-xs tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs font-mono cursor-pointer", children: isAr ? "عودة" : "Back" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCheckoutSubmit, disabled: isSubmittingOrder, className: "flex-1 border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 font-mono cursor-pointer", children: isSubmittingOrder ? /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 16, className: "animate-spin text-background" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "تأكيد مسارك" : language === "fr" ? "Confirmer votre chemin" : "Confirm Your Path" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-4 mt-6 space-y-3 font-mono text-[9px] text-muted-foreground/80 animate-fade", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, className: "text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "توصيل سريع مجاني للمشتريات فوق 500 درهم" : "Free delivery in Morocco for orders above 500 MAD" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, className: "text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "الدفع عند الاستلام آمن وموثوق 100%" : "Secure cash on delivery" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, className: "text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "دعم وتواصل مستمر لتأكيد طلبك" : "Dedicated order confirmation support" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    lightboxImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLightboxImage(null), className: "absolute top-6 right-6 z-50 p-2 hover:opacity-60 transition-opacity bg-foreground/10 text-foreground rounded-full border border-border/20 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-[90vw] max-h-[90vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightboxImage, alt: "Enlarged view", className: "max-w-full max-h-[90vh] object-contain rounded-xs border border-border/20 shadow-2xl animate-fade" }) })
    ] }),
    showScrollTop && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }), className: `fixed bottom-6 ${isAr ? "left-6" : "right-6"} z-50 p-3 rounded-full bg-background hover:bg-foreground hover:text-background text-foreground transition-all duration-300 border border-border/40 shadow-soft cursor-pointer animate-fade`, title: "Back to top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m18 15-6-6-6 6" }) }) })
  ] });
}
export {
  Index as component
};
