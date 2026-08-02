import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, CLICK_LOCK_FAQ_ITEMS } from "../seo";

const locationLinks = [
  { to: ROUTES.newportNews, label: "Newport News" },
  { to: ROUTES.yorktown, label: "Yorktown" },
  { to: ROUTES.williamsburg, label: "Williamsburg" },
  { to: ROUTES.poquoson, label: "Poquoson" },
];

export default function ClickLockFlooringPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Click-Lock Flooring"
        heading="Click-lock flooring installation in Hampton, VA"
        subheading="Floating floors that click together — common for laminate and vinyl plank — only last when the subfloor and layout are right."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Click-lock flooring installation is the method behind most modern
            floating floors: planks lock at the edges and rest over the
            subfloor instead of being glued or nailed down. Done well, you get
            a tight, quiet surface that installs faster than traditional nail-
            down hardwood. Done poorly, seams open, floors feel hollow, and
            transitions look unfinished.
          </p>
          <p className="mb-8 text-neutral-700">
            Pro Floor VA installs click-lock systems across Hampton and Hampton
            Roads with the same prep standards we use on every job — flatness
            checks, moisture readings, and expansion gaps that match the
            manufacturer&apos;s specs, not a guess on install day.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            How floating floor installation works
          </h2>
          <p className="mb-4 text-neutral-700">
            A floating floor is not fastened to the subfloor. The locked planks
            move together as temperature and humidity change, which is why
            perimeter gaps and transitions matter. Underlayment (or an attached
            pad) cushions the floor, reduces sound, and helps with minor
            irregularities — but it cannot fix a soft or uneven subfloor.
          </p>
          <p className="mb-8 text-neutral-700">
            We plan the layout so seams land cleanly at doorways, plan for
            expansion at walls and fixed objects, and leave you with a floor
            that walks solid — not one that flexes over dips the crew ignored.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Materials that use click-lock
          </h2>
          <p className="mb-4 text-neutral-700">
            Most quality{" "}
            <Link
              href={ROUTES.laminate}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring installation
            </Link>{" "}
            and many{" "}
            <Link
              href={ROUTES.vinyl}
              className="font-semibold text-amber-800 underline"
            >
              vinyl plank flooring installation
            </Link>{" "}
            products use a click-lock edge. The install method is shared; the
            material choice still depends on moisture, traffic, and budget.
            Laminate often wins on cost and look for dry rooms. Waterproof LVP
            is the safer pick for kitchens, baths, and rentals.
          </p>
          <p className="mb-8 text-neutral-700">
            This page covers the install method both materials share. For
            species, wear layers, and room-specific recommendations, use the
            laminate and vinyl pages — then come back here when you want to
            understand why the floating system succeeds or fails.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            DIY vs. professional click-lock installs
          </h2>
          <p className="mb-4 text-neutral-700">
            Big-box marketing makes click-lock look like a weekend project. For
            a single square room with a perfect subfloor, some homeowners pull
            it off. Most Hampton Roads homes are not that simple — out-of-square
            rooms, door casings, moisture near slabs, and transitions to tile or
            existing wood are where DIY floors show gaps and callbacks.
          </p>
          <p className="mb-8 text-neutral-700">
            Hiring a pro is less about &quot;can the planks click&quot; and more
            about prep, layout, and finish details. If you want the floor to
            look intentional in every doorway, we handle the parts that decide
            whether a floating floor lasts.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Subfloor prep click-lock floors need
          </h2>
          <p className="mb-4 text-neutral-700">
            Click-lock products telegraph dips and soft spots. We inspect for
            flatness, moisture, and damage before materials arrive. When the
            substrate needs work, we coordinate{" "}
            <Link
              href={ROUTES.subfloorRepair}
              className="font-semibold text-amber-800 underline"
            >
              subfloor repair and floor leveling in Hampton, VA
            </Link>{" "}
            so the floating floor sits on a sound surface — not over problems
            that will show through later.
          </p>
          <p className="mb-8 text-neutral-700">
            Need old floors out first? See our{" "}
            <Link
              href={ROUTES.flooringRemoval}
              className="font-semibold text-amber-800 underline"
            >
              flooring removal and installation
            </Link>{" "}
            services, or compare total project pricing in the{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost guide
            </Link>
            .
          </p>

          <h2 className="mb-4 text-3xl font-bold">What&apos;s included</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Free estimate with product and layout recommendations",
              "Subfloor flatness and moisture check before install",
              "Underlayment or pad setup per manufacturer requirements",
              "Clean transitions, expansion gaps, and full cleanup",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ServiceFaqSection items={CLICK_LOCK_FAQ_ITEMS} />

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
