import { BookButtons, Card, CheckList, crumbsLd, Faq, faqLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata = {
  title: "Hourly Chauffeur & Executive Night Out",
  description: "Hire a chauffeur by the hour in Connecticut and New York City for meetings, errands, dinners, concerts, games and casino nights.",
  alternates: { canonical: "/hourly-chauffeur" },
};

const FAQ = [
  ["Is there a minimum number of hours?", "Yes. Sedans and SUVs have a 2-hour minimum. Sprinter vans and specialty vehicles have a 5-hour minimum. Use our instant quote or call us to confirm your price."],
  ["Can we change plans during the booking?", "Yes. Your chauffeur stays with you and goes where you need within the time you booked. You can extend if the vehicle is available."],
  ["Where does the chauffeur wait?", "Close by, with the vehicle ready. Text your chauffeur when you are ready and the car pulls up."],
];

const NIGHTS = [
  ["Dinner & a show", "Dinner in Greenwich or SoNo, or a Broadway show in Manhattan, without worrying about parking."],
  ["Concerts & games", "Arenas and stadiums in Connecticut and New York, with curbside drop-off and a pickup when it ends."],
  ["Casino nights", "Mohegan Sun and Foxwoods, door to door, with a chauffeur waiting for the ride home."],
  ["Celebrations", "Birthdays, anniversaries, bachelor and bachelorette nights for small groups or the whole party."],
];

export default function HourlyPage() {
  const crumbs = [["/", "Home"], ["/services", "Services"], ["/hourly-chauffeur", "Hourly"]];
  return (
    <main>
      <JsonLd data={faqLd(FAQ)} />
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="HOURLY CHAUFFEUR"
        title="Your chauffeur, for as long as you need"
        lead="Book a sedan, SUV or Sprinter van by the hour for meetings, errands and multi-stop days. Your chauffeur waits, and the car is ready when you are."
        crumbs={[["/", "Home"], ["/services", "Services"], [null, "Hourly"]]}
        image="/images/hero-chauffeur.jpg"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="AS DIRECTED" title="Popular hourly bookings" />
            <CheckList items={["Back-to-back business meetings", "Roadshows and site visits", "Shopping and errands", "Real estate tours", "Visiting family across the state", "Anywhere you need to be, in any order"]} />
            <div className="mt-8">
              <BookButtons bookLabel="Book hourly" />
            </div>
          </div>
          <Faq items={FAQ} />
        </div>
      </Section>
      <Section tone="ink2" id="night-out">
        <SectionHeading eyebrow="EXECUTIVE NIGHT OUT" title="Make an evening of it" lead="Arrive in style, skip the parking and get home safely. Your chauffeur waits while you enjoy the night." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {NIGHTS.map(([t, d]) => (
            <Card key={t} title={t}>
              {d}
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
