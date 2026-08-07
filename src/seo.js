import { ROUTES } from "./config/routes.js";

export const SITE_URL = "https://profloorva.com";
export const SITE_NAME = "Pro Floor VA";
export const SITE_TITLE =
  "Pro Floor VA | Flooring Installation in Hampton, VA";
export const SITE_DESCRIPTION =
  "Pro Floor VA is a local flooring contractor serving Hampton and Hampton Roads. Fast installs, honest quotes, and crews that treat your home with care.";
export const SITE_KEYWORDS =
  "flooring installation Hampton VA, flooring contractor Hampton Roads, Pro Floor VA, flooring company Hampton Virginia";
export const OG_IMAGE = `${SITE_URL}/images/og-image.webp`;
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export const BUSINESS_PHONE = "(757) 863-3044";
export const BUSINESS_EMAIL = "info@profloorva.com";
export const BUSINESS_ADDRESS = {
  locality: "Hampton",
  region: "VA",
  country: "US",
};
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
/** GA4 property — wired in GTM via gtm/profloor-gtm-container.json */
export const GA4_MEASUREMENT_ID = "G-X1ZWZP75HF";

export const SERVICE_AREA_CITIES = [
  "Hampton",
  "Newport News",
  "Yorktown",
  "Williamsburg",
  "Poquoson",
];

export const HARDWOOD_FAQ_ITEMS = [
  {
    question: "How much does hardwood flooring cost in Hampton, VA?",
    answer:
      "Hardwood installed cost depends on species, solid vs. engineered, room size, and subfloor prep. Pro Floor VA provides a free in-home estimate so you get a locked-in number for your Hampton home — not a range that changes later.",
  },
  {
    question: "How long does hardwood need to acclimate before installation?",
    answer:
      "Most hardwood needs several days to acclimate to your home's temperature and humidity. Hampton's coastal climate makes this step especially important. We schedule acclimation into every hardwood project as standard.",
  },
  {
    question: "Should I choose solid or engineered hardwood?",
    answer:
      "Solid hardwood suits main-level rooms with stable humidity. Engineered hardwood performs better over concrete slabs, in basements, and in homes with humidity swings. We recommend based on your specific rooms during the estimate.",
  },
  {
    question: "Do you repair the subfloor before hardwood installation?",
    answer:
      "Yes. We inspect the subfloor on every estimate and fix soft spots, uneven areas, or moisture issues before install. See our subfloor repair service in Hampton, VA for details.",
  },
  {
    question: "How is engineered hardwood installed?",
    answer:
      "Engineered hardwood may be nailed, stapled, glued, or floated depending on the product and subfloor. We follow the flooring manufacturer's approved method and account for moisture control, expansion space, transitions, and door clearances.",
  },
  {
    question: "Can engineered hardwood be installed over concrete?",
    answer:
      "Many engineered hardwood products can be glued or floated over a properly prepared concrete slab, but moisture conditions and product instructions must allow it. We evaluate the slab and the exact flooring before confirming the installation method.",
  },
];

export const VINYL_FAQ_ITEMS = [
  {
    question: "How much does vinyl plank flooring cost in Hampton, VA?",
    answer:
      "Vinyl plank pricing depends on wear-layer thickness, core type, room size, and any leveling needed. Request a free quote and we'll price your exact Hampton or Hampton Roads job after a walkthrough.",
  },
  {
    question: "Is vinyl plank flooring waterproof for kitchens and bathrooms?",
    answer:
      "Yes. Quality LVP and LVT use a waterproof core that stands up to spills and splash zones in kitchens, baths, laundry rooms, and mudrooms — a strong fit for Hampton homes.",
  },
  {
    question: "How long does vinyl plank installation take?",
    answer:
      "Most average rooms finish the same day once the subfloor is ready. Larger open layouts or multi-room jobs may take longer. We share a clear timeline with your quote.",
  },
  {
    question: "Does vinyl need a level subfloor?",
    answer:
      "Yes. Uneven or soft subfloors telegraph through vinyl. We level and repair as needed — including dedicated subfloor repair in Hampton, VA — so seams stay tight and the floor feels solid underfoot.",
  },
  {
    question: "What should I compare when choosing luxury vinyl plank?",
    answer:
      "Compare the wear layer, core construction, overall thickness, attached pad, edge profile, and installation requirements. The best LVP depends on room traffic, pets, sunlight, moisture exposure, and the condition of the floor below.",
  },
  {
    question: "Do you remove old vinyl before installing new LVP?",
    answer:
      "Yes, when removal is part of the quoted scope. Some existing floors can remain only when the new product permits it and the surface is clean, sound, flat, and compatible. We inspect first rather than assuming an overlay will work.",
  },
];

