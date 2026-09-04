import { Link, useParams } from "react-router-dom";
import { destinations, getDestination } from "../data/destinations";
import { getExperience } from "../data/experiences";
import { getTrip } from "../data/trips";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";
import { usePageMeta } from "../lib/hooks";
import { PageHero, CtaBand } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ArrowRightIcon, WhatsAppIcon } from "../components/icons";
import { ExperienceCard, TripCard, PlaceCard } from "../components/Cards";
import { waLink } from "../data/site";
import { NotFound } from "./NotFound";

export function DestinationDetail() {
  const { slug } = useParams();
  const destination = slug ? getDestination(slug) : undefined;

  usePageMeta(
    destination ? `${destination.name} Travel Guide & Trips | Yatraa` : "Destination | Yatraa",
    destination
      ? `${destination.description} Plan your ${destination.name} journey with Yatraa — curated trips, experiences and local expertise.`
      : "Yatraa destination",
  );

  if (!destination) return <NotFound />;

  const linkedExperiences = destination.experiences
    .map((s) => getExperience(s))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  const linkedTrips = destination.trips
    .map((s) => getTrip(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const otherDestinations = destinations.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${destination.region} · Signature Guide`}
        title={<span className="dd-hero-name">{destination.name}</span>}
        tagline={destination.tagline}
        image={destination.image}
        breadcrumb={[{ label: "Destinations", to: "/destinations" }, { label: destination.name, to: "#" }]}
        chips={[destination.region, "Guided journeys", "Best from Oct – Mar"]}
      >
        <Reveal delay={280} className="page-hero-meta">
          <Button to={`/plan-a-trip?destination=${destination.name}`} variant="primary" stagger>
            Plan My {destination.name} Trip
          </Button>
          <Button
            href={waLink(`Hi Yatraa, I'd like to plan a trip to ${destination.name}.`)}
            variant="outline"
            external
          >
            <WhatsAppIcon size={18} /> Enquire on WhatsApp
          </Button>
        </Reveal>
      </PageHero>

      {/* Overview + best time */}
      <section className="section">
        <div className="container-large">
          <div className="dd-overview">
            <div className="dd-overview-copy">
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Overview</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 margin-top-16px">{destination.name}, in depth</h2>
              </Reveal>
              {destination.overview.map((p, i) => (
                <Reveal key={i} delay={120 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <div>
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Best time to visit</p>
              </Reveal>
              <div className="best-time-list margin-top-16px">
                {destination.bestTime.map((b, i) => (
                  <Reveal key={b.months} delay={i * 80} className={`best-time-item ${i === 0 ? "is-highlight" : ""}`}>
                    <p className="best-time-months">{b.months}</p>
                    <p className="best-time-note">{b.note}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top places */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <SectionHeading eyebrow="Top places" title={`Must-see in ${destination.name}`} />
          <div className="places-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {destination.places.map((place) => (
              <PlaceCard key={place.name} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* Things to do + food */}
      <section className="section">
        <div className="container-large">
          <div className="detail-grid-2">
            <Reveal>
              <div className="info-card" style={{ height: "100%" }}>
                <div className="section-subtitle-block" style={{ marginBottom: "var(--space-s)" }}>
                  <span className="subtitle-border-line" />
                  <p className="section-subtitle">Things to do</p>
                </div>
                <ul className="detail-list">
                  {destination.thingsToDo.map((item) => (
                    <li key={item} className="detail-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="detail-grid-2" style={{ gap: "var(--space-s)" }}>
                {destination.food.map((f) => (
                  <div key={f.name} className="food-card">
                    <p className="food-card-name">{f.name}</p>
                    <p className="food-card-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local experiences */}
      {linkedExperiences.length > 0 && (
        <section className="section" style={{ background: "var(--color-white)" }}>
          <div className="container-large">
            <SectionHeading eyebrow="Local experiences" title={`Experiences in ${destination.name}`} />
            <div className="experience-grid">
              {linkedExperiences.map((e, i) => (
                <ExperienceCard key={e.slug} experience={e} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Suggested trips */}
      {linkedTrips.length > 0 && (
        <section className="section">
          <div className="container-large">
            <SectionHeading eyebrow="Suggested journeys" title={`Trips that start with ${destination.name}`} />
            <div className="packages_grid">
              {linkedTrips.map((t, i) => (
                <TripCard key={t.slug} trip={t} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Travel tips */}
      <section className="section" style={{ background: "var(--color-black)", paddingBottom: 0 }}>
        <div className="container-large">
          <div className="split-section" style={{ alignItems: "start" }}>
            <div className="split-copy">
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line white" />
                <p className="section-subtitle white">Travel tips</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 text-color-white margin-top-16px">
                  Insider notes for <span className="highlight-italic">{destination.name}</span>
                </h2>
              </Reveal>
              <ul className="detail-list">
                {destination.tips.map((tip, i) => (
                  <Reveal as="li" key={tip} delay={120 + i * 60} className="detail-list-item" style={{ color: "rgba(255,255,255,.8)" }}>
                    {tip}
                  </Reveal>
                ))}
              </ul>
            </div>
            <Reveal delay={150} className="split-media split-media-4x3">
              <OptimizedImage imageKey={destination.gallery[1] ?? destination.image} width={1000} sizes="(max-width: 767px) 100vw, 50vw" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="section" style={{ background: "var(--color-black)", paddingTop: 0 }}>
        <div className="container-large">
          <div className="section-heading-flex" style={{ color: "var(--color-white)" }}>
            <div className="section-heading-block">
              <div className="section-subtitle-block">
                <span className="subtitle-border-line white" />
                <p className="section-subtitle white">Keep exploring</p>
              </div>
              <h2 className="heading-style-h2 text-color-white margin-top-16px">More of India</h2>
            </div>
          </div>
          <div className="destinations-page-grid">
            {otherDestinations.map((d, i) => (
              <Reveal key={d.slug} delay={i * 90} className="destination-index-card">
                <Link to={`/destinations/${d.slug}`} aria-label={`Explore ${d.name}`}>
                  <OptimizedImage imageKey={d.image} width={900} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                  <div className="destination-index-content">
                    <span className="destination-index-region">{d.region}</span>
                    <h3 className="destination-index-name">{d.name}</h3>
                    <p className="destination-index-desc">{d.description}</p>
                    <span className="destination-index-arrow">
                      Explore <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Your ${destination.name} journey is one conversation away.`}
        text="Tell us when, how many and how you like to travel — we'll handle the rest."
        primaryLabel="Plan My Trip"
        primaryTo={`/plan-a-trip?destination=${destination.name}`}
        message={`Hi Yatraa, I'd like to plan a trip to ${destination.name}.`}
      />
    </>
  );
}