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

/** GA4 recommended event for quote / lead form submissions. */
export function trackLeadSubmission({ source }) {
  pushToDataLayer({
    event: "generate_lead",
    form_source: source,
    currency: "USD",
    value: 0,
  });
}
