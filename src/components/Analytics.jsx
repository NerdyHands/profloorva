"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  FUNNEL_EVENTS,
  trackFunnelEvent,
  trackVirtualPageView,
} from "../analytics.js";

function handleContactLinkClick(event) {
  const link = event.target.closest?.('a[href^="tel:"], a[href^="mailto:"]');
  if (!link) return;

  const isPhone = link.getAttribute("href").startsWith("tel:");
  const container = link.closest("section[id], header, footer, nav");
  trackFunnelEvent(
    isPhone ? FUNNEL_EVENTS.PHONE_CLICKED : FUNNEL_EVENTS.EMAIL_CLICKED,
    {
      link_text: link.textContent?.trim().slice(0, 100),
      link_section: container?.id || container?.tagName.toLowerCase(),
    },
  );
}

/**
 * Pushes virtual_page_view to dataLayer on client-side route changes.
 * Initial page_view is sent by the GA4 Configuration tag in GTM.
 */
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  const search = searchParams?.toString() ? `?${searchParams.toString()}` : "";

  useEffect(() => {
    document.addEventListener("click", handleContactLinkClick, true);
    return () =>
      document.removeEventListener("click", handleContactLinkClick, true);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const path = `${pathname}${search}`;

    const timer = window.setTimeout(() => {
      trackVirtualPageView({
        path,
        title: document.title,
        location: window.location.href,
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
