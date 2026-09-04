import { useState, type FormEvent } from "react";
import { site, waLink } from "../data/site";
import { usePageMeta } from "../lib/hooks";
import { PageHero, CtaBand } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { SelectField, TextField, TextAreaField, validateEmail, validatePhone } from "../lib/forms";
import { CheckCircleIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../components/icons";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";

const DESTINATIONS = ["Hyderabad", "Kerala", "Kashmir", "Rajasthan", "Goa", "Ladakh", "Andaman", "Somewhere else / not sure"];
const TRAVELER_OPTIONS = ["2 travelers", "Couple", "Family", "Solo", "Group of 5+"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  travelers: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  destination: "Hyderabad",
  date: "",
  travelers: "2 travelers",
  message: "",
};

export function Contact() {
  usePageMeta(
    "Contact Yatraa — Plan Your India Trip",
    `Contact the Yatraa travel team in Hyderabad. Call ${site.phone}, email ${site.email} or WhatsApp us — we reply within a few hours.`,
  );

  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formError, setFormError] = useState("");

  const set = (k: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate(): boolean {
    const er: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) er.name = "Please tell us your name.";
    if (!validateEmail(form.email)) er.email = "That email doesn't look right.";
    if (!validatePhone(form.phone)) er.phone = "Enter a valid phone number.";
    if (!form.date) er.date = "Pick an approximate travel date.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  const waMsg = `Hi Yatraa! New enquiry from the website:\n\nName: ${form.name}\nDestination: ${form.destination}\nTravel date: ${form.date}\nTravelers: ${form.travelers}\n${form.message ? `Message: ${form.message}` : ""}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan something unforgettable."
        tagline="Questions, ideas, half-formed dreams of a holiday — send them over. A real human on our Hyderabad team replies within a few hours."
        image="charminar"
        breadcrumb={[{ label: "Contact", to: "#" }]}
      />

      <section className="section">
        <div className="container-large">
          <div className="contact-grid">
            {/* Info column */}
            <div>
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Reach us directly</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 margin-top-16px">We're based in Hyderabad, at home in all of India</h2>
              </Reveal>

              <div className="contact-info-list">
                <Reveal delay={120}>
                  <a className="contact-info-item" href={site.phoneHref}>
                    <span className="contact-info-icon">
                      <PhoneIcon />
                    </span>
                    <span>
                      <p className="contact-info-label">Phone</p>
                      <p className="contact-info-value">{site.phone}</p>
                    </span>
                  </a>
                </Reveal>
                <Reveal delay={170}>
                  <a className="contact-info-item" href={site.emailHref}>
                    <span className="contact-info-icon">
                      <MailIcon />
                    </span>
                    <span>
                      <p className="contact-info-label">Email</p>
                      <p className="contact-info-value">{site.email}</p>
                    </span>
                  </a>
                </Reveal>
                <Reveal delay={220}>
                  <a
                    className="contact-info-item"
                    href={waLink("Hi Yatraa! I have a question about planning a trip.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-info-icon" style={{ color: "var(--color-whatsapp)" }}>
                      <WhatsAppIcon />
                    </span>
                    <span>
                      <p className="contact-info-label">WhatsApp</p>
                      <p className="contact-info-value">Fastest — usually replies within the hour</p>
                    </span>
                  </a>
                </Reveal>
                <Reveal delay={270}>
                  <div className="contact-info-item">
                    <span className="contact-info-icon">
                      <PinIcon />
                    </span>
                    <span>
                      <p className="contact-info-label">Studio</p>
                      <p className="contact-info-value">{site.address}</p>
                    </span>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={320} className="margin-top-30px">
                <div className="split-media split-media-4x3" style={{ borderRadius: "var(--radius-l)" }}>
                  <OptimizedImage imageKey="oldCityMarket" width={900} sizes="(max-width: 767px) 100vw, 50vw" />
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <Reveal delay={100}>
              <div className="form-card form-theme-light">
                {status === "success" ? (
                  <div className="success-panel">
                    <span className="success-icon">
                      <CheckCircleIcon size={36} />
                    </span>
                    <h3 className="success-title">Enquiry received — thank you!</h3>
                    <p className="success-text">
                      Our travel team will get back to you within a few working hours. Want to skip the wait?
                    </p>
                    <div style={{ display: "flex", gap: "var(--space-s)", flexWrap: "wrap", justifyContent: "center" }}>
                      <Button href={waLink(waMsg)} variant="whatsapp" external>
                        <WhatsAppIcon size={18} /> Chat now on WhatsApp
                      </Button>
                      <Button href={site.phoneHref} variant="green">
                        <PhoneIcon size={16} /> Call us
                      </Button>
                    </div>
                    <button type="button" className="category-chip" style={{ marginTop: 12 }} onClick={() => { setForm(initial); setStatus("idle"); }}>
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <div className="form-grid-2">
                      <TextField
                        label="Name"
                        placeholder="Your full name"
                        value={form.name}
                        error={errors.name}
                        onChange={set("name")}
                        required
                        autoComplete="name"
                      />
                      <TextField
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        error={errors.email}
                        onChange={set("email")}
                        required
                        autoComplete="email"
                      />
                      <TextField
                        label="Phone"
                        type="tel"
                        placeholder="+91 …"
                        value={form.phone}
                        error={errors.phone}
                        onChange={set("phone")}
                        required
                        autoComplete="tel"
                      />
                      <SelectField
                        label="Destination"
                        options={DESTINATIONS}
                        value={form.destination}
                        onChange={set("destination")}
                      />
                      <TextField
                        label="Travel date"
                        type="month"
                        value={form.date}
                        error={errors.date}
                        onChange={set("date")}
                        required
                      />
                      <SelectField label="Number of travelers" options={TRAVELER_OPTIONS} value={form.travelers} onChange={set("travelers")} />
                    </div>
                    <div style={{ marginTop: "var(--space-s)" }}>
                      <TextAreaField
                        label="Message"
                        placeholder="Tell us roughly what you're dreaming of — destinations, dates, pace, food priorities…"
                        value={form.message}
                        onChange={set("message")}
                        full
                      />
                    </div>
                    {formError && <p className="form-message is-error" style={{ marginTop: 12 }}>{formError}</p>}
                    <Button type="submit" variant="primary" large disabled={status === "loading"}>
                      {status === "loading" ? "Sending…" : "Send Enquiry"}
                    </Button>
                    <p className="planner-note" style={{ color: "var(--color-ink-faint)" }}>
                      We reply within a few hours · Your details stay with us
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to skip forms altogether?"
        text="Message us on WhatsApp with your dates and rough plan — most trips start from a single chat."
        primaryLabel="Chat on WhatsApp"
        primaryVariant="whatsapp"
        primaryHref={waLink("Hi Yatraa! I'd like to plan a trip — can we chat?")}
        secondaryLabel="Email us instead"
        message="Hi Yatraa! I'd like to plan a trip — can we chat?"
      />
    </>
  );
}