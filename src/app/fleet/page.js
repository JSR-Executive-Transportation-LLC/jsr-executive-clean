import Image from "next/image";
import { BookButtons, CheckList, crumbsLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { FLEET } from "@/lib/site";

export const metadata = {
  title: "Our Fleet: Sedans, SUVs & Sprinter Vans",
  description: "Executive sedans for up to 3, luxury SUVs for up to 6 and Mercedes Sprinter vans for up to 14 passengers. Clean, inspected, fully insured vehicles.",
  alternates: { canonical: "/fleet" },
};

export default function FleetPage() {
  const crumbs = [["/", "Home"], ["/fleet", "Fleet"]];
  return (
    <main>
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="OUR FLEET"
        title="Reserve the right vehicle for your occasion"
        lead="Premium sedans, luxury SUVs and executive Sprinter vans designed for comfort, professionalism and reliability."
        crumbs={[["/", "Home"], [null, "Fleet"]]}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {FLEET.map((v) => (
            <article key={v.key} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-3/60">
              <Image src={v.image} alt={`${v.name}, ${v.model}`} width={450} height={240} sizes="(min-width: 1024px) 33vw, 100vw" className="h-auto w-full" />
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-display text-2xl text-gold-gradient">{v.name}</h2>
                <p className="text-sm italic text-mute">{v.model}</p>
                <dl className="my-6 grid grid-cols-2 gap-4 border-y border-line py-5">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.15em] text-mute">Passengers</dt>
                    <dd className="font-display text-3xl text-white">{v.passengers}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.15em] text-mute">Bags</dt>
                    <dd className="font-display text-3xl text-white">{v.bags}</dd>
                  </div>
                </dl>
                <p className="mb-7 leading-7 text-mute">{v.bestFor}</p>
                <div className="mt-auto">
                  <BookButtons quote={false} bookLabel={`Book ${v.name.split(" ").pop()}`} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="ink2">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="SAFETY. RELIABILITY. PROFESSIONALISM." title="Every vehicle, every time" lead="Every vehicle in our fleet is maintained and inspected to the highest standards of safety and comfort." />
          <CheckList items={["Cleaned and inspected before every trip", "Commercial insurance on every vehicle", "Climate control set before you step in", "Bottled water and phone chargers", "Child seats on request", "Exact vehicle may vary; you always ride in its class or better"]} />
        </div>
      </Section>
    </main>
  );
}
