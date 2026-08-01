"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { ROUTES } from "../config/routes.js";
import Link from "next/link";

const HOME_FAQ_ITEMS = [
  {
    question: "How long does installation take?",
    answer:
      "Most installations finish in two to three days depending on the size and type of flooring. We work efficiently without sacrificing quality.",
  },
  {
    question: "Do you serve areas outside Hampton?",
    answer:
      "Yes. Pro Floor VA serves Hampton, Newport News, Yorktown, Williamsburg, Poquoson, and surrounding Hampton Roads communities.",
  },
  {
    question: "How much does installation cost?",
    answer:
      "Pricing depends on material type, room size, and any prep work needed. We provide free quotes with no obligation.",
    costLink: true,
  },
  {
    question: "What about preparation and cleanup?",
    answer:
      "We handle all prep work and leave your home clean when we finish. Minimal disruption means you can move back in immediately.",
  },
];

export function Faq10() {
  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Quick answers about our installation process — see the full FAQ for
            more.
          </p>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <Accordion type="multiple" className="w-full">
            {HOME_FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-home-${index}`}
                className="overflow-hidden"
              >
                <AccordionTrigger className="md:py-5 md:text-md">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  {item.costLink ? (
                    <>
                      {item.answer}{" "}
                      <Link
                        href={ROUTES.costGuide}
                        className="font-semibold text-amber-800 underline"
                      >
                        Read the flooring installation cost guide
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
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Browse our{" "}
            <Link
              href={ROUTES.faq}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation FAQ
            </Link>{" "}
            or reach out directly.
          </p>
          <div className="mt-6 md:mt-8">
            <Link href={ROUTES.contact}>
              <Button title="Contact us" variant="secondary">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
