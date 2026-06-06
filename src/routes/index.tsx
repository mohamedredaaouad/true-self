import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/hooks/useLanguage";
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
    { id: 1, key: "1", price: "650 MAD", imgFront: p1Front, imgBack: p1Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"] },
    { id: 2, key: "2", price: "350 MAD", imgFront: p2Front, imgBack: p2Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"] },
    { id: 3, key: "3", price: "550 MAD", imgFront: p3Front, imgBack: p3Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"] },
    { id: 4, key: "4", price: "350 MAD", imgFront: p4Front, imgBack: p4Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"] },
    { id: 5, key: "5", price: "650 MAD", imgFront: p5Front, imgBack: p5Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"] },
    { id: 6, key: "6", price: "650 MAD", imgFront: p6Front, imgBack: p6Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"] },
    { id: 7, key: "7", price: "550 MAD", imgFront: p7Front, imgBack: p7Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"] },
    { id: 8, key: "8", price: "350 MAD", imgFront: p8Front, imgBack: p8Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"] },
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

  const openProduct = (p: Product) => {
    setSelectedProduct(p);
    setSelectedSize(p.sizes[0] || "");
    setIsAddedSuccess(false);
  };

  const handleAddToCart = () => {
    if (!selectedProduct || !selectedSize) return;
    setIsAdding(true);
    setTimeout(() => {
      addToCart({
        productId: selectedProduct.id,
        name: t(`product.name.${selectedProduct.key}`),
        quote: t(`product.quote.${selectedProduct.key}`),
        image: selectedProduct.imgFront,
        size: selectedSize,
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
      <Nav />

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
                  href="#philosophy"
                  className="border border-foreground/45 bg-background/20 backdrop-blur px-7 py-3.5 text-[10px] tracking-brand uppercase hover:bg-foreground hover:text-background transition-all duration-300 font-semibold rounded-xs shadow-xs text-center"
                >
                  {t("hero.explore")}
                </a>
              </div>
            </div>
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

      {/* 2. THE PROBLEM SECTION */}
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

      {/* 3. THE SOLUTION SECTION */}
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

      {/* 4. BRAND PHILOSOPHY */}
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

      {/* 5. MANIFESTO SECTION (The 4 Pillars) */}
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

      {/* 6. COLLECTION SECTION (Premium Editorial Luxury Layout) */}
      <section id="collection" className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 border-b border-border/40">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 border-b border-border/40 pb-8">
            <div className="text-start">
              <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
                {t("hero.vol").split(" — ")[0]}
              </p>
              <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-2xl">
                {t("featured.title")}
              </h2>
            </div>
            <a
              href="#"
              className="text-[10px] tracking-brand uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity font-semibold self-start md:self-end font-mono"
            >
              {t("featured.viewAll")}
            </a>
          </div>
        </Reveal>

        {/* Asymmetrical Staggered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-x-8 gap-y-28 items-start">
          {products.map((p, i) => {
            // Assign custom column spans to create an asymmetrical editorial layout
            let gridSpan = "xl:col-span-4"; // Default
            if (i === 0 || i === 5) gridSpan = "xl:col-span-6"; // Highlight key items with wider columns
            if (i === 3 || i === 7) gridSpan = "xl:col-span-3";

            return (
              <Reveal key={p.id} delay={(i % 3) * 100} className={`${gridSpan}`}>
                <div 
                  className="group cursor-pointer text-start"
                  onClick={() => openProduct(p)}
                  onMouseEnter={() => setHoveredProduct(p.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Image Frame - Generous spacing & smooth swap hover transition */}
                  <div className="relative overflow-hidden bg-secondary aspect-[3/4] rounded-xs border border-border/30">
                    {/* Front Image */}
                    <img
                      src={p.imgFront}
                      alt={t(`product.name.${p.key}`)}
                      loading="lazy"
                      width={800}
                      height={1066}
                      className={`h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] ${
                        hoveredProduct === p.id ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    {/* Back Image (Reveals on Hover) */}
                    <img
                      src={p.imgBack}
                      alt={`${t(`product.name.${p.key}`)} back view`}
                      loading="lazy"
                      width={800}
                      height={1066}
                      className={`h-full w-full object-cover absolute inset-0 transition-all duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.02] ${
                        hoveredProduct === p.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    
                    {/* Subtle Tag Badge */}
                    <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"} text-[9px] tracking-brand uppercase bg-background/95 backdrop-blur-xs px-2.5 py-1 text-foreground/90 font-mono font-medium border border-border/40`}>
                      {t(p.tag)}
                    </div>
                  </div>

                  {/* Card Content - Story & Quote focused */}
                  <div className="mt-6">
                    <span className="font-mono text-[9px] text-muted-foreground tracking-widest block uppercase mb-1">
                      {t(`product.name.${p.key}`).split(" ")[t(`product.name.${p.key}`).split(" ").length - 1]} // {p.price}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-foreground/95 leading-none">
                      {t(`product.quote.${p.key}`)}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 font-light leading-relaxed max-w-sm">
                      {t(`product.story.${p.key}`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 7. OUR STORY (North African Heritage Narrative) */}
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

      {/* 13. NEWSLETTER */}
      <section className="theme-dark bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:py-36 text-center">
          <Reveal>
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
              {t("news.tag")}
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
              {t("news.title")}
            </h2>
            <p className="mt-4 text-sm text-foreground/70 max-w-lg mx-auto font-light leading-relaxed">
              {t("news.desc")}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder={t("news.placeholder")}
                className="flex-1 bg-transparent border-b border-foreground/40 px-1 py-3 text-sm focus:outline-none focus:border-foreground placeholder:text-foreground/40 text-start"
              />
              <button className="border border-foreground bg-foreground text-background px-6 py-3 text-[10px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-colors font-semibold rounded-xs font-mono">
                {t("news.btn")}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10 text-sm text-start">
          <div className="md:col-span-2">
            <p className="font-display text-3xl">
              TRUE SELF<span className="text-muted-foreground">®</span>
            </p>
            <p className="mt-4 max-w-xs text-xs text-muted-foreground italic leading-relaxed">
              "{t("philosophy.desc1").split(". ")[1] || "Live for yourself."}"
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">{t("nav.shop")}</p>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li>
                <a href="#collection" className="hover:text-foreground transition-colors">
                  Tees
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-foreground transition-colors">
                  Hoodies
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-foreground transition-colors">
                  Sweatshirts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">Soul</p>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li>
                <a href="#philosophy" className="hover:text-foreground transition-colors">
                  {t("nav.philosophy")}
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-foreground transition-colors">
                  {t("nav.lookbook")}
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-foreground transition-colors">
                  {t("nav.journal")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
            <p>© {new Date().getFullYear()} true self studio</p>
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

            {/* Visual Column - Double view stacked side-by-side */}
            <div className="flex-1 bg-secondary/10 p-6 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border/40 relative">
              <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
                {/* Front view card */}
                <div className="relative aspect-[3/4] border border-border/40 bg-background rounded-xs overflow-hidden shadow-card">
                  <img 
                    src={selectedProduct.imgFront} 
                    alt={`${t(`product.name.${selectedProduct.key}`)} front`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-background/90 text-[8px] tracking-widest uppercase font-mono px-2 py-0.5 border border-border/40">
                    {isAr ? "الواجهة" : "Front View"}
                  </div>
                </div>
                {/* Back view card */}
                <div className="relative aspect-[3/4] border border-border/40 bg-background rounded-xs overflow-hidden shadow-card">
                  <img 
                    src={selectedProduct.imgBack} 
                    alt={`${t(`product.name.${selectedProduct.key}`)} back`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-background/90 text-[8px] tracking-widest uppercase font-mono px-2 py-0.5 border border-border/40">
                    {isAr ? "الخلفية" : "Back View"}
                  </div>
                </div>
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

                {/* Price Label */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// Price</span>
                  <span className="font-mono text-xl font-semibold text-foreground/90">{selectedProduct.price}</span>
                </div>

                {/* Add To Cart Trigger */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full border border-foreground bg-foreground text-background py-4 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-500 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isAdding ? (
                    <span className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : isAddedSuccess ? (
                    <>
                      <Check size={14} className="animate-bounce" />
                      <span>{isAr ? "تمت الإضافة" : "Added To Bag"}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} />
                      <span>{isAr ? "أضف إلى السلة" : "Add To Cart"}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Geographical and coordinates footnote */}
              <div className="mt-8 pt-6 border-t border-border/40 font-mono text-[8px] text-muted-foreground tracking-widest flex justify-between">
                <span>TRUE SELF STUDIO®</span>
                <span>33.5731° N, 7.5898° W</span>
              </div>

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
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} />
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

            {/* Success screen */}
            {checkoutStep === "success" ? (
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="h-16 w-16 bg-foreground text-background flex items-center justify-center rounded-full animate-bounce">
                  <Check size={32} />
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
                                {item.name.split(" ")[item.name.split(" ").length - 1]} // Size: {item.size}
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
                            <span className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
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
    </div>
  );
}
