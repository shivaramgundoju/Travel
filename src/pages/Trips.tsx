import { useMemo, useState } from "react";
import { travelStyles, trips } from "../data/trips";
import { usePageMeta } from "../lib/hooks";
import { PageHero } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { TripCard } from "../components/Cards";

const DURATIONS = ["Any duration", "Up to 5 nights", "5–6 nights", "7+ nights"];
const BUDGETS = ["Any budget", "Under ₹35,000", "₹35,000 – ₹50,000", "₹50,000+"];
const DEST_OPTIONS = ["Any destination", "Kerala", "Kashmir", "Rajasthan", "Goa", "Ladakh", "Andaman"];

export function Trips() {
  usePageMeta(
    "Curated India Trips & Packages | Yatraa",
    "Handcrafted journeys from Hyderabad to Kerala, Kashmir, Rajasthan, Goa, Ladakh and the Andamans — fixed departures or fully private.",
  );

  const [style, setStyle] = useState("All styles");
  const [duration, setDuration] = useState(DURATIONS[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [dest, setDest] = useState(DEST_OPTIONS[0]);

  const filtered = useMemo(() => {
    return trips.filter((t) => {
      if (style !== "All styles" && !t.style.includes(style)) return false;
      if (dest !== "Any destination" && !t.route.includes(dest)) return false;
      if (duration !== "Any duration") {
        const nights = parseInt(t.nights.split("N")[0], 10);
        if (duration === "Up to 5 nights" && nights > 5) return false;
        if (duration === "5–6 nights" && (nights < 5 || nights > 6)) return false;
        if (duration === "7+ nights" && nights < 7) return false;
      }
      if (budget !== "Any budget") {
        const price = parseInt(t.price.replace(/[^\d]/g, ""), 10);
        if (budget === "Under ₹35,000" && price >= 35000) return false;
        if (budget === "₹35,000 – ₹50,000" && (price < 35000 || price > 50000)) return false;
        if (budget === "₹50,000+" && price <= 50000) return false;
      }
      return true;
    });
  }, [style, duration, budget, dest]);

  return (
    <>
      <PageHero
        eyebrow="Journeys"
        title="Journeys made for you."
        tagline="Private, handcrafted itineraries from Hyderabad — with local teams, honest pricing and travel that fits how you actually like to move."
        image="kashmirValley"
        chips={["Private & small group", "Free customisation", "No hidden costs"]}
      />

      <section className="section">
        <div className="container-large">
          <Reveal>
            <div className="section-heading-flex">
              <div className="section-heading-block">
                <div className="section-subtitle-block">
                  <span className="subtitle-border-line" />
                  <p className="section-subtitle">Find your journey</p>
                </div>
                <h2 className="heading-style-h2 margin-top-16px">Trips worth taking</h2>
              </div>
              <p className="text-size-regular text-color-soft" style={{ maxWidth: 300 }}>
                Filter by what matters — then tell us what's missing. Every trip here can be reshaped around you.
              </p>
            </div>
          </Reveal>

          {/* Filters */}
          <div className="trip-filter-bar">
            <Reveal delay={60} className="form-theme-light">
              <label className="trip-filter-label" htmlFor="tf-style">
                Travel style
              </label>
              <select id="tf-style" className="form-select" value={style} onChange={(e) => setStyle(e.target.value)}>
                {["All styles", ...travelStyles].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Reveal>
            <Reveal delay={110} className="form-theme-light">
              <label className="trip-filter-label" htmlFor="tf-duration">
                Duration
              </label>
              <select id="tf-duration" className="form-select" value={duration} onChange={(e) => setDuration(e.target.value)}>
                {DURATIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </Reveal>
            <Reveal delay={160} className="form-theme-light">
              <label className="trip-filter-label" htmlFor="tf-budget">
                Budget
              </label>
              <select id="tf-budget" className="form-select" value={budget} onChange={(e) => setBudget(e.target.value)}>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Reveal>
            <Reveal delay={210} className="form-theme-light">
              <label className="trip-filter-label" htmlFor="tf-dest">
                Destination
              </label>
              <select id="tf-dest" className="form-select" value={dest} onChange={(e) => setDest(e.target.value)}>
                {DEST_OPTIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </Reveal>
          </div>

          <div className="packages_grid">
            {filtered.map((t, i) => (
              <TripCard key={t.slug} trip={t} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <Reveal className="margin-top-50px" style={{ textAlign: "center" }}>
              <p className="text-size-medium text-color-soft">No trips match those filters yet — tell us what you have in mind and we'll build it.</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}