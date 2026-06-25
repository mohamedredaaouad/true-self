import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useCart } from "@/hooks/useCart";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Symbol as BrandSymbol, Logo as BrandLogo } from "@/components/BrandLogo";
import { X, ShoppingBag, Check, Plus, Minus, Heart, Ruler, Info, Calendar } from "lucide-react";

// Assets imports
import cottonTexture from "@/assets/cream_cotton_texture_closeup.png";

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

export const Route = createFileRoute("/product/$productId")({
  head: ({ params }) => {
    const id = parseInt(params.productId);
    const names = {
      1: "Sweat Capuche Real > Perfect",
      2: "T-shirt Khalli Nass Thder",
      3: "Sweat Machi Kifma Bghaw",
      4: "T-shirt Live Free",
      5: "Sweat Capuche Not Here To Fit In",
      6: "Sweat Capuche Their Opinion",
      7: "Sweat Less Drama",
      8: "T-shirt Enough As You Are",
    };
    const name = names[id as keyof typeof names] || "Garment Philosophy";
    return {
      meta: [
        { title: `TRUE SELF® — ${name}` },
        { name: "description", content: "Curated premium streetwear made slowly. Designed to act as a physical reminder to live for yourself." },
      ],
    };
  },
  component: ProductDetailRoute,
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

const products: Product[] = [
  { id: 1, key: "1", price: "650 MAD", imgFront: p1Front, imgBack: p1Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Charcoal", hex: "#2C2C2A" }, { name: "Cream", hex: "#F9F6F0" }], philosophy: "authenticity", isFeatured: true, isBestSeller: true },
  { id: 2, key: "2", price: "350 MAD", imgFront: p2Front, imgBack: p2Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Cream", hex: "#F9F6F0" }, { name: "Olive", hex: "#4F5243" }], philosophy: "authenticity", isNew: true },
  { id: 3, key: "3", price: "550 MAD", imgFront: p7Front, imgBack: p7Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Olive", hex: "#4F5243" }, { name: "Charcoal", hex: "#2C2C2A" }], philosophy: "confidence", isNew: true },
  { id: 4, key: "4", price: "350 MAD", imgFront: p8Front, imgBack: p8Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Beige", hex: "#D8D0C5" }, { name: "Cream", hex: "#F9F6F0" }], philosophy: "freedom", isFeatured: true, isBestSeller: true },
  { id: 5, key: "5", price: "650 MAD", imgFront: p3Front, imgBack: p3Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Charcoal", hex: "#2C2C2A" }, { name: "Beige", hex: "#D8D0C5" }], philosophy: "freedom", isNew: true },
  { id: 6, key: "6", price: "650 MAD", imgFront: p4Front, imgBack: p4Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Cream", hex: "#F9F6F0" }, { name: "Charcoal", hex: "#2C2C2A" }], philosophy: "peace", isBestSeller: true },
  { id: 7, key: "7", price: "550 MAD", imgFront: p5Front, imgBack: p5Back, tag: "collection.new", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Olive", hex: "#4F5243" }, { name: "Cream", hex: "#F9F6F0" }], philosophy: "peace", isFeatured: true, isNew: true },
  { id: 8, key: "8", price: "350 MAD", imgFront: p6Front, imgBack: p6Back, tag: "collection.bestsellers", sizes: ["S", "M", "L", "XL"], colors: [{ name: "Beige", hex: "#D8D0C5" }, { name: "Olive", hex: "#4F5243" }], philosophy: "confidence", isFeatured: true, isBestSeller: true },
];

const storyTranslations = {
  fr: {
    whyTitle: "Pourquoi nous avons créé cette pièce",
    whySubtitle: "L'Intention de Design",
    whyStory: {
      1: "Le masque de la perfection sociale nous étouffe. Nous avons créé ce sweat à capuche pour être une armure physique contre l'anxiété de plaire aux autres. Sa coupe ample vous donne de l'espace, tandis que le message discret brodé ton-sur-ton vous rappelle que l'authenticité est la plus pure des libertés.",
      2: "« Les gens parleront toujours. » C'est une vérité universelle dans la culture marocaine. Ce t-shirt capture cette insouciance libératrice. Conçu pour ceux qui choisissent de vivre leur vérité sans chercher à s'expliquer devant le bruit extérieur.",
      3: "Ne soyez pas ce qu'ils veulent que vous soyez. Ce sweat est un manifeste sur votre poitrine pour tracer votre propre chemin. Conçu dans un coton épais et réconfortant pour vous rappeler que votre valeur ne dépend pas de l'approbation sociale.",
      4: "La liberté commence au moment exact où vous cessez de vous comparer. Ce t-shirt a été coupé dans une coupe relax pour vous donner la liberté physique et mentale d'être différent, loin des moules conformistes.",
      5: "Nous ne sommes pas nés pour correspondre aux attentes. Ce sweat à capuche lourd a été pensé comme un refus de se conformer. Une pièce brute pour exprimer une individualité tranquille.",
      6: "Leur opinion n'est pas votre réalité. Ce sweat est conçu pour agir comme un rappel calme : laissez les pensées des autres à leur place, protégez votre propre espace intérieur.",
      7: "Moins de drames, plus de calme. Une kenza minimaliste conçue pour les journées où vous choisissez de préserver votre énergie mentale et de cultiver le calme intérieur.",
      8: "Vous êtes assez, exactement tel que vous êtes en ce moment. Pas besoin d'artifices pour exister. Un t-shirt basique et robuste pour porter votre confiance intrinsèque.",
    },
    specsTabFit: "Coupe & Taille",
    specsTabFabric: "Matière",
    specsTabCare: "Entretien",
    specsTabShipping: "Livraison & Retours",
    sizeRecTitle: "Recommandation de Taille",
    sizeRecHeight: "Votre taille (cm)",
    sizeRecWeight: "Votre poids (kg)",
    sizeRecSuggest: "Taille recommandée",
    estDelivery: "Livraison estimée : {start} – {end}",
    madUnits: "MAD",
  },
  en: {
    whyTitle: "Why We Created This Piece",
    whySubtitle: "The Design Intent",
    whyStory: {
      1: "The social mask of perfection suffocates. We designed this hoodie to act as physical armor against the anxiety of pleasing others. Its loose, structured cut gives you literal space to move, while the ton-sur-ton embroidery reminds you that raw authenticity is the only real freedom.",
      2: "“People will always talk.” This is a core cultural realization. This tee captures that liberating defiance. It was created for individuals who choose to live their truth without explaining themselves to external noise.",
      3: "Do not adapt to fit in. This sweatshirt is a daily reminder on your chest to protect your unique light. Crafted from premium heavy cotton to give you physical comfort while standing in your own path.",
      4: "Comparison is the thief of peace. This relaxed-cut tee is structured to give you physical and mental space to exist independently from standard expectations.",
      5: "We were not born to conform. This heavyweight hoodie acts as a silent statement against social expectations. A raw piece for carrying a quiet, unbothered individuality.",
      6: "Their opinion is their reality, not yours. This hoodie is constructed to act as a physical anchor for your mental boundaries, leaving other people's assumptions exactly where they belong.",
      7: "Less drama, more calm. A minimal crewneck designed to help you preserve your mental energy, focus on slow breathing, and cultivate quiet inner silence.",
      8: "You are enough, exactly as you are today. You do not need to become someone else to hold value. A clean, robust everyday tee reminding you of your own worth.",
    },
    specsTabFit: "Fit & Sizing",
    specsTabFabric: "Fabric details",
    specsTabCare: "Care Guide",
    specsTabShipping: "Shipping & Returns",
    sizeRecTitle: "Size Recommendation",
    sizeRecHeight: "Your height (cm)",
    sizeRecWeight: "Your weight (kg)",
    sizeRecSuggest: "Suggested Size",
    estDelivery: "Estimated delivery: {start} – {end}",
    madUnits: "MAD",
  },
  ar: {
    whyTitle: "لماذا صممنا هذه القطعة",
    whySubtitle: "الغاية من التصميم",
    whyStory: {
      1: "المثالية قناع خانق يفرضه المجتمع. صممنا هذه السترة لتكون بمثابة درع مادي يحميك من قلق إرضاء الآخرين. قصة مريحة تمنحك مساحة للتحرك، بينما يذكرك التطريز الهادئ بأن الأصالة هي الحرية الحقيقية.",
      2: "«سيتحدث الناس دائماً.» حقيقة ثقافية متوارثة. يجسد هذا القميص التمرد الإيجابي والتحرر من الضغوط. صُمم لأولئك الذين يختارون عيش حقيقتهم دون الحاجة لتبريرها للآخرين.",
      3: "لا تتكيف لتلائم توقعاتهم. هذه الكنزة تذكير يومي على صدرك لتحمي مسارك المميز. صنعت من قطن ثقيل ومريح لتمنحك الأمان الجسدي والروحي.",
      4: "تبدأ حريتك عندما تتوقف عن مقارنة نفسك بالآخرين. صُمم هذا القميص بقصة مريحة لتمنحك مساحة للتعبير عن نفسك بعيداً عن القوالب الجاهزة.",
      5: "لم نولد لنكون نسخة مكررة. صممت هذه السترة الثقيلة لتكون بمثابة تعبير صامت عن الفردية الهادئة ورفض الامتثال الأعمى للتوقعات.",
      6: "آراؤهم تخصهم ولا تحدد واقعك. صممت هذه السترة لتكون مرساة لحماية سلامك الداخلي وحدودك النفسية.",
      7: "دراما أقل، سلام أكبر. كنزة بسيطة صممت لتذكيرك بحفظ طاقتك الذهنية والتركيز على الهدوء والسلام الداخلي.",
      8: "أنت كافٍ تماماً كما أنت اليوم. لا تحتاج لتصنع المظاهر لتثبت وجودك. قميص متين وبسيط يذكرك بقيمتك الذاتية الحقيقية.",
    },
    specsTabFit: "القصة والمقاس",
    specsTabFabric: "تفاصيل القماش",
    specsTabCare: "إرشادات العناية",
    specsTabShipping: "الشحن والاسترجاع",
    sizeRecTitle: "محدد المقاس المقترح",
    sizeRecHeight: "الطول (سم)",
    sizeRecWeight: "الوزن (كجم)",
    sizeRecSuggest: "المقاس المقترح",
    estDelivery: "التوصيل المتوقع: {start} – {end}",
    madUnits: "درهم",
  },
};

function ProductDetailRoute() {
  const { productId } = Route.useParams();
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { addToCart, cartOpen } = useCart();
  const router = useRouter();

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl">Piece Not Found</h1>
          <p className="text-sm font-mono text-muted-foreground">This design is resting in silence.</p>
          <Link to="/" className="inline-block border border-foreground px-6 py-2.5 text-xs font-mono uppercase tracking-brand hover:bg-foreground hover:text-background transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Interactive States
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [activeImage, setActiveImage] = useState(product.imgFront);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const [activeTab, setActiveTab] = useState<"fit" | "fabric" | "care" | "shipping">("fit");
  const [isAdding, setIsAdding] = useState(false);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);
  
  // Size Calculator States
  const [userHeight, setUserHeight] = useState<number>(175);
  const [userWeight, setUserWeight] = useState<number>(70);
  const [suggestedSize, setSuggestedSize] = useState<string>("M");

  // Wishlist state
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ts_wishlist");
      if (saved) setWishlist(JSON.parse(saved));

      // Save to recently viewed
      try {
        const savedRecent = localStorage.getItem("ts_recently_viewed");
        const prev: number[] = savedRecent ? JSON.parse(savedRecent) : [];
        const filtered = prev.filter((id) => id !== product.id);
        const updated = [product.id, ...filtered].slice(0, 3);
        localStorage.setItem("ts_recently_viewed", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  }, [product.id]);

  const toggleWishlist = () => {
    let updated: number[];
    if (wishlist.includes(product.id)) {
      updated = wishlist.filter((id) => id !== product.id);
    } else {
      updated = [...wishlist, product.id];
    }
    setWishlist(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("ts_wishlist", JSON.stringify(updated));
    }
  };

  // Magnifying Zoom on Hover
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

  // Add to cart with simulated latency
  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart({
        productId: product.id,
        name: t(`product.name.${product.key}`),
        quote: t(`product.quote.${product.key}`),
        image: product.imgFront,
        size: selectedSize,
        color: selectedColor,
        price: parseFloat(product.price.replace(" MAD", "")),
      });
      setIsAdding(false);
      setIsAddedSuccess(true);
      setTimeout(() => {
        setIsAddedSuccess(false);
      }, 2000);
    }, 800);
  };

  // Calculate suggested size
  useEffect(() => {
    if (userHeight > 185 || userWeight > 85) {
      setSuggestedSize("XL");
    } else if (userHeight > 178 || userWeight > 75) {
      setSuggestedSize("L");
    } else if (userHeight > 168 || userWeight > 60) {
      setSuggestedSize("M");
    } else {
      setSuggestedSize("S");
    }
  }, [userHeight, userWeight]);

  // Delivery Timelines
  const getDeliveryTimeline = () => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + 2);
    const end = new Date(today);
    end.setDate(today.getDate() + 4);
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString(language === "fr" ? "fr-FR" : language === "ar" ? "ar-MA" : "en-US", {
        month: "short",
        day: "numeric",
      });
    };
    
    const label = storyTranslations[language]?.estDelivery || storyTranslations["fr"].estDelivery;
    return label.replace("{start}", formatDate(start)).replace("{end}", formatDate(end));
  };

  const labels = storyTranslations[language] || storyTranslations["fr"];
  const productStoryText = labels.whyStory[product.id as keyof typeof labels.whyStory] || "";

  // Filter related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.philosophy === product.philosophy)
    .slice(0, 3);

  return (
    <div className="bg-background text-foreground overflow-x-hidden" dir={isAr ? "rtl" : "ltr"}>
      <Nav wishlistCount={wishlist.length} />

      {/* Main product view block */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Column - Immersive Gallery */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center relative gap-6">
            
            {/* Active zoom image canvas */}
            <div 
              className="relative aspect-[3/4] w-full max-w-[500px] border border-border/40 bg-secondary/5 rounded-xs overflow-hidden shadow-card cursor-zoom-in group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setLightboxImage(activeImage)}
            >
              <img 
                src={activeImage} 
                alt={t(`product.name.${product.key}`)}
                className="w-full h-full object-cover transition-transform duration-100 ease-out"
                style={zoomStyle}
              />
              
              {/* Instructions tag */}
              <div className="absolute bottom-3 left-3 bg-background/90 text-[8px] tracking-widest uppercase font-mono px-2 py-0.5 border border-border/40 pointer-events-none">
                {isAr ? "انقر للتكبير" : language === "fr" ? "Clic pour agrandir" : "Click to enlarge"}
              </div>

              {/* Tag indicator */}
              <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"} text-[8px] tracking-brand uppercase bg-background/95 backdrop-blur-xs px-2 py-0.5 text-foreground/90 font-mono border border-border/40`}>
                {t(product.tag)}
              </div>
            </div>

            {/* Thumbnails list */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveImage(product.imgFront)}
                className={`w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${
                  activeImage === product.imgFront ? "border-foreground scale-105" : "border-border/40 opacity-70"
                }`}
              >
                <img src={product.imgFront} alt="Front View" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImage(product.imgBack)}
                className={`w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${
                  activeImage === product.imgBack ? "border-foreground scale-105" : "border-border/40 opacity-70"
                }`}
              >
                <img src={product.imgBack} alt="Back View" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImage(cottonTexture)}
                className={`w-16 aspect-[3/4] border rounded-2xs overflow-hidden transition-all duration-300 ${
                  activeImage === cottonTexture ? "border-foreground scale-105" : "border-border/40 opacity-70"
                }`}
                title="Cotton Texture Closeup"
              >
                <img src={cottonTexture} alt="Fabric texture detail" className="w-full h-full object-cover" />
              </button>
            </div>

          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 text-start space-y-8 lg:sticky lg:top-24">
            
            {/* Identity segment */}
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[9px] tracking-brand text-muted-foreground uppercase">
                <span>{t(`philosophy.${product.philosophy}`)} // SER.100</span>
                
                {/* Heart wishlist button */}
                <button 
                  onClick={toggleWishlist}
                  className="hover:text-red-500 transition-colors p-1 cursor-pointer"
                  title="Add to Wishlist"
                >
                  <Heart size={14} className={wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-foreground"} />
                </button>
              </div>

              <h1 className="font-display text-4xl lg:text-5xl leading-tight italic">
                {t(`product.quote.${product.key}`)}
              </h1>
              <p className="font-mono text-[10px] text-muted-foreground uppercase">{t(`product.name.${product.key}`)}</p>
              
              <div className="text-xl font-bold font-mono text-foreground pt-2">
                {product.price}
              </div>
            </div>

            {/* Size selection */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">// Size Selector</span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
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

            {/* Colors pastilles */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                // {isAr ? "اللون" : language === "fr" ? "Couleur" : "Color"}: {selectedColor}
              </span>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group relative flex items-center justify-center p-0.5 rounded-full border transition-all duration-300 ${
                      selectedColor === color.name ? "border-foreground scale-110" : "border-border/40 hover:border-foreground/50"
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

            {/* Estimated Delivery timeline */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border-y border-border/30 py-3 select-none">
              <Calendar size={12} />
              <span>{getDeliveryTimeline()}</span>
            </div>

            {/* Size recommendation interactive panel */}
            <div className="bg-secondary/15 border border-border/40 p-4 rounded-xs space-y-4">
              <div className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground uppercase">
                <Ruler size={10} />
                <span>{labels.sizeRecTitle}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-muted-foreground block">{labels.sizeRecHeight}</label>
                  <input 
                    type="number" 
                    value={userHeight}
                    onChange={(e) => setUserHeight(parseInt(e.target.value) || 170)}
                    className="w-full bg-background border border-border/40 px-2 py-1 text-xs text-center font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-muted-foreground block">{labels.sizeRecWeight}</label>
                  <input 
                    type="number" 
                    value={userWeight}
                    onChange={(e) => setUserWeight(parseInt(e.target.value) || 60)}
                    className="w-full bg-background border border-border/40 px-2 py-1 text-xs text-center font-mono"
                  />
                </div>
              </div>
              <div className="text-center border-t border-border/30 pt-3 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">{labels.sizeRecSuggest}:</span>
                <span className="font-bold text-foreground text-sm bg-foreground text-background px-2.5 py-0.5 rounded-2xs">{suggestedSize}</span>
              </div>
            </div>

            {/* Add To Cart trigger */}
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

          </div>

        </div>
      </section>

      {/* WHY WE MADE THIS PIECE Section */}
      <section className="py-20 lg:py-32 border-b border-border/40 bg-secondary/15 relative overflow-hidden">
        <div className="mx-auto max-w-[1000px] px-6 text-center space-y-6">
          <Reveal>
            <span className="font-mono text-[9px] tracking-brand text-muted-foreground block mb-2">// {labels.whySubtitle}</span>
            <h2 className="font-display text-4xl lg:text-6xl italic font-light">{labels.whyTitle}</h2>
            <p className="mt-8 text-lg font-display italic leading-relaxed text-foreground/90 max-w-3xl mx-auto text-balance">
              {productStoryText}
            </p>
            <div className="w-12 h-px bg-foreground/35 mx-auto mt-8" />
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-4">
              "{t(`product.quote.${product.key}`)}"
            </p>
          </Reveal>
        </div>
      </section>

      {/* Spec Guide Tabs */}
      <section className="py-20 lg:py-32 border-b border-border/40">
        <div className="mx-auto max-w-[1000px] px-6">
          
          {/* Tab buttons */}
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 border-b border-border/30 pb-4 mb-10 font-mono text-xs select-none">
            {(["fit", "fabric", "care", "shipping"] as const).map((tab) => {
              const labelMap = {
                fit: labels.specsTabFit,
                fabric: labels.specsTabFabric,
                care: labels.specsTabCare,
                shipping: labels.specsTabShipping,
              };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 uppercase transition-all tracking-brand cursor-pointer border-b-2 ${
                    activeTab === tab ? "border-foreground text-foreground font-bold" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {labelMap[tab]}
                </button>
              );
            })}
          </div>

          {/* Tab content frames */}
          <div className="text-start font-light leading-relaxed text-sm max-w-xl mx-auto space-y-4">
            {activeTab === "fit" && (
              <Reveal className="space-y-3 font-mono text-xs">
                <p className="font-sans text-sm">// Custom Loose Sizing Overview</p>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-muted-foreground">Coupe / Fit</span>
                  <span>Loose fit for total freedom</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-muted-foreground">Sleeve Cut</span>
                  <span>Drop Shoulder design</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-muted-foreground">Chest width (M)</span>
                  <span>62 cm / Comfortable and wide</span>
                </div>
                <p className="font-sans text-[11px] text-muted-foreground pt-3">
                  * Note: We recommend choosing your normal size for the planned oversized look.
                </p>
              </Reveal>
            )}

            {activeTab === "fabric" && (
              <Reveal className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-sans font-semibold mb-2">// raw luxury specs</p>
                  <ul className="space-y-2 font-mono text-xs text-muted-foreground list-disc ps-4">
                    <li>100% Combed Organic Cotton weave</li>
                    <li>Heavyweight density (420 GSM for Hoodies, 240 GSM for Tees)</li>
                    <li>Discreet, ton-sur-ton signature embroidery</li>
                    <li>Unbleached organic cotton labels</li>
                  </ul>
                </div>
                <div className="aspect-square bg-secondary rounded-2xs overflow-hidden border border-border/40">
                  <img src={cottonTexture} alt="Combed organic cotton macro structure" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            )}

            {activeTab === "care" && (
              <Reveal className="space-y-4 font-mono text-xs">
                <p className="font-sans text-sm">// Slow Care Guidelines</p>
                <p>To preserve the organic structure of the weave and protect the signature tone-on-tone chest embroidery, we invite you to follow our slow care rituals:</p>
                <ul className="list-decimal ps-4 space-y-1">
                  <li>Wash slowly, in cold water (max 30°C) with similar tones.</li>
                  <li>Wash inside out to protect the embroidery threads.</li>
                  <li>Line dry under warm shade. Avoid tumble dryers.</li>
                  <li>Iron gently on reverse side if needed.</li>
                </ul>
              </Reveal>
            )}

            {activeTab === "shipping" && (
              <Reveal className="space-y-4 font-mono text-xs">
                <p className="font-sans text-sm">// Delivery & Safe Return Guidelines</p>
                <div className="space-y-2">
                  <p><span className="font-bold">Morocco:</span> 2-3 business days. Free shipping above 500 MAD (50 MAD below 500 MAD).</p>
                  <p><span className="font-bold">Returns:</span> We support simple, quiet returns within 14 days of delivery. The garment must remain unworn, unwashed, and include its coordinate unbleached tag packaging.</p>
                  <p><span className="font-bold">Secure Delivery:</span> Cash on Delivery available for all cities in Morocco.</p>
                </div>
              </Reveal>
            )}
          </div>

        </div>
      </section>

      {/* Related Products list */}
      {relatedProducts.length > 0 && (
        <section className="py-20 border-b border-border/40 bg-secondary/5">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h3 className="font-display text-3xl mb-12 italic text-center">
              {language === "fr" ? "Sélection Connexe" : language === "ar" ? "منتجات مشابهة" : "Related Curation"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((rp) => (
                <div 
                  key={rp.id}
                  onClick={() => {
                    router.navigate({ to: `/product/${rp.id}` });
                  }}
                  className="group cursor-pointer text-start space-y-4"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-xs">
                    <img src={rp.imgFront} alt={t(`product.name.${rp.key}`)} className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-700" />
                    <img src={rp.imgBack} alt="Back view" className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl leading-tight italic truncate">{t(`product.quote.${rp.key}`)}</h4>
                    <span className="font-mono text-[9px] text-muted-foreground uppercase">{t(`product.name.${rp.key}`).split(" ")[t(`product.name.${rp.key}`).split(" ").length - 1]}</span>
                    <span className="font-mono text-xs font-bold text-foreground block mt-1">{rp.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-background pt-24 pb-16 text-sm text-start">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 pb-16">
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo layout="stacked" symbolSize={44} textSize="text-xl font-medium tracking-[0.2em]" taglineSize="text-[8px] tracking-[0.25em]" className="items-start text-start" />
            <p className="max-w-sm text-xs text-muted-foreground italic leading-relaxed">
              "{t("philosophy.desc1").split(". ")[1] || "Live for yourself."}"
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-2" />
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {t("nav.shop")}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li><Link to="/" hash="collection" className="hover:text-foreground transition-colors">{t("collection.all")}</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-foreground transition-colors">{t("collection.best_sellers")}</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-foreground transition-colors">{t("collection.new_arrivals")}</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {isAr ? "ذاتنا" : "About"}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li><Link to="/about" className="hover:text-foreground transition-colors">{t("story.title")}</Link></li>
              <li><Link to="/" hash="manifesto" className="hover:text-foreground transition-colors">{t("manifesto.title")}</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {isAr ? "الدعم" : "Support"}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.support.faq")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.support.shipping")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.support.returns")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.support.contact")}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
            <p>© {new Date().getFullYear()} true self studio</p>
            <p className="italic font-display text-sm normal-case tracking-normal text-foreground/80">{labels.footerQuote}</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>

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

    </div>
  );
}
