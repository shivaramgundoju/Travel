import { Link, useParams } from "react-router-dom";
import { trips, getTrip } from "../data/trips";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";
import { usePageMeta } from "../lib/hooks";
import { PageHero, CtaBand } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { CheckIcon, CrossIcon, WhatsAppIcon } from "../components/icons";
import { Stars } from "../components/Cards";
import { Faq } from "../components/Faq";
import { waLink } from "../data/site";
import { NotFound } from "./NotFound";

export function TripDetail() {
  const { slug } = useParams();
  const trip = slug ? getTrip(slug) : undefined;

  usePageMeta(
    trip ? `${trip.title} — ${trip.duration} | Yatraa` : "Journey | Yatraa",
    trip
      ? `${trip.shortDescription} ${trip.duration}, from ${trip.price} per person. View the full day-by-day itinerary and enquire on WhatsApp.`
      : "Yatraa journey",
  );

  if (!trip) return <NotFound />;

  const waMsg = `Hi Yatraa, I'm interested in the ${trip.title} trip (${trip.duration}, from ${trip.price}). Could you share more details?`;

  const related = trips.filter((t) => t.slug !== trip.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${trip.route} · Private Journey`}
        title={<span className="dd-hero-name">{trip.title}</span>}
        tagline={`${trip.duration} · Starting at ${trip.price} ${trip.priceNote}`}
        image={trip.image}
        breadcrumb={[{ label: "Trips", to: "/trips" }, { label: trip.title, to: "#" }]}
        chips={[...trip.style, trip.nights, trip.price]}
      >
        <Reveal delay={280} className="page-hero-meta">
          <Button href={waLink(waMsg)} variant="whatsapp" external stagger>
            <WhatsAppIcon size={18} /> Enquire Now on WhatsApp
          </Button>
          <Button to={`/plan-a-trip?trip=${encodeURIComponent(trip.title)}`} variant="outline">
            Plan This Trip
          </Button>
        </Reveal>
      </PageHero>

      {/* Snapshot */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container-large">
          <Reveal className="experience-meta-bar" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              ["Route", trip.route],
              ["Duration", trip.duration],
              ["From", trip.price],
              ["Travel style", trip.style.join(" · ")],
            ].map(([label, value]) => (
              <div key={label} className="experience-meta-cell">
                <p className="experience-meta-label">{label}</p>
                <p className="experience-meta-value" style={{ fontSize: 16, lineHeight: 1.4 }}>
                  {value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Overview + essentials */}
      <section className="section">
        <div className="container-large">
          <div className="dd-overview">
            <div className="dd-overview-copy">
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Trip overview</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 margin-top-16px">{trip.title}</h2>
              </Reveal>
              {trip.overview.map((p, i) => (
                <Reveal key={i} delay={120 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={260} className="margin-top-24px">
                <Button href={waLink(waMsg)} variant="primary" external>
                  <WhatsAppIcon size={18} /> Get a Quote on WhatsApp
                </Button>
              </Reveal>
            </div>
            <div>
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">The essentials</p>
              </Reveal>
              <div style={{ marginTop: "var(--space-s)", display: "flex", flexDirection: "column", gap: "var(--space-s)" }}>
                {[
                  ["Accommodation", trip.accommodation],
                  ["Transportation", trip.transport],
                  ["Meals", trip.meals],
                ].map(([label, value], i) => (
                  <Reveal key={label} delay={80 + i * 80} className="info-card">
                    <p className="experience-meta-label">{label}</p>
                    <p className="text-size-regular text-color-soft" style={{ marginTop: 6, lineHeight: 1.6 }}>
                      {value}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day itinerary */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <SectionHeading eyebrow="Day by day" title="The itinerary, hour by honest hour" />
          <div className="itinerary-list" style={{ marginTop: "var(--space-3xl)" }}>
            {trip.itinerary.map((day, i) => (
              <Reveal as="div" key={day.title} delay={i * 60} className="itinerary-item">
                <div className="itinerary-day" aria-hidden="true">
                  {day.day.replace("Day ", "D")}
                </div>
                <div className="itinerary-content">
                  <h3>{day.title}</h3>
                  <p>{day.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Included / excluded */}
      <section className="section">
        <div className="container-large">
          <div className="detail-grid-2">
            <Reveal>
              <div className="info-card" style={{ height: "100%" }}>
                <h3 className="info-card-title">What's included</h3>
                <ul className="include-list">
                  {trip.included.map((item) => (
                    <li key={item}>
                      <span className="tick">
                        <CheckIcon size={11} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="info-card" style={{ height: "100%" }}>
                <h3 className="info-card-title">What's excluded</h3>
                <ul className="include-list is-excluded">
                  {trip.excluded.map((item) => (
                    <li key={item}>
                      <span className="tick">
                        <CrossIcon size={11} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <SectionHeading eyebrow="Gallery" title="Scenes from the journey" />
          <Reveal delay={100} className="gallery-grid margin-top-30px">
            {trip.gallery.map((g) => (
              <OptimizedImage key={g} imageKey={g} width={800} sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, 33vw" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-large">
          <SectionHeading eyebrow="Reviews" title="Journeys, rated by travellers" />
          <div className="detail-grid-3" style={{ marginTop: "var(--space-3xl)" }}>
            {trip.reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 90} className="review-card">
                <Stars rating={r.rating} />
                <p className="review-text">“{r.text}”</p>
                <div className="review-author">
                  <span className="review-avatar" aria-hidden="true">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <p className="review-author-name">{r.name}</p>
                    <p className="review-author-meta">
                      {r.location} · {r.date}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large" style={{ maxWidth: 800 }}>
          <SectionHeading eyebrow="Good to know" title="Questions travellers ask" align="center" />
          <div style={{ marginTop: "var(--space-2xl)" }}>
            <Faq items={trip.faqs} />
          </div>
        </div>
      </section>

      {/* Similar journeys */}
      <section className="section">
        <div className="container-large">
          <SectionHeading eyebrow="Keep exploring" title="Similar journeys" />
          <div className="packages_grid">
            {related.map((t, i) => (
              <Reveal key={t.slug} delay={i * 90} className="packages-card">
                <Link to={`/trips/${t.slug}`} className="packages-card_image-wrap" tabIndex={-1} aria-hidden="true">
                  <OptimizedImage imageKey={t.image} width={900} className="packages-card_image" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                </Link>
                <div className="packages-card_body">
                  <div className="packages-card_meta">
                    <span className="packages-card_location">{t.route.split("→")[0].trim()}</span>
                    <span className="packages-card_duration">{t.duration}</span>
                  </div>
                  <Link to={`/trips/${t.slug}`} className="packages-card_title">
                    {t.title}
                  </Link>
                  <div className="packages-card_footer">
                    <div className="packages-card_price-wrap">
                      <span className="packages-card_price">{t.price}</span>
                    </div>
                    <Link to={`/trips/${t.slug}`} className="primary-button">
                      <span className="button-text-wrapper">
                        <span className="button-copy">View Journey</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`This journey starts the moment you message us.`}
        text="WhatsApp our travel team for dates, availability and a personalised quote — usually within a few hours."
        primaryLabel="Plan This Trip"
        primaryTo={`/plan-a-trip?trip=${encodeURIComponent(trip.title)}`}
        message={waMsg}
      />
    </>
  );
}