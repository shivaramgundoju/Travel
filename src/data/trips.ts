import type { ImageKey } from "./images";

export interface TripReview {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface Trip {
  slug: string;
  title: string;
  route: string;
  duration: string;
  nights: string;
  price: string;
  priceNote: string;
  style: string[];
  image: ImageKey;
  gallery: ImageKey[];
  shortDescription: string;
  overview: string[];
  itinerary: { day: string; title: string; desc: string }[];
  accommodation: string;
  transport: string;
  meals: string;
  experiences: string[];
  included: string[];
  excluded: string[];
  reviews: TripReview[];
  faqs: { q: string; a: string }[];
}

export const travelStyles = ["Family", "Honeymoon", "Adventure", "Luxury", "Solo", "Weekend"];

export const trips: Trip[] = [
  {
    slug: "hyderabad-kerala",
    title: "Hyderabad to Kerala",
    route: "Hyderabad → Kochi → Alleppey → Munnar",
    duration: "5 Nights / 6 Days",
    nights: "5N/6D",
    price: "₹39,999",
    priceNote: "per person, twin sharing",
    style: ["Honeymoon", "Family", "Weekend"],
    image: "backwaters",
    gallery: ["houseboat", "munnar", "keralaBeach", "kathakali", "thali", "spices"],
    shortDescription:
      "Kochi's colonial lanes, a night on the Alleppey houseboat and the tea hills of Munnar — the classic Kerala slow-travel loop.",
    overview: [
      "Fly from Hyderabad into Kochi and trade the Deccan for coconut palms within hours. This is the journey that made Kerala famous: Fort Kochi's quiet streets, one unforgettable night drifting through the backwaters, and a sunrise over the tea estates of Munnar.",
      "We've paced it so you never spend two nights in the same place unless you want to, and every transfer is private and unhurried. Houseboat dinner, spice-garden lunch, hill-station evenings — six days that taste like a different life.",
    ],
    itinerary: [
      { day: "Day 1", title: "Hyderabad → Kochi", desc: "Fly to Kochi, settle into a heritage hotel in Fort Kochi, and take an evening walk past the Chinese fishing nets as they light up." },
      { day: "Day 2", title: "Fort Kochi", desc: "Morning heritage walk — the Dutch Palace, Jewish quarter and Santa Cruz Basilica. Afternoon Kathakali performance with a makeup-viewing session." },
      { day: "Day 3", title: "Kochi → Alleppey", desc: "Drive to Alleppey and board your private houseboat by noon. Cruise the backwaters through the afternoon; Kerala dinner on deck at anchor." },
      { day: "Day 4", title: "Alleppey → Munnar", desc: "Disembark after breakfast and climb through spice plantations to Munnar. Evening at leisure with tea-estate views." },
      { day: "Day 5", title: "Munnar tea country", desc: "Sunrise at a viewpoints, a guided tea-factory and plantation walk, then a picnic lunch above the clouds. Optional Ayurvedic massage in the evening." },
      { day: "Day 6", title: "Munnar → fly home", desc: "Scenic drive to Kochi airport (allow 4 hours) with a spice-market stop en route, or extend into a beach add-on at Varkala." },
    ],
    accommodation: "3–4★ heritage hotels in Fort Kochi and Munnar, plus one night in a premium private houseboat with A/C suite.",
    transport: "Private A/C car with driver throughout, plus flights (Hyderabad–Kochi) — bookable through us at current fares.",
    meals: "Breakfasts daily; houseboat lunch and dinner; one spice-garden lunch. Other meals at your choice — we'll share our favourites.",
    experiences: ["kerala-backwater-escape"],
    included: [
      "Private A/C transfers throughout Kerala",
      "4 nights' premium hotel stay + 1 night private houseboat",
      "Daily breakfast, houseboat meals, spice-garden lunch",
      "Fort Kochi heritage walk and Kathakali show",
      "Munnar tea-factory tour with guide",
      "All tolls, parking, driver allowances and GST",
    ],
    excluded: [
      "Flights (Hyderabad–Kochi)",
      "Lunches/dinners not listed",
      "Ayurvedic massage and personal expenses",
      "Camera fees at monuments",
    ],
    reviews: [
      { name: "Meera & Karthik", location: "Hyderabad", rating: 5, text: "Every transfer was on time, the houseboat night was dreamlike, and Munnar in the mist felt like a film set. Best trip we've taken.", date: "Feb 2026" },
      { name: "Suresh family", location: "Secunderabad", rating: 5, text: "Travelled with two kids and grandparents — the pacing was perfect. Plenty of stops, great hotels, zero stress.", date: "Dec 2025" },
    ],
    faqs: [
      { q: "Is this suitable for families with kids?", a: "Yes — the pace is gentle, the houseboat is a hit with children, and Munnar's plantation walks suit all ages. Car seats can be arranged." },
      { q: "Can we swap Munnar for the beach?", a: "Absolutely. Swap day 4–5 for Varkala or Marari beach instead of the hills — same price band." },
      { q: "What's the best season?", a: "October to March. Avoid the monsoon weeks if you want the houseboat cruise at its sunniest." },
    ],
  },
  {
    slug: "hyderabad-kashmir",
    title: "Hyderabad to Kashmir",
    route: "Hyderabad → Srinagar → Gulmarg → Pahalgam",
    duration: "6 Nights / 7 Days",
    nights: "6N/7D",
    price: "₹44,999",
    priceNote: "per person, twin sharing",
    style: ["Honeymoon", "Family", "Luxury"],
    image: "dalLake",
    gallery: ["shikara", "gulmarg", "pahalgam", "kashmirValley", "kashmirGreen", "himalaya"],
    shortDescription:
      "A houseboat on Dal Lake, the Gulmarg gondola and the pine meadows of Pahalgam — Kashmir's greatest hits with a local team.",
    overview: [
      "Kashmir is best travelled slowly and with people who know it — which is exactly why we built this journey around a houseboat on Dal Lake, two nights in Gulmarg, and unhurried days in Pahalgam.",
      "You'll wake to shikaras on the water, ride one of the world's highest cable cars, eat Wazwan under a walnut-wood ceiling, and still have time to just sit by the lake with kahwa. Warm, safe, and utterly cinematic.",
    ],
    itinerary: [
      { day: "Day 1", title: "Hyderabad → Srinagar", desc: "Fly into Srinagar. A private car takes you to your heritage houseboat on Dal Lake. Evening shikara ride as the mountains turn pink." },
      { day: "Day 2", title: "Srinagar old city", desc: "Morning at the Mughal gardens of Shalimar and Nishat, then the old city — Jami Masjid, the riverfront and a saffron-and-pashmina walk." },
      { day: "Day 3", title: "Srinagar → Gulmarg", desc: "Drive to Gulmarg (2 hrs). Afternoon at leisure, then a gondola ride up to Kongdori when the weather window is right." },
      { day: "Day 4", title: "Gulmarg high meadows", desc: "Full day in the meadow of flowers — gondola to Apharwat (weather permitting), pony rides, or simply snow and silence." },
      { day: "Day 5", title: "Gulmarg → Pahalgam", desc: "Drive the scenic route to Pahalgam. Afternoon by the Lidder river and a walk through the pine forests." },
      { day: "Day 6", title: "Pahalgam valleys", desc: "Optional pony trail to Baisaran — the 'mini Switzerland' meadows — or a lazy day of river time and village walks." },
      { day: "Day 7", title: "Pahalgam → Srinagar → home", desc: "Morning drive back to Srinagar airport (4 hrs) with a chai stop en route. Fly home with a hundred photographs and one new favourite tea." },
    ],
    accommodation: "Heritage houseboat (2 nights) on Dal Lake, premium hotel in Gulmarg, river-view resort in Pahalgam.",
    transport: "Private A/C car with a local driver throughout, plus Hyderabad–Srinagar flights (bookable with us).",
    meals: "Breakfasts daily; one Wazwan-style dinner at the houseboat. Other meals at handpicked local restaurants — we'll mark the map.",
    experiences: ["kashmir-village-experience"],
    included: [
      "Private A/C transfers and sightseeing car",
      "2 nights heritage houseboat + 2 nights Gulmarg + 2 nights Pahalgam",
      "Daily breakfast and one Wazwan dinner",
      "Dal Lake shikara ride",
      "Gulmarg gondola (Phase 1) tickets",
      "All permits, tolls, parking and GST",
    ],
    excluded: [
      "Flights (Hyderabad–Srinagar)",
      "Pony rides and optional activities",
      "Lunches and dinners not listed",
      "Personal expenses and tips",
    ],
    reviews: [
      { name: "Kavita Sharma", location: "Delhi", rating: 5, text: "The houseboat mornings were pure magic. Our local driver Rizwan felt like family by day three. Kashmir at its warmest.", date: "Dec 2025" },
      { name: "Rohan & Diya", location: "Hyderabad", rating: 5, text: "Honeymoon perfection. Gulmarg in snow, Pahalgam in sun, and the Wazwan dinner was the best meal of our lives.", date: "Feb 2026" },
    ],
    faqs: [
      { q: "Is Kashmir safe to travel now?", a: "Yes. Tourist areas — Srinagar, Gulmarg, Pahalgam — are welcoming and well-policed. Our ground team is local and in constant touch with you." },
      { q: "When is the best time?", a: "April–June for blossoms, September–October for autumn colours, December–February for snow in Gulmarg." },
      { q: "What about the cold?", a: "Houseboats and hotels are heated, and we provide guidance on layers. Winter nights drop to -5°C; summers are mild and pleasant." },
    ],
  },
  {
    slug: "hyderabad-rajasthan",
    title: "Hyderabad to Rajasthan",
    route: "Hyderabad → Jaipur → Udaipur → Jaisalmer",
    duration: "7 Nights / 8 Days",
    nights: "7N/8D",
    price: "₹49,999",
    priceNote: "per person, twin sharing",
    style: ["Family", "Honeymoon", "Luxury"],
    image: "hawaMahal",
    gallery: ["amberFort", "jalMahal", "udaipur", "desert", "amberPaths", "saris"],
    shortDescription:
      "Pink Jaipur, lake-set Udaipur and a night under the Thar stars — the maharaja circuit, minus the maharaja budget.",
    overview: [
      "The grand tour of Rajasthan in one elegant loop: two days in pink Jaipur with Amber Fort at sunrise, two in Udaipur with a Lake Pichola boat at dusk, and a finale in the Thar desert with a camel caravan and a campfire dinner under impossible stars.",
      "This is the journey for first-timers to North India who want the colour, the forts and the romance without feeling rushed — every transfer is private, every hotel handpicked, every day paced for golden light.",
    ],
    itinerary: [
      { day: "Day 1", title: "Hyderabad → Jaipur", desc: "Fly to Jaipur and settle into a heritage hotel inside the walled city. Evening orientation walk through the pink bazaars." },
      { day: "Day 2", title: "Amber & the Pink City", desc: "Sunrise at Amber Fort and its mirrored Sheesh Mahal. Afternoon at Hawa Mahal, City Palace and Jantar Mantar — ending with chai overlooking the bazaars." },
      { day: "Day 3", title: "Jaipur → Udaipur", desc: "Fly or drive to Udaipur (flight recommended). Evening boat ride on Lake Pichola as the City Palace lights up." },
      { day: "Day 4", title: "Udaipur, city of lakes", desc: "Morning at the City Palace museum, then the crystal gallery, Saheliyon-ki-Bari and a quiet afternoon in the old city's art lanes." },
      { day: "Day 5", title: "Udaipur → Jaisalmer", desc: "Fly to Jaisalmer via Delhi. Sunset at the golden fort's ramparts, dinner in a rooftop restaurant inside the fort walls." },
      { day: "Day 6", title: "The golden fort", desc: "Morning inside the living fort — palaces, Jain temples and havelis. Afternoon at the Gadisar lake and the old mansions." },
      { day: "Day 7", title: "Thar desert camp", desc: "Drive to the dunes for a camel safari at golden hour, folk music, and dinner under a sky with more stars than you've ever seen." },
      { day: "Day 8", title: "Desert → Jaisalmer → home", desc: "Sunrise tea on the dunes, return to Jaisalmer, and fly home via Delhi — or extend into Jodhpur and Agra." },
    ],
    accommodation: "Heritage havelis and palace hotels in Jaipur and Udaipur, a fort-view hotel in Jaisalmer, and one night in a premium desert camp.",
    transport: "Private A/C car for all road legs, domestic flights (bookable with us), and desert transfers.",
    meals: "Breakfasts daily; desert-camp dinner with folk performance. Other meals at handpicked heritage restaurants.",
    experiences: ["rajasthan-heritage-walk"],
    included: [
      "All private A/C transfers",
      "7 nights' heritage stay + 1 night desert camp",
      "Daily breakfasts and desert dinner",
      "Amber Fort and City Palace (Udaipur) entry with guide",
      "Lake Pichola boat ride",
      "Camel safari, folk show and all GST",
    ],
    excluded: [
      "Domestic flights (Jaipur/Udaipur/Jaisalmer legs)",
      "Lunches and dinners not listed",
      "Monument camera fees",
      "Personal shopping and tips",
    ],
    reviews: [
      { name: "The Kapoor family", location: "Hyderabad", rating: 5, text: "Three generations, eight days, zero complaints — the desert camp was the highlight for the kids and the grandparents alike.", date: "Dec 2025" },
      { name: "Priya & Arjun", location: "Hyderabad", rating: 5, text: "The Udaipur boat ride at dusk and waking up inside Jaisalmer fort — pure magic. Every hotel was beautiful.", date: "Nov 2025" },
    ],
    faqs: [
      { q: "Is Rajasthan hot?", a: "October–March is pleasant (15–30°C). Summers are extreme; we don't recommend April–June unless you're desert-hardy." },
      { q: "Can kids manage the forts?", a: "Yes — most forts have ramps or vehicles part-way, and the desert camp is pure adventure for children." },
      { q: "Why the internal flights?", a: "Jaipur–Udaipur–Jaisalmer by road is 12+ hours total; flying keeps two full days for the actual sightseeing." },
    ],
  },
  {
    slug: "hyderabad-goa",
    title: "Hyderabad to Goa",
    route: "Hyderabad → North Goa → South Goa",
    duration: "4 Nights / 5 Days",
    nights: "4N/5D",
    price: "₹24,999",
    priceNote: "per person, twin sharing",
    style: ["Weekend", "Family", "Honeymoon"],
    image: "goaBeach",
    gallery: ["goaPalm", "goaChurch", "goaWater", "andaman", "resort", "streetFood"],
    shortDescription:
      "Two coasts, one perfect long weekend — North Goa's energy, South Goa's calm, and the best seafood in between.",
    overview: [
      "The shortest flight from Hyderabad lands you in a different civilisation. Two nights in North Goa for beach shacks and sunset cliffs, two nights in the south for silent coves and poolside evenings — this is the reset button Hyderabadis have been pressing for years.",
      "We include scooters or car, a spice-plantation lunch, a river cruise at dusk, and a table at the seafood places locals actually rate.",
    ],
    itinerary: [
      { day: "Day 1", title: "Hyderabad → North Goa", desc: "Morning flight to Goa (65 minutes!), check into a Vagator or Anjuna resort, and claim your beach chair by afternoon." },
      { day: "Day 2", title: "North Goa high life", desc: "Sunset at Vagator cliff, Anjuna flea market (Wednesdays), and dinner at the shack the guidebooks haven't found yet." },
      { day: "Day 3", title: "North → South Goa", desc: "Morning at Chapora fort, then the coastal drive south. Afternoon pool time at your Palolem or Agonda stay." },
      { day: "Day 4", title: "South Goa slow day", desc: "Optional dolphin cruise at dawn, kayaking the mangroves, or a silent day of beach and books. Sunset catamaran if the group's keen." },
      { day: "Day 5", title: "Goa → home", desc: "Breakfast by the water, a last swim, and the short drive to the airport for your afternoon flight back." },
    ],
    accommodation: "Boutique resorts: two nights in North Goa, two nights in South Goa, both with pools and beach access.",
    transport: "Private A/C transfers plus scooters or a self-drive car (included). Flights Hyderabad–Goa bookable with us.",
    meals: "Breakfasts daily. For everything else, your guide's Goa eating map — 30 spots, zero tourist traps.",
    experiences: [],
    included: [
      "Private airport transfers",
      "Scooter/car for the full stay with fuel",
      "4 nights' boutique resort stay",
      "Daily breakfasts",
      "Sunset river cruise",
      "All GST and service charges",
    ],
    excluded: ["Flights (Hyderabad–Goa)", "Water sports and dolphin cruises", "Lunches and dinners", "Personal expenses"],
    reviews: [
      { name: "Nikhil & team", location: "Hyderabad", rating: 5, text: "The perfect long-weekend formula. North for the vibe, south for the calm — exactly as promised, nothing overbooked.", date: "Jan 2026" },
      { name: "Fernandes family", location: "Hyderabad", rating: 5, text: "Kids loved the scooters-and-beach days as much as we did. The plantation lunch was a lovely surprise.", date: "Dec 2025" },
    ],
    faqs: [
      { q: "When is Goa best?", a: "November to February is peak season. March–May is hot but quiet with great rates; June–September is monsoon." },
      { q: "How far is it from Hyderabad?", a: "A 65-minute flight — closer than most Indian road trips. Perfect for a 4-night reset." },
      { q: "Scooter or car?", a: "Scooters are the classic Goan way and included; we'll arrange a car instead for families or non-riders." },
    ],
  },
  {
    slug: "hyderabad-ladakh",
    title: "Hyderabad to Ladakh",
    route: "Hyderabad → Leh → Nubra → Pangong",
    duration: "6 Nights / 7 Days",
    nights: "6N/7D",
    price: "₹52,999",
    priceNote: "per person, twin sharing",
    style: ["Adventure", "Solo", "Family"],
    image: "pangong",
    gallery: ["ladakhRoad", "spiti", "monastery", "prayerFlags", "himalaya", "gulmarg"],
    shortDescription:
      "The full Ladakh loop — high passes, desert valleys, Bactrian camels and two nights by the blue of Pangong Tso.",
    overview: [
      "Ladakh from Hyderabad is two flights and a world away. We've engineered the classic high-altitude loop with the acclimatisation that makes or breaks it: two nights in Leh before any pass, a pace that respects 4,000 metres, and vehicles with oxygen support.",
      "You'll cross Khardung La, camp among the dunes of Nubra, ride a Bactrian camel, and spend a night at Pangong Tso watching the lake turn through colours you didn't know existed. The hardest part is leaving.",
    ],
    itinerary: [
      { day: "Day 1", title: "Hyderabad → Delhi → Leh", desc: "Fly via Delhi into Leh at 3,500m. Rest day one — hydration, light walks, and an early night at your heritage stay." },
      { day: "Day 2", title: "Leh acclimatisation", desc: "Gentle morning at Leh palace and the market; afternoon rest. Your body earns the altitude, slowly." },
      { day: "Day 3", title: "Leh → Nubra via Khardung La", desc: "Over one of the world's highest motorable passes (5,359m) into the Nubra valley. Evening at the Hunder dunes." },
      { day: "Day 4", title: "Nubra valley", desc: "Bactrian camel ride on the white desert, Diskit monastery's giant Buddha, and a slow afternoon among poplar groves." },
      { day: "Day 5", title: "Nubra → Pangong Tso", desc: "The long gorgeous drive past Shayok. Arrive at the lake as the light turns gold — dinner with a view you'll never forget." },
      { day: "Day 6", title: "Pangong → Leh", desc: "Sunrise colour show over the lake, then back over Chang La to Leh. Evening celebration dinner in the old town." },
      { day: "Day 7", title: "Thiksey → fly home", desc: "Morning prayers at Thiksey monastery before your flight via Delhi — arriving home with the highest stories." },
    ],
    accommodation: "Boutique hotels in Leh, a desert-side camp in Nubra and a lakeside camp at Pangong — all with proper heating.",
    transport: "Private SUVs with experienced Ladakhi drivers, oxygen support, and all permits. Flights bookable with us.",
    meals: "All breakfasts and dinners at your stays; lunches en route at trusted restaurants. Ladakhi home-cooking nights included.",
    experiences: ["ladakh-road-adventure"],
    included: [
      "All road travel in private SUVs",
      "6 nights' stay (Leh, Nubra, Pangong) with breakfast and dinner",
      "Inner Line permits and environmental fees",
      "Experienced Ladakhi driver-guide",
      "Bactrian camel ride",
      "Oxygen support and first-aid kit in every vehicle",
    ],
    excluded: ["Flights (Hyderabad–Delhi–Leh)", "Lunches", "Rafting add-on", "Personal expenses and tips"],
    reviews: [
      { name: "Aditya Menon", location: "Chennai", rating: 5, text: "The acclimatisation pacing was spot on — our whole group felt great the entire trip. Pangong at sunrise is the best thing I've seen in India.", date: "Sep 2025" },
      { name: "The Reddy family", location: "Hyderabad", rating: 5, text: "We were nervous taking kids to 4,000m, but the team's care and the oxygen support made it smooth. An epic family adventure.", date: "Jun 2025" },
    ],
    faqs: [
      { q: "Altitude sickness risk?", a: "Our 2-day Leh acclimatisation, slow drives and oxygen support keep it manageable. We also share a pre-trip health checklist and advise on Diamox." },
      { q: "Best time?", a: "June to late September. July–August is peak; September has the clearest skies." },
      { q: "Suitable for kids?", a: "Children above 8 typically do well with our pacing. Please discuss with us and your paediatrician before booking." },
    ],
  },
  {
    slug: "hyderabad-andaman",
    title: "Hyderabad to Andaman",
    route: "Hyderabad → Port Blair → Havelock",
    duration: "5 Nights / 6 Days",
    nights: "5N/6D",
    price: "₹46,999",
    priceNote: "per person, twin sharing",
    style: ["Honeymoon", "Family", "Weekend"],
    image: "andaman",
    gallery: ["keralaBeach", "resort", "goaWater", "goaPalm", "waterfall", "houseboat"],
    shortDescription:
      "Cellular Jail history, Radhanagar's white sand and snorkelling over living coral — India's island escape.",
    overview: [
      "The Andamans are India's answer to the Maldives — minus the passport. Start in Port Blair with the moving history of the Cellular Jail, then ferry to Havelock for two days of the beach that keeps winning 'best in Asia' awards.",
      "Snorkel over coral gardens, kayak through mangroves at dusk, and eat fresh catch on the sand. It's a longer flight than Goa and worth every minute of it.",
    ],
    itinerary: [
      { day: "Day 1", title: "Hyderabad → Port Blair", desc: "Fly to Port Blair, settle in, and visit the Cellular Jail in time for the moving light-and-sound show." },
      { day: "Day 2", title: "Port Blair → Havelock", desc: "Morning ferry to Havelock island. Afternoon on Radhanagar beach — often ranked among Asia's best." },
      { day: "Day 3", title: "Coral & coast", desc: "Boat to Elephant Beach for snorkelling over coral gardens, or a scuba intro for the brave. Sunset at Radhanagar again (you will)." },
      { day: "Day 4", title: "Havelock slow day", desc: "Kayak the mangroves at dawn, a village lunch, and pure island time. Optional night beach walk to see bioluminescent plankton." },
      { day: "Day 5", title: "Havelock → Port Blair", desc: "Ferry back, then the afternoon at Ross Island's ruins or the Anthropological Museum. Farewell seafood dinner." },
      { day: "Day 6", title: "Fly home", desc: "Breakfast, a last coconut, and the flight back to Hyderabad with sand still in your shoes." },
    ],
    accommodation: "Beachfront resorts on Havelock and a comfortable heritage hotel in Port Blair.",
    transport: "All ferries (premium deck), island transfers and private A/C cars. Flights bookable with us.",
    meals: "Breakfasts daily. Seafood dinners on the beach at your choice — we'll point you to the catch of the day.",
    experiences: [],
    included: [
      "All ferry tickets (premium class)",
      "5 nights' beachfront stay",
      "Daily breakfasts",
      "Radhanagar and Elephant Beach transfers",
      "Snorkelling gear and guided session",
      "Cellular Jail entry and show tickets",
    ],
    excluded: ["Flights (Hyderabad–Port Blair)", "Scuba diving add-on", "Lunches and dinners", "Personal expenses"],
    reviews: [
      { name: "Anjali & Dev", location: "Hyderabad", rating: 5, text: "Radhanagar at sunset is worth the whole trip. The snorkelling, the kayaking, the seafood — we're already planning the return.", date: "Apr 2026" },
      { name: "Mohan family", location: "Hyderabad", rating: 5, text: "Smooth ferries, great resort, and the kids are still talking about the coral fish. Flawless organisation.", date: "May 2026" },
    ],
    faqs: [
      { q: "Is the ferry rough?", a: "The Port Blair–Havelock ferry is a large, comfortable catamaran. Premium-class seats are included; seasickness tablets are available onboard." },
      { q: "Best season?", a: "October to May. December–February is peak; April–May is hot but the water is bath-warm and clear." },
      { q: "Scuba for beginners?", a: "Yes — Havelock has professional dive schools and shallow, calm sites perfect for first dives." },
    ],
  },
];

export function getTrip(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}