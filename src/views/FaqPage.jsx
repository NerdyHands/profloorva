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
