import React from "react";

interface SymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * The official TRUE SELF® symbol:
 * - A circle representing society, expectations, and the need for approval.
 * - A solid dot outside representing the individual choosing authenticity, freedom, and self-trust.
 */
export function Symbol({ size = 24, className = "", ...props }: SymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle transition-transform duration-500 hover:rotate-12 ${className}`}
      {...props}
    >
      {/* The Circle */}
      <circle
        cx="50"
        cy="55"
        r="22"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* The Dot */}
      <circle
        cx="72"
        cy="33"
        r="5.5"
        fill="currentColor"
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
}: LogoProps) {
  if (layout === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <Symbol 
          size={symbolSize} 
          className={`text-foreground transition-transform duration-500 hover:scale-110 ${symbolClassName || ""}`} 
        />
        <span className={`font-display tracking-[0.15em] text-foreground uppercase ${textSize || "text-sm sm:text-base"}`}>
          TRUE SELF
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center gap-4 select-none ${className}`}>
      <Symbol 
        size={symbolSize || 64} 
        className={`text-foreground transition-transform duration-700 hover:scale-105 ${symbolClassName || ""}`} 
      />
      <div className="space-y-1.5">
        <span className={`font-display tracking-[0.25em] text-foreground uppercase block font-medium ${textSize || "text-2xl md:text-3xl"}`}>
          TRUE SELF
        </span>
        {showTagline && (
          <span className={`font-mono tracking-[0.3em] text-muted-foreground uppercase block leading-none ${taglineSize || "text-[9px] md:text-[10px]"}`}>
            LIVE FOR YOURSELF.
          </span>
        )}
      </div>
    </div>
  );
}
