"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { IMAGES } from "../images.js";

function StarRating() {
  return (
    <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <BiSolidStar key={index} className="size-6" />
      ))}
    </div>
  );
}

export function Testimonial3() {
  return (
    <section id="testimonials" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Testimonials
          </h2>
          <p className="md:text-md">What our customers say</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <StarRating />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "They finished my hardwood floors in two days. The quality is
              exceptional and they left my house spotless."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src={IMAGES.avatarSarah}
                  alt="Sarah Mitchell"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">Sarah Mitchell</p>
              <p>Homeowner, Hampton</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <StarRating />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Professional, fast, and they actually cared about getting it
              right. No regrets."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src={IMAGES.avatarJames}
                  alt="James Rodriguez"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">James Rodriguez</p>
              <p>Homeowner, Hampton</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <StarRating />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Best flooring experience I've had. They showed up on time and did
              exactly what they promised."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src={IMAGES.avatarMargaret}
                  alt="Margaret Chen"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">Margaret Chen</p>
              <p>Homeowner, Hampton</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
