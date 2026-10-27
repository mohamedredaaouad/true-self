import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight, Eye } from "lucide-react";

export interface CarouselProduct {
  id: number;
  key: string;
  category: "tshirt" | "sweatshirt" | "hoodie";
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
  campaignImg?: string;
  campaignVideo?: string;
}

interface CinematicCarouselProps {
  products: CarouselProduct[];
  onOpenProduct: (product: CarouselProduct, selectedColor?: string) => void;
  language: "fr" | "en" | "ar";
  t: (key: string) => string;
}

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per slide

export function CinematicCarousel({
  products,
  onOpenProduct,
  language,
  t,
}: CinematicCarouselProps) {
  const isAr = language === "ar";
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredThumbId, setHoveredThumbId] = useState<number | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 35,
    skipSnaps: false,
    direction: isAr ? "rtl" : "ltr",
  });

  // Detect accessibility preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) setIsPlaying(false);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  // Sync selected index with Embla API
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay loop with pause on hover / focus
  useEffect(() => {
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

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        isAr ? scrollNext() : scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        isAr ? scrollPrev() : scrollNext();
      }
    },
    [scrollPrev, scrollNext, isAr],
  );

  if (!products || products.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="TRUE SELF® Editorial Campaign Carousel"
    >
      {/* Embla Viewport */}
      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex">
          {products.map((product, idx) => {
            const isActive = selectedIndex === idx;
            const campaignImage = product.campaignImg || product.imgBack || product.imgFront;

            return (
              <div
                key={product.id}
                className="flex-[0_0_100%] min-w-0 relative"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${products.length} - ${t(`product.name.${product.key}`)}`}
              >
                {/* Visual Canvas: Large Cinematic Format */}
                <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] w-full overflow-hidden flex flex-col justify-end bg-secondary/30">
                  
                  {/* Campaign Video (Future Slot) or Large Editorial Photograph */}
                  {product.campaignVideo && !prefersReducedMotion ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={campaignImage}
                      className="absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <source src={product.campaignVideo} type="video/mp4" />
                      <img
                        src={campaignImage}
                        alt={t(`product.name.${product.key}`)}
                        className="h-full w-full object-cover object-[center_35%]"
                      />
                    </video>
                  ) : (
                    <img
                      src={campaignImage}
                      alt={`TRUE SELF® Campaign — ${t(`product.name.${product.key}`)}`}
                      loading={idx === 0 ? "eager" : "lazy"}
                      fetchPriority={idx === 0 ? "high" : "auto"}
                      className={`absolute inset-0 h-full w-full object-cover object-[center_35%] select-none pointer-events-none transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "scale-100 opacity-100" : "scale-[1.03] opacity-80"
                      }`}
                    />
                  )}

                  {/* Editorial Contrast Gradient Overlay */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                      isAr
                        ? "bg-gradient-to-t md:bg-gradient-to-l from-background/95 via-background/65 md:via-background/40 to-transparent"
                        : "bg-gradient-to-t md:bg-gradient-to-r from-background/95 via-background/65 md:via-background/40 to-transparent"
                    }`}
                  />
                  {/* Subtle Top & Bottom Cinematic Edge Vignette */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

                  {/* Foreground Content Container */}
                  <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-12 py-12 md:py-20 flex flex-col md:flex-row items-end md:items-end justify-between gap-8">
                    
                    {/* Left/Start Column: Typographic Narrative */}
                    <div className="max-w-xl text-start space-y-4">
                      {/* Chapter / Category Tag */}
                      <div className="flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-brand uppercase text-muted-foreground">
                        <span className="px-2 py-0.5 rounded-2xs bg-foreground text-background font-semibold">
                          0{idx + 1} // {t("collection.featured")}
                        </span>
                        <span>·</span>
                        <span className="text-foreground/90 font-medium">{t(`category.${product.category}`)}</span>
                        <span>·</span>
                        <span className="text-muted-foreground/80">{t(product.tag)}</span>
                      </div>

                      {/* Main Printed Slogan / Quote */}
                      <h3
                        className={`font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[5rem] text-foreground italic font-light tracking-tight leading-[0.98] transition-all duration-700 delay-100 ${
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        {t(`product.quote.${product.key}`)}
                      </h3>

                      {/* Product Name & Short Story */}
                      <div className="space-y-2 pt-1 border-t border-border/30 max-w-lg">
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-brand text-muted-foreground">
                          {t(`product.name.${product.key}`)}
                        </p>
                        <p className="text-xs sm:text-sm text-foreground/85 font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {t(`product.story.${product.key}`)}
                        </p>
                      </div>

                      {/* Price & Color Swatches */}
                      <div className="pt-2 flex items-center gap-6">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">
                          {product.price}
                        </span>

                        <div className="flex items-center gap-2" title="Color options">
                          {product.colors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() => onOpenProduct(product, color.name)}
                              className="group/color relative p-0.5 rounded-full border border-border/60 hover:border-foreground transition-all duration-200 cursor-pointer"
                              title={color.name}
                            >
                              <span
                                className="w-3.5 h-3.5 rounded-full block border border-black/10 shadow-xs"
                                style={{ backgroundColor: color.hex }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* CTAs Row */}
                      <div className="pt-3 flex flex-wrap items-center gap-4 font-mono">
                        <button
                          onClick={() => onOpenProduct(product)}
                          className="border border-foreground bg-foreground text-background px-7 py-3 text-[10px] sm:text-xs tracking-brand uppercase font-bold hover:bg-transparent hover:text-foreground transition-all duration-300 rounded-xs shadow-soft flex items-center gap-2 cursor-pointer"
                        >
                          <Eye size={13} />
                          <span>{isAr ? "اكتشف القطعة" : language === "fr" ? "Découvrir la pièce" : "Discover the piece"}</span>
                        </button>

                        <Link
                          to={`/product/${product.id}`}
                          className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs tracking-brand uppercase text-foreground/80 hover:text-foreground transition-colors underline underline-offset-4 py-2 px-1"
                        >
                          <span>{isAr ? "التفاصيل الكاملة" : language === "fr" ? "Fiche produit" : "Full details"}</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Right/End Column: Interactive Garment Studio Card (Hover Flips Front/Back) */}
                    <div
                      className="hidden sm:block shrink-0 cursor-pointer text-start"
                      onClick={() => onOpenProduct(product)}
                      onMouseEnter={() => setHoveredThumbId(product.id)}
                      onMouseLeave={() => setHoveredThumbId(null)}
                    >
                      <div className="relative w-36 lg:w-44 aspect-[3/4] bg-background/90 backdrop-blur-md border border-border/60 rounded-xs p-2 shadow-card transition-all duration-500 hover:scale-105 hover:border-foreground/80 group/thumb">
                        <div className="relative w-full h-full overflow-hidden rounded-2xs bg-secondary/30">
                          {/* Front */}
                          <img
                            src={product.imgFront}
                            alt={`${t(`product.name.${product.key}`)} front`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                              hoveredThumbId === product.id ? "opacity-0" : "opacity-100"
                            }`}
                          />
                          {/* Back */}
                          <img
                            src={product.imgBack}
                            alt={`${t(`product.name.${product.key}`)} back`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                              hoveredThumbId === product.id ? "opacity-100" : "opacity-0"
                            }`}
                          />

                          {/* Flip view indicator */}
                          <div className="absolute bottom-1.5 inset-x-1.5 text-center bg-background/85 backdrop-blur-2xs py-0.5 text-[7px] font-mono tracking-widest uppercase text-foreground/80 pointer-events-none border border-border/30">
                            {hoveredThumbId === product.id ? "DOS" : "DEVANT"}
                          </div>
                        </div>

                        {/* Corner Coordinates */}
                        <div className="mt-1.5 flex justify-between items-center text-[7px] font-mono text-muted-foreground uppercase px-0.5">
                          <span>{product.category}</span>
                          <span>SER.100</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <div className="absolute bottom-4 left-6 right-6 lg:left-12 lg:right-12 z-20 flex items-center justify-between text-foreground">
        
        {/* Left: Interactive Progress Indicators */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {scrollSnaps.map((_, snapIdx) => {
              const isCurrent = selectedIndex === snapIdx;
              return (
                <button
                  key={snapIdx}
                  onClick={() => scrollTo(snapIdx)}
                  aria-label={`Go to slide ${snapIdx + 1}`}
                  className="relative py-2 px-0.5 group/bar cursor-pointer"
                >
                  <div
                    className={`h-[2px] transition-all duration-500 rounded-full ${
                      isCurrent
                        ? "w-8 sm:w-12 bg-foreground"
                        : "w-3 sm:w-4 bg-foreground/25 group-hover/bar:bg-foreground/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Numeric index display: 01 / 04 */}
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground uppercase">
            0{selectedIndex + 1} <span className="opacity-40">/</span> 0{products.length}
          </span>
        </div>

        {/* Right: Controls (Previous, Next, Play/Pause) */}
        <div className="flex items-center gap-2 font-mono">
          {/* Autoplay Pause / Play toggle */}
          {!prefersReducedMotion && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 sm:p-2.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-300 text-foreground cursor-pointer shadow-xs"
              title={isPlaying ? "Pause autoplay" : "Play autoplay"}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause size={11} /> : <Play size={11} />}
            </button>
          )}

          {/* Previous Arrow */}
          <button
            onClick={isAr ? scrollNext : scrollPrev}
            className="p-2 sm:p-2.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-300 text-foreground cursor-pointer shadow-xs"
            title="Previous slide"
            aria-label="Previous slide"
          >
            {isAr ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
          </button>

          {/* Next Arrow */}
          <button
            onClick={isAr ? scrollPrev : scrollNext}
            className="p-2 sm:p-2.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-300 text-foreground cursor-pointer shadow-xs"
            title="Next slide"
            aria-label="Next slide"
          >
            {isAr ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
          </button>
        </div>

      </div>
    </div>
  );
}
