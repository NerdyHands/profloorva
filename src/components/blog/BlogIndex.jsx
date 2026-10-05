import Link from "next/link";
import { PageLayout } from "../PageLayout";
import { PageHero } from "../PageHero";
import { ROUTES } from "../../config/routes";
import { heroButtonClass } from "../../styles/buttons";
import { blogPostPath } from "../../data/blogPosts";

function FeaturedPost({ post }) {
  const href = blogPostPath(post.slug);
  const { category, title, summary, image, imageAlt } = post.card;

  return (
    <article className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
      <Link href={href} className="block overflow-hidden rounded-xl">
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[4/3] w-full object-cover transition hover:scale-[1.02]"
        />
      </Link>
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-800">
          {category}
        </p>
        <h2 className="mb-5 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
          {title}
        </h2>
        <p className="mb-8 text-lg text-neutral-700">{summary}</p>
        <Link href={href} className={`inline-flex items-center justify-center ${heroButtonClass}`}>
          Read the guide
        </Link>
      </div>
    </article>
  );
}

function PostCard({ post }) {
  const href = blogPostPath(post.slug);
  const { category, title, summary, image, imageAlt } = post.card;

  return (
    <article className="flex flex-col">
      <Link href={href} className="mb-6 block overflow-hidden rounded-xl">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="aspect-[8/5] w-full object-cover transition hover:scale-[1.02]"
        />
      </Link>
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-800">
        {category}
      </p>
      <h3 className="mb-3 text-2xl font-bold text-neutral-900">
        <Link href={href} className="hover:text-amber-800">
          {title}
        </Link>
      </h3>
      <p className="mb-5 text-neutral-700">{summary}</p>
      <Link href={href} className="mt-auto font-semibold text-amber-800 underline">
        Read the guide
      </Link>
    </article>
  );
}

export function BlogIndex({ posts = [] }) {
  const [featured, ...rest] = posts;

  return (
    <PageLayout>
      <PageHero
        label="Blog"
        heading="Flooring tips and insights"
        subheading="Practical advice for Hampton Roads homeowners choosing materials, planning an installation, and protecting a new floor."
      />

      {featured ? (
        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <FeaturedPost post={featured} />
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="bg-neutral-50 px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
                More flooring guidance
              </h2>
              <p className="text-lg text-neutral-700">
                Clear answers for material decisions and project planning.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-neutral-900 p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-2xl">
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Have a flooring question?
              </h2>
              <p className="text-lg text-white/80">
                Tell Pro Floor VA about the rooms, materials, and timeline you
                are considering. We can help you plan the next step.
              </p>
            </div>
            <Link
              href={ROUTES.contact}
              className={`inline-flex flex-shrink-0 items-center justify-center ${heroButtonClass}`}
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
