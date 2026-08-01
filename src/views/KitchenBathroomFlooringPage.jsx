import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, KITCHEN_BATH_FAQ_ITEMS } from "../seo";

export default function KitchenBathroomFlooringPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Kitchens & Bathrooms"
        heading="Kitchen and bathroom flooring in Hampton, VA"
        subheading="Durable kitchen flooring and waterproof bathroom flooring options built for spills, splash zones, and everyday Hampton Roads living."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Kitchens and bathrooms ask more of a floor than a bedroom or hallway.
            Water, grease, foot traffic, and temperature swings around appliances
            and plumbing demand materials that resist moisture without looking
            utilitarian. Pro Floor VA helps Hampton homeowners choose and install
            floors that fit these rooms specifically.
          </p>
          <p className="mb-8 text-neutral-700">
            Whether you&apos;re refreshing a galley kitchen, finishing a primary
            bath remodel, or matching open-concept living to a wet zone, we
            focus on waterproof and water-resistant products, clean
            transitions, and prep that keeps moisture from reaching the
            subfloor.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Waterproof and water-resistant options
          </h2>
          <p className="mb-4 text-neutral-700">
            <Link
              href={ROUTES.vinyl}
              className="font-semibold text-amber-800 underline"
            >
              Vinyl plank flooring installation
            </Link>{" "}
            is the most common choice for kitchens and baths — a waterproof
            core, wood or stone looks, and fast install times. Quality{" "}
            <Link
              href={ROUTES.laminate}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring installation
            </Link>{" "}
            with moisture-resistant underlayment can work in some kitchens when
            spills are wiped promptly, though full waterproof vinyl is usually
            the safer bet for bathrooms.
          </p>
          <p className="mb-8 text-neutral-700">
            Solid hardwood is rarely ideal for bathrooms and often a
            compromise in wet kitchens. If you love the look of wood, we&apos;ll
            talk through engineered options and room boundaries so water-prone
            zones get the right product.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            What we cover in kitchen and bath installs
          </h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Material recommendations matched to splash zones and traffic",
              "Transitions to adjacent rooms and existing flooring",
              "Subfloor checks for moisture and flatness before install",
              "Cleanup so appliances and fixtures can return to place quickly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-neutral-700">
            Curious about pricing for a kitchen or bath refresh? Start with our{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost guide
            </Link>
            , then request a free walkthrough for your exact rooms.
          </p>

          <ServiceFaqSection items={KITCHEN_BATH_FAQ_ITEMS} />

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
