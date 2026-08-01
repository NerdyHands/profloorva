import Page from "../../src/views/VinylPage";
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
