import Image from "next/image";
import Link from "next/link";
import { CheckList, crumbsLd, Faq, faqLd, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { PHONE, PHONE_LINK } from "@/lib/site";

export const metadata = {
  title: "Wedding & Event Transportation in Connecticut",
  description: "Wedding and event transportation across Connecticut: getaway cars, wedding party SUVs and Sprinter guest shuttles, coordinated with your planner and timeline.",
  alternates: { canonical: "/weddings-events" },
};

const FAQ = [
  ["How far ahead should we book for a wedding?", "As early as you can, especially for Saturdays from May through October. Many couples book three to six months ahead."],
  ["Can you shuttle guests between the hotel and the venue?", "Yes. Sprinter vans carry up to 14 guests and can run loops between hotels, ceremony and reception on a set schedule."],
  ["Will you coordinate with our planner?", "Yes. We confirm the schedule, addresses and contacts with your planner or venue before the day."],
  ["Do you do other events?", "Yes: proms, anniversaries, galas, graduations, birthdays and any occasion where arriving well matters."],
];

export default function WeddingsPage() {
  const crumbs = [["/", "Home"], ["/services", "Services"], ["/weddings-events", "Weddings & Events"]];
  return (
    <main>
      <JsonLd data={faqLd(FAQ)} />
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="WEDDINGS & EVENTS"
        title="Arrive beautifully on the day that matters"
        lead="Elegant transportation for the couple, the wedding party and your guests at venues across Connecticut and New York, coordinated to your timeline."
        crumbs={[["/", "Home"], ["/services", "Services"], [null, "Weddings & Events"]]}
        image="/images/hero-chauffeur.jpg"
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="WEDDING DAY" title="Everyone where they need to be, on time" />
            <CheckList
              items={[
                "A getaway car for the couple",
                "SUVs for parents and the wedding party",
                "Sprinter guest shuttles between hotels and venue",
                "A timeline planned with your planner or venue",
                "Chauffeurs in formal attire",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=wedding" className="rounded-md bg-gold px-7 py-4 font-bold text-black transition hover:bg-gold-light">
                Plan your transportation
              </Link>
              <a href={PHONE_LINK} className="rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
                Call {PHONE}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/fleet-sedan.jpg" alt="Black executive sedan" width={450} height={240} className="col-span-2 h-auto w-full rounded-xl border border-line" />
            <Image src="/images/fleet-suv.jpg" alt="Black luxury SUV" width={450} height={240} className="h-auto w-full rounded-xl border border-line" />
            <Image src="/images/fleet-sprinter.jpg" alt="Black Sprinter van" width={450} height={240} className="h-auto w-full rounded-xl border border-line" />
          </div>
        </div>
      </Section>
      <Section tone="ink2">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="QUESTIONS" title="Planning your wedding transportation" />
          <Faq items={FAQ} />
        </div>
      </Section>
    </main>
  );
}
