import posthog from "posthog-js";

/** GA4 measurement ID — configured in GTM; referenced here for lead/page events only. */
export const GA4_MEASUREMENT_ID = "G-X1ZWZP75HF";

function getDataLayer() {
  if (typeof window === "undefined") return null;
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushToDataLayer(payload) {
  const dataLayer = getDataLayer();
  if (!dataLayer) return;
  dataLayer.push(payload);
}

/** Virtual page view for React Router navigations (handled by GTM GA4 event tag). */
export function trackVirtualPageView({ path, title, location }) {
  pushToDataLayer({
    event: "virtual_page_view",
    page_path: path,
    page_title: title,
    page_location: location,
  });
}

/** PostHog landing page funnel, in order. Rename only together with saved PostHog insights. */
export const FUNNEL_EVENTS = {
  FORM_VIEWED: "quote_form_viewed",
  FORM_STARTED: "quote_form_started",
  ADDRESS_SELECTED: "quote_address_selected",
  SUBMIT_ATTEMPTED: "quote_submit_attempted",
  FORM_ERROR: "quote_form_error",
  LEAD_SUBMITTED: "lead_submitted",
  PHONE_CLICKED: "phone_call_clicked",
  EMAIL_CLICKED: "email_clicked",
};

export function trackFunnelEvent(event, properties = {}) {
  posthog.capture(event, properties);
}

/** GA4 recommended event for quote / lead form submissions. */
export function trackLeadSubmission({ source, flooringType }) {
  pushToDataLayer({
    event: "generate_lead",
    form_source: source,
    currency: "USD",
    value: 0,
  });
  trackFunnelEvent(FUNNEL_EVENTS.LEAD_SUBMITTED, {
    form_source: source,
    flooring_type: flooringType || undefined,
  });
}
