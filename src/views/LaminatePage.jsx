import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE } from "../seo";

const locationLinks = [
  { to: ROUTES.newportNews, label: "Newport News" },
  { to: ROUTES.yorktown, label: "Yorktown" },
  { to: ROUTES.williamsburg, label: "Williamsburg" },
  { to: ROUTES.poquoson, label: "Poquoson" },
];

export default function LaminatePage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Laminate Flooring"
        heading="Laminate flooring installation in Hampton, VA"
        subheading="Laminate gets you the look of hardwood or tile at a lower cost and a faster install — usually finished in 1–2 days."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-8 text-lg text-neutral-700">
            Professional laminate floor installation is a strong fit for
            high-traffic rooms, rental properties, and budget-conscious remodels
            where you still want the room to look finished, not cheap — usually
            completed in 1–2 days once the subfloor is ready.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Laminate floor installation for Hampton homes
          </h2>
          <p className="mb-8 text-neutral-700">
            Laminate floor installation gives you the look of hardwood or tile
            at a lower cost and a faster schedule. We cut clean seams, set
            moisture-resistant underlayment where rooms need it, and leave
            tight transitions so your laminate flooring installation in Hampton,
            VA looks intentional — not rushed.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What&apos;s included</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Free estimate with material recommendations based on your room and budget",
              "Moisture-resistant underlayment where it's needed (kitchens, basements)",
              "Full removal of old flooring and haul-away",
              "Clean, tight seams — no visible gapping at walls or transitions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-neutral-700">
            Laminate pricing depends on material grade and any subfloor prep.
            Ask for your exact number on a free quote — or see what typically
            affects price in our{" "}
            <Link href={ROUTES.costGuide} className="font-semibold text-amber-800 underline">
              flooring installation cost guide
            </Link>
            . Need old floors out first? We offer{" "}
            <Link
              href={ROUTES.laminateRemoval}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring removal
            </Link>
            . Most laminate uses a floating{" "}
            <Link
              href={ROUTES.clickLock}
              className="font-semibold text-amber-800 underline"
            >
              click-lock flooring installation
            </Link>{" "}
            method — see how that system works. Comparing options? Also see{" "}
            <Link href={ROUTES.vinyl} className="font-semibold text-amber-800 underline">
              vinyl plank installation
            </Link>
            . Managing rentals? Explore{" "}
            <Link
              href={ROUTES.rentalFlooring}
              className="font-semibold text-amber-800 underline"
            >
              flooring for rental properties
            </Link>
            .
          </p>

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
