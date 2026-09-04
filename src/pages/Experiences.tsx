import { useState } from "react";
import { experienceCategories, experiences } from "../data/experiences";
import { usePageMeta } from "../lib/hooks";
import { PageHero } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { ExperienceCard } from "../components/Cards";

export function Experiences() {
  usePageMeta(
    "Travel Experiences in India | Yatraa",
    "Walk, taste and adventure through India with Yatraa's signature experiences — food walks in Hyderabad, houseboat nights in Kerala and more.",
  );

  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? experiences : experiences.filter((e) => e.category === category);

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Travel beyond the checklist."
        tagline="Small-group, story-first experiences designed with the people who call these places home."
        image="kathakali"
        chips={experienceCategories.slice(0, 4).map((c) => c)}
      />

      <section className="section">
        <div className="container-large">
          <Reveal>
            <div className="section-heading-flex">
              <div className="section-heading-block">
                <div className="section-subtitle-block">
                  <span className="subtitle-border-line" />
                  <p className="section-subtitle">Choose a flavour</p>
                </div>
                <h2 className="heading-style-h2 margin-top-16px">Experiences with a point of view</h2>
              </div>
              <p className="text-size-regular text-color-soft" style={{ maxWidth: 320 }}>
                Every experience is led by a local specialist, capped at small group sizes and built on a story worth
                telling at dinner.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="region-chips" role="group" aria-label="Filter experiences by category">
            {["All", ...experienceCategories].map((c) => (
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

          <div className="experience-grid">
            {filtered.map((e, i) => (
              <ExperienceCard key={e.slug} experience={e} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}