export const SUBFLOOR_FAQ_ITEMS = [
  {
    question: "How much does subfloor repair cost in Hampton, VA?",
    answer:
      "Cost depends on how much area is damaged, whether joists need attention, and if panels must be replaced. We inspect during a free estimate and include subfloor work in your quote before installation starts.",
  },
  {
    question: "Can you repair a subfloor without replacing the whole floor?",
    answer:
      "Often yes. Localized soft spots and squeaks can be repaired without a full tear-out. Widespread water damage or rotten panels usually need replacement of the affected decking.",
  },
  {
    question: "Do you repair subfloors before installing new flooring?",
    answer:
      "Yes. Subfloor inspection is part of every estimate. If repair is needed, we complete it before hardwood, vinyl, or laminate goes down so the new floor lasts.",
  },
  {
    question: "Do you do floor leveling in Hampton, VA?",
    answer:
      "Yes. Floor leveling is part of our subfloor repair and floor preparation work. We fill dips, flatten high spots, and confirm the surface meets the flatness your new floor needs before install day.",
  },
  {
    question: "What causes subfloor problems in Hampton homes?",
    answer:
      "Humidity, plumbing leaks, poor ventilation, and age are common causes in Hampton Roads. Soft spots near baths and kitchens are frequent findings during walkthroughs.",
  },
];

export const CLICK_LOCK_FAQ_ITEMS = [
  {
    question: "What is click-lock flooring installation?",
    answer:
      "Click-lock flooring installation uses planks that lock together at the edges and float over the subfloor instead of being glued or nailed down. It is common for laminate and many luxury vinyl plank products.",
  },
  {
    question: "Is click-lock flooring the same as a floating floor?",
    answer:
      "Yes. Click-lock is the locking system; floating floor describes the install method. The floor expands and contracts as a single surface, so expansion gaps and a flat subfloor are critical.",
  },
  {
    question: "Can I install click-lock flooring myself?",
    answer:
      "DIY click-lock installs are marketed heavily, but layout, underlayment, transitions, and subfloor prep decide whether the floor lasts. Most Hampton homeowners hire a pro when rooms are out of square, moisture is a concern, or they want a clean finish at doorways.",
  },
  {
    question: "What prep does click-lock flooring need?",
    answer:
      "The subfloor must be clean, dry, and flat within the manufacturer's tolerance. Soft spots, dips, and moisture issues should be fixed first — otherwise seams open and the floor feels hollow underfoot.",
  },
];

export const FLOORING_REMOVAL_FAQ_ITEMS = [
  {
    question: "How much does flooring removal and installation cost in Hampton, VA?",
    answer:
      "Cost depends on the material coming out, square footage, adhesive or underlayment, and the new floor going in. We quote removal with your new install so you see the full project cost upfront.",
  },
  {
    question: "Do you remove tile, carpet, and old flooring?",
    answer:
      "Yes. We handle tile removal, carpet removal, and old flooring removal in Hampton, VA — including haul-away — then inspect the subfloor before the next install.",
  },
  {
    question: "Can you remove old floors and install new ones on the same project?",
    answer:
      "Usually yes. Removal and installation are scheduled together whenever the subfloor is sound so you are not living on bare plywood longer than necessary.",
  },
  {
    question: "Do you also remove laminate specifically?",
    answer:
      "Yes. For laminate-focused jobs, see our dedicated laminate flooring removal page. General tile, carpet, vinyl, and mixed tear-outs are covered on this flooring removal hub.",
  },
];

