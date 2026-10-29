import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { crumbsLd, JsonLd, PageHero, Section } from "@/components/ui";
import { BOOKING_URL, EMAIL, PHONE, PHONE_LINK, QUOTE_PATH, SMS_LINK } from "@/lib/site";

export const metadata = {
  title: "Contact Us · Call or Text 475-224-4700",
  description: "Book a luxury car in Connecticut. Call or text 475-224-4700, book online, or send a request for corporate accounts, weddings and group trips.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }) {
  const sp = await searchParams;
  const type = typeof sp?.type === "string" ? sp.type : "general";
  const crumbs = [["/", "Home"], ["/contact", "Contact"]];
  return (
    <main>
      <JsonLd data={crumbsLd(crumbs)} />
      <PageHero
        eyebrow="READY WHEN YOU ARE"
        title="Let's get you there in style."
        lead="Premium chauffeur service for airport transfers, corporate travel, weddings, events and nights out. Book online, call or text, or send us a request."
        crumbs={[["/", "Home"], [null, "Contact"]]}
        buttons={false}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="mb-8 font-display text-2xl text-gold-gradient">We answer 24/7</h2>
            <dl className="space-y-6">
              <Item label="Call">
                <a href={PHONE_LINK} className="hover:text-gold">
                  {PHONE}
                </a>
              </Item>
              <Item label="Text">
                <a href={SMS_LINK} className="hover:text-gold">
                  {PHONE}
                </a>
              </Item>
              <Item label="Email">
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-gold">
                  {EMAIL}
                </a>
              </Item>
              <Item label="Book online">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  Reserve your ride →
                </a>
              </Item>
              <Item label="Instant estimate">
                <Link href={QUOTE_PATH} className="hover:text-gold">
                  Get a quote →
                </Link>
              </Item>
            </dl>
            <p className="mt-8 leading-7 text-mute">For rides in the next few hours, please call or text so we can confirm right away. We serve Connecticut and the surrounding areas.</p>
          </div>
          <div className="rounded-2xl border border-line bg-ink-3/60 p-7 md:p-9">
            <h2 className="font-display text-2xl text-white">Send a request</h2>
            <p className="mb-7 mt-2 text-mute">Corporate accounts, weddings, group trips or questions. We usually reply within a few hours.</p>
            <ContactForm initialType={type} />
          </div>
        </div>
      </Section>
    </main>
  );
}

function Item({ label, children }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.2em] text-mute">{label}</dt>
      <dd className="mt-1 text-xl font-semibold text-white">{children}</dd>
    </div>
  );
}
