export const AIRTABLE_BASE_ID =
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "app9jvMglrggu8G5G";

export const AIRTABLE_TABLE_ID =
  process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID || "tblCrGsM19m556yoF";

export const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN || "";

/**
 * Airtable field names must match the table exactly.
 * Adjust these if your columns use different labels.
 * View: https://airtable.com/app9jvMglrggu8G5G/tblCrGsM19m556yoF
 */
export const AIRTABLE_FIELDS = {
  name: "Name",
  address: "Address",
  phone: "Phone",
  flooringType: "Flooring Type",
  source: "Source",
  submittedAt: "Submitted At",
  pageUrl: "Page URL",
};

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
