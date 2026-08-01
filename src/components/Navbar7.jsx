"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { RxChevronDown, RxDotFilled } from "react-icons/rx";
import { useAuth } from "../auth/AuthContext.jsx";
import { IMAGES } from "../images.js";
import { navPrimaryButtonClass } from "../styles/buttons.js";
import { ROUTES, ANCHORS } from "../config/routes.js";
import { BUSINESS_PHONE } from "../seo.js";

const phoneHref = `tel:${BUSINESS_PHONE.replace(/\D/g, "")}`;

const useNavState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(true);
  const closeOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(false);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

function NavDropdownLink({ href, to, title, description, onClick }) {
  const inner = (
    <div className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
      <div className="flex size-6 flex-col items-center justify-center">
        <RxDotFilled className="size-4 shrink-0 text-amber-600" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h5 className="font-semibold">{title}</h5>
        {description && (
          <p className="hidden text-sm md:block text-neutral-500">{description}</p>
        )}
      </div>
    </div>
  );

  if (to) {
    return (
      <Link href={to} onClick={onClick} className="block w-full">
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onClick} className="block w-full">
      {inner}
    </a>
  );
}

function AuthNavButton({ className = "", onClick }) {
  const { user, loading, signIn, signOut } = useAuth();
  const [busy, setBusy] = useState(false);

  const handleClick = async () => {
    if (busy || loading) return;
    setBusy(true);
    try {
      if (user) {
        await signOut();
      } else {
        await signIn();
      }
      onClick?.();
    } catch (error) {
      console.error("Firebase auth error:", error);
      window.alert(error?.message || "Sign-in failed. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const label = loading || busy ? "Please wait…" : user ? "Log out" : "Log in";

  return (
    <Button
      title={label}
      size="sm"
      className={`${navPrimaryButtonClass} ${className}`}
      onClick={handleClick}
      disabled={loading || busy}
    >
      {label}
    </Button>
  );
}

export function Navbar7() {
  const nav = useNavState();
  const closeMobileMenu = () => {
    if (nav.animateMobileMenu === "open") nav.toggleMobileMenu();
  };

  return (
    <section
      id="navbar"
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        {/* Logo */}
        <Link href={ROUTES.home} onClick={closeMobileMenu}>
          <img
            src={IMAGES.logo}
            alt="Pro Floor VA logo"
            className="h-6 w-auto md:h-7"
          />
        </Link>

        {/* Desktop nav */}
        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <Link
              href={ROUTES.gallery}
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Gallery
            </Link>
            <a
              href={ANCHORS.services}
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Services
            </a>
            <Link
              href={ROUTES.about}
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              About us
            </Link>

            {/* Resources mega-menu trigger */}
            <div
              onMouseEnter={nav.openOnDesktopDropdownMenu}
              onMouseLeave={nav.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={nav.openOnMobileDropdownMenu}
              >
                <span>Resources</span>
                <motion.span
                  animate={nav.animateDropdownMenuIcon}
                  variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: { opacity: 1, height: "var(--height-open, auto)", display: "block" },
                    close: { opacity: 0, height: "var(--height-close, 0)", display: "none" },
                  }}
                  animate={nav.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">

                        {/* Flooring types */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Flooring types</h4>
                          <NavDropdownLink to={ROUTES.hardwood} title="Hardwood" description="Beautiful and durable for any home" />
                          <NavDropdownLink to={ROUTES.laminate} title="Laminate" description="Affordable elegance that lasts" />
                          <NavDropdownLink to={ROUTES.vinyl} title="Vinyl" description="Waterproof and easy to maintain" />
                          <NavDropdownLink to={ROUTES.subfloorRepair} title="Subfloor repair" description="Fix soft spots before install" />
                          <NavDropdownLink to={ROUTES.kitchenBathroom} title="Kitchen & bath" description="Waterproof wet-room floors" />
                          <NavDropdownLink to={ROUTES.services} title="All services" description="Every flooring service we offer" />
                        </div>

                        {/* Customer support */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Customer support</h4>
                          <NavDropdownLink to={ROUTES.maintenance} title="Maintenance" description="Keep your floors looking new" />
                          <NavDropdownLink to={ROUTES.warranty} title="Warranty" description="We stand behind every job" />
                          <NavDropdownLink to={ROUTES.faq} title="FAQ" description="Common questions answered" />
                          <NavDropdownLink to={ROUTES.contact} title="Contact" description="Reach out to us today" />
                        </div>

                        {/* Company */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Company</h4>
                          <NavDropdownLink to={ROUTES.gallery} title="Gallery" description="See our completed projects" />
                          <NavDropdownLink to={ROUTES.reviews} title="Reviews" description="What customers say about us" />
                          <NavDropdownLink to={ROUTES.blog} title="Blog" description="Tips and flooring insights" />
                          <NavDropdownLink to={ROUTES.costGuide} title="Cost guide" description="What affects flooring price" />
                          <NavDropdownLink to={ROUTES.flooringGuide} title="Flooring guide" description="Know before you buy" />
                        </div>

                        {/* Locations & Legal */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Service areas</h4>
                          <NavDropdownLink to={ROUTES.newportNews} title="Newport News" description="Flooring installation nearby" />
                          <NavDropdownLink to={ROUTES.williamsburg} title="Williamsburg" description="Hardwood, laminate, vinyl" />
                          <NavDropdownLink to={ROUTES.yorktown} title="Yorktown" description="York County flooring installs" />
                          <NavDropdownLink to={ROUTES.poquoson} title="Poquoson" description="Local coastal home installs" />
                          <NavDropdownLink to={ROUTES.sitemap} title="Full sitemap" description="Every page on our site" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mega-menu footer bar */}
                  <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-4">
                    <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
                    <div className="relative mb-4 lg:mb-0">
                      <p>
                        Ready to get started?{" "}
                        <Link href={ROUTES.contact} className="ml-1 underline">
                          Schedule your free estimate
                        </Link>
                      </p>
                    </div>
                    <div className="relative flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
                      <a href={phoneHref} className="font-semibold underline">
                        {BUSINESS_PHONE}
                      </a>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop auth */}
          <div className="flex items-center gap-4">
            <AuthNavButton />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={nav.toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={nav.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={nav.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={nav.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
            }}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={nav.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={nav.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <Link href={ROUTES.gallery} onClick={closeMobileMenu} className="block py-3 text-md">
                Gallery
              </Link>
              <a href={ANCHORS.services} onClick={closeMobileMenu} className="block py-3 text-md">
                Services
              </a>
              <Link href={ROUTES.about} onClick={closeMobileMenu} className="block py-3 text-md">
                About us
              </Link>

              {/* Mobile Resources accordion */}
              <div>
                <button
                  className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md"
                  onClick={nav.openOnMobileDropdownMenu}
                >
                  <span>Resources</span>
                  <motion.span
                    animate={nav.animateDropdownMenuIcon}
                    variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.div
                    variants={{
                      open: { opacity: 1, height: "var(--height-open, auto)", display: "block" },
                      close: { opacity: 0, height: "var(--height-close, 0)", display: "none" },
                    }}
                    animate={nav.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    <div className="grid grid-cols-1 gap-y-1 py-2">
                      <p className="py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Flooring types</p>
                      <Link href={ROUTES.hardwood} onClick={closeMobileMenu} className="py-2 text-md">Hardwood</Link>
                      <Link href={ROUTES.laminate} onClick={closeMobileMenu} className="py-2 text-md">Laminate</Link>
                      <Link href={ROUTES.vinyl} onClick={closeMobileMenu} className="py-2 text-md">Vinyl</Link>
                      <Link href={ROUTES.subfloorRepair} onClick={closeMobileMenu} className="py-2 text-md">Subfloor repair</Link>
                      <Link href={ROUTES.kitchenBathroom} onClick={closeMobileMenu} className="py-2 text-md">Kitchen & bath</Link>
                      <Link href={ROUTES.rentalFlooring} onClick={closeMobileMenu} className="py-2 text-md">Rental properties</Link>
                      <Link href={ROUTES.laminateRemoval} onClick={closeMobileMenu} className="py-2 text-md">Laminate removal</Link>
                      <p className="mt-2 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Support</p>
                      <Link href={ROUTES.maintenance} onClick={closeMobileMenu} className="py-2 text-md">Maintenance</Link>
                      <Link href={ROUTES.warranty} onClick={closeMobileMenu} className="py-2 text-md">Warranty</Link>
                      <Link href={ROUTES.faq} onClick={closeMobileMenu} className="py-2 text-md">FAQ</Link>
                      <Link href={ROUTES.contact} onClick={closeMobileMenu} className="py-2 text-md">Contact</Link>
                      <p className="mt-2 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Company</p>
                      <Link href={ROUTES.gallery} onClick={closeMobileMenu} className="py-2 text-md">Gallery</Link>
                      <Link href={ROUTES.reviews} onClick={closeMobileMenu} className="py-2 text-md">Reviews</Link>
                      <Link href={ROUTES.blog} onClick={closeMobileMenu} className="py-2 text-md">Blog</Link>
                      <Link href={ROUTES.costGuide} onClick={closeMobileMenu} className="py-2 text-md">Cost guide</Link>
                      <Link href={ROUTES.flooringGuide} onClick={closeMobileMenu} className="py-2 text-md">Flooring guide</Link>
                      <p className="mt-2 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Locations</p>
                      <Link href={ROUTES.newportNews} onClick={closeMobileMenu} className="py-2 text-md">Newport News</Link>
                      <Link href={ROUTES.williamsburg} onClick={closeMobileMenu} className="py-2 text-md">Williamsburg</Link>
                      <Link href={ROUTES.yorktown} onClick={closeMobileMenu} className="py-2 text-md">Yorktown</Link>
                      <Link href={ROUTES.poquoson} onClick={closeMobileMenu} className="py-2 text-md">Poquoson</Link>
                      <p className="mt-2 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Legal</p>
                      <Link href={ROUTES.privacy} onClick={closeMobileMenu} className="py-2 text-md">Privacy</Link>
                      <Link href={ROUTES.terms} onClick={closeMobileMenu} className="py-2 text-md">Terms</Link>
                      <Link href={ROUTES.sitemap} onClick={closeMobileMenu} className="py-2 text-md">Sitemap</Link>
                      <Link href={ROUTES.accessibility} onClick={closeMobileMenu} className="py-2 text-md">Accessibility</Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile auth */}
              <div className="mt-6 flex flex-col gap-4">
                <AuthNavButton className="w-full" onClick={closeMobileMenu} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
