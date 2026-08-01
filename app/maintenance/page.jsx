import Page from "../../src/views/MaintenancePage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.maintenance);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.maintenance}>
      <Page />
    </PageWithJsonLd>
  );
}
