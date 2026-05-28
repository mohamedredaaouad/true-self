import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import {
  GarmentMockup,
  type GarmentType,
  type Position,
  type ViewSide,
} from "@/components/GarmentMockup";

export const Route = createFileRoute("/customize")({
  head: () => ({
    meta: [
      { title: "Create Your Own Piece — SOFT SOUL" },
      {
        name: "description",
        content:
          "Design a piece that reflects who you are. Custom embroidery, fonts, colors and placement on premium streetwear.",
      },
      { property: "og:title", content: "Express Yourself — SOFT SOUL" },
      {
        property: "og:description",
        content: "Create a piece that reflects who you are, not who the world wants you to be.",
      },
    ],
  }),
  component: CustomizePage,
});

const GARMENTS: { id: GarmentType; name: string; base: number }[] = [
  { id: "tee", name: "T-Shirt", base: 68 },
  { id: "hoodie", name: "Hoodie", base: 124 },
  { id: "sweatshirt", name: "Sweatshirt", base: 98 },
  { id: "cap", name: "Cap", base: 48 },
];

const GARMENT_COLORS = [
  { name: "Cream", hex: "#efe8d8" },
  { name: "Bone", hex: "#f5f2ea" },
  { name: "Sand", hex: "#d8c9a8" },
  { name: "Olive", hex: "#5b6447" },
  { name: "Charcoal", hex: "#2a2a2a" },
  { name: "Ink", hex: "#111111" },
  { name: "Navy", hex: "#1c2540" },
];

const EMBROIDERY_COLORS = [
  { name: "Black", hex: "#111111" },
  { name: "White", hex: "#fafafa" },
  { name: "Beige", hex: "#c9b48a" },
  { name: "Olive", hex: "#5b6447" },
  { name: "Navy", hex: "#1c2540" },
  { name: "Red", hex: "#a83232" },
];

const FONTS = [
  { id: "minimal", name: "Minimal", sample: "Aa" },
  { id: "modern", name: "Modern", sample: "Aa" },
  { id: "luxury", name: "Luxury Serif", sample: "Aa" },
  { id: "handwritten", name: "Handwritten", sample: "Aa" },
  { id: "streetwear", name: "Streetwear", sample: "AA" },
];

const FONT_CSS: Record<string, string> = {
  minimal: "'Inter', sans-serif",
  modern: "'Space Grotesk', sans-serif",
  luxury: "'Cormorant Garamond', serif",
  handwritten: "'Caveat', cursive",
  streetwear: "'Bebas Neue', sans-serif",
};

