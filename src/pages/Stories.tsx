import { useState } from "react";
import { stories, storyCategories } from "../data/stories";
import { usePageMeta } from "../lib/hooks";
import { PageHero } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { JournalCard } from "../components/Cards";

export function Stories() {
  usePageMeta(
    "Travel Stories & Guides | Yatraa Journal",
    "Editorial travel stories from across India — old Hyderabad's food lanes, first-timer guides to Kashmir, Kerala beyond the backwaters and more.",
  );

  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? stories : stories.filter((s) => s.category === category);

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Travel stories"
        tagline="Field notes, guides and love letters to Indian places — written by the people who plan them."
        image="varanasi"
        chips={["Written by our team", "Updated monthly", "No AI filler — promise"]}
      />

      <section className="section">
        <div className="container-large">
          <Reveal delay={80} className="region-chips" role="group" aria-label="Filter stories by category">
            {["All", ...storyCategories].map((c) => (
              <button
                key={c}
                type="button"
                className={`category-chip ${category === c ? "is-active" : ""}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="stories-grid">
            {filtered.map((s, i) => (
              <JournalCard key={s.slug} story={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}