export const LAMINATE_REMOVAL_FAQ_ITEMS = [
  {
    question: "How much does laminate flooring removal cost in Hampton, VA?",
    answer:
      "Removal pricing depends on square footage, underlayment type, and whether adhesive is present. We quote removal with your new install so you see the full project cost upfront.",
  },
  {
    question: "Do you haul away old laminate?",
    answer:
      "Yes. Haul-away of removed laminate and underlayment is included in our removal scope so you are not left with piles of debris.",
  },
  {
    question: "Can you install a new floor the same day laminate is removed?",
    answer:
      "Often yes for average rooms, if the subfloor is sound. If repair or leveling is needed, we schedule that next so the new floor still starts on a solid surface.",
  },
  {
    question: "Should I remove laminate myself before you install?",
    answer:
      "You can, but most clients prefer we handle removal. We know how to protect adjacent finishes and check the subfloor as we go.",
  },
  {
    question: "Is glued laminate harder to remove than a floating floor?",
    answer:
      "Usually. Floating click-lock laminate can often be lifted in sections, while glued flooring requires more scraping and substrate cleanup. Multiple layers, stairs, tight access, and adhesive residue can also affect the removal scope.",
  },
  {
    question: "Can you remove tile in rooms next to laminate?",
    answer:
      "Yes. Mixed-material projects are scoped through our general flooring removal service because tile may involve thinset or backer board and requires a different process than floating laminate.",
  },
];

export const RENTAL_FAQ_ITEMS = [
  {
    question: "Do you offer volume pricing for property managers?",
    answer:
      "Yes. Landlords and property managers with multiple units or repeat turnovers can ask about volume pricing. Contact us with property counts and preferred materials.",
  },
  {
    question: "How fast can you turn around a vacant unit?",
    answer:
      "Many vinyl and laminate jobs finish in one to two days once materials are ready. We prioritize vacant units to help you reduce days without rent.",
  },
  {
    question: "What flooring is best for rental properties in Hampton, VA?",
    answer:
      "Waterproof vinyl plank is the most common choice for durability and easy cleanup. Quality laminate is another cost-effective option for lower-moisture areas.",
  },
  {
    question: "Will you work directly with our leasing or maintenance team?",
    answer:
      "Yes. We coordinate access, schedules, and walkthroughs with property managers and maintenance contacts so installs fit your turnover process.",
  },
];

export const KITCHEN_BATH_FAQ_ITEMS = [
  {
    question: "What is the best waterproof bathroom flooring in Hampton, VA?",
    answer:
      "Luxury vinyl plank or tile with a waterproof core is the most reliable choice for bathrooms. It handles splash zones and cleans up easily without the maintenance of hardwood.",
  },
  {
    question: "What durable kitchen flooring do you recommend?",
    answer:
      "Waterproof vinyl plank is our top recommendation for kitchens. It resists spills, stands up to foot traffic, and can match wood looks throughout open living spaces.",
  },
  {
    question: "Can hardwood be used in a kitchen?",
    answer:
      "Engineered hardwood can work in some kitchens with careful maintenance, but waterproof vinyl is safer near sinks and dishwashers. We advise based on your layout during the estimate.",
  },
  {
    question: "Do you install flooring around existing cabinets and toilets?",
    answer:
      "Yes. We plan cuts, transitions, and appliance pull-outs as needed. Bathrooms and kitchens often need extra detail work that we include in the scope.",
  },
];

