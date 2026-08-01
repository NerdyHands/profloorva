import Page from "../../src/pages/RentalFlooringPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.rentalFlooring);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.rentalFlooring}>
      <Page />
    </PageWithJsonLd>
  );
}
