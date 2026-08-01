import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

const sections = [
  {
    heading: "Choosing the right flooring type",
    body: "The best flooring for your home depends on the room, your household, and your budget. Hardwood adds value and warmth. Laminate gives you a wood look with better scratch resistance. Vinyl is fully waterproof and ideal anywhere moisture is a concern.",
  },
  {
    heading: "Subfloor preparation matters",
    body: "A floor is only as good as what's beneath it. Before any installation, the subfloor must be clean, flat, and structurally sound. Pro Floor VA inspects and prepares subfloors on every project — this step is not optional.",
  },
  {
    heading: "Acclimation",
    body: "Wood-based flooring products need time to adjust to the temperature and humidity of your home before installation. We typically acclimate materials for 48–72 hours on-site. Skipping this step causes gapping or buckling after install.",
  },
  {
    heading: "Understanding wear ratings",
    body: "Laminate and vinyl products are rated by AC or wear-layer thickness. Higher ratings mean more durability. For residential use, AC3 laminate and 12-mil vinyl are solid choices for most rooms. Busy households may want to step up.",
  },
  {
    heading: "Managing humidity year-round",
    body: "Hampton Roads is humid. Wood and wood-composite floors move with seasonal moisture changes. Keep your home's humidity between 35–55% year-round with an HVAC humidifier or dehumidifier. This single step protects your investment.",
  },
  {
    heading: "When to refinish vs. replace",
    body: "Solid hardwood can be sanded and refinished 3–5 times over its life. Engineered hardwood may allow one or two refinishes. Laminate and vinyl cannot be refinished — when they are worn, they are replaced. Factor in long-term cost when choosing materials.",
  },
];

export default function FlooringGuidePage() {
  return (
    <PageLayout>
      <PageHero
        label="Flooring Guide"
        heading="Everything You Need to Know Before You Buy"
        subheading="A straightforward guide from the team at Pro Floor VA to help Hampton homeowners make confident flooring decisions."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-10">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="border-b border-neutral-200 pb-10 last:border-0">
                <h2 className="mb-3 text-2xl font-bold">{heading}</h2>
                <p className="text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-neutral-600">
              Ready to move forward? We provide free on-site consultations.
            </p>
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
