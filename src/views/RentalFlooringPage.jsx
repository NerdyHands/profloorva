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
            . Both often use{" "}
            <Link
              href={ROUTES.clickLock}
              className="font-semibold text-amber-800 underline"
            >
              click-lock flooring installation
            </Link>{" "}
            for speed. When old floors must come out first, we handle{" "}
            <Link
              href={ROUTES.flooringRemoval}
              className="font-semibold text-amber-800 underline"
            >
              flooring removal and installation
            </Link>{" "}
            or dedicated{" "}
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

          <h2 className="mb-4 text-3xl font-bold">
            Flooring for property managers
          </h2>
          <p className="mb-8 text-neutral-700">
            Property managers need one point of contact, realistic turnaround
            windows, and installs that hold up across units — not a different
            finish standard every time a crew shows up. We coordinate access with
            leasing and maintenance teams, keep scopes consistent building to
            building, and quote volume work so multi-unit schedules stay
            predictable.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            House flipper flooring that lists faster
          </h2>
          <p className="mb-8 text-neutral-700">
            House flippers and investors usually need durable mid-grade floors
            that photograph well and finish on a tight closing timeline — without
            paying for finishes a buyer will replace. We recommend materials that
            balance cost, speed, and resale look, then schedule tear-out and
            install so vacant rehabs move toward list day instead of sitting on
            bare subfloors.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Landlord turnover, vacant, and foreclosure refreshes
          </h2>
          <p className="mb-8 text-neutral-700">
            Every vacant day costs rent. Landlord turnover jobs — including
            worn units, vacant properties, and foreclosure-style refreshes —
            prioritize waterproof vinyl or tough laminate, clean removal of
            damaged floors, and a schedule that gets the unit rent-ready.
            Tell us your make-ready date; we scope removal and install together
            so you are not coordinating two contractors for one turnover.
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
