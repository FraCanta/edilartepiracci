import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import ispirazioniIT from "../public/locales/it/ispirazioni.json" with { type: "json" };
import { shouldGenerate } from "./image-utils.mjs";

const publicDir = path.join(process.cwd(), "public");
const outputRoot = path.join(publicDir, "assets", "ispirazioni", "lightbox");
const pages = ispirazioniIT.ispirazioni.ispirazionePage;
const sources = new Set();

for (const page of Object.values(pages)) {
  for (const category of Object.values(page.masonry || {})) {
    for (const image of category.images || []) {
      if (image.src?.startsWith("/assets/ispirazioni/")) {
        sources.add(image.src);
      }
    }
  }
}

let generatedCount = 0;
let skippedCount = 0;

for (const source of sources) {
  const relativeSource = source.replace("/assets/ispirazioni/", "");
  const inputPath = path.join(publicDir, source);
  const outputPath = path.join(outputRoot, relativeSource);

  if (!(await shouldGenerate(inputPath, outputPath))) {
    skippedCount += 1;
    continue;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 2400,
      withoutEnlargement: true,
    })
    .webp({
      quality: 88,
      effort: 5,
    })
    .toFile(outputPath);

  generatedCount += 1;
}

console.log(
  `Inspiration lightbox images: generated ${generatedCount}, skipped ${skippedCount}.`,
);
