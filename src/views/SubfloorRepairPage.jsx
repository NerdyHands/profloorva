import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, SUBFLOOR_FAQ_ITEMS } from "../seo";

export default function SubfloorRepairPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Subfloor Repair"
        heading="Subfloor repair in Hampton, VA"
        subheading="A new floor is only as good as what's underneath. We inspect, repair, or replace damaged subfloors before installation — not after problems show up."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Soft spots, squeaks, water damage, and uneven plywood or OSB are
            common in Hampton Roads homes — especially where humidity, plumbing
            leaks, or decades-old construction have taken a toll. Installing
            hardwood, laminate, or vinyl over a compromised subfloor locks those
            problems in place.
          </p>
          <p className="mb-8 text-neutral-700">
            Pro Floor VA includes a subfloor inspection with every free
            estimate. If repair or replacement is needed, we scope it clearly
            before work starts so your quote covers the full job — not a
            surprise midway through install.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Repair vs. replacement — what&apos;s the difference?
          </h2>
          <p className="mb-4 text-neutral-700">
            Repair usually means fixing localized soft spots, sistering joists
            where needed, fastening squeaky seams, or leveling dips so the new
            floor sits flat. Replacement means removing damaged panels and
            installing new structural decking when the damage is widespread or
            the material is too compromised to trust.
          </p>
          <p className="mb-8 text-neutral-700">
            We recommend the smallest scope that leaves a sound, flat surface —
            not a full tear-out when a targeted repair will do. Moisture
            readings and a hands-on walk of the floor tell us which path is
            right.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Signs you may need subfloor work
          </h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Soft or spongy spots when you walk across the room",
              "Persistent squeaks that fastening alone hasn't fixed",
              "Visible water staining, buckling, or musty odors near bathrooms or kitchens",
              "Uneven floors that make furniture rock or doors bind",
              "Previous flooring that failed early — often a subfloor issue underneath",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            Floor leveling and floor preparation in Hampton, VA
          </h2>
          <p className="mb-4 text-neutral-700">
            Floor leveling in Hampton, VA is part of getting a new floor to sit
            flat and quiet. We fill dips, flatten high spots, and confirm the
            surface meets the flatness tolerance your hardwood, laminate, or
            vinyl needs. General floor preparation also includes moisture
            checks, fastening squeaky seams, and clearing debris so install day
            is not spent chasing substrate problems.
          </p>
          <p className="mb-8 text-neutral-700">
            Looking for floor leveling or general floor preparation before a
            new install? This is the service that covers it — repair, leveling,
            and prep scoped in your free estimate, not as a surprise mid-job.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            How subfloor repair pairs with new flooring
          </h2>
          <p className="mb-4 text-neutral-700">
            Most clients come to us for a new floor, and subfloor work is part
            of getting that install right. We coordinate repair and installation
            so you deal with one crew and one schedule. After the subfloor is
            sound, we move straight into{" "}
            <Link
              href={ROUTES.hardwood}
              className="font-semibold text-amber-800 underline"
            >
              hardwood flooring installation
            </Link>
            ,{" "}
            <Link
              href={ROUTES.vinyl}
              className="font-semibold text-amber-800 underline"
            >
              vinyl plank flooring installation
            </Link>
            , or laminate — with the prep already done.
          </p>
          <p className="mb-8 text-neutral-700">
            If you&apos;re comparing total project cost, subfloor condition is
            one of the biggest variables. See our{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost guide
            </Link>{" "}
            for what else affects price.
          </p>

          <ServiceFaqSection items={SUBFLOOR_FAQ_ITEMS} />

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