const POSITIONS: { id: Position; label: string; side: ViewSide }[] = [
  { id: "left-chest", label: "Left chest", side: "front" },
  { id: "center-chest", label: "Center chest", side: "front" },
  { id: "right-chest", label: "Right chest", side: "front" },
  { id: "sleeve", label: "Sleeve", side: "front" },
  { id: "front-center", label: "Front center", side: "front" },
  { id: "back-neck", label: "Back neck", side: "back" },
  { id: "upper-back", label: "Upper back", side: "back" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

function CustomizePage() {
  const [garment, setGarment] = useState<GarmentType>("tee");
  const [side, setSide] = useState<ViewSide>("front");
  const [text, setText] = useState("be real.");
  const [font, setFont] = useState("luxury");
  const [textColor, setTextColor] = useState(EMBROIDERY_COLORS[0].hex);
  const [customTextColor, setCustomTextColor] = useState("#a83232");
  const [garmentColor, setGarmentColor] = useState(GARMENT_COLORS[0].hex);
  const [position, setPosition] = useState<Position>("left-chest");
  const [size, setSize] = useState("M");
  const [logo, setLogo] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const base = GARMENTS.find((g) => g.id === garment)!.base;
  const price = useMemo(() => {
    let p = base;
    if (text.trim().length > 0) p += 8;
    if (text.trim().length > 12) p += 4;
    if (logo) p += 14;
    if (["upper-back", "front-center"].includes(position)) p += 6;
    return p;
  }, [base, text, logo, position]);

  // Sync side with position automatically
  const onPositionChange = (p: Position) => {
    setPosition(p);
    const target = POSITIONS.find((x) => x.id === p);
    if (target && target.side !== side) setSide(target.side);
  };

  const onUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) return;
    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result as string);
    reader.readAsDataURL(file);
  };

  const saveDesign = () => {
    const design = { garment, side, text, font, textColor, garmentColor, position, size, hasLogo: !!logo };
    try {
      localStorage.setItem("softsoul:design", JSON.stringify(design));
      setSaved(true);
      setTimeout(() => setSaved(false), 2400);
    } catch {
      /* ignore */
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `I just designed my own SOFT SOUL piece — "${text}" in ${font}. ✦`;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HEADER */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-brand uppercase text-muted-foreground">Express yourself</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance max-w-4xl">
              Create a piece that <span className="italic">reflects who you are</span>, not who the world wants you to be.
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Choose your garment. Stitch your words. Make it yours — quietly, slowly, on premium heavyweight cotton.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STUDIO */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* PREVIEW */}
        <div className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start">
          <div
            className="relative rounded-md overflow-hidden border border-border transition-colors duration-700"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, color-mix(in oklab, ${garmentColor} 18%, var(--background)) 0%, var(--background) 70%)`,
            }}
          >
            <div className="aspect-[4/5] flex items-center justify-center p-8">
              <GarmentMockup
                garment={garment}
                side={side}
                garmentColor={garmentColor}
                text={text}
                font={font}
                textColor={textColor}
                position={position}
                logoUrl={logo}
              />
            </div>

            {/* View toggle */}
            <div className="absolute top-4 left-4 flex border border-foreground/20 bg-background/70 backdrop-blur text-[10px] tracking-brand uppercase">
              {(["front", "back"] as ViewSide[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setSide(v)}
                  className={`px-3 py-2 transition-colors ${
                    side === v ? "bg-foreground text-background" : "hover:bg-foreground/10"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            <div className="absolute top-4 right-4 text-[10px] tracking-brand uppercase bg-background/70 backdrop-blur px-3 py-2 border border-foreground/20">
              3D preview · {garment}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[10px] tracking-brand uppercase text-muted-foreground">
              <span>Live render</span>
              <span>{POSITIONS.find((p) => p.id === position)?.label}</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {GARMENTS.map((g) => (
              <button
                key={g.id}
                onClick={() => setGarment(g.id)}
                className={`group aspect-square border transition-all rounded-sm flex flex-col items-center justify-center gap-1 ${
                  garment === g.id
                    ? "border-foreground bg-foreground/[0.04]"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                <div className="w-10 h-10 opacity-80">
                  <GarmentMockup
                    garment={g.id}
                    side="front"
                    garmentColor={garmentColor}
                    text=""
                    font={font}
                    textColor={textColor}
                    position="left-chest"
                  />
                </div>
                <span className="text-[10px] tracking-brand uppercase">{g.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="lg:col-span-5 space-y-10">
          {/* TEXT */}
          <Field label="01 · Your phrase" hint="Up to 32 characters">
            <input
              type="text"
              maxLength={32}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="say something real"
              className="w-full bg-transparent border-b border-foreground/30 py-3 text-lg focus:outline-none focus:border-foreground placeholder:text-foreground/30"
            />
            <div className="mt-1 text-[10px] tracking-brand uppercase text-muted-foreground flex justify-between">
              <span>Embroidered, not printed</span>
              <span>{text.length}/32</span>
            </div>
          </Field>

          {/* FONT */}
          <Field label="02 · Font style">
            <div className="grid grid-cols-5 gap-2">
              {FONTS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFont(f.id)}
                  className={`aspect-square border flex flex-col items-center justify-center gap-1 transition-all ${
                    font === f.id ? "border-foreground bg-foreground/[0.04]" : "border-border hover:border-foreground/50"
                  }`}
                >
                  <span
                    className="text-2xl leading-none"
                    style={{
                      fontFamily: FONT_CSS[f.id],
                      textTransform: f.id === "streetwear" ? "uppercase" : "none",
                    }}
                  >
                    {f.sample}
                  </span>
                  <span className="text-[9px] tracking-brand uppercase">{f.name}</span>
                </button>
              ))}
            </div>
          </Field>

          {/* POSITION */}
          <Field label="03 · Embroidery position">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {POSITIONS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onPositionChange(p.id)}
                  className={`px-3 py-3 text-[11px] tracking-brand uppercase border transition-all text-left ${
                    position === p.id ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50"
                  }`}
                >
                  {p.label}
                  <span className={`block text-[9px] mt-1 ${position === p.id ? "text-background/60" : "text-muted-foreground"}`}>
                    {p.side}
                  </span>
                </button>
              ))}
            </div>
          </Field>

          {/* EMBROIDERY COLOR */}
          <Field label="04 · Thread color">
            <div className="flex flex-wrap gap-3">
              {EMBROIDERY_COLORS.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setTextColor(c.hex)}
                  title={c.name}
                  className={`relative w-10 h-10 rounded-full border transition-all ${
                    textColor === c.hex ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "border-border"
                  }`}
                  style={{ background: c.hex }}
                />
              ))}
              <label
                className={`relative w-10 h-10 rounded-full cursor-pointer overflow-hidden border ${
                  textColor === customTextColor ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "border-border"
                }`}
                style={{
                  background:
                    "conic-gradient(from 0deg, #ff4d4d, #ffcc4d, #4dff88, #4dccff, #cc4dff, #ff4d4d)",
                }}
              >
                <input
                  type="color"
                  value={customTextColor}
                  onChange={(e) => {
                    setCustomTextColor(e.target.value);
                    setTextColor(e.target.value);
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>
          </Field>

          {/* GARMENT COLOR */}
          <Field label="05 · Garment color">
            <div className="flex flex-wrap gap-3">
              {GARMENT_COLORS.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setGarmentColor(c.hex)}
                  title={c.name}
                  className={`flex items-center gap-2 px-3 py-2 border text-[11px] tracking-brand uppercase transition-all ${
                    garmentColor === c.hex ? "border-foreground bg-foreground/[0.04]" : "border-border hover:border-foreground/50"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full border border-foreground/20" style={{ background: c.hex }} />
                  {c.name}
                </button>
              ))}
            </div>
          </Field>

          {/* LOGO */}
          <Field label="06 · Upload a logo or symbol" hint="PNG with transparent bg works best · max 2MB">
            <div className="flex items-center gap-3">
              <button
                onClick={() => fileRef.current?.click()}
                className="border border-foreground px-5 py-3 text-[11px] tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                {logo ? "Replace logo" : "Upload"}
              </button>
              {logo && (
                <>
                  <img src={logo} alt="Your logo" className="w-12 h-12 object-contain border border-border bg-background p-1" />
                  <button
                    onClick={() => setLogo(null)}
                    className="text-[11px] tracking-brand uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Remove
                  </button>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
              />
            </div>
          </Field>

          {/* SIZE */}
          {garment !== "cap" && (
            <Field label="07 · Size">
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-12 h-12 border text-xs tracking-brand uppercase transition-all ${
                      size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Field>
          )}

          {/* PRICE + ACTIONS */}
          <div className="border-t border-foreground pt-8 space-y-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] tracking-brand uppercase text-muted-foreground">Your piece</p>
                <p className="mt-1 font-display text-2xl">
                  Custom {GARMENTS.find((g) => g.id === garment)!.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] tracking-brand uppercase text-muted-foreground">Total</p>
                <p
                  className="mt-1 font-display text-4xl tabular-nums"
                  key={price}
                  style={{ animation: "rise 0.5s var(--ease-soft) both" }}
                >
                  €{price}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="border border-foreground bg-foreground text-background px-6 py-4 text-[11px] tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-colors">
                Add to bag
              </button>
              <button
                onClick={saveDesign}
                className="border border-foreground px-6 py-4 text-[11px] tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                {saved ? "Saved ✓" : "Save design"}
              </button>
            </div>

            <button
              onClick={() => setShareOpen(true)}
              className="w-full text-[11px] tracking-brand uppercase text-muted-foreground hover:text-foreground transition-colors py-2 underline-offset-4 hover:underline"
            >
              Share your piece
            </button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="theme-dark bg-background text-foreground border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-10">
          {[
            { t: "Made for one", d: "Your piece is stitched after you order. Nothing sits in a warehouse waiting to be wanted." },
            { t: "Embroidered slowly", d: "Each letter is sewn into heavyweight cotton, made to soften — not fade." },
            { t: "Yours, quietly", d: "Wear something nobody else has. Loud enough for you, quiet enough for the world." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <p className="text-xs tracking-brand uppercase text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-4 font-display text-3xl">{c.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHARE MODAL */}
      {shareOpen && (
        <div
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-center justify-center p-6"
          style={{ animation: "fade 0.3s var(--ease-soft) both" }}
          onClick={() => setShareOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border max-w-md w-full p-8"
            style={{ animation: "rise 0.5s var(--ease-soft) both" }}
          >
            <p className="text-[11px] tracking-brand uppercase text-muted-foreground">Share your piece</p>
            <h3 className="mt-3 font-display text-3xl">Quietly, with the world.</h3>
            <p className="mt-4 text-sm text-muted-foreground italic">"{shareText}"</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { name: "Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}` },
                { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
                { name: "Pinterest", href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}` },
                { name: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}` },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-4 py-3 text-[11px] tracking-brand uppercase text-center hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(shareUrl);
              }}
              className="mt-3 w-full border border-foreground px-4 py-3 text-[11px] tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Copy link
            </button>
            <button
              onClick={() => setShareOpen(false)}
              className="mt-4 w-full text-[11px] tracking-brand uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <p className="text-[11px] tracking-brand uppercase">{label}</p>
        {hint && <p className="text-[10px] text-muted-foreground">{hint}</p>}
      </div>
      {children}
    </div>
  );
}
