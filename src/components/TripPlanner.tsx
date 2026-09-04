import { useState, type FormEvent } from "react";
import { site, waLink } from "../data/site";
import { ArrowRightIcon, CheckCircleIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { Button } from "./Button";

const DESTINATIONS = ["Hyderabad", "Kerala", "Kashmir", "Rajasthan", "Goa", "Ladakh", "Andaman", "Not sure yet"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const TRAVELERS = ["2 travelers", "3 travelers", "4 travelers", "Family of 5+", "Solo", "Couple"];
const TYPES = ["Weekend", "Family", "Honeymoon", "Adventure", "Luxury", "Solo"];
const BUDGETS = ["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+"];

interface PlannerState {
  destination: string;
  month: string;
  travelers: string;
  type: string;
  budget: string;
}

export function TripPlanner() {
  const [state, setState] = useState<PlannerState>({
    destination: "Hyderabad",
    month: "November",
    travelers: "2 travelers",
    type: "Weekend",
    budget: "₹25,000 – ₹50,000",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof PlannerState) => (e: { target: { value: string } }) =>
    setState((s) => ({ ...s, [k]: e.target.value }));

  const summary = `${state.destination} · ${state.month} · ${state.travelers} · ${state.type} · ${state.budget}`;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  const waMsg = `Hi Yatraa, I'd like help planning a trip.\n\nWhere: ${state.destination}\nMonth: ${state.month}\nTravelers: ${state.travelers}\nTrip type: ${state.type}\nBudget: ${state.budget}`;

  return (
    <div className="planner-form">
      {submitted ? (
        <div className="planner-success">
          <CheckCircleIcon size={44} style={{ color: "#4ade80" }} />
          <h3 className="planner-success-title" style={{ marginTop: 16 }}>
            Your journey starts here.
          </h3>
          <p className="planner-success-text">
            Tell us a little more and our travel team will get back to you within a few hours.
          </p>
          <div className="planner-success-actions">
            <Button href={waLink(waMsg)} variant="whatsapp" external>
              <WhatsAppIcon size={18} /> Enquire on WhatsApp
            </Button>
            <Button href={site.emailHref} variant="outline">
              <MailIcon size={16} /> Email us
            </Button>
            <Button href={site.phoneHref} variant="outline">
              <PhoneIcon size={16} /> Call us
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div className="planner-fields">
            <div className="form-field-block">
              <label className="form-label" htmlFor="planner-destination">
                Destination
              </label>
              <select id="planner-destination" className="form-select" value={state.destination} onChange={set("destination")}>
                {DESTINATIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="form-field-block">
              <label className="form-label" htmlFor="planner-month">
                Travel Month
              </label>
              <select id="planner-month" className="form-select" value={state.month} onChange={set("month")}>
                {MONTHS.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="form-field-block">
              <label className="form-label" htmlFor="planner-travelers">
                Number of Travelers
              </label>
              <select id="planner-travelers" className="form-select" value={state.travelers} onChange={set("travelers")}>
                {TRAVELERS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-field-block">
              <label className="form-label" htmlFor="planner-type">
                Trip Type
              </label>
              <select id="planner-type" className="form-select" value={state.type} onChange={set("type")}>
                {TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-field-block is-full">
              <label className="form-label" htmlFor="planner-budget">
                Budget
              </label>
              <select id="planner-budget" className="form-select" value={state.budget} onChange={set("budget")}>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
          <Button type="submit" variant="primary" large disabled={loading} className="planner-submit">
            {loading ? "Planning your journey…" : "Create My Trip"}
            {!loading && <ArrowRightIcon size={18} />}
          </Button>
          {error && <p className="form-message is-error">{error}</p>}
          <p className="planner-note">Free consultation · No advance needed · Reply within 4 hours</p>
        </form>
      )}
    </div>
  );
}