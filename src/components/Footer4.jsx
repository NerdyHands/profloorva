import React from "react";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IMAGES } from "../images.js";
import { ROUTES } from "../config/routes.js";
import { SITE_NAME } from "../seo.js";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    href: "https://www.facebook.com/profloorva",
    icon: BiLogoFacebookCircle,
    label: "Pro Floor VA on Facebook",
  },
  {
    href: "https://www.instagram.com/profloorva",
    icon: BiLogoInstagram,
    label: "Pro Floor VA on Instagram",
  },
  {
    href: "https://twitter.com/profloorva",
    icon: FaXTwitter,
    label: "Pro Floor VA on X",
    small: true,
  },
  {
    href: "https://www.linkedin.com/company/profloorva",
    icon: BiLogoLinkedinSquare,
    label: "Pro Floor VA on LinkedIn",
  },
  {
    href: "https://www.youtube.com/@profloorva",
    icon: BiLogoYoutube,
    label: "Pro Floor VA on YouTube",
  },
];

const navLinks = [
  { label: "About us", to: ROUTES.about },
  { label: "Gallery", to: ROUTES.gallery },
  { label: "Hardwood installation", to: ROUTES.hardwood },
  { label: "Vinyl plank installation", to: ROUTES.vinyl },
  { label: "Click-lock installation", to: ROUTES.clickLock },
  { label: "Flooring removal", to: ROUTES.flooringRemoval },
  { label: "Cost guide", to: ROUTES.costGuide },
  { label: "FAQ", to: ROUTES.faq },
  { label: "Contact us", to: ROUTES.contact },
];

export function Footer4() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <Link href={ROUTES.home} className="lg:justify-self-start">
            <img
              src={IMAGES.logo}
              alt="Pro Floor VA logo"
              className="inline-block"
            />
          </Link>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            {navLinks.map(({ label, to }) => (
              <li key={label} className="font-semibold">
                <Link href={to}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialLinks.map(({ href, icon: Icon, label, small }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={`size-6 ${small ? "p-0.5" : ""}`} />
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 md:mt-0">
              &copy; {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <Link href={ROUTES.privacy} className="underline">Privacy</Link>
            <Link href={ROUTES.terms} className="underline">Terms</Link>
            <Link href={ROUTES.accessibility} className="underline">Accessibility</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
