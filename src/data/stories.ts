import type { ImageKey } from "./images";

export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; title: string; items: string[] }
  | { type: "image"; image: ImageKey; caption: string };

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: ImageKey;
  destination?: string;
  blocks: StoryBlock[];
}

export const storyCategories = ["Travel Guides", "Food", "Culture", "Adventure", "Destinations"];

export const stories: Story[] = [
  {
    slug: "soul-of-old-hyderabad",
    title: "The Soul of Old Hyderabad",
    subtitle: "Beyond the biryani lists and Instagram arches, the old city keeps a slower, sweeter rhythm. You just have to walk it.",
    category: "Culture",
    author: "Sana Mirza",
    date: "August 12, 2026",
    readTime: "7 min read",
    image: "oldCityMarket",
    destination: "hyderabad",
    blocks: [
      {
        type: "p",
        text: "Everyone comes to old Hyderabad for the Charminar and stays for the biryani. Fair enough — both are extraordinary. But the old city's real magic is quieter than its monuments: it lives in the half-open doorways of 200-year-old homes, in the way a chai-wallah remembers your order from a visit three years ago, and in the smell of attar and woodsmoke that follows you down every lane.",
      },
      {
        type: "p",
        text: "The best way to meet that Hyderabad is to arrive before the tour buses do. At 7am, the Laad Bazaar is still rolling up its shutters, and the men who string jasmine for the day's weddings are already at work. The Charminar, freed of crowds, looks less like a postcard and more like what it is: a 400-year-old neighbour keeping watch over the city it built.",
      },
      { type: "h2", text: "Start with your stomach" },
      {
        type: "p",
        text: "Old Hyderabad's day is measured in meals, and you should be too. Begin with Irani chai and Osmania biscuits at a café that has not changed its menu since 1954. Then follow the smell of smoke to a kebab counter hidden in a courtyard. By noon, the biryani houses under the Charminar are filling up — go early, order the kacchi, and watch the handis being unsealed. The ritual alone is worth the trip.",
      },
      {
        type: "quote",
        text: "You don't visit old Hyderabad. You taste it, you walk it, you let it keep a piece of you.",
      },
      { type: "h2", text: "The lanes have names you'll never find on a map" },
      {
        type: "p",
        text: "Gulzar Houz, Purani Haveli, the road of the coppersmiths, the street of the pearl-stringers — old Hyderabad names its lanes after the work that happens in them. Spend an afternoon letting one trade lead to the next: watch pearls being graded under a magnifying lamp, lac bangles being coaxed into colour over a flame, and silver being hammered into wedding jewellery that will outlive us all.",
      },
      {
        type: "list",
        title: "A slow afternoon, old-city style",
        items: [
          "Climb the Charminar at 6pm for the golden-hour call to prayer",
          "Drink Irani chai at a 70-year-old café and order nothing else",
          "Watch bangles being made on the Laad Bazaar's side lanes",
          "End at the Chowmahalla Palace courtyard as it lights up",
        ],
      },
      { type: "h2", text: "Stay for the night that follows" },
      {
        type: "p",
        text: "As the bazaars close, the old city exhales. Families gather on rooftops, the shehnai from a nearby wedding drifts across the lanes, and the biryani houses — now serving their second sitting — glow like lanterns. This is the Hyderabad the guidebooks hint at and the films borrow from. Come for the day if you must; stay for the night if you can. The old city rewards the patient.",
      },
    ],
  },
  {
    slug: "places-near-hyderabad",
    title: "10 Places to Visit Near Hyderabad",
    subtitle: "Weekend escapes within four hours of the city — forts, forests, temples and one very photogenic waterfall.",
    category: "Travel Guides",
    author: "Rahul Deshpande",
    date: "July 28, 2026",
    readTime: "9 min read",
    image: "waterfall",
    destination: "hyderabad",
    blocks: [
      {
        type: "p",
        text: "Hyderabadis love their city, but even we need a change of air. The good news: the Deccan around Hyderabad is studded with escapes that most tourists never reach — ruined cities, forested hills, and waterfalls that appear out of nowhere in the monsoon. Here are ten of our favourites, all within a day's drive.",
      },
      { type: "h2", text: "Within two hours" },
      {
        type: "list",
        title: "The quick hits",
        items: [
          "Bidar — a living fort-city with 500-year-old monuments and the best jowar roti you'll ever eat",
          "Medak — the soaring Gothic cathedral and the quiet lake town around it",
          "Nagarjuna Sagar — India's largest masonry dam, with the island museum that rose above the waters",
          "Keesaragutta — a hilltop Shiva temple wrapped in forest, lovely at sunrise",
        ],
      },
      { type: "h2", text: "The heritage circuit" },
      {
        type: "p",
        text: "For a deeper dive, head to the ruins of the Kakatiya dynasty at Warangal — the thousand-pillared temple and the fort's carved gateways survive remarkably intact. An hour beyond, the Ramappa temple is a UNESCO site and one of the most underrated buildings in India. The stonework is so fine that the temple seems to float.",
      },
      {
        type: "quote",
        text: "The best thing about Hyderabad's surrounds is that nobody has told the rest of the world yet.",
      },
      { type: "h2", text: "Monsoon magic" },
      {
        type: "p",
        text: "Between July and September, the hills around Hyderabad turn a shade of green you won't believe. Kuntala — Telangana's tallest waterfall — thunders at the Maharashtra border, while Ananthagiri's coffee estates fill with mist. The waterfalls at Mallela Theertham need a 4x4 and a little nerve, but the swim at the bottom is your reward.",
      },
      { type: "h2", text: "The overnight favourites" },
      {
        type: "p",
        text: "If you have a weekend, spend one night at a resort in the Ananthagiri hills or push to the Yadagirigutta temple town. For something completely different, the basalt columns of the Deccan traps near Sangareddy look like something from another planet — photographers, take note. Every one of these is reachable on a full tank and a Saturday-morning start.",
      },
    ],
  },
  {
    slug: "first-time-kashmir",
    title: "A First-Timer's Guide to Kashmir",
    subtitle: "Everything I wish I'd known before my first trip to the valley — from the gondola tickets to the art of the noon chai.",
    category: "Travel Guides",
    author: "Sana Mirza",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: "shikara",
    destination: "kashmir",
    blocks: [
      {
        type: "p",
        text: "The first thing that surprises you about Kashmir is not the beauty — you've seen the photographs — it's the welcome. From the airport to the houseboat, everyone wants to know where you're from, whether you've had kahwa, and whether you're enjoying 'our valley'. It takes about a day to realise you're not a tourist here. You're a guest.",
      },
      { type: "h2", text: "Where to base yourself" },
      {
        type: "p",
        text: "Stay on a houseboat on Dal Lake at least one night. Yes, they're a little theatrical — that's the point. The real magic is the morning: shikaras gliding past your window, vendors selling vegetables from boats, mist lifting off the water while the Zabarwan mountains catch the sun. Then move inland. Srinagar's old city, Gulmarg's meadows and Pahalgam's river deserve their own nights.",
      },
      {
        type: "quote",
        text: "Kashmir doesn't show you everything at once. It unfolds — a ridge at a time, a season at a time.",
      },
      { type: "h2", text: "The practical things" },
      {
        type: "list",
        title: "Notes from the road",
        items: [
          "The Gulmarg gondola sells out fast — book Phase 1 tickets the evening before",
          "Carry cash; card machines vanish outside Srinagar's main markets",
          "Mobile networks fade in the valleys — download maps and music before you leave the city",
          "Pashmina prices vary tenfold — buy from government emporiums or known houses",
          "Photography at some shrines and temples is restricted — ask before you click",
        ],
      },
      { type: "h2", text: "Eat like the valley does" },
      {
        type: "p",
        text: "Skip the hotel buffet and go looking for Wazwan — the 36-course royal feast that Kashmiri families serve at weddings. Even a trimmed version — Rogan Josh, Gushtaba, seekh kebabs and saffron rice — will be the best meal of your trip. Save room for noon chai (yes, it's pink, salty and wonderful) and finish every day with kahwa under a blanket.",
      },
      { type: "h2", text: "When to go" },
      {
        type: "p",
        text: "There is no bad season, only different Kashmir. April to June brings blossom and mild days; September and October paint the chinar trees gold; December to February buries Gulmarg in the snow that makes it one of Asia's great winter playgrounds. Go twice. The valley asks for it.",
      },
    ],
  },
  {
    slug: "48-hours-jaipur",
    title: "48 Hours in Jaipur",
    subtitle: "The pink city, compressed into two perfect days — palaces before the crowds, bazaars after the heat.",
    category: "Travel Guides",
    author: "Kabir Anand",
    date: "May 30, 2026",
    readTime: "6 min read",
    image: "hawaMahal",
    destination: "rajasthan",
    blocks: [
      {
        type: "p",
        text: "Jaipur rewards early risers and punishes the late. The palaces and bazaars that define the pink city are at their best — and their emptiest — in the first two hours after sunrise, when the sandstone glows and the shopkeepers are still rolling out their carpets. Here's how to spend 48 hours without queueing away half of them.",
      },
      { type: "h2", text: "Day one: the classics, done properly" },
      {
        type: "p",
        text: "Start at 8am with Hawa Mahal — not from the road, but from the café across the street that owns the rooftop view. Then drive out to Amber Fort before the tour buses arrive, and give the Sheesh Mahal the ten quiet minutes it deserves. By noon you'll be back in the walled city for a pyaaz kachori breakfast that will ruin all future breakfasts.",
      },
      {
        type: "quote",
        text: "The secret to Jaipur is simple: sunrise belongs to you, noon belongs to the crowds.",
      },
      { type: "h2", text: "The afternoon shift" },
      {
        type: "p",
        text: "When the heat peaks, do what the maharajas did — retreat indoors. The City Palace museum, Jantar Mantar's astronomical instruments and the Anokhi museum of prints are all cool, calm and genuinely fascinating. End the day at Jal Mahal, watching the water palace turn gold from the lakeside at 6pm sharp.",
      },
      { type: "h2", text: "Day two: bazaars and beyond" },
      {
        type: "p",
        text: "Spend the morning in Johari Bazaar watching gem-cutters at work (buying optional, marvelling compulsory), then walk the lanes of Bapu Bazaar for textiles and Mojari shoes. After lunch, escape the city entirely — thirty minutes out, the Samode palace and its painted halls are a fraction of Amber's crowds with twice the romance.",
      },
      { type: "list", title: "The don't-miss list", items: ["Hawa Mahal at 8am, from a rooftop café", "Amber Fort's Sheesh Mahal", "Pyaaz kachori in the old city", "Jal Mahal at golden hour", "A block-printing workshop in the walled city"] },
    ],
  },
  {
    slug: "kerala-beyond-backwaters",
    title: "Kerala Beyond the Backwaters",
    subtitle: "Everyone knows the houseboats. Fewer know the cliff beaches, the mountain villages and the food that follows you home.",
    category: "Food",
    author: "Kabir Anand",
    date: "April 18, 2026",
    readTime: "7 min read",
    image: "munnar",
    destination: "kerala",
    blocks: [
      {
        type: "p",
        text: "Kerala sells itself on houseboats and the brochures are not wrong — a night on the Alleppey backwaters is one of the great Indian experiences. But stay longer and Kerala reveals a second act: cliff-top beaches where the Arabian Sea pounds 30 metres below your café table, mountain villages wrapped in tea and mist, and a food culture that quietly outperforms every state in the south.",
      },
      { type: "h2", text: "The coast that doesn't make the posters" },
      {
        type: "p",
        text: "Varkala is the surprise. A two-hour drive from the backwaters, it's a strip of cliff town where guesthouses and cafés hang over the sea, and a beach at the bottom waits for your post-dinner swim. It draws yoga teachers, backpackers and families in equal measure — and the sunset from the cliff path, with fishermen hauling their catch below, is worth the trip alone.",
      },
      {
        type: "quote",
        text: "The backwaters teach you stillness. Varkala teaches you how to end a day.",
      },
      { type: "h2", text: "Up into the hills" },
      {
        type: "p",
        text: "From the coast, the road climbs through spice gardens into the tea country around Munnar. Skip the main viewpoints and take the plantation roads instead — the estate workers will wave you past, the air smells of tea leaf and woodsmoke, and every bend frames a landscape you'll want to live inside. Stay in a planter's bungalow if you can; the verandah breakfasts are legendary.",
      },
      { type: "h2", text: "Eat your way through" },
      {
        type: "list",
        title: "The Kerala food shortlist",
        items: [
          "Appam and stew at a roadside thattukada (food cart)",
          "Karimeen pollichathu — pearl spot fish in a banana leaf",
          "A sadya lunch on a banana leaf, eaten with your right hand",
          "Puttu and kadala at 7am, ideally in the hills",
          "Fresh toddy with karimeen fry at a licensed toddy shop",
        ],
      },
      {
        type: "p",
        text: "The practical advice: give Kerala a week, not three days. Three days gets you the postcard; seven gets you the state. And whatever you do, don't skip the hills — the coast will still be there when you come back down.",
      },
    ],
  },
  {
    slug: "ultimate-ladakh-road-trip",
    title: "The Ultimate Ladakh Road Trip",
    subtitle: "Passes, lakes and 4,000-metre breakfasts — the complete guide to driving the world's most dramatic highway.",
    category: "Adventure",
    author: "Rahul Deshpande",
    date: "March 22, 2026",
    readTime: "10 min read",
    image: "ladakhRoad",
    destination: "ladakh",
    blocks: [
      {
        type: "p",
        text: "There are road trips, and then there is Ladakh. At 4,000 metres, with oxygen at two-thirds strength and the landscape operating at full volume, the drive from Leh to Nubra to Pangong is less a journey than a geological event. Here is everything we learned from running it, season after season.",
      },
      { type: "h2", text: "The golden rule: acclimatise" },
      {
        type: "p",
        text: "Every ruined Ladakh trip I've seen was ruined by the same mistake — rushing to altitude. Your body needs two quiet nights in Leh before it will forgive you a pass. Walk slowly, drink water like it's your job, skip alcohol for the first two days, and let the schedule breathe. The mountains will still be there on day three, and you'll actually enjoy them.",
      },
      {
        type: "quote",
        text: "Ladakh doesn't test your fitness. It tests your patience — and rewards it.",
      },
      { type: "h2", text: "The loop, demystified" },
      {
        type: "list",
        title: "The classic five days",
        items: [
          "Day 1–2: Leh — palace, market, monasteries, rest",
          "Day 3: Khardung La to Nubra — dunes, camels, Diskit",
          "Day 4: Nubra to Pangong — the long gorgeous drive",
          "Day 5: Pangong sunrise, back over Chang La to Leh",
        ],
      },
      { type: "h2", text: "What to actually pack" },
      {
        type: "p",
        text: "Layers beat bulk: a warm mid-layer, a windproof shell and a down jacket for the evenings. Sunglasses are non-negotiable — the light at altitude is ferocious. Lip balm, moisturiser and a small first-aid kit will earn their space. And bring more memory cards than you think you need; you will shoot through them.",
      },
      { type: "h2", text: "When the road calls again" },
      {
        type: "p",
        text: "The season runs June to late September, with September offering the clearest skies and the most settled weather. Go once and you'll understand why people do it every year — Ladakh is not a place you visit. It's a place you collect, one pass at a time, and carry home in photographs you'll bore your friends with for decades.",
      },
    ],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}