/**
 * Curated Indian travel photography (Unsplash, free license).
 * Base URLs are stored; `photo(key, width)` appends responsive params.
 */
export const BASE = {
  hero: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", // Scenic road through lush green landscape - travel journey
  charminar: "https://images.unsplash.com/photo-1741545979534-02f59c742730",
  charminarCrowd: "https://images.unsplash.com/photo-1711102230980-5f3001c1a07b",
  golconda: "https://images.unsplash.com/photo-1568484085354-4e6149a3e658",
  oldCityMarket: "https://images.unsplash.com/photo-1711303916656-c443986182db",
  hussainSagar: "https://images.unsplash.com/photo-1712422813106-dfb845a8a7ed",
  laadBazaar: "https://images.unsplash.com/photo-1769634306787-7f2fff1cca7d",
  biryani: "https://images.unsplash.com/photo-1719239885399-f87d992e0f18",
  curry: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
  thali: "https://images.unsplash.com/photo-1625398407796-82650a8c135f",
  chai: "https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad",
  dalLake: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",
  shikara: "https://images.unsplash.com/photo-1569852837213-00d97a707a83",
  kashmirValley: "https://images.unsplash.com/photo-1627894485200-b92fb4353967",
  kashmirGreen: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557",
  gulmarg: "https://images.unsplash.com/photo-1568889753852-196c487a536e",
  pahalgam: "https://images.unsplash.com/photo-1641593758596-39b200b51e8d",
  houseboat: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8",
  backwaters: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  munnar: "https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4",
  keralaBeach: "https://plus.unsplash.com/premium_photo-1691675469394-f843e044e340",
  kathakali: "https://images.unsplash.com/photo-1741387793505-b4383d221324",
  hawaMahal: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c",
  amberFort: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3",
  amberPaths: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  jalMahal: "https://plus.unsplash.com/premium_photo-1697729529902-276ab321f391",
  desert: "https://plus.unsplash.com/premium_photo-1661963573455-ba0446e2cab9",
  udaipur: "https://images.unsplash.com/photo-1695956353120-54ce5e91632b",
  gwalior: "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7",
  goaBeach: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47",
  goaWater: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  goaPalm: "https://images.unsplash.com/photo-1648043353527-5b64e5396fb2",
  goaChurch: "https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82",
  pangong: "https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4",
  monastery: "https://plus.unsplash.com/premium_photo-1697730426664-f04d9916f700",
  ladakhRoad: "https://images.unsplash.com/photo-1636800877555-27dfdbf1ae6c",
  spiti: "https://plus.unsplash.com/premium_photo-1661952459513-c9e118559e98",
  andaman: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f",
  manali: "https://images.unsplash.com/photo-1597167231350-d057a45dc868",
  rishikesh: "https://images.unsplash.com/photo-1720819029162-8500607ae232",
  varanasi: "https://images.unsplash.com/photo-1561359313-0639aad49ca6",
  gangaAarti: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
  tamilTemple: "https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324",
  mahabalipuram: "https://images.unsplash.com/photo-1563715493579-e0b3e0493b60",
  hampi: "https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30",
  meghalaya: "https://images.unsplash.com/photo-1686472886489-1d2d7e08ff9c",
  tajMahal: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
  indiaGate: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  yoga: "https://images.unsplash.com/photo-1701709488066-8d32fe5871b8",
  rafting: "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92",
  prayerFlags: "https://images.unsplash.com/photo-1513614835783-51537729c8ba",
  spices: "https://plus.unsplash.com/premium_photo-1661337223133-a92f4f68d001",
  resort: "https://images.unsplash.com/photo-1549294413-26f195200c16",
  saris: "https://images.unsplash.com/photo-1634351356743-05de62a4b80b",
  himalaya: "https://plus.unsplash.com/premium_photo-1692386759833-3acf660742ad",
  khajuraho: "https://images.unsplash.com/photo-1606298855672-3efb63017be8",
  streetFood: "https://images.unsplash.com/photo-1552912470-ee2e96439539",
  waterfall: "https://images.unsplash.com/photo-1609276804051-8c5e906cc430",
  fortGate: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7",
} as const;

export type ImageKey = keyof typeof BASE;

