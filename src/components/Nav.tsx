import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "../hooks/useLanguage";
import { useCart } from "../hooks/useCart";
import { Logo } from "./BrandLogo";

interface NavProps {
  wishlistCount?: number;
  onOpenWishlist?: () => void;
}

export function Nav({ wishlistCount = 0, onOpenWishlist }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { cartCount, setCartOpen } = useCart();
  const [cartAnimate, setCartAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Micro-interaction: Pulse cart indicator whenever count changes
  useEffect(() => {
    if (cartCount > 0) {
      setCartAnimate(true);
      const timer = setTimeout(() => setCartAnimate(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const navLinkClass =
    "relative py-1 hover:text-foreground text-foreground/80 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xs" 
          : "bg-gradient-to-b from-background/95 via-background/60 to-transparent pb-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="hover:opacity-85 transition-opacity py-1">
          <Logo 
            layout="horizontal" 
            symbolClassName="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[28px] md:h-[28px]" 
            textSize="text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-brand" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[10px] sm:text-xs tracking-brand uppercase font-medium">
          <Link to="/" hash="collection" search={{ category: "all" }} className={navLinkClass}>
            {t("category.all")}
          </Link>
          <Link to="/" hash="collection" search={{ category: "tshirt" }} className={navLinkClass}>
            {t("category.tshirt")}
          </Link>
          <Link to="/" hash="collection" search={{ category: "sweatshirt" }} className={navLinkClass}>
            {t("category.sweatshirt")}
          </Link>
          <Link to="/" hash="collection" search={{ category: "hoodie" }} className={navLinkClass}>
            {t("category.hoodie")}
          </Link>
          <Link to="/about" activeProps={{ className: "underline underline-offset-4 font-semibold text-foreground" }} className={navLinkClass}>
            {t("story.title")}
          </Link>
          <Link to="/" hash="brand-symbol" className={navLinkClass}>
            {t("nav.philosophy")}
          </Link>
        </nav>

        <div className="flex items-center gap-5 text-[10px] sm:text-xs tracking-brand uppercase text-foreground/90 font-medium">
          {/* Elegant Language Switcher */}
          <div className="flex gap-2 border-r border-border/60 pr-5 select-none font-mono">
            {(["fr", "en", "ar"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-[9px] font-semibold tracking-normal transition-all duration-300 hover:text-foreground ${
                  language === lang
                    ? "text-foreground underline underline-offset-4 font-bold scale-105"
                    : "text-muted-foreground hover:text-foreground/80"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="#collection" className="hidden sm:inline-block hover:text-foreground/60 transition-colors">
            {t("nav.search")}
          </a>
          
          {onOpenWishlist && (
            <button 
              onClick={onOpenWishlist}
              className="hover:text-foreground/60 transition-colors font-mono font-medium cursor-pointer"
            >
              {t("wishlist.title")} <span className="text-muted-foreground font-normal">({wishlistCount})</span>
            </button>
          )}

          <button 
            onClick={() => setCartOpen(true)}
            className="relative hover:text-foreground/60 transition-colors font-mono font-medium flex items-center gap-1 cursor-pointer"
            aria-label="Open Cart"
          >
            <span>{t("nav.bag")}</span>
            <span
              className={`inline-block text-muted-foreground font-normal transition-transform duration-300 ${
                cartAnimate ? "animate-badge-pop text-foreground font-semibold" : ""
              }`}
            >
              ({cartCount})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
