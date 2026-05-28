import type { CSSProperties } from "react";

export type GarmentType = "tee" | "hoodie" | "sweatshirt" | "cap";
export type ViewSide = "front" | "back";
export type Position =
  | "left-chest"
  | "center-chest"
  | "right-chest"
  | "sleeve"
  | "back-neck"
  | "upper-back"
  | "front-center";

const positionCoords: Record<Position, { x: number; y: number; side: ViewSide; max: number }> = {
  "left-chest":   { x: 145, y: 175, side: "front", max: 70 },
  "center-chest": { x: 200, y: 180, side: "front", max: 160 },
  "right-chest":  { x: 255, y: 175, side: "front", max: 70 },
  "sleeve":       { x: 70,  y: 195, side: "front", max: 60 },
  "front-center": { x: 200, y: 260, side: "front", max: 200 },
  "back-neck":    { x: 200, y: 110, side: "back",  max: 110 },
  "upper-back":   { x: 200, y: 200, side: "back",  max: 220 },
};

const capCoords: Record<Position, { x: number; y: number; side: ViewSide; max: number }> = {
  "left-chest":   { x: 200, y: 140, side: "front", max: 200 },
  "center-chest": { x: 200, y: 140, side: "front", max: 200 },
  "right-chest":  { x: 200, y: 140, side: "front", max: 200 },
  "front-center": { x: 200, y: 140, side: "front", max: 200 },
  "sleeve":       { x: 200, y: 140, side: "front", max: 200 },
  "back-neck":    { x: 200, y: 160, side: "back",  max: 200 },
  "upper-back":   { x: 200, y: 160, side: "back",  max: 200 },
};

const fontFamilies: Record<string, string> = {
  minimal: "'Inter', sans-serif",
  modern: "'Space Grotesk', sans-serif",
  luxury: "'Cormorant Garamond', serif",
  handwritten: "'Caveat', cursive",
  streetwear: "'Bebas Neue', sans-serif",
};

interface Props {
  garment: GarmentType;
  side: ViewSide;
  garmentColor: string;
  text: string;
  font: string;
  textColor: string;
  position: Position;
  logoUrl?: string | null;
}

