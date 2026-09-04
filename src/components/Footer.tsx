import { Link } from "react-router-dom";
import { site } from "../data/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, YouTubeIcon } from "./icons";
import { Logo } from "./Logo";
import { waLink } from "../data/site";

const marqueeWords = ["Explore India", "Beautifully", "Curated Journeys", "Hyderabad", "Since 2022", "Travel Deeper"];

const navLinks = [
  { label: "Explore", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Experiences", to: "/experiences" },
  { label: "Trips", to: "/trips" },
  { label: "Stories", to: "/stories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const supportLinks = [
  { label: "FAQs", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-large">
        <div className="footer-marquee-wrapper" aria-hidden="true">
          <div className="footer-marquee-block">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="footer-marquee-text">
                {word} <span style={{ color: "var(--color-accent)", opacity: 0.7 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-large">
        <div className="footer-content-block">
          <div className="footer-brand-col">
            <Logo />
            <p className="footer-brand-tagline">
              Yatraa is a Hyderabad-based travel studio crafting extraordinary journeys across India — places, people,
              food and experiences worth remembering.
            </p>
            <div className="footer-social-wrapper">
              <a className="footer-social-link" href={site.socials.instagram} aria-label="Yatraa on Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a className="footer-social-link" href={site.socials.youtube} aria-label="Yatraa on YouTube" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon />
              </a>
              <a className="footer-social-link" href={site.socials.facebook} aria-label="Yatraa on Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a className="footer-social-link" href={waLink("Hi Yatraa! I found you through your website.")} aria-label="Chat with Yatraa on WhatsApp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="footer-heading">Explore</h3>
            <div className="footer-menu-wrapper">
              {navLinks.map((l) => (
                <Link key={l.label} to={l.to} className="footer-menu-link-block">
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h3 className="footer-heading">Support</h3>
            <div className="footer-menu-wrapper" style={{ marginBottom: "var(--space-l)" }}>
              {supportLinks.map((l) => (
                <Link key={l.label} to={l.to} className="footer-menu-link-block">
                  {l.label}
                </Link>
              ))}
            </div>
            <h3 className="footer-heading">Reach us</h3>
            <a className="footer-contact-item" href={site.phoneHref}>
              <PhoneIcon size={16} /> {site.phone}
            </a>
            <a className="footer-contact-item" href={site.emailHref}>
              <MailIcon size={16} /> {site.email}
            </a>
            <p className="footer-contact-item">
              <PinIcon size={16} /> {site.address}
            </p>
          </div>
        </div>
      </div>

      <div className="container-large">
        <div className="footer-devider" />
        <div className="footer-lower">
          <p className="footer-lower-text">© 2026 {site.name}. All rights reserved.</p>
          <p className="footer-lower-text">
            Crafted with <span style={{ color: "var(--color-accent)" }}>♥</span> in {site.city}
          </p>
        </div>
      </div>

      <div className="footer-large-text" aria-hidden="true">
        YATRAA
      </div>
    </footer>
  );
}