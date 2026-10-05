"use client";

import { useCallback, useEffect, useRef } from "react";
import { FUNNEL_EVENTS, trackFunnelEvent } from "../analytics.js";

/**
 * Funnel tracking for a quote form. Attach `containerRef` to an element that
 * stays mounted across the form / success states.
 */
export function useQuoteFunnel(source) {
  const containerRef = useRef(null);
  const startedRef = useRef(false);
  const lastPlaceIdRef = useRef("");

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackFunnelEvent(FUNNEL_EVENTS.FORM_VIEWED, { form_source: source });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [source]);

  const onFormFocus = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFunnelEvent(FUNNEL_EVENTS.FORM_STARTED, { form_source: source });
  }, [source]);

  const onAddressSelection = useCallback(
    (selection) => {
      if (
        !selection.isValidSelection ||
        selection.placeId === lastPlaceIdRef.current
      ) {
        return;
      }
      lastPlaceIdRef.current = selection.placeId;
      trackFunnelEvent(FUNNEL_EVENTS.ADDRESS_SELECTED, { form_source: source });
    },
    [source],
  );

  const onSubmitAttempt = useCallback(
    ({ addressValid }) => {
      trackFunnelEvent(FUNNEL_EVENTS.SUBMIT_ATTEMPTED, {
        form_source: source,
        address_valid: addressValid,
      });
    },
    [source],
  );

  const onError = useCallback(
    (reason, message) => {
      trackFunnelEvent(FUNNEL_EVENTS.FORM_ERROR, {
        form_source: source,
        reason,
        error_message: message,
      });
    },
    [source],
  );

  return { containerRef, onFormFocus, onAddressSelection, onSubmitAttempt, onError };
}
