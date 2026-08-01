import { isOpinlyConfigured, opinly } from "../../../src/clients/opinly";
import { SITE_NAME, SITE_URL } from "../../../src/seo";

export const revalidate = 3600;

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  let items = [];
  if (isOpinlyConfigured && opinly) {
    try {
      items = await opinly.rss({ limit: 50 });
    } catch {
      items = [];
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Flooring tips and insights from Pro Floor VA</description>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE_URL}/blog/${escapeXml(item.slug)}</link>
      <guid>${SITE_URL}/blog/${escapeXml(item.slug)}</guid>
      <pubDate>${escapeXml(item.date ? new Date(item.date).toUTCString() : "")}</pubDate>
      <description>${escapeXml(item.description || "")}</description>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
