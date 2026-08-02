"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { IMAGES } from "../images.js";
import { ROUTES } from "../config/routes.js";

export function Layout239_1() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Services</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Floor installation for every home
              </h2>
              <p className="md:text-md">
                Professional floor installation for Hampton and Hampton Roads —
                then the details that matter for each material.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={IMAGES.serviceHardwood}
                  alt="Hardwood floor installation by Pro Floor VA in Hampton, VA"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Hardwood
              </h3>
              <p>
                Solid and engineered wood that adds lasting value. Learn about
                our{" "}
                <Link
                  href={ROUTES.hardwood}
                  className="font-semibold text-amber-800 underline"
                >
                  hardwood flooring installation
                </Link>{" "}
                process for Hampton homes.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={IMAGES.serviceLaminate}
                  alt="Laminate floor installation by Pro Floor VA in Hampton, VA"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Laminate
              </h3>
              <p>
                Durable look without the hardwood price. See what{" "}
                <Link
                  href={ROUTES.laminate}
                  className="font-semibold text-amber-800 underline"
                >
                  laminate flooring installation
                </Link>{" "}
                includes and how fast it finishes.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={IMAGES.serviceVinyl}
                  alt="Vinyl plank floor installation by Pro Floor VA in Hampton, VA"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Vinyl plank
              </h3>
              <p>
                Waterproof and ready for kitchens and baths. Explore{" "}
                <Link
                  href={ROUTES.vinyl}
                  className="font-semibold text-amber-800 underline"
                >
                  vinyl plank flooring installation
                </Link>{" "}
                options for Hampton Roads.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-2xl text-center text-neutral-700 md:mt-12">
            Wondering about pricing? Read our guide to{" "}
            <Link
              href={ROUTES.costGuide}
              className="font-semibold text-amber-800 underline"
            >
              flooring installation cost in Hampton, VA
            </Link>
            . Need prep or specialty work? See{" "}
            <Link
              href={ROUTES.subfloorRepair}
              className="font-semibold text-amber-800 underline"
            >
              subfloor repair
            </Link>
            ,{" "}
            <Link
              href={ROUTES.kitchenBathroom}
              className="font-semibold text-amber-800 underline"
            >
              kitchen and bathroom flooring
            </Link>
            , or{" "}
            <Link
              href={ROUTES.rentalFlooring}
              className="font-semibold text-amber-800 underline"
            >
              flooring for rental properties
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link href={ROUTES.contact}>
              <Button variant="secondary">Schedule a free estimate</Button>
            </Link>
            <Link
              href={ROUTES.services}
              className="inline-flex items-center gap-1 font-semibold"
            >
              All services <RxChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
