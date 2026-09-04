// Fetch candidate photos from Unsplash's public napi search endpoint.
// Usage: node scripts/fetch-images.mjs
import fs from "node:fs";

const SUBJECTS = [
  ["charminar", ["charminar"]],
  ["golconda-fort", ["golconda"]],
  ["hyderabad-old-city", ["hyderabad", "charminar"]],
  ["hussain-sagar", ["hussain", "sagar", "buddha"]],
  ["laad-bazaar", ["bangles", "bazaar", "market", "jewellery"]],
  ["biryani", ["biryani"]],
  ["indian-food", ["indian", "curry", "thali", "food"]],
  ["masala-chai", ["chai", "tea", "masala"]],
  ["kashmir-dal-lake", ["kashmir", "dal lake", "shikara", "houseboat"]],
  ["kashmir-valley", ["kashmir", "mountain", "valley"]],
  ["gulmarg", ["gulmarg", "snow", "kashmir"]],
  ["pahalgam", ["pahalgam", "kashmir", "river"]],
  ["kerala-backwaters", ["kerala", "backwater", "houseboat", "alleppey"]],
  ["kerala-tea", ["tea", "plantation", "munnar", "kerala"]],
  ["kerala-beach", ["kerala", "varkala", "beach", "cliff"]],
  ["kathakali", ["kathakali", "kerala", "dance"]],
  ["hawa-mahal", ["hawa mahal", "jaipur", "palace"]],
  ["jaipur-city", ["jaipur", "rajasthan"]],
  ["rajasthan-desert", ["desert", "camel", "rajasthan", "dunes", "thar"]],
  ["udaipur-lake", ["udaipur", "lake", "palace"]],
  ["jaisalmer-fort", ["jaisalmer", "fort", "rajasthan"]],
  ["amber-fort", ["amber", "fort", "jaipur"]],
  ["goa-beach", ["goa", "beach"]],
  ["goa-palm", ["goa", "palm", "beach", "tree"]],
  ["old-goa-church", ["goa", "church"]],
  ["ladakh-pangong", ["pangong", "ladakh", "lake"]],
  ["ladakh-monastery", ["ladakh", "monastery", "buddhist", "thiksey"]],
  ["ladakh-roads", ["ladakh", "mountain", "road", "himalaya"]],
  ["andaman-beach", ["andaman", "beach", "island", "sea"]],
  ["manali-mountains", ["manali", "himachal", "mountain"]],
  ["rishikesh", ["rishikesh", "ganga", "bridge"]],
  ["varanasi", ["varanasi", "ghat", "ganges"]],
  ["varanasi-boats", ["varanasi", "boat", "ganges"]],
  ["tamil-temple", ["tamil", "temple", "meenakshi", "madurai"]],
  ["mahabalipuram", ["mahabalipuram", "shore temple"]],
  ["hampi", ["hampi", "karnataka", "ruins"]],
  ["meghalaya", ["meghalaya", "waterfall", "root"]],
  ["taj-mahal", ["taj mahal", "agra"]],
  ["india-gate", ["india gate", "delhi"]],
  ["yoga-india", ["yoga", "meditation", "india"]],
  ["rafting", ["rafting", "river"]],
  ["trekking-himalaya", ["himalaya", "trek", "mountains"]],
  ["spice-market", ["spices", "spice", "market"]],
  ["street-food", ["street food", "food", "market"]],
  ["luxury-resort", ["resort", "pool", "luxury", "hotel"]],
  ["toy-train", ["train", "mountain", "india"]],
  ["india-temple", ["temple", "india", "architecture"]],
  ["fort-india", ["fort", "india", "stone"]],
  ["himalaya-snow", ["snow", "himalaya", "mountain"]],
  ["india-culture", ["india", "culture", "colorful"]],
  ["saree", ["saree", "india", "woman"]],
  ["bandra-sea", ["mumbai", "sea", "bandra"]],
];

const results = {};
let skipped = 0;

for (const [key, keywords] of SUBJECTS) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(
    key.replace(/-/g, " ")
  )}&per_page=8`;
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) {
      results[key] = { error: `HTTP ${res.status}` };
      continue;
    }
    const data = await res.json();
    const matches = (data.results || []).filter((p) => {
      const text = [
        p.alt_description,
        p.description,
        ...Object.values(p.alternative_slugs?.en ? { en: p.alternative_slugs.en } : {}),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return keywords.some((k) => text.includes(k));
    });
    if (!matches.length && data.results?.length) {
      // fall back to first result but flag it
      const p = data.results[0];
      results[key] = [
        {
          id: p.id,
          alt: p.alt_description ?? null,
          slug: p.alternative_slugs?.en ?? null,
          url: p.urls?.regular ?? null,
          flagged: true,
        },
      ];
      skipped++;
      continue;
    }
    results[key] = matches.slice(0, 4).map((p) => ({
      id: p.id,
      alt: p.alt_description ?? null,
      slug: p.alternative_slugs?.en ?? null,
      url: p.urls?.regular ?? null,
    }));
  } catch (e) {
    results[key] = { error: String(e) };
  }
  await new Promise((r) => setTimeout(r, 150));
}

fs.writeFileSync("scripts/images-candidates.json", JSON.stringify(results, null, 2));
console.log(`Wrote scripts/images-candidates.json (${Object.keys(results).length} subjects, ${skipped} flagged fallbacks)`);