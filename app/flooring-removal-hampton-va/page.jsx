import Page from "../../src/views/FlooringRemovalPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.flooringRemoval);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.flooringRemoval}>
      <Page />
    </PageWithJsonLd>
  );
}
