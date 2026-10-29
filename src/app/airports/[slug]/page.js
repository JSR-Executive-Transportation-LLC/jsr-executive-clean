import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButtons, CheckList, crumbsLd, Faq, faqLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { AIRPORTS, FLEET } from "@/lib/site";

export function generateStaticParams() {
  return AIRPORTS.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = AIRPORTS.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `${a.short} Car Service from Connecticut (${a.code})`,
    description: `Luxury car service between Connecticut and ${a.name}. Flight tracking, meet and greet, sedans, SUVs and Sprinter vans. Book online or call 475-224-4700.`,
    alternates: { canonical: `/airports/${a.slug}` },
  };
}

function faqFor(a) {
  const newHaven = (a.times.find(([c]) => c === "New Haven") || [])[1];
  return [
    [`How long does it take to get to ${a.short} from Connecticut?`, `It depends on where you start and the time of day. From New Haven a typical trip takes ${newHaven}. We plan your pickup time around the traffic expected when you travel.`],
    [`Do you track my flight when I land at ${a.code}?`, "Yes. We follow your flight and adjust your pickup to the actual arrival time, so delays and early landings are covered."],
    [`Where do you pick up at ${a.short}?`, "Your chauffeur meets you at the arrivals curb of your terminal, or inside at baggage claim with a name sign if you choose meet and greet. You get a text with the exact meeting point when you land."],
    ["Which vehicle should I book?", "An executive sedan fits up to 3 passengers with luggage. A luxury SUV fits up to 6 and is best for families or extra bags. Groups of up to 14 can book a Sprinter van."],
  ];
}

export default async function AirportPage({ params }) {
  const { slug } = await params;
  const a = AIRPORTS.find((x) => x.slug === slug);
  if (!a) notFound();
  const faq = faqFor(a);
  const crumbs = [["/", "Home"], ["/airports", "Airports"], [`/airports/${a.slug}`, `${a.short} (${a.code})`]];
  return (
    <main>
      <JsonLd data={faqLd(faq)} />
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow={`${a.code} AIRPORT CAR SERVICE`}
        title={`Car service between Connecticut and ${a.short}`}
        lead={a.intro}
        crumbs={[["/", "Home"], ["/airports", "Airports"], [null, `${a.short} (${a.code})`]]}
        image="/images/hero-chauffeur.jpg"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="DRIVE TIMES" title={`Typical trip to ${a.short}`} lead="Normal traffic. Rush hour, weather and holidays add time, and we plan for it." />
            <div className="overflow-hidden rounded-xl border border-line">
              <table className="w-full text-left">
                <thead className="bg-ink-3 text-xs uppercase tracking-[0.15em] text-mute">
                  <tr>
                    <th className="px-5 py-4">From</th>
                    <th className="px-5 py-4">Typical drive to {a.code}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {a.times.map(([from, t]) => (
                    <tr key={from}>
                      <td className="px-5 py-4 font-semibold text-white">{from}</td>
                      <td className="px-5 py-4 text-white/85">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="WHAT'S INCLUDED" title={`Every ${a.code} ride`} />
            <CheckList
              items={[
                "Pickup time planned around traffic and your flight",
                "Flight tracking on arrivals",
                "Curbside pickup or inside meet and greet",
                "Help with all your luggage",
                "Tolls and fees shown with your quote",
                "Executive sedan, luxury SUV or Sprinter van",
              ]}
            />
            <div className="mt-8">
              <BookButtons bookLabel={`Book ${a.code} ride`} />
            </div>
          </div>
        </div>
      </Section>
      <Section tone="ink2">
        <SectionHeading eyebrow="CHOOSE YOUR VEHICLE" title="Room for everyone and every bag" />
        <div className="grid gap-5 md:grid-cols-3">
          {FLEET.map((v) => (
            <div key={v.key} className="overflow-hidden rounded-xl border border-line bg-ink">
              <Image src={v.image} alt={`${v.name}, ${v.model}`} width={450} height={240} sizes="(min-width: 768px) 33vw, 100vw" className="h-auto w-full" />
              <div className="p-5">
                <h3 className="font-display text-lg text-white">{v.name}</h3>
                <p className="text-sm text-gold">Up to {v.passengers} passengers</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading eyebrow="QUESTIONS" title={`${a.short} airport rides`} />
            <p className="-mt-6 text-mute">
              Flying from another airport?{" "}
              <Link href="/airports" className="font-semibold text-gold">
                See all airports
              </Link>
              .
            </p>
          </div>
          <Faq items={faq} />
        </div>
      </Section>
    </main>
  );
}
