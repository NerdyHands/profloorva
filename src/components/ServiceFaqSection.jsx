"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";

export function ServiceFaqSection({ heading = "Frequently asked questions", items }) {
  if (!items?.length) return null;

  return (
    <div className="mb-10">
      <h2 className="mb-6 text-3xl font-bold">{heading}</h2>
      <Accordion type="multiple" className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`service-faq-${index}`}>
            <AccordionTrigger className="md:py-5 md:text-md text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
