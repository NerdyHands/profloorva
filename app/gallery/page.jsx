import Page from "../../src/views/GalleryPage";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";

export const metadata = pageMetadata(ROUTES.gallery);

export default function RoutePage() {
  return (
    <PageWithJsonLd pathname={ROUTES.gallery}>
      <Page />
    </PageWithJsonLd>
  );
}
