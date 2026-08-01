"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { LEAD_SOURCES } from "../config/leads.js";
import { IMAGES } from "../images.js";
import { BUSINESS_PHONE } from "../seo.js";
import { submitLead } from "../services/submitLead.js";
import { heroButtonClass } from "../styles/buttons.js";

export function Header145() {
  const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const address = formData.get("address");
    const phone = formData.get("phone");

    try {
      await submitLead({
        address: String(address),
        phone: String(phone),
        source: LEAD_SOURCES.HERO_QUOTE,
      });
      setStatus("success");
      event.currentTarget.reset();
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
    <section id="home" className="relative min-h-[90vh]">
      <img
        src={IMAGES.hero}
        className="absolute inset-0 size-full object-cover"
                    alt="Pro Floor VA professional flooring installation in Hampton, Virginia"
                  />
                  <div className="absolute inset-0 bg-black/25" />

                  <div className="relative flex min-h-[90vh] items-center px-[5%] py-16 md:py-24 lg:py-28">
                    <div className="container">
                      <div className="rounded-2xl bg-neutral-800/80 p-6 backdrop-blur-sm md:p-10 lg:p-12">
                        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
                          <div className="flex flex-col items-center text-center text-white">
                            <div className="mb-6 flex items-center justify-center">
                              <img
                                src={IMAGES.logo}
                                alt="Pro Floor VA logo"
                                className="h-10 w-auto brightness-0 invert md:h-12"
                              />
                            </div>
                            <h1 className="mb-5 text-4xl font-bold leading-[1.1] md:mb-6 md:text-5xl lg:text-6xl">
                              Flooring installation in Hampton, VA
                            </h1>
                            <p className="mb-6 max-w-xl text-base text-white/90 md:mb-8 md:text-md">
                              Pro Floor VA installs floors for Hampton and nearby
                              Hampton Roads homes — fast, clean, and backed by a
                              free in-home quote.
                            </p>
                <div>
                  <a
                    href={phoneHref}
                    className={`inline-flex items-center justify-center ${heroButtonClass}`}
                  >
                    Call {BUSINESS_PHONE}
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 md:p-8">
                <h2 className="mb-2 text-2xl font-bold text-neutral-900 md:text-3xl">
                  Request a quote
                </h2>
                <p className="mb-6 text-sm text-neutral-600 md:text-base">
                  Property address and phone number for a fast local quote
                </p>

                {status === "success" ? (
                  <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-6 text-neutral-800">
                    <p className="font-semibold">Thanks — we got your request.</p>
                    <p className="mt-2 text-sm">
                      We&apos;ll follow up soon with a quote. Need help now?{" "}
                      <a href={phoneHref} className="font-semibold underline">
                        Call {BUSINESS_PHONE}
                      </a>
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-sm font-semibold text-amber-900 underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="address"
                      placeholder="Property Address"
                      className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-amber-700 focus:outline-none"
                      required
                      disabled={status === "submitting"}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-amber-700 focus:outline-none"
                      required
                      disabled={status === "submitting"}
                    />
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
                      {status === "submitting"
                        ? "Sending..."
                        : "Get My Free Quote"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
