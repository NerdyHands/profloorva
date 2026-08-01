import LocationPage from "../../src/views/LocationPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.newportNews);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.newportNews}>
      <LocationPage citySlug="newport-news" />
    </PageWithJsonLd>
  );
}
