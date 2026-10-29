import Link from "next/link";
import { BookButtons, CheckList, crumbsLd, Faq, faqLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { AIRPORTS, OTHER_AIRPORTS } from "@/lib/site";

export const metadata = {
  title: "Airport Car Service from Connecticut: JFK, LGA, EWR, BDL, HPN",
  description: "Luxury airport car service between Connecticut and JFK, LaGuardia, Newark, Bradley and Westchester. Flight tracking, meet and greet, sedans, SUVs and Sprinter vans, 24/7.",
  alternates: { canonical: "/airports" },
};

const FAQ = [
  ["How early will you pick me up for my flight?", "We set pickup times from the traffic expected at that hour, your airline and whether you are flying domestic or international. We suggest a time when you book, and you can always ask for earlier."],
  ["Where will my chauffeur meet me when I land?", "For curbside pickup, your chauffeur texts you when you land and meets you at the arrivals curb. With inside meet and greet, your chauffeur waits at baggage claim with a name sign."],
  ["What if my flight is delayed or early?", "We track your flight and time the pickup to your actual arrival, so a delay does not mean a missed ride. See our airport delay policy for details."],
  ["Are tolls and airport fees included?", "Tolls and airport fees are shown with your quote, so you know the total before you ride."],
];

export default function AirportsPage() {
  const crumbs = [["/", "Home"], ["/airports", "Airports"]];
  return (
    <main>
      <JsonLd data={faqLd(FAQ)} />
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="AIRPORT TRANSFERS"
        title="Car service to every airport in the region"
        lead="Door-to-door rides between Connecticut and JFK, LaGuardia, Newark, Bradley, Westchester and more, timed around your flight and the traffic."
        crumbs={[["/", "Home"], [null, "Airports"]]}
        image="/images/hero-chauffeur.jpg"
      />
      <Section>
        <SectionHeading eyebrow="AIRPORTS WE SERVE" title="Typical drive times" lead="Ranges are for normal traffic. Rush hour, weather and holidays add time, and we plan for it." />
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-ink-3 text-xs uppercase tracking-[0.15em] text-mute">
              <tr>
                <th className="px-5 py-4">Airport</th>
                <th className="px-5 py-4">From Greenwich</th>
                <th className="px-5 py-4">From Stamford</th>
                <th className="px-5 py-4">From New Haven</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {AIRPORTS.map((a) => {
                const t = (city) => (a.times.find(([c]) => c === city) || [])[1] || "—";
                return (
                  <tr key={a.slug} className="transition hover:bg-ink-3/60">
                    <td className="px-5 py-4">
                      <Link href={`/airports/${a.slug}`} className="font-semibold text-gold hover:text-gold-light">
                        {a.short} ({a.code})
                      </Link>
                      <span className="block text-sm text-mute">{a.location}</span>
                    </td>
                    <td className="px-5 py-4 text-white/85">{t("Greenwich")}</td>
                    <td className="px-5 py-4 text-white/85">{t("Stamford")}</td>
                    <td className="px-5 py-4 text-white/85">{t("New Haven")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-8 font-semibold text-white">We also serve:</p>
        <div className="mt-4">
          <CheckList items={OTHER_AIRPORTS} columns={2} />
        </div>
      </Section>
      <Section tone="ink2">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="EVERY AIRPORT RIDE" title="Built around your flight" />
            <CheckList
              items={[
                "Flight tracking, with pickup times adjusted for delays",
                "Curbside pickup, or inside meet and greet with a name sign",
                "Help with luggage from curb to door",
                "Child seats on request",
                "Rides at any hour, including first flights out and last flights in",
              ]}
            />
            <div className="mt-8">
              <BookButtons bookLabel="Book an airport ride" />
            </div>
          </div>
          <Faq items={FAQ} />
        </div>
      </Section>
    </main>
  );
}
