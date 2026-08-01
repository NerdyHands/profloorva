import { trackLeadSubmission } from "../analytics.js";
import {
  AIRTABLE_BASE_ID,
  AIRTABLE_FIELDS,
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

  const fields = {
    [AIRTABLE_FIELDS.name]: address.trim(),
    [AIRTABLE_FIELDS.address]: address.trim(),
    [AIRTABLE_FIELDS.phone]: phone.trim(),
    [AIRTABLE_FIELDS.source]: source,
    [AIRTABLE_FIELDS.submittedAt]: new Date().toISOString(),
    [AIRTABLE_FIELDS.pageUrl]:
      typeof window !== "undefined" ? window.location.href : "",
  };

  if (flooringType) {
    fields[AIRTABLE_FIELDS.flooringType] = String(flooringType).trim();
  }

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
