import { ROUTES } from "../config/routes.js";

export const LOCATIONS = [
  {
    slug: "newport-news",
    city: "Newport News",
    route: ROUTES.newportNews,
    neighborhoods: ["Hilton Village", "City Center", "Denbigh"],
    intro:
      "Pro Floor VA installs hardwood, laminate, and vinyl flooring throughout Newport News — from Hilton Village to City Center. Same crew, same process, same 2–3 day turnaround we run in Hampton, just closer to you.",
  },
  {
    slug: "williamsburg",
    city: "Williamsburg",
    route: ROUTES.williamsburg,
    neighborhoods: ["Colonial Williamsburg area", "Kingsmill", "New Town"],
    intro:
      "Pro Floor VA installs hardwood, laminate, and vinyl flooring throughout Williamsburg — from the historic district to Kingsmill and New Town. Same crew, same process, same 2–3 day turnaround we run in Hampton.",
  },
  {
    slug: "yorktown",
    city: "Yorktown",
    route: ROUTES.yorktown,
    neighborhoods: ["Yorktown Village", "Grafton", "Seaford"],
    intro:
      "Pro Floor VA installs hardwood, laminate, and vinyl flooring throughout Yorktown and York County — from Yorktown Village to Grafton and Seaford. Same crew, same process, same 2–3 day turnaround we run in Hampton.",
  },
  {
    slug: "poquoson",
    city: "Poquoson",
    route: ROUTES.poquoson,
    neighborhoods: ["Messick Point", "Wythe Creek", "Poquoson City"],
    intro:
      "Pro Floor VA installs hardwood, laminate, and vinyl flooring throughout Poquoson — coastal homes included. Same crew, same process, same 2–3 day turnaround we run in Hampton, just closer to you.",
  },
];

export function getLocationBySlug(slug) {
  return LOCATIONS.find((location) => location.slug === slug);
}
