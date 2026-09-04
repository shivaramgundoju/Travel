import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { alt, photo, preloadHref, type ImageKey } from "../data/images";
import { OptimizedImage } from "./OptimizedImage";
import { waLink } from "../data/site";
import type { Destination } from "../data/destinations";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/* ---------------- Page hero for inner pages ---------------- */
interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  tagline?: string;
  image: ImageKey;
  chips?: string[];
  breadcrumb?: { label: string; to: string }[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, tagline, image, chips, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <OptimizedImage imageKey={image} width={1800} priority sizes="100vw" />
      </div>
      <div className="page-hero-overlay" />
      <div className="container-large page-hero-content">
        {breadcrumb && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb.map((b) => (
              <span key={b.to} style={{ display: "contents" }}>
                <span className="sep" aria-hidden="true">
                  /
                </span>
                {b.to.startsWith("/") && b.to !== "#" ? <Link to={b.to}>{b.label}</Link> : <span>{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <Reveal className="section-subtitle-block" variant="fade">
          <span className="subtitle-border-line white" />
          <p className="section-subtitle white">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="page-hero-title">{title}</h1>
        </Reveal>
        {tagline && (
          <Reveal delay={160}>
            <p className="page-hero-tagline">{tagline}</p>
          </Reveal>
        )}
        {chips && chips.length > 0 && (
          <Reveal delay={220} className="page-hero-meta">
            {chips.map((c) => (
              <span key={c} className="page-hero-chip">
                {c}
              </span>
            ))}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------------- CTA band ---------------- */
interface CtaBandProps {
  title: ReactNode;
  text?: string;
  primaryLabel?: string;
  primaryTo?: string;
  /** Renders the primary action as an external WhatsApp-style link instead of a route. */
  primaryHref?: string;
  primaryVariant?: "primary" | "whatsapp";
  secondaryLabel?: string;
  message?: string;
}

export function CtaBand({
  title,
  text,
  primaryLabel = "Plan a Trip",
  primaryTo = "/plan-a-trip",
  primaryHref,
  primaryVariant = "primary",
  secondaryLabel = "Chat on WhatsApp",
  message,
}: CtaBandProps) {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container-large">
        <Reveal className="cta-band">
          <div className="cta-band-content">
            <h2 className="cta-band-title">{title}</h2>
            {text && <p className="cta-band-text">{text}</p>}
            <div className="cta-band-actions">
              {primaryHref ? (
                <Button href={primaryHref} variant={primaryVariant} external stagger>
                  {primaryVariant === "whatsapp" && <WhatsAppIcon size={18} />}
                  {primaryLabel}
                </Button>
              ) : (
                <Button to={primaryTo} variant={primaryVariant} stagger>
                  {primaryLabel}
                </Button>
              )}
              {!primaryHref && (
                <Button
                  href={waLink(message ?? "Hi Yatraa! I'd like to plan a trip.")}
                  variant="outline"
                  external
                >
                  <WhatsAppIcon size={18} /> {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Destination accordion panels (home signature) ---------------- */
export function DestinationPanels({ destinations }: { destinations: Destination[] }) {
  return (
    <div className="destinations_accordion">
      {destinations.map((d, i) => (
        <Link
          key={d.slug}
          to={`/destinations/${d.slug}`}
          className="destinations_panel"
          aria-label={`Explore ${d.name}`}
        >
          <OptimizedImage imageKey={d.image} width={1000} className="destinations_panel-bg" sizes="(max-width: 767px) 100vw, 20vw" />
          <div className="destinations_panel-overlay" />
          <div className="destinations_panel-number" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="destinations_panel-label" aria-hidden="true">
            <p className="destinations_label-number">{d.name}</p>
          </div>
          <div className="destinations_panel-content">
            <p className="destinations_label-number" style={{ fontSize: 15, textTransform: "none", letterSpacing: "0.05em" }}>
              {d.name}
            </p>
            <p className="destinations_content-desc">{d.description}</p>
            <div className="destination-devider-block" />
            <span className="primary-button" style={{ alignSelf: "flex-start" }}>
              <span className="button-text-wrapper">
                <span className="button-copy">
                  Explore <ArrowRightIcon size={14} />
                </span>
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ---------------- Destination word marquee band ---------------- */
const marqueeNames = ["Hyderabad", "Kashmir", "Kerala", "Rajasthan", "Goa", "Ladakh", "Andaman", "Varanasi", "Udaipur", "Meghalaya"];

export function DestinationMarquee() {
  const half = [...marqueeNames, ...marqueeNames];
  return (
    <div className="destination-marquee" aria-hidden="true">
      <div className="footer-marquee-block" style={{ animationDuration: "40s" }}>
        {[...half, ...half].map((name, i) => (
          <span key={i} className="footer-marquee-text" style={{ fontSize: "var(--fs-h4)", fontFamily: "var(--font-heading)" }}>
            {name} <span className="dm-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}