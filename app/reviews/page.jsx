import Page from "../../src/views/ReviewsPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.reviews);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.reviews}>
      <Page />
    </PageWithJsonLd>
  );
}
