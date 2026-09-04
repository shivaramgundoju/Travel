import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

export const NAV_ITEMS = [
  { label: "Explore", to: "/", match: "/" },
  { label: "Destinations", to: "/destinations", match: "/destinations" },
  { label: "Experiences", to: "/experiences", match: "/experiences" },
  { label: "Trips", to: "/trips", match: "/trips" },
  { label: "Stories", to: "/stories", match: "/stories" },
  { label: "About", to: "/about", match: "/about" },
];



export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <div className="container-large">
            <div className="nav-inner-block">
              <Logo />
              <nav className="nav-menu-list" aria-label="Primary">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.match === "/"}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "is-current" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="nav-button-wrapper desktop">
                <Button to="/plan-a-trip" variant="white" stagger>
                  Plan a Trip
                </Button>
              </div>
              <button
                type="button"
                className="menu-button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span className="menu-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}