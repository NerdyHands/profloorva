import Page from "../../src/views/WarrantyPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.warranty);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.warranty}>
      <Page />
    </PageWithJsonLd>
  );
}
