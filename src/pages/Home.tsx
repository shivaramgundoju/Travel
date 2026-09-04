import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";
import { experiences } from "../data/experiences";
import { trips } from "../data/trips";
import { stories } from "../data/stories";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";
import { usePageMeta } from "../lib/hooks";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ArrowRightIcon, ArrowDownIcon } from "../components/icons";
import { TripCard, ExperienceCard, JournalCard } from "../components/Cards";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { TripPlanner } from "../components/TripPlanner";
import { DestinationPanels, DestinationMarquee } from "../components/sections";


const CATEGORIES = ["Heritage", "Food", "Nature", "Adventure", "Culture", "Weekend Escapes"];

function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  const navigate = useNavigate();

  function onQuickPlan(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const dest = String(data.get("destination") ?? "Hyderabad");
    navigate(`/plan-a-trip?destination=${encodeURIComponent(dest)}`);
  }

  return (
    <section ref={sectionRef} className={`section-hero ${mounted ? "hero-anim" : ""}`}>
      <div className="hero-wrapper">
        {/* Giant watermark text */}
        <div className="hero-text-wrapper" aria-hidden="true">
          <div className="hero-large-text">INDIA</div>
        </div>

        {/* Content: image window + heading */}
        <div className="hero-main-content-wrapper">
          <div className="hero-image-block">
            <OptimizedImage imageKey="hero" width={1800} priority className="hero-image" sizes="100vw" altText={alt("hero")} style={{ position: "absolute", inset: 0 }} />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-content-wrapper">
            <p className="hero-subtitle">Explore India, Beautifully</p>
            <div className="hero-heading-wrapper">
              <h1 className="hero-title">
                <span className="hero-title-line">India is waiting.</span>
                <span className="hero-title-line is-accent">Where will you go?</span>
              </h1>
            </div>
            <div className="hero-summary-block margin-top-24px">
              <p className="text-size-medium text-color-white">
                Discover extraordinary places, unforgettable experiences and thoughtfully curated journeys across
                India — starting in Hyderabad.
              </p>
            </div>
          </div>
        </div>

        {/* Quick-plan bar */}
        <div className="hero-search-form-block">
          <div className="search-form-block">
            <form onSubmit={onQuickPlan} aria-label="Quick trip planner">
              <div className="filter-field-block">
                <span className="filter-field-subtitle">Destination</span>
                <select name="destination" id="hero-destination" aria-label="Choose destination" defaultValue="Hyderabad">
                  {["Hyderabad", "Kerala", "Kashmir", "Rajasthan", "Goa", "Ladakh", "Andaman", "Not sure yet"].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="filter-devider" aria-hidden="true" />
              <div className="filter-field-block">
                <span className="filter-field-subtitle">Travel Month</span>
                <select name="month" id="hero-month" aria-label="Choose travel month" defaultValue="November">
                  {["November", "December", "January", "February", "March", "April", "May", "October"].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="filter-devider" aria-hidden="true" />
              <div className="filter-field-block">
                <span className="filter-field-subtitle">Travelers</span>
                <select name="travelers" id="hero-travelers" aria-label="Number of travelers" defaultValue="2 travelers">
                  {["2 travelers", "Couple", "Family", "Solo", "Group 5+"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="filter-submit-button" aria-label="Start planning">
                <ArrowRightIcon size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#story" className="hero-cta-button" aria-label="Scroll to explore">
          <span className="hero-cta-icon-block">
            <ArrowDownIcon size={18} />
          </span>
          <span className="hero-cta-text">Explore more · Scroll</span>
        </a>
      </div>
    </section>
  );
}

export function Home() {
  usePageMeta(
    "Yatraa — Explore India, Beautifully",
    "Yatraa is a premium Indian travel discovery platform. Extraordinary places, experiences and curated journeys across Hyderabad and India.",
  );

  const homeTrips = trips.slice(0, 3);
  const homeExperiences = experiences.filter((e) => ["old-hyderabad-food-walk", "golconda-heritage", "kerala-backwater-escape", "ladakh-road-adventure"].includes(e.slug));
  const featuredStory = stories[0];
  const restStories = stories.slice(1, 4);

  return (
    <>
      <HomeHero />

      {/* Trust / partner band */}
      <section className="partner-section">
        <div className="container-large">
          <div className="partner-wrapper">
            <div>
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Since 2022</p>
              </Reveal>
              <Reveal delay={80} className="section-title-block margin-top-16px">
                <h2 className="heading-style-h2">
                  Preferred by travellers <span className="highlight-italic">across India</span>
                </h2>
              </Reveal>
              <Reveal delay={160} className="section-summary-block margin-top-16px padding-left-20px">
                <p className="text-size-regular">
                  Yatraa collaborates with heritage stays, boutique hotels and local specialists across 120+
                  destinations — so every journey is exclusive, personal and beautifully handled.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="partner-right-column">
              {["TAJ", "The Leela", "ITC Hotels", "IndiGo", "OYO Palaces", "Vistara"].map((name) => (
                <div className="partner-logo-block" key={name}>
                  <span className="partner-logo">{name}</span>
                  <span className="partner-logo-arrow" aria-hidden="true">
                    <ArrowRightIcon size={16} />
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial intro */}
      <section id="story" className="section section-lg" style={{ background: "var(--color-bg)" }}>
        <div className="container-large">
          <SectionHeading
            eyebrow="Why Yatraa"
            align="center"
            maxWidth={760}
            title={
              <h2 className="heading-style-h2" style={{ fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: 1.15 }}>
                Travel should feel like <span className="highlight-italic">a story.</span>
              </h2>
            }
            summary="From the streets of Hyderabad to the mountains of Kashmir, Yatraa helps you discover India through places, people, food and experiences worth remembering."
          />
        </div>
      </section>

      {/* Featured destinations — accordion */}
      <section className="section_destinations padding-section-large-3">
        <div className="container-large">
          <SectionHeading
            eyebrow="Exclusive Series"
            align="center"
            title="Places worth getting lost in"
            summary="Six regions that deserve more than a weekend — each with its own character, cuisine and rhythm."
          />
          <DestinationPanels destinations={destinations.slice(0, 6)} />
        </div>
      </section>

      <DestinationMarquee />

      {/* Experiences */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <SectionHeading
            eyebrow="Experiences"
            title="Travel deeper."
            summary="Not another itinerary — a reason to slow down, taste more and meet the people who make a place."
          />
          <Reveal delay={120} className="category-chips">
            {CATEGORIES.map((c) => (
              <Link key={c} to="/experiences" className="category-chip">
                {c}
              </Link>
            ))}
          </Reveal>
          <div className="experience-grid">
            {homeExperiences.map((e, i) => (
              <ExperienceCard key={e.slug} experience={e} index={i} />
            ))}
          </div>
          <Reveal delay={120} className="margin-top-50px">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button to="/experiences" variant="outline-ink" stagger>
                View All Experiences <ArrowRightIcon size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Popular journeys */}
      <section className="section-tour-package">
        <div className="container-large">
          <SectionHeading
            eyebrow="Popular Journeys"
            title="Journeys worth taking"
            action={
              <Button to="/trips" variant="outline-ink" stagger>
                View All Trips <ArrowRightIcon size={15} />
              </Button>
            }
          />
          <div className="packages_grid">
            {homeTrips.map((t, i) => (
              <TripCard key={t.slug} trip={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-testimonial">
        <div className="container-large">
          <SectionHeading
            eyebrow="Traveler's Words"
            title={<h2 className="heading-style-h2 text-color-white">Loved by curious travellers</h2>}
            align="center"
            dark
          />
          <div style={{ marginTop: "var(--space-3xl)" }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Stories — journal */}
      <section className="section-journal">
        <div className="container-large">
          <SectionHeading
            eyebrow="The Journal"
            title="Travel stories"
            action={
              <Button to="/stories" variant="outline-ink" stagger>
                All Stories <ArrowRightIcon size={15} />
              </Button>
            }
          />
          <JournalCard story={featuredStory} featured />
          <div className="journal-grid">
            {restStories.map((s, i) => (
              <JournalCard key={s.slug} story={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trip planner */}
      <section className="section-planner">
        <div className="container-large">
          <div className="planner-wrapper">
            <div>
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line white" />
                <p className="section-subtitle white">Free Trip Planner</p>
              </Reveal>
              <Reveal delay={80} className="section-title-block margin-top-16px">
                <h2 className="heading-style-h2 text-color-white" style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
                  Where do you <span className="highlight-italic">want to go?</span>
                </h2>
              </Reveal>
              <Reveal delay={160} className="section-summary-block margin-top-16px">
                <p className="text-size-regular" style={{ color: "rgba(255,255,255,.7)" }}>
                  Tell us the basics and our Hyderabad-based travel team will craft a journey around you — flights,
                  stays, experiences and the little details we're known for.
                </p>
              </Reveal>
              <Reveal delay={220} className="margin-top-30px">
                <div className="about-stats" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 0, gap: "var(--space-s)" }}>
                  {[
                    ["120+", "Destinations"],
                    ["15k+", "Happy travellers"],
                    ["4.9★", "Average rating"],
                  ].map(([num, label]) => (
                    <div className="about-stat" key={label} style={{ padding: "var(--space-l) var(--space-s)" }}>
                      <p className="about-stat-number">{num}</p>
                      <p className="about-stat-label">{label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <TripPlanner />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}