import Page from "../../src/views/LaminateRemovalPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.laminateRemoval);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.laminateRemoval}>
      <Page />
    </PageWithJsonLd>
  );
}
