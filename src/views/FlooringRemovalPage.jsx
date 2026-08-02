import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ServiceFaqSection } from "../components/ServiceFaqSection";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE, FLOORING_REMOVAL_FAQ_ITEMS } from "../seo";

export default function FlooringRemovalPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <PageHero
        label="Flooring Removal"
        heading="Flooring removal and installation in Hampton, VA"
        subheading="Clean tear-out of old floors — tile, carpet, vinyl, and more — so your next install starts on a ready surface."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-neutral-700">
            Flooring removal and installation is often one project, not two.
            Old floors that are swollen, cracked, stained, or simply outdated
            need to come out before a better surface goes down. Pro Floor VA
            removes existing flooring, hauls debris away, and inspects the
            subfloor so hardwood, laminate, or vinyl starts on a solid base.
          </p>
          <p className="mb-8 text-neutral-700">
            We schedule removal with your new install whenever possible so you
            are not living on bare plywood longer than necessary. Adjacent rooms
            stay protected, and the substrate is left ready for the next step.
          </p>

          <h2 className="mb-4 text-3xl font-bold">What removal includes</h2>
          <ul className="mb-10 space-y-3 text-neutral-700">
            {[
              "Lift and remove existing flooring materials",
              "Clear underlayment, staples, thinset, or adhesive residue as needed",
              "Haul-away of old flooring debris",
              "Subfloor inspection before your new install begins",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-3xl font-bold">
            Tile removal in Hampton, VA
          </h2>
          <p className="mb-8 text-neutral-700">
            Tile removal in Hampton, VA takes more than prying up pieces.
            Thinset, backer board, and transitions often need careful tear-out
            so the subfloor is not shredded underneath. We remove ceramic and
            porcelain floors, clear residual adhesive where needed, and flag any
            soft spots before your next floor is scheduled.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Carpet removal in Hampton, VA
          </h2>
          <p className="mb-8 text-neutral-700">
            Carpet removal in Hampton, VA includes pad, tack strips, and staples
            that otherwise snag new planks. Many homeowners upgrade from worn
            carpet to waterproof vinyl or laminate for easier cleaning and fewer
            allergen traps. We haul the old materials away and leave a clean
            deck ready for install.
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Old flooring removal in Hampton, VA
          </h2>
          <p className="mb-4 text-neutral-700">
            Old flooring removal in Hampton, VA covers mixed materials —
            sheet vinyl, glue-down planks, damaged floating floors, and leftover
            underlayment from prior remodels. If your project is laminate-
            specific, we also offer dedicated{" "}
            <Link
              href={ROUTES.laminateRemoval}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring removal
            </Link>
            . For vinyl tear-out before a new LVP install, this hub is the right
            starting point.
          </p>
          <p className="mb-8 text-neutral-700">
            After removal, soft or uneven areas can be addressed with{" "}
            <Link
              href={ROUTES.subfloorRepair}
              className="font-semibold text-amber-800 underline"
            >
              subfloor repair and floor leveling
            </Link>
            , then we move into{" "}
            <Link
              href={ROUTES.hardwood}
              className="font-semibold text-amber-800 underline"
            >
              hardwood floor installation
            </Link>
            ,{" "}
            <Link
              href={ROUTES.vinyl}
              className="font-semibold text-amber-800 underline"
            >
              vinyl plank flooring installation
            </Link>
            ,{" "}
            <Link
              href={ROUTES.laminate}
              className="font-semibold text-amber-800 underline"
            >
              laminate flooring installation
            </Link>
            , or{" "}
            <Link
              href={ROUTES.clickLock}
              className="font-semibold text-amber-800 underline"
            >
              click-lock flooring installation
            </Link>
            .
          </p>

          <ServiceFaqSection items={FLOORING_REMOVAL_FAQ_ITEMS} />

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
