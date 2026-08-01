import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE } from "../seo";

const pricingRows = [
  {
    type: "Laminate",
    to: ROUTES.laminate,
    note: "Depends on grade and subfloor prep",
  },
  {
    type: "Vinyl plank (LVP/LVT)",
    to: ROUTES.vinyl,
    note: "Depends on thickness, wear layer, and leveling",
  },
  {
    type: "Engineered hardwood",
    to: ROUTES.hardwood,
    note: "Depends on species, width, and acclimation needs",
  },
  {
    type: "Solid hardwood",
    to: ROUTES.hardwood,
    note: "Depends on species, finish, and room conditions",
  },
];

const priceFactors = [
  {
    content: (
      <>
        Removal and haul-away of existing flooring — including{" "}
        <Link
          href={ROUTES.laminateRemoval}
          className="font-semibold text-amber-800 underline"
        >
          laminate flooring removal
        </Link>
      </>
    ),
  },
  {
    content: (
      <>
        <Link
          href={ROUTES.subfloorRepair}
          className="font-semibold text-amber-800 underline"
        >
          Subfloor repair in Hampton, VA
        </Link>{" "}
        or leveling
      </>
    ),
  },
  { content: "Material grade (builder-grade vs. premium)" },
  { content: "Room shape and square footage" },
];

export default function CostGuidePage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Cost Guide"
        heading="How much does flooring installation cost in Hampton, VA?"
        subheading="A straight answer: pricing depends on material, prep, and room conditions — and every Pro Floor VA quote is locked in after a free in-home walkthrough."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-8 text-lg text-neutral-700">
            We don&apos;t publish fake dollar ranges that change when we show
            up. Instead, here&apos;s what affects your price — and how to get
            your exact number.
          </p>

          <div className="mb-10 overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full min-w-[32rem] text-left text-sm md:text-base">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Flooring type</th>
                  <th className="px-4 py-3 font-semibold">Typical installed cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map(({ type, to, note }) => (
                  <tr key={type} className="border-t border-neutral-200">
                    <td className="px-4 py-4">
                      <Link href={to} className="font-semibold text-amber-800 underline">
                        {type}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-neutral-700">
                      <Link
                        href={ROUTES.contact}
                        className="font-semibold text-amber-800 underline"
                      >
                        Get your exact price with a free quote
                      </Link>
                      <span className="mt-1 block text-sm text-neutral-500">
                        {note}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-sm text-neutral-500">
            Ranges depend on material grade, room size, and subfloor condition.
            Every quote includes a free in-home walkthrough so the number you
            get is the number you pay.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What affects your price</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {priceFactors.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item.content}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-neutral-700">
            More questions? See our{" "}
            <Link href={ROUTES.faq} className="font-semibold text-amber-800 underline">
              flooring installation FAQ
            </Link>{" "}
            or compare materials in the{" "}
            <Link href={ROUTES.flooringGuide} className="font-semibold text-amber-800 underline">
              flooring buyer&apos;s guide
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
