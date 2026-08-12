import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const libraryDir = join(root, "assets", "photo-library");
const outDir = join(root, "public", "products");
const catalogPath = join(root, "data", "catalog.json");

mkdirSync(outDir, { recursive: true });

const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
const library = readdirSync(libraryDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

if (!library.length) {
  throw new Error(`No photos found in ${libraryDir}`);
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickFile(product, index) {
  const pool = library.filter((f) => f.startsWith(`${product.collection}-`));
  const list = pool.length ? pool : library;
  return list[index % list.length];
}

async function renderProduct(product, index) {
  const file = pickFile(product, index);
  const input = join(libraryDir, file);
  const h = hash(product.handle);

  const meta = await sharp(input).metadata();
  const width = meta.width || 1024;
  const height = meta.height || 1280;
  const cropScale = 0.82 + (h % 15) / 100;
  const cropW = Math.floor(width * cropScale);
  const cropH = Math.floor(height * cropScale);
  const left = Math.floor((((h >> 3) % 1000) / 1000) * Math.max(1, width - cropW));
  const top = Math.floor((((h >> 7) % 1000) / 1000) * Math.max(1, height - cropH));

  let brightness = 1 + ((h % 17) - 8) / 100;
  let saturation = 1 + ((h % 11) - 5) / 40;
  const hue = ((h % 21) - 10) * 2;
  const finish = String(product.finish || "").toLowerCase();
  if (finish.includes("ivory") || finish.includes("cloud") || finish.includes("white")) {
    brightness += 0.05;
  }
  if (finish.includes("graphite") || finish.includes("charcoal")) {
    brightness -= 0.04;
  }

  const outName = `${product.handle}.webp`;
  const outPath = join(outDir, outName);
  const tmpPath = join(outDir, `${product.handle}.tmp.webp`);

  await sharp(input)
    .extract({
      left: Math.max(0, left),
      top: Math.max(0, top),
      width: Math.max(32, cropW),
      height: Math.max(32, cropH),
    })
    .resize(1200, 1500, { fit: "cover", position: "centre" })
    .modulate({
      brightness: Math.max(0.85, Math.min(1.18, brightness)),
      saturation: Math.max(0.85, Math.min(1.25, saturation)),
      hue,
    })
    .sharpen({ sigma: 0.7 })
    .webp({ quality: 84 })
    .toFile(tmpPath);

  try {
    renameSync(tmpPath, outPath);
  } catch {
    copyFileSync(tmpPath, outPath);
    try {
      unlinkSync(tmpPath);
    } catch {
      /* ignore */
    }
  }

  product.image = `/products/${outName}`;
  product.imageSource = file;
}

async function main() {
  console.log(`Photo library: ${library.length} files`);
  const counters = {};
  for (const product of catalog.products) {
    const key = product.collection;
    counters[key] = counters[key] || 0;
    await renderProduct(product, counters[key]);
    counters[key] += 1;
  }
  catalog.generatedAt = new Date().toISOString();
  catalog.imageStyle = "photorealistic";
  writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
  writeFileSync(
    join(libraryDir, "INDEX.json"),
    JSON.stringify({ count: library.length, files: library }, null, 2),
  );
  console.log(`Applied photos to ${catalog.products.length} products.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
