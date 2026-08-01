import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, RENTAL_FAQ_ITEMS } from "../seo";

export default function RentalFlooringPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Rental & Investment Properties"
        heading="Flooring for rental properties in Hampton, VA"
        subheading="Faster turnarounds, durable materials, and volume pricing for landlords, property managers, and investors across Hampton Roads."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Vacancy costs money. Property managers and landlords need flooring
            that installs quickly, stands up to tenant traffic, and looks good
            enough to rent — without overspending on finishes that won&apos;t
            survive the next turnover. Pro Floor VA works directly with PMs and
            owners on single units and multi-property schedules.
          </p>
          <p className="mb-8 text-neutral-700">
            We prioritize durable, cost-effective options like waterproof vinyl
            plank and quality laminate, clear scopes before crews arrive, and
            communication that fits how property managers actually work — one
            point of contact, realistic timelines, and no surprise add-ons.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Built for turnovers and repeat work
          </h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Fast scheduling to reduce days vacant between tenants",
              "Materials chosen for durability and easy maintenance",
              "Consistent install standards across units and buildings",
              "Direct coordination with property managers and leasing teams",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            Materials that make sense for rentals
          </h2>
          <p className="mb-4 text-neutral-700">
            Most rental projects land on waterproof{" "}
            <Link
              href={ROUTES.vinyl}
              className="font-semibold text-amber-800 underline"
            >
              vinyl plank flooring installation
            </Link>{" "}
            or durable{" "}
            <Link
              href={ROUTES.laminate}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring installation
            </Link>
            . Both install quickly and hold up better than carpet in high-traffic
            units. When old floors must come out first, we handle{" "}
            <Link
              href={ROUTES.laminateRemoval}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring removal
            </Link>{" "}
            as part of the same scope.
          </p>
          <p className="mb-8 text-neutral-700">
            Need a sense of what drives pricing across units? Review our{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost guide
            </Link>
            , then ask about volume pricing for multiple properties.
          </p>

          <ServiceFaqSection items={RENTAL_FAQ_ITEMS} />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Property manager? Ask about volume pricing
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
