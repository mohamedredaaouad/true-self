import React from "react";

interface SymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  animated?: boolean;
}

/**
 * The official TRUE SELF® symbol:
 * - A circle representing society, expectations, and the need for approval.
 * - A solid dot outside representing the individual choosing authenticity, freedom, and self-trust.
 */
export function Symbol({ size = 24, className = "", animated = false, ...props }: SymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group/symbol ${className}`}
      {...props}
    >
      {/* The Circle - smooth drawn reveal when animated, subtle opacity change on hover */}
      <circle
        cx="50"
        cy="55"
        r="22"
        stroke="currentColor"
        strokeWidth="2.5"
        className={`transition-all duration-700 group-hover/symbol:opacity-80 ${
          animated ? "animate-draw-circle" : ""
        }`}
      />
      {/* The Dot - emerges outside the circle and glides into position */}
      <circle
        cx="72"
        cy="33"
        r="5.5"
        fill="currentColor"
        className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-[72px_33px] group-hover/symbol:scale-125 group-hover/symbol:translate-x-1 group-hover/symbol:-translate-y-1 ${
          animated ? "animate-dot-emerge" : ""
        }`}
      />
    </svg>
  );
}

interface LogoProps {
  layout?: "horizontal" | "stacked";
  symbolSize?: number | string;
  symbolClassName?: string;
  textSize?: string;
  taglineSize?: string;
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
}

/**
 * Reusable official logo layout. Supporting horizontal layout (for en-têtes/drawers)
 * and stacked layout (for footers and dedicated sections).
 */
export function Logo({
  layout = "horizontal",
  symbolSize,
  symbolClassName,
  textSize,
  taglineSize,
  className = "",
  showTagline = true,
  animated = false,
}: LogoProps) {
  if (layout === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3 select-none group/symbol cursor-pointer ${className}`}>
        <Symbol 
          size={symbolSize} 
          animated={animated}
          className={`${symbolClassName || ""}`} 
        />
        <span className={`font-display tracking-[0.18em] text-foreground uppercase transition-all duration-700 group-hover/symbol:opacity-80 ${
          animated ? "animate-fade delay-2" : ""
        } ${textSize || "text-sm sm:text-base"}`}>
          TRUE SELF
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center gap-4 select-none group/symbol cursor-pointer ${className}`}>
      <Symbol 
        size={symbolSize || 64} 
        animated={animated}
        className={`${symbolClassName || ""}`} 
      />
      <div className="space-y-1.5">
        <span className={`font-display tracking-[0.25em] text-foreground uppercase block font-medium transition-all duration-700 group-hover/symbol:opacity-80 ${
          animated ? "animate-fade delay-3" : ""
        } ${textSize || "text-2xl md:text-3xl"}`}>
          TRUE SELF
        </span>
        {showTagline && (
          <span className={`font-mono tracking-[0.32em] text-muted-foreground uppercase block leading-none transition-all duration-700 group-hover/symbol:opacity-80 ${
            animated ? "animate-fade delay-5" : ""
          } ${taglineSize || "text-[9px] md:text-[10px]"}`}>
            LIVE FOR YOURSELF.
          </span>
        )}
      </div>
    </div>
  );
}

