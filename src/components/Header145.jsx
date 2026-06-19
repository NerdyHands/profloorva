import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header145() {
  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <div className="flex w-full flex-col items-center text-center">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Flawless floors installed fast
            </h1>
            <p className="md:text-md">
              Pro Floor VA brings precision and speed to every installation in
              Hampton. We handle hardwood, laminate, and vinyl with the care
              they deserve.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Install">Install</Button>
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="aspect-video size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
