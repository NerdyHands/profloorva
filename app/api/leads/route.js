import {
  AIRTABLE_BASE_ID,
  AIRTABLE_FIELDS,
  AIRTABLE_SOURCE,
  AIRTABLE_STATUS,
  AIRTABLE_TABLE_ID,
  FLOORING_TYPES,
  LEAD_SOURCES,
} from "../../../src/config/leads";

const MAX_LENGTH = 500;
const ALLOWED_SOURCES = new Set(Object.values(LEAD_SOURCES));

function cleanString(value) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

/**
 * Create a lead record in Airtable. The token is server-only (AIRTABLE_TOKEN)
 * and must never be exposed through a NEXT_PUBLIC_ variable.
 * @see https://airtable.com/developers/web/api/create-records
 */
export async function POST(request) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    console.error("Lead submission failed: AIRTABLE_TOKEN is not set");
    return Response.json(
      { error: "Lead submission is temporarily unavailable. Please call us directly." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const address = cleanString(body?.address);
  const phone = cleanString(body?.phone);
  const flooringType = cleanString(body?.flooringType);
  const source = cleanString(body?.source);
  const pageUrl = cleanString(body?.pageUrl);

  if (!address) {
    return Response.json(
      { error: "Select an address from the suggestions" },
      { status: 400 },
    );
  }

  const fields = {
    [AIRTABLE_FIELDS.name]: phone || address,
    [AIRTABLE_FIELDS.address]: address,
    [AIRTABLE_FIELDS.phone]: phone,
    [AIRTABLE_FIELDS.status]: AIRTABLE_STATUS.NEW,
    [AIRTABLE_FIELDS.source]: ALLOWED_SOURCES.has(source) ? source : AIRTABLE_SOURCE,
    [AIRTABLE_FIELDS.submittedAt]: new Date().toISOString(),
  };

  if (FLOORING_TYPES.includes(flooringType)) {
    fields[AIRTABLE_FIELDS.flooringType] = flooringType;
  }

  if (pageUrl) {
    fields[AIRTABLE_FIELDS.pageUrl] = pageUrl;
  }

  const failure = Response.json(
    { error: "Something went wrong. Please try again or call us directly." },
    { status: 502 },
  );

  let response;
  try {
    response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      },
    );
  } catch (error) {
    console.error("Airtable lead create failed (network):", error);
    return failure;
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(`Airtable lead create failed (${response.status}): ${detail}`);
    return failure;
  }

  return Response.json({ ok: true });
}
