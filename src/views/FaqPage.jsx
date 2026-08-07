"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { ROUTES } from "../config/routes";
import { FAQ_ITEMS } from "../seo";
import { heroButtonClass } from "../styles/buttons";

export default function FaqPage() {
  return (
    <PageLayout>
      <PageHero
        label="FAQ"
        heading="Flooring installation FAQ — Hampton, VA"
        subheading="Common questions about timelines, prep, cost, warranty, and where we work across Hampton Roads."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-6 text-lg text-neutral-700">
              Planning a new floor usually raises questions about material,
              preparation, disruption, and price. These answers explain how Pro
              Floor VA approaches residential flooring projects in Hampton and
              nearby Hampton Roads communities. Product-specific requirements
              can vary, so we confirm the details for your rooms and selected
              flooring during the estimate.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: ROUTES.vinyl,
                  title: "Vinyl plank installation",
                  text: "Waterproof flooring, wear layers, prep, and timelines",
                },
                {
                  href: ROUTES.hardwood,
                  title: "Hardwood installation",
                  text: "Solid vs. engineered wood, moisture, and acclimation",
                },
                {
                  href: ROUTES.costGuide,
                  title: "Installation cost guide",
                  text: "Estimate scope, price factors, and quote comparisons",
                },
                {
                  href: ROUTES.subfloorRepair,
                  title: "Subfloor repair",
                  text: "Soft spots, uneven floors, moisture, and preparation",
                },
              ].map(({ href, title, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-neutral-200 p-5 transition hover:border-amber-500 hover:bg-amber-50"
                >
                  <span className="block font-bold text-neutral-900">{title}</span>
                  <span className="mt-1 block text-sm text-neutral-600">{text}</span>
                </Link>
              ))}
            </div>
          </div>

          <h2 className="mb-6 text-3xl font-bold">
            Flooring questions from Hampton homeowners
          </h2>
          <Accordion type="multiple" className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="md:py-5 md:text-md text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  {item.question === "How much does installation cost?" ? (
                    <>
                      {item.answer}{" "}
                      <Link
                        href={ROUTES.costGuide}
                        className="font-semibold text-amber-800 underline"
                      >
                        Read the flooring cost guide
                      </Link>
                      .
                    </>
                  ) : item.question === "What if I need repairs first?" ? (
                    <>
                      {item.answer}{" "}
                      <Link
                        href={ROUTES.subfloorRepair}
                        className="font-semibold text-amber-800 underline"
                      >
                        Subfloor repair in Hampton, VA
                      </Link>
                      .
                    </>
                  ) : (
                    item.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-xl bg-neutral-100 p-6 md:p-8">
            <h2 className="mb-3 text-2xl font-bold">
              What to have ready for an estimate
            </h2>
            <p className="mb-4 text-neutral-700">
              You do not need final material selections before contacting us.
              A few project details help make the walkthrough more useful:
            </p>
            <ul className="space-y-2 text-neutral-700">
              {[
                "The rooms or approximate area you want to update",
                "Photos of the existing floor and any visible damage",
                "Material preferences, samples, or products already purchased",
                "Known leaks, soft spots, squeaks, or uneven areas",
                "Your target timing and any occupied-room constraints",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold">Still have questions?</h2>
            <p className="mb-6 text-neutral-600">
              Reach out for a free quote — or browse{" "}
              <Link href={ROUTES.blog} className="font-semibold text-amber-800 underline">
                flooring tips on our blog
              </Link>
              .
            </p>
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
