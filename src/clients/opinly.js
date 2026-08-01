import { createOpinlyClient } from "@opinly/backend";

const apiKey = process.env.OPINLY_API_KEY;

export const isOpinlyConfigured = Boolean(apiKey);

/** @type {ReturnType<typeof createOpinlyClient> | null} */
export const opinly = isOpinlyConfigured
  ? createOpinlyClient({
      apiKey,
      fetch: (url, init) => fetch(url, { ...init, cache: "force-cache" }),
    })
  : null;