export const PAGE_SEO = {
  [ROUTES.home]: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    canonical: `${SITE_URL}/`,
  },
  [ROUTES.about]: {
    title: `About Us | Flooring Contractor Hampton VA | Pro Floor VA`,
    // description:
    //   "Pro Floor VA has installed hardwood, laminate, and vinyl flooring for Hampton homeowners for 15 years. Local crews, honest quotes, no subcontractors.",
    description:
      "Pro Floor VA installs hardwood, laminate, and vinyl flooring for Hampton homeowners. Local crews, honest quotes, no subcontractors.",
    canonical: `${SITE_URL}${ROUTES.about}`,
  },
  [ROUTES.gallery]: {
    title: `Flooring Installation Photos Hampton VA | Pro Floor VA Gallery`,
    description:
      "Browse hardwood, laminate, and vinyl flooring installation photos from Pro Floor VA projects across Hampton and Hampton Roads.",
    canonical: `${SITE_URL}${ROUTES.gallery}`,
  },
  [ROUTES.services]: {
    title: `Flooring Services | Hardwood, Laminate & Vinyl — Pro Floor VA`,
    description:
      "Pro Floor VA offers professional hardwood, laminate, and vinyl plank flooring installation for homes in Hampton and surrounding Hampton Roads communities.",
    canonical: `${SITE_URL}${ROUTES.services}`,
  },
  [ROUTES.hardwood]: {
    title: `Hardwood Floor Installation Hampton VA | Pro Floor VA`,
    description:
      "Solid and engineered hardwood installation in Hampton, VA, with product-specific moisture checks, subfloor prep, acclimation, and free estimates.",
    canonical: `${SITE_URL}${ROUTES.hardwood}`,
    schemaType: "Service",
    serviceName: "Hardwood Floor Installation",
    serviceArea: "Hampton, VA",
    faqItems: HARDWOOD_FAQ_ITEMS,
  },
  [ROUTES.laminate]: {
    title: `Laminate Floor Installation Hampton VA | Pro Floor VA`,
    description:
      "Professional laminate floor installation in Hampton, VA. Fast 1–2 day installs, moisture-resistant underlayment, and full cleanup. Free quotes for Hampton Roads.",
    canonical: `${SITE_URL}${ROUTES.laminate}`,
    schemaType: "Service",
    serviceName: "Laminate Floor Installation",
    serviceArea: "Hampton, VA",
  },
  [ROUTES.vinyl]: {
    title: `Vinyl Plank Flooring Installation Hampton VA | Pro Floor VA`,
    description:
      "Luxury vinyl plank and tile installation in Hampton, VA. Compare LVP products, prep, removal, timelines, and quote details. Free estimates.",
    canonical: `${SITE_URL}${ROUTES.vinyl}`,
    schemaType: "Service",
    serviceName: "Vinyl Plank Flooring Installation",
    serviceArea: "Hampton, VA",
    faqItems: VINYL_FAQ_ITEMS,
  },
  [ROUTES.contact]: {
    title: `Get a Free Flooring Quote Hampton VA | Pro Floor VA`,
    description:
      "Request a free flooring estimate from Pro Floor VA. Tell us your address and flooring type — we'll follow up with a real quote for Hampton Roads homes.",
    canonical: `${SITE_URL}${ROUTES.contact}`,
  },
  [ROUTES.reviews]: {
    title: `Flooring Company Reviews Hampton VA | Pro Floor VA`,
    // description:
    //   "See what Hampton Roads homeowners say about Pro Floor VA flooring installation. Real reviews from satisfied customers.",
    description:
      "Learn about Pro Floor VA flooring installation in Hampton Roads — browse our gallery or request a free in-home quote.",
    canonical: `${SITE_URL}${ROUTES.reviews}`,
  },
  [ROUTES.faq]: {
    title: `Flooring Installation FAQ Hampton VA | Pro Floor VA`,
    description:
      "Flooring installation FAQ for Hampton, VA: answers about LVP, hardwood, estimates, subfloor repair, removal, prep, timing, and warranties.",
    canonical: `${SITE_URL}${ROUTES.faq}`,
    schemaType: "FAQPage",
  },
  [ROUTES.costGuide]: {
    title: `Flooring Installation Cost Hampton VA | Pro Floor VA`,
    description:
      "Learn what affects flooring installation cost in Hampton, VA, what a complete estimate includes, and how to compare hardwood, laminate, and LVP quotes.",
    canonical: `${SITE_URL}${ROUTES.costGuide}`,
  },
  [ROUTES.flooringGuide]: {
    title: `Flooring Buyer's Guide | Pro Floor VA — Hampton, VA`,
    description:
      "A complete guide to choosing the right flooring for your Hampton home. Hardwood vs laminate vs vinyl — what to know before you buy.",
    canonical: `${SITE_URL}${ROUTES.flooringGuide}`,
  },
  [ROUTES.blog]: {
    title: `Flooring Tips & Insights | Pro Floor VA Blog`,
    description:
      "Practical flooring advice for Hampton homeowners from the Pro Floor VA team — material comparisons, install timelines, and prep tips.",
    canonical: `${SITE_URL}${ROUTES.blog}`,
  },
  [ROUTES.newportNews]: {
    title: `Flooring Installation Newport News VA | Pro Floor VA`,
    description:
      "Hardwood, laminate, and vinyl flooring installation in Newport News, VA. Same crew, same 2–3 day turnaround as Hampton. Free estimates.",
    canonical: `${SITE_URL}${ROUTES.newportNews}`,
    schemaType: "Service",
    serviceName: "Flooring Installation",
    serviceArea: "Newport News, VA",
  },
  [ROUTES.williamsburg]: {
    title: `Flooring Installation Williamsburg VA | Pro Floor VA`,
    description:
      "Flooring contractor serving Williamsburg, VA. Hardwood, laminate, and vinyl plank installation with free in-home estimates.",
    canonical: `${SITE_URL}${ROUTES.williamsburg}`,
    schemaType: "Service",
    serviceName: "Flooring Installation",
    serviceArea: "Williamsburg, VA",
  },
  [ROUTES.yorktown]: {
    title: `Flooring Installation Yorktown VA | Pro Floor VA`,
    description:
      "Flooring installation in Yorktown and York County, VA. Hardwood, laminate, and vinyl from Pro Floor VA. Free quotes.",
    canonical: `${SITE_URL}${ROUTES.yorktown}`,
    schemaType: "Service",
    serviceName: "Flooring Installation",
    serviceArea: "Yorktown, VA",
  },
  [ROUTES.poquoson]: {
    title: `Flooring Installation Poquoson VA | Pro Floor VA`,
    description:
      "Local flooring contractor for Poquoson, VA. Hardwood, laminate, and waterproof vinyl plank installation. Free in-home estimates.",
    canonical: `${SITE_URL}${ROUTES.poquoson}`,
    schemaType: "Service",
    serviceName: "Flooring Installation",
    serviceArea: "Poquoson, VA",
  },
  [ROUTES.subfloorRepair]: {
    title: `Subfloor Repair & Floor Leveling Hampton VA | Pro Floor VA`,
    description:
      "Subfloor repair, floor leveling, and floor preparation in Hampton, VA before new flooring installation. Soft spots, dips, and moisture damage fixed with a free estimate.",
    canonical: `${SITE_URL}${ROUTES.subfloorRepair}`,
    schemaType: "Service",
    serviceName: "Subfloor Repair and Floor Leveling",
    serviceArea: "Hampton, VA",
    faqItems: SUBFLOOR_FAQ_ITEMS,
  },
  [ROUTES.laminateRemoval]: {
    title: `Laminate Flooring Removal Hampton VA | Pro Floor VA`,
    description:
      "Laminate flooring removal in Hampton, VA for floating and glued floors, with haul-away, substrate cleanup, inspection, and replacement-floor prep.",
    canonical: `${SITE_URL}${ROUTES.laminateRemoval}`,
    schemaType: "Service",
    serviceName: "Laminate Flooring Removal",
    serviceArea: "Hampton, VA",
    faqItems: LAMINATE_REMOVAL_FAQ_ITEMS,
  },
  [ROUTES.flooringRemoval]: {
    title: `Flooring Removal and Installation Hampton VA | Pro Floor VA`,
    description:
      "Flooring removal and installation in Hampton, VA — tile, carpet, and old flooring tear-out with haul-away and subfloor inspection before your new floor.",
    canonical: `${SITE_URL}${ROUTES.flooringRemoval}`,
    schemaType: "Service",
    serviceName: "Flooring Removal and Installation",
    serviceArea: "Hampton, VA",
    faqItems: FLOORING_REMOVAL_FAQ_ITEMS,
  },
  [ROUTES.clickLock]: {
    title: `Click-Lock Flooring Installation Hampton VA | Pro Floor VA`,
    description:
      "Click-lock flooring installation in Hampton, VA. Floating floor installs for laminate and LVP with proper subfloor prep. Free estimates.",
    canonical: `${SITE_URL}${ROUTES.clickLock}`,
    schemaType: "Service",
    serviceName: "Click-Lock Flooring Installation",
    serviceArea: "Hampton, VA",
    faqItems: CLICK_LOCK_FAQ_ITEMS,
  },
  [ROUTES.rentalFlooring]: {
    title: `Flooring for Rental Properties Hampton VA | Pro Floor VA`,
    description:
      "Flooring installation for landlords and property managers in Hampton, VA. Fast turnarounds, durable materials, and volume pricing.",
    canonical: `${SITE_URL}${ROUTES.rentalFlooring}`,
    schemaType: "Service",
    serviceName: "Rental Property Flooring Installation",
    serviceArea: "Hampton, VA",
    faqItems: RENTAL_FAQ_ITEMS,
  },
  [ROUTES.kitchenBathroom]: {
    title: `Kitchen and Bathroom Flooring Hampton VA | Pro Floor VA`,
    description:
      "Durable kitchen flooring and waterproof bathroom flooring installation in Hampton, VA. Vinyl plank and water-resistant options for wet rooms.",
    canonical: `${SITE_URL}${ROUTES.kitchenBathroom}`,
    schemaType: "Service",
    serviceName: "Kitchen and Bathroom Flooring Installation",
    serviceArea: "Hampton, VA",
    faqItems: KITCHEN_BATH_FAQ_ITEMS,
  },
  [ROUTES.maintenance]: {
    title: `How to Maintain Your Floors | Pro Floor VA`,
    description:
      "Simple floor care routines to extend the life of hardwood, laminate, and vinyl. Expert maintenance tips from Pro Floor VA.",
    canonical: `${SITE_URL}${ROUTES.maintenance}`,
  },
  [ROUTES.warranty]: {
    title: `Flooring Installation Warranty | Pro Floor VA`,
    description:
      "Pro Floor VA warrants all installation workmanship. Learn what is covered on every flooring project we complete.",
    canonical: `${SITE_URL}${ROUTES.warranty}`,
  },
  [ROUTES.privacy]: {
    title: `Privacy Policy | Pro Floor VA`,
    description: `How Pro Floor VA collects, uses, and protects your personal information.`,
    canonical: `${SITE_URL}${ROUTES.privacy}`,
  },
  [ROUTES.terms]: {
    title: `Terms of Service | Pro Floor VA`,
    description: `Terms governing use of the Pro Floor VA website.`,
    canonical: `${SITE_URL}${ROUTES.terms}`,
  },
  [ROUTES.accessibility]: {
    title: `Accessibility Statement | Pro Floor VA`,
    description: `Pro Floor VA's commitment to inclusive, accessible web design.`,
    canonical: `${SITE_URL}${ROUTES.accessibility}`,
  },
  [ROUTES.sitemap]: {
    title: `Sitemap | Pro Floor VA`,
    description: `A complete directory of every page on profloorva.com.`,
    canonical: `${SITE_URL}${ROUTES.sitemap}`,
  },
};

