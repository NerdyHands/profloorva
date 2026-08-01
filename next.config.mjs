import { withOpinlyConfig } from "@opinly/next";

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.opinly.ai",
      },
    ],
  },
};

export default withOpinlyConfig({
  blogPath: "/blog",
  imagesPath: "/opinly-images",
  cdnNamespace: process.env.OPINLY_CDN_NAMESPACE || "REPLACE-ME-xxxxxxxx",
  siteUrl: "https://profloorva.com",
  companyName: "Pro Floor VA",
})(nextConfig);
