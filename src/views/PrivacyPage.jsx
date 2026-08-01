import React from "react";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { SITE_NAME, BUSINESS_PHONE, BUSINESS_EMAIL } from "../seo";

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        label="Legal"
        heading="Privacy Policy"
        subheading={`How ${SITE_NAME} collects, uses, and protects your information.`}
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl prose prose-neutral">
          <p className="mb-6 text-sm text-neutral-500">Last updated: June 2025</p>

          <h2 className="mb-4 text-2xl font-bold">Information we collect</h2>
          <p className="mb-6 text-neutral-600">
            When you submit a quote request through our website, we collect the
            property address and phone number you provide. We also collect
            standard server log data (IP address, browser type, referring page)
            when you visit the site.
          </p>

          <h2 className="mb-4 text-2xl font-bold">How we use your information</h2>
          <p className="mb-6 text-neutral-600">
            We use the information you provide solely to respond to your quote
            request and communicate about your flooring project. We do not sell,
            rent, or share your personal information with third parties for
            marketing purposes.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Cookies and analytics</h2>
          <p className="mb-6 text-neutral-600">
            This site may use Google Analytics or Google Tag Manager to
            understand aggregate visitor behavior. These tools may set cookies
            in your browser. You can opt out of Google Analytics tracking using
            the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2 className="mb-4 text-2xl font-bold">Data retention</h2>
          <p className="mb-6 text-neutral-600">
            Quote request data is retained only as long as necessary to fulfill
            your service inquiry. You may request deletion of your information
            at any time by contacting us.
          </p>

          <h2 className="mb-4 text-2xl font-bold">Contact</h2>
          <p className="text-neutral-600">
            Questions about this privacy policy? Reach us at{" "}
            <a href={`mailto:${BUSINESS_EMAIL}`} className="underline">
              {BUSINESS_EMAIL}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="underline"
            >
              {BUSINESS_PHONE}
            </a>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
