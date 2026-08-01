import Page from "../../src/views/KitchenBathroomFlooringPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.kitchenBathroom);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.kitchenBathroom}>
      <Page />
    </PageWithJsonLd>
  );
}
