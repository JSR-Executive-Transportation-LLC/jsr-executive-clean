import Link from "next/link";
import { BookButtons, CheckList, crumbsLd, JsonLd, PageHero, Section } from "@/components/ui";

export const metadata = {
  title: "About JSR",
  description: "JSR Executive Transportation is a licensed, insured Connecticut chauffeured car service for airport transfers, corporate travel, weddings and events.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const crumbs = [["/", "Home"], ["/about", "About"]];
  return (
    <main>
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="ABOUT JSR"
        title="Beyond transportation. It's an experience."
        lead="JSR Executive Transportation is a Connecticut chauffeured car service for travelers, companies and the occasions that matter."
        crumbs={[["/", "Home"], [null, "About"]]}
        image="/images/hero-chauffeur.jpg"
        buttons={false}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-8 text-white/85">
            <p className="font-display text-2xl leading-snug text-gold">A car service should be the one part of your trip you never have to think about.</p>
            <p>
              That means a chauffeur who arrives early, a vehicle that is spotless, a price you know in advance and someone who answers the phone at 4 a.m. It means tracking your flight so a delay
              does not turn into a scramble, and planning around the traffic on I-95 so you are never rushing.
            </p>
            <p>We serve individuals, families and companies across Connecticut and the New York area, with airport transfers, corporate travel, weddings, events and hourly service.</p>
            {/* EDIT ME: add a few sentences about the founder and why you started JSR. A personal story builds trust. */}
          </div>
          <div className="self-start rounded-2xl border border-line bg-ink-3/60 p-8">
            <h2 className="mb-5 font-display text-xl text-white">At a glance</h2>
            <CheckList
              items={["Licensed Connecticut livery service", "Commercial insurance on every vehicle", "Available 24 hours a day, 7 days a week", "Executive sedans, luxury SUVs and Sprinter vans", "Corporate accounts with monthly invoicing"]}
            />
            <div className="mt-8">
              <BookButtons quote={false} />
            </div>
            <Link href="/contact" className="mt-4 inline-block text-gold hover:text-gold-light">
              Contact us →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
