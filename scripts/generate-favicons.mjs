import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const logoSvgPath = path.resolve("public/images/logo.svg");

function loadLogoBuffer() {
  const svg = fs.readFileSync(logoSvgPath, "utf8");
  const match = svg.match(/xlink:href="data:image\/webp;base64,([^"]+)"/);
  if (!match) {
    throw new Error("Could not find embedded webp in public/images/logo.svg");
  }
  return Buffer.from(match[1], "base64");
}

async function contentBounds(buf) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let minX = info.width;
  let maxX = 0;
  let minY = info.height;
  let maxY = 0;
  let found = false;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a > 20 && (r > 20 || g > 20 || b > 20)) {
        found = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (!found) throw new Error("Logo image appears empty");
  return { minX, maxX, minY, maxY, width: info.width, height: info.height };
}

async function extractLogoMark(buf) {
  const bounds = await contentBounds(buf);
  const pad = 4;
  const left = Math.max(0, bounds.minX - pad);
  const top = Math.max(0, bounds.minY - pad);
  const width = Math.min(bounds.width - left, bounds.maxX - bounds.minX + 1 + pad * 2);
  const height = Math.min(bounds.height - top, bounds.maxY - bounds.minY + 1 + pad * 2);

  const trimmed = await sharp(buf)
    .extract({ left, top, width, height })
    .png()
    .toBuffer();

  const tmeta = await sharp(trimmed).metadata();
  // Prefer the distinctive "VA" + orange accent on the right of the wordmark.
  const markWidth = Math.min(tmeta.width, Math.round(tmeta.height * 1.15));
  const markLeft = Math.max(0, tmeta.width - markWidth);

  return sharp(trimmed)
    .extract({ left: markLeft, top: 0, width: markWidth, height: tmeta.height })
    .png()
    .toBuffer();
}

async function squareIcon(sourceBuf, size, paddingRatio = 0.08) {
  const trimmed = await sharp(sourceBuf).trim({ threshold: 15 }).toBuffer();
  const inner = Math.round(size * (1 - paddingRatio * 2));

  return sharp(trimmed)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: Math.floor((size - inner) / 2),
      bottom: Math.ceil((size - inner) / 2),
      left: Math.floor((size - inner) / 2),
      right: Math.ceil((size - inner) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png();
}

const logoBuf = loadLogoBuffer();
const markBuf = await extractLogoMark(logoBuf);

// Keep a PNG source in sync for inspection / future runs.
await sharp(markBuf).toFile(path.resolve("scripts/favicon-source.png"));

const png16 = await squareIcon(markBuf, 16);
const png32 = await squareIcon(markBuf, 32);
const png180 = await squareIcon(markBuf, 180, 0.1);
const png192 = await squareIcon(markBuf, 192, 0.1);
const png512 = await squareIcon(markBuf, 512, 0.1);

await png16.toFile(path.join(publicDir, "favicon-16.png"));
await png32.toFile(path.join(publicDir, "favicon-32.png"));
await png180.webp({ quality: 90 }).toFile(path.join(publicDir, "apple-touch-icon.webp"));
await png192.webp({ quality: 90 }).toFile(path.join(publicDir, "favicon-192.webp"));
await png512.webp({ quality: 90 }).toFile(path.join(publicDir, "favicon-512.webp"));

const svgBuffer = await png32.toBuffer();
const svgBase64 = svgBuffer.toString("base64");

fs.writeFileSync(
  path.join(publicDir, "favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="32" height="32">
  <image width="32" height="32" xlink:href="data:image/png;base64,${svgBase64}"/>
</svg>`,
);

console.log(
  "generated from logo: favicon-16.png, favicon-32.png, favicon.svg, favicon-192.webp, apple-touch-icon.webp, favicon-512.webp",
);
