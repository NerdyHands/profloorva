import { notFound } from "next/navigation";
import { generateOpinlyMetadata, opinlyConfig } from "@opinly/next";
import { isOpinlyConfigured, opinly } from "../../../src/clients/opinly";
import { BlogIndex } from "../../../src/components/blog/BlogIndex";
import { BlogPostView } from "../../../src/components/blog/BlogPostView";
import { PageLayout } from "../../../src/components/PageLayout";
import { PageHero } from "../../../src/components/PageHero";
import Link from "next/link";
import { ROUTES } from "../../../src/config/routes";

export const revalidate = 3600;

const categoryPrefix = opinlyConfig.categoryPrefix ?? "category";
const authorPrefix = opinlyConfig.authorPrefix ?? "authors";

async function loadRoute(slug = []) {
  if (!isOpinlyConfigured || !opinly) {
    if (slug.length === 0) {
      return { type: "home", data: { posts: [], categories: [] } };
    }
    return { type: "not-found" };
  }

  if (slug.length === 0) {
    const [posts, categories] = await Promise.all([
      opinly.posts({ limit: 50 }),
      opinly.categories().catch(() => []),
    ]);
    return { type: "home", data: { posts: posts.data ?? [], categories } };
  }

  if (slug[0] === categoryPrefix && slug[1]) {
    const [categories, list] = await Promise.all([
      opinly.categories(),
      opinly.posts({ category: slug[1] }),
    ]);
    const meta = categories.find((c) => c.slug === slug[1]);
    if (!meta) return { type: "not-found" };
    return {
      type: "category",
      data: { ...meta, name: meta.title, posts: list.data ?? [] },
    };
  }

  if (slug[0] === authorPrefix) {
    const authorSlug = slug[1];
    if (!authorSlug) {
      const authors = await opinly.authors();
      return { type: "authors", data: authors.data ?? authors };
    }
    const author = await opinly.author(authorSlug);
    return author.type === "author"
      ? { type: "author", data: author.data }
      : { type: "not-found" };
  }

  if (slug.length !== 1) return { type: "not-found" };

  const post = await opinly.post(slug[0]);
  return post ? { type: "post", data: post } : { type: "not-found" };
}

function toSeo(route) {
  if (route.type === "post" || route.type === "category" || route.type === "author") {
    return { type: route.type, data: route.data };
  }
  return { type: route.type };
}

export async function generateMetadata(props, parent) {
  const { slug } = await props.params;
  const route = await loadRoute(slug ?? []);
  if (route.type === "not-found") {
    return { title: "Not found" };
  }
  if (route.type === "home" || route.type === "category" || route.type === "authors") {
    return {
      title: "Flooring Tips & Insights | Pro Floor VA Blog",
      description:
        "Practical flooring advice for Hampton homeowners from the Pro Floor VA team — material comparisons, install timelines, and prep tips.",
      alternates: { canonical: `${opinlyConfig.siteUrl || "https://profloorva.com"}${ROUTES.blog}` },
    };
  }
  try {
    return generateOpinlyMetadata(toSeo(route), parent);
  } catch {
    return {
      title: route.data?.title || "Blog",
      description: route.data?.description || "",
    };
  }
}

function TaxonomyList({ heading, items, hrefFor }) {
  return (
    <PageLayout>
      <PageHero label="Blog" heading={heading} />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <ul className="space-y-3">
            {(items || []).map((item) => (
              <li key={item.slug}>
                <Link
                  href={hrefFor(item)}
                  className="font-semibold text-amber-800 underline"
                >
                  {item.title || item.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href={ROUTES.blog} className="font-semibold text-amber-800 underline">
              ← Back to blog
            </Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

export default async function BlogCatchAllPage(props) {
  const { slug } = await props.params;
  const route = await loadRoute(slug ?? []);

  switch (route.type) {
    case "home":
      return <BlogIndex posts={route.data.posts} />;
    case "post":
      return <BlogPostView post={route.data} />;
    case "category":
      return <BlogIndex posts={route.data.posts} />;
    case "authors":
      return (
        <TaxonomyList
          heading="Authors"
          items={Array.isArray(route.data) ? route.data : []}
          hrefFor={(a) => `/blog/${authorPrefix}/${a.slug}`}
        />
      );
    case "author":
      return <BlogIndex posts={route.data.posts || []} />;
    default:
      notFound();
  }
}
