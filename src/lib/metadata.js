import {
  GTM_ID,
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  getArticleSchema,
  getFaqSchema,
  getLocalBusinessSchema,
  getPageMeta,
  getServiceSchema,
  getWebSiteSchema,
  FAQ_ITEMS,
} from "../seo";

export function buildPageMetadata(pathname) {
  const page = getPageMeta(pathname);

  return {
    title: page.title,
    description: page.description,
    keywords: SITE_KEYWORDS,
    authors: [{ name: SITE_NAME }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: page.canonical,
    },
    openGraph: {
      type: "website",
      url: page.canonical,
      title: page.title,
      description: page.description,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE,
          width: Number(OG_IMAGE_WIDTH),
          height: Number(OG_IMAGE_HEIGHT),
          alt: "Pro Floor VA flooring installation in Hampton, Virginia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [OG_IMAGE],
    },
  };
}

export function getPageJsonLd(pathname) {
  const page = getPageMeta(pathname);
  const schemas = [];

  if (page.schemaType === "FAQPage") {
    schemas.push(getFaqSchema(page.faqItems || FAQ_ITEMS));
  }

  if (page.schemaType === "Service") {
    schemas.push(
      getServiceSchema({
        serviceName: page.serviceName,
        serviceArea: page.serviceArea,
        description: page.description,
        url: page.canonical,
      }),
    );
    if (page.faqItems?.length) {
      schemas.push(getFaqSchema(page.faqItems));
    }
  }

  if (page.schemaType === "Article") {
    schemas.push(
      getArticleSchema({
        title: page.title,
        description: page.description,
        url: page.canonical,
      }),
    );
  }

  return schemas;
}

export function getSiteJsonLd() {
  return [getLocalBusinessSchema(), getWebSiteSchema()];
}

export { GTM_ID, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL };
