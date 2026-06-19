import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Common questions about our installation process and service.
          </p>
        </div>
        <div className="grid w-full auto-rows-min grid-cols-1 items-start gap-x-12 md:grid-cols-2 lg:gap-x-16">
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value="item-faq10_accordion"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                How long does installation take?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Most installations finish in two to three days depending on the
                size and type of flooring. We work efficiently without
                sacrificing quality. Your home returns to normal quickly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-2"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Do you handle all floor types?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We install hardwood, laminate, and vinyl with equal precision.
                Each material gets the specific care it requires. We know the
                strengths and demands of every type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-3"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What about preparation and cleanup?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We handle all prep work and leave your home clean when we
                finish. Minimal disruption means you can move back in
                immediately. That's our standard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-4"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Do you work in Hampton only?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Pro Floor VA serves Hampton and the surrounding areas. We know
                this community and its homes. Call to confirm your location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-5"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Can you match existing flooring?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We can work with existing floors and match styles when needed.
                Bring samples or photos and we'll assess the possibilities.
                Continuity matters.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value="item-faq10_accordion-6"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What if I need repairs first?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We inspect subfloors and address any issues before installation.
                A solid foundation makes the difference. We won't cut corners on
                what's underneath.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-7"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Are there warranty options?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We stand behind our work with solid warranties on installation.
                Details depend on your specific project. We'll explain
                everything upfront.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-8"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                How much does installation cost?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Pricing depends on material type, room size, and any prep work
                needed. We provide free quotes with no obligation. You'll know
                the cost before we start.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-9"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Can you work around my schedule?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We schedule installations at times that work for you. Most jobs
                finish quickly so disruption is minimal. We respect your time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-10"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What makes Pro Floor VA different?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We combine speed with precision and treat your home like our
                own. We finish fast without cutting corners. That's the
                difference.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Reach out directly and we'll answer anything else.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