export function GarmentMockup({
  garment,
  side,
  garmentColor,
  text,
  font,
  textColor,
  position,
  logoUrl,
}: Props) {
  const coords = garment === "cap" ? capCoords[position] : positionCoords[position];
  const showOnThisSide = coords.side === side;
  const stroke = "rgba(0,0,0,0.12)";
  const shadowStyle: CSSProperties = {
    filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.18))",
    transition: "all 0.6s var(--ease-soft)",
  };

  const fontSize = text.length > 14 ? 14 : text.length > 8 ? 18 : 22;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 500" className="w-full h-auto max-h-[560px]" style={shadowStyle}>
        <defs>
          <linearGradient id="fabric-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
          </linearGradient>
        </defs>

        {garment === "tee" && <TeeShape side={side} color={garmentColor} stroke={stroke} />}
        {garment === "sweatshirt" && <SweatshirtShape side={side} color={garmentColor} stroke={stroke} />}
        {garment === "hoodie" && <HoodieShape side={side} color={garmentColor} stroke={stroke} />}
        {garment === "cap" && <CapShape side={side} color={garmentColor} stroke={stroke} />}

        {/* Embroidery */}
        {showOnThisSide && (
          <g
            style={{
              transition: "opacity 0.4s var(--ease-soft), transform 0.6s var(--ease-soft)",
              opacity: text || logoUrl ? 1 : 0,
            }}
          >
            {logoUrl && (
              <image
                href={logoUrl}
                x={coords.x - 22}
                y={coords.y - 22}
                width={44}
                height={44}
                preserveAspectRatio="xMidYMid meet"
                style={{ filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.2))" }}
              />
            )}
            {text && (
              <text
                x={coords.x}
                y={coords.y + (logoUrl ? 38 : 4)}
                textAnchor="middle"
                fill={textColor}
                style={{
                  fontFamily: fontFamilies[font] ?? fontFamilies.minimal,
                  fontSize: `${fontSize}px`,
                  fontWeight: font === "streetwear" || font === "modern" ? 600 : 400,
                  letterSpacing: font === "streetwear" ? "0.08em" : "0.01em",
                  textTransform: font === "streetwear" ? "uppercase" : "none",
                  paintOrder: "stroke",
                  stroke: "rgba(0,0,0,0.06)",
                  strokeWidth: 0.4,
                }}
              >
                {text.slice(0, 32)}
              </text>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}

function TeeShape({ side, color, stroke }: { side: ViewSide; color: string; stroke: string }) {
  return (
    <g>
      <path
        d="M120,80 L155,60 Q200,95 245,60 L280,80 L335,120 L305,170 L275,150 L275,420 Q200,440 125,420 L125,150 L95,170 L65,120 Z"
        fill={color}
        stroke={stroke}
        strokeWidth={1}
      />
      <path
        d="M120,80 L155,60 Q200,95 245,60 L280,80 L335,120 L305,170 L275,150 L275,420 Q200,440 125,420 L125,150 L95,170 L65,120 Z"
        fill="url(#fabric-shade)"
      />
      {side === "front" ? (
        <path d="M155,60 Q200,95 245,60 Q220,82 200,82 Q180,82 155,60 Z" fill="rgba(0,0,0,0.15)" />
      ) : (
        <path d="M165,60 Q200,76 235,60 Q200,68 165,60 Z" fill="rgba(0,0,0,0.18)" />
      )}
    </g>
  );
}

function SweatshirtShape({ side, color, stroke }: { side: ViewSide; color: string; stroke: string }) {
  return (
    <g>
      <path
        d="M115,82 L160,62 Q200,90 240,62 L285,82 L345,130 L310,185 L285,170 L285,415 Q200,438 115,415 L115,170 L90,185 L55,130 Z"
        fill={color}
        stroke={stroke}
        strokeWidth={1}
      />
      <path
        d="M115,82 L160,62 Q200,90 240,62 L285,82 L345,130 L310,185 L285,170 L285,415 Q200,438 115,415 L115,170 L90,185 L55,130 Z"
        fill="url(#fabric-shade)"
      />
      {/* ribbed cuffs */}
      <rect x="280" y="160" width="35" height="12" fill="rgba(0,0,0,0.12)" />
      <rect x="85" y="160" width="35" height="12" fill="rgba(0,0,0,0.12)" />
      <rect x="115" y="410" width="170" height="14" fill="rgba(0,0,0,0.1)" />
      {side === "front" ? (
        <ellipse cx="200" cy="72" rx="40" ry="10" fill="rgba(0,0,0,0.2)" />
      ) : (
        <path d="M170,62 Q200,75 230,62 Q200,68 170,62 Z" fill="rgba(0,0,0,0.2)" />
      )}
    </g>
  );
}

function HoodieShape({ side, color, stroke }: { side: ViewSide; color: string; stroke: string }) {
  return (
    <g>
      {/* hood (front: behind shoulders) */}
      {side === "front" && (
        <path d="M140,70 Q200,30 260,70 Q255,110 200,115 Q145,110 140,70 Z" fill={color} stroke={stroke} />
      )}
      <path
        d="M115,90 L160,72 Q200,100 240,72 L285,90 L345,140 L310,195 L285,180 L285,420 Q200,442 115,420 L115,180 L90,195 L55,140 Z"
        fill={color}
        stroke={stroke}
        strokeWidth={1}
      />
      <path
        d="M115,90 L160,72 Q200,100 240,72 L285,90 L345,140 L310,195 L285,180 L285,420 Q200,442 115,420 L115,180 L90,195 L55,140 Z"
        fill="url(#fabric-shade)"
      />
      {side === "back" && (
        <path d="M140,90 Q200,40 260,90 Q255,135 200,140 Q145,135 140,90 Z" fill={color} stroke={stroke} />
      )}
      {/* pocket */}
      {side === "front" && (
        <path d="M140,290 L260,290 L275,355 L125,355 Z" fill="rgba(0,0,0,0.08)" stroke={stroke} />
      )}
      {/* drawstrings */}
      {side === "front" && (
        <>
          <line x1="185" y1="115" x2="180" y2="170" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
          <line x1="215" y1="115" x2="220" y2="170" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
        </>
      )}
    </g>
  );
}

function CapShape({ side, color, stroke }: { side: ViewSide; color: string; stroke: string }) {
  return (
    <g transform="translate(0, 80)">
      {/* crown */}
      <path
        d="M100,180 Q100,80 200,75 Q300,80 300,180 Z"
        fill={color}
        stroke={stroke}
      />
      <path d="M100,180 Q100,80 200,75 Q300,80 300,180 Z" fill="url(#fabric-shade)" />
      {/* brim */}
      {side === "front" ? (
        <path d="M70,180 Q200,230 330,180 Q200,200 70,180 Z" fill={color} stroke={stroke} />
      ) : (
        <path d="M90,180 L310,180 L300,200 L100,200 Z" fill={color} stroke={stroke} />
      )}
      {/* panels */}
      <line x1="200" y1="75" x2="200" y2="180" stroke="rgba(0,0,0,0.1)" />
      {side === "back" && (
        <path d="M170,150 L230,150 L230,175 L170,175 Z" fill="rgba(0,0,0,0.15)" />
      )}
    </g>
  );
}
