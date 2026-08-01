import Link from "next/link";
import { PageLayout } from "../src/components/PageLayout";
import { ROUTES } from "../src/config/routes";
import { heroButtonClass } from "../src/styles/buttons";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="px-[5%] py-24 text-center">
        <div className="container mx-auto max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
            404
          </p>
          <h1 className="mb-4 text-4xl font-bold text-neutral-900">Page not found</h1>
          <p className="mb-8 text-neutral-600">
            That page doesn’t exist. Head home or browse our flooring services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={ROUTES.home}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Back to home
            </Link>
            <Link
              href={ROUTES.blog}
              className="font-semibold text-amber-800 underline"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
