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
                  <th className="px-4 py-3 font-semibold">Main cost variables</th>
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
                      {note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-sm text-neutral-500">
            Online per-square-foot figures rarely include the same scope.
            Material grade, room size, removal, and subfloor condition all
            affect the completed project price.
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

          <h2 className="mb-4 text-3xl font-bold">
            What a flooring installation estimate should include
          </h2>
          <p className="mb-4 text-neutral-700">
            A useful flooring estimate is more than square footage multiplied
            by a labor rate. It should identify the rooms and material, state
            whether old flooring is being removed, and explain who handles
            furniture, appliances, baseboards, transitions, delivery, and
            debris. It should also distinguish known preparation from repairs
            that can only be confirmed after tear-out.
          </p>
          <ul className="mb-10 grid gap-3 text-neutral-700 sm:grid-cols-2">
            {[
              "Measured installation area and waste allowance",
              "Flooring material and installation method",
              "Removal, disposal, and haul-away",
              "Underlayment or moisture-control requirements",
              "Known leveling or subfloor repairs",
              "Transitions, trim, stairs, and door clearances",
              "Furniture or appliance responsibilities",
              "Project schedule and payment terms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            How we build your Hampton flooring quote
          </h2>
          <ol className="mb-10 space-y-4 text-neutral-700">
            <li>
              <strong className="text-neutral-900">1. Walk the space.</strong>{" "}
              We measure rooms, closets, doorways, and transitions and note
              stairs, appliances, and occupied areas.
            </li>
            <li>
              <strong className="text-neutral-900">2. Check the floor.</strong>{" "}
              We look for movement, visible damage, moisture concerns, and
              uneven sections that may require preparation.
            </li>
            <li>
              <strong className="text-neutral-900">3. Confirm the finish.</strong>{" "}
              You choose the flooring category and finish details so the quote
              reflects the product and installation method you actually want.
            </li>
            <li>
              <strong className="text-neutral-900">4. Define the scope.</strong>{" "}
              The estimate identifies included labor and project details,
              making it easier to understand what can change if concealed
              damage is uncovered.
            </li>
          </ol>

          <h2 className="mb-4 text-3xl font-bold">
            Comparing flooring quotes fairly
          </h2>
          <p className="mb-8 text-neutral-700">
            Compare the total scope—not only the lowest line-item rate. One
            contractor may include removal, leveling, transitions, and cleanup
            while another lists only installation labor. Check the flooring
            model, quantity, prep allowance, warranty responsibilities, and
            exclusions on every bid. If two totals differ sharply, ask each
            installer to explain the missing or different scope before choosing.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Estimates for rentals and multi-unit work
          </h2>
          <p className="mb-8 text-neutral-700">
            Landlords and property managers may need a repeatable flooring
            standard, vacancy-sensitive scheduling, and separate scopes by
            unit. Our{" "}
            <Link
              href={ROUTES.rentalFlooring}
              className="font-semibold text-amber-800 underline"
            >
              rental property flooring service
            </Link>{" "}
            covers turnover planning and durable material choices. Share the
            number of units, access details, target completion dates, and
            whether the spaces are occupied when requesting an estimate.
          </p>

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
