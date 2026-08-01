import Page from "../../src/views/HardwoodPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.hardwood);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.hardwood}>
      <Page />
    </PageWithJsonLd>
  );
}
