import Image from "next/image";
import Link from "next/link";
import { AIRPORTS, BOOKING_URL, COMPANY, EMAIL, PHONE, PHONE_LINK, POLICIES, QUOTE_PATH, SERVICES } from "@/lib/site";

export default function SiteFooter() {
  return (
    <>
      {/* Closing call to action, shown on every page */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl text-gold-gradient md:text-4xl">Ready when you are.</h2>
            <p className="mt-2 text-mute">Book online in two minutes, or call or text us any time, day or night.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold px-7 py-4 font-bold text-black transition hover:bg-gold-light">
              Book Now
            </a>
            <a href={PHONE_LINK} className="rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-ink pb-24 pt-16 text-[15px] text-mute md:pb-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src="/images/jsr-logo-full.png" alt={COMPANY} width={190} height={140} className="mb-5 h-auto w-44" />
            <p className="max-w-sm leading-7">
              Licensed and insured chauffeured transportation for Connecticut and the New York area. Airport transfers, corporate travel, weddings, events and hourly service, 24 hours a day.
            </p>
            <div className="mt-6 space-y-2">
              <a href={PHONE_LINK} className="block text-lg font-semibold text-gold hover:text-gold-light">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block hover:text-gold">
                {EMAIL}
              </a>
            </div>
          </div>

          <FooterCol title="Services">
            {SERVICES.map((s) => (
              <FooterLink key={s.slug} href={s.href}>
                {s.name}
              </FooterLink>
            ))}
            <FooterLink href="/fleet">Our Fleet</FooterLink>
            <FooterLink href={QUOTE_PATH}>Get a Quote</FooterLink>
          </FooterCol>

          <FooterCol title="Airports">
            {AIRPORTS.map((a) => (
              <FooterLink key={a.slug} href={`/airports/${a.slug}`}>
                {a.short} ({a.code})
              </FooterLink>
            ))}
            <FooterLink href="/airports">All airports</FooterLink>
          </FooterCol>

          <FooterCol title="Policies">
            {POLICIES.map(([href, label]) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-2 border-t border-line px-6 py-6 text-sm sm:flex-row">
          <span>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</span>
          <span>Serving Connecticut, New York and the surrounding areas.</span>
        </div>
      </footer>

      {/* Phone-only bar: call or book from anywhere on the page */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-ink/95 px-3 pt-2 backdrop-blur md:hidden" style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}>
        <a href={PHONE_LINK} className="rounded-md border border-gold/60 py-3 text-center font-bold text-gold">
          Call
        </a>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold py-3 text-center font-bold text-black">
          Book Now
        </a>
      </div>
    </>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-sm tracking-[0.2em] text-gold">{title.toUpperCase()}</h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-gold">
        {children}
      </Link>
    </li>
  );
}
