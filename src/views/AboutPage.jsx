import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, SERVICE_AREA_CITIES } from "../seo";

const locationLinks = [
  { to: ROUTES.newportNews, label: "Newport News" },
  { to: ROUTES.yorktown, label: "Yorktown" },
  { to: ROUTES.williamsburg, label: "Williamsburg" },
  { to: ROUTES.poquoson, label: "Poquoson" },
];

export default function AboutPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="About Pro Floor VA"
        heading="Flooring installed by people who actually live here"
        subheading="Pro Floor VA has installed hardwood, laminate, and vinyl flooring for Hampton homeowners for 15 years. No subcontracted crews, no bait-and-switch estimates."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            The person who quotes your job is the person who shows up to do it.
            We started Pro Floor VA because too many Hampton homeowners were
            getting the same story from every flooring company: vague timelines,
            vague pricing, and a crew that felt like strangers in their house.
            We built the opposite.
          </p>
          <p className="mb-10 text-lg text-neutral-700">
            Every job gets a real walkthrough, a real quote before we start, and
            a crew that treats your home like it&apos;s still yours during the
            install — not a job site.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What that looks like in practice</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Most installs finish in 2–3 days, not weeks",
              "You get one point of contact from quote to final walkthrough",
              "We inspect subfloors before we quote, so the price you're given is the price you pay",
              "500+ installations completed for Hampton and Hampton Roads homeowners",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">Where we work</h2>
          <p className="mb-4 text-neutral-700">
            Based in Hampton, we serve {SERVICE_AREA_CITIES.join(", ")}:
          </p>
          <ul className="mb-10 flex flex-wrap gap-3">
            {locationLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className="inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 hover:border-amber-700 hover:text-amber-800"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-neutral-700">
            Curious about materials? Compare{" "}
            <Link href={ROUTES.hardwood} className="font-semibold text-amber-800 underline">
              hardwood
            </Link>
            ,{" "}
            <Link href={ROUTES.laminate} className="font-semibold text-amber-800 underline">
              laminate
            </Link>
            , and{" "}
            <Link href={ROUTES.vinyl} className="font-semibold text-amber-800 underline">
              vinyl plank
            </Link>
            — or browse our{" "}
            <Link href={ROUTES.blog} className="font-semibold text-amber-800 underline">
              flooring blog
            </Link>
            .
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get a free quote
            </Link>
            <a href={phoneHref} className="font-semibold text-amber-800 underline">
              Call {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
