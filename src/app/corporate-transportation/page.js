import Link from "next/link";
import { Card, CheckList, crumbsLd, Faq, faqLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { PHONE, PHONE_LINK } from "@/lib/site";

export const metadata = {
  title: "Corporate Car Service in Connecticut",
  description: "Executive car service for Connecticut companies: airport transfers, client pickups, roadshows and offsites, with corporate accounts and monthly invoicing.",
  alternates: { canonical: "/corporate-transportation" },
};

const USES = [
  ["Executive airport transfers", "Executives and visiting clients to and from JFK, LaGuardia, Newark, Westchester and Bradley."],
  ["Client pickups", "Make a strong first impression when clients and candidates arrive."],
  ["Roadshows & meetings", "A chauffeur by the hour for back-to-back meetings in Connecticut and Manhattan."],
  ["Offsites & events", "Sprinter vans for team offsites, client dinners and conferences."],
  ["Late nights", "Safe rides home for staff after late nights at the office."],
  ["Private aviation", "Meet executives at private aviation terminals at Westchester and other airports."],
];

const FAQ = [
  ["How do corporate accounts work?", "We set up an account for your company with your billing details and the people allowed to book. Rides are billed to the account and you receive one monthly invoice listing every trip."],
  ["Can assistants book for executives and guests?", "Yes. Assistants and travel coordinators can book for anyone on the account, online or by phone, and receive the confirmations."],
  ["Can you handle roadshows and multi-stop days?", "Yes. Book a chauffeur by the hour and keep the same vehicle and driver all day, with as many stops as you need."],
  ["Can you provide a certificate of insurance?", "Yes. We can send proof of our livery license and insurance for your vendor file."],
];

export default function CorporatePage() {
  const crumbs = [["/", "Home"], ["/services", "Services"], ["/corporate-transportation", "Corporate"]];
  return (
    <main>
      <JsonLd data={faqLd(FAQ)} />
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="CORPORATE TRANSPORTATION"
        title="Executive car service your team can count on"
        lead="Airport runs, client pickups, roadshows and board meetings across Fairfield County, the rest of Connecticut and New York City, with one account and one monthly invoice."
        crumbs={[["/", "Home"], ["/services", "Services"], [null, "Corporate"]]}
        image="/images/hero-chauffeur.jpg"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FOR COMPANIES" title="Why companies choose JSR" />
            <CheckList
              items={[
                "Corporate accounts with monthly invoicing",
                "Assistants can book for executives, guests and clients",
                "Discreet chauffeurs who respect confidentiality",
                "The same chauffeur on request for repeat travelers",
                "Flight tracking for every arriving executive and client",
                "Hourly service for roadshows and multi-stop days",
                "Licensed and insured, with documents for your vendor file",
              ]}
            />
          </div>
          <div className="self-start rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent p-8">
            <h2 className="font-display text-2xl text-white">Open a corporate account</h2>
            <p className="mt-3 leading-7 text-mute">Tell us about your team&apos;s travel. We will set up your account within one business day.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact?type=corporate" className="rounded-md bg-gold px-7 py-4 font-bold text-black transition hover:bg-gold-light">
                Request an account
              </Link>
              <a href={PHONE_LINK} className="rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="ink2">
        <SectionHeading eyebrow="COMMON USES" title="What our corporate clients book" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {USES.map(([t, d]) => (
            <Card key={t} title={t}>
              {d}
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="QUESTIONS" title="Corporate accounts" />
          <Faq items={FAQ} />
        </div>
      </Section>
    </main>
  );
}
