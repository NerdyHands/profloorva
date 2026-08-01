import Page from "../../src/views/LaminatePage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.laminate);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.laminate}>
      <Page />
    </PageWithJsonLd>
  );
}
