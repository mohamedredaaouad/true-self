import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../hooks/useLanguage";
import { Nav } from "../components/Nav";
import { Reveal } from "../components/Reveal";
import { Logo as BrandLogo, Symbol as BrandSymbol } from "../components/BrandLogo";
import { useState, useEffect } from "react";

// Assets imports
import coastlineCampaign from "../assets/tangier_coastline_campaign.png";
import moroccanStreet from "../assets/authentic_moroccan_street.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "TRUE SELF® — Our Story & Philosophy" },
      { name: "description", content: "Discover the philosophy, conflict, and symbol behind TRUE SELF. Minimalist streetwear designed in North Africa as a silent rebellion." },
    ],
  }),
  component: About,
});

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
    footerQuote: "« Soyez vrai, laissez les gens parler. »",
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
    footerQuote: "“Be real, khalli nass thder.”",
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
    footerQuote: "« كن حقيقياً، ودع الناس يتحدثون. »",
  },
};

function About() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const [wishlistCount, setWishlistCount] = useState(0);

  // Read wishlist count on mount
  useEffect(() => {
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

  return (
    <div className="bg-background text-foreground overflow-x-hidden" dir={isAr ? "rtl" : "ltr"}>
      <Nav wishlistCount={wishlistCount} />

      {/* Hero section */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <span className="font-mono text-[9px] tracking-brand uppercase text-muted-foreground block mb-4">// {content.heroSubtitle}</span>
            <h1 className="font-display text-[12vw] sm:text-[9vw] lg:text-[6rem] leading-[0.9] text-balance max-w-4xl italic">
              {content.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* The Conflict (Problem) */}
      <section className="py-20 lg:py-32 border-b border-border/40 bg-secondary/15">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-start">
            <Reveal>
              <span className="font-mono text-[9px] tracking-brand text-muted-foreground block">// {content.problemLabel}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance italic font-light">
                {content.problemTitle}
              </h2>
              <div className="mt-8 space-y-4 font-light text-sm text-foreground/80 leading-relaxed max-w-lg">
                <p>{content.problemText1}</p>
                <p>{content.problemText2}</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <Reveal delay={150} className="w-full max-w-[450px]">
              <div className="aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-xs">
                <img 
                  src={moroccanStreet} 
                  alt="Minimalist Moroccan architectural street representing space to breathe" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* The Symbol Story */}
      <section className="py-20 lg:py-32 border-b border-border/40 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center lg:justify-start lg:ps-12 order-last lg:order-first">
              <Reveal className="w-full max-w-[320px] aspect-square bg-secondary/20 rounded-xs border border-border/30 flex items-center justify-center relative shadow-soft">
                <BrandSymbol className="text-foreground w-[120px] h-[120px]" />
                <div className="absolute bottom-3 right-3 font-mono text-[8px] opacity-40">33.5731° N · CASABLANCA</div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6 text-start">
              <Reveal delay={100}>
                <span className="font-mono text-[9px] tracking-brand text-muted-foreground block">// 02 // DESIGN IDENTITY</span>
                <h2 className="font-display text-4xl md:text-5xl mt-3 italic font-light">
                  {content.symbolTitle}
                </h2>
                <p className="mt-6 text-sm font-light text-foreground/85 leading-relaxed max-w-xl border-l-2 border-border/40 ps-6">
                  {content.symbolDesc1}
                </p>
                <div className="pt-6">
                  <p className="font-display text-2xl italic text-foreground tracking-wide leading-normal">
                    {t("symbol.desc3")}
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Founder's Vision & Moroccan Roots */}
      <section className="py-20 lg:py-32 border-b border-border/40 bg-secondary/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-start">
            <Reveal>
              <span className="font-mono text-[9px] tracking-brand text-muted-foreground block">// 03 // ORIGIN STORY</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 italic font-light">
                {content.founderTitle}
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground block mt-1 uppercase">{content.founderSubtitle}</span>
              <p className="mt-6 text-sm font-light text-foreground/80 leading-relaxed max-w-xl">
                {content.founderText}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={150} className="w-full max-w-[420px]">
              <div className="aspect-[3/4] overflow-hidden bg-secondary border border-border/40 rounded-xs">
                <img 
                  src={coastlineCampaign} 
                  alt="Scenic coastline of North Africa representing inner peace and horizon" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* The Manifesto & Values */}
      <section className="py-20 lg:py-32 border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[9px] tracking-brand text-muted-foreground block">// 04 // MANIFESTO</span>
              <h2 className="font-display text-4xl md:text-6xl mt-3">{content.valuesTitle}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <Reveal key={num} delay={num * 80}>
                <div className="border border-border/60 bg-secondary/5 p-8 rounded-xs text-start h-full flex flex-col justify-between hover:bg-secondary/15 transition-colors duration-500">
                  <div>
                    <span className="font-mono text-[8px] text-muted-foreground block mb-4">Pillar 0{num}</span>
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

          {/* SHOP Column */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {t("nav.shop")}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li><a href="/#collection" className="hover:text-foreground transition-colors">{t("collection.all")}</a></li>
              <li><a href="/#collection" className="hover:text-foreground transition-colors">{t("collection.best_sellers")}</a></li>
              <li><a href="/#collection" className="hover:text-foreground transition-colors">{t("collection.new_arrivals")}</a></li>
            </ul>
          </div>

          {/* ABOUT Column */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-brand uppercase mb-4 font-mono text-muted-foreground">// {isAr ? "ذاتنا" : "About"}</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-light font-mono">
              <li><a href="/about" className="hover:text-foreground transition-colors">{t("story.title")}</a></li>
              <li><a href="/#manifesto" className="hover:text-foreground transition-colors">{t("manifesto.title")}</a></li>
            </ul>
          </div>

          {/* SUPPORT Column */}
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

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-brand uppercase text-muted-foreground font-mono">
            <p>© {new Date().getFullYear()} true self studio</p>
            <p className="italic font-display text-sm normal-case tracking-normal text-foreground/80">{content.footerQuote}</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
