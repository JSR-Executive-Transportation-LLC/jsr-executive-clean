import Image from "next/image";
import Link from "next/link";
import { BookButtons, Card, CheckList, Eyebrow, Faq, faqLd, JsonLd, Section, SectionHeading } from "@/components/ui";
import { AIRPORTS, FLEET, PHONE, PHONE_LINK, SERVICES } from "@/lib/site";

const WHY = [
  ["Licensed & insured", "A licensed Connecticut livery service with commercial insurance on every vehicle."],
  ["On time, every time", "We plan each trip around real traffic and arrive early. For flights, we track your arrival so you are never left waiting."],
  ["Professional chauffeurs", "Courteous, discreet, well-dressed chauffeurs who know the roads between Connecticut and New York."],
  ["Immaculate vehicles", "Late-model sedans, SUVs and Sprinter vans, cleaned and inspected before every ride."],
  ["Clear pricing", "You know the price before you ride. Tolls, wait time and gratuity are explained up front."],
  ["Available 24/7", "First flights out, last flights in and last-minute changes. Call or text any time."],
];

const STEPS = [
  ["Book", `Online in two minutes, or call or text ${PHONE}. You get a confirmation right away.`],
  ["We confirm", "Your chauffeur, vehicle and pickup details are sent to you before the trip."],
  ["We track", "For airport pickups we follow your flight and adjust for delays."],
  ["You ride", "Your chauffeur arrives early, handles the bags and gets you there on time."],
];

