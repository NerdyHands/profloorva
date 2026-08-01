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

const token = env.VITE_AIRTABLE_TOKEN;
const baseId = env.VITE_AIRTABLE_BASE_ID;
const tableId = env.VITE_AIRTABLE_TABLE_ID;

if (!token) {
  console.error("Missing VITE_AIRTABLE_TOKEN");
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

const REQUIRED_FIELDS = [
  { name: "Address", type: "singleLineText" },
  { name: "Phone", type: "phoneNumber" },
  { name: "Flooring Type", type: "singleSelect", options: {
      choices: [
        { name: "Hardwood" },
        { name: "Laminate" },
        { name: "Vinyl" },
        { name: "Not sure yet" },
      ],
    },
  },
  { name: "Source", type: "singleLineText" },
  { name: "Submitted At", type: "dateTime", options: {
      dateFormat: { name: "iso" },
      timeFormat: { name: "24hour" },
      timeZone: "utc",
    },
  },
  { name: "Page URL", type: "url" },
];

console.log("Fetching base schema...");
const schema = await api(`/meta/bases/${baseId}/tables`);
const tables = schema.tables || [];
console.log(
  "Tables:",
  tables.map((t) => `${t.name} (${t.id})`).join(", ") || "(none)",
);

let table = tables.find((t) => t.id === tableId);
if (!table) {
  console.log(`Table ${tableId} not found. Creating Leads table...`);
  const created = await api(`/meta/bases/${baseId}/tables`, {
    method: "POST",
    body: JSON.stringify({
      name: "Leads",
      description: "Website quote form submissions from profloorva.com",
      fields: REQUIRED_FIELDS,
    }),
  });
  table = created;
  console.log(`Created table ${table.name} (${table.id})`);
  console.log(`\nUpdate .env VITE_AIRTABLE_TABLE_ID=${table.id}`);
} else {
  console.log(`Found table: ${table.name} (${table.id})`);
  console.log(
    "Existing fields:",
    table.fields.map((f) => `${f.name} [${f.type}]`).join(", "),
  );

  const existing = new Map(table.fields.map((f) => [f.name.toLowerCase(), f]));
  for (const field of REQUIRED_FIELDS) {
    const match = existing.get(field.name.toLowerCase());
    if (match) {
      console.log(`OK field: ${field.name} (${match.type})`);
      continue;
    }
    console.log(`Creating field: ${field.name}...`);
    const payload = { name: field.name, type: field.type };
    if (field.options) payload.options = field.options;
    const createdField = await api(
      `/meta/bases/${baseId}/tables/${table.id}/fields`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );
    console.log(`Created field ${createdField.name} (${createdField.id})`);
  }
}

// Test create + delete a record
console.log("\nTesting record create...");
const test = await api(`/${baseId}/${table.id}`, {
  method: "POST",
  body: JSON.stringify({
    fields: {
      Address: "TEST — delete me",
      Phone: "(757) 555-0100",
      "Flooring Type": "Hardwood",
      Source: "setup_script",
      "Submitted At": new Date().toISOString(),
      "Page URL": "https://profloorva.com/",
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
      fields: REQUIRED_FIELDS.map((f) => f.name),
    },
    null,
    2,
  ),
);
