import { trackLeadSubmission } from "../analytics.js";
import {
  AIRTABLE_BASE_ID,
  AIRTABLE_BUSINESS,
  AIRTABLE_FIELDS,
  AIRTABLE_SOURCE,
  AIRTABLE_STATUS,
  AIRTABLE_TABLE_ID,
  AIRTABLE_TOKEN,
} from "../config/leads.js";

/**
 * Create a lead record in Airtable.
 * @see https://airtable.com/developers/web/api/create-records
 */
export async function submitLead({ address, phone, source, flooringType }) {
  if (!AIRTABLE_TOKEN) {
    throw new Error(
      "Airtable is not configured. Set NEXT_PUBLIC_AIRTABLE_TOKEN in your .env.local file.",
    );
  }

  const trimmedAddress = address.trim();
  const trimmedPhone = phone.trim();
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const noteLines = [
    `Phone: ${trimmedPhone}`,
    flooringType ? `Flooring Type: ${String(flooringType).trim()}` : null,
    source ? `Form: ${source}` : null,
    pageUrl ? `Page: ${pageUrl}` : null,
    `Submitted: ${new Date().toISOString()}`,
  ].filter(Boolean);

  const fields = {
    [AIRTABLE_FIELDS.leadName]: trimmedPhone || trimmedAddress,
    [AIRTABLE_FIELDS.address]: trimmedAddress,
    [AIRTABLE_FIELDS.business]: AIRTABLE_BUSINESS,
    [AIRTABLE_FIELDS.status]: AIRTABLE_STATUS.NEW,
    [AIRTABLE_FIELDS.source]: AIRTABLE_SOURCE,
    [AIRTABLE_FIELDS.notes]: noteLines.join("\n"),
  };

  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    },
  );

  if (!response.ok) {
    let detail = "";
    try {
      const errorBody = await response.json();
      detail = errorBody?.error?.message || JSON.stringify(errorBody);
    } catch {
      detail = await response.text();
    }
    throw new Error(
      detail
        ? `Lead submission failed (${response.status}): ${detail}`
        : `Lead submission failed (${response.status})`,
    );
  }

  trackLeadSubmission({ source });

  return fields;
}
