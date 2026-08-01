"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { IMAGES } from "../images.js";
import { ROUTES } from "../config/routes.js";

export function Layout239() {
  return (
    <section id="why-us" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Why us</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                What sets us apart
              </h2>
              <p className="md:text-md">
                We know floors. We know Hampton. We know what it takes to get
                the job right without turning your home upside down.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={IMAGES.whyUsInstallation}
                  alt="Meticulous flooring installation by Pro Floor VA"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Installation without compromise
              </h3>
              <p>
                Every floor we touch receives the same meticulous attention,
                whether hardwood, laminate, or vinyl.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={IMAGES.whyUsFast}
                  alt="Fast professional flooring installation in Hampton, Virginia"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Done in days, not weeks
              </h3>
              <p>
                We move fast without cutting corners, getting you back to normal
                life quickly.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={IMAGES.whyUsClean}
                  alt="Clean and respectful flooring installation workspace in Hampton, Virginia"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Minimal mess, maximum respect
              </h3>
              <p>
                Your home stays clean and your schedule stays intact throughout
                the entire process.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link href={ROUTES.gallery}>
              <Button variant="secondary">Explore our work</Button>
            </Link>
            <Link href={ROUTES.gallery} className="inline-flex items-center gap-1 font-semibold">
              See gallery <RxChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
