export const AIRTABLE_BASE_ID =
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "appe6UzeNJTHKFRlj";

export const AIRTABLE_TABLE_ID =
  process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID || "tbl5fzjOKXf6J6oY4";

export const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN || "";

/** Fixed Business select value for this site. */
export const AIRTABLE_BUSINESS = "Pro Floor VA";

/**
 * Airtable field names must match the Leads table exactly.
 * View: https://airtable.com/appe6UzeNJTHKFRlj/tbl5fzjOKXf6J6oY4/viwa5eMzCPsPXwonE
 */
export const AIRTABLE_FIELDS = {
  leadName: "Lead Name",
  address: "Address",
  business: "Business",
  status: "Status",
  source: "Source",
  notes: "Notes",
};

export const AIRTABLE_STATUS = {
  NEW: "New",
};

/** Source select option used for all website form submissions. */
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