export const ALTS: Record<string, string> = {
  hero: "A winding road through lush green hills and mountains, evoking the spirit of travel and journey",
  charminar: "The Charminar, Hyderabad's iconic four-minaret monument",
  charminarCrowd: "Visitors in the lanes around the Charminar in old Hyderabad",
  golconda: "Golconda Fort's ramparts against the Deccan sky",
  oldCityMarket: "A busy market lane in old Hyderabad",
  hussainSagar: "The Buddha statue standing in Hussain Sagar lake, Hyderabad",
  laadBazaar: "Colourful stalls of Laad Bazaar near Charminar",
  biryani: "A plate of Hyderabadi dum biryani with saffron rice",
  curry: "Slow-cooked Hyderabadi curry in a steel bowl",
  thali: "A traditional South Indian meal served on a banana leaf",
  chai: "Clay kulhads of hot masala chai",
  dalLake: "A houseboat on Dal Lake with snow mountains behind",
  shikara: "Shikara boats resting on Dal Lake, Srinagar",
  kashmirValley: "A hiker resting on a green slope in the Kashmir valley",
  kashmirGreen: "Forest-covered mountains of Kashmir",
  gulmarg: "The Gulmarg gondola cable car over the valley",
  pahalgam: "The Lidder river running through pine forest near Pahalgam",
  houseboat: "A traditional houseboat on the Alappuzha backwaters, Kerala",
  backwaters: "A boat drifting through palm-lined Kerala backwaters",
  munnar: "Tea plantations rolling over the hills of Munnar, Kerala",
  keralaBeach: "A palm-fringed beach in Kerala",
  kathakali: "A Kathakali dancer in traditional costume, Kerala",
  hawaMahal: "The pink sandstone facade of Hawa Mahal, Jaipur",
  amberFort: "Amber Fort rising above Jaipur's hills",
  amberPaths: "Zigzagging ramparts of Amber Fort",
  jalMahal: "Jal Mahal, the water palace on Man Sagar Lake, Jaipur",
  desert: "Camels crossing the Thar desert dunes at dusk",
  udaipur: "The City Palace on Lake Pichola, Udaipur at golden hour",
  gwalior: "An ancient Indian fort with sandstone ramparts",
  goaBeach: "The coastline of Vagator beach, North Goa",
  goaWater: "Calm water and palms along the Goan coast",
  goaPalm: "A palm-lined lane in Goa",
  goaChurch: "Our Lady of the Immaculate Conception Church, Old Goa",
  pangong: "The shifting blues of Pangong Tso lake, Ladakh",
  monastery: "Lamayuru monastery perched in the Ladakh mountains",
  ladakhRoad: "A highway cutting through the Ladakh desert",
  spiti: "The Spiti river winding through Himalayan valley",
  andaman: "White sand and palms on an Andaman island beach",
  manali: "A mountain town beneath snow peaks in Himachal Pradesh",
  rishikesh: "A suspension bridge over the Ganga at Rishikesh",
  varanasi: "Boats on the Ganges before the ghats of Varanasi",
  gangaAarti: "The evening Ganga aarti with lamps in Varanasi",
  tamilTemple: "The Brihadisvara temple tower, Tamil Nadu",
  mahabalipuram: "The Shore Temple at Mahabalipuram, Tamil Nadu",
  hampi: "The stone chariot at Vittala temple, Hampi",
  meghalaya: "A waterfall hidden in the forests of Meghalaya",
  tajMahal: "The Taj Mahal at sunrise, Agra",
  indiaGate: "India Gate under a pink Delhi sky",
  yoga: "Yoga at sunrise above a misty valley",
  rafting: "Rafting down a Himalayan river",
  prayerFlags: "Prayer flags above a frozen Himalayan lake",
  spices: "Heaps of spices at an Indian market",
  resort: "A palm-shaded pool at a luxury resort",
  saris: "Women in bright saris at a street festival",
  himalaya: "Snow-capped Himalayan peaks",
  khajuraho: "Carved sandstone temples of Khajuraho",
  streetFood: "A cook preparing street food over a hot pan",
  waterfall: "Waterfalls tumbling down a green mountain",
  fortGate: "The great gate of a Mughal fort in Delhi",
};

export function photo(key: keyof typeof BASE, width = 1600): string {
  return `${BASE[key]}?auto=format&fit=crop&w=${width}&q=78`;
}

/**
 * Generate responsive srcset and sizes for an image.
 * Returns { src, srcSet, sizes } for use in <img> elements.
 */
export function responsivePhoto(
  key: keyof typeof BASE,
  width = 1600,
  sizes = "(max-width: 479px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw",
): { src: string; srcSet: string; sizes: string } {
  const base = BASE[key];
  // Generate srcset with 3 quality tiers for modern browsers
  const widths = [400, 800, 1200, width];
  const srcSet = widths
    .map((w) => `${base}?auto=format&fit=crop&w=${w}&q=78 ${w}w`)
    .join(", ");
  // The largest size as the default src for older browsers
  const src = `${base}?auto=format&fit=crop&w=${width}&q=78`;
  return { src, srcSet, sizes };
}

/**
 * Preload hint for critical above-the-fold images.
 */
export function preloadHref(key: keyof typeof BASE, width = 1800): string {
  return `${BASE[key]}?auto=format&fit=crop&w=${width}&q=80`;
}

export function alt(key: keyof typeof BASE): string {
  return ALTS[key] ?? key;
}