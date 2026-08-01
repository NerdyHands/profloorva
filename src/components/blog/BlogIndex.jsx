import Link from "next/link";
import { PageLayout } from "../PageLayout";
import { PageHero } from "../PageHero";
import { ROUTES } from "../../config/routes";
import { heroButtonClass } from "../../styles/buttons";

function formatDate(value) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return value;
  }
}

export function BlogIndex({ posts = [] }) {
  return (
    <PageLayout>
      <PageHero
        label="Blog"
        heading="Flooring Tips and Insights"
        subheading="Practical advice from the Pro Floor VA team for Hampton homeowners."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          {posts.length === 0 ? (
            <p className="text-center text-neutral-600">
              New articles are on the way. Check back soon, or{" "}
              <Link href={ROUTES.contact} className="font-semibold text-amber-800 underline">
                get a free quote
              </Link>{" "}
              today.
            </p>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-neutral-200 p-6 shadow-sm transition hover:border-amber-600"
                >
                  {post.date || post.publishedAt ? (
                    <p className="mb-2 text-sm text-neutral-500">
                      {formatDate(post.date || post.publishedAt)}
                    </p>
                  ) : null}
                  <h2 className="mb-2 text-2xl font-bold text-neutral-900">
                    {post.title}
                  </h2>
                  {(post.description || post.dek || post.excerpt) && (
                    <p className="text-neutral-600">
                      {post.description || post.dek || post.excerpt}
                    </p>
                  )}
                  <span className="mt-4 inline-block font-semibold text-amber-800 underline">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          )}
          <div className="mt-12 text-center">
            <p className="mb-6 text-neutral-600">
              Prefer to talk it through?{" "}
              <Link href={ROUTES.faq} className="font-semibold text-amber-800 underline">
                Browse the FAQ
              </Link>{" "}
              or get a free quote.
            </p>
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
