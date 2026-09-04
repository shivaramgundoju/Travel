import { Link, useParams } from "react-router-dom";
import { experiences, getExperience } from "../data/experiences";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";
import { usePageMeta } from "../lib/hooks";
import { PageHero, CtaBand } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { CheckIcon, CrossIcon, WhatsAppIcon, ClockIcon, PinIcon } from "../components/icons";
import { Stars } from "../components/Cards";
import { Faq } from "../components/Faq";
import { waLink } from "../data/site";
import { NotFound } from "./NotFound";

export function ExperienceDetail() {
  const { slug } = useParams();
  const experience = slug ? getExperience(slug) : undefined;

  usePageMeta(
    experience ? `${experience.title} — ${experience.location} | Yatraa` : "Experience | Yatraa",
    experience
      ? `${experience.tagline} ${experience.duration}, from ${experience.price}. Book this ${experience.category} experience in ${experience.location} with Yatraa.`
      : "Yatraa experience",
  );

  if (!experience) return <NotFound />;

  const waMsg = `Hi Yatraa, I'm interested in the "${experience.title}" experience (${experience.location}, ${experience.price}).`;

  const related = experiences.filter((e) => e.slug !== experience.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${experience.category} Experience · ${experience.location}`}
        title={<span className="dd-hero-name" style={{ fontSize: "clamp(38px, 6vw, 92px)" }}>{experience.title}</span>}
        tagline={experience.tagline}
        image={experience.image}
        breadcrumb={[{ label: "Experiences", to: "/experiences" }, { label: experience.title, to: "#" }]}
        chips={[experience.location, experience.duration, experience.price]}
      >
        <Reveal delay={280} className="page-hero-meta">
          <Button href={waLink(waMsg)} variant="whatsapp" external stagger>
            <WhatsAppIcon size={18} /> Enquire on WhatsApp
          </Button>
          <Button to={`/plan-a-trip?experience=${encodeURIComponent(experience.title)}`} variant="outline">
            Plan This Experience
          </Button>
        </Reveal>
      </PageHero>

      {/* Meta bar */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container-large">
          <Reveal className="experience-meta-bar">
            {[
              ["Location", experience.location],
              ["Duration", experience.duration],
              ["Price", experience.price],
              ["Group size", "Max 8 people"],
            ].map(([label, value]) => (
              <div key={label} className="experience-meta-cell">
                <p className="experience-meta-label">{label}</p>
                <p className="experience-meta-value">{value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Description + highlights */}
      <section className="section">
        <div className="container-large">
          <div className="split-section">
            <Reveal className="split-media split-media-4x3">
              <OptimizedImage imageKey={experience.gallery[0] ?? experience.image} width={1100} sizes="(max-width: 767px) 100vw, 50vw" />
            </Reveal>
            <div className="split-copy">
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Overview</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 margin-top-16px">{experience.title}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-size-medium text-color-soft">{experience.description}</p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="detail-list">
                  {experience.highlights.map((h) => (
                    <li key={h} className="detail-list-item">
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <div className="detail-grid-2">
            <Reveal>
              <div className="info-card" style={{ height: "100%" }}>
                <h3 className="info-card-title">What's included</h3>
                <ul className="include-list">
                  {experience.included.map((item) => (
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
                <h3 className="info-card-title">What's not included</h3>
                <ul className="include-list is-excluded">
                  {experience.notIncluded.map((item) => (
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

      {/* Itinerary */}
      <section className="section">
        <div className="container-large">
          <SectionHeading eyebrow="The flow" title="How the experience unfolds" />
          <div className="itinerary-list" style={{ marginTop: "var(--space-3xl)" }}>
            {experience.itinerary.map((step, i) => (
              <Reveal as="div" key={step.title} delay={i * 70} className="itinerary-item">
                <div className="itinerary-day" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="itinerary-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <SectionHeading eyebrow="Gallery" title="Moments from the experience" />
          <Reveal delay={100} className="gallery-grid margin-top-30px">
            {experience.gallery.map((g) => (
              <OptimizedImage key={g} imageKey={g} width={800} sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, 33vw" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-large">
          <SectionHeading eyebrow="Reviews" title="What travellers say" />
          <div className="detail-grid-3" style={{ marginTop: "var(--space-3xl)" }}>
            {experience.reviews.map((r, i) => (
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
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" align="center" />
          <div style={{ marginTop: "var(--space-2xl)" }}>
            <Faq items={experience.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container-large">
          <SectionHeading eyebrow="Keep going" title="More experiences you'll love" />
          <div className="experience-grid">
            {related.map((e, i) => (
              <Reveal key={e.slug} delay={i * 90} className="experience-card">
                <Link to={`/experiences/${e.slug}`} aria-label={e.title}>
                  <OptimizedImage imageKey={e.image} width={900} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                  <div className="experience-card-content">
                    <span className="experience-card-cat">{e.category}</span>
                    <h3 className="experience-card-title">{e.title}</h3>
                    <div className="experience-card-meta">
                      <span>
                        <PinIcon size={14} /> {e.location}
                      </span>
                      <span>
                        <ClockIcon size={14} /> {e.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to taste, walk or climb your way through it?"
        text={experience.tagline}
        primaryLabel="Plan This Experience"
        primaryTo={`/plan-a-trip?experience=${encodeURIComponent(experience.title)}`}
        message={waMsg}
      />
    </>
  );
}