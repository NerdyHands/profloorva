import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = path.resolve("public/images");
const publicDir = path.resolve("public");

const rasterTargets = [
  { src: "hero.png", dest: "hero.webp" },
  { src: "og-image.png", dest: "og-image.webp" },
  { src: "why-us-installation.jpg", dest: "why-us-installation.webp" },
  { src: "why-us-fast.jpg", dest: "why-us-fast.webp" },
  { src: "why-us-clean.png", dest: "why-us-clean.webp" },
  { src: "service-hardwood.jpg", dest: "service-hardwood.webp" },
  { src: "service-laminate.jpg", dest: "service-laminate.webp" },
  { src: "service-vinyl.png", dest: "service-vinyl.webp" },
];

for (const { src, dest } of rasterTargets) {
  const input = path.join(imagesDir, src);
  const output = path.join(imagesDir, dest);

  if (!fs.existsSync(input)) {
    console.log(`skip (missing): ${src}`);
    continue;
  }

  await sharp(input).webp({ quality: 85 }).toFile(output);
  fs.unlinkSync(input);
  console.log(`converted: ${src} -> ${dest}`);
}

const logoPng = path.join(imagesDir, "logo.png");
const logoSvg = path.join(imagesDir, "logo.svg");

if (fs.existsSync(logoPng)) {
  const logoBuffer = await sharp(logoPng).webp({ quality: 90 }).toBuffer();
  const meta = await sharp(logoBuffer).metadata();
  const width = meta.width ?? 400;
  const height = meta.height ?? 120;
  const base64 = logoBuffer.toString("base64");

  fs.writeFileSync(
    logoSvg,
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <image width="${width}" height="${height}" xlink:href="data:image/webp;base64,${base64}"/>
</svg>`
  );
  fs.unlinkSync(logoPng);
  console.log("converted: logo.png -> logo.svg");
}

const faviconSource = path.join(path.resolve("scripts"), "favicon-source.png");
if (fs.existsSync(faviconSource)) {
  await import("./generate-favicons.mjs");
}
