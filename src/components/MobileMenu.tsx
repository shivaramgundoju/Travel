import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Explore", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Experiences", to: "/experiences" },
  { label: "Trips", to: "/trips" },
  { label: "Stories", to: "/stories" },
  { label: "About", to: "/about" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      style={{ visibility: open ? "visible" : undefined }}
    >
      <div className="mobile-menu-top">
        <Logo />
        <button type="button" className="mobile-menu-close" aria-label="Close menu" onClick={onClose}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <nav className="mobile-menu-links" aria-label="Mobile">
        {LINKS.map((link, i) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            style={{ ["--i" as string]: i }}
            className={({ isActive }) => `mobile-menu-link ${isActive ? "is-current" : ""}`}
          >
            <span className="mm-index" aria-hidden="true">
              0{i + 1}
            </span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="mobile-menu-bottom">
        <Button to="/plan-a-trip" variant="primary" stagger>
          Plan a Trip
        </Button>
        <p className="text-size-small text-color-faint" style={{ color: "rgba(255,255,255,.5)", textAlign: "center" }}>
          Hyderabad · India — {`hello@yatraa.travel`}
        </p>
      </div>
    </div>
  );
}