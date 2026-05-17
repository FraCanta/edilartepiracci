import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import ispirazioniIT from "../public/locales/it/ispirazioni.json" with { type: "json" };
import { shouldGenerate } from "./image-utils.mjs";

const publicDir = path.join(process.cwd(), "public");
const outputRoot = path.join(publicDir, "assets", "ispirazioni", "covers");
const pages = ispirazioniIT.ispirazioni.ispirazionePage;
const sources = new Set();

for (const page of Object.values(pages)) {
  if (page.hero?.img) {
    sources.add(page.hero.img);
  }

  for (const category of Object.values(page.masonry || {})) {
    const cover = category.images?.[0]?.src;
    if (cover) {
      sources.add(cover);
    }
  }
}

let generatedCount = 0;
let skippedCount = 0;

for (const source of sources) {
  if (!source.startsWith("/assets/ispirazioni/")) {
    continue;
  }

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
      width: 1200,
      withoutEnlargement: true,
    })
    .webp({
      quality: 72,
      effort: 5,
    })
    .toFile(outputPath);

  generatedCount += 1;
}

console.log(
  `Inspiration cover images: generated ${generatedCount}, skipped ${skippedCount}.`,
);
