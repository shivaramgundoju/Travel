import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  summary?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  maxWidth?: number;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  summary,
  align = "left",
  dark = false,
  maxWidth,
  action,
  className = "",
}: SectionHeadingProps) {
  const inner = (
    <>
      <Reveal className="section-subtitle-block">
        <span className={`subtitle-border-line ${dark ? "white" : ""}`} />
        <p className={`section-subtitle ${dark ? "white" : ""}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={80} className="section-title-block margin-top-16px" >
        {typeof title === "string" ? <h2 className="heading-style-h2">{title}</h2> : title}
      </Reveal>
      {summary && (
        <Reveal delay={160} className="section-summary-block margin-top-16px">
          {typeof summary === "string" ? <p className="text-size-regular">{summary}</p> : summary}
        </Reveal>
      )}
    </>
  );

  if (align === "center") {
    return (
      <div className={`section-heading-block align-center ${className}`} style={maxWidth ? { maxWidth } : undefined}>
        {inner}
      </div>
    );
  }

  if (action) {
    return (
      <div className={`section-heading-flex ${className}`}>
        <div className="section-heading-block" style={maxWidth ? { maxWidth } : undefined}>
          {inner}
        </div>
        <Reveal delay={200}>{action}</Reveal>
      </div>
    );
  }

  return (
    <div className="section-heading-block" style={maxWidth ? { maxWidth } : undefined}>
      {inner}
    </div>
  );
}