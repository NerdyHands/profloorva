import React from "react";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { BUSINESS_EMAIL } from "../seo";

export default function AccessibilityPage() {
  return (
    <PageLayout>
      <PageHero
        label="Accessibility"
        heading="Accessibility Statement"
        subheading="Pro Floor VA is committed to ensuring this website is accessible to everyone."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">Our commitment</h2>
          <p className="mb-6 text-neutral-600">
            We strive to ensure that profloorva.com is accessible to people of
            all abilities, including those using assistive technologies such as
            screen readers, keyboard navigation, and voice control software.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Current status</h2>
          <p className="mb-6 text-neutral-600">
            We aim to conform to the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA. The site uses semantic HTML, descriptive alt
            text on images, sufficient color contrast, and keyboard-navigable
            interactive elements.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Known limitations</h2>
          <p className="mb-6 text-neutral-600">
            Some third-party embedded components may not fully meet WCAG 2.1
            standards. We are actively working to identify and address these
            gaps.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Feedback</h2>
          <p className="text-neutral-600">
            If you experience difficulty accessing any part of this site, please
            contact us at{" "}
            <a href={`mailto:${BUSINESS_EMAIL}`} className="underline">
              {BUSINESS_EMAIL}
            </a>
            . We will respond as quickly as possible and work to provide
            the information you need in an accessible format.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
