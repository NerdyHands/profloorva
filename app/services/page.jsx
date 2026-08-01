import Page from "../../src/views/ServicesPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.services);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.services}>
      <Page />
    </PageWithJsonLd>
  );
}
