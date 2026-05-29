import type { CSSProperties } from "react";

export type GarmentType = "tee" | "hoodie" | "sweatshirt" | "cap";
export type StudioView = "front" | "back" | "left" | "right" | "sleeve";

export interface DesignElement {
  id: string;
  kind: "text" | "symbol" | "image";
  view: StudioView;
  // normalized 0..1 within the 400x500 canvas
  x: number;
  y: number;
  // text
  text?: string;
  font?: string;
  fontSize?: number; // in svg px
  letterSpacing?: number; // em
  bold?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  color?: string;
  threadWeight?: number; // 0.3 - 1.4 (embroidery thickness)
  // symbol/image
  symbol?: string;
  imageUrl?: string;
  scale?: number; // for symbols/images
  multiline?: boolean;
  lineHeight?: number;
}

const fontFamilies: Record<string, string> = {
  minimal: "'Inter', sans-serif",
  modern: "'Space Grotesk', sans-serif",
  luxury: "'Cormorant Garamond', serif",
  handwritten: "'Caveat', cursive",
  streetwear: "'Bebas Neue', sans-serif",
  vintage: "'Instrument Serif', serif",
  monospace: "ui-monospace, 'JetBrains Mono', monospace",
};

interface Props {
  garment: GarmentType;
  view: StudioView;
  garmentColor: string;
  elements: DesignElement[];
  selectedId: string | null;
  rotateY?: number;
  zoom?: number;
  onSelect: (id: string | null) => void;
  onDrag: (id: string, x: number, y: number) => void;
}

export function StudioMockup({
  garment,
  view,
  garmentColor,
  elements,
  selectedId,
  rotateY = 0,
  zoom = 1,
  onSelect,
  onDrag,
}: Props) {
  const stroke = "rgba(0,0,0,0.12)";
  const shadowStyle: CSSProperties = {
    filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.22))",
    transition: "transform 0.7s var(--ease-soft)",
    transform: `perspective(1400px) rotateY(${rotateY}deg) scale(${zoom})`,
    transformStyle: "preserve-3d",
  };

  const handlePointerDown = (
    e: React.PointerEvent<SVGGElement>,
    id: string,
  ) => {
    e.stopPropagation();
    const svg = (e.currentTarget.ownerSVGElement) as SVGSVGElement;
    onSelect(id);
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    const move = (ev: PointerEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width;
      const y = (ev.clientY - rect.top) / rect.height;
      onDrag(id, Math.max(0.05, Math.min(0.95, x)), Math.max(0.05, Math.min(0.95, y)));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const visibleElements = elements.filter((el) => el.view === view);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-auto max-h-[620px] cursor-grab active:cursor-grabbing"
        style={shadowStyle}
        onClick={() => onSelect(null)}
      >
        <defs>
          <linearGradient id="fabric-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
          </linearGradient>
          <filter id="embroidery" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.35" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.6" />
            </feComponentTransfer>
          </filter>
          <filter id="thread-shadow">
            <feDropShadow dx="0" dy="0.6" stdDeviation="0.4" floodOpacity="0.45" />
          </filter>
        </defs>

        <GarmentShape garment={garment} view={view} color={garmentColor} stroke={stroke} />

        {visibleElements.map((el) => (
          <ElementNode
            key={el.id}
            el={el}
            selected={el.id === selectedId}
            onPointerDown={(e) => handlePointerDown(e, el.id)}
          />
        ))}
      </svg>
    </div>
  );
}

