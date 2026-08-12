import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "data"), { recursive: true });

const collections = [
  {
    handle: "mattresses",
    title: "Mattresses",
    description: "Hybrid, foam, latex, and innerspring beds in every standard size.",
  },
  {
    handle: "pillows",
    title: "Pillows",
    description: "Down, foam, and cooling pillows for side, back, and stomach sleepers.",
  },
  {
    handle: "foundations",
    title: "Box Springs & Foundations",
    description: "Low-profile and traditional foundations that lock the mattress in place.",
  },
  {
    handle: "toppers",
    title: "Mattress Toppers",
    description: "Latex, down, and memory-foam toppers to retune an existing bed.",
  },
  {
    handle: "sheets",
    title: "Sheets & Bedding",
    description: "Percale, sateen, and linen sets cut for deep-pocket mattresses.",
  },
  {
    handle: "protectors",
    title: "Protectors",
    description: "Waterproof, breathable covers and encasements for the whole sleep system.",
  },
  {
    handle: "bases",
    title: "Adjustable Bases",
    description: "Power bases with head, foot, and zero-gravity presets.",
  },
  {
    handle: "bundles",
    title: "Bedroom Bundles",
    description: "Mattress + pillow + sheet kits priced as a complete room.",
  },
];

const series = [
  "Dusk",
  "Harbor",
  "Loom",
  "Vale",
  "Nest",
  "Hollow",
  "Sable",
  "Drift",
  "Quill",
  "Marrow",
  "Still",
  "Ivory",
  "Noll",
  "Pall",
  "Hearth",
  "Cloud",
];

const mattressBuilds = [
  ["Hybrid", "Pocketed coils with a memory-foam comfort stack"],
  ["Memory Foam", "High-density foam with a cooling quilt"],
  ["Natural Latex", "Talalay latex over a zoned support core"],
  ["Innerspring", "Offset coils with a cotton-wool pillow top"],
  ["Euro-Top Hybrid", "Euro-top hybrid with edge-to-edge coils"],
];
const sizes = ["Twin", "Twin XL", "Full", "Queen", "King", "Cal King"];
const firmness = ["Plush", "Medium-plush", "Medium", "Medium-firm", "Firm"];
const covers = [
  "Oat Linen",
  "Cloud Percale",
  "Graphite Knit",
  "Ivory Sateen",
  "Moss Tencel",
  "Sand Organic Cotton",
];
const pillowFills = [
  ["Down Alternative", "Hypoallergenic microfiber"],
  ["Hungarian Down", "600-fill white down"],
  ["Shredded Latex", "Adjustable latex fill"],
  ["Memory Foam", "Contoured foam core"],
  ["Buckwheat", "Ventilated hull fill"],
  ["Cooling Gel", "Gel-infused foam"],
];
const pillowSizes = ["Standard", "Queen", "King", "Euro", "Body"];
const sheetWeaves = ["Percale", "Sateen", "Linen", "Jersey", "Tencel"];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function money(base, index) {
  const price = Math.round((base + (index % 7) * (base * 0.08)) / 10) * 10;
  const compare = Math.round(price * 1.12);
  return { price, compareAtPrice: compare };
}

const products = [];
let n = 1;

function add(partial) {
  const id = `sn-${String(n).padStart(3, "0")}`;
  const sku = `SN-${String(n).padStart(4, "0")}`;
  const handle = slug(`${partial.title}-${n}`);
  products.push({
    id,
    handle,
    currency: "USD",
    sku,
    inStock: n % 17 !== 0,
    featured: n <= 8 || n % 13 === 0,
    image: `/products/${handle}.webp`,
    tags: partial.tags,
    ...partial,
  });
  n += 1;
}

for (let i = 0; i < 24; i++) {
  const [build, blurb] = mattressBuilds[i % mattressBuilds.length];
  const size = sizes[i % sizes.length];
  const feel = firmness[i % firmness.length];
  const cover = covers[i % covers.length];
  const name = series[i % series.length];
  const { price, compareAtPrice } = money(size.includes("King") ? 1290 : size === "Queen" ? 990 : 690, i);
  add({
    title: `Somnara ${name} ${size} ${build} Mattress`,
    description: `The ${name} ${build.toLowerCase()} mattress is built for ${feel.toLowerCase()} support in ${size}. ${blurb}, finished in ${cover.toLowerCase()}.`,
    collection: "mattresses",
    ...{ price, compareAtPrice },
    material: build,
    size,
    finish: cover,
    highlight: `${feel} · 13" profile`,
    weightLbs: 45 + (i % 40),
    tags: ["mattresses", slug(build), slug(size), slug(feel)],
  });
}

for (let i = 0; i < 16; i++) {
  const [fill, blurb] = pillowFills[i % pillowFills.length];
  const size = pillowSizes[i % pillowSizes.length];
  const name = series[(i + 3) % series.length];
  const { price, compareAtPrice } = money(size === "Body" ? 89 : 49, i);
  add({
    title: `Somnara ${name} ${size} ${fill} Pillow`,
    description: `The ${name} pillow uses ${blurb.toLowerCase()} in a ${size.toLowerCase()} shell for side and back sleepers.`,
    collection: "pillows",
    ...{ price, compareAtPrice },
    material: fill,
    size,
    finish: covers[(i + 2) % covers.length],
    highlight: i % 2 === 0 ? "Side-sleeper loft" : "Back-sleeper loft",
    weightLbs: size === "Body" ? 6 : 2 + (i % 3),
    tags: ["pillows", slug(fill), slug(size)],
  });
}

