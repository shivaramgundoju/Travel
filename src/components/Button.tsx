import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "white" | "green" | "outline" | "outline-ink" | "whatsapp" | "ghost";

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  large?: boolean;
  type?: "button" | "submit";
  stagger?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  external?: boolean;
}

function classFor(variant: Variant): string {
  switch (variant) {
    case "primary":
      return "primary-button";
    case "white":
      return "primary-button is-white";
    case "green":
      return "primary-button is-green";
    case "outline":
      return "secondary-button is-outline";
    case "outline-ink":
      return "secondary-button is-ink";
    case "whatsapp":
      return "primary-button is-whatsapp";
    case "ghost":
      return "secondary-button is-ghost";
  }
}

export function Button({
  to,
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  large = false,
  type = "button",
  stagger = false,
  ariaLabel,
  disabled,
  external = false,
}: ButtonProps) {
  const cls = `${classFor(variant)} ${large ? "is-large" : ""} ${className}`.trim();

  const inner = stagger ? (
    <span className="button-text-wrapper">
      <span className="button-copy">{children}</span>
      <span className="button-copy" data-dup aria-hidden="true">
        {children}
      </span>
    </span>
  ) : (
    <span className="button-text-wrapper">
      <span className="button-copy">{children}</span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      {inner}
    </button>
  );
}