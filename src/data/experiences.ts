import type { ImageKey } from "./images";

export interface ExperienceReview {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface Experience {
  slug: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: string;
  priceNote: string;
  tagline: string;
  description: string;
  image: ImageKey;
  gallery: ImageKey[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: { title: string; desc: string }[];
  reviews: ExperienceReview[];
  faqs: { q: string; a: string }[];
}

export const experienceCategories = ["Food", "Culture", "Adventure", "Heritage", "Nature", "Wellness"];

export const experiences: Experience[] = [
  {
    slug: "old-hyderabad-food-walk",
    title: "Old City Food Walk",
    category: "Food",
    location: "Charminar, Hyderabad",
    duration: "3–4 hours",
    price: "₹1,499",
    priceNote: "per person",
    tagline: "Eight tastings. One thousand years of flavour.",
    description:
      "Follow a Hyderabadi food historian through the lanes of the old city — from the biryani houses under Charminar to a 90-year-old Irani café where the chai never stops. You'll eat like a local, learn like a scholar, and finish with a sweet you'll think about for weeks.",
    image: "streetFood",
    gallery: ["biryani", "curry", "chai", "laadBazaar", "charminarCrowd", "oldCityMarket"],
    highlights: [
      "Dum biryani at a legendary 60-year-old family kitchen",
      "Seekh kebabs grilled over open coals in a hidden courtyard",
      "Irani chai and Osmania biscuits at a heritage café",
      "Haleem in season at the stall that started it all",
      "Khubani ka meetha and double ka meetha for dessert",
      "Insider stories of the Nizams' kitchens and the city's food wars",
    ],
    included: [
      "English-speaking local food guide",
      "8–10 tastings (enough for a full meal)",
      "Bottled water throughout the walk",
      "All entry fees and stall charges",
      "Small group of max 8 people",
      "Food-safety insured vendors only",
    ],
    notIncluded: [
      "Hotel transfers (can be added)",
      "Extra food and beverages beyond the tastings",
      "Gratuities for the guide",
    ],
    itinerary: [
      { title: "Meet at Charminar gate", desc: "We gather under the arches before the crowds arrive and set the scene — how a Persian-inspired city fed itself for four centuries." },
      { title: "Biryani stop one", desc: "The old-city legend: dum biryani from a handi that has been running since the 1960s." },
      { title: "Kebab alley", desc: "Smoke, spice and skewers. You'll watch the grill master at work before tasting his best." },
      { title: "Laad Bazaar detour", desc: "A short, glittering detour through the bangle market for the city's famous qubani and falooda." },
      { title: "Irani café finale", desc: "We end where Hyderabad slows down — over Irani chai, Osmania biscuits and a conversation about where to go next." },
    ],
    reviews: [
      { name: "Neha K.", location: "Pune", rating: 5, text: "Best food tour I've done anywhere. We ate at places no tourist would ever find, and the guide knew every family behind every counter.", date: "Jan 2026" },
      { name: "Daniel M.", location: "London", rating: 5, text: "As a vegetarian I was worried — turns out old Hyderabad has the best veg street food in India. Completely spoilt by the end.", date: "Nov 2025" },
      { name: "Sneha & Vikram", location: "Hyderabad", rating: 5, text: "We're locals and still learned a dozen new things. Perfect for out-of-town guests — we've booked it twice more already.", date: "Oct 2025" },
    ],
    faqs: [
      { q: "Is the walk suitable for vegetarians?", a: "Yes. Around half the tastings are vegetarian by default, and every stall we visit makes a plant-based version. Tell us when booking and we'll tailor the route." },
      { q: "How fit do I need to be?", a: "The route is about 2.5 km of flat, mostly shaded walking with plenty of sitting-down stops. Comfortable shoes are all you need." },
      { q: "Is the food safe for sensitive stomachs?", a: "We only visit vendors with verified hygiene standards, and we start every walk with a briefing on what to choose if you're cautious. Bottled water is provided." },
      { q: "Can you accommodate allergies?", a: "Absolutely — nut, dairy and gluten allergies are all manageable. Please mention them at booking so we can plan the stops." },
    ],
  },
  {
    slug: "golconda-heritage",
    title: "Golconda After Dark",
    category: "Heritage",
    location: "Golconda Fort, Hyderabad",
    duration: "3 hours",
    price: "₹2,299",
    priceNote: "per person",
    tagline: "The fort's greatest secret is best heard after sunset.",
    description:
      "Clap at the entrance and hear your echo travel 600 metres to the top of the fort — that's how the kings of Golconda signalled. Our historians lead you through the gates, the palaces and the acoustic marvels, finishing with the sound-and-light show that turns the fort's 800-year story into theatre.",
    image: "golconda",
    gallery: ["fortGate", "gwalior", "hussainSagar", "monastery", "tajMahal", "amberFort"],
    highlights: [
      "The famous clap-acoustics demonstration at the Fateh Darwaza",
      "A guided climb through Balahisar Gate, palaces and pleasure gardens",
      "Stories of the Kohinoor diamond, mined and lost from this very hill",
      "Reserved seats for the evening light-and-sound show",
      "Sunset views over the Qutb Shahi tombs and Hyderabad's skyline",
    ],
    included: [
      "Heritage-specialist guide (English / Hindi / Telugu)",
      "Entry tickets to Golconda Fort",
      "Reserved light-and-sound show seating",
      "Flashlight and bottled water",
      "Small group of max 12",
    ],
    notIncluded: ["Hotel transfers (can be added)", "Dinner after the show", "Gratuities"],
    itinerary: [
      { title: "Gates & acoustics", desc: "The Fateh Darwaza and its famous echo — with a live demonstration of how guards once spoke across the fort." },
      { title: "The royal climb", desc: "Through the Balahisar gate, the Durbar hall and the king's private chambers, with views opening over the Deccan plateau." },
      { title: "Diamond stories", desc: "The treasury pavilion where the Kohinoor and the Hope diamond were once weighed — and the smuggling tale that ended a dynasty's luck." },
      { title: "Sunset & light show", desc: "Golden hour over the tombs, then the sound-and-light show that tells the fort's story in its own walls." },
    ],
    reviews: [
      { name: "Rahul D.", location: "Mumbai", rating: 5, text: "The guide brought Golconda alive. I've been to the fort twice as a kid and understood nothing — this time I didn't want it to end.", date: "Dec 2025" },
      { name: "Emma W.", location: "Sydney", rating: 5, text: "The clap echo gave me goosebumps, and the light show was unexpectedly moving. Great pacing, never felt rushed.", date: "Feb 2026" },
    ],
    faqs: [
      { q: "How difficult is the climb?", a: "The route is a gentle, paved ascent of about 400 steps taken slowly with stops. Anyone with basic mobility can manage it; we can also arrange a vehicle part-way." },
      { q: "What time does it end?", a: "The light-and-sound show ends around 8:30pm depending on the season. We'll confirm exact timings the day before." },
      { q: "Is it safe after dark?", a: "Yes — Golconda is a ticketed monument with security throughout, and our group stays together. Transfers back to your hotel can be arranged." },
    ],
  },
  {
    slug: "biryani-trail",
    title: "Hyderabadi Biryani Trail",
    category: "Food",
    location: "Across Hyderabad",
    duration: "Half day",
    price: "₹3,499",
    priceNote: "per person",
    tagline: "Five legendary biryanis. One serious decision: which is best?",
    description:
      "A half-day pilgrimage across the city's most famous biryani houses — dum, kacchi, veg, mutton, and the cult favourite that locals queue an hour for. Each stop has a story and each plate has an argument. You'll leave full, opinionated, and with the definitive answer to Hyderabad's most important debate.",
    image: "biryani",
    gallery: ["curry", "streetFood", "chai", "thali", "spices", "oldCityMarket"],
    highlights: [
      "Kacchi biryani at the old city's most famous house",
      "The 'secret' mutton dum biryani loved by food critics",
      "A heritage-style biryani served the Nizami way",
      "Paneer and veg biryani that converts even carnivores",
      "Verdict time: ranking session with chai and cigarettes-free conversation",
    ],
    included: [
      "Bir yani-fixated local guide",
      "Five full biryani portions shared family-style",
      "Chai and dessert at the final stop",
      "All restaurant charges and service",
      "A take-home list of the city's best 10 biryani addresses",
    ],
    notIncluded: ["Transfers (can be added)", "Alcohol", "Extra portions to take home (you'll want them)"],
    itinerary: [
      { title: "Old city kacchi", desc: "We start where it began — the 1890s kitchen that claims the original recipe, sealed and slow-cooked in handis." },
      { title: "The critics' choice", desc: "A short drive to the mutton house that food writers cross cities for." },
      { title: "Nizami heritage plate", desc: "Biryani as the royals ate it — with kebab, salan and mirchi ka salan on the side." },
      { title: "The veg rebellion", desc: "Paneer dum biryani from the house that made vegetables fashionable." },
      { title: "Verdict + dessert", desc: "Chai, double ka meetha, and the great ranking debate. May the best biryani win." },
    ],
    reviews: [
      { name: "Farhan A.", location: "Bengaluru", rating: 5, text: "I've eaten biryani my whole life and this trail humbled me. Five very different, very serious plates. Bring loose clothes.", date: "Jan 2026" },
      { name: "Lucy T.", location: "New York", rating: 5, text: "The best food experience of my India trip. Learned more about biryani in 5 hours than in 30 years of eating it.", date: "Dec 2025" },
    ],
    faqs: [
      { q: "Is this too much food?", a: "Portions are shared, so you taste everything without being overwhelmed — though we won't judge if you ask for seconds at the final stop." },
      { q: "Vegetarian option?", a: "Yes — the trail runs with all-veg or mixed versions. The veg biryani stop is legendary in its own right." },
      { q: "Where do we meet?", a: "Pickup from central hotels is included on request; otherwise we meet at Charminar at 11:30am sharp." },
    ],
  },
  {
    slug: "kerala-backwater-escape",
    title: "Kerala Backwater Escape",
    category: "Nature",
    location: "Alleppey, Kerala",
    duration: "1 night",
    price: "₹9,999",
    priceNote: "per person",
    tagline: "A night on the water you'll measure all other nights against.",
    description:
      "Board your private houseboat at noon and let the backwaters take over. Cruise past villages where life happens on the water — toddy tappers, coir makers, kingfishers on every post. Fish for your dinner from the deck, eat Kerala cooking at sunset, and sleep under a ceiling of stars with the boat swaying gently at anchor.",
    image: "houseboat",
    gallery: ["backwaters", "munnar", "keralaBeach", "thali", "waterfall", "goaWater"],
    highlights: [
      "24 hours aboard a private premium houseboat",
      "Cruise through Alleppey's canals, lakes and paddy fields",
      "Fresh Kerala lunch, dinner and breakfast cooked on board",
      "Village canoe detour through narrow palm tunnels",
      "Sunset fishing from the deck — the crew cooks your catch",
      "Air-conditioned suite with a private deck",
    ],
    included: [
      "Premium houseboat with A/C suite and private deck",
      "All meals on board (lunch, dinner, breakfast)",
      "Cruise permits and crew",
      "Evening canoe ride",
      "Mineral water and coffee/tea",
    ],
    notIncluded: ["Transfers to Alleppey", "Alcohol (BYO allowed)", "Toddy shop visits", "Gratuities"],
    itinerary: [
      { title: "Board & cruise", desc: "Check-in at noon, welcome drink on deck, and we cast off into the main channel." },
      { title: "Village water roads", desc: "Lunch while cruising narrow canals past churches, schools and coir factories that open onto the water." },
      { title: "Canoe at golden hour", desc: "Transfer to a local canoe for the quiet hour — the best wildlife and the best light of the day." },
      { title: "Anchor & dinner", desc: "The boat anchors in a silent stretch. Kerala dinner on deck, stars above, and the best sleep of your trip." },
      { title: "Sunrise cruise back", desc: "Morning chai as the mist lifts, a leisurely breakfast cruise, and check-out at 9am feeling like a different person." },
    ],
    reviews: [
      { name: "Meera & Karthik", location: "Hyderabad", rating: 5, text: "Our honeymoon highlight. The crew treated us like family and the food was the best Kerala cooking we had anywhere.", date: "Feb 2026" },
      { name: "James B.", location: "Manchester", rating: 5, text: "Magical. The canoe ride at dusk with kingfishers and otters was worth the entire journey to Kerala.", date: "Dec 2025" },
    ],
    faqs: [
      { q: "When is the best time?", a: "October to March is ideal. Monsoon (June–August) has its own lush drama and emptier canals if you don't mind rain." },
      { q: "Is the houseboat private?", a: "Yes — every booking is a private boat with its own crew, never shared." },
      { q: "Can we add Munnar or Kochi?", a: "Yes, this pairs perfectly with our Kerala journeys. Ask us for a combined itinerary." },
    ],
  },
  {
    slug: "rajasthan-heritage-walk",
    title: "Rajasthan Heritage Walk",
    category: "Culture",
    location: "Pink City, Jaipur",
    duration: "Half day",
    price: "₹2,499",
    priceNote: "per person",
    tagline: "Jaipur's pink walls, told by the people who live inside them.",
    description:
      "Skip the palace queues and walk Jaipur the way locals do — through Brahmin-painted lanes, step wells, temples older than the city itself, and bazaars where families have traded for nine generations. Your guide is a Jaipur historian who grew up in the old city and knows every doorway's story.",
    image: "hawaMahal",
    gallery: ["amberPaths", "jalMahal", "amberFort", "saris", "laadBazaar", "fortGate"],
    highlights: [
      "Hidden step wells and water architecture",
      "The 'secret' side of Hawa Mahal, away from the crowds",
      "Nine-generation family workshops: block printing, gems, brass",
      "Pyaaz kachori and chai at the city's best old stall",
      "A rooftop ending with the pink city glowing below",
    ],
    included: ["Heritage guide (English/Hindi)", "All tastings and chai stops", "Small group of max 10", "Rooftop finale"],
    notIncluded: ["Palace entry tickets (optional)", "Shopping (unavoidable)", "Gratuities"],
    itinerary: [
      { title: "The pink lanes", desc: "Start at the city gates and wind through the residential lanes that paint Jaipur's famous colour." },
      { title: "Step wells & temples", desc: "Ancient water architecture and a living temple complex, explained by a guide who grew up two streets away." },
      { title: "Craft families", desc: "Doorstep visits to workshops where block-printing and gem-cutting have run in families for centuries." },
      { title: "Street food & rooftop", desc: "The city's best pyaaz kachori, then a rooftop over the bazaars as the sun drops." },
    ],
    reviews: [
      { name: "Ishita V.", location: "Delhi", rating: 5, text: "I've been to Jaipur ten times and this walk showed me a completely different city. The craft family visits alone are worth it.", date: "Nov 2025" },
    ],
    faqs: [
      { q: "How much walking?", a: "About 3 km at a gentle pace with long tasting stops. The route is flat and mostly shaded." },
      { q: "Is shopping pushed?", a: "No — we visit workshops to watch craft, not to sell. You're welcome to buy, but there's zero pressure." },
    ],
  },
  {
    slug: "kashmir-village-experience",
    title: "Kashmir Village Experience",
    category: "Culture",
    location: "Aru Valley, Kashmir",
    duration: "2 days / 1 night",
    price: "₹12,999",
    priceNote: "per person",
    tagline: "A night in a Kashmiri home, a day in the meadows of Aru.",
    description:
      "Drive past Pahalgam into the Aru Valley, where the Lidder river runs through pine forests and shepherds still move with the seasons. Stay with a local family in a traditional wooden home, learn to make Kashmiri bread in their kitchen, and wake to the sound of the valley doing its slow morning things.",
    image: "pahalgam",
    gallery: ["kashmirValley", "kashmirGreen", "dalLake", "gulmarg", "prayerFlags", "himalaya"],
    highlights: [
      "Homestay with a Kashmiri family in Aru village",
      "Home-cooked Wazwan-style dinner and kahwa by the bukhari fire",
      "Guided meadow walk to the shepherd trails above Aru",
      "Bread-making in the family's outdoor tandoor",
      "Lidder river time — picnic, stones, and absolute quiet",
      "All transfers from Srinagar included",
    ],
    included: [
      "Private transfers (Srinagar–Aru–Srinagar)",
      "1 night homestay, all meals",
      "Local village guide for the meadow walk",
      "Cultural activities with the family",
    ],
    notIncluded: ["Pony rides (optional, payable locally)", "Personal shopping", "Travel insurance"],
    itinerary: [
      { title: "Srinagar to Aru", desc: "A scenic 3-hour drive past Pahalgam, stopping for chai where the river bends." },
      { title: "Village afternoon", desc: "Lunch with the family, a walk through Aru's lanes and orchards, and time by the Lidder." },
      { title: "Home dinner", desc: "Evening in the family kitchen — helping with bread, then a Wazwan-style dinner by the fire." },
      { title: "Meadow morning", desc: "Optional sunrise walk with the guide, breakfast, and a slow drive back to Srinagar with a picnic stop." },
    ],
    reviews: [
      { name: "Sana I.", location: "Hyderabad", rating: 5, text: "The family treated us like their own. Sitting by the bukhari with kahwa while snow fell outside — I'll never forget it.", date: "Jan 2026" },
    ],
    faqs: [
      { q: "Is it cold?", a: "Aru sits at 2,400m — cold at night most of the year. Warm homestay rooms, blankets and the bukhari fire make it cosy." },
      { q: "Safety in the valley?", a: "Aru is a calm, family-tourism village popular with Indian travellers. Your host family and our local team are with you throughout." },
    ],
  },
  {
    slug: "ladakh-road-adventure",
    title: "Ladakh Road Adventure",
    category: "Adventure",
    location: "Leh & Nubra, Ladakh",
    duration: "5 days / 4 nights",
    price: "₹24,999",
    priceNote: "per person",
    tagline: "Two high passes, one desert valley, zero regrets.",
    description:
      "The classic Ladakh loop done right — acclimatised in Leh, then over Khardung La into the Nubra Valley, past sand dunes and Bactrian camels, to the blue miracle of Pangong Tso. Small group, expert drivers who know every bend, and enough acclimatisation days that you actually enjoy the altitude instead of just surviving it.",
    image: "pangong",
    gallery: ["ladakhRoad", "spiti", "monastery", "prayerFlags", "himalaya", "hussainSagar"],
    highlights: [
      "Khardung La — one of the world's highest motorable passes",
      "Nubra Valley's white desert and Bactrian camel ride",
      "Sunset and sunrise at Pangong Tso",
      "Thiksey monastery morning prayers",
      "Indus river rafting option (add-on)",
      "All permits, hotels and transfers handled",
    ],
    included: [
      "All road travel in a comfortable SUV/tempo traveller",
      "4 nights' stay (Leh, Nubra, Pangong) with meals",
      "Inner Line permits and environmental fees",
      "Experienced Ladakhi driver-guide",
      "Oxygen support in the vehicle",
    ],
    notIncluded: ["Flights to/from Leh", "Lunches on travel days", "Rafting and camel ride (optional)", "Insurance"],
    itinerary: [
      { title: "Leh acclimatisation", desc: "Arrive, rest, and a gentle walk around Leh market. The altitude rule: slow today, amazing tomorrow." },
      { title: "Khardung La → Nubra", desc: "Over the pass into the Shyok valley, then sand dunes and camels at Hunder." },
      { title: "Nubra → Pangong", desc: "The long, gorgeous drive past Shayok and the blue lake. Sunset at the shore." },
      { title: "Pangong sunrise → Leh", desc: "Watch the lake change colour at dawn, then the drive home via Chang La." },
      { title: "Monasteries & fly", desc: "Thiksey and Hemis in the morning before your flight — the perfect ending." },
    ],
    reviews: [
      { name: "Arjun P.", location: "Chennai", rating: 5, text: "Flawless logistics. The acclimatisation pacing meant our whole group felt great the entire trip — rare at 4,000m.", date: "Aug 2025" },
      { name: "Zoya F.", location: "Mumbai", rating: 5, text: "Pangong at sunrise made me cry, and I'm not a crying person. The team handled everything — I just had to look.", date: "Sep 2025" },
    ],
    faqs: [
      { q: "Who is this suitable for?", a: "Anyone comfortable with long mountain drives (4–6 hours/day). No trekking fitness needed — acclimatisation is built into the route." },
      { q: "When does it run?", a: "June to late September. We advise a minimum of 2 nights in Leh before joining if you're flying in directly." },
      { q: "What about the permits?", a: "All Inner Line permits are arranged by us — you only need your ID documents." },
    ],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}