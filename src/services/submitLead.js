import { trackLeadSubmission } from "../analytics.js";

/** Send a lead to the server route, which creates the Airtable record. */
export async function submitLead({ address, phone, source, flooringType }) {
  const trimmedFlooring =
    flooringType != null ? String(flooringType).trim() : "";

  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      address,
      phone,
      source,
      flooringType: trimmedFlooring,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(
      body?.error || "Something went wrong. Please try again or call us directly.",
    );
  }

  trackLeadSubmission({ source, flooringType: trimmedFlooring });
}
