"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackVirtualPageView } from "../analytics.js";

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
