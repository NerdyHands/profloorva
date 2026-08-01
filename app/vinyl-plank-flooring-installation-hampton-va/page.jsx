import Page from "../../src/pages/VinylPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.vinyl);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.vinyl}>
      <Page />
    </PageWithJsonLd>
  );
}
