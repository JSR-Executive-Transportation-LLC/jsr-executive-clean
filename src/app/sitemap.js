import { AIRPORTS, POLICIES, SITE_URL } from "@/lib/site";

// Tells Google about every page. Submit https://jsrexecutive.com/sitemap.xml in Google Search Console.
export default function sitemap() {
  const main = ["", "/services", "/airports", "/corporate-transportation", "/weddings-events", "/hourly-chauffeur", "/fleet", "/about", "/contact", "/get-a-quote"];
  const airports = AIRPORTS.map((a) => `/airports/${a.slug}`);
  const policies = POLICIES.map(([href]) => href);
  return [...main, ...airports, ...policies].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : policies.includes(path) ? 0.3 : 0.8,
  }));
}
