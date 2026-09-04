export const site = {
  name: "Yatraa",
  tagline: "Explore India, beautifully.",
  phone: "+91 98480 12345",
  phoneHref: "tel:+919848012345",
  email: "hello@yatraa.travel",
  emailHref: "mailto:hello@yatraa.travel",
  whatsappNumber: "919848012345",
  address: "Banjara Hills, Hyderabad, Telangana 500034, India",
  city: "Hyderabad, Telangana, India",
  established: 2022,
  socials: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
} as const;

/** Build a pre-filled WhatsApp chat link. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waDefault = waLink("Hi Yatraa! I'd love to plan a trip with you.");