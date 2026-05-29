import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import {
  StudioMockup,
  type GarmentType,
  type StudioView,
  type DesignElement,
} from "@/components/StudioMockup";

export const Route = createFileRoute("/customize")({
  head: () => ({
    meta: [
      { title: "Design Your Story — SOFT SOUL" },
      {
        name: "description",
        content:
          "An interactive customization studio for premium streetwear. Live 3D-feel preview, embroidery simulation, typography, color, AI quotes, signatures and symbols.",
      },
      { property: "og:title", content: "Design Your Story — SOFT SOUL" },
      {
        property: "og:description",
        content: "Be Real. Live For Yourself. Protect Your Peace.",
      },
    ],
  }),
  component: StudioPage,
});

/* -------------------- Data -------------------- */

const GARMENTS: { id: GarmentType; name: string; base: number; sub: string }[] = [
  { id: "tee", name: "Oversized Tee", base: 78, sub: "Heavy cotton · 280 gsm" },
  { id: "hoodie", name: "Hoodie", base: 138, sub: "Brushed fleece · 480 gsm" },
  { id: "sweatshirt", name: "Sweatshirt", base: 108, sub: "French terry · 380 gsm" },
  { id: "cap", name: "Cap", base: 52, sub: "Structured · 6-panel" },
];

const GARMENT_COLORS = [
  { name: "Cream", hex: "#efe8d8" },
  { name: "White", hex: "#fafafa" },
  { name: "Bone", hex: "#f5f2ea" },
  { name: "Beige", hex: "#d8c9a8" },
  { name: "Olive", hex: "#5b6447" },
  { name: "Brown", hex: "#5a3f2c" },
  { name: "Grey", hex: "#8a8a8a" },
  { name: "Navy", hex: "#1c2540" },
  { name: "Charcoal", hex: "#2a2a2a" },
  { name: "Black", hex: "#111111" },
];

const THREAD_COLORS = [
  { name: "Black", hex: "#111111" },
  { name: "White", hex: "#fafafa" },
  { name: "Cream", hex: "#efe8d8" },
  { name: "Olive", hex: "#5b6447" },
  { name: "Sand", hex: "#cdb98a" },
  { name: "Brick", hex: "#9a3a2a" },
  { name: "Sage", hex: "#a9b59a" },
  { name: "Gold", hex: "#b08a3a" },
];

const FONT_CATEGORIES: { id: string; label: string; family: string; sample: string }[] = [
  { id: "minimal", label: "Minimal", family: "'Inter', sans-serif", sample: "be real." },
  { id: "luxury", label: "Luxury", family: "'Cormorant Garamond', serif", sample: "Atelier" },
  { id: "modern", label: "Modern", family: "'Space Grotesk', sans-serif", sample: "Quiet Energy" },
  { id: "streetwear", label: "Streetwear", family: "'Bebas Neue', sans-serif", sample: "SOFT SOUL" },
  { id: "vintage", label: "Vintage", family: "'Instrument Serif', serif", sample: "Since Always" },
  { id: "handwritten", label: "Handwritten", family: "'Caveat', cursive", sample: "stay you" },
  { id: "monospace", label: "Mono", family: "ui-monospace, monospace", sample: "01 / peace" },
];

const PRESET_POSITIONS: { id: string; label: string; view: StudioView; x: number; y: number }[] = [
  { id: "left-chest", label: "Left Chest", view: "front", x: 0.36, y: 0.36 },
  { id: "center-chest", label: "Center Chest", view: "front", x: 0.5, y: 0.36 },
  { id: "right-chest", label: "Right Chest", view: "front", x: 0.64, y: 0.36 },
  { id: "upper-back", label: "Upper Back", view: "back", x: 0.5, y: 0.32 },
  { id: "full-back", label: "Full Back", view: "back", x: 0.5, y: 0.5 },
  { id: "sleeve", label: "Sleeve", view: "sleeve", x: 0.5, y: 0.42 },
  { id: "bottom-corner", label: "Bottom Corner", view: "front", x: 0.7, y: 0.78 },
  { id: "cap-front", label: "Cap Front", view: "front", x: 0.5, y: 0.36 },
  { id: "cap-side", label: "Cap Side", view: "left", x: 0.5, y: 0.4 },
];

