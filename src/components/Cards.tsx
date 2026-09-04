import { Link } from "react-router-dom";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "./OptimizedImage";
import type { DestinationCard, DestinationPlace } from "../data/destinations";
import type { Trip } from "../data/trips";
import type { Experience } from "../data/experiences";
import type { Story } from "../data/stories";
import { ArrowRightIcon, ClockIcon, PinIcon, StarIcon } from "./icons";
import { Reveal } from "./Reveal";

/* ---------------- Trip / package card (Tenonis package-card style) ---------------- */
export function TripCard({ trip, index = 0 }: { trip: Trip; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 90} className="packages-card">
      <Link to={`/trips/${trip.slug}`} className="packages-card_image-wrap" tabIndex={-1} aria-hidden="true">
        <OptimizedImage imageKey={trip.image} width={900} className="packages-card_image" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
      </Link>
      <div className="packages-card_body">
        <div className="packages-card_meta">
          <span className="packages-card_location">{trip.route.split("→")[0].trim()}</span>
          <div className="packages-card_rating">
            <span className="packages-card_rating-icon">★</span>
            {(4.8 + (index % 3) * 0.1).toFixed(1)} · {40 + index * 7} reviews
          </div>
        </div>
        <Link to={`/trips/${trip.slug}`} className="packages-card_title">
          {trip.title}
        </Link>
        <div className="packages-card_tags">
          {trip.style.slice(0, 3).map((s) => (
            <span key={s} className="packages-card_tag">
              {s}
            </span>
          ))}
        </div>
        <div className="packages-card_duration-row">
          <p className="packages-card_duration">{trip.duration}</p>
          <div className="start-date-block">
            <span className="packages-card_next is-label">Route</span>
            <span className="packages-card_next">{trip.route.split("→").pop()?.trim()}</span>
          </div>
        </div>
        <div className="packages-card_footer">
          <div className="packages-card_price-wrap">
            <span className="packages-card_price">{trip.price}</span>
            <span className="packages-card_price-unit">/person</span>
          </div>
          <Link to={`/trips/${trip.slug}`} className="primary-button">
            <span className="button-text-wrapper">
              <span className="button-copy">View Journey</span>
            </span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------- Experience card ---------------- */
export function ExperienceCard({ experience, index = 0 }: { experience: Experience; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 90} className="experience-card">
      <Link to={`/experiences/${experience.slug}`} aria-label={experience.title}>
        <OptimizedImage imageKey={experience.image} width={900} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
        <div className="experience-card-content">
          <span className="experience-card-cat">{experience.category}</span>
          <h3 className="experience-card-title">{experience.title}</h3>
          <div className="experience-card-meta">
            <span>
              <PinIcon size={14} /> {experience.location}
            </span>
            <span>
              <ClockIcon size={14} /> {experience.duration}
            </span>
            <span style={{ color: "#fff", fontWeight: 700 }}>{experience.price}</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Journal / story card ---------------- */
export function JournalCard({ story, index = 0, featured = false }: { story: Story; index?: number; featured?: boolean }) {
  if (featured) {
    return (
      <Reveal className="journal-featured">
        <Link to={`/stories/${story.slug}`} className="journal-featured_image-wrap" tabIndex={-1} aria-hidden="true">
          <OptimizedImage imageKey={story.image} width={1400} sizes="(max-width: 767px) 100vw, 50vw" />
        </Link>
        <div className="journal-featured-content">
          <div className="section-subtitle-block">
            <span className="subtitle-border-line" />
            <p className="section-subtitle">{story.category}</p>
          </div>
          <Link to={`/stories/${story.slug}`} className="journal-featured-title">
            {story.title}
          </Link>
          <p className="text-size-regular text-color-soft" style={{ marginTop: "12px" }}>
            {story.subtitle}
          </p>
          <div className="journal-card-meta" style={{ marginTop: "16px" }}>
            <span>{story.author}</span>
            <span>{story.date}</span>
            <span>{story.readTime}</span>
          </div>
          <Link to={`/stories/${story.slug}`} className="destination-index-arrow" style={{ color: "var(--color-ink)", marginTop: "20px" }}>
            Read the story <ArrowRightIcon size={14} />
          </Link>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={(index % 3) * 90} className="journal-card">
      <Link to={`/stories/${story.slug}`}>
        <div className="journal-card_image-wrap">
          <OptimizedImage imageKey={story.image} width={900} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
          <span className="journal-card-cat">{story.category}</span>
        </div>
        <div className="journal-card-body">
          <div className="journal-card-meta">
            <span>{story.author}</span>
            <span>{story.date}</span>
            <span>{story.readTime}</span>
          </div>
          <h3 className="journal-card-title">{story.title}</h3>
          <p className="journal-card-excerpt">{story.subtitle}</p>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Destination index card ---------------- */
export function DestinationIndexCard({ d, index = 0 }: { d: DestinationCard; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 90} className="destination-index-card">
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
  );
}

/* ---------------- Place card (Hyderabad feature strip) ---------------- */
export function PlaceCard({ place }: { place: DestinationPlace }) {
  return (
    <Reveal className="place-card">
      <OptimizedImage imageKey={place.image} width={700} altText={`${place.name} — ${place.blurb}`} sizes="(max-width: 479px) 100vw, 50vw" />
      <div className="place-card-content">
        <p className="place-card-name">{place.name}</p>
        <p className="place-card-loc">{place.blurb.slice(0, 34)}…</p>
      </div>
    </Reveal>
  );
}

/* ---------------- Star row ---------------- */
export function Stars({ rating }: { rating: number }) {
  return (
    <span className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={13} className={i < rating ? "" : "is-dim"} />
      ))}
    </span>
  );
}