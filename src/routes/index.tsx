import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { Symbol as BrandSymbol, Logo as BrandLogo } from "@/components/BrandLogo";
import { X, ShoppingBag, Check, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { createOrderFn } from "@/lib/orders.server";

// Assets imports
import hero from "@/assets/hero.jpg";
import philosophy from "@/assets/philosophy.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

// Split product images
import p1Front from "@/assets/produits_split/product-1-front.png";
import p1Back from "@/assets/produits_split/product-1-back.png";
import p2Front from "@/assets/produits_split/product-2-front.png";
import p2Back from "@/assets/produits_split/product-2-back.png";
import p3Front from "@/assets/produits_split/product-3-front.png";
import p3Back from "@/assets/produits_split/product-3-back.png";
import p4Front from "@/assets/produits_split/product-4-front.png";
import p4Back from "@/assets/produits_split/product-4-back.png";
import p5Front from "@/assets/produits_split/product-5-front.png";
import p5Back from "@/assets/produits_split/product-5-back.png";
import p6Front from "@/assets/produits_split/product-6-front.png";
import p6Back from "@/assets/produits_split/product-6-back.png";
import p7Front from "@/assets/produits_split/product-7-front.png";
import p7Back from "@/assets/produits_split/product-7-back.png";
import p8Front from "@/assets/produits_split/product-8-front.png";
import p8Back from "@/assets/produits_split/product-8-back.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRUE SELF® — Live For Yourself" },
      {
        name: "description",
        content:
          "A Moroccan cultural movement and lifestyle brand reminding you to live for yourself, not for the approval of others. Authenticity, freedom, and inner peace.",
      },
      { property: "og:title", content: "TRUE SELF® — Live For Yourself" },
      { property: "og:description", content: "Live for yourself, not for the approval of others." },
    ],
  }),
  component: Index,
});

interface Product {
  id: number;
  key: string;
  price: string;
  imgFront: string;
  imgBack: string;
  tag: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  philosophy: "authenticity" | "freedom" | "peace" | "confidence";
}

