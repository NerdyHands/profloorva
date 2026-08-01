import { buildSitemapEntries } from "@opinly/shared";
import { opinlyConfig } from "@opinly/next";
import { isOpinlyConfigured, opinly } from "../src/clients/opinly";
import { MARKETING_ROUTES, ROUTES } from "../src/config/routes";
import { SITE_URL } from "../src/seo";

export const revalidate = 3600;

export default async function sitemap() {
  const marketing = MARKETING_ROUTES.filter((route) => route !== ROUTES.blog).map(
    (route) => ({
      url: `${SITE_URL}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "/" ? 1 : 0.7,
    }),
  );

  let blogEntries = [
    {
      url: `${SITE_URL}${ROUTES.blog}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  if (isOpinlyConfigured && opinly) {
    try {
      const routes = await opinly.routes();
      blogEntries = buildSitemapEntries(routes, opinlyConfig).map((entry) => ({
        url: entry.url,
        lastModified: new Date(entry.lastModified),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
    } catch {
      // Opinly unavailable at build time — marketing URLs still ship.
    }
  }

  return [...marketing, ...blogEntries];
}
