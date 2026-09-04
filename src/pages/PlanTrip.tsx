import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageMeta } from "../lib/hooks";
import { site, waLink } from "../data/site";
import { PageHero } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { TextField, validateEmail, validatePhone } from "../lib/forms";
import { ArrowRightIcon, ArrowDownIcon, CheckCircleIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";

const DESTINATIONS = ["Hyderabad", "Kerala", "Kashmir", "Rajasthan", "Goa", "Ladakh", "Andaman", "Varanasi", "Meghalaya", "Not sure yet — suggest me"];
const MONTHS = ["November 2026", "December 2026", "January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "October 2027", "Flexible"];
const PEOPLE = [
  { label: "2 travelers", note: "A duo" },
  { label: "Couple", note: "Just the two of us" },
  { label: "Family", note: "Kids or parents included" },
  { label: "Solo", note: "Just me" },
  { label: "Group of 5+", note: "Friends / extended family" },
];
const TYPES = [
  { label: "Weekend", note: "Short & sweet" },
  { label: "Family", note: "Everyone happy" },
  { label: "Honeymoon", note: "Romance first" },
  { label: "Adventure", note: "Hearts racing" },
  { label: "Luxury", note: "The finer things" },
  { label: "Solo", note: "Me time" },
];
const BUDGETS = [
  { label: "Under ₹25,000", note: "Per person" },
  { label: "₹25,000 – ₹50,000", note: "Per person" },
  { label: "₹50,000 – ₹1,00,000", note: "Per person" },
  { label: "₹1,00,000+", note: "Make it special" },
];

const STEPS = [
  { label: "Destination", title: "Where are you going?" },
  { label: "Dates", title: "When are you travelling?" },
  { label: "Travellers", title: "How many people?" },
  { label: "Trip type", title: "What type of trip?" },
  { label: "Budget", title: "What's your approximate budget?" },
  { label: "Details", title: "Where do we send the plan?" },
];

interface WizardState {
  destination: string;
  month: string;
  people: string;
  type: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
}

export function PlanTrip() {
  usePageMeta(
    "Plan a Trip — Tell Yatraa Your Dream Journey",
    "Answer six quick questions and our Hyderabad travel team will craft a personalised India itinerary — free, within 48 hours.",
  );

  const [params] = useSearchParams();
  const initialDestination = params.get("destination") ?? (params.get("trip") ? "From a trip you liked" : DESTINATIONS[0]);
  const initialExperience = params.get("experience");

  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [state, setState] = useState<WizardState>({
    destination: DESTINATIONS.includes(initialDestination) ? initialDestination : DESTINATIONS[0],
    month: "December 2026",
    people: "2 travelers",
    type: "Weekend",
    budget: "₹25,000 – ₹50,000",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (initialExperience) setState((s) => ({ ...s, destination: initialExperience }));
  }, [initialExperience]);

  const isLast = step === STEPS.length - 1;

  function pickOption(k: keyof WizardState, value: string) {
    setState((s) => ({ ...s, [k]: value }));
    window.setTimeout(() => setStep((st) => Math.min(st + 1, STEPS.length - 1)), 120);
  }

  function next() {
    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }
    // validate contact details
    const er: typeof errors = {};
    if (state.name.trim().length < 2) er.name = "Please enter your name";
    if (!validatePhone(state.phone)) er.phone = "Enter a valid phone number";
    if (!validateEmail(state.email)) er.email = "Enter a valid email";
    setErrors(er);
    if (Object.keys(er).length) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1100);
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  const waMsg = `Hi Yatraa! I just used your trip planner.\n\nDestination: ${state.destination}\nMonth: ${state.month}\nPeople: ${state.people}\nTrip type: ${state.type}\nBudget: ${state.budget}\nName: ${state.name}\nPhone: ${state.phone}`;

  return (
    <>
      <PageHero
        eyebrow="Plan a trip"
        title="Your journey starts with six small questions."
        tagline="No forms longer than this, no pressure, no obligation — just enough for our team to build you something beautiful."
        image="golconda"
        chips={["~2 minutes", "Free & no obligation", "Reply within 48 hours"]}
      />

      <section className="section">
        <div className="container-large" style={{ maxWidth: 860 }}>
          {done ? (
            <Reveal className="form-card" style={{ textAlign: "center" }}>
              <div className="success-panel">
                <span className="success-icon">
                  <CheckCircleIcon size={36} />
                </span>
                <h3 className="success-title">Thank you. Your journey has officially started.</h3>
                <p className="success-text">
                  We'll contact you shortly — usually within a few working hours, on {state.phone.slice(0, 6)}…
                  Want to skip the wait?
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-s)", justifyContent: "center", marginTop: 8 }}>
                  <Button href={waLink(waMsg)} variant="whatsapp" external>
                    <WhatsAppIcon size={18} /> Send on WhatsApp
                  </Button>
                  <Button href={site.emailHref} variant="green">
                    <MailIcon size={16} /> Email us
                  </Button>
                  <Button href={site.phoneHref} variant="outline-ink">
                    <PhoneIcon size={16} /> Call us
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="form-card">
                {/* Progress */}
                <div className="wizard-progress" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={STEPS.length} aria-label={`Step ${step + 1} of ${STEPS.length}`}>
                  {STEPS.map((s, i) => (
                    <span key={s.label} className={`wizard-step-dot ${i <= step ? (i === step ? "is-current" : "is-done") : ""}`} />
                  ))}
                </div>

                <div className="wizard-panel" key={step}>
                  <p className="text-style-allcaps text-size-tiny text-color-accent" style={{ fontWeight: 700 }}>
                    Step {step + 1} of {STEPS.length} · {STEPS[step].label}
                  </p>
                  <h2 className="wizard-question">{STEPS[step].title}</h2>

                  {step === 0 && (
                    <div className="wizard-options">
                      {DESTINATIONS.map((d) => (
                        <button
                          key={d}
                          type="button"
                          className={`wizard-option ${state.destination === d ? "is-selected" : ""}`}
                          onClick={() => pickOption("destination", d)}
                          aria-pressed={state.destination === d}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="wizard-options">
                      {MONTHS.map((m) => (
                        <button
                          key={m}
                          type="button"
                          className={`wizard-option ${state.month === m ? "is-selected" : ""}`}
                          onClick={() => pickOption("month", m)}
                          aria-pressed={state.month === m}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="wizard-options">
                      {PEOPLE.map((p) => (
                        <button
                          key={p.label}
                          type="button"
                          className={`wizard-option ${state.people === p.label ? "is-selected" : ""}`}
                          onClick={() => pickOption("people", p.label)}
                          aria-pressed={state.people === p.label}
                        >
                          {p.label}
                          <small>{p.note}</small>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="wizard-options">
                      {TYPES.map((t) => (
                        <button
                          key={t.label}
                          type="button"
                          className={`wizard-option ${state.type === t.label ? "is-selected" : ""}`}
                          onClick={() => pickOption("type", t.label)}
                          aria-pressed={state.type === t.label}
                        >
                          {t.label}
                          <small>{t.note}</small>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="wizard-options" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                      {BUDGETS.map((b) => (
                        <button
                          key={b.label}
                          type="button"
                          className={`wizard-option ${state.budget === b.label ? "is-selected" : ""}`}
                          onClick={() => pickOption("budget", b.label)}
                          aria-pressed={state.budget === b.label}
                        >
                          {b.label}
                          <small>{b.note}</small>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 5 && (
                    <div className="form-theme-light">
                      <p className="text-size-regular text-color-soft" style={{ marginBottom: "var(--space-l)", maxWidth: 520 }}>
                        Where should our travel team send your personalised journey? We'll also ping you on WhatsApp
                        the moment it's ready.
                      </p>
                      <div className="form-grid-2" style={{ marginBottom: "var(--space-s)" }}>
                        <TextField
                          label="Name"
                          placeholder="Your full name"
                          value={state.name}
                          error={errors.name}
                          onChange={(e) => {
                            setState((s) => ({ ...s, name: e.target.value }));
                            setErrors((er) => ({ ...er, name: undefined }));
                          }}
                          autoComplete="name"
                        />
                        <TextField
                          label="Phone (WhatsApp preferred)"
                          type="tel"
                          placeholder="+91 …"
                          value={state.phone}
                          error={errors.phone}
                          onChange={(e) => {
                            setState((s) => ({ ...s, phone: e.target.value }));
                            setErrors((er) => ({ ...er, phone: undefined }));
                          }}
                          autoComplete="tel"
                        />
                        <TextField
                          label="Email"
                          type="email"
                          placeholder="you@example.com"
                          value={state.email}
                          error={errors.email}
                          onChange={(e) => {
                            setState((s) => ({ ...s, email: e.target.value }));
                            setErrors((er) => ({ ...er, email: undefined }));
                          }}
                          autoComplete="email"
                          full
                        />
                      </div>
                      <div className="info-card" style={{ background: "var(--color-bg)", display: "flex", gap: "var(--space-l)", flexWrap: "wrap" }}>
                        {[
                          ["Destination", state.destination],
                          ["Month", state.month],
                          ["People", state.people],
                          ["Type", state.type],
                          ["Budget", state.budget],
                        ].map(([k, v]) => (
                          <span key={k} className="text-size-small">
                            <strong className="text-style-allcaps" style={{ color: "var(--color-ink-faint)" }}>
                              {k}:
                            </strong>{" "}
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {step > 0 && step <= 4 && (
                  <div className="wizard-nav">
                    <Button variant="outline-ink" onClick={back}>
                      <ArrowDownIcon size={14} style={{ transform: "rotate(180deg)" }} /> Back
                    </Button>
                    <p className="text-size-small text-color-faint" style={{ alignSelf: "center" }}>
                      {STEPS.length - step - 1} {STEPS.length - step - 1 === 1 ? "step" : "steps"} to go
                    </p>
                  </div>
                )}

                {step === 5 && (
                  <div className="wizard-nav">
                    <Button variant="outline-ink" onClick={back}>
                      <ArrowDownIcon size={14} style={{ transform: "rotate(180deg)" }} /> Back
                    </Button>
                    <Button type="button" variant="primary" large onClick={next} disabled={submitting}>
                      {submitting ? "Creating your trip…" : "Create My Trip"} {!submitting && <ArrowRightIcon size={18} />}
                    </Button>
                  </div>
                )}
              </div>

              <p className="text-size-small text-color-faint" style={{ textAlign: "center", marginTop: "var(--space-s)" }}>
                No spam, no obligation. Just a journey plan built by humans in Hyderabad.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Inspiration strip */}
      <section style={{ background: "var(--color-white)", paddingBottom: "var(--section-pad)" }}>
        <div className="container-large">
          <Reveal>
            <div className="section-heading-flex">
              <div className="section-heading-block">
                <div className="section-subtitle-block">
                  <span className="subtitle-border-line" />
                  <p className="section-subtitle">Need inspiration first?</p>
                </div>
                <h2 className="heading-style-h2 margin-top-16px">Browse before you build</h2>
              </div>
            </div>
          </Reveal>
          <div className="gallery-grid" style={{ marginTop: "var(--space-l)" }}>
            {(["ladakhRoad", "munnar", "pangong"] as const).map((img) => (
              <Reveal key={img}>
                <div className="split-media" style={{ aspectRatio: "16/9", borderRadius: "var(--radius-l)" }}>
                  <OptimizedImage imageKey={img} width={900} sizes="(max-width: 767px) 100vw, 33vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}