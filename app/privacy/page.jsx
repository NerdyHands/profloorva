import Page from "../../src/views/PrivacyPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.privacy);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.privacy}>
      <Page />
    </PageWithJsonLd>
  );
}
