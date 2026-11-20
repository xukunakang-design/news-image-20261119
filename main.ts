import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const png = readFileSync(new URL("./entry.png", import.meta.url));
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(pngSignature)) {
  throw new Error("entry.png is not a PNG file");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.png`, png);