function ElementNode({
  el,
  selected,
  onPointerDown,
}: {
  el: DesignElement;
  selected: boolean;
  onPointerDown: (e: React.PointerEvent<SVGGElement>) => void;
}) {
  const cx = el.x * 400;
  const cy = el.y * 500;
  const weight = el.threadWeight ?? 0.7;
  const lines = el.text && el.multiline ? el.text.split("\n") : el.text ? [el.text] : [];
  const lh = el.lineHeight ?? 1.1;
  const fs = el.fontSize ?? 22;

  return (
    <g
      onPointerDown={onPointerDown}
      style={{ cursor: "move", transition: "filter 0.3s var(--ease-soft)" }}
      filter="url(#thread-shadow)"
    >
      {el.kind === "image" && el.imageUrl && (
        <image
          href={el.imageUrl}
          x={cx - 30 * (el.scale ?? 1)}
          y={cy - 30 * (el.scale ?? 1)}
          width={60 * (el.scale ?? 1)}
          height={60 * (el.scale ?? 1)}
          preserveAspectRatio="xMidYMid meet"
        />
      )}
      {el.kind === "symbol" && (
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fill={el.color ?? "#111"}
          style={{
            fontSize: `${28 * (el.scale ?? 1)}px`,
            paintOrder: "stroke",
            stroke: el.color ?? "#111",
            strokeWidth: weight,
          }}
        >
          {el.symbol}
        </text>
      )}
      {el.kind === "text" &&
        lines.map((line, i) => {
          const display = el.uppercase ? line.toUpperCase() : line;
          return (
            <text
              key={i}
              x={cx}
              y={cy + i * fs * lh - ((lines.length - 1) * fs * lh) / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={el.color ?? "#111"}
              style={{
                fontFamily: fontFamilies[el.font ?? "minimal"] ?? fontFamilies.minimal,
                fontSize: `${fs}px`,
                fontWeight: el.bold ? 700 : 500,
                fontStyle: el.italic ? "italic" : "normal",
                letterSpacing: `${el.letterSpacing ?? 0.02}em`,
                paintOrder: "stroke",
                stroke: el.color ?? "#111",
                strokeWidth: weight * 0.4,
              }}
            >
              {display}
            </text>
          );
        })}

      {selected && (
        <rect
          x={cx - 60}
          y={cy - 24}
          width={120}
          height={48}
          fill="none"
          stroke="rgba(0,0,0,0.55)"
          strokeDasharray="3 3"
          strokeWidth={0.8}
          rx={4}
        />
      )}
    </g>
  );
}

function GarmentShape({
  garment,
  view,
  color,
  stroke,
}: {
  garment: GarmentType;
  view: StudioView;
  color: string;
  stroke: string;
}) {
  if (garment === "cap") return <CapShape view={view} color={color} stroke={stroke} />;
  if (garment === "hoodie") return <HoodieShape view={view} color={color} stroke={stroke} />;
  if (garment === "sweatshirt") return <SweatshirtShape view={view} color={color} stroke={stroke} />;
  return <TeeShape view={view} color={color} stroke={stroke} />;
}

function TeeShape({ view, color, stroke }: { view: StudioView; color: string; stroke: string }) {
  if (view === "left" || view === "right" || view === "sleeve") {
    const flip = view === "right" ? "scale(-1,1) translate(-400 0)" : "";
    return (
      <g transform={flip}>
        <path
          d="M150,80 L170,65 L210,65 L230,80 L260,120 L255,180 L235,170 L235,420 Q200,438 165,420 L165,170 L145,180 L140,120 Z"
          fill={color}
          stroke={stroke}
        />
        <path
          d="M150,80 L170,65 L210,65 L230,80 L260,120 L255,180 L235,170 L235,420 Q200,438 165,420 L165,170 L145,180 L140,120 Z"
          fill="url(#fabric-shade)"
        />
        <path d="M170,65 Q190,80 210,65 L210,80 Q190,90 170,80 Z" fill="rgba(0,0,0,0.18)" />
      </g>
    );
  }
  return (
    <g>
      <path
        d="M120,80 L155,60 Q200,95 245,60 L280,80 L335,120 L305,170 L275,150 L275,420 Q200,440 125,420 L125,150 L95,170 L65,120 Z"
        fill={color}
        stroke={stroke}
      />
      <path
        d="M120,80 L155,60 Q200,95 245,60 L280,80 L335,120 L305,170 L275,150 L275,420 Q200,440 125,420 L125,150 L95,170 L65,120 Z"
        fill="url(#fabric-shade)"
      />
      {view === "front" ? (
        <path d="M155,60 Q200,95 245,60 Q220,82 200,82 Q180,82 155,60 Z" fill="rgba(0,0,0,0.15)" />
      ) : (
        <path d="M165,60 Q200,76 235,60 Q200,68 165,60 Z" fill="rgba(0,0,0,0.18)" />
      )}
    </g>
  );
}

function SweatshirtShape({ view, color, stroke }: { view: StudioView; color: string; stroke: string }) {
  if (view === "left" || view === "right" || view === "sleeve") {
    const flip = view === "right" ? "scale(-1,1) translate(-400 0)" : "";
    return (
      <g transform={flip}>
        <path
          d="M150,82 L172,65 L208,65 L230,82 L262,125 L255,185 L235,172 L235,415 Q200,440 165,415 L165,172 L145,185 L138,125 Z"
          fill={color}
          stroke={stroke}
        />
        <path d="M150,82 L172,65 L208,65 L230,82 L262,125 L255,185 L235,172 L235,415 Q200,440 165,415 L165,172 L145,185 L138,125 Z" fill="url(#fabric-shade)" />
        <rect x="160" y="408" width="78" height="14" fill="rgba(0,0,0,0.1)" />
      </g>
    );
  }
  return (
    <g>
      <path
        d="M115,82 L160,62 Q200,90 240,62 L285,82 L345,130 L310,185 L285,170 L285,415 Q200,438 115,415 L115,170 L90,185 L55,130 Z"
        fill={color}
        stroke={stroke}
      />
      <path d="M115,82 L160,62 Q200,90 240,62 L285,82 L345,130 L310,185 L285,170 L285,415 Q200,438 115,415 L115,170 L90,185 L55,130 Z" fill="url(#fabric-shade)" />
      <rect x="280" y="160" width="35" height="12" fill="rgba(0,0,0,0.12)" />
      <rect x="85" y="160" width="35" height="12" fill="rgba(0,0,0,0.12)" />
      <rect x="115" y="410" width="170" height="14" fill="rgba(0,0,0,0.1)" />
    </g>
  );
}

function HoodieShape({ view, color, stroke }: { view: StudioView; color: string; stroke: string }) {
  if (view === "left" || view === "right" || view === "sleeve") {
    const flip = view === "right" ? "scale(-1,1) translate(-400 0)" : "";
    return (
      <g transform={flip}>
        <path d="M155,85 Q190,55 215,85 Q210,115 185,118 Q160,115 155,85 Z" fill={color} stroke={stroke} />
        <path
          d="M150,95 L172,75 L208,75 L230,95 L262,135 L255,195 L235,180 L235,420 Q200,442 165,420 L165,180 L145,195 L138,135 Z"
          fill={color}
          stroke={stroke}
        />
        <path d="M150,95 L172,75 L208,75 L230,95 L262,135 L255,195 L235,180 L235,420 Q200,442 165,420 L165,180 L145,195 L138,135 Z" fill="url(#fabric-shade)" />
      </g>
    );
  }
  return (
    <g>
      {view === "front" && (
        <path d="M140,70 Q200,30 260,70 Q255,110 200,115 Q145,110 140,70 Z" fill={color} stroke={stroke} />
      )}
      <path
        d="M115,90 L160,72 Q200,100 240,72 L285,90 L345,140 L310,195 L285,180 L285,420 Q200,442 115,420 L115,180 L90,195 L55,140 Z"
        fill={color}
        stroke={stroke}
      />
      <path d="M115,90 L160,72 Q200,100 240,72 L285,90 L345,140 L310,195 L285,180 L285,420 Q200,442 115,420 L115,180 L90,195 L55,140 Z" fill="url(#fabric-shade)" />
      {view === "back" && (
        <path d="M140,90 Q200,40 260,90 Q255,135 200,140 Q145,135 140,90 Z" fill={color} stroke={stroke} />
      )}
      {view === "front" && (
        <>
          <path d="M140,290 L260,290 L275,355 L125,355 Z" fill="rgba(0,0,0,0.08)" stroke={stroke} />
          <line x1="185" y1="115" x2="180" y2="170" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
          <line x1="215" y1="115" x2="220" y2="170" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
        </>
      )}
    </g>
  );
}

function CapShape({ view, color, stroke }: { view: StudioView; color: string; stroke: string }) {
  if (view === "left" || view === "right" || view === "sleeve") {
    const flip = view === "right" ? "scale(-1,1) translate(-400 0)" : "";
    return (
      <g transform={`translate(0, 80) ${flip}`}>
        <path d="M90,180 Q90,90 200,80 Q310,90 310,180 Z" fill={color} stroke={stroke} />
        <path d="M90,180 Q90,90 200,80 Q310,90 310,180 Z" fill="url(#fabric-shade)" />
        <path d="M90,180 L280,180 L260,200 L90,200 Z" fill={color} stroke={stroke} />
      </g>
    );
  }
  return (
    <g transform="translate(0, 80)">
      <path d="M100,180 Q100,80 200,75 Q300,80 300,180 Z" fill={color} stroke={stroke} />
      <path d="M100,180 Q100,80 200,75 Q300,80 300,180 Z" fill="url(#fabric-shade)" />
      {view === "front" ? (
        <path d="M70,180 Q200,230 330,180 Q200,200 70,180 Z" fill={color} stroke={stroke} />
      ) : (
        <path d="M90,180 L310,180 L300,200 L100,200 Z" fill={color} stroke={stroke} />
      )}
      <line x1="200" y1="75" x2="200" y2="180" stroke="rgba(0,0,0,0.1)" />
      {view === "back" && <path d="M170,150 L230,150 L230,175 L170,175 Z" fill="rgba(0,0,0,0.15)" />}
    </g>
  );
}
