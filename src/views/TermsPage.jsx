import React from "react";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { SITE_NAME, BUSINESS_PHONE, BUSINESS_EMAIL } from "../seo";

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Legal"
        heading="Terms of Service"
        subheading={`The terms that govern use of the ${SITE_NAME} website.`}
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <p className="mb-6 text-sm text-neutral-500">Last updated: June 2025</p>

          <h2 className="mb-4 text-2xl font-bold">Use of this website</h2>
          <p className="mb-6 text-neutral-600">
            By accessing profloorva.com, you agree to use the site for lawful
            purposes only. You may not use the site to transmit harmful,
            fraudulent, or unlawful content.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Quote requests</h2>
          <p className="mb-6 text-neutral-600">
            Submitting a quote request through this website does not create a
            binding service agreement. All service agreements are entered into
            separately in writing between Pro Floor VA and the customer prior
            to the start of any work.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Intellectual property</h2>
          <p className="mb-6 text-neutral-600">
            All content on this site — including text, images, and design — is
            the property of Pro Floor VA and may not be reproduced without
            written permission.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Limitation of liability</h2>
          <p className="mb-6 text-neutral-600">
            Pro Floor VA makes no warranties about the accuracy or completeness
            of site content. We are not liable for any damages arising from
            your use of or reliance on information on this website.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Contact</h2>
          <p className="text-neutral-600">
            Questions about these terms? Email{" "}
            <a href={`mailto:${BUSINESS_EMAIL}`} className="underline">
              {BUSINESS_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
