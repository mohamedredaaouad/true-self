import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

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
        <Link to="/" className="text-xs tracking-brand uppercase font-medium">soft soul<span className="text-muted-foreground">®</span></Link>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-brand uppercase">
          <Link to="/" hash="shop" className="hover:opacity-60 transition-opacity">Shop</Link>
          <Link to="/customize" className="hover:opacity-60 transition-opacity">Customize</Link>
          <Link to="/" hash="philosophy" className="hover:opacity-60 transition-opacity">Philosophy</Link>
          <Link to="/" hash="bereal" className="hover:opacity-60 transition-opacity">Be Real</Link>
        </nav>
        <div className="flex items-center gap-5 text-xs tracking-brand uppercase">
          <button className="hidden sm:block hover:opacity-60 transition-opacity">Search</button>
          <button className="relative hover:opacity-60 transition-opacity">Bag <span className="text-muted-foreground">(0)</span></button>
        </div>
      </div>
    </header>
  );
}
