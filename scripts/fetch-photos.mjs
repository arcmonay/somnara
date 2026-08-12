import { createWriteStream, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "photo-library");
mkdirSync(outDir, { recursive: true });

const photos = {
  mattresses: [
    "1505693416388-ac5ce068fe85",
    "1631049307264-da0ec9d70304",
    "1540518614846-7eded433c457",
    "1616594039964-ae9021a400a0",
    "1522771739844-6a9f6d5f14af",
    "1505691938895-1758d7afb15e",
    "1631889993954-47b2bcaad5d6",
    "1616628188502-4ca816e0e2d1",
    "1615874959471-b3fb8ec1d6ff",
    "1600210492486-724fe5c67fb0",
    "1611892440504-42a792e24d32",
    "1631679259414-31522f1aa82f",
  ],
  pillows: [
    "1584100936595-c0654b55a2e2",
    "1578683010236-1b7b5384fe54",
    "1629140727571-9b5c6f6267b1",
    "1586105251261-72a7567a589e",
    "1616593969747-4797dc750f78",
    "1566665797739-59b80ae17e8e",
    "1571508601834-d86901f2a1a4",
    "1540518614846-7eded433c457",
  ],
  foundations: [
    "1505693416388-ac5ce068fe85",
    "1616594039964-ae9021a400a0",
    "1631049307264-da0ec9d70304",
    "1484101403633-562f891dc89a",
    "1600210492486-724fe5c67fb0",
    "1617325247155-03d52137774e",
  ],
  toppers: [
    "1631049307264-da0ec9d70304",
    "1540518614846-7eded433c457",
    "1584100936595-c0654b55a2e2",
    "1522771739844-6a9f6d5f14af",
    "1615874959471-b3fb8ec1d6ff",
    "1505691938895-1758d7afb15e",
  ],
  sheets: [
    "1586075010923-2dd4563fb2d8",
    "1540518614846-7eded433c457",
    "1522771739844-6a9f6d5f14af",
    "1631889993954-47b2bcaad5d6",
    "1615874959471-b3fb8ec1d6ff",
    "1584100936595-c0654b55a2e2",
    "1505693416388-ac5ce068fe85",
    "1578683010236-1b7b5384fe54",
  ],
  protectors: [
    "1586075010923-2dd4563fb2d8",
    "1631049307264-da0ec9d70304",
    "1540518614846-7eded433c457",
    "1616594039964-ae9021a400a0",
    "1522771739844-6a9f6d5f14af",
  ],
  bases: [
    "1616594039964-ae9021a400a0",
    "1631049307264-da0ec9d70304",
    "1505693416388-ac5ce068fe85",
    "1600210492486-724fe5c67fb0",
    "1617325247155-03d52137774e",
    "1484101403633-562f891dc89a",
  ],
  bundles: [
    "1522771739844-6a9f6d5f14af",
    "1540518614846-7eded433c457",
    "1631049307264-da0ec9d70304",
    "1615874959471-b3fb8ec1d6ff",
    "1505691938895-1758d7afb15e",
    "1631889993954-47b2bcaad5d6",
    "1584100936595-c0654b55a2e2",
    "1616628188502-4ca816e0e2d1",
  ],
};

async function download(id, dest) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;
  const res = await fetch(url, {
    headers: { "User-Agent": "SomnaraCatalog/1.0" },
    redirect: "follow",
  });
  if (!res.ok || !res.body) {
    throw new Error(`${res.status} ${id}`);
  }
  await pipeline(res.body, createWriteStream(dest));
}

async function main() {
  let ok = 0;
  let fail = 0;
  for (const [collection, ids] of Object.entries(photos)) {
    for (let i = 0; i < ids.length; i++) {
      const dest = join(outDir, `${collection}-${i + 1}.jpg`);
      try {
        await download(ids[i], dest);
        ok += 1;
        console.log("ok", dest);
      } catch (err) {
        fail += 1;
        console.warn("skip", ids[i], err.message);
      }
    }
  }
  console.log(`Downloaded ${ok} photos (${fail} skipped).`);
  if (ok < 20) {
    process.exitCode = 1;
  }
}

main();
