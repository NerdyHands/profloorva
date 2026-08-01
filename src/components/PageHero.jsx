import React from "react";
import Link from "next/link";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";
import { BUSINESS_PHONE } from "../seo";

export function PageHero({ label, heading, subheading }) {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;
  return (
    <section className="bg-neutral-900 px-[5%] py-20 md:py-28 text-white">
      <div className="container mx-auto max-w-3xl text-center">
        {label && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            {label}
          </p>
        )}
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mb-8 text-lg text-white/80">{subheading}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ROUTES.contact}
            className={`inline-flex items-center justify-center ${heroButtonClass}`}
          >
            Get a Free Quote
          </Link>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-neutral-900"
          >
            Call {BUSINESS_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
