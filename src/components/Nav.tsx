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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="hover:opacity-85 transition-opacity py-1">
          <Logo layout="horizontal" symbolSize={28} textSize="text-lg sm:text-xl font-semibold tracking-brand" />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-brand uppercase">
          <Link to="/" hash="collection" className="hover:opacity-60 transition-opacity">
            {t("nav.shop")}
          </Link>
          <Link to="/" hash="philosophy" className="hover:opacity-60 transition-opacity">
            {t("nav.philosophy")}
          </Link>
          <Link to="/" hash="lookbook" className="hover:opacity-60 transition-opacity">
            {t("nav.lookbook")}
          </Link>
          <Link to="/" hash="journal" className="hover:opacity-60 transition-opacity">
            {t("nav.journal")}
          </Link>
        </nav>
        <div className="flex items-center gap-5 text-xs tracking-brand uppercase">
          {/* Elegant Language Switcher */}
          <div className="flex gap-2 border-r border-border/60 pr-5 select-none font-mono">
            {(["fr", "en", "ar"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-[9px] font-semibold tracking-normal transition-all duration-300 hover:text-foreground ${
                  language === lang
                    ? "text-foreground underline underline-offset-4 font-bold scale-105"
                    : "text-muted-foreground opacity-70"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="hidden sm:block hover:opacity-60 transition-opacity">
            {t("nav.search")}
          </button>
          
          {onOpenWishlist && (
            <button 
              onClick={onOpenWishlist}
              className="hover:opacity-60 transition-opacity font-mono font-medium"
            >
              {t("wishlist.title")} <span className="text-muted-foreground">({wishlistCount})</span>
            </button>
          )}

          <button 
            onClick={() => setCartOpen(true)}
            className="relative hover:opacity-60 transition-opacity font-mono font-medium"
          >
            {t("nav.bag")} <span className="text-muted-foreground">({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
