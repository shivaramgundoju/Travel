import type { ImageKey } from "./images";

export interface DestinationPlace {
  name: string;
  blurb: string;
  image: ImageKey;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  overview: string[];
  image: ImageKey;
  gallery: ImageKey[];
  bestTime: { months: string; note: string }[];
  places: DestinationPlace[];
  thingsToDo: string[];
  food: { name: string; desc: string }[];
  tips: string[];
  experiences: string[];
  trips: string[];
}

export const destinations: Destination[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "South India",
    tagline: "Where history meets the modern Deccan.",
    description:
      "Pearls, palaces and the world's most famous biryani — Hyderabad is a city of layered stories waiting to be tasted, walked and wondered at.",
    overview: [
      "Hyderabad is not a city you visit; it is a city you taste. Founded in 1591 around the Charminar, it grew into the wealthiest princely state in India, and its Qutb Shahi and Asaf Jahi rulers left behind a skyline of minarets, domes and forts that still anchors the old city's rhythm.",
      "Today the twin city — old Hyderabad and modern Secunderabad — moves between centuries with effortless ease. You can spend a morning climbing Golconda's battlements, an afternoon lost in Salar Jung's museum of curiosities, and an evening eating dum biryani in a 60-year-old family kitchen. The culture is warm, the chai is strong, and the conversation always comes back to food.",
      "For first-timers, Hyderabad is the perfect Indian gateway: world-class hotels, a new international airport, and an old city that rewards slow, hungry wandering.",
    ],
    image: "charminar",
    gallery: ["charminar", "golconda", "hussainSagar", "laadBazaar", "oldCityMarket", "chai"],
    bestTime: [
      { months: "Oct – Mar", note: "The sweet spot. Pleasant days, cool evenings, perfect for the old city and forts." },
      { months: "Apr – Jun", note: "Hot and dry — best for early-morning sightseeing and pool-side afternoons." },
      { months: "Jul – Sep", note: "Monsoon greens the city; Golconda and Hussain Sagar look their most dramatic." },
    ],
    places: [
      { name: "Charminar", blurb: "The four-minaret icon at the heart of old Hyderabad, best at golden hour.", image: "charminar" },
      { name: "Golconda Fort", blurb: "A 13th-century citadel of gates, acoustics and sweeping Deccan views.", image: "golconda" },
      { name: "Chowmahalla Palace", blurb: "The seat of the Nizams, with crystal chandeliers and royal Durbar halls.", image: "fortGate" },
      { name: "Qutb Shahi Tombs", blurb: "Domed sandstone tombs of the dynasty that built the city.", image: "gwalior" },
      { name: "Hussain Sagar", blurb: "A vast lake crowned by a 17-metre Buddha statue.", image: "hussainSagar" },
      { name: "Salar Jung Museum", blurb: "One of the world's largest one-man art collections — clocks, swords, Mughal miniatures.", image: "charminarCrowd" },
      { name: "Laad Bazaar", blurb: "The glittering bangle market hugging the Charminar's skirts.", image: "laadBazaar" },
      { name: "Durgam Cheruvu", blurb: "A hidden lake ringed by granite cliffs, a sunset favourite.", image: "goaWater" },
      { name: "Shilparamam", blurb: "An arts village of crafts, folk performances and village life.", image: "saris" },
      { name: "Ramoji Film City", blurb: "The world's largest film city — sets, studios and show rides.", image: "resort" },
    ],
    thingsToDo: [
      "Wander the lanes around Charminar and climb to its upper balcony at sunset",
      "Join the sound-and-light show at Golconda Fort",
      "Shop for pearls and lac bangles along Laad Bazaar",
      "Sunset boat ride on Hussain Sagar past the Buddha statue",
      "Explore the Chowmahalla Palace and its vintage car collection",
      "Eat your way through a biryani trail — dum, kacchi and everything in between",
    ],
    food: [
      { name: "Hyderabadi Dum Biryani", desc: "Slow-cooked basmati and meat sealed under dough — the city's crown jewel." },
      { name: "Haleem", desc: "A Ramadan classic of wheat, meat and ghee, now a year-round obsession." },
      { name: "Osmania Biscuits", desc: "The buttery, crumbly biscuit born to be dunked in Irani chai." },
      { name: "Irani Chai", desc: "Sweet, milky and served with the city's unhurried charm." },
      { name: "Qubani Ka Meetha", desc: "Apricot pudding — the Nizami dessert that ends every feast." },
    ],
    tips: [
      "Start the old city before 9am — cooler, quieter, and the chai stalls are already alive.",
      "Allow half a day for Golconda; the climb is gentle and the views are worth the pace.",
      "Carry cash for Laad Bazaar and small food stalls — many don't take cards.",
      "Book Ramoji Film City online a day ahead for better show timings.",
      "Telugu, Hindi, English and Urdu all work; people are happy to help with directions.",
    ],
    experiences: ["old-hyderabad-food-walk", "golconda-heritage", "biryani-trail"],
    trips: ["hyderabad-kerala", "hyderabad-kashmir", "hyderabad-rajasthan", "hyderabad-goa"],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    region: "North India",
    tagline: "The valley that rewrites your idea of beautiful.",
    description:
      "Shikaras on Dal Lake, meadows of Gulmarg, the pine forests of Pahalgam — Kashmir is India's most cinematic valley.",
    overview: [
      "Kashmir has been called paradise on earth so often that the phrase has worn thin — until you actually stand on a houseboat deck at dawn, watching mist lift off Dal Lake while snow peaks catch the first light. Then it makes sense again.",
      "The valley moves at the pace of its shikaras and its orchards. Srinagar offers Mughal gardens and old wooden mosques; Gulmarg offers one of the world's highest gondolas; Pahalgam offers the Lidder river and meadows straight out of a folk song. The people are warm, the chai is served with a smile, and the light — the light is something else.",
      "Kashmir is safe, welcoming and best travelled with a local team that knows the seasons. Autumn colours, winter snow or spring blossom — every season has its reason.",
    ],
    image: "dalLake",
    gallery: ["shikara", "gulmarg", "pahalgam", "kashmirValley", "kashmirGreen", "himalaya"],
    bestTime: [
      { months: "Apr – Jun", note: "Spring bloom and mild days; the valley is carpeted in flowers." },
      { months: "Sep – Nov", note: "Golden chinar leaves and crisp air — the photographer's season." },
      { months: "Dec – Mar", note: "Snow. Gulmarg turns into a winter playground; Srinagar glows under it." },
    ],
    places: [
      { name: "Dal Lake", blurb: "Houseboats, shikaras and floating gardens under the Zabarwan range.", image: "dalLake" },
      { name: "Gulmarg", blurb: "Meadow of flowers and the famous cable car to Apharwat Peak.", image: "gulmarg" },
      { name: "Pahalgam", blurb: "Pine forests and the Lidder river at the foot of the mountains.", image: "pahalgam" },
      { name: "Mughal Gardens", blurb: "Shalimar and Nishat — terraced gardens designed for emperors.", image: "kashmirGreen" },
      { name: "Shankaracharya Temple", blurb: "A hilltop shrine with the best panorama of Srinagar.", image: "himalaya" },
      { name: "Sonamarg", blurb: "The 'meadow of gold' and the gateway to the Zoji La pass.", image: "prayerFlags" },
    ],
    thingsToDo: [
      "Sunrise shikara ride across Dal Lake past the floating vegetable gardens",
      "Ride the Gulmarg gondola to Apharwat Peak (when weather allows)",
      "Stay a night on a heritage houseboat with a lakeside dinner",
      "Walk the Mughal gardens and end with noon chai at a local café",
      "Trek or pony ride to the Baisaran meadows near Pahalgam",
      "Shop for Pashmina, walnut-wood carvings and saffron in the old city",
    ],
    food: [
      { name: "Wazwan", desc: "The royal 36-course Kashmiri feast, led by the famous Rogan Josh." },
      { name: "Rogan Josh", desc: "Slow-cooked lamb in a deep red gravy of Kashmiri chillies." },
      { name: "Kashmiri Kahwa", desc: "Green tea with saffron, almonds and a hint of cardamom." },
      { name: "Gushtaba", desc: "Delicate meatballs in a rich yoghurt gravy — the Wazwan finale." },
      { name: "Noon Chai", desc: "The pink, salty, walnut-garnished tea of the valley." },
    ],
    tips: [
      "Carry warm layers even in summer — evenings at altitude turn cool fast.",
      "Book the gondola early; tickets sell out and weather windows are short.",
      "Mobile networks can be patchy in the valleys — download offline maps.",
      "Photography at some temples and gardens has restrictions; ask first.",
      "Saffron and Pashmina are best bought from government emporiums for authenticity.",
    ],
    experiences: ["kashmir-village-experience"],
    trips: ["hyderabad-kashmir"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    region: "South India",
    tagline: "God's own country, one backwater at a time.",
    description:
      "Houseboats on still waters, tea hills in Munnar, beaches at Varkala — Kerala is slow travel perfected.",
    overview: [
      "Kerala is the India you exhale into. There are no crowds to push through, no horns to dodge — just palm-lined canals, quiet villages, and the unhurried rhythm of water. Its nickname, God's Own Country, is less a boast than a job description.",
      "Start in Kochi, where Chinese fishing nets, Portuguese churches and a living Jewish quarter sit side by side. Then head to the backwaters of Alleppey for a night on a houseboat, climb the tea plantations of Munnar, and end at a cliff-top beach in Varkala with the Arabian Sea below.",
      "Add some of India's best food — seafood, appam and stew, banana-leaf thalis — and the warmth of a state that has perfected hospitality. Kerala is the ideal first taste of South India.",
    ],
    image: "backwaters",
    gallery: ["houseboat", "munnar", "keralaBeach", "kathakali", "thali", "waterfall"],
    bestTime: [
      { months: "Sep – Mar", note: "Cool, green and clear — peak season for backwaters and hills." },
      { months: "Apr – May", note: "Warm but quiet; great deals and empty beaches." },
      { months: "Jun – Aug", note: "Monsoon turns Kerala lush; Ayurveda season is in full swing." },
    ],
    places: [
      { name: "Alleppey Backwaters", blurb: "Canals, paddy fields and houseboat evenings that stay with you.", image: "backwaters" },
      { name: "Munnar", blurb: "Rolling tea estates and misty valleys at 1,600 metres.", image: "munnar" },
      { name: "Varkala", blurb: "A cliff-top beach town with dramatic sunsets.", image: "keralaBeach" },
      { name: "Kochi", blurb: "Fort Kochi's colonial lanes, Chinese nets and art cafés.", image: "houseboat" },
      { name: "Thekkady", blurb: "Spice gardens and Periyar's wildlife sanctuary.", image: "spices" },
      { name: "Kumarakom", blurb: "A quieter backwater haven loved by birdwatchers.", image: "waterfall" },
    ],
    thingsToDo: [
      "Spend a night on a private houseboat cruising the Alleppey backwaters",
      "Sunrise walk through the tea gardens of Munnar",
      "Watch the Chinese fishing nets at Fort Kochi at sunset",
      "Take a Kathakali performance — arrive an hour early to watch the makeup",
      "Ayurvedic massage in a palm-shaded spa",
      "Eat a banana-leaf sadya (feast) with your hands, the Kerala way",
    ],
    food: [
      { name: "Appam & Stew", desc: "Lacy rice pancakes with a fragrant coconut-milk stew." },
      { name: "Meen Curry", desc: "Fish simmered in tangy, coconut-laced gravy." },
      { name: "Kerala Sadya", desc: "A banana-leaf feast of dozens of small dishes." },
      { name: "Puttu & Kadala", desc: "Steamed rice cakes with black chickpea curry — the classic breakfast." },
      { name: "Karimeen Pollichathu", desc: "Pearl spot fish wrapped in banana leaf and grilled." },
    ],
    tips: [
      "Houseboats are best booked for the full 24-hour cruise — sunset, night and sunrise included.",
      "Munnar needs a light jacket; the hills sit above 1,500 metres.",
      "Alleppey is busiest in December–January; book boats and stays early.",
      "Try toddy (palm wine) only at licensed 'toddy shops' with food.",
      "Kerala is India's most cycle-friendly state — ask us about guided bike days.",
    ],
    experiences: ["kerala-backwater-escape"],
    trips: ["hyderabad-kerala"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    region: "West India",
    tagline: "Forts, palaces and desert gold.",
    description:
      "Jaipur's pink walls, Udaipur's lake palaces, Jaisalmer's golden dunes — the land of maharajas at its most romantic.",
    overview: [
      "Rajasthan is India with the volume turned up. Every city is a different colour — pink Jaipur, blue Jodhpur, golden Jaisalmer — and every fort tells a story of kings, sieges and impossible architecture.",
      "Start in Jaipur with the Hawa Mahal's honeycomb facade and Amber Fort's mirrored halls, then drop to Udaipur, where the City Palace floats above Lake Pichola and the evening boat ride is pure cinema. For the finale, the Thar desert: a camel at dusk, dunes turning gold, dinner under a sky thick with stars.",
      "It is colourful, photogenic and deeply hospitable — and best of all, every city is connected by a golden triangle of road and rail that makes Rajasthan one of India's easiest multi-city journeys.",
    ],
    image: "hawaMahal",
    gallery: ["amberFort", "jalMahal", "udaipur", "desert", "amberPaths", "saris"],
    bestTime: [
      { months: "Oct – Mar", note: "Pleasant days and cool desert nights — the classic season." },
      { months: "Jul – Sep", note: "Monsoon softens the desert; green patches and dramatic skies." },
      { months: "Apr – Jun", note: "Very hot. Early starts and air-conditioned palaces only." },
    ],
    places: [
      { name: "Hawa Mahal", blurb: "The Palace of Winds — 953 windows built for royal ladies to watch the street.", image: "hawaMahal" },
      { name: "Amber Fort", blurb: "Elephant gates, mirrored Sheesh Mahal and hilltop ramparts.", image: "amberFort" },
      { name: "Jal Mahal", blurb: "A water palace floating on Man Sagar Lake.", image: "jalMahal" },
      { name: "City Palace, Udaipur", blurb: "A living palace museum over the glassy Lake Pichola.", image: "udaipur" },
      { name: "Thar Desert", blurb: "Dune camping and camel safaris at the desert's edge.", image: "desert" },
      { name: "Jaisalmer Fort", blurb: "A golden living fort carved from desert sandstone.", image: "gwalior" },
    ],
    thingsToDo: [
      "Golden-hour walk around Hawa Mahal before the crowds arrive",
      "Sheesh Mahal at Amber Fort — the mirrored hall built for one candle",
      "Sunset boat ride on Lake Pichola, Udaipur",
      "Camel safari and overnight desert camp in the Thar",
      "Block-printing and blue-pottery workshops in Jaipur",
      "Bazaars: Johari Bazaar for gems, Bapu Bazaar for everything else",
    ],
    food: [
      { name: "Dal Baati Churma", desc: "Baked wheat dumplings with dal — Rajasthan's soul food." },
      { name: "Laal Maas", desc: "Fiery lamb curry from the royal kitchens." },
      { name: "Ghevar", desc: "A honeycomb sweet that Jaipur does best." },
      { name: "Pyaaz Kachori", desc: "Crisp onion-stuffed pastry, best eaten hot off the stall." },
      { name: "Kesar Lassi", desc: "Saffron lassi served in clay cups in Jodhpur." },
    ],
    tips: [
      "Start sightseeing at 8am — palaces get crowded and hot by noon.",
      "Negotiate at bazaars with a smile; prices are a conversation, not a contract.",
      "Amber Fort's light-and-sound show is underrated — worth the evening.",
      "Desert camps can run cold in winter nights; pack a layer.",
      "The 'Golden Triangle' loop (Jaipur–Agra–Delhi) pairs perfectly with Rajasthan.",
    ],
    experiences: ["rajasthan-heritage-walk"],
    trips: ["hyderabad-rajasthan"],
  },
  {
    slug: "goa",
    name: "Goa",
    region: "West India",
    tagline: "Where India unwinds.",
    description:
      "Palm-fringed beaches, whitewashed churches, river cruises and the slowest clock in India — Goa is a state of mind.",
    overview: [
      "Goa is India's great exhale. For five centuries it was a Portuguese colony, and the legacy is everywhere — churches that wouldn't look out of place in Lisbon, a cuisine that pairs kokum with vindaloo, and a pace of life that refuses to hurry.",
      "North Goa buzzes with beach shacks, sunset parties and surf schools; South Goa keeps its head down with quiet coves and heritage resorts. In between lie spice plantations, the old Latin Quarter of Fontainhas, and rivers that beg for a slow cruise at dusk.",
      "Come for the beaches, stay for the seafood, leave with a tan and a calmer heartbeat. Goa is the reward at the end of every Indian itinerary.",
    ],
    image: "goaBeach",
    gallery: ["goaPalm", "goaChurch", "goaWater", "andaman", "resort", "streetFood"],
    bestTime: [
      { months: "Nov – Feb", note: "Sunny days, balmy nights and the full beach season." },
      { months: "Mar – May", note: "Hotter and quieter; great room rates." },
      { months: "Jun – Oct", note: "Monsoon romance — green Goa, empty beaches, river cruises." },
    ],
    places: [
      { name: "Vagator & Anjuna", blurb: "Red cliffs, bohemian markets and the famous Anjuna flea market.", image: "goaBeach" },
      { name: "Palolem", blurb: "South Goa's crescent of sand and silent coves.", image: "andaman" },
      { name: "Old Goa Churches", blurb: "Basilica of Bom Jesus and Se Cathedral — UNESCO-listed.", image: "goaChurch" },
      { name: "Fontainhas", blurb: "Panjim's ochre lanes of Portuguese houses and art cafés.", image: "goaPalm" },
      { name: "Dudhsagar Falls", blurb: "The 'sea of milk' waterfall in the Western Ghats.", image: "waterfall" },
      { name: "Chapora River", blurb: "Sunset cruises past mangroves and the Chapora fort.", image: "goaWater" },
    ],
    thingsToDo: [
      "Sunset at Vagator's cliff above the Arabian Sea",
      "Scuba dive or snorkel at Grande Island",
      "Kayak through the mangroves of the Chapora river",
      "Flea-market mornings at Anjuna (Wednesdays) and Mapusa (Fridays)",
      "Heritage walk through Fontainhas and a feni tasting",
      "Catch a sunrise dolphin cruise off Palolem",
    ],
    food: [
      { name: "Goan Fish Curry", desc: "Kokum-tart, coconut-rich, always with fresh catch." },
      { name: "Pork Vindaloo", desc: "The fiery vinegar curry born of Portuguese 'carne de vinha d'alhos'." },
      { name: "Xacuti", desc: "Roasted-spice chicken curry with a dozen ground masalas." },
      { name: "Bebinca", desc: "The seven-layer caramelised dessert of Goan Christmases." },
      { name: "Feni", desc: "Cashew or coconut spirit — the local firewater, taken with respect." },
    ],
    tips: [
      "Scooters are the Goan way — most stays rent them for under ₹500 a day.",
      "North Goa parties, South Goa rests; choose your coast accordingly.",
      "Carry reef-safe sunscreen; the waters off Palolem are coral-rich.",
      "December–January books out fast; plan 3+ months ahead.",
      "Water taxis and river cruises are best at 5pm, when the light turns gold.",
    ],
    experiences: [],
    trips: ["hyderabad-goa"],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    region: "North India",
    tagline: "The land of high passes.",
    description:
      "Pangong's shifting blues, ancient monasteries, mountain roads at 4,000 metres — Ladakh is India at its most epic.",
    overview: [
      "Ladakh is what happens when the Himalaya and the Karakoram meet and refuse to compromise. At an average altitude of 3,500 metres, it is a high-altitude desert of moonscapes, turquoise lakes and monasteries that have clung to their cliffs for a thousand years.",
      "Leh is the gateway — a friendly town of Tibetan markets and kingly ruins. Around it: the Thiksey and Hemis monasteries, the magnetic hill, and the road to Khardung La. Further out lie the two great lakes — Pangong Tso, which changes colour every hour, and Tso Moriri, ringed by wildflowers and silence.",
      "It's a journey that asks for a little fitness and rewards with the most dramatic scenery in India. Ladakh doesn't just show you beauty — it makes you work for it, and that's exactly why you'll never forget it.",
    ],
    image: "pangong",
    gallery: ["monastery", "ladakhRoad", "spiti", "prayerFlags", "himalaya", "hussainSagar"],
    bestTime: [
      { months: "Jun – Sep", note: "The only full season — passes open, lakes are blue, monasteries are alive." },
      { months: "May & Oct", note: "Shoulder months: fewer crowds, cold nights, dramatic light." },
      { months: "Nov – Apr", note: "Fully snowed in; only Leh town operates (winter tourism for the brave)." },
    ],
    places: [
      { name: "Pangong Tso", blurb: "The 134-km lake that shifts from blue to green to gold.", image: "pangong" },
      { name: "Thiksey Monastery", blurb: "A 12-storey gompa with a giant seated Buddha.", image: "monastery" },
      { name: "Leh Palace", blurb: "The nine-storey royal ruin watching over Leh town.", image: "hussainSagar" },
      { name: "Nubra Valley", blurb: "Dunes, double-humped camels and the Diskit monastery.", image: "spiti" },
      { name: "Tso Moriri", blurb: "A high-altitude lake of rare stillness and birdlife.", image: "prayerFlags" },
      { name: "Khardung La", blurb: "One of the world's highest motorable passes at 5,359m.", image: "ladakhRoad" },
    ],
    thingsToDo: [
      "Sunset at Pangong Tso, then wake for the sunrise colour shift",
      "Morning prayers at Thiksey monastery's giant Buddha hall",
      "Drive the Khardung La pass and stop at the sand dunes of Hunder",
      "Ride a Bactrian camel through the Nubra desert",
      "River rafting on the Indus near Nimoo",
      "A homestay night in a Ladakhi village kitchen",
    ],
    food: [
      { name: "Thukpa", desc: "Noodle soup that is Ladakh's answer to cold nights." },
      { name: "Momos", desc: "Steamed dumplings, usually with a chutney that bites back." },
      { name: "Skyu", desc: "Hand-pulled pasta in a warming vegetable stew." },
      { name: "Butter Tea", desc: "Salty, energising and surprisingly good at altitude." },
      { name: "Chhang", desc: "The local barley beer, best shared with friends." },
    ],
    tips: [
      "Acclimatise: 24 quiet hours in Leh before any pass, and drink more water than feels necessary.",
      "Diamox helps; a doctor's advice before you go is better.",
      "June–July is the road-trip peak — book bikes and homestays early.",
      "Respect monastery etiquette: no shoes, no photos inside prayer halls.",
      "Mobile data works in towns only; download maps and playlists in Leh.",
    ],
    experiences: ["ladakh-road-adventure"],
    trips: ["hyderabad-ladakh"],
  },
];

/** Additional destinations for the index page (lightweight entries). */
export interface DestinationCard {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: ImageKey;
}

export const destinationCards: DestinationCard[] = [
  { slug: "hyderabad", name: "Hyderabad", region: "South India", description: "Pearls, palaces and the world's most famous biryani.", image: "charminar" },
  { slug: "kerala", name: "Kerala", region: "South India", description: "Houseboats, tea hills and slow water.", image: "backwaters" },
  { slug: "goa", name: "Goa", region: "West India", description: "Beaches, churches and a slower clock.", image: "goaBeach" },
  { slug: "kashmir", name: "Kashmir", region: "North India", description: "The valley that rewrites beautiful.", image: "dalLake" },
  { slug: "ladakh", name: "Ladakh", region: "North India", description: "High passes, blue lakes, ancient gompas.", image: "pangong" },
  { slug: "rajasthan", name: "Rajasthan", region: "West India", description: "Forts, palaces and desert gold.", image: "hawaMahal" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", region: "North India", description: "Mountain towns and pine forests.", image: "manali" },
  { slug: "uttarakhand", name: "Uttarakhand", region: "North India", description: "Rivers, temples and Himalayan trails.", image: "rishikesh" },
  { slug: "tamil-nadu", name: "Tamil Nadu", region: "South India", description: "Temple towers and coastal temples.", image: "tamilTemple" },
  { slug: "karnataka", name: "Karnataka", region: "South India", description: "Hampi's ruins and Bangalore's buzz.", image: "hampi" },
  { slug: "meghalaya", name: "Meghalaya", region: "Northeast India", description: "Living root bridges and living rains.", image: "meghalaya" },
  { slug: "andaman", name: "Andaman", region: "Islands", description: "White sand and coral in the Bay of Bengal.", image: "andaman" },
  { slug: "varanasi", name: "Varanasi", region: "North India", description: "The eternal city on the Ganga.", image: "varanasi" },
  { slug: "udaipur", name: "Udaipur", region: "West India", description: "The city of lakes and palaces.", image: "udaipur" },
  { slug: "jaipur", name: "Jaipur", region: "West India", description: "The pink city of forts and bazaars.", image: "hawaMahal" },
  { slug: "agra", name: "Agra", region: "North India", description: "Home to the Taj Mahal.", image: "tajMahal" },
];

export const regions = ["North India", "South India", "West India", "East India", "Northeast India", "Islands"];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}