function Index() {
  const { t, language } = useLanguage();
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

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isAdding, setIsAdding] = useState(false);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  // Quick view interactive states
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [activeQuickViewImage, setActiveQuickViewImage] = useState<string>("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});

  // Collection tabs state
  const [activeTab, setActiveTab] = useState<"all" | "authenticity" | "freedom" | "peace" | "confidence">("all");

  // Wishlist and Recently Viewed states
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Checkout form states
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "success">("cart");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderError, setOrderError] = useState("");

  const products: Product[] = [
    { 
      id: 1, 
      key: "1", 
      price: "650 MAD", 
      imgFront: p1Front, 
      imgBack: p1Back, 
      tag: "collection.bestsellers", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Charcoal", hex: "#2C2C2A" }, { name: "Cream", hex: "#F9F6F0" }],
      isFeatured: true,
      isBestSeller: true,
      isNew: false,
      philosophy: "authenticity"
    },
    { 
      id: 2, 
      key: "2", 
      price: "350 MAD", 
      imgFront: p2Front, 
      imgBack: p2Back, 
      tag: "collection.new", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Cream", hex: "#F9F6F0" }, { name: "Olive", hex: "#4F5243" }],
      isFeatured: false,
      isBestSeller: false,
      isNew: true,
      philosophy: "authenticity"
    },
    { 
      id: 3, 
      key: "3", 
      price: "550 MAD", 
      imgFront: p3Front, 
      imgBack: p3Back, 
      tag: "collection.new", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Olive", hex: "#4F5243" }, { name: "Charcoal", hex: "#2C2C2A" }],
      isFeatured: false,
      isBestSeller: false,
      isNew: true,
      philosophy: "confidence"
    },
    { 
      id: 4, 
      key: "4", 
      price: "350 MAD", 
      imgFront: p4Front, 
      imgBack: p4Back, 
      tag: "collection.bestsellers", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Beige", hex: "#D8D0C5" }, { name: "Cream", hex: "#F9F6F0" }],
      isFeatured: true,
      isBestSeller: true,
      isNew: false,
      philosophy: "freedom"
    },
    { 
      id: 5, 
      key: "5", 
      price: "650 MAD", 
      imgFront: p5Front, 
      imgBack: p5Back, 
      tag: "collection.new", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Charcoal", hex: "#2C2C2A" }, { name: "Beige", hex: "#D8D0C5" }],
      isFeatured: false,
      isBestSeller: false,
      isNew: true,
      philosophy: "freedom"
    },
    { 
      id: 6, 
      key: "6", 
      price: "650 MAD", 
      imgFront: p6Front, 
      imgBack: p6Back, 
      tag: "collection.bestsellers", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Cream", hex: "#F9F6F0" }, { name: "Charcoal", hex: "#2C2C2A" }],
      isFeatured: false,
      isBestSeller: true,
      isNew: false,
      philosophy: "peace"
    },
    { 
      id: 7, 
      key: "7", 
      price: "550 MAD", 
      imgFront: p7Front, 
      imgBack: p7Back, 
      tag: "collection.new", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Olive", hex: "#4F5243" }, { name: "Cream", hex: "#F9F6F0" }],
      isFeatured: true,
      isBestSeller: false,
      isNew: true,
      philosophy: "peace"
    },
    { 
      id: 8, 
      key: "8", 
      price: "350 MAD", 
      imgFront: p8Front, 
      imgBack: p8Back, 
      tag: "collection.bestsellers", 
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Beige", hex: "#D8D0C5" }, { name: "Olive", hex: "#4F5243" }],
      isFeatured: true,
      isBestSeller: true,
      isNew: false,
      philosophy: "confidence"
    },
  ];

  const marqueePhrases = [
    t("nav.bereal").toLowerCase(),
    isAr ? "احمِ سلامك." : language === "fr" ? "protégez votre paix." : "protect your peace.",
    isAr ? "لسنا للإبهار." : language === "fr" ? "pas là pour impressionner." : "not here to impress.",
    isAr ? "السلام فوق الضجيج." : language === "fr" ? "la paix sur le bruit." : "peace over noise.",
    isAr ? "عِش لنفسك." : language === "fr" ? "vivez pour vous-même." : "live for yourself.",
    isAr ? "حقيقي جداً للتزييف." : language === "fr" ? "trop vrai pour faire semblant." : "too real to fake it.",
    "true self.",
    isAr ? "اختر الهدوء." : language === "fr" ? "choisissez le calme." : "choose calm.",
  ];

  const communityQuotes = [
    {
      author: isAr ? "أنيس، 24 سنة، الدار البيضاء" : "Anis, 24, Casablanca",
      quote: isAr 
        ? "«قضيت سنوات في دراسة تخصص كرهته فقط لأن هذا ما توقعه والداي مني. اليوم الذي توقفت فيه عن التمثيل كان اليوم الذي بدأت فيه العيش فعلاً.»"
        : language === "fr"
        ? "« J'ai passé des années à étudier un domaine que je détestais simplement parce que c'est ce que mes parents attendaient de moi. Le jour où j'ai arrêté de jouer un rôle est le jour où j'ai commencé à vivre. »"
        : "“I spent years studying a field I hated simply because it was what my parents expected of me. The day I stopped performing was the day I started living.”"
    },
    {
      author: isAr ? "سارة، 21 سنة، طنجة" : "Sarah, 21, Tangier",
      quote: isAr
        ? "«الجميع على وسائل التواصل الاجتماعي يرتدون أقنعة، ويعرضون حياتهم المثالية المصطنعة. نحن بحاجة إلى مساحات تذكرنا بأن نكون حقيقيين ونبسط الأمور.»"
        : language === "fr"
        ? "« Tout le monde sur les réseaux sociaux porte un masque et affiche une vie parfaite. Nous avons besoin de rappels physiques pour rester réels et respirer. »"
        : "“Everyone on social media is wearing a mask, showing a perfect life. We need physical reminders to just stay real and breathe.”"
    },
    {
      author: isAr ? "يوسف، 27 سنة، مراكش" : "Youssef, 27, Marrakech",
      quote: isAr
        ? "«السلام الداخلي ليس شيئاً تبحث عنه؛ بل هو شيء تحميه بنشاط. يجب أن تتعلم كيف تقول لا لتوقعات الآخرين لتبدأ في سماع نفسك.»"
        : language === "fr"
        ? "« La paix n'est pas quelque chose que l'on trouve ; c'est quelque chose que l'on protège. Il faut apprendre à dire non aux attentes des autres pour s'entendre. »"
        : "“Peace isn't something you find; it's something you actively protect. You have to learn to say no to other people's expectations to hear yourself.”"
    }
  ];

  // Prevent scroll when overlay or cart is open
  useEffect(() => {
    if (selectedProduct || cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct, cartOpen]);

  // Handle ESC key to close overlay or cart drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  // Load wishlist and recently viewed from localStorage on mount
  useEffect(() => {
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

  // Save wishlist when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ts_wishlist", JSON.stringify(wishlist));
      } catch (err) {
        console.error("Error saving wishlist:", err);
      }
    }
  }, [wishlist]);

  // Save recently viewed when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ts_recently_viewed", JSON.stringify(recentlyViewed));
      } catch (err) {
        console.error("Error saving recently viewed:", err);
      }
    }
  }, [recentlyViewed]);

  // Handle scroll for Back To Top button visibility
  useEffect(() => {
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

  const openProduct = (p: Product, initialColor?: string) => {
    setSelectedProduct(p);
    setSelectedSize(p.sizes[0] || "");
    setSelectedColor(initialColor || p.colors[0]?.name || "");
    setActiveQuickViewImage(p.imgFront);
    setZoomStyle({});
    setIsAddedSuccess(false);

    // Track recently viewed
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== p.id);
      return [p.id, ...filtered].slice(0, 3);
    });
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(1.8)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
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
        price: parseFloat(selectedProduct.price.replace(" MAD", "")),
      });
      setIsAdding(false);
      setIsAddedSuccess(true);
      setTimeout(() => {
        setIsAddedSuccess(false);
        setSelectedProduct(null); // Close product detail overlay
      }, 1000);
    }, 800);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
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
        price: item.price,
      }));

      await createOrderFn({
        data: {
          customerName: fullName,
          customerPhone: phone,
          customerCity: city,
          customerAddress: address,
          customerNotes: notes || undefined,
          items: orderItems,
          totalPrice: cartSubtotal,
        },
      });

      // Clear states and cart
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

  return (
    <div id="top" className="bg-background text-foreground overflow-x-hidden" dir={isAr ? "rtl" : "ltr"}>
      <Nav wishlistCount={wishlist.length} onOpenWishlist={() => setWishlistOpen(true)} />

      {/* 1. EMOTIONAL HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end">
        <img
          src={hero}
          alt="Authentic Moroccan face looking into the distance, representing inner peace and freedom"
          width={1600}
          height={1920}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/15 to-background/95" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-20 lg:pb-28">
          <div className="max-w-4xl text-start">
            <p className="animate-fade text-[10px] sm:text-xs tracking-brand uppercase text-foreground/80 font-mono">
              {t("hero.vol")}
            </p>
            <h1 className="animate-rise delay-1 mt-6 font-display text-[15vw] leading-[0.85] sm:text-[11vw] lg:text-[8rem] text-balance">
              LIVE FOR YOURSELF.
              <span className="block mt-4 font-sans text-lg md:text-2xl font-light tracking-wide text-foreground/90 uppercase">
                TRUE SELF<span className="text-muted-foreground/60">®</span>
              </span>
            </h1>
            
            <div className="animate-rise delay-2 mt-8 flex flex-col sm:flex-row gap-8 sm:items-end justify-between">
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 font-light text-balance">
                {t("hero.desc")}
              </p>
              <div className="flex gap-4 self-start sm:self-auto font-mono">
                <a
                  href="#collection"
                  className="border border-foreground bg-foreground text-background px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs shadow-xs"
                >
                  {t("hero.shop")}
                </a>
                <a
                  href="#story"
                  className="border border-foreground/45 bg-background/20 backdrop-blur px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-foreground hover:text-background transition-all duration-300 font-semibold rounded-xs shadow-xs text-center"
                >
                  {t("story.title")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS */}
      <section id="featured-products" className="bg-background text-foreground py-24 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="text-start mb-16 border-b border-border/40 pb-8">
              <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("collection.featured")} // {t("hero.vol").split(" — ")[0]}
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-6xl text-balance max-w-2xl">
                {language === "fr" ? "Sélection de Saison" : language === "ar" ? "المميزة هذا الموسم" : "Seasonal Featured"}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.isFeatured)
              .map((p, i) => (
                <Reveal key={p.id} delay={i * 100}>
                  <div 
                    className="group cursor-pointer text-start relative flex flex-col justify-between h-full"
                    onClick={() => openProduct(p)}
                  >
                    {/* Image frame */}
                    <div className="relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30">
                      {/* Front Image */}
                      <img
                        src={p.imgFront}
                        alt={t(`product.name.${p.key}`)}
                        loading="lazy"
                        className="h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] group-hover:opacity-0"
                      />
                      {/* Back Image */}
                      <img
                        src={p.imgBack}
                        alt={`${t(`product.name.${p.key}`)} back view`}
                        loading="lazy"
                        className="h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] opacity-0 group-hover:opacity-100"
                      />
                      
                      {/* Quick View Button overlay */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openProduct(p);
                        }}
                        className="absolute bottom-4 left-4 right-4 bg-background/95 hover:bg-foreground hover:text-background text-foreground py-2.5 text-[10px] tracking-brand uppercase font-mono font-medium border border-border/40 text-center transition-all duration-300 rounded-2xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0"
                      >
                        {language === "fr" ? "Aperçu Rapide" : language === "ar" ? "ألقِ نظرة" : "Quick View"}
                      </button>

                      {/* Tag Badge */}
                      <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"} text-[8px] tracking-brand uppercase bg-background/95 backdrop-blur-xs px-2 py-0.5 text-foreground/90 font-mono border border-border/40`}>
                        {t(p.tag)}
                      </div>

                      {/* Wishlist Heart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(p.id);
                        }}
                        className={`absolute top-4 ${isAr ? "left-4" : "right-4"} z-20 p-1.5 rounded-full bg-background/90 hover:bg-background text-foreground transition-all duration-300 border border-border/40 shadow-xs cursor-pointer`}
                        title={wishlist.includes(p.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={wishlist.includes(p.id) ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-3.5 h-3.5 ${wishlist.includes(p.id) ? "text-red-500 fill-red-500 animate-pulse" : "text-foreground"}`}
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </button>
                    </div>

                    {/* Metadata & Description */}
                    <div className="mt-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Quote & Name */}
                        <h3 className="font-display text-2xl tracking-tight text-foreground/95 italic leading-snug group-hover:text-foreground/80 transition-colors">
                          {t(`product.quote.${p.key}`)}
                        </h3>
                        <p className="text-[10px] text-muted-foreground font-mono mt-1 uppercase">
                          {t(`product.name.${p.key}`)}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                        {/* Price - Bold and Prominent */}
                        <span className="font-mono text-base font-bold text-foreground">
                          {p.price}
                        </span>

                        {/* Color Selector Pastilles */}
                        <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {p.colors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() => openProduct(p, color.name)}
                              className="w-3.5 h-3.5 rounded-full border border-border hover:scale-125 transition-transform duration-200"
                              style={{ backgroundColor: color.hex }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="border-y border-border/80 bg-background overflow-hidden py-6 select-none">
        <div className={`flex whitespace-nowrap animate-marquee ${isAr ? "flex-row-reverse" : ""}`}>
          {[...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((phrase, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-4xl italic px-10 text-foreground/80 font-light"
            >
              {phrase} <span className="not-italic text-foreground/35 mx-3">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. BRAND STORY CONTAINER */}
      <div id="story">
        {/* 3.1 THE PROBLEM SECTION */}
        <section id="problem" className="bg-background text-foreground border-b border-border/40 py-24 lg:py-36 relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("problem.tag")}
              </span>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-balance max-w-3xl mx-auto italic font-light text-foreground/90">
                {t("problem.title")}
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 max-w-2xl mx-auto space-y-5 text-sm leading-relaxed text-muted-foreground font-light text-balance">
                <p>{t("problem.desc1")}</p>
                <p>{t("problem.desc2")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3.2 THE SOLUTION SECTION */}
        <section id="solution" className="theme-dark bg-background text-foreground py-24 lg:py-36 relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("solution.tag")}
              </span>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-balance max-w-3xl mx-auto italic font-light text-foreground/95">
                {t("solution.title")}
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 max-w-2xl mx-auto space-y-5 text-sm leading-relaxed text-foreground/80 font-light text-balance">
                <p>{t("solution.desc1")}</p>
                <p>{t("solution.desc2")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3.3 OUR STORY (North African Heritage Narrative) */}
        <section className="relative py-24 lg:py-36 overflow-hidden bg-secondary/35 border-b border-border/40">
          <div className="mx-auto max-w-[1000px] px-6 text-center">
            <Reveal>
              <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("story.title")}
              </span>
            </Reveal>
            <Reveal delay={150}>
              <blockquote className="mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-balance max-w-4xl mx-auto italic font-light text-foreground/90">
                {t("story.quote")}
              </blockquote>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-10 max-w-2xl mx-auto text-sm leading-relaxed text-muted-foreground font-light text-balance">
                {t("story.desc")}
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="mt-14 inline-flex items-center gap-4 text-[10px] tracking-widest text-muted-foreground font-mono">
                <span className="h-px w-8 bg-border/60" />
                <span>CASABLANCA 33.5731° N</span>
                <span className="opacity-30">·</span>
                <span>TANGIER 35.7595° N</span>
                <span className="h-px w-8 bg-border/60" />
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Decorative divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-45">
        <span className="h-px w-16 bg-border/60" />
        <BrandSymbol size={14} className="mx-4 text-muted-foreground animate-pulse" />
        <span className="h-px w-16 bg-border/60" />
      </div>

      {/* THE SYMBOL SECTION */}
      <section id="brand-symbol" className="bg-background text-foreground py-16 lg:py-36 border-b border-border/40 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Asymmetric Large Symbol representation with blueprints details */}
            <Reveal className="lg:col-span-5 flex justify-center lg:justify-start lg:ps-12">
              <div className="relative w-full max-w-[360px] lg:p-12 lg:bg-secondary/15 lg:rounded-xs lg:border lg:border-border/30 lg:aspect-square flex items-center justify-center lg:shadow-soft">
                <div className="absolute top-4 left-4 font-mono text-[8px] text-muted-foreground/45 hidden lg:block">// ARCHIVE 001 // IDENTITY</div>
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-muted-foreground/45 hidden lg:block">33.5731° N · 7.5898° W</div>
                
                <BrandSymbol className="text-foreground hover:scale-110 duration-700 ease-soft w-[90px] h-[90px] lg:w-[160px] lg:h-[160px]" />
              </div>
            </Reveal>

            {/* Right Column: Editorial Philosophy text */}
            <Reveal delay={150} className="lg:col-span-7 text-start space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                  // {t("symbol.title")}
                </span>
                <h2 className="font-display text-4xl md:text-6xl text-balance italic font-light">
                  {t("symbol.title")}
                </h2>
              </div>

              <div className="space-y-6 max-w-xl text-foreground/80 leading-relaxed font-light text-base border-l-2 border-border/40 ps-6">
                <p className="text-balance">{t("symbol.desc1")}</p>
                <p className="text-balance">{t("symbol.desc2")}</p>
              </div>

              <div className="pt-4 max-w-xl">
                <p className="font-display text-2xl md:text-3xl italic text-foreground tracking-wide text-balance leading-normal">
                  {t("symbol.desc3")}
                </p>
                <p className="mt-4 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60">
                  LIVE FOR YOURSELF.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-45">
        <span className="h-px w-16 bg-border/60" />
        <BrandSymbol size={14} className="mx-4 text-muted-foreground" />
        <span className="h-px w-16 bg-border/60" />
      </div>

      {/* 4. FULL COLLECTION SECTION (with interactive tabs & clean cards) */}
      <section id="collection" className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 border-b border-border/40">
        <Reveal>
          <div className="text-start mb-12">
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
              {t("hero.vol").split(" — ")[0]}
            </p>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-2xl">
              {t("featured.title")}
            </h2>
          </div>
        </Reveal>

        {/* Collection Filter Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8 border-b border-border/40 pb-6 mb-12 font-mono">
          {(["all", "authenticity", "freedom", "peace", "confidence"] as const).map((tab) => {
            const keyMap = {
              all: "collection.all",
              authenticity: "philosophy.authenticity",
              freedom: "philosophy.freedom",
              peace: "philosophy.peace",
              confidence: "philosophy.confidence",
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs tracking-brand uppercase pb-2 transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab
                    ? "text-foreground font-bold border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(keyMap[tab])}
              </button>
            );
          })}
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products
            .filter((p) => {
              if (activeTab === "all") return true;
              return p.philosophy === activeTab;
            })
            .map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <div 
                  className="group cursor-pointer text-start relative flex flex-col justify-between h-full"
                  onClick={() => openProduct(p)}
                >
                  {/* Image Frame */}
                  <div className="relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30">
                    {/* Front Image */}
                    <img
                      src={p.imgFront}
                      alt={t(`product.name.${p.key}`)}
                      loading="lazy"
                      className="h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] group-hover:opacity-0"
                    />
                    {/* Back Image (Reveals on Hover) */}
                    <img
                      src={p.imgBack}
                      alt={`${t(`product.name.${p.key}`)} back view`}
                      loading="lazy"
                      className="h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] opacity-0 group-hover:opacity-100"
                    />
                    
                    {/* Quick View Button overlay */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProduct(p);
                      }}
                      className="absolute bottom-4 left-4 right-4 bg-background/95 hover:bg-foreground hover:text-background text-foreground py-2.5 text-[10px] tracking-brand uppercase font-mono font-medium border border-border/40 text-center transition-all duration-300 rounded-2xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0"
                    >
                      {language === "fr" ? "Aperçu Rapide" : language === "ar" ? "ألقِ نظرة" : "Quick View"}
                    </button>

                    {/* Subtle Tag Badge */}
                    <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"} text-[8px] tracking-brand uppercase bg-background/95 backdrop-blur-xs px-2 py-0.5 text-foreground/90 font-mono border border-border/40`}>
                      {t(p.tag)}
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(p.id);
                      }}
                      className={`absolute top-4 ${isAr ? "left-4" : "right-4"} z-20 p-1.5 rounded-full bg-background/90 hover:bg-background text-foreground transition-all duration-300 border border-border/40 shadow-xs cursor-pointer`}
                      title={wishlist.includes(p.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={wishlist.includes(p.id) ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-3.5 h-3.5 ${wishlist.includes(p.id) ? "text-red-500 fill-red-500 animate-pulse" : "text-foreground"}`}
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </button>
                  </div>

                  {/* Card Content - Story & Quote focused */}
                  <div className="mt-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quote & Name */}
                      <h3 className="font-display text-2xl tracking-tight text-foreground/95 italic leading-snug group-hover:text-foreground/80 transition-colors">
                        {t(`product.quote.${p.key}`)}
                      </h3>
                      <p className="text-[10px] text-muted-foreground font-mono mt-1 uppercase">
                        {t(`product.name.${p.key}`)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-light leading-relaxed max-w-sm">
                        {t(`product.story.${p.key}`)}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                      {/* Price - Bold and Prominent */}
                      <span className="font-mono text-base font-bold text-foreground">
                        {p.price}
                      </span>

                      {/* Color selectors circles */}
                      <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {p.colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => openProduct(p, color.name)}
                            className="w-3.5 h-3.5 rounded-full border border-border hover:scale-125 transition-transform duration-200"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </section>

      {/* 5. BRAND PHILOSOPHY */}
      <section
        id="philosophy"
        className="bg-background text-foreground border-b border-border/40"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden bg-secondary aspect-[4/5] rounded-xs border border-border/30">
              <img
                src={philosophy}
                alt="Quiet moment of reflection, choosing inner calm over expectation"
                loading="lazy"
                width={1280}
                height={1600}
                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-[1.02]"
              />
            </div>
          </Reveal>
          
          <Reveal delay={150} className="lg:col-span-7 lg:ps-6 text-start">
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
              {t("nav.philosophy")}
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance leading-[1.1]">
              {t("philosophy.title")}
            </h2>
            <div className="mt-8 space-y-6 text-foreground/80 leading-relaxed font-light text-sm max-w-xl">
              <p className="text-base">{t("philosophy.desc1")}</p>
              <p>{t("philosophy.desc2")}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 text-xs tracking-brand uppercase border-t border-border/30 pt-8 max-w-xl">
              <div>
                <p className="font-display text-3xl normal-case tracking-normal italic text-foreground">{t("philosophy.val1")}</p>
                <p className="mt-1.5 text-[10px] text-muted-foreground font-mono lowercase">{t("philosophy.sub1")}</p>
              </div>
              <div>
                <p className="font-display text-3xl normal-case tracking-normal italic text-foreground">{t("philosophy.val2")}</p>
                <p className="mt-1.5 text-[10px] text-muted-foreground font-mono lowercase">{t("philosophy.sub2")}</p>
              </div>
              <div>
                <p className="font-display text-3xl normal-case tracking-normal italic text-foreground">{t("philosophy.val3")}</p>
                <p className="mt-1.5 text-[10px] text-muted-foreground font-mono lowercase">{t("philosophy.sub3")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. MANIFESTO SECTION (The 4 Pillars) */}
      <section id="manifesto" className="bg-secondary/25 py-24 lg:py-36 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("nav.philosophy")}
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
                {t("manifesto.title")}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed">
                {t("manifesto.desc")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <Reveal key={num} delay={num * 80}>
                <div className="border border-border/60 bg-background p-8 rounded-xs text-start h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-muted-foreground block mb-4">0{num} // VALUE</span>
                    <h3 className="font-display text-2xl mb-3 text-foreground/95">{t(`manifesto.p${num}.title`)}</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {t(`manifesto.p${num}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOOKBOOK */}
      <section id="lookbook" className="py-24 lg:py-36 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-start">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("lookbook.title")}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl text-balance">
                {t("lookbook.desc").split(". ")[0]}
              </h2>
              <p className="mt-4 text-xs text-muted-foreground font-light tracking-wide max-w-md">
                {t("lookbook.desc").split(". ").slice(1).join(". ")}
              </p>
            </div>
          </Reveal>

          {/* Asymmetrical Editorial Campaign Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Image 1 - Vertical Offset Left */}
            <div className="md:col-span-5 md:mt-12">
              <Reveal delay={100}>
                <div className="group relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30">
                  <img
                    src={g1}
                    alt="Authentic Moroccan portrait, Casablanca Lookbook"
                    loading="lazy"
                    width={1024}
                    height={1365}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5">
                    <span>CASABLANCA, MOROCCO</span>
                    <span>18:24 PM</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Image 2 - Smaller Offset Right */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Reveal delay={200}>
                  <div className="group relative overflow-hidden bg-secondary aspect-square rounded-xs border border-border/30">
                    <img
                      src={g2}
                      alt="Candid moment of meditation under sun-dappled shadows"
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5">
                      <span>MEDITERRANEAN COAST</span>
                      <span>11:45 AM</span>
                    </div>
                  </div>
                </Reveal>

                {/* Image 3 - Courtyard View */}
                <Reveal delay={300}>
                  <div className="group relative overflow-hidden bg-secondary aspect-square rounded-xs border border-border/30 sm:mt-16">
                    <img
                      src={g3}
                      alt="African model in green organic clothing, looking calm"
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5">
                      <span>RIAD ZEN</span>
                      <span>15:10 PM</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Image 4 - Large Landscape Bottom Right */}
              <Reveal delay={400} className="block mt-8">
                <div className="group relative overflow-hidden bg-secondary aspect-[16/10] rounded-xs border border-border/30">
                  <img
                    src={g4}
                    alt="Authentic Moroccan face looking over the rooftops of Tangier"
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-soft)] group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-background font-mono bg-foreground/30 backdrop-blur-xs px-3 py-1.5">
                    <span>TANGIER, MOROCCO</span>
                    <span>07:15 AM</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LIMITED DROPS */}
      <section className="bg-secondary/40 py-24 lg:py-36 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">{t("drops.title")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl max-w-xl mx-auto">{t("drops.title")}</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto font-light">{t("drops.desc")}</p>
          </Reveal>

          <Reveal delay={150} className="mt-16 max-w-lg mx-auto">
            <div className="bg-background border border-border/60 p-8 rounded-xs shadow-soft text-start relative overflow-hidden">
              {/* Decorative design coordinates corner */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-30 select-none">
                DROP 01 // SER.100
              </div>
              
              <span className="text-[8px] bg-foreground text-background font-mono tracking-widest px-2 py-0.5 rounded-2xs font-semibold uppercase">
                DROP 01 — ACTIVE
              </span>
              
              <h3 className="mt-4 font-display text-3xl">Volume 01: Be Real, Protect Your Peace</h3>
              <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed">
                Our first release highlights heavyweight custom-dyed fabrics with minimal, ton-sur-ton embroidery phrases.
              </p>
              
              <div className="mt-8 space-y-4 border-t border-border/40 pt-6 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-semibold text-foreground/95">93 / 100 Runs Remaining</span>
                </div>
                {/* Visual Progress Bar */}
                <div className="h-1 bg-secondary w-full rounded-full overflow-hidden">
                  <div className="h-full bg-foreground rounded-full w-[93%]" />
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-muted-foreground">Exclusivity details</span>
                  <span className="italic text-muted-foreground">Hand-numbered labels</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PIECE PHILOSOPHY (Replaces technical specifications details) */}
      <section className="grid md:grid-cols-2 border-b border-border/40">
        <Reveal className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden bg-muted">
          <img
            src={p4Front}
            alt="Embellished minimal design, representing silent strength"
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>
        <Reveal delay={150} className="flex items-center bg-secondary/20 text-start">
          <div className="px-8 lg:px-20 py-20">
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">{t("specs.tag")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
              {t("specs.title")}
            </h2>
            <p className="mt-6 text-sm text-foreground/80 leading-relaxed max-w-md font-light">
              {t("specs.desc")}
            </p>
            <ul className="mt-12 space-y-4 text-xs font-mono border-t border-border/50 pt-8">
              <li className="flex justify-between border-b border-border/40 pb-4">
                <span className="text-muted-foreground">{t("specs.weight")}</span>
                <span>{t("specs.weight") === "Intention" ? "Intention" : "Support of the message"}</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-4">
                <span className="text-muted-foreground">{t("specs.fit")}</span>
                <span>{t("specs.fitVal")}</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-4">
                <span className="text-muted-foreground">{t("specs.detail")}</span>
                <span>{t("specs.detailVal")}</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-muted-foreground">{t("specs.origin")}</span>
                <span>{t("specs.originVal")}</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* 10. JOURNAL */}
      <section id="journal" className="py-24 lg:py-36 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="mb-16 text-center">
              <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">{t("journal.title")}</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">{t("journal.title")}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Entry 1 */}
            <Reveal delay={100}>
              <div className="group border border-border/50 bg-background/50 hover:bg-secondary/20 p-8 rounded-xs transition-all duration-500 cursor-pointer text-start flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <span className="text-[9px] text-muted-foreground font-mono block mb-4 uppercase">Journal — Entry 01 · 6 Min Read</span>
                  <h3 className="font-display text-3xl group-hover:text-foreground/80 transition-colors">
                    {t("journal.entry1.title")}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-light">
                    {t("journal.entry1.desc")}
                  </p>
                </div>
                <div className="mt-8 text-[10px] tracking-brand uppercase border-b border-foreground w-max pb-0.5 group-hover:opacity-75 transition-opacity font-semibold">
                  {isAr ? "اقرأ التدوينة ←" : "Read Entry →"}
                </div>
              </div>
            </Reveal>

            {/* Entry 2 */}
            <Reveal delay={200}>
              <div className="group border border-border/50 bg-background/50 hover:bg-secondary/20 p-8 rounded-xs transition-all duration-500 cursor-pointer text-start flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <span className="text-[9px] text-muted-foreground font-mono block mb-4 uppercase">Journal — Entry 02 · 4 Min Read</span>
                  <h3 className="font-display text-3xl group-hover:text-foreground/80 transition-colors">
                    {t("journal.entry2.title")}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-light">
                    {t("journal.entry2.desc")}
                  </p>
                </div>
                <div className="mt-8 text-[10px] tracking-brand uppercase border-b border-foreground w-max pb-0.5 group-hover:opacity-75 transition-opacity font-semibold">
                  {isAr ? "اقرأ التدوينة ←" : "Read Entry →"}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. COMMUNITY VOICES (Refined for real Moroccan narratives) */}
      <section id="community" className="theme-dark bg-background text-foreground py-24 lg:py-36 border-b border-border/50 text-center relative grain">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
          <Reveal>
            <span className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">{t("community.title")}</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">{t("community.title")}</h2>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed font-light max-w-lg mx-auto text-balance">
              {t("community.desc")}
            </p>
          </Reveal>

          {/* Moroccan Youth Reflections */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-start">
            {communityQuotes.map((c, index) => (
              <Reveal key={index} delay={index * 120}>
                <div className="border border-border/50 bg-secondary/10 p-8 rounded-xs h-full flex flex-col justify-between">
                  <p className="font-display text-xl leading-relaxed text-foreground/90 italic font-light">
                    {c.quote}
                  </p>
                  <div className="mt-8 border-t border-border/40 pt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                    <span>{c.author}</span>
                    <span>VOICE 0{index + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-16">
              <a
                href="#"
                className="inline-block border border-foreground bg-foreground text-background px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs"
              >
                {isAr ? "شاركنا صوتك" : "Share Your Voice"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. PACKAGING & LABELS */}
      <section className="py-24 lg:py-36 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-start">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">{t("packaging.title")}</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl text-balance">{t("packaging.title")}</h2>
              <p className="mt-4 text-xs text-muted-foreground font-light leading-relaxed max-w-md">
                {t("packaging.desc")}
              </p>
            </div>
          </Reveal>

          {/* Details layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <div className="border border-border/60 bg-secondary/10 p-8 rounded-xs text-start">
                <span className="font-mono text-xs text-muted-foreground block mb-4">01 // LABELS</span>
                <h3 className="font-display text-2xl mb-2">Unbleached Organic Cotton</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Stitched onto the inner neck and outer hems, representing quiet branding and zero skin irritation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border border-border/60 bg-secondary/10 p-8 rounded-xs text-start">
                <span className="font-mono text-xs text-muted-foreground block mb-4">02 // BOXES</span>
                <h3 className="font-display text-2xl mb-2">Custom Textured Kraft Paper</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Rigid, coordinates-textured card boxes designed from post-consumer waste paper. Recyclable, biodegradable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="border border-border/60 bg-secondary/10 p-8 rounded-xs text-start">
                <span className="font-mono text-xs text-muted-foreground block mb-4">03 // SEED-CARD</span>
                <h3 className="font-display text-2xl mb-2">Spreadable Authenticity</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Each delivery features a plantable card loaded with wild chamomile seeds, ensuring your footprint is beautiful.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PEACE & LOVE SEGMENT */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">{t("peace.tag")}</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
              {t("peace.title")}
            </h2>
          </div>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-start">
          {[
            {
              t: t("peace.h1"),
              d: t("peace.d1"),
            },
            {
              t: t("peace.h2"),
              d: t("peace.d2"),
            },
            {
              t: t("peace.h3"),
              d: t("peace.d3"),
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="border-t border-foreground pt-6">
                <p className="font-mono text-[10px] text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl">{c.t}</h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-light">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 13. NEWSLETTER & lifestyle FOOTER */}
      <footer className="border-t border-border bg-background pt-24 pb-16 text-sm text-start">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 pb-16">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <BrandLogo 
                layout="stacked" 
                symbolSize={44} 
                textSize="text-xl font-medium tracking-[0.2em]" 
                taglineSize="text-[8px] tracking-[0.25em]"
                className={`${isAr ? "items-end text-end" : "items-start text-start"}`}
              />
              <p className="mt-4 max-w-sm text-xs text-muted-foreground italic leading-relaxed">
                "{t("philosophy.desc1").split(". ")[1] || "Live for yourself."}"
              </p>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-border/40">
              <div className="flex items-center gap-2">
                <BrandSymbol size={10} className="text-muted-foreground/60 animate-pulse" />
                <span className="font-mono text-[9px] tracking-brand uppercase text-muted-foreground block">// {t("footer.newsletter.title")}</span>
              </div>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{t("footer.newsletter.desc")}</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  required
                  placeholder={t("news.placeholder")}
                  className="flex-1 bg-transparent border-b border-foreground/45 px-1 py-3 text-xs focus:outline-none focus:border-foreground placeholder:text-foreground/45 text-start font-mono"
                />
                <button className="border border-foreground bg-foreground text-background px-6 py-3 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-colors font-semibold rounded-xs font-mono cursor-pointer">
                  {t("news.btn")}
                </button>
              </form>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* SHOP Column */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {t("nav.shop")}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li>
                <a href="#collection" className="hover:text-foreground transition-colors block">
                  {t("collection.all")}
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-foreground transition-colors block">
                  {t("collection.best_sellers")}
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-foreground transition-colors block">
                  {t("collection.new_arrivals")}
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT Column */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {isAr ? "ذاتنا" : "About"}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li>
                <a href="#story" className="hover:text-foreground transition-colors block">
                  {t("story.title")}
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-foreground transition-colors block">
                  {t("manifesto.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {isAr ? "الدعم" : "Support"}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li>
                <a href="#" className="hover:text-foreground transition-colors block">
                  {t("footer.support.faq")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors block">
                  {t("footer.support.shipping")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors block">
                  {t("footer.support.returns")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors block">
                  {t("footer.support.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* FOLLOW Column */}
          <div className="lg:col-span-2 lg:col-start-7 xl:col-start-11">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// Follow</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li>
                <a href="#" className="hover:text-foreground transition-colors block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors block">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
            <p>© {new Date().getFullYear()} true self studio</p>
            <p className="italic font-display text-sm normal-case tracking-normal text-foreground/80">"Be Real, khalli nass thder."</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>

      {/* ----------------- PREMIUM PRODUCT DETAIL OVERLAY (EDITORIAL DRAWER) ----------------- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-background/40 backdrop-blur-md transition-all duration-700">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />

          {/* Editorial Product Card Container */}
          <div className="relative w-full lg:w-[85vw] xl:w-[75vw] h-full bg-background border-l border-border/60 shadow-soft flex flex-col md:flex-row overflow-y-auto z-10 animate-fade" dir={isAr ? "rtl" : "ltr"}>
            
            {/* Elegant Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-6 ${isAr ? "left-6" : "right-6"} z-30 p-2 hover:opacity-60 transition-opacity bg-background/80 backdrop-blur-xs rounded-full border border-border/40`}
            >
              <X size={18} />
            </button>

            {/* Visual Column - Main active image with Hover-Zoom & Thumbnails */}
            <div className="flex-1 bg-secondary/10 p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-border/40 relative">
              
              {/* Main Image Container with zoom & lightbox */}
              <div 
                className="relative aspect-[3/4] w-full max-w-[400px] border border-border/40 bg-background rounded-xs overflow-hidden shadow-card cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setLightboxImage(activeQuickViewImage)}
              >
                <img 
                  src={activeQuickViewImage} 
                  alt={t(`product.name.${selectedProduct.key}`)}
                  className="w-full h-full object-cover transition-transform duration-100 ease-out"
                  style={zoomStyle}
                />
                
                {/* Hover / Click Instructions */}
                <div className="absolute bottom-3 left-3 bg-background/90 text-[8px] tracking-widest uppercase font-mono px-2 py-0.5 border border-border/40 pointer-events-none">
                  {isAr ? "انقر للتكبير" : language === "fr" ? "Clic pour agrandir" : "Click to enlarge"}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setActiveQuickViewImage(selectedProduct.imgFront)}
                  className={`w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${
                    activeQuickViewImage === selectedProduct.imgFront
                      ? "border-foreground scale-105 shadow-sm"
                      : "border-border/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={selectedProduct.imgFront} alt="Front thumbnail" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveQuickViewImage(selectedProduct.imgBack)}
                  className={`w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${
                    activeQuickViewImage === selectedProduct.imgBack
                      ? "border-foreground scale-105 shadow-sm"
                      : "border-border/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={selectedProduct.imgBack} alt="Back thumbnail" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Editorial Data Column */}
            <div className="w-full md:w-[400px] lg:w-[460px] p-8 md:p-12 lg:p-16 flex flex-col justify-between text-start bg-background">
              
              {/* Product Info Segment */}
              <div className="my-auto space-y-8">
                {/* Category & Exclusivity Tag */}
                <div className="flex items-center gap-3 font-mono text-[9px] tracking-brand uppercase text-muted-foreground">
                  <span>{t(selectedProduct.tag)}</span>
                  <span>·</span>
                  <span>SER.100</span>
                </div>

                {/* Big Philosophy Quote */}
                <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-foreground/95 italic font-light leading-tight">
                  {t(`product.quote.${selectedProduct.key}`)}
                </h2>

                {/* Narrative Meaning / Story */}
                <div className="space-y-4 border-t border-border/40 pt-6">
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// {t("specs.tag")}</span>
                  <p className="text-sm leading-relaxed text-foreground/80 font-light">
                    {t(`product.story.${selectedProduct.key}`)}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground font-light italic">
                    {t("specs.desc")}
                  </p>
                </div>

                {/* Sizes Selector */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// Size Selector</span>
                  <div className="flex gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`font-mono text-xs border px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 ${
                          selectedSize === size
                            ? "bg-foreground text-background border-foreground font-bold"
                            : "border-border/60 text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors Selector */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                    // {isAr ? "اللون" : language === "fr" ? "Couleur" : "Color"}: {selectedColor}
                  </span>
                  <div className="flex gap-3">
                    {selectedProduct.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`group relative flex items-center justify-center p-0.5 rounded-full border transition-all duration-300 ${
                          selectedColor === color.name
                            ? "border-foreground scale-110"
                            : "border-border/40 hover:border-foreground/50"
                        }`}
                        title={color.name}
                      >
                        <span 
                          className="w-5 h-5 rounded-full block border border-black/10 shadow-xs" 
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Label - Large and Bold */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// Price</span>
                  <span className="font-mono text-xl font-bold text-foreground">{selectedProduct.price}</span>
                </div>

                {/* Add To Cart Trigger */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full border border-foreground bg-foreground text-background py-4 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 group cursor-pointer font-mono"
                >
                  {isAdding ? (
                    <BrandSymbol size={16} className="animate-spin text-background" />
                  ) : isAddedSuccess ? (
                    <>
                      <Check size={14} className="animate-bounce" />
                      <span>{t("cart.added.journey")}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} />
                      <span>{isAr ? "أضف إلى السلة" : "Add To Cart"}</span>
                    </>
                  )}
                </button>

                {/* Mixed Reviews Block */}
                <div className="border-t border-border/40 pt-6 space-y-4">
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// {isAr ? "الآراء" : language === "fr" ? "Avis Clients" : "Customer Reviews"}</span>
                  
                  <div className="space-y-4">
                    {/* Quality Review */}
                    <div className="text-xs">
                      <div className="flex text-amber-500 mb-1 select-none">★★★★★</div>
                      <p className="text-foreground/80 font-light italic leading-relaxed">"{t("review.q1.text")}"</p>
                      <span className="text-[8px] font-mono text-muted-foreground block mt-1">— {isAr ? "أنس، الدار البيضاء" : "Anas, Casablanca"} // {isAr ? "مراجعة الجودة" : "Quality Review"}</span>
                    </div>

                    {/* Emotional Review */}
                    <div className="text-xs">
                      <div className="flex text-amber-500 mb-1 select-none">★★★★★</div>
                      <p className="text-foreground/80 font-light italic leading-relaxed">"{t(`review.e${selectedProduct.id % 2 === 0 ? "2" : "1"}.text`)}"</p>
                      <span className="text-[8px] font-mono text-muted-foreground block mt-1">— {isAr ? "سلمى، مراكش" : "Salma, Marrakech"} // {isAr ? "مراجعة عاطفية" : "Emotional Review"}</span>
                    </div>
                  </div>
                </div>

                {/* Recently Viewed Products */}
                {recentlyViewed.filter(id => id !== selectedProduct.id).length > 0 && (
                  <div className="border-t border-border/40 pt-6 space-y-4">
                    <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// {t("recent.title")}</span>
                    <div className="grid grid-cols-3 gap-3">
                      {recentlyViewed
                        .filter(id => id !== selectedProduct.id)
                        .slice(0, 3)
                        .map(id => {
                          const rp = products.find(p => p.id === id);
                          if (!rp) return null;
                          return (
                            <div 
                              key={rp.id}
                              onClick={() => {
                                openProduct(rp);
                              }}
                              className="group cursor-pointer text-start space-y-1.5"
                            >
                              <div className="relative aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-2xs">
                                <img src={rp.imgFront} alt={t(`product.name.${rp.key}`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              </div>
                              <span className="font-mono text-[8px] font-bold text-foreground block truncate">{rp.price}</span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>

              {/* Geographical and coordinates footnote */}
              <div className="mt-8 pt-6 border-t border-border/40 font-mono text-[8px] text-muted-foreground tracking-widest flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <BrandSymbol size={10} className="text-muted-foreground" />
                  <span>TRUE SELF STUDIO®</span>
                </div>
                <span>33.5731° N, 7.5898° W</span>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ----------------- WISHLIST DRAWER ----------------- */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-end bg-background/50 backdrop-blur-md transition-all duration-500">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => setWishlistOpen(false)} />

          {/* Drawer container */}
          <div className="relative w-full sm:w-[480px] h-full bg-background border-l border-border/60 shadow-soft flex flex-col justify-between overflow-hidden z-10 animate-fade" dir={isAr ? "rtl" : "ltr"}>
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono">
                <BrandSymbol size={16} className="text-foreground" />
                <span className="text-xs font-semibold tracking-brand uppercase">{t("wishlist.title")} ({wishlist.length})</span>
              </div>
              <button 
                onClick={() => setWishlistOpen(false)}
                className="p-1 hover:opacity-60 transition-opacity border border-border/40 rounded-full bg-background/80 cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Wishlist Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
                  <span className="font-display text-2xl italic text-muted-foreground">{t("wishlist.empty")}</span>
                  <p className="text-xs text-muted-foreground/60 font-mono">{isAr ? "احمِ سلامك." : "Protect your peace."}</p>
                </div>
              ) : (
                <ul className="divide-y divide-border/30">
                  {wishlist.map((id) => {
                    const item = products.find(p => p.id === id);
                    if (!item) return null;
                    return (
                      <li key={item.id} className="py-4 flex items-center justify-between gap-4 first:pt-0">
                        <div 
                          className="flex items-center gap-4 cursor-pointer group"
                          onClick={() => {
                            openProduct(item);
                            setWishlistOpen(false);
                          }}
                        >
                          <div className="w-16 aspect-[3/4] border border-border/40 bg-secondary/15 rounded-2xs overflow-hidden flex-shrink-0">
                            <img src={item.imgFront} alt={t(`product.name.${item.key}`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="text-start">
                            <h4 className="font-display text-xl leading-tight text-foreground/95 group-hover:text-foreground/80 transition-colors">{t(`product.quote.${item.key}`)}</h4>
                            <p className="font-mono text-[9px] text-muted-foreground uppercase mt-0.5">
                              {t(`product.name.${item.key}`).split(" ")[t(`product.name.${item.key}`).split(" ").length - 1]} // {t(`philosophy.${item.philosophy}`)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-3 font-mono">
                          <span className="text-xs font-semibold">{item.price}</span>
                          <button 
                            onClick={() => toggleWishlist(item.id)}
                            className="text-muted-foreground/60 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-border/40 bg-secondary/10">
              <button
                onClick={() => setWishlistOpen(false)}
                className="w-full border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft cursor-pointer font-mono"
              >
                {isAr ? "العودة للتصفح" : language === "fr" ? "Retour au shopping" : "Back to shopping"}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ----------------- MINI CART DRAWER ----------------- */}
      {cartOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-end bg-background/50 backdrop-blur-md transition-all duration-500">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => {
            if (checkoutStep !== "success") {
              setCartOpen(false);
            }
          }} />

          {/* Drawer container */}
          <div className="relative w-full sm:w-[480px] h-full bg-background border-l border-border/60 shadow-soft flex flex-col justify-between overflow-hidden z-10 animate-fade" dir={isAr ? "rtl" : "ltr"}>
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BrandSymbol size={16} className="text-foreground animate-pulse" />
                <span className="font-mono text-xs font-semibold tracking-brand uppercase">{isAr ? "حقيبتك" : "Your Bag"} ({cartCount})</span>
              </div>
              {checkoutStep !== "success" && (
                <button 
                  onClick={() => {
                    setCheckoutStep("cart");
                    setCartOpen(false);
                  }}
                  className="p-1 hover:opacity-60 transition-opacity border border-border/40 rounded-full bg-background/80"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Emotional Cart Copy Banner */}
            {cartItems.length > 0 && checkoutStep !== "success" && (
              <div className="bg-secondary/40 px-6 py-3 border-b border-border/30 text-center text-[10px] sm:text-xs italic font-light font-mono text-muted-foreground animate-fade">
                ✦ {t("cart.emotion.banner")}
              </div>
            )}

            {/* Success screen */}
            {checkoutStep === "success" ? (
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="h-16 w-16 bg-foreground text-background flex items-center justify-center rounded-full animate-bounce shadow-soft">
                  <BrandSymbol size={32} className="text-background animate-pulse" />
                </div>
                <h3 className="font-display text-4xl lg:text-5xl leading-tight">
                  {isAr ? "شكراً لانضمامك إلى ذاتك الحقيقية" : language === "fr" ? "Merci de rejoindre TRUE SELF." : "Thank you for joining TRUE SELF."}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                  {isAr 
                    ? "لقد تم استلام طلبك بنجاح. سنتصل بك قريباً لتأكيد تفاصيل التوصيل."
                    : language === "fr"
                    ? "Votre commande a été reçue. Nous vous contacterons sous peu."
                    : "Your order has been received. We will contact you shortly."}
                </p>
                <button
                  onClick={() => {
                    setCheckoutStep("cart");
                    setCartOpen(false);
                  }}
                  className="border border-foreground bg-foreground text-background px-8 py-3.5 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs font-mono"
                >
                  {isAr ? "العودة للمجموعة" : "Return to Collection"}
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List or Checkout Form */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
                      <span className="font-display text-2xl italic text-muted-foreground">{isAr ? "حقيبتك فارغة" : "Your bag is empty."}</span>
                      <p className="text-xs text-muted-foreground/60 font-mono">{isAr ? "اختر الهدوء." : "Choose calm."}</p>
                    </div>
                  ) : checkoutStep === "cart" ? (
                    /* Cart list */
                    <ul className="divide-y divide-border/30">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-4 flex items-center justify-between gap-4 first:pt-0">
                          <div className="flex items-center gap-4">
                            <div className="w-16 aspect-[3/4] border border-border/40 bg-secondary/15 rounded-2xs overflow-hidden flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-start">
                              <h4 className="font-display text-xl leading-tight text-foreground/95">{item.quote}</h4>
                              <p className="font-mono text-[9px] text-muted-foreground uppercase mt-0.5">
                                {item.name.split(" ")[item.name.split(" ").length - 1]} // {isAr ? "المقاس" : language === "fr" ? "Taille" : "Size"}: {item.size} // {isAr ? "اللون" : language === "fr" ? "Couleur" : "Color"}: {item.color}
                              </p>
                              
                              {/* Quantity adjustments */}
                              <div className="flex items-center gap-2 mt-2 font-mono">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer"
                                >
                                  <Minus size={8} />
                                </button>
                                <span className="text-[10px] px-1">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer"
                                >
                                  <Plus size={8} />
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-3 font-mono">
                            <span className="text-xs font-semibold">{item.price * item.quantity} MAD</span>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground/60 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    /* Checkout form */
                    <form onSubmit={handleCheckoutSubmit} className="space-y-5 text-start">
                      <h3 className="font-display text-2xl mb-4 italic font-light">{isAr ? "معلومات الشحن" : "Shipping Details"}</h3>
                      
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] tracking-widest text-muted-foreground uppercase">{isAr ? "الاسم الكامل" : "Full Name"} *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground"
                          placeholder={isAr ? "أدخل اسمك الكامل" : "Enter your full name"}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] tracking-widest text-muted-foreground uppercase">{isAr ? "رقم الهاتف" : "Phone Number"} *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground text-start"
                          placeholder={isAr ? "أدخل رقم هاتفك" : "Enter your phone number"}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] tracking-widest text-muted-foreground uppercase">{isAr ? "المدينة" : "City"} *</label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground"
                          placeholder={isAr ? "الدار البيضاء، الرباط..." : "Casablanca, Rabat..."}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] tracking-widest text-muted-foreground uppercase">{isAr ? "العنوان الكامل" : "Full Address"} *</label>
                        <textarea
                          required
                          rows={2}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground resize-none"
                          placeholder={isAr ? "أدخل عنوانك بالتفصيل" : "Enter your complete delivery address"}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] tracking-widest text-muted-foreground uppercase">{isAr ? "ملاحظات إضافية (اختياري)" : "Notes (Optional)"}</label>
                        <textarea
                          rows={1}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-secondary/10 border-b border-border/60 px-3 py-2 text-sm focus:outline-none focus:border-foreground resize-none"
                          placeholder={isAr ? "أي تعليمات خاصة بالتوصيل" : "Any special delivery instructions"}
                        />
                      </div>

                      {orderError && <p className="text-[10px] text-red-500 font-mono">{orderError}</p>}
                    </form>
                  )}
                </div>

                {/* Drawer Footer summary */}
                {cartItems.length > 0 && (
                  <div className="p-6 border-t border-border/40 bg-secondary/10 space-y-4">
                    <div className="flex justify-between items-center font-mono">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">{isAr ? "المجموع الفرعي" : "Subtotal"}</span>
                      <span className="text-base font-semibold">{cartSubtotal} MAD</span>
                    </div>

                    {checkoutStep === "cart" ? (
                      <button
                        onClick={() => setCheckoutStep("checkout")}
                        className="w-full border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft cursor-pointer font-mono"
                      >
                        {isAr ? "الانتقال إلى الدفع" : "Proceed to Checkout"}
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setCheckoutStep("cart")}
                          className="flex-1 border border-border/60 bg-background text-foreground py-3.5 text-xs tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs font-mono cursor-pointer"
                        >
                          {isAr ? "عودة" : "Back"}
                        </button>
                        <button
                          onClick={handleCheckoutSubmit}
                          disabled={isSubmittingOrder}
                          className="flex-1 border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 font-mono cursor-pointer"
                        >
                          {isSubmittingOrder ? (
                            <BrandSymbol size={16} className="animate-spin text-background" />
                          ) : (
                            <span>{isAr ? "تأكيد الطلب" : "Place Order"}</span>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

          </div>
        </div>
      )}
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300">
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-50 p-2 hover:opacity-60 transition-opacity bg-foreground/10 text-foreground rounded-full border border-border/20 cursor-pointer"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img 
              src={lightboxImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-xs border border-border/20 shadow-2xl animate-fade" 
            />
          </div>
        </div>
      )}
      {/* Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 ${isAr ? "left-6" : "right-6"} z-50 p-3 rounded-full bg-background hover:bg-foreground hover:text-background text-foreground transition-all duration-300 border border-border/40 shadow-soft cursor-pointer animate-fade`}
          title="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
