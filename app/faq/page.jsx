import Page from "../../src/views/FaqPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.faq);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.faq}>
      <Page />
    </PageWithJsonLd>
  );
}
