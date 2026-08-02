import Page from "../../src/views/ClickLockFlooringPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.clickLock);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.clickLock}>
      <Page />
    </PageWithJsonLd>
  );
}
