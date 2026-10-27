import { useEffect, useRef, useState, type ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: "fade-up" | "fade" | "scale" | "mask";
  threshold?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 900,
  className = "",
  variant = "fade-up",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReduced(e.matches);
      if (e.matches) {
        setVisible(true);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
    } else if ("addListener" in mediaQuery) {
      (mediaQuery as { addListener: (cb: (e: MediaQueryListEvent | MediaQueryList) => void) => void }).addListener(handleMotionChange);
    }

    if (mediaQuery.matches) {
      setVisible(true);
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleMotionChange);
        } else if ("removeListener" in mediaQuery) {
          (mediaQuery as { removeListener: (cb: (e: MediaQueryListEvent | MediaQueryList) => void) => void }).removeListener(handleMotionChange);
        }
      };
    }

    const el = ref.current;
    if (!el) {
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleMotionChange);
        } else if ("removeListener" in mediaQuery) {
          (mediaQuery as { removeListener: (cb: (e: MediaQueryListEvent | MediaQueryList) => void) => void }).removeListener(handleMotionChange);
        }
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionChange);
      } else if ("removeListener" in mediaQuery) {
        (mediaQuery as { removeListener: (cb: (e: MediaQueryListEvent | MediaQueryList) => void) => void }).removeListener(handleMotionChange);
      }
    };
  }, [threshold]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  // Define styles based on variant
  let initialTransform = "translateY(24px)";
  let targetTransform = "translateY(0)";

  if (variant === "scale") {
    initialTransform = "scale(0.96)";
    targetTransform = "scale(1)";
  } else if (variant === "fade") {
    initialTransform = "none";
    targetTransform = "none";
  } else if (variant === "mask") {
    initialTransform = "translateY(100%)";
    targetTransform = "translateY(0%)";
  }

  const baseStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? targetTransform : initialTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: visible ? "auto" : "opacity, transform",
  };

  if (variant === "mask") {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <div style={baseStyle}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
