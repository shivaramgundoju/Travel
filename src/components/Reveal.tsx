import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  variant?: "up" | "fade";
  style?: CSSProperties;
  role?: string;
  ariaLabel?: string;
}

/** Fade/slide-in on scroll. Respects prefers-reduced-motion via CSS. */
export function Reveal({ children, delay = 0, className = "", as = "div", variant = "up", style, role, ariaLabel }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as "div";
  const mergedStyle: CSSProperties = { ["--reveal-delay" as string]: `${delay}ms`, ...style };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variant === "up" ? "reveal" : "reveal-fade"} ${visible ? "is-visible" : ""} ${className}`}
      style={mergedStyle}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </Tag>
  );
}