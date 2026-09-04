import { Link, useParams } from "react-router-dom";
import { getStory, stories } from "../data/stories";
import { getDestination } from "../data/destinations";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";
import { usePageMeta } from "../lib/hooks";
import { PageHero, CtaBand } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { JournalCard } from "../components/Cards";
import { NotFound } from "./NotFound";

export function StoryDetail() {
  const { slug } = useParams();
  const story = slug ? getStory(slug) : undefined;

  usePageMeta(
    story ? `${story.title} | Yatraa Journal` : "Story | Yatraa",
    story ? `${story.subtitle} — ${story.category} story by ${story.author}.` : "Yatraa story",
  );

  if (!story) return <NotFound />;

  const relatedStories = stories.filter((s) => s.slug !== story.slug).slice(0, 3);
  const relatedDestination = story.destination ? getDestination(story.destination) : undefined;

  return (
    <>
      <PageHero
        eyebrow={`${story.category} · ${story.readTime}`}
        title={<span style={{ fontSize: "clamp(36px, 5.5vw, 84px)", lineHeight: 1.05 }}>{story.title}</span>}
        tagline={story.subtitle}
        image={story.image}
        breadcrumb={[{ label: "Stories", to: "/stories" }, { label: story.category, to: "#" }]}
      >
        <div className="story-header-meta">
          <span>
            <strong style={{ color: "#fff" }}>{story.author}</strong>
          </span>
          <span className="dot-sep" aria-hidden="true" />
          <span>{story.date}</span>
          <span className="dot-sep" aria-hidden="true" />
          <span>{story.readTime}</span>
        </div>
      </PageHero>

      {/* Article body */}
      <article className="section">
        <div className="container-large">
          <div className="article-body">
            {story.blocks.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <Reveal key={i} as="h2">
                      {block.text}
                    </Reveal>
                  );
                case "quote":
                  return (
                    <Reveal key={i} className="pull-quote">
                      <blockquote>{block.text}</blockquote>
                    </Reveal>
                  );
                case "list":
                  return (
                    <Reveal key={i}>
                      {block.title && <h2 style={{ fontSize: "var(--fs-h4)", marginBottom: "var(--space-s)" }}>{block.title}</h2>}
                      <ul>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Reveal>
                  );
                case "image":
                  return (
                    <Reveal key={i}>
                      <figure>
                        <OptimizedImage imageKey={block.image} width={1400} sizes="100vw" />
                        <figcaption>{block.caption}</figcaption>
                      </figure>
                    </Reveal>
                  );
                default:
                  return (
                    <Reveal key={i}>
                      <p>{block.text}</p>
                    </Reveal>
                  );
              }
            })}
          </div>

          {/* Author box */}
          <Reveal delay={100} className="margin-top-50px" style={{ maxWidth: 720, marginInline: "auto" }}>
            <div className="info-card" style={{ display: "flex", gap: "var(--space-s)", alignItems: "center" }}>
              <span className="review-avatar" style={{ width: 60, height: 60, fontSize: 24 }}>
                {story.author.charAt(0)}
              </span>
              <div>
                <p className="review-author-name" style={{ fontSize: 16 }}>
                  {story.author}
                </p>
                <p className="text-size-small text-color-soft" style={{ marginTop: 4 }}>
                  Story curator at Yatraa — plans journeys across India and writes about the ones that stay.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related destination */}
      {relatedDestination && (
        <section className="section" style={{ background: "var(--color-white)", paddingTop: "var(--space-5xl)" }}>
          <div className="container-large">
            <Reveal className="journal-featured" style={{ gridTemplateColumns: "1fr 1.15fr", background: "var(--color-black)" }}>
              <Link to={`/destinations/${relatedDestination.slug}`} className="journal-featured_image-wrap" tabIndex={-1} aria-hidden="true">
                <OptimizedImage imageKey={relatedDestination.image} width={1400} sizes="100vw" />
              </Link>
              <div className="journal-featured-content">
                <div className="section-subtitle-block">
                  <span className="subtitle-border-line white" />
                  <p className="section-subtitle white">From the story · Related destination</p>
                </div>
                <Link to={`/destinations/${relatedDestination.slug}`} className="journal-featured-title" style={{ color: "#fff" }}>
                  {relatedDestination.name}
                </Link>
                <p className="text-size-regular" style={{ color: "rgba(255,255,255,.75)", marginTop: 12 }}>
                  {relatedDestination.description}
                </p>
                <div style={{ marginTop: "var(--space-l)" }}>
                  <Button to={`/destinations/${relatedDestination.slug}`} variant="primary" stagger>
                    Explore {relatedDestination.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related stories */}
      <section className="section">
        <div className="container-large">
          <div className="section-heading-flex">
            <div className="section-heading-block">
              <div className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Keep reading</p>
              </div>
              <h2 className="heading-style-h2 margin-top-16px">Related stories</h2>
            </div>
          </div>
          <div className="journal-grid">
            {relatedStories.map((s, i) => (
              <JournalCard key={s.slug} story={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Reading about it is lovely. Living it is better."
        text="Turn this story into your itinerary — our team plans trips around the places you just read about."
        message={`Hi Yatraa, I just read "${story.title}" and would love to plan a similar trip.`}
      />
    </>
  );
}