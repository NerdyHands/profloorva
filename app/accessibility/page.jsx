import Page from "../../src/pages/AccessibilityPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.accessibility);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.accessibility}>
      <Page />
    </PageWithJsonLd>
  );
}