for (let i = 0; i < 12; i++) {
  const size = sizes[i % sizes.length];
  const profile = i % 2 === 0 ? "Low-profile 5\"" : "Traditional 9\"";
  const name = series[(i + 5) % series.length];
  const { price, compareAtPrice } = money(size.includes("King") ? 320 : 220, i);
  add({
    title: `Somnara ${name} ${size} Box Spring`,
    description: `A ${profile.toLowerCase()} wood-and-steel foundation sized for ${size} mattresses, with a fabric wrap that matches the ${name} collection.`,
    collection: "foundations",
    ...{ price, compareAtPrice },
    material: "Hardwood + steel",
    size,
    finish: covers[i % covers.length],
    highlight: profile,
    weightLbs: 38 + (i % 20),
    tags: ["foundations", "box-spring", slug(size)],
  });
}

for (let i = 0; i < 12; i++) {
  const mats = ["Talalay Latex", "Memory Foam", "Down Blend", "Wool"];
  const mat = mats[i % mats.length];
  const size = sizes[i % sizes.length];
  const name = series[(i + 1) % series.length];
  const { price, compareAtPrice } = money(180, i);
  add({
    title: `Somnara ${name} ${size} ${mat} Topper`,
    description: `A 2–3" ${mat.toLowerCase()} topper that retunes an existing ${size} mattress without replacing the core.`,
    collection: "toppers",
    ...{ price, compareAtPrice },
    material: mat,
    size,
    finish: covers[(i + 1) % covers.length],
    highlight: `${2 + (i % 2)}" comfort layer`,
    weightLbs: 12 + (i % 10),
    tags: ["toppers", slug(mat), slug(size)],
  });
}

for (let i = 0; i < 14; i++) {
  const weave = sheetWeaves[i % sheetWeaves.length];
  const size = sizes[i % sizes.length];
  const name = series[(i + 4) % series.length];
  const { price, compareAtPrice } = money(129, i);
  add({
    title: `Somnara ${name} ${size} ${weave} Sheet Set`,
    description: `${weave} sheeting with a 17" deep pocket, cut for ${size} mattresses. Includes fitted, flat, and two pillowcases.`,
    collection: "sheets",
    ...{ price, compareAtPrice },
    material: weave,
    size,
    finish: covers[i % covers.length],
    highlight: "17\" deep pocket",
    weightLbs: 5 + (i % 4),
    tags: ["sheets", slug(weave), slug(size)],
  });
}

for (let i = 0; i < 10; i++) {
  const size = sizes[i % sizes.length];
  const name = series[(i + 6) % series.length];
  const kind = i % 2 === 0 ? "Mattress Protector" : "Pillow Encasement";
  const { price, compareAtPrice } = money(kind.includes("Pillow") ? 39 : 79, i);
  add({
    title: `Somnara ${name} ${size} ${kind}`,
    description: `A breathable, waterproof ${kind.toLowerCase()} for ${size} sleep systems. Quiet knit that stays put under sheets.`,
    collection: "protectors",
    ...{ price, compareAtPrice },
    material: "TPU-backed knit",
    size,
    finish: "Quiet white knit",
    highlight: "Waterproof · breathable",
    weightLbs: kind.includes("Pillow") ? 1 : 3,
    tags: ["protectors", slug(kind), slug(size)],
  });
}

for (let i = 0; i < 8; i++) {
  const size = sizes[(i + 2) % sizes.length];
  const name = series[(i + 8) % series.length];
  const { price, compareAtPrice } = money(890, i);
  add({
    title: `Somnara ${name} ${size} Adjustable Base`,
    description: `A dual-motor ${size} power base with head, foot, zero-gravity, and under-bed lighting. Wireless remote included.`,
    collection: "bases",
    ...{ price, compareAtPrice },
    material: "Steel frame",
    size,
    finish: "Charcoal upholstery",
    highlight: "Zero-gravity preset",
    weightLbs: 110 + (i % 30),
    tags: ["bases", "adjustable", slug(size)],
  });
}

for (let i = 0; i < 12; i++) {
  const size = sizes[i % sizes.length];
  const name = series[(i + 2) % series.length];
  const { price, compareAtPrice } = money(size.includes("King") ? 1590 : 1190, i);
  add({
    title: `Somnara ${name} ${size} Bedroom Bundle`,
    description: `Mattress, two pillows, sheet set, and protector sized for ${size}. Packed as one shipment for a finished room.`,
    collection: "bundles",
    ...{ price, compareAtPrice },
    material: "Hybrid + percale",
    size,
    finish: covers[i % covers.length],
    highlight: "4-piece room kit",
    weightLbs: 70 + (i % 25),
    tags: ["bundles", slug(size), "kit"],
  });
}

const catalog = {
  brand: "Somnara",
  generatedAt: new Date().toISOString(),
  collections,
  products,
};

writeFileSync(join(root, "data", "catalog.json"), JSON.stringify(catalog, null, 2));
console.log(`Wrote ${products.length} Somnara products across ${collections.length} collections.`);
