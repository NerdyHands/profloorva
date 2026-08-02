import { Navbar7 } from "../src/components/Navbar7";
import { Header145 } from "../src/components/Header145";
import { Layout239 } from "../src/components/Layout239";
import { Layout239_1 } from "../src/components/Layout239_1";
// Placeholder reviews / stats — not real Pro Floor VA company data
// import { Testimonial3 } from "../src/components/Testimonial3";
// import { Stats21 } from "../src/components/Stats21";
import { Faq10 } from "../src/components/Faq10";
import { Contact13 } from "../src/components/Contact13";
import { Footer4 } from "../src/components/Footer4";
import { JsonLd } from "../src/components/JsonLd";
import { pageMetadata } from "../src/lib/page";
import { getFaqSchema, FAQ_ITEMS } from "../src/seo";
import { ROUTES } from "../src/config/routes";

export const metadata = pageMetadata(ROUTES.home);

export default function HomePage() {
  return (
    <div>
      <JsonLd data={getFaqSchema(FAQ_ITEMS)} />
      <Navbar7 />
      <main>
        <Header145 />
        <Layout239 />
        <Layout239_1 />
        {/* <Testimonial3 /> — fake reviews, not company data */}
        {/* <Stats21 /> — "By the numbers" placeholder stats, not company data */}
        <Faq10 />
        <Contact13 />
      </main>
      <Footer4 />
    </div>
  );
}
