import { site } from "../data/site";
import { usePageMeta } from "../lib/hooks";
import { PageHero } from "../components/sections";

const CONTENT: Record<"privacy" | "terms", { title: string; intro: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro: "The short version: we collect only what we need to plan your trip, we never sell your data, and you can ask us to delete it any time.",
    sections: [
      {
        h: "What we collect",
        p: "When you enquire or plan a trip we collect your name, phone number, email address and trip preferences (destinations, dates, party size, budget). We may also collect anonymised analytics about how the website is used.",
      },
      {
        h: "How we use it",
        p: "Your details are used solely to respond to enquiries, prepare itineraries, share travel documents and — only with your consent — send occasional inspiration. We never sell or rent your information to anyone.",
      },
      {
        h: "WhatsApp & phone",
        p: "If you message us on WhatsApp or call, those conversations are subject to the privacy policies of the platforms involved. We store chat history only within our own customer records.",
      },
      {
        h: "Your rights",
        p: "You may ask us to correct or delete your personal data at any time by writing to hello@yatraa.travel. We'll action requests within 30 days.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "The friendly version: prices are honest, deposits are transparent, and if life happens, we'll do everything fair to help.",
    sections: [
      {
        h: "Bookings & payments",
        p: "A booking is confirmed once the initial deposit (typically 25–30%) is received. The balance is due before travel per the timeline in your quote. All prices are in INR and include GST unless stated otherwise.",
      },
      {
        h: "Cancellations",
        p: "Cancellations made 30+ days before departure receive a full refund minus any non-recoverable costs. Between 15–29 days, 50% of the trip cost is refundable. Within 14 days, refunds are subject to recoverable costs only. Trip insurance is strongly recommended.",
      },
      {
        h: "Changes by us",
        p: "Occasionally weather, road closures or force majeure require itinerary changes. We'll always offer the closest equivalent and never leave you stranded — our ground teams are with you in real time.",
      },
      {
        h: "Liability",
        p: "Yatraa acts as a travel organiser. While we work only with licensed, insured operators, we are not liable for events beyond our reasonable control — including natural disasters, flight delays and personal injury during optional activities. Travel insurance is recommended for every journey.",
      },
    ],
  },
};

export function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const content = CONTENT[kind];
  usePageMeta(`${content.title} | Yatraa`, content.intro);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={content.title}
        tagline={content.intro}
        image="tajMahal"
        breadcrumb={[{ label: content.title, to: "#" }]}
      />
      <section className="section">
        <div className="container-large" style={{ maxWidth: 760 }}>
          {content.sections.map((s, i) => (
            <div key={s.h} style={{ marginBottom: "var(--space-2xl)" }}>
              <h2 className="heading-style-h3" style={{ fontSize: "var(--fs-h4)" }}>
                {i + 1}. {s.h}
              </h2>
              <p className="text-size-medium text-color-soft" style={{ marginTop: "var(--space-s)", lineHeight: 1.75 }}>
                {s.p}
              </p>
            </div>
          ))}
          <div className="info-card" style={{ background: "var(--color-bg)", marginTop: "var(--space-3xl)" }}>
            <h3 className="info-card-title">Questions?</h3>
            <p className="text-size-regular text-color-soft">
              Write to us at {site.email} or call {site.phone}. We're happy to explain any of the above in plain
              language.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}