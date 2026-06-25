import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useLanguage } from "./router-D8QfgQtv.mjs";
import { N as Nav, R as Reveal } from "./Reveal-BJC1y1j8.mjs";
import { S as Symbol$1, L as Logo } from "./BrandLogo-Be2G5YYH.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const coastlineCampaign = "/assets/tangier_coastline_campaign-ByLywLE4.png";
const moroccanStreet = "/assets/authentic_moroccan_street-0_sK6WFg.png";
const localTranslations = {
  fr: {
    heroTitle: "Une Rébellion Silencieuse.",
    heroSubtitle: "Histoire & Philosophie",
    problemLabel: "01 // LE CONFLIT",
    problemTitle: "Le poids des apparences.",
    problemText1: "Nous grandissons en nous adaptant aux filtres du monde, apprenant à jouer des rôles pour plaire et obtenir de la validation, finissant par étouffer la voix intérieure qui sait qui nous sommes vraiment.",
    problemText2: "TRUE SELF est né comme un rappel physique d'arrêter de performer. Pour faire tomber les masques, sortir du cercle, et choisir la paix face au bruit extérieur.",
    symbolTitle: "L'Anatomie du Symbole",
    symbolDesc1: "Véritable icône de résistance tranquille, notre symbole se compose de deux éléments géométriques : le Cercle, représentant la société, ses règles et sa recherche d'approbation ; et le Point, représentant l'individu choisissant l'authenticité.",
    founderTitle: "Vision du Fondateur",
    founderSubtitle: "De Casablanca à Tanger",
    founderText: "Nos racines se situent là où la brise de la mer rencontre le grès d'Afrique du Nord. Influencés par le rythme lent de l'océan et les textures brutes des rues marocaines, nous concevons des vêtements faits pour vous ancrer. Nous choisissons des drops limités, du coton non blanchi et des étiquettes à planter car la paix doit laisser une trace de beauté.",
    valuesTitle: "Notre Manifeste",
    footerQuote: "« Soyez vrai, laissez les gens parler. »"
  },
  en: {
    heroTitle: "A Quiet Rebellion.",
    heroSubtitle: "Our Story & Philosophy",
    problemLabel: "01 // THE CONFLICT",
    problemTitle: "The weight of expectations.",
    problemText1: "We grow up adapting to the filters of the world, learning to perform roles for social validation, slowly silencing the voice within that knows who we truly are.",
    problemText2: "TRUE SELF is born as a physical anchor to stop performing. To drop the masks, step outside the circle, and return to raw, unvarnished truth.",
    symbolTitle: "Anatomy of the Symbol",
    symbolDesc1: "An icon of quiet resistance, our symbol consists of two geometric elements: the Circle, representing societal frameworks and validation; and the Dot, representing the individual stepping away into freedom.",
    founderTitle: "Founder's Vision",
    founderSubtitle: "Casablanca & Tangier",
    founderText: "Our roots lie where the Atlantic breeze meets North African sandstone. Influenced by the slow rhythm of the ocean and the rich textures of Moroccan streets, we set out to create garments that do not define you, but ground you. We choose slow drops, unbleached labels, and plantable organic seeds because peace should leave a trace of beauty.",
    valuesTitle: "Our Manifesto",
    footerQuote: "“Be real, khalli nass thder.”"
  },
  ar: {
    heroTitle: "تمرد صامت.",
    heroSubtitle: "القصة والفلسفة",
    problemLabel: "01 // الصراع",
    problemTitle: "ثقل التوقعات والمظاهر.",
    problemText1: "ننشأ ونحن نتكيف مع فلاتر العالم وتوقعاته، ونتعلم كيف نؤدي أدواراً لنيل القبول والرضا، ونسكت ببطء ذلك الصوت الهادئ بداخلنا الذي يعرف حقيقتنا.",
    problemText2: "ذاتك الحقيقية ولدت كمرساة مادية لتذكيرنا بالتوقف عن التمثيل. لخلع الأقنعة، والخطو خارج الدائرة، والعودة إلى الحقيقة البسيطة وغير المزيفة.",
    symbolTitle: "تشريح الرمز الهندسي",
    symbolDesc1: "رمز للمقاومة الهادئة، يتكون من عنصرين هندسيين: الدائرة، وتمثل الأطر الاجتماعية والحاجة المستمرة للموافقة؛ والنقطة، وتمثل الفرد الذي يخطو خارجاً نحو الحرية والأصالة.",
    founderTitle: "رؤية المؤسس",
    founderSubtitle: "بين الدار البيضاء وطنجة",
    founderText: "تكمن جذورنا حيث تلتقي نسمات البحر الأبيض المتوسط والمحيط الأطلسي مع رمال شمال إفريقيا. متأثرين بالإيقاع البطيء للمحيط والتفاصيل الخام للشوارع المغربية، صممنا قطعاً لتمنحك السكينة. نختار إصدارات محدودة، وقطناً طبيعياً، وبذوراً قابلة للزراعة لأن السلام يجب أن يترك أثراً جميلاً.",
    valuesTitle: "بياننا وقيمنا",
    footerQuote: "« كن حقيقياً، ودع الناس يتحدثون. »"
  }
};
function About() {
  const {
    t,
    language
  } = useLanguage();
  const isAr = language === "ar";
  const [wishlistCount, setWishlistCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("ts_wishlist");
        if (saved) {
          setWishlistCount(JSON.parse(saved).length);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, []);
  const content = localTranslations[language] || localTranslations["fr"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground overflow-x-hidden", dir: isAr ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { wishlistCount }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-36 pb-20 lg:pt-48 lg:pb-32 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-brand uppercase text-muted-foreground block mb-4", children: [
        "// ",
        content.heroSubtitle
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[12vw] sm:text-[9vw] lg:text-[6rem] leading-[0.9] text-balance max-w-4xl italic", children: content.heroTitle })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 border-b border-border/40 bg-secondary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 space-y-6 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] tracking-brand text-muted-foreground block", children: [
          "// ",
          content.problemLabel
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mt-3 text-balance italic font-light", children: content.problemTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4 font-light text-sm text-foreground/80 leading-relaxed max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: content.problemText1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: content.problemText2 })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "w-full max-w-[450px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: moroccanStreet, alt: "Minimalist Moroccan architectural street representing space to breathe", className: "w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 border-b border-border/40 bg-background relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center lg:justify-start lg:ps-12 order-last lg:order-first", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "w-full max-w-[320px] aspect-square bg-secondary/20 rounded-xs border border-border/30 flex items-center justify-center relative shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { className: "text-foreground w-[120px] h-[120px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 font-mono text-[8px] opacity-40", children: "33.5731° N · CASABLANCA" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-6 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-brand text-muted-foreground block", children: "// 02 // DESIGN IDENTITY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mt-3 italic font-light", children: content.symbolTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm font-light text-foreground/85 leading-relaxed max-w-xl border-l-2 border-border/40 ps-6", children: content.symbolDesc1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic text-foreground tracking-wide leading-normal", children: t("symbol.desc3") }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 border-b border-border/40 bg-secondary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-6 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-brand text-muted-foreground block", children: "// 03 // ORIGIN STORY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mt-3 italic font-light", children: content.founderTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground block mt-1 uppercase", children: content.founderSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm font-light text-foreground/80 leading-relaxed max-w-xl", children: content.founderText })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "w-full max-w-[420px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coastlineCampaign, alt: "Scenic coastline of North Africa representing inner peace and horizon", className: "w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-[1.03]" }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-brand text-muted-foreground block", children: "// 04 // MANIFESTO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl mt-3", children: content.valuesTitle })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [1, 2, 3, 4].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: num * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border/60 bg-secondary/5 p-8 rounded-xs text-start h-full flex flex-col justify-between hover:bg-secondary/15 transition-colors duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-4", children: [
          "Pillar 0",
          num
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3 text-foreground/95", children: t(`manifesto.p${num}.title`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-light leading-relaxed", children: t(`manifesto.p${num}.desc`) })
      ] }) }) }, num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background pt-24 pb-16 text-sm text-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { layout: "stacked", symbolSize: 44, textSize: "text-xl font-medium tracking-[0.2em]", taglineSize: "text-[8px] tracking-[0.25em]", className: "items-start text-start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-sm text-xs text-muted-foreground italic leading-relaxed", children: [
            '"',
            t("philosophy.desc1").split(". ")[1] || "Live for yourself.",
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block lg:col-span-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            t("nav.shop")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#collection", className: "hover:text-foreground transition-colors", children: t("collection.all") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#collection", className: "hover:text-foreground transition-colors", children: t("collection.best_sellers") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#collection", className: "hover:text-foreground transition-colors", children: t("collection.new_arrivals") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            isAr ? "ذاتنا" : "About"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "hover:text-foreground transition-colors", children: t("story.title") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#manifesto", className: "hover:text-foreground transition-colors", children: t("manifesto.title") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground", children: [
            "// ",
            isAr ? "الدعم" : "Support"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-light font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: t("footer.support.faq") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: t("footer.support.shipping") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: t("footer.support.returns") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: t("footer.support.contact") }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 pt-8 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-brand uppercase text-muted-foreground font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " true self studio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic font-display text-sm normal-case tracking-normal text-foreground/80", children: content.footerQuote }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.rights") })
      ] }) })
    ] })
  ] });
}
export {
  About as component
};
