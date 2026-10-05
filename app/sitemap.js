import { MARKETING_ROUTES, ROUTES } from "../src/config/routes";
import { BLOG_POSTS, blogPostPath } from "../src/data/blogPosts";
import { SITE_URL } from "../src/seo";

export default function sitemap() {
  const marketing = MARKETING_ROUTES.filter((route) => route !== ROUTES.blog).map(
    (route) => ({
      url: `${SITE_URL}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "/" ? 1 : 0.7,
    }),
  );

  const blogEntries = [
    {
      url: `${SITE_URL}${ROUTES.blog}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}${blogPostPath(post.slug)}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return [...marketing, ...blogEntries];
}