const SYMBOLS = ["♡", "✺", "☮", "★", "☾", "☀", "︎ﾂ", "∞", "✦", "❀", "✿", "⌖", "✕"];

const QUOTES = [
  "Be Real.", "Protect Your Peace.", "Stay Authentic.", "Choose Calm.",
  "Live For Yourself.", "Soft Soul.", "Quiet Confidence.", "Slow Down.",
  "Real Over Loud.", "Inner Peace > Outer Noise.", "Made With Love.",
  "Less But Deeper.", "You Are Enough.", "Soft But Strong.",
  "Free To Be Me.", "Heart First.", "No Need To Impress.",
  "Stillness Is Power.", "Peace Is My Statement.", "Love, Honestly.",
];

/* -------------------- Page -------------------- */

type SavedDesign = {
  id: string;
  name: string;
  garment: GarmentType;
  garmentColor: string;
  elements: DesignElement[];
  createdAt: number;
};

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function StudioPage() {
  const [garment, setGarment] = useState<GarmentType>("tee");
  const [garmentColor, setGarmentColor] = useState(GARMENT_COLORS[0].hex);
  const [view, setView] = useState<StudioView>("front");
  const [rotateY, setRotateY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [elements, setElements] = useState<DesignElement[]>([
    {
      id: uid(),
      kind: "text",
      view: "front",
      x: 0.5,
      y: 0.36,
      text: "be real.",
      font: "luxury",
      fontSize: 22,
      letterSpacing: 0.02,
      color: "#111111",
      threadWeight: 0.7,
      lineHeight: 1.1,
    },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [saved, setSaved] = useState<SavedDesign[]>([]);
  const [wishlist, setWishlist] = useState<SavedDesign[]>([]);
  const [tab, setTab] = useState<"text" | "type" | "color" | "embroidery" | "symbols" | "signature" | "library">("text");
  const [showSaved, setShowSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const sigRef = useRef<HTMLInputElement>(null);

  const selected = elements.find((e) => e.id === selectedId) ?? null;
  const base = GARMENTS.find((g) => g.id === garment)!.base;

  /* Load saved */
  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem("ss_designs") ?? "[]");
      const w = JSON.parse(localStorage.getItem("ss_wishlist") ?? "[]");
      setSaved(s);
      setWishlist(w);
    } catch {}
  }, []);

  /* Auto rotate view sync */
  useEffect(() => {
    const map: Record<StudioView, number> = { front: 0, right: 90, back: 180, left: -90, sleeve: -90 };
    setRotateY(map[view]);
  }, [view]);

  const totalPrice = useMemo(() => {
    let p = base;
    elements.forEach((el) => {
      if (el.kind === "text") {
        const chars = (el.text ?? "").length;
        p += 6 + Math.ceil(chars / 8) * 2;
        p += ((el.threadWeight ?? 0.7) - 0.5) * 6;
        p += ((el.fontSize ?? 22) - 18) * 0.4;
      }
      if (el.kind === "symbol") p += 8;
      if (el.kind === "image") p += 18;
    });
    return Math.max(base, Math.round(p));
  }, [base, elements]);

  /* -------- Actions -------- */

  const updateSelected = (patch: Partial<DesignElement>) => {
    if (!selected) return;
    setElements((els) => els.map((e) => (e.id === selected.id ? { ...e, ...patch } : e)));
  };

  const addText = (text = "your story") => {
    const id = uid();
    setElements((els) => [
      ...els,
      {
        id,
        kind: "text",
        view,
        x: 0.5,
        y: 0.5,
        text,
        font: "minimal",
        fontSize: 22,
        letterSpacing: 0.02,
        color: "#111111",
        threadWeight: 0.7,
        lineHeight: 1.1,
      },
    ]);
    setSelectedId(id);
    setTab("text");
  };

  const addSymbol = (symbol: string) => {
    const id = uid();
    setElements((els) => [
      ...els,
      { id, kind: "symbol", view, x: 0.5, y: 0.55, symbol, color: "#111111", scale: 1, threadWeight: 0.7 },
    ]);
    setSelectedId(id);
  };

  const handleSignature = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const id = uid();
      setElements((els) => [
        ...els,
        {
          id,
          kind: "image",
          view,
          x: 0.5,
          y: 0.55,
          imageUrl: String(ev.target?.result),
          scale: 1.2,
        },
      ]);
      setSelectedId(id);
      flash("Signature added — converted to embroidery preview");
    };
    reader.readAsDataURL(file);
  };

  const applyPreset = (p: typeof PRESET_POSITIONS[number]) => {
    if (!selected) {
      addText(selected ? (selected as DesignElement).text ?? "be real." : "be real.");
      return;
    }
    setView(p.view);
    updateSelected({ view: p.view, x: p.x, y: p.y });
  };

  const removeSelected = () => {
    if (!selected) return;
    setElements((els) => els.filter((e) => e.id !== selected.id));
    setSelectedId(null);
  };

  const inspire = () => {
    const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    if (selected && selected.kind === "text") updateSelected({ text: q });
    else addText(q);
    flash(`Inspiration: "${q}"`);
  };

  const saveDesign = (toWish = false) => {
    const d: SavedDesign = {
      id: uid(),
      name: `${GARMENTS.find((g) => g.id === garment)?.name} — ${new Date().toLocaleDateString()}`,
      garment,
      garmentColor,
      elements,
      createdAt: Date.now(),
    };
    if (toWish) {
      const next = [d, ...wishlist].slice(0, 30);
      setWishlist(next);
      localStorage.setItem("ss_wishlist", JSON.stringify(next));
      flash("Added to wishlist");
    } else {
      const next = [d, ...saved].slice(0, 30);
      setSaved(next);
      localStorage.setItem("ss_designs", JSON.stringify(next));
      flash("Design saved");
    }
  };

  const loadDesign = (d: SavedDesign) => {
    setGarment(d.garment);
    setGarmentColor(d.garmentColor);
    setElements(d.elements);
    setShowSaved(false);
    flash("Design loaded");
  };

  const duplicateDesign = (d: SavedDesign) => {
    const copy = { ...d, id: uid(), name: d.name + " (copy)", createdAt: Date.now() };
    const next = [copy, ...saved];
    setSaved(next);
    localStorage.setItem("ss_designs", JSON.stringify(next));
    flash("Duplicated");
  };

  const addToCart = () => flash(`Added to bag — $${totalPrice}`);

  const flash = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pt-24 pb-32">
        {/* Header */}
        <section className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-[10px] tracking-brand uppercase text-muted-foreground">The Studio</p>
                <h1 className="font-display text-5xl md:text-7xl mt-2 leading-[0.95]">Design Your Story.</h1>
                <p className="mt-4 max-w-xl text-muted-foreground text-balance">
                  Be Real. Live For Yourself. Protect Your Peace. A quiet space to make something that means what you mean.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-brand uppercase">
                <button onClick={() => setShowSaved(true)} className="px-4 py-2 border border-border hover:bg-muted transition-colors">
                  Saved ({saved.length})
                </button>
                <button onClick={() => saveDesign(true)} className="px-4 py-2 border border-border hover:bg-muted transition-colors">
                  ♡ Wishlist
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Studio */}
        <section className="mx-auto max-w-[1500px] px-4 lg:px-10 mt-10 grid grid-cols-1 lg:grid-cols-[260px_1fr_360px] gap-6">
          {/* LEFT: garment + views */}
          <aside className="order-2 lg:order-1 space-y-6">
            <Panel title="Product">
              <div className="grid grid-cols-2 gap-2">
                {GARMENTS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGarment(g.id)}
                    className={`p-3 text-left border transition-all ${
                      garment === g.id ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <div className="text-xs tracking-brand uppercase">{g.name}</div>
                    <div className="text-[10px] opacity-60 mt-1">{g.sub}</div>
                    <div className="text-[11px] mt-2">from ${g.base}</div>
                  </button>
                ))}
              </div>
            </Panel>

            <Panel title="Product Color">
              <div className="grid grid-cols-5 gap-2">
                {GARMENT_COLORS.map((c) => (
                  <button
                    key={c.hex}
                    title={c.name}
                    onClick={() => setGarmentColor(c.hex)}
                    className={`aspect-square rounded-full border transition-all ${
                      garmentColor === c.hex ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "border-border"
                    }`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
              <label className="block mt-3 text-[11px] tracking-brand uppercase text-muted-foreground">
                Custom
                <input
                  type="color"
                  value={garmentColor}
                  onChange={(e) => setGarmentColor(e.target.value)}
                  className="block mt-1 w-full h-9 cursor-pointer bg-transparent border border-border"
                />
              </label>
            </Panel>

            <Panel title="Smart Positions">
              <div className="grid grid-cols-2 gap-1.5">
                {PRESET_POSITIONS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => applyPreset(p)}
                    className="text-[10px] tracking-brand uppercase border border-border px-2 py-2 hover:bg-foreground hover:text-background transition-colors"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed">
                Or drag any element directly on the garment for free positioning.
              </p>
            </Panel>
          </aside>

          {/* CENTER: preview */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-gradient-to-b from-muted/40 to-muted/10 border border-border overflow-hidden">
              {/* View selector */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <div className="flex gap-1 bg-background/70 backdrop-blur-md border border-border/70 p-1 rounded-sm">
                  {(["front", "back", "left", "right", "sleeve"] as StudioView[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      className={`text-[10px] tracking-brand uppercase px-3 py-1.5 transition-colors ${
                        view === v ? "bg-foreground text-background" : "hover:bg-muted"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1 bg-background/70 backdrop-blur-md border border-border/70 p-1 rounded-sm">
                  <button onClick={() => setZoom((z) => Math.max(0.7, z - 0.1))} className="w-8 h-7 text-sm hover:bg-muted">−</button>
                  <button onClick={() => setZoom(1)} className="text-[10px] tracking-brand uppercase px-2 hover:bg-muted">
                    {Math.round(zoom * 100)}%
                  </button>
                  <button onClick={() => setZoom((z) => Math.min(1.6, z + 0.1))} className="w-8 h-7 text-sm hover:bg-muted">+</button>
                </div>
              </div>

              <div className="aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] p-6 md:p-12">
                <StudioMockup
                  garment={garment}
                  view={view}
                  garmentColor={garmentColor}
                  elements={elements}
                  selectedId={selectedId}
                  rotateY={0}
                  zoom={zoom}
                  onSelect={setSelectedId}
                  onDrag={(id, x, y) =>
                    setElements((els) => els.map((e) => (e.id === id ? { ...e, x, y } : e)))
                  }
                />
              </div>

              {/* Rotate slider */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-background/70 backdrop-blur-md border border-border/70 px-3 py-2 rounded-sm">
                <span className="text-[10px] tracking-brand uppercase text-muted-foreground">Rotate</span>
                <input
                  type="range"
                  min={-180}
                  max={180}
                  value={rotateY}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setRotateY(v);
                    if (v > -45 && v < 45) setView("front");
                    else if (v > 45 && v < 135) setView("right");
                    else if (v < -45 && v > -135) setView("left");
                    else setView("back");
                  }}
                  className="flex-1 accent-foreground"
                />
                <span className="text-[10px] tabular-nums text-muted-foreground w-10 text-right">{rotateY}°</span>
              </div>
            </div>

            {/* Element list / quick actions */}
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <button onClick={() => addText()} className="text-[10px] tracking-brand uppercase border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors">
                + Add Text
              </button>
              <button onClick={inspire} className="text-[10px] tracking-brand uppercase border border-foreground bg-foreground text-background px-3 py-2 hover:opacity-80 transition-opacity">
                ✦ Inspire Me
              </button>
              <button onClick={() => sigRef.current?.click()} className="text-[10px] tracking-brand uppercase border border-border px-3 py-2 hover:bg-muted">
                Upload Signature
              </button>
              <input ref={sigRef} type="file" accept="image/*" className="hidden" onChange={handleSignature} />
              {selected && (
                <button onClick={removeSelected} className="text-[10px] tracking-brand uppercase border border-border px-3 py-2 hover:bg-destructive/10 ml-auto">
                  Remove Selected
                </button>
              )}
            </div>

            {elements.length > 0 && (
              <div className="mt-3 flex gap-2 flex-wrap">
                {elements.map((el, i) => (
                  <button
                    key={el.id}
                    onClick={() => {
                      setSelectedId(el.id);
                      setView(el.view);
                    }}
                    className={`text-[10px] tracking-brand uppercase px-2 py-1 border ${
                      selectedId === el.id ? "border-foreground bg-foreground text-background" : "border-border"
                    }`}
                  >
                    {i + 1}. {el.kind === "text" ? (el.text ?? "").slice(0, 14) : el.kind === "symbol" ? el.symbol : "signature"} · {el.view}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: controls */}
          <aside className="order-3 space-y-4">
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 border-b border-border">
              {([
                ["text", "Text"],
                ["type", "Type"],
                ["color", "Color"],
                ["embroidery", "Thread"],
                ["symbols", "Symbols"],
                ["signature", "Signature"],
                ["library", "Quotes"],
              ] as const).map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`text-[10px] tracking-brand uppercase px-3 py-2 -mb-px border-b-2 ${
                    tab === k ? "border-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              {tab === "text" && (
                <Panel title="Personalize">
                  {selected && selected.kind === "text" ? (
                    <>
                      <label className="block text-[10px] tracking-brand uppercase text-muted-foreground mb-1">
                        Your words
                        <span className="float-right tabular-nums">{(selected.text ?? "").length}/48</span>
                      </label>
                      <textarea
                        value={selected.text ?? ""}
                        maxLength={48}
                        rows={selected.multiline ? 3 : 2}
                        onChange={(e) => updateSelected({ text: e.target.value })}
                        className="w-full bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="write something honest..."
                      />
                      <label className="flex items-center gap-2 mt-2 text-[10px] tracking-brand uppercase text-muted-foreground">
                        <input
                          type="checkbox"
                          checked={!!selected.multiline}
                          onChange={(e) => updateSelected({ multiline: e.target.checked })}
                        />
                        Multi-line
                      </label>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <Slider label="Size" min={10} max={42} value={selected.fontSize ?? 22} onChange={(v) => updateSelected({ fontSize: v })} />
                        <Slider label="Spacing" min={-2} max={20} value={(selected.letterSpacing ?? 0.02) * 100} onChange={(v) => updateSelected({ letterSpacing: v / 100 })} />
                        <Slider label="Line" min={80} max={180} value={(selected.lineHeight ?? 1.1) * 100} onChange={(v) => updateSelected({ lineHeight: v / 100 })} />
                      </div>

                      <div className="mt-3 flex gap-1">
                        <ToggleBtn active={!!selected.bold} onClick={() => updateSelected({ bold: !selected.bold })}>B</ToggleBtn>
                        <ToggleBtn active={!!selected.italic} onClick={() => updateSelected({ italic: !selected.italic })}><i>I</i></ToggleBtn>
                        <ToggleBtn active={!!selected.uppercase} onClick={() => updateSelected({ uppercase: !selected.uppercase })}>AA</ToggleBtn>
                        <ToggleBtn active={false} onClick={() => updateSelected({ text: (selected.text ?? "").toLowerCase(), uppercase: false })}>aa</ToggleBtn>
                      </div>
                    </>
                  ) : (
                    <EmptyHint onAdd={() => addText()}>Select an element or add new text to personalize.</EmptyHint>
                  )}
                </Panel>
              )}

              {tab === "type" && (
                <Panel title="Typography Studio">
                  <div className="grid grid-cols-1 gap-1.5 max-h-[360px] overflow-y-auto pr-1">
                    {FONT_CATEGORIES.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => selected && selected.kind === "text" ? updateSelected({ font: f.id }) : flash("Add text first")}
                        className={`flex items-baseline justify-between px-3 py-3 border text-left transition-all ${
                          selected?.font === f.id ? "border-foreground bg-muted" : "border-border hover:border-foreground/40"
                        }`}
                      >
                        <span className="text-[10px] tracking-brand uppercase text-muted-foreground">{f.label}</span>
                        <span style={{ fontFamily: f.family, fontSize: 22 }}>{f.sample}</span>
                      </button>
                    ))}
                  </div>
                </Panel>
              )}

              {tab === "color" && (
                <Panel title="Color Studio">
                  <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-2">Thread / Text Color</p>
                  <div className="grid grid-cols-8 gap-1.5">
                    {THREAD_COLORS.map((c) => (
                      <button
                        key={c.hex}
                        title={c.name}
                        onClick={() => selected ? updateSelected({ color: c.hex }) : flash("Select an element first")}
                        className={`aspect-square rounded-full border ${selected?.color === c.hex ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "border-border"}`}
                        style={{ background: c.hex }}
                      />
                    ))}
                  </div>
                  <label className="block mt-3 text-[10px] tracking-brand uppercase text-muted-foreground">
                    Custom Color Wheel
                    <input
                      type="color"
                      value={selected?.color ?? "#111111"}
                      onChange={(e) => selected && updateSelected({ color: e.target.value })}
                      className="block mt-1 w-full h-12 cursor-pointer bg-transparent border border-border"
                    />
                  </label>
                </Panel>
              )}

              {tab === "embroidery" && (
                <Panel title="Embroidery Studio">
                  {selected ? (
                    <>
                      <Slider
                        label="Thread Thickness"
                        min={3}
                        max={14}
                        value={Math.round((selected.threadWeight ?? 0.7) * 10)}
                        onChange={(v) => updateSelected({ threadWeight: v / 10 })}
                        full
                      />
                      <Slider
                        label="Element Scale"
                        min={60}
                        max={220}
                        value={Math.round((selected.scale ?? selected.fontSize ? (selected.kind === "text" ? selected.fontSize ?? 22 : (selected.scale ?? 1) * 100) : 100))}
                        onChange={(v) =>
                          selected.kind === "text"
                            ? updateSelected({ fontSize: v })
                            : updateSelected({ scale: v / 100 })
                        }
                        full
                      />
                      <div className="mt-4 p-4 bg-muted/40 border border-border">
                        <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-2">Embroidery Preview</p>
                        <div
                          className="text-center py-4"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: (selected.fontSize ?? 22) * 1.3,
                            color: selected.color ?? "#111",
                            textShadow: `0 1px 0 rgba(0,0,0,0.3), 0 0 ${(selected.threadWeight ?? 0.7) * 2}px ${selected.color ?? "#111"}`,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {selected.kind === "text" ? selected.text || "preview" : selected.kind === "symbol" ? selected.symbol : "✶"}
                        </div>
                      </div>
                    </>
                  ) : (
                    <EmptyHint onAdd={() => addText()}>Add or select an element to fine-tune embroidery.</EmptyHint>
                  )}
                </Panel>
              )}

              {tab === "symbols" && (
                <Panel title="Symbols Library">
                  <div className="grid grid-cols-6 gap-2">
                    {SYMBOLS.map((s) => (
                      <button
                        key={s}
                        onClick={() => addSymbol(s)}
                        className="aspect-square border border-border text-2xl hover:bg-foreground hover:text-background transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed">
                    Add minimal symbols beside your words. Move them anywhere on the garment.
                  </p>
                </Panel>
              )}

              {tab === "signature" && (
                <Panel title="Personal Signature">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Upload your handwritten signature. It will be converted into an embroidery-style overlay you can place on any view.
                  </p>
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="mt-3 w-full border border-dashed border-border py-8 text-[10px] tracking-brand uppercase hover:bg-muted transition-colors"
                  >
                    + Upload Signature (PNG / JPG)
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleSignature} />
                </Panel>
              )}

              {tab === "library" && (
                <Panel title="AI Quote Library">
                  <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-3">Tap to apply</p>
                  <div className="grid grid-cols-1 gap-1.5 max-h-[340px] overflow-y-auto pr-1">
                    {QUOTES.map((q) => (
                      <button
                        key={q}
                        onClick={() => (selected && selected.kind === "text" ? updateSelected({ text: q }) : addText(q))}
                        className="text-left px-3 py-2.5 border border-border hover:border-foreground/60 transition-colors font-display text-lg"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </Panel>
              )}
            </div>

            {/* Price + cart */}
            <Panel title="Your Piece">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] tracking-brand uppercase text-muted-foreground">Live Price</div>
                  <div className="font-display text-4xl mt-1">${totalPrice}</div>
                </div>
                <div className="text-right text-[10px] text-muted-foreground space-y-1">
                  <div>{elements.length} element{elements.length !== 1 && "s"}</div>
                  <div>{GARMENTS.find((g) => g.id === garment)?.name}</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button onClick={() => saveDesign(false)} className="text-[10px] tracking-brand uppercase border border-border py-3 hover:bg-muted">
                  Save Design
                </button>
                <button onClick={addToCart} className="text-[10px] tracking-brand uppercase bg-foreground text-background py-3 hover:opacity-90">
                  Add to Bag
                </button>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button onClick={() => saveDesign(true)} className="text-[10px] tracking-brand uppercase border border-border py-2.5 hover:bg-muted">
                  ♡ Wishlist
                </button>
                <ShareBtn name="My SOFT SOUL piece" />
              </div>
            </Panel>
          </aside>
        </section>

        {/* Philosophy strip */}
        <section className="mt-24 border-y border-border bg-muted/30 grain">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-16 text-center">
            <Reveal>
              <p className="text-[10px] tracking-brand uppercase text-muted-foreground">Brand Philosophy</p>
              <h2 className="font-display text-3xl md:text-5xl mt-3">
                Be Real. Live For Yourself. Protect Your Peace.
              </h2>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Saved drawer */}
      {showSaved && (
        <div className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm" onClick={() => setShowSaved(false)}>
          <aside
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">Saved Designs</h3>
              <button onClick={() => setShowSaved(false)} className="text-xs tracking-brand uppercase">Close</button>
            </div>
            {saved.length === 0 ? (
              <p className="text-sm text-muted-foreground mt-8">Nothing saved yet. Build something honest.</p>
            ) : (
              <div className="mt-6 space-y-3">
                {saved.map((d) => (
                  <div key={d.id} className="border border-border p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-sm border border-border" style={{ background: d.garmentColor }} />
                    <div className="flex-1">
                      <div className="text-sm">{d.name}</div>
                      <div className="text-[10px] tracking-brand uppercase text-muted-foreground">{d.elements.length} elements</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button onClick={() => loadDesign(d)} className="text-[10px] tracking-brand uppercase px-2 py-1 border border-border">Edit</button>
                      <button onClick={() => duplicateDesign(d)} className="text-[10px] tracking-brand uppercase px-2 py-1 border border-border">Copy</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {wishlist.length > 0 && (
              <>
                <h4 className="mt-10 font-display text-xl">Wishlist</h4>
                <div className="mt-4 space-y-2">
                  {wishlist.map((d) => (
                    <div key={d.id} className="border border-border p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full" style={{ background: d.garmentColor }} />
                      <div className="text-xs flex-1">{d.name}</div>
                      <button onClick={() => loadDesign(d)} className="text-[10px] tracking-brand uppercase">Open</button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] bg-foreground text-background text-xs tracking-brand uppercase px-5 py-3 shadow-soft animate-rise">
          {toast}
        </div>
      )}
    </div>
  );
}

/* -------------------- Tiny UI primitives -------------------- */

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-background p-4">
      <h3 className="text-[10px] tracking-brand uppercase text-muted-foreground mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Slider({
  label, min, max, value, onChange, full,
}: { label: string; min: number; max: number; value: number; onChange: (v: number) => void; full?: boolean }) {
  return (
    <label className={`block ${full ? "mt-3" : ""}`}>
      <div className="flex items-center justify-between text-[10px] tracking-brand uppercase text-muted-foreground">
        <span>{label}</span>
        <span className="tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-foreground mt-1"
      />
    </label>
  );
}

function ToggleBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-9 border text-sm font-medium transition-colors ${
        active ? "bg-foreground text-background border-foreground" : "border-border hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

function EmptyHint({ children, onAdd }: { children: React.ReactNode; onAdd: () => void }) {
  return (
    <div className="text-center py-6">
      <p className="text-xs text-muted-foreground">{children}</p>
      <button onClick={onAdd} className="mt-3 text-[10px] tracking-brand uppercase border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
        + Add Text
      </button>
    </div>
  );
}

function ShareBtn({ name }: { name: string }) {
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `I just designed my own ${name} on SOFT SOUL.`;
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try { await (navigator as any).share({ title: name, text, url }); } catch {}
    } else if (typeof window !== "undefined") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + " " + url)}`, "_blank");
    }
  };
  return (
    <button onClick={share} className="text-[10px] tracking-brand uppercase border border-border py-2.5 hover:bg-muted">
      Share
    </button>
  );
}
