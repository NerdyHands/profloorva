import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

const services = [
  {
    to: ROUTES.hardwood,
    title: "Hardwood Installation",
    description:
      "Solid hardwood brings timeless beauty and lasting value. We install and finish all species to your specification, from red oak to white maple.",
    linkLabel: "Hardwood flooring installation",
  },
  {
    to: ROUTES.laminate,
    title: "Laminate Installation",
    description:
      "Durable laminate delivers the look you want with the practicality your family needs — at a price that makes sense.",
    linkLabel: "Laminate flooring installation",
  },
  {
    to: ROUTES.vinyl,
    title: "Vinyl Installation",
    description:
      "100% waterproof luxury vinyl plank stands up to high-traffic areas and wet spaces while maintaining the aesthetic of real wood.",
    linkLabel: "Vinyl plank flooring installation",
  },
  {
    to: ROUTES.subfloorRepair,
    title: "Subfloor Repair",
    description:
      "Repair or replace damaged subfloors before new flooring goes down — soft spots, squeaks, and moisture issues included.",
    linkLabel: "Subfloor repair in Hampton, VA",
  },
  {
    to: ROUTES.laminateRemoval,
    title: "Laminate Removal",
    description:
      "Clean removal of old laminate with haul-away so your next install starts on a ready surface.",
    linkLabel: "Laminate flooring removal",
  },
  {
    to: ROUTES.rentalFlooring,
    title: "Rental Property Flooring",
    description:
      "Fast turnarounds and durable materials for landlords and property managers — ask about volume pricing.",
    linkLabel: "Flooring for rental properties",
  },
  {
    to: ROUTES.kitchenBathroom,
    title: "Kitchen & Bathroom Flooring",
    description:
      "Waterproof and water-resistant floors built for kitchens, baths, and other splash-prone rooms.",
    linkLabel: "Kitchen and bathroom flooring",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Services"
        heading="Flooring Solutions for Every Home"
        subheading="Hardwood, laminate, vinyl, and related prep services for Hampton and surrounding Hampton Roads communities."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ to, title, description, linkLabel }) => (
              <div
                key={to}
                className="flex flex-col rounded-xl border border-neutral-200 p-6 shadow-sm"
              >
                <h2 className="mb-3 text-2xl font-bold">{title}</h2>
                <p className="mb-6 flex-1 text-neutral-600">{description}</p>
                <Link
                  href={to}
                  className="font-semibold text-amber-700 underline hover:text-amber-900"
                >
                  {linkLabel} →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
