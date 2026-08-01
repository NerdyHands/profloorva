import Page from "../../src/pages/AboutPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.about);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.about}>
      <Page />
    </PageWithJsonLd>
  );
}
