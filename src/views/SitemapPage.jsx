import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { LOCATIONS } from "../data/locations";

const siteMapSections = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", to: ROUTES.home },
      { label: "About Pro Floor VA", to: ROUTES.about },
      { label: "Gallery", to: ROUTES.gallery },
      // { label: "Reviews", to: ROUTES.reviews }, // fake reviews, not company data
      { label: "Contact / Get a Quote", to: ROUTES.contact },
      { label: "FAQ", to: ROUTES.faq },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All Services", to: ROUTES.services },
      { label: "Hardwood Installation", to: ROUTES.hardwood },
      { label: "Laminate Installation", to: ROUTES.laminate },
      { label: "Vinyl Installation", to: ROUTES.vinyl },
      { label: "Click-Lock Flooring Installation", to: ROUTES.clickLock },
      { label: "Subfloor Repair", to: ROUTES.subfloorRepair },
      { label: "Flooring Removal", to: ROUTES.flooringRemoval },
      { label: "Laminate Flooring Removal", to: ROUTES.laminateRemoval },
      { label: "Flooring for Rental Properties", to: ROUTES.rentalFlooring },
      { label: "Kitchen and Bathroom Flooring", to: ROUTES.kitchenBathroom },
      { label: "Flooring Cost Guide", to: ROUTES.costGuide },
    ],
  },
  {
    heading: "Service Areas",
    links: LOCATIONS.map(({ city, route }) => ({
      label: `${city}, VA`,
      to: route,
    })),
  },
  {
    heading: "Resources",
    links: [
      { label: "Flooring Guide", to: ROUTES.flooringGuide },
      { label: "Blog", to: ROUTES.blog },
      { label: "Floor Maintenance", to: ROUTES.maintenance },
      { label: "Warranty Information", to: ROUTES.warranty },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: ROUTES.privacy },
      { label: "Terms of Service", to: ROUTES.terms },
      { label: "Accessibility", to: ROUTES.accessibility },
    ],
  },
];

export default function SitemapPage() {
  return (
    <PageLayout>
      <PageHero
        label="Sitemap"
        heading="Navigate Our Site"
        subheading="A complete directory of every page on profloorva.com."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {siteMapSections.map(({ heading, links }) => (
              <div key={heading}>
                <h2 className="mb-4 text-lg font-bold">{heading}</h2>
                <ul className="space-y-2">
                  {links.map(({ label, to }) => (
                    <li key={`${heading}-${to}`}>
                      <Link
                        href={to}
                        className="text-neutral-600 underline hover:text-neutral-900"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
