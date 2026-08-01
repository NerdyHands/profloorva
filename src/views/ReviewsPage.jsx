import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

export default function ReviewsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Customer Reviews"
        heading="What Hampton Homeowners Say"
        subheading="Real feedback from real customers across Hampton Roads. We let our work speak for itself."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "They finished my hardwood floors in two days. The quality is exceptional and they left my house spotless.",
                name: "Sarah M.",
                location: "Hampton",
              },
              {
                quote:
                  "Professional, fast, and they actually cared about getting it right. No regrets.",
                name: "James R.",
                location: "Hampton",
              },
              {
                quote:
                  "Best flooring experience I've had. They showed up on time and did exactly what they promised.",
                name: "Margaret C.",
                location: "Hampton",
              },
            ].map(({ quote, name, location }) => (
              <div
                key={name}
                className="flex flex-col rounded-xl border border-neutral-200 p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mb-4 flex-1 text-neutral-700">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-neutral-500">{location}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-neutral-600">
              See our{" "}
              <Link href={ROUTES.gallery} className="font-semibold text-amber-800 underline">
                installation gallery
              </Link>{" "}
              or learn{" "}
              <Link href={ROUTES.about} className="font-semibold text-amber-800 underline">
                about Pro Floor VA
              </Link>
              .
            </p>
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
