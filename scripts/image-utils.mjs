import fs from "node:fs/promises";

export async function shouldGenerate(inputPath, outputPath) {
  try {
    const [inputStat, outputStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outputPath),
    ]);

    return inputStat.mtimeMs > outputStat.mtimeMs;
  } catch (error) {
    if (error.code === "ENOENT") {
      return true;
    }

    throw error;
  }
}
