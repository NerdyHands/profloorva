import LocationPage from "../../src/pages/LocationPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.poquoson);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.poquoson}>
      <LocationPage citySlug="poquoson" />
    </PageWithJsonLd>
  );
}