const FAQ = [
  ["What areas do you serve?", "We serve all of Connecticut, including Greenwich, Stamford, Norwalk, Westport, Fairfield, New Haven, Hartford and New Britain, plus New York City, Westchester and the major airports in New York, New Jersey, Connecticut, Boston and Providence."],
  ["How do I book?", `Book online through our secure booking system, use our instant quote, or call or text ${PHONE}. You receive a confirmation with your trip details.`],
  ["What happens if my flight is delayed?", "We track every arriving flight and time your pickup to the actual landing. See our airport delay policy for the details."],
  ["Do you offer corporate accounts?", "Yes. Companies can set up an account for their team and clients, with monthly invoicing and one point of contact for every booking."],
  ["Are you licensed and insured?", "Yes. We are a licensed Connecticut livery service and carry commercial insurance on every vehicle."],
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqLd(FAQ)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
          <Image src="/images/hero-chauffeur.jpg" alt="JSR chauffeur standing beside a black luxury sedan at night" fill priority sizes="(min-width: 768px) 62vw, 100vw" className="object-cover object-[70%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent md:via-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent md:hidden" />
          <div className="absolute inset-0 bg-ink/55 md:hidden" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-32 md:pt-28">
          <div className="max-w-2xl">
            <Eyebrow>Connecticut · New York</Eyebrow>
            <h1 className="font-display text-[1.75rem] leading-[1.1] text-gold-gradient min-[400px]:text-[2rem] sm:text-5xl lg:text-[4.1rem]">Beyond transportation.</h1>
            <p className="mt-3 font-display text-xl tracking-[0.12em] text-white/90 sm:text-2xl">It&apos;s an experience.</p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Luxury chauffeured service for airport transfers, corporate travel, weddings and nights out. Executive sedans, SUVs and Sprinter vans across Connecticut and New York.
            </p>
            <div className="mt-10">
              <BookButtons />
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              {["Licensed & insured", "Flight tracking", "Available 24/7", "Corporate accounts"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeading eyebrow="OUR SERVICES" title="Luxury transportation for every occasion" lead="From a 5 a.m. run to JFK to a wedding day with three vehicles, one call handles it." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.slug} title={s.name} href={s.href}>
              {s.short}
            </Card>
          ))}
          <div className="flex flex-col justify-center rounded-xl border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent p-7">
            <h3 className="font-display text-xl text-white">Not sure what you need?</h3>
            <p className="mt-3 leading-7 text-mute">Tell us about your trip and we will recommend the right vehicle and price.</p>
            <a href={PHONE_LINK} className="mt-6 text-lg font-bold text-gold hover:text-gold-light">
              Call or text {PHONE}
            </a>
          </div>
        </div>
      </Section>

      {/* AIRPORTS */}
      <Section tone="ink2">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="AIRPORT TRANSFERS" title="Every major airport, door to door" lead="We drive Connecticut travelers to and from the New York airports, Bradley and Westchester, and pick up at private aviation terminals." />
            <CheckList items={["Flight tracking on every arrival", "Inside meet and greet with a name sign", "Help with luggage, curb to door", "Early-morning and late-night pickups"]} />
            <Link href="/airports" className="mt-8 inline-block rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
              Airport transportation
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-ink p-6 md:p-8">
            <p className="mb-4 font-display text-sm tracking-[0.2em] text-gold">TYPICAL DRIVE FROM NEW HAVEN</p>
            <ul className="divide-y divide-line">
              {AIRPORTS.map((a) => {
                const t = a.times.find(([from]) => from === "New Haven");
                return (
                  <li key={a.slug}>
                    <Link href={`/airports/${a.slug}`} className="flex items-center justify-between gap-4 py-4 transition hover:text-gold">
                      <span>
                        <span className="font-semibold text-white">{a.short}</span> <span className="text-mute">({a.code})</span>
                      </span>
                      <span className="text-right text-sm text-mute">{t ? t[1] : ""}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-xs text-mute">Normal traffic. We plan every pickup around the traffic at your travel time.</p>
          </div>
        </div>
      </Section>

      {/* FLEET */}
      <Section>
        <SectionHeading eyebrow="OUR FLEET" title="Luxury. Comfort. Excellence." lead="Late-model vehicles, cleaned and inspected before every trip." />
        <div className="grid gap-5 md:grid-cols-3">
          {FLEET.map((v) => (
            <Link key={v.key} href="/fleet" className="group overflow-hidden rounded-xl border border-line bg-ink-3/60 transition hover:border-gold/50">
              <Image src={v.image} alt={`${v.name}, ${v.model}`} width={450} height={240} sizes="(min-width: 768px) 33vw, 100vw" className="h-auto w-full" />
              <div className="p-6">
                <h3 className="font-display text-xl text-white">{v.name}</h3>
                <p className="text-sm italic text-mute">{v.model}</p>
                <p className="mt-3 text-sm font-semibold text-gold">Up to {v.passengers} passengers</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* WHY JSR */}
      <Section tone="ink2">
        <SectionHeading eyebrow="WHY CHOOSE JSR" title="The details that make the ride" center />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map(([t, d]) => (
            <Card key={t} title={t}>
              {d}
            </Card>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <SectionHeading eyebrow="HOW IT WORKS" title="Booking takes two minutes" />
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-gold pt-5">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-white">{t}</h3>
              <p className="mt-1 leading-7 text-mute">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* CORPORATE */}
      <Section tone="ink2">
        <div className="grid items-center gap-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 via-transparent to-transparent p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <Eyebrow>FOR COMPANIES</Eyebrow>
            <h2 className="font-display text-3xl text-gold-gradient md:text-4xl">Corporate accounts with one monthly invoice</h2>
            <p className="mt-4 max-w-xl leading-8 text-mute">Executives, clients and roadshows across Fairfield County and New York City. Assistants book for anyone on the account, and every trip lands on one statement.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact?type=corporate" className="rounded-md bg-gold px-7 py-4 font-bold text-black transition hover:bg-gold-light">
              Open an account
            </Link>
            <Link href="/corporate-transportation" className="rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
              Learn more
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading eyebrow="QUESTIONS" title="Good to know" />
            <p className="-mt-6 text-mute">
              Anything else? Call or text{" "}
              <a href={PHONE_LINK} className="font-semibold text-gold">
                {PHONE}
              </a>
              .
            </p>
          </div>
          <Faq items={FAQ} />
        </div>
      </Section>
    </main>
  );
}
