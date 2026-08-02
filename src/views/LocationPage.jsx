import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { getLocationBySlug } from "../data/locations";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE } from "../seo";

const serviceLinks = [
  { to: ROUTES.hardwood, label: "Hardwood — solid and engineered" },
  { to: ROUTES.laminate, label: "Laminate — budget-friendly, fast install" },
  { to: ROUTES.vinyl, label: "Vinyl plank/tile — waterproof, ideal for kitchens and baths" },
];

export default function LocationPage({ citySlug }) {
  const location = getLocationBySlug(citySlug);
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  if (!location) {
    return (
      <PageLayout>
        <PageHero heading="Location not found" subheading="Please choose a service area from our sitemap." />
      </PageLayout>
    );
  }

  const { city, neighborhoods, intro } = location;

  return (
    <PageLayout>
      <PageHero
        label={`${city}, VA`}
        heading={`Flooring installation in ${city}, VA`}
        subheading={`Hardwood, laminate, and vinyl flooring for ${city} homeowners — installed by the same Pro Floor VA crew that serves Hampton.`}
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-8 text-lg text-neutral-700">{intro}</p>

          <h2 className="mb-4 text-3xl font-bold">
            Flooring we install in {city}
          </h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {serviceLinks.map(({ to, label }) => (
              <li key={to} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <Link href={to} className="underline hover:text-amber-800">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">Neighborhoods we know</h2>
          <p className="mb-8 text-neutral-700">
            We regularly work in and around {neighborhoods.join(", ")} — and
            across the rest of {city}. Free in-home estimate, no obligation.
            Most installs finish in 2–3 days.
          </p>

          <p className="mb-8 text-neutral-700">
            New to Pro Floor VA?{" "}
            <Link href={ROUTES.about} className="font-semibold text-amber-800 underline">
              Learn about our Hampton Roads crew
            </Link>{" "}
            or browse the{" "}
            <Link href={ROUTES.gallery} className="font-semibold text-amber-800 underline">
              installation gallery
            </Link>
            .
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get My Free Quote
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
