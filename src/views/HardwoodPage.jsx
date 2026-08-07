import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, HARDWOOD_FAQ_ITEMS } from "../seo";

const locationLinks = [
  { to: ROUTES.newportNews, label: "Newport News" },
  { to: ROUTES.yorktown, label: "Yorktown" },
  { to: ROUTES.williamsburg, label: "Williamsburg" },
  { to: ROUTES.poquoson, label: "Poquoson" },
];

export default function HardwoodPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Hardwood Flooring"
        heading="Hardwood flooring installation in Hampton, VA"
        subheading="Solid and engineered hardwood both add real value to a Hampton home — but only if it's installed right."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Professional hardwood floor installation starts with the details
            most crews rush: subfloor prep, acclimation time, and expansion
            gaps. We handle all three as standard, not as an upsell.
            Hampton&apos;s coastal humidity swings make those steps even more
            important — skip them and you risk gaps, cupping, or buckling months
            after the crew leaves.
          </p>
          <p className="mb-8 text-neutral-700">
            Whether you&apos;re replacing carpet in a living room, upgrading a
            worn hallway, or finishing a main-level remodel, we walk the job
            with you before quoting so the scope matches the room — not a
            one-size estimate from a sales script.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Hardwood floor installation done right
          </h2>
          <p className="mb-8 text-neutral-700">
            Homeowners searching for hardwood floor installation want lasting
            results, not just boards on the ground. Our Hampton crews measure
            moisture, confirm flatness, and set expansion gaps so solid and
            engineered hardwood perform in coastal humidity — the same care
            that backs every hardwood flooring installation we schedule in
            Hampton Roads.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What&apos;s included</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Free in-home estimate and subfloor inspection",
              "Acclimation period so your new floors don't gap or buckle after install",
              "Solid hardwood, engineered hardwood, and hardwood repair/replacement in existing rooms",
              "Full cleanup — you can walk on your new floors the day we finish",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            Solid vs. engineered — which is right for your home?
          </h2>
          <p className="mb-4 text-neutral-700">
            Solid hardwood is a better fit for main-level rooms with stable
            humidity. Engineered hardwood holds up better over concrete slabs,
            in basements, or in homes with more humidity swings — common in
            Hampton&apos;s coastal climate. We&apos;ll tell you which one fits
            your specific room during the estimate, not push whichever is easier
            to install.
          </p>
          <p className="mb-8 text-neutral-700">
            Engineered planks can often go over existing floors when the
            surface is flat and sound. Solid boards usually need a clean
            substrate and careful moisture readings. Either way, we measure
            moisture and flatness before we schedule install day — not after
            materials arrive.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Engineered hardwood installation options
          </h2>
          <p className="mb-4 text-neutral-700">
            Engineered hardwood uses a real-wood wear layer over a stable,
            layered core. Depending on the product and substrate, it may be
            nailed, stapled, glued, or installed as a floating floor. The
            manufacturer&apos;s instructions, plank construction, subfloor
            type, and room conditions determine the right method—not installer
            preference alone.
          </p>
          <p className="mb-8 text-neutral-700">
            Over wood subfloors, fastened installation is common when the
            product allows it. Concrete slabs often require an approved
            adhesive or floating system plus the specified moisture-control
            steps. We review the exact flooring product before installation and
            plan doorway heights, transitions, perimeter expansion space, and
            stair or trim details as part of the scope.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Moisture, acclimation, and subfloor preparation
          </h2>
          <p className="mb-4 text-neutral-700">
            Hardwood responds to changes in indoor humidity. Before work starts,
            the material and jobsite need to meet the flooring
            manufacturer&apos;s conditions, and wood flooring and wood
            subfloors should be checked with appropriate moisture readings.
            Acclimation is based on those conditions and product guidance—not
            an automatic number of days for every species and home.
          </p>
          <p className="mb-8 text-neutral-700">
            The substrate must also be clean, sound, and flat enough for the
            selected plank width and installation system. Addressing movement,
            damaged panels, or uneven sections before boards go down helps
            prevent noise, loose areas, open joints, and avoidable finish
            problems later.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Our hardwood flooring installation process
          </h2>
          <ol className="mb-10 space-y-4 text-neutral-700">
            {[
              "Measure the rooms and plan plank direction, focal points, transitions, and material quantity.",
              "Confirm product requirements, site conditions, moisture readings, and subfloor readiness.",
              "Complete included removal and preparation, then install with the approved fastening, adhesive, or floating method.",
              "Finish transitions and trim details, clean the work area, and review the completed floor with you.",
            ].map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-900">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <h2 className="mb-4 text-3xl font-bold">
            Timeline for a typical hardwood job
          </h2>
          <p className="mb-4 text-neutral-700">
            Most hardwood projects start with an estimate visit, then material
            ordering and acclimation (often several days, depending on species
            and season). Install itself is usually a few days for average
            main-level square footage. You&apos;ll get a clear schedule before
            we start so you know when furniture needs to move and when you can
            walk on the finished floors.
          </p>
          <p className="mb-8 text-neutral-700">
            Your estimate should state the flooring product, installation
            method, measured area, removal and disposal, known subfloor work,
            transitions, trim responsibilities, and any site-condition
            requirements. Clear scope matters when comparing hardwood
            contractors because a labor-only bid is not equivalent to a
            complete removal, preparation, and installation quote.
          </p>
          <p className="mb-8 text-neutral-700">
            Still deciding between wood and waterproof options? Browse our{" "}
            <Link href={ROUTES.blog} className="font-semibold text-amber-800 underline">
              flooring blog
            </Link>
            . For pricing factors, see the{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost guide
            </Link>
            . We also handle{" "}
            <Link
              href={ROUTES.subfloorRepair}
              className="font-semibold text-amber-800 underline"
            >
              subfloor repair in Hampton, VA
            </Link>{" "}
            if your existing subfloor needs work before installation, and{" "}
            <Link
              href={ROUTES.laminateRemoval}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring removal
            </Link>{" "}
            when old floors must come out first.
          </p>

          <ServiceFaqSection items={HARDWOOD_FAQ_ITEMS} />

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
