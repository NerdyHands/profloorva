import Page from "../../src/pages/TermsPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.terms);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.terms}>
      <Page />
    </PageWithJsonLd>
  );
}
