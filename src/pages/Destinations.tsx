import { useState } from "react";
import { destinationCards, regions } from "../data/destinations";
import { alt, photo } from "../data/images";
import { usePageMeta } from "../lib/hooks";
import { PageHero } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { DestinationIndexCard } from "../components/Cards";

export function Destinations() {
  usePageMeta(
    "Discover India — Destinations | Yatraa",
    "Explore India's extraordinary destinations — from Hyderabad's heritage lanes to the mountains of Kashmir, Kerala's backwaters and Ladakh's high passes.",
  );

  const [region, setRegion] = useState("All India");
  const filtered = region === "All India" ? destinationCards : destinationCards.filter((d) => d.region === region);

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Discover India"
        tagline="Places that deserve more than a weekend."
        image="hawaMahal"
        chips={["120+ destinations", "Expert local guides", "Handcrafted journeys"]}
      />

      <section className="section">
        <div className="container-large">
          <Reveal>
            <div className="section-heading-flex">
              <div className="section-heading-block">
                <div className="section-subtitle-block">
                  <span className="subtitle-border-line" />
                  <p className="section-subtitle">Browse by region</p>
                </div>
                <h2 className="heading-style-h2 margin-top-16px">Every region, its own rhythm</h2>
              </div>
              <p className="text-size-regular text-color-soft" style={{ maxWidth: 340 }}>
                Filter by region or simply follow your appetite — both are reliable ways to plan an Indian journey.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="region-chips" role="group" aria-label="Filter destinations by region">
            {["All India", ...regions].map((r) => (
              <button
                key={r}
                type="button"
                className={`category-chip ${region === r ? "is-active" : ""}`}
                aria-pressed={region === r}
                onClick={() => setRegion(r)}
              >
                {r}
              </button>
            ))}
          </Reveal>

          <div className="destinations-page-grid">
            {filtered.map((d, i) => (
              <DestinationIndexCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}