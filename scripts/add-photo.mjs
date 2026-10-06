// Add or replace a site photo.
//
//   npm run add-photo -- <image file> <key> "<alt text>"
//
// Example — swap the gallery's stock control-room shot for your own:
//   npm run add-photo -- "C:\Users\me\Pictures\our-control-room.jpg" control-room "Our Tarkwa control room"
//
// Writes src/assets/photos/<key>-800.webp and <key>-1600.webp and updates src/data/photos.json.
// Reusing an existing key replaces that photo everywhere it appears on the site.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src/assets/photos");
const manifestPath = path.join(root, "src/data/photos.json");

const [input, key, alt] = process.argv.slice(2);
if (!input || !key || !alt) {
  console.error('Usage: npm run add-photo -- <image file> <key> "<alt text>"');
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(key)) {
  console.error("The key may only contain lowercase letters, numbers and dashes, e.g. control-room");
  process.exit(1);
}
if (!fs.existsSync(input)) {
  console.error(`File not found: ${input}`);
  process.exit(1);
}

const source = sharp(input).rotate(); // honour phone-camera orientation
const meta = await source.metadata();
const upright = meta.orientation >= 5 ? { width: meta.height, height: meta.width } : meta;

// Bounding boxes keep tall photos from becoming huge files.
const widths = {};
for (const [name, box, quality] of [
  [800, [800, 800], 68],
  [1600, [1600, 1100], 62],
]) {
  const info = await source
    .clone()
    .resize({ width: box[0], height: box[1], fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(path.join(outDir, `${key}-${name}.webp`));
  widths[name] = info.width;
}
const tiny = await source.clone().resize({ width: 24 }).blur(1.2).webp({ quality: 40 }).toBuffer();

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const replaced = key in manifest;
manifest[key] = {
  alt,
  width: upright.width,
  height: upright.height,
  widths,
  placeholder: `data:image/webp;base64,${tiny.toString("base64")}`,
  credit: null, // your own photo — nothing to credit
};
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

console.log(`${replaced ? "Replaced" : "Added"} photo "${key}" (${upright.width}×${upright.height}).`);
if (!replaced) console.log(`Use it with <Photo name="${key}" /> or by adding photo: "${key}" in src/data/.`);
