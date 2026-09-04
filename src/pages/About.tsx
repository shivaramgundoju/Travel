import { usePageMeta } from "../lib/hooks";
import { alt, photo } from "../data/images";
import { OptimizedImage } from "../components/OptimizedImage";
import { PageHero, CtaBand } from "../components/sections";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ArrowRightIcon } from "../components/icons";

const values = [
  {
    n: "01",
    title: "Travel slow, travel deep",
    text: "We'd rather give you one unforgettable week in a region than a blur of twelve cities. Every itinerary is built around place, pace and people — never checkboxes.",
  },
  {
    n: "02",
    title: "Local first, always",
    text: "Our teams on the ground live where you'll travel. Guides, homestays, family kitchens and the drivers who know every shortcut — they're the heart of every Yatraa journey.",
  },
  {
    n: "03",
    title: "Honest pricing, no surprises",
    text: "The price we quote is the price you pay. No hidden 'service fees', no forced shopping stops, no fine print — just clear numbers and what they include.",
  },
  {
    n: "04",
    title: "Beauty with intention",
    text: "We work with hotels and operators who pay fair wages, protect heritage and keep their corners of India the way travellers fall in love with them.",
  },
  {
    n: "05",
    title: "Small groups, real access",
    text: "We cap experiences at eight people and keep journeys private when you want them. Crowds dilute wonder — we design against them.",
  },
  {
    n: "06",
    title: "One conversation away",
    text: "Planning should feel like talking to a friend who happens to know India inside out. WhatsApp us any question, any time — a human answers.",
  },
];

const how = [
  { n: "01", title: "Tell us your dream", text: "A destination, a season, a budget — or just a feeling. A quick call or chat is enough to start." },
  { n: "02", title: "We craft the journey", text: "Within 48 hours you'll have a day-by-day draft: stays, transport, experiences and honest recommendations." },
  { n: "03", title: "You refine it", text: "Swap a city, change a hotel, add a cooking class. The draft is yours to shape until it feels exactly right." },
  { n: "04", title: "Travel beautifully", text: "You get a traveller's pack, a 24/7 WhatsApp line and a team on the ground who have your back the whole way." },
];

export function About() {
  usePageMeta(
    "About Yatraa — Travel with Intention",
    "Yatraa is a Hyderabad-based travel studio crafting extraordinary, human journeys across India since 2022. Read our story, values and approach.",
  );

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<span className="about-hero-title">Travel with intention.</span>}
        tagline="Yatraa began with a simple frustration: that the most beautiful country on earth was being sold as a list of sights to be ticked off."
        image="udaipur"
        chips={["Founded in Hyderabad", "Since 2022", "120+ destinations"]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-large">
          <div className="split-section">
            <div className="split-copy">
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Our story</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 margin-top-16px">
                  Born in Hyderabad, <span className="highlight-italic">in love with India</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  Yatraa started in 2022 on a rooftop in the old city of Hyderabad, over Irani chai and an argument
                  about whether the city's best biryani was worth a 6am queue. (It is.) We were travellers who had
                  spent years watching India get planned for — in hotel chains and tour buses — instead of with the
                  people who actually live here.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  So we built the studio we wished existed: a small team in Hyderabad, a network of local specialists
                  across the country, and journeys designed around the way light falls on Golconda at 6pm, the way a
                  Kashmiri grandmother folds bread into a tandoor, the way Kerala smells after rain. We don't sell
                  India. We help you meet it.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="split-media split-media-3x4">
              <OptimizedImage imageKey="charminar" width={1100} sizes="(max-width: 767px) 100vw, 50vw" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--color-black)", paddingBlock: "var(--space-5xl)" }}>
        <div className="container-large">
          <Reveal>
            <div className="about-stats" style={{ marginTop: 0 }}>
              {[
                ["120+", "Destinations"],
                ["15,000+", "Travellers hosted"],
                ["4.9★", "Average rating"],
                ["40+", "Local specialists"],
              ].map(([num, label]) => (
                <div key={label} className="about-stat">
                  <p className="about-stat-number">{num}</p>
                  <p className="about-stat-label">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="section">
        <div className="container-large">
          <SectionHeading
            eyebrow="What we believe"
            title="Six promises we travel by"
            align="center"
            summary="Everything Yatraa plans is filtered through these — from a two-hour food walk to a month across the Himalaya."
          />
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={(i % 3) * 90} className="value-card">
                <p className="value-card-number" aria-hidden="true">
                  {v.n}
                </p>
                <h3 className="value-card-title">{v.title}</h3>
                <p className="value-card-text">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we travel */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-large">
          <SectionHeading eyebrow="How we travel" title="From first hello to farewell chai" />
          <div className="values-grid">
            {how.map((h, i) => (
              <Reveal key={h.n} delay={(i % 3) * 90} className="value-card" style={{ border: "none", background: "var(--color-bg)" }}>
                <p className="value-card-number">{h.n}</p>
                <h3 className="value-card-title">{h.title}</h3>
                <p className="value-card-text">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Yatraa */}
      <section className="section">
        <div className="container-large">
          <div className="split-section is-flipped">
            <div className="split-copy">
              <Reveal className="section-subtitle-block">
                <span className="subtitle-border-line" />
                <p className="section-subtitle">Why Yatraa</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="heading-style-h2 margin-top-16px">
                  Why the name? Because a <span className="highlight-italic">yatra</span> is never just a trip
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  In Hindi, a yatra is a journey with meaning — a pilgrimage, a passage, a leaving that changes the
                  person who returns. That word is the whole point of us. We're not a booking portal. We're the
                  people who make sure that when you come home from India, something in you came home different.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="margin-top-30px">
                  <Button to="/destinations" variant="primary" stagger>
                    Start Exploring <ArrowRightIcon size={16} />
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="split-media split-media-4x3">
              <OptimizedImage imageKey="saris" width={1100} sizes="(max-width: 767px) 100vw, 50vw" />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's plan something worth coming home changed from."
        text="Tell us where India has been calling you — the first conversation is always free."
      />
    </>
  );
}