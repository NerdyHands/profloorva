import Page from "../../src/views/SitemapPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.sitemap);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.sitemap}>
      <Page />
    </PageWithJsonLd>
  );
}
