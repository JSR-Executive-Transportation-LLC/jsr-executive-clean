import { Card, CheckList, crumbsLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { SERVICES } from "@/lib/site";

export const metadata = {
  title: "Chauffeur & Car Services in Connecticut",
  description: "Airport transfers, corporate transportation, weddings and events, hourly chauffeur service and executive nights out across Connecticut and New York.",
  alternates: { canonical: "/services" },
};

const INCLUDED = [
  "A professional, uniformed chauffeur",
  "A clean, late-model vehicle inspected before every trip",
  "A price you know before you ride",
  "Bottled water and phone chargers",
  "Child seats on request",
  "Flight tracking on airport pickups",
];

export default function ServicesPage() {
  const crumbs = [["/", "Home"], ["/services", "Services"]];
  return (
    <main>
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="OUR SERVICES"
        title="Luxury transportation tailored to every occasion"
        lead="Every service comes with a professional chauffeur, an immaculate vehicle and a price you know in advance."
        crumbs={[["/", "Home"], [null, "Services"]]}
        image="/images/hero-chauffeur.jpg"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Card key={s.slug} kicker={`0${i + 1}`} title={s.name} href={s.href}>
              {s.short}
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="ink2">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="EVERY RIDE INCLUDES" title="The JSR standard" lead="Whatever you book, the experience is the same: calm, punctual and taken care of." />
          <CheckList items={INCLUDED} />
        </div>
      </Section>
    </main>
  );
}
