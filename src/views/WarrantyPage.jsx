import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

export default function WarrantyPage() {
  return (
    <PageLayout>
      <PageHero
        label="Warranty"
        heading="We Stand Behind Every Job"
        subheading="Every Pro Floor VA installation is backed by a workmanship warranty. Here is what that means for you."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">Workmanship warranty</h2>
          <p className="mb-4 text-neutral-600">
            Pro Floor VA warrants all labor and workmanship against defects
            caused by improper installation. If a floor section lifts, buckles,
            or separates due to a workmanship issue, we will return and correct
            it at no charge.
          </p>
          <p className="mb-8 text-neutral-600">
            Warranty coverage periods and specific terms vary by project type
            and materials used. Your installer will walk you through the details
            before work begins, and all terms are confirmed in your written
            project agreement.
          </p>
          <h2 className="mb-6 text-3xl font-bold">What is not covered</h2>
          <ul className="mb-8 space-y-3 text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-neutral-300" />
              <span>Damage caused by flooding, excessive moisture, or plumbing leaks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-neutral-300" />
              <span>Normal wear and tear over time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-neutral-300" />
              <span>Damage from moving heavy furniture without floor protection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-neutral-300" />
              <span>Manufacturer defects in materials (covered by the manufacturer&apos;s warranty)</span>
            </li>
          </ul>
          <Link
            href={ROUTES.contact}
            className={`inline-flex items-center justify-center ${heroButtonClass}`}
          >
            Contact Us About Your Project
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
