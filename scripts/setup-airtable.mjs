import fs from "fs";

const env = Object.fromEntries(
  fs
    .readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const i = line.indexOf("=");
      return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
    }),
);

const token = env.NEXT_PUBLIC_AIRTABLE_TOKEN;
const baseId = env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "appe6UzeNJTHKFRlj";
const tableId = env.NEXT_PUBLIC_AIRTABLE_TABLE_ID || "tbl5fzjOKXf6J6oY4";

if (!token) {
  console.error("Missing NEXT_PUBLIC_AIRTABLE_TOKEN");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function api(path, options = {}) {
  const res = await fetch(`https://api.airtable.com/v0${path}`, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  if (!res.ok) {
    const err = new Error(`Airtable ${res.status}: ${JSON.stringify(body)}`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

const EXPECTED_FIELDS = [
  "Lead Name",
  "Address",
  "Business",
  "Status",
  "Source",
  "Notes",
];

console.log("Fetching base schema...");
const schema = await api(`/meta/bases/${baseId}/tables`);
const tables = schema.tables || [];
console.log(
  "Tables:",
  tables.map((t) => `${t.name} (${t.id})`).join(", ") || "(none)",
);

const table = tables.find((t) => t.id === tableId);
if (!table) {
  console.error(`Table ${tableId} not found in base ${baseId}`);
  process.exit(1);
}

console.log(`Found table: ${table.name} (${table.id})`);
console.log(
  "Existing fields:",
  table.fields.map((f) => `${f.name} [${f.type}]`).join(", "),
);

const existing = new Set(table.fields.map((f) => f.name));
for (const name of EXPECTED_FIELDS) {
  console.log(existing.has(name) ? `OK field: ${name}` : `MISSING field: ${name}`);
}

console.log("\nTesting record create...");
const test = await api(`/${baseId}/${table.id}`, {
  method: "POST",
  body: JSON.stringify({
    fields: {
      "Lead Name": "(757) 555-0100",
      Address: "TEST — delete me",
      Business: "Pro Floor VA",
      Status: "New",
      Source: "website_form",
      Notes: "Phone: (757) 555-0100\nForm: setup_script\nPage: https://profloorva.com/",
    },
  }),
});
const recordId = test.id;
console.log(`Created test record ${recordId}`);

await api(`/${baseId}/${table.id}/${recordId}`, { method: "DELETE" });
console.log("Deleted test record. Airtable setup OK.");

fs.writeFileSync(
  "scripts/airtable-setup-result.json",
  JSON.stringify(
    {
      baseId,
      tableId: table.id,
      tableName: table.name,
      fields: EXPECTED_FIELDS,
      business: "Pro Floor VA",
    },
    null,
    2,
  ),
);
