import Page from "../../src/views/FlooringGuidePage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.flooringGuide);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.flooringGuide}>
      <Page />
    </PageWithJsonLd>
  );
}
