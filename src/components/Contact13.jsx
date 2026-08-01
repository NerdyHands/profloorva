"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { IMAGES } from "../images.js";
import { BUSINESS_EMAIL, BUSINESS_PHONE } from "../seo.js";

export function Contact13() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;
  const emailHref = `mailto:${BUSINESS_EMAIL}`;
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Reach out</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Get in touch
          </h2>
          <p className="md:text-md">
            Contact Pro Floor VA to schedule your installation or ask any
            questions.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Email
              </h3>
              <p className="mb-2">Send us a message</p>
              <a className="underline" href={emailHref}>
                {BUSINESS_EMAIL}
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call us directly</p>
              <a className="underline" href={phoneHref}>
                {BUSINESS_PHONE}
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Office
              </h3>
              <p className="mb-2">Hampton, Virginia</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get directions"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/Pro+Floor+VA+Hampton+Virginia",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Get directions
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IMAGES.contactOffice}
              alt="Pro Floor VA flooring company in Hampton, Virginia"
              className="aspect-[40/21] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
