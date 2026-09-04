import { useEffect, useState } from "react";
import { waLink } from "../data/site";
import { WhatsAppIcon } from "./icons";

interface Props {
  /** Pre-filled message context, e.g. the trip name. */
  message?: string;
}

export function WhatsAppFloat({ message }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = waLink(message ?? "Hi Yatraa! I'd love help planning a trip.");

  return (
    <a
      href={href}
      className={`whatsapp-float ${visible ? "is-visible" : ""}`}
      aria-label="Chat with Yatraa on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="wa-tooltip">Chat on WhatsApp</span>
      <WhatsAppIcon size={28} />
    </a>
  );
}