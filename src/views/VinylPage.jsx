import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, VINYL_FAQ_ITEMS } from "../seo";

const locationLinks = [
  { to: ROUTES.newportNews, label: "Newport News" },
  { to: ROUTES.yorktown, label: "Yorktown" },
  { to: ROUTES.williamsburg, label: "Williamsburg" },
  { to: ROUTES.poquoson, label: "Poquoson" },
];

export default function VinylPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Vinyl Flooring"
        heading="Vinyl plank flooring installation in Hampton, VA"
        subheading="LVP and LVT are among the most requested floors in Hampton — waterproof, scratch-resistant, and ready for kitchens, baths, and mudrooms."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            We install both plank and tile styles, matched to whatever look
            you&apos;re after. Luxury vinyl plank (LVP) mimics wood grain;
            luxury vinyl tile (LVT) leans toward stone and patterned looks.
            Both use a waterproof core that holds up in wet rooms where solid
            hardwood is a poor fit.
          </p>
          <p className="mb-8 text-neutral-700">
            Vinyl plank is also one of the fastest installs we do — most
            average rooms finish the same day once the subfloor is ready.
            Transitions, underlayment, and leveling are planned during the
            estimate so there are no surprises on install day.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What&apos;s included</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Free estimate and material walkthrough — plank (wood look) or tile (stone look)",
              "Waterproof core installation, safe for kitchens, baths, and laundry rooms",
              "Subfloor leveling where needed so your floor doesn't telegraph imperfections",
              "Same-week scheduling in most cases",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            When vinyl plank is the better choice
          </h2>
          <p className="mb-4 text-neutral-700">
            Choose LVP or LVT when you need water resistance, pet-friendly
            durability, or a lower maintenance routine than refinished
            hardwood. It&apos;s a strong fit for open kitchens that spill into
            living areas, bathrooms with splash zones, and rental turnovers
            where downtime matters.
          </p>
          <p className="mb-8 text-neutral-700">
            Wear-layer thickness and core construction affect how the floor
            feels underfoot and how it handles heavy traffic. We&apos;ll walk
            you through options that match your rooms and budget — without
            pushing premium grades you don&apos;t need.
          </p>

          <h2 className="mb-4 text-3xl font-bold">Prep and transitions</h2>
          <p className="mb-8 text-neutral-700">
            A flat, clean subfloor is the difference between a quiet, tight
            install and one that shows every dip. We check levels, address soft
            spots, and plan transitions to tile, carpet, or existing wood so
            the finished look is continuous. Need deeper prep? We also handle{" "}
            <Link
              href={ROUTES.subfloorRepair}
              className="font-semibold text-amber-800 underline"
            >
              subfloor repair in Hampton, VA
            </Link>{" "}
            if your existing subfloor needs work before installation. Not sure
            if vinyl or hardwood fits your rooms? Browse our{" "}
            <Link href={ROUTES.blog} className="font-semibold text-amber-800 underline">
              flooring blog
            </Link>{" "}
            or check our{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost guide
            </Link>
            . For wet rooms specifically, see{" "}
            <Link
              href={ROUTES.kitchenBathroom}
              className="font-semibold text-amber-800 underline"
            >
              kitchen and bathroom flooring
            </Link>
            .
          </p>

          <ServiceFaqSection items={VINYL_FAQ_ITEMS} />

          <h2 className="mb-4 text-3xl font-bold">Serving Hampton Roads</h2>
          <p className="mb-4 text-neutral-700">
            Serving Hampton,{" "}
            {locationLinks.map(({ to, label }, index) => (
              <React.Fragment key={to}>
                <Link href={to} className="font-semibold text-amber-800 underline">
                  {label}
                </Link>
                {index < locationLinks.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
            .
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
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
