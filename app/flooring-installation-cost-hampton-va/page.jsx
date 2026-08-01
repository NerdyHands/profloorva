import Page from "../../src/views/CostGuidePage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.costGuide);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.costGuide}>
      <Page />
    </PageWithJsonLd>
  );
}
