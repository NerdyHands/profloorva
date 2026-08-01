import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

const tips = [
  {
    heading: "Hardwood",
    items: [
      "Sweep or vacuum daily to remove grit that scratches the surface.",
      "Use a lightly dampened microfiber mop — never soak hardwood.",
      "Keep indoor humidity between 35–55% to prevent warping.",
      "Place felt pads under furniture legs.",
      "Refinish every 7–10 years to restore the original shine.",
    ],
  },
  {
    heading: "Laminate",
    items: [
      "Vacuum regularly using a hard-floor setting to avoid scratches.",
      "Wipe spills immediately — standing water can swell the core.",
      "Use laminate-specific cleaners; avoid wax or polish.",
      "Use door mats at entries to minimize grit.",
      "Laminate cannot be refinished — replacement is the end-of-life option.",
    ],
  },
  {
    heading: "Vinyl",
    items: [
      "Sweep or vacuum as needed; LVP handles daily traffic well.",
      "Mop with a pH-neutral floor cleaner and warm water.",
      "Avoid abrasive scrubbers that dull the wear layer.",
      "Use furniture coasters to prevent indentation.",
      "Keep direct sunlight limited to prevent long-term fading.",
    ],
  },
];

export default function MaintenancePage() {
  return (
    <PageLayout>
      <PageHero
        label="Floor Care"
        heading="How to Maintain Your Floors"
        subheading="Simple routines extend the life of every flooring type. Here is what Pro Floor VA recommends after every installation."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3">
            {tips.map(({ heading, items }) => (
              <div key={heading}>
                <h2 className="mb-4 text-2xl font-bold">{heading}</h2>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-600">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-neutral-600">
              Have questions about caring for your new floors?
            </p>
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Contact Pro Floor VA
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
