import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/testimonials";
import { usePrefersReducedMotion } from "../lib/hooks";
import { ChevronDownIcon } from "./icons";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;
  const go = (next: number) => setIndex(((next % count) + count) % count);

  useEffect(() => {
    if (paused || reduced) return;
    timer.current = setInterval(() => go(index + 1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, reduced]);

  const current = testimonials[index];

  return (
    <div className="testimonial-slider-wrapper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="testimonial-slider-mask">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-slide ${i === index ? "is-active" : ""}`} aria-hidden={i !== index}>
            <p className="testimonials_eyebrow">Traveler's Review</p>
            <p className="testimonial-feedback">
              “{t.quote}”
            </p>
            <div className="testimonials_avatars">
              <div className="testimonials_avatar-group">
                {testimonials.map((a, j) => (
                  <button
                    key={j}
                    type="button"
                    aria-label={`Show review from ${a.name}`}
                    aria-pressed={j === index}
                    onClick={() => go(j)}
                    className={`testimonials_avatar ${j === index ? "is-active" : ""}`}
                    style={{ backgroundColor: "var(--color-pine-2)", color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-heading)" }}
                  >
                    {a.initials}
                  </button>
                ))}
              </div>
            </div>
            <div className="testimonials_author">
              <p className="testimonials_author-name">{t.name}</p>
              <p className="testimonials_author-badge">Verified Traveler</p>
            </div>
            <div className="testimonials_divider" />
            <div className="testimonials_meta">
              <span className="testimonials_meta-item">
                Location: <strong> {t.location}</strong>
              </span>
              <span className="testimonials_meta-item">
                Date: <strong> {t.date}</strong>
              </span>
              <span className="testimonials_meta-item">
                Rating: <strong> {t.rating}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="testimonials_nav left" aria-label="Previous review" onClick={() => go(index - 1)}>
        <ChevronDownIcon size={18} className="is-left" />
      </button>
      <button type="button" className="testimonials_nav right" aria-label="Next review" onClick={() => go(index + 1)}>
        <ChevronDownIcon size={18} className="is-right" />
      </button>
    </div>
  );
}