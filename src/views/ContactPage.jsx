"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import Link from "next/link";
import { AddressAutocomplete } from "../components/AddressAutocomplete";
import { PageLayout } from "../components/PageLayout";
import { PageHero } from "../components/PageHero";
import { FLOORING_TYPES, LEAD_SOURCES } from "../config/leads";
import { ROUTES } from "../config/routes";
import { submitLead } from "../services/submitLead";
import { heroButtonClass } from "../styles/buttons";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  SERVICE_AREA_CITIES,
} from "../seo";

export default function ContactPage() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;
  const emailHref = `mailto:${BUSINESS_EMAIL}`;
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [addressSelection, setAddressSelection] = useState({
    isValidSelection: false,
    address: "",
    placeId: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!addressSelection.isValidSelection || !addressSelection.address) {
      setStatus("error");
      setErrorMessage("Select an address from the suggestions");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const phone = formData.get("phone");
    const flooringType = formData.get("flooringType");

    try {
      await submitLead({
        address: addressSelection.address,
        phone: String(phone),
        flooringType: String(flooringType),
        source: LEAD_SOURCES.CONTACT_PAGE,
      });
      setStatus("success");
      setAddressSelection({
        isValidSelection: false,
        address: "",
        placeId: "",
      });
      setFormKey((key) => key + 1);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  return (
    <PageLayout>
      <PageHero
        label="Contact"
        heading="Get your free flooring quote"
        subheading="Tell us your address and what you're looking to install — we'll follow up with a real quote, not a range that changes when we show up."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            {status === "success" ? (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-8 text-neutral-800">
                <p className="text-xl font-semibold">Thanks — we got your request.</p>
                <p className="mt-3">
                  We&apos;ll follow up soon with a quote. Need help now?{" "}
                  <a href={phoneHref} className="font-semibold underline">
                    Call {BUSINESS_PHONE}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-amber-900 underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                key={formKey}
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-800">
                  Property address
                  <AddressAutocomplete
                    name="address"
                    placeholder="Street address, city"
                    className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-base font-normal text-neutral-900 placeholder:text-neutral-500 focus:border-amber-700 focus:outline-none"
                    required
                    disabled={status === "submitting"}
                    onSelectionChange={setAddressSelection}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-800">
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-base font-normal text-neutral-900 placeholder:text-neutral-500 focus:border-amber-700 focus:outline-none"
                    required
                    disabled={status === "submitting"}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-800">
                  Flooring type
                  <select
                    name="flooringType"
                    className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-base font-normal text-neutral-900 focus:border-amber-700 focus:outline-none"
                    required
                    defaultValue=""
                    disabled={status === "submitting"}
                  >
                    <option value="" disabled>
                      Select a flooring type
                    </option>
                    {FLOORING_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                {status === "error" && errorMessage ? (
                  <p className="text-sm text-red-600" role="alert">
                    {errorMessage}
                  </p>
                ) : null}
                <Button
                  type="submit"
                  title="Get My Free Quote"
                  disabled={status === "submitting"}
                  className={`w-full ${heroButtonClass} disabled:opacity-70`}
                >
                  {status === "submitting" ? "Sending..." : "Get My Free Quote"}
                </Button>
              </form>
            )}
          </div>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="mb-4 text-2xl font-bold">Prefer to talk it through first?</h2>
            <p className="mb-6 text-neutral-600">
              Call{" "}
              <a href={phoneHref} className="font-semibold text-amber-800 underline">
                {BUSINESS_PHONE}
              </a>{" "}
              or email{" "}
              <a href={emailHref} className="font-semibold text-amber-800 underline">
                {BUSINESS_EMAIL}
              </a>
              .
            </p>
            <h3 className="mb-2 text-lg font-bold">Pro Floor VA</h3>
            <p className="mb-4 text-neutral-600">Hampton, Virginia</p>
            <p className="mb-6 text-neutral-600">
              Serving {SERVICE_AREA_CITIES.join(", ")}.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <Link href={ROUTES.hardwood} className="font-semibold text-amber-800 underline">
                Hardwood installation →
              </Link>
              <Link href={ROUTES.laminate} className="font-semibold text-amber-800 underline">
                Laminate installation →
              </Link>
              <Link href={ROUTES.vinyl} className="font-semibold text-amber-800 underline">
                Vinyl plank installation →
              </Link>
              <Link href={ROUTES.costGuide} className="font-semibold text-amber-800 underline">
                Flooring cost guide →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
