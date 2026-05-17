import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { shouldGenerate } from "./image-utils.mjs";

const publicDir = path.join(process.cwd(), "public");
const assetsDir = path.join(publicDir, "assets");
const outputRoot = path.join(assetsDir, "optimized");
const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        ["optimized", "covers", "lightbox", "logo", "partners", "pattern"].includes(
          entry.name,
        )
      ) {
        continue;
      }

      files.push(...(await walk(fullPath)));
      continue;
    }

    if (entry.isFile() && rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await walk(assetsDir);
let generatedCount = 0;
let skippedCount = 0;

for (const inputPath of files) {
  const relative = path.relative(assetsDir, inputPath);
  const outputPath = path.join(
    outputRoot,
    relative.replace(/\.(jpe?g|png|webp)$/i, ".webp"),
  );

  if (!(await shouldGenerate(inputPath, outputPath))) {
    skippedCount += 1;
    continue;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1920,
      withoutEnlargement: true,
    })
    .webp({
      quality: 76,
      effort: 5,
    })
    .toFile(outputPath);

  generatedCount += 1;
}

console.log(
  `Optimized site images: generated ${generatedCount}, skipped ${skippedCount}.`,
);
