import Page from "../../src/pages/SubfloorRepairPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.subfloorRepair);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.subfloorRepair}>
      <Page />
    </PageWithJsonLd>
  );
}
