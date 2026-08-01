import LocationPage from "../../src/views/LocationPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.williamsburg);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.williamsburg}>
      <LocationPage citySlug="williamsburg" />
    </PageWithJsonLd>
  );
}
