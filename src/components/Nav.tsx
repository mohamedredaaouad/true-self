import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
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
        <a href="#top" className="text-xs tracking-brand uppercase font-medium">soft soul<span className="text-muted-foreground">®</span></a>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-brand uppercase">
          <a href="#shop" className="hover:opacity-60 transition-opacity">Shop</a>
          <a href="#philosophy" className="hover:opacity-60 transition-opacity">Philosophy</a>
          <a href="#bereal" className="hover:opacity-60 transition-opacity">Be Real</a>
          <a href="#gallery" className="hover:opacity-60 transition-opacity">Journal</a>
        </nav>
        <div className="flex items-center gap-5 text-xs tracking-brand uppercase">
          <button className="hidden sm:block hover:opacity-60 transition-opacity">Search</button>
          <button className="relative hover:opacity-60 transition-opacity">Bag <span className="text-muted-foreground">(0)</span></button>
        </div>
      </div>
    </header>
  );
}
