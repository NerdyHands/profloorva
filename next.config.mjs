import { withOpinlyConfig } from "@opinly/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
