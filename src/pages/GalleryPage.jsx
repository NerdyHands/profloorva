import React from "react";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { IMAGES } from "../images";
import { ROUTES } from "../config/routes";
import { heroButtonClass } from "../styles/buttons";

const galleryItems = [
  {
    src: IMAGES.serviceHardwood,
    caption: "Hardwood flooring installation — Hampton Roads",
    to: ROUTES.hardwood,
  },
  {
    src: IMAGES.serviceLaminate,
    caption: "Laminate flooring installation — clean seams, fast turnaround",
    to: ROUTES.laminate,
  },
  {
    src: IMAGES.serviceVinyl,
    caption: "Waterproof vinyl plank — kitchens, baths, and mudrooms",
    to: ROUTES.vinyl,
  },
  {
    src: IMAGES.whyUsInstallation,
    caption: "Professional installation by our local crew",
    to: ROUTES.about,
  },
  {
    src: IMAGES.whyUsFast,
    caption: "Most installs finish in 2–3 days",
    to: ROUTES.blog,
  },
  {
    src: IMAGES.whyUsClean,
    caption: "Full cleanup — floors you can walk on the day we finish",
    to: ROUTES.contact,
  },
];

export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        label="Gallery"
        heading="Flooring installation photos from Hampton, VA"
        subheading="A look at the hardwood, laminate, and vinyl work we do across Hampton Roads. More project photos are added regularly."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map(({ src, caption, to }) => (
              <Link
                key={caption}
                href={to}
                className="group overflow-hidden rounded-xl border border-neutral-200 shadow-sm transition hover:border-amber-600"
              >
                <img
                  src={src}
                  alt={caption}
                  className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
                />
                <p className="p-4 text-sm font-semibold text-neutral-800">
                  {caption}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-neutral-600">
              Want flooring like this in your home?{" "}
              <Link href={ROUTES.reviews} className="font-semibold text-amber-800 underline">
                Read customer reviews
              </Link>{" "}
              or get a free quote.
            </p>
            <Link
              href={ROUTES.contact}
              className={`inline-flex items-center justify-center ${heroButtonClass}`}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
