import React from "react";
import Link from "next/link";
import { PageLayout } from "./PageLayout";
import { PageHero } from "./PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

export function BlogPostLayout({ title, dek, children, relatedLinks = [] }) {
  return (
    <PageLayout>
      <PageHero label="Blog" heading={title} subheading={dek} />
      <article className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="prose-neutral space-y-6 text-lg text-neutral-700">
            {children}
          </div>

          {relatedLinks.length > 0 && (
            <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="mb-3 text-xl font-bold text-neutral-900">Related</h2>
              <ul className="space-y-2">
                {relatedLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link href={to} className="font-semibold text-amber-800 underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get a free estimate
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
