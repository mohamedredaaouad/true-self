import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import philosophy from "@/assets/philosophy.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOFT SOUL — Streetwear for the quiet ones" },
      { name: "description", content: "Minimalist premium streetwear with embroidered phrases. Be real. Protect your peace." },
      { property: "og:title", content: "SOFT SOUL — Streetwear for the quiet ones" },
      { property: "og:description", content: "Be real. Protect your peace. Live for yourself." },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Be Real Tee", phrase: "be real.", price: "€68", img: product1, tag: "Oversized Tee" },
  { name: "Soft Soul Hoodie", phrase: "soft soul.", price: "€124", img: product2, tag: "Heavyweight Hoodie" },
  { name: "Live For Yourself Crew", phrase: "live for yourself.", price: "€98", img: product3, tag: "Sweatshirt" },
  { name: "Peace Over Noise Tee", phrase: "peace over noise.", price: "€68", img: product4, tag: "Embroidered Tee" },
];

const marqueePhrases = [
  "be real.", "protect your peace.", "not here to impress.", "peace over noise.",
  "live for yourself.", "too real to fake it.", "soft soul.", "choose calm.",
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Person wearing a cream oversized t-shirt with be real. embroidery"
          width={1600}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex-1 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-20 lg:pb-28">
              <p className="animate-fade text-xs tracking-brand uppercase text-foreground/70">Vol. 01 — Quiet Energy</p>
              <h1 className="animate-rise delay-1 mt-6 font-display text-[14vw] leading-[0.95] sm:text-[10vw] lg:text-[8.2rem] text-balance max-w-5xl">
                be real. <span className="italic text-foreground/70">protect</span> your peace.
              </h1>
              <div className="animate-rise delay-2 mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-relaxed text-foreground/80">
                  Soft streetwear for the ones who stopped performing.
                  Minimal embroidery. Heavyweight cotton. No noise.
                </p>
                <div className="flex gap-3">
                  <a href="#shop" className="border border-foreground bg-foreground text-background px-6 py-3 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-colors">
                    Shop the collection
                  </a>
                  <a href="#philosophy" className="border border-foreground/70 px-6 py-3 text-xs tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors">
                    Our why
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="border-y border-border bg-background overflow-hidden py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueePhrases, ...marqueePhrases].map((p, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl italic px-8 text-foreground/80">
              {p} <span className="not-italic text-foreground/30 mx-2">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section id="shop" className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-brand uppercase text-muted-foreground">Collection 01</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl text-balance max-w-2xl">Quiet pieces for loud feelings.</h2>
            </div>
            <a href="#" className="text-xs tracking-brand uppercase border-b border-foreground pb-1 self-start md:self-end hover:opacity-60 transition-opacity">View all 12 →</a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <a href="#" className="group block">
                <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3 text-[10px] tracking-brand uppercase bg-background/80 backdrop-blur px-2 py-1">
                    {p.tag}
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <p className="text-xs italic text-muted-foreground mt-1">— {p.phrase}</p>
                  </div>
                  <span className="text-sm">{p.price}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY (dark) */}
      <section id="philosophy" className="theme-dark bg-background text-foreground border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src={philosophy}
                alt="Quiet portrait, eyes closed"
                loading="lazy"
                width={1280}
                height={1600}
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <p className="text-xs tracking-brand uppercase text-muted-foreground">Our philosophy</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">
              We're not here to <span className="italic">impress</span>. We're here to feel like ourselves.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed max-w-xl">
              <p>
                SOFT SOUL is for the people who got tired of pretending. Tired of
                fake lifestyles, performance, and the noise of trying to be seen.
              </p>
              <p>
                Every piece is made slowly, in heavyweight cotton, with embroidery
                so quiet you only notice it up close — the way real things are.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-xs tracking-brand uppercase">
              <div><p className="font-display text-3xl normal-case tracking-normal italic">Real.</p><p className="mt-1 text-muted-foreground">no filters</p></div>
              <div><p className="font-display text-3xl normal-case tracking-normal italic">Calm.</p><p className="mt-1 text-muted-foreground">peace over noise</p></div>
              <div><p className="font-display text-3xl normal-case tracking-normal italic">Soft.</p><p className="mt-1 text-muted-foreground">strong & quiet</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BE REAL CONCEPT — full bleed quote */}
      <section id="bereal" className="relative py-32 lg:py-48 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-xs tracking-brand uppercase text-muted-foreground">The "Be Real" concept</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
              You don't need to be loud to be heard.
              <span className="block italic text-foreground/60 mt-4">You don't need approval to exist.</span>
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-14 inline-flex items-center gap-3 text-xs tracking-brand uppercase">
              <span className="h-px w-10 bg-foreground/40" />
              soft soul, since 2024
              <span className="h-px w-10 bg-foreground/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT SHOWCASE — split */}
      <section className="grid md:grid-cols-2 border-t border-border">
        <Reveal className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden bg-muted">
          <img src={product4} alt="Embroidery detail" loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover"/>
        </Reveal>
        <Reveal delay={150} className="flex items-center bg-secondary">
          <div className="px-8 lg:px-20 py-20">
            <p className="text-xs tracking-brand uppercase text-muted-foreground">Made slow</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">Embroidered, not printed.</h2>
            <p className="mt-6 text-foreground/80 leading-relaxed max-w-md">
              Each phrase is stitched into 280gsm garment-dyed cotton. Built to soften
              with time, never to fade — like the people who wear it.
            </p>
            <ul className="mt-10 space-y-3 text-sm border-t border-border/70 pt-6">
              <li className="flex justify-between border-b border-border/70 pb-3"><span className="text-muted-foreground">Weight</span><span>280gsm</span></li>
              <li className="flex justify-between border-b border-border/70 pb-3"><span className="text-muted-foreground">Fit</span><span>Boxy oversized</span></li>
              <li className="flex justify-between border-b border-border/70 pb-3"><span className="text-muted-foreground">Detail</span><span>Tonal embroidery</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Made in</span><span>Portugal</span></li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* PEACE & LOVE */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-brand uppercase text-muted-foreground">Peace & love</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance">
              Choose <span className="italic">calm</span>. Choose <span className="italic">love</span>.
              <span className="block">Choose yourself, softly.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { t: "Slow living", d: "Less scrolling, more breathing. Our drops are small and made to last seasons, not weeks." },
            { t: "Real over perfect", d: "We don't retouch our people. The wrinkles, the quiet, the in-between — it stays." },
            { t: "Soft is strong", d: "Choosing peace in a loud world is the boldest thing you can wear." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <div className="border-t border-foreground pt-6">
                <p className="text-xs tracking-brand uppercase">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-secondary py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <div>
                <p className="text-xs tracking-brand uppercase text-muted-foreground">@softsoul.studio</p>
                <h2 className="mt-4 font-display text-5xl md:text-6xl">Moments, not content.</h2>
              </div>
              <a href="#" className="text-xs tracking-brand uppercase border-b border-foreground pb-1 self-start md:self-end hover:opacity-60 transition-opacity">Follow on Instagram →</a>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[g1, g2, g3, g4].map((g, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="overflow-hidden aspect-square group">
                  <img
                    src={g}
                    alt={`Soft Soul moment ${i + 1}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-soft)] group-hover:scale-[1.06]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="theme-dark bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-28 lg:py-36 text-center">
          <Reveal>
            <p className="text-xs tracking-brand uppercase text-muted-foreground">Letters, never noise</p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl text-balance">
              Slow notes from a <span className="italic">soft</span> soul.
            </h2>
            <p className="mt-6 text-foreground/70 max-w-lg mx-auto">
              One quiet email a month. New drops, reflections, and the things we're choosing peace over.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your email, gently"
                className="flex-1 bg-transparent border-b border-foreground/40 px-1 py-3 text-sm focus:outline-none focus:border-foreground placeholder:text-foreground/40"
              />
              <button className="border border-foreground bg-foreground text-background px-6 py-3 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-colors">
                Join quietly
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-2">
            <p className="font-display text-3xl">soft soul<span className="text-muted-foreground">®</span></p>
            <p className="mt-4 max-w-xs text-muted-foreground italic">"Too real to fake it."</p>
          </div>
          <div>
            <p className="text-xs tracking-brand uppercase mb-4">Shop</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Tees</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sweatshirts</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Archive</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-brand uppercase mb-4">Soul</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Care</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-brand uppercase text-muted-foreground">
            <p>© {new Date().getFullYear()} soft soul studio</p>
            <p>made slowly · worn softly</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
