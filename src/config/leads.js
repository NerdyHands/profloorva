export const AIRTABLE_BASE_ID =
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "app9jvMglrggu8G5G";

export const AIRTABLE_TABLE_ID =
  process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID || "tblCrGsM19m556yoF";

/**
 * Airtable field names must match the Leads table exactly.
 * Production table: app9jvMglrggu8G5G / tblCrGsM19m556yoF
 */
export const AIRTABLE_FIELDS = {
  name: "Name",
  address: "Address",
  phone: "Phone",
  flooringType: "Flooring Type",
  status: "Status",
  source: "Source",
  notes: "Notes",
  submittedAt: "Submitted At",
  pageUrl: "Page URL",
};

export const AIRTABLE_STATUS = {
  NEW: "Todo",
};

/** Fallback Source value when a form-specific source is not provided. */
export const AIRTABLE_SOURCE = "website_form";

export const LEAD_SOURCES = {
  HERO_QUOTE: "hero_quote_form",
  CONTACT_PAGE: "contact_page_form",
};

export const FLOORING_TYPES = [
  "Hardwood",
  "Laminate",
  "Vinyl",
  "Not sure yet",
];