export const FAQ_ITEMS = [
  {
    question: "How long does installation take?",
    answer:
      "Many single-room vinyl or laminate installations finish in a day once the subfloor is ready. Multi-room work, hardwood, removal, leveling, stairs, and detailed trim can extend the schedule. Your estimate includes a project-specific timeline.",
  },
  {
    question: "Do you handle all floor types?",
    answer:
      "We install solid and engineered hardwood, laminate, luxury vinyl plank, and luxury vinyl tile. We also remove common residential flooring and prepare the substrate for the replacement product.",
  },
  {
    question: "What about preparation and cleanup?",
    answer:
      "The quoted scope can include removal, debris haul-away, surface cleaning, minor preparation, transitions, and final cleanup. Floor leveling, damaged panels, and deeper repairs are identified separately so you know what preparation the new floor requires.",
  },
  {
    question: "Do you work in Hampton only?",
    answer:
      "Pro Floor VA serves Hampton, Newport News, Yorktown, Williamsburg, Poquoson, and surrounding Hampton Roads communities. Call to confirm your location.",
  },
  {
    question: "Can you match existing flooring?",
    answer:
      "We can compare color, plank width, texture, sheen, and profile, but an exact match is not always available because products and finishes change over time. Bring a spare board or product information when possible; otherwise, we can discuss a deliberate transition or complementary material.",
  },
  {
    question: "What if I need repairs first?",
    answer:
      "We inspect visible conditions and address quoted subfloor work before installation. Soft spots, swollen panels, movement, moisture damage, dips, or high areas may need repair or leveling so the replacement floor has a sound, flat base.",
  },
  {
    question: "Are there warranty options?",
    answer:
      "Installation workmanship and flooring-product warranties cover different things. We explain the workmanship terms for your project and help you understand the manufacturer's care, site-condition, and installation requirements before work begins.",
  },
  {
    question: "How much does installation cost?",
    answer:
      "Pricing depends on the flooring product, measured area, waste allowance, removal, subfloor preparation, stairs, transitions, trim, furniture or appliance handling, and disposal. A free walkthrough produces a scope-based quote for your rooms.",
  },
  {
    question: "Can you work around my schedule?",
    answer:
      "We discuss access, occupied rooms, pets, furniture, work-from-home needs, and target dates during scheduling. Product availability, acclimation, prep work, and project size determine the final installation window.",
  },
  {
    question: "What makes Pro Floor VA different?",
    answer:
      "We define the scope after seeing the space, match the installation method to the product, and account for removal, substrate condition, transitions, and cleanup before work starts. That gives homeowners a clearer way to compare the proposed work.",
  },
  {
    question: "Do I need to buy flooring before requesting an estimate?",
    answer:
      "No. You can request an estimate while comparing materials. If you already selected or purchased flooring, share the manufacturer and product details so we can review its installation method, quantity, and jobsite requirements.",
  },
  {
    question: "Can new flooring go over my existing floor?",
    answer:
      "Sometimes, but only when the new product permits it and the existing surface is clean, dry, sound, flat, securely bonded, and compatible. Added floor height can also affect doors, appliances, stairs, and transitions, so we inspect before recommending an overlay.",
  },
  {
    question: "How should I prepare rooms for installation?",
    answer:
      "Remove small items, valuables, wall hangings near the work area, and anything inside low closets. We confirm furniture, appliance, pet, access, and parking responsibilities in advance because the plan varies by project.",
  },
];

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FlooringContractor",
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    description: SITE_DESCRIPTION,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_ADDRESS.locality,
      addressRegion: BUSINESS_ADDRESS.region,
      addressCountry: BUSINESS_ADDRESS.country,
    },
    areaServed: SERVICE_AREA_CITIES.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: {
        "@type": "State",
        name: "Virginia",
      },
    })),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getFaqSchema(items = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema({ serviceName, serviceArea, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: {
      "@type": "FlooringContractor",
      name: SITE_NAME,
      telephone: BUSINESS_PHONE,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: serviceArea.replace(", VA", ""),
      containedInPlace: {
        "@type": "State",
        name: "Virginia",
      },
    },
  };
}

export function getArticleSchema({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.svg`,
      },
    },
    image: OG_IMAGE,
    mainEntityOfPage: url,
  };
}

/** Sitewide schema only — FAQ/Service/Article are page-scoped via PageSeoHead */
export function getStructuredData() {
  return [getLocalBusinessSchema(), getWebSiteSchema()];
}

function meta(name, content, property = false) {
  return property
    ? { type: "meta", props: { property: name, content } }
    : { type: "meta", props: { name, content } };
}

export function getPageMeta(pathname) {
  return (
    PAGE_SEO[pathname] || {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      canonical: `${SITE_URL}${pathname}`,
    }
  );
}

export function getSeoHeadElements(pathname = "/") {
  const page = getPageMeta(pathname);
  return [
    meta("description", page.description),
    meta("keywords", SITE_KEYWORDS),
    meta("author", SITE_NAME),
    meta("robots", "index, follow, max-image-preview:large"),
    meta("googlebot", "index, follow"),
    meta("geo.region", "US-VA"),
    meta("geo.placename", BUSINESS_ADDRESS.locality),
    { type: "link", props: { rel: "canonical", href: page.canonical } },
    meta("og:type", "website", true),
    meta("og:url", page.canonical, true),
    meta("og:title", page.title, true),
    meta("og:description", page.description, true),
    meta("og:image", OG_IMAGE, true),
    meta("og:image:width", OG_IMAGE_WIDTH, true),
    meta("og:image:height", OG_IMAGE_HEIGHT, true),
    meta(
      "og:image:alt",
      "Pro Floor VA flooring installation in Hampton, Virginia",
      true,
    ),
    meta("og:locale", "en_US", true),
    meta("og:site_name", SITE_NAME, true),
    meta("twitter:card", "summary_large_image"),
    meta("twitter:title", page.title),
    meta("twitter:description", page.description),
    meta("twitter:image", OG_IMAGE),
    meta(
      "twitter:image:alt",
      "Pro Floor VA flooring installation in Hampton, Virginia",
    ),
    {
      type: "link",
      props: { rel: "apple-touch-icon", href: "/apple-touch-icon.webp" },
    },
    ...getStructuredData().map((schema) => ({
      type: "script",
      props: { type: "application/ld+json" },
      children: JSON.stringify(schema),
    })),
  ];
}

export function getPrerenderHead(pathname = "/") {
  const page = getPageMeta(pathname);
  return {
    lang: "en",
    title: page.title,
    elements: new Set(getSeoHeadElements(pathname)),
  };
}
