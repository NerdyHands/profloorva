import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, LAMINATE_REMOVAL_FAQ_ITEMS } from "../seo";

export default function LaminateRemovalPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Flooring Removal"
        heading="Laminate flooring removal in Hampton, VA"
        subheading="Clean removal of old laminate — haul-away included — so your new floor starts on a solid, ready surface."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Old laminate that&apos;s swollen, gapped, scratched, or simply
            outdated often needs to come out before a better floor goes in.
            Pro Floor VA removes existing laminate, underlayment, and debris,
            then inspects the subfloor so the next install — hardwood, vinyl, or
            new laminate — sits flat and lasts.
          </p>
          <p className="mb-8 text-neutral-700">
            Removal is usually scheduled with your new installation so you
            aren&apos;t living on bare plywood longer than necessary. We protect
            adjacent rooms, haul materials away, and leave the substrate ready
            for the next step.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What removal includes</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Lift and remove existing laminate planks or sheets",
              "Clear underlayment, staples, and adhesive residue as needed",
              "Haul-away of old flooring materials",
              "Subfloor inspection before your new install begins",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            Floating laminate vs. glued flooring removal
          </h2>
          <p className="mb-4 text-neutral-700">
            Most modern laminate is a floating, click-lock floor. Once trim and
            transitions are addressed, the planks and foam underlayment can
            usually be lifted in sections. Older glued products take more
            scraping and substrate cleanup, and flooring around cabinets,
            islands, or built-ins may require careful cuts rather than a simple
            wall-to-wall tear-out.
          </p>
          <p className="mb-8 text-neutral-700">
            The existing installation method affects labor, debris volume, and
            how much preparation the next floor needs. During the estimate, we
            identify visible layers and transitions, discuss any known leaks or
            pet damage, and confirm which rooms, closets, and stairs are part of
            the removal scope.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Our laminate removal process
          </h2>
          <ol className="mb-10 space-y-4 text-neutral-700">
            {[
              {
                title: "Protect and isolate the work area.",
                text: "We plan access, protect adjoining finishes, and confirm furniture and appliance responsibilities.",
              },
              {
                title: "Remove planks and underlayment.",
                text: "The crew works back from an accessible edge and separates materials for efficient loading and haul-away.",
              },
              {
                title: "Clean the substrate.",
                text: "Loose staples, pad, adhesive residue, and debris are cleared so the subfloor can be evaluated.",
              },
              {
                title: "Inspect before replacement.",
                text: "We check for soft spots, swelling, movement, and uneven areas before installing the selected new floor.",
              },
            ].map(({ title, text }, index) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-900">
                  {index + 1}
                </span>
                <span>
                  <strong className="text-neutral-900">{title}</strong> {text}
                </span>
              </li>
            ))}
          </ol>

          <h2 className="mb-4 text-3xl font-bold">
            What changes a laminate removal estimate?
          </h2>
          <p className="mb-8 text-neutral-700">
            Square footage is only one factor. Glued material, multiple floor
            layers, stairs, tight closets, appliance moves, difficult disposal
            access, and damaged underlayment can all change the scope. We also
            separate tear-out from any leveling or panel replacement found
            underneath, so removal and repair are not confused as the same
            service.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Removing old flooring before installation
          </h2>
          <p className="mb-4 text-neutral-700">
            Many Hampton homeowners upgrade from worn laminate to waterproof{" "}
            <Link
              href={ROUTES.vinyl}
              className="font-semibold text-amber-800 underline"
            >
              vinyl plank flooring installation
            </Link>{" "}
            or classic{" "}
            <Link
              href={ROUTES.hardwood}
              className="font-semibold text-amber-800 underline"
            >
              hardwood flooring installation
            </Link>
            . Others refresh with newer{" "}
            <Link
              href={ROUTES.laminate}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring installation
            </Link>
            . Either way, a clean tear-out is the starting point.
          </p>
          <p className="mb-8 text-neutral-700">
            If the subfloor shows soft spots or uneven areas after removal, we
            can handle{" "}
            <Link
              href={ROUTES.subfloorRepair}
              className="font-semibold text-amber-800 underline"
            >
              subfloor repair in Hampton, VA
            </Link>{" "}
            before the new floor goes down. Removing tile, carpet, vinyl, or
            mixed materials instead? See our general{" "}
            <Link
              href={ROUTES.flooringRemoval}
              className="font-semibold text-amber-800 underline"
            >
              flooring removal and installation
            </Link>{" "}
            hub.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Removing tile or mixed flooring instead?
          </h2>
          <p className="mb-8 text-neutral-700">
            Laminate removal and tile removal require different tools and
            preparation. Ceramic or porcelain floors may include thinset,
            backer board, or uncoupling membrane that must be removed without
            unnecessary damage to the structure below. Homes with laminate in
            one room and tile, carpet, or vinyl in another are scoped through
            our{" "}
            <Link
              href={ROUTES.flooringRemoval}
              className="font-semibold text-amber-800 underline"
            >
              Hampton flooring removal service
            </Link>{" "}
            so each material and transition is accounted for.
          </p>

          <ServiceFaqSection items={LAMINATE_REMOVAL_FAQ_ITEMS} />

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
