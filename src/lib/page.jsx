import { JsonLd } from "../components/JsonLd";
import { buildPageMetadata, getPageJsonLd } from "./metadata";

/** Shared helpers for thin app route page.jsx files */
export function pageMetadata(pathname) {
  return buildPageMetadata(pathname);
}

export function PageWithJsonLd({ pathname, children }) {
  const schemas = getPageJsonLd(pathname);
  return (
    <>
      {schemas.length > 0 ? <JsonLd data={schemas} /> : null}
      {children}
    </>
  );
}
