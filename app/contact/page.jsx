import Page from "../../src/views/ContactPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.contact);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.contact}>
      <Page />
    </PageWithJsonLd>
  );
}
