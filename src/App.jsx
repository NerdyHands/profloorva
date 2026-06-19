import { Helmet } from "react-helmet-async";
import { Navbar7 } from "./components/Navbar7";
import { Header145 } from "./components/Header145";
import { Layout239 } from "./components/Layout239";
import { Layout239_1 } from "./components/Layout239_1";
import { Testimonial3 } from "./components/Testimonial3";
import { Stats21 } from "./components/Stats21";
import { Faq10 } from "./components/Faq10";
import { Contact13 } from "./components/Contact13";
import { Footer4 } from "./components/Footer4";

const SITE_URL = "https://profloorva.com";
const SITE_TITLE = "Pro Floor VA | Professional Flooring Installation in Hampton, VA";
const SITE_DESCRIPTION =
  "Pro Floor VA delivers fast, flawless hardwood, laminate, and vinyl flooring installation in Hampton, Virginia. Trusted local experts with 15+ years of experience.";
const OG_IMAGE = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Pro Floor VA" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Hampton" />
      </Helmet>

      <div>
        <Navbar7 />
        <Header145 />
        <Layout239 />
        <Layout239_1 />
        <Testimonial3 />
        <Stats21 />
        <Faq10 />
        <Contact13 />
        <Footer4 />
      </div>
    </>
  );
}
