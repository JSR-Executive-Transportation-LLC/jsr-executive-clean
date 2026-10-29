import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, PHONE, PHONE_LINK, QUOTE_PATH, SITE_URL } from "@/lib/site";

/** Small uppercase label with gold rules, e.g. "OUR SERVICES". */
export function Eyebrow({ children, center = false }) {
  return (
    <span className={`gold-rule mb-4 font-display text-[12px] tracking-[0.22em] sm:text-[13px] sm:tracking-[0.35em] ${center ? "justify-center" : ""}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl leading-tight text-gold-gradient md:text-[2.75rem]">{title}</h2>
      {lead && <p className="mt-4 text-lg leading-8 text-mute">{lead}</p>}
    </div>
  );
}

export function Section({ children, tone = "ink", id, className = "" }) {
  const bg = tone === "ink2" ? "bg-ink-2" : "bg-ink";
  return (
    <section id={id} className={`${bg} border-t border-line ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">{children}</div>
    </section>
  );
}

export function BookButtons({ quote = true, call = false, bookLabel = "Book Now" }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold px-7 py-4 font-bold text-black transition hover:bg-gold-light">
        {bookLabel}
      </a>
      {quote && (
        <Link href={QUOTE_PATH} className="rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
          Get a Quote
        </Link>
      )}
      {call && (
        <a href={PHONE_LINK} className="rounded-md border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold/10">
          Call {PHONE}
        </a>
      )}
    </div>
  );
}

/** Inner-page hero: breadcrumbs, title, short intro, buttons. */
export function PageHero({ eyebrow, title, lead, crumbs = [], image, buttons = true }) {
  return (
    <section className="relative overflow-hidden bg-ink">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-right opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-mute">
            {crumbs.map(([href, label], i) => (
              <span key={label}>
                {i > 0 && <span className="mx-2 text-gold/50">/</span>}
                {href ? (
                  <Link href={href} className="hover:text-gold">
                    {label}
                  </Link>
                ) : (
                  <span className="text-white/80">{label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl font-display text-[1.9rem] leading-[1.12] text-gold-gradient sm:text-5xl md:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{lead}</p>}
        {buttons && (
          <div className="mt-9">
            <BookButtons />
          </div>
        )}
      </div>
    </section>
  );
}

export function CheckList({ items, columns = 1 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-7 text-white/85">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 flex-none fill-gold">
            <path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7.6-7.6L16.6 5z" />
          </svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Card({ title, children, href, linkLabel = "Learn more", kicker }) {
  return (
    <div className="group flex flex-col rounded-xl border border-line bg-ink-3/60 p-7 transition hover:border-gold/50">
      {kicker && <span className="mb-3 font-display text-2xl text-gold">{kicker}</span>}
      <h3 className="mb-3 font-display text-xl tracking-wide text-white">{title}</h3>
      <div className="leading-7 text-mute">{children}</div>
      {href && (
        <Link href={href} className="mt-6 text-sm font-bold tracking-wide text-gold group-hover:text-gold-light">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export function Faq({ items }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(([q, a]) => (
        <details key={q} className="faq group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-white">{q}</summary>
          <p className="mt-3 max-w-3xl leading-7 text-mute">{a}</p>
        </details>
      ))}
    </div>
  );
}

/** Structured data for Google (rich results). */
export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function faqLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export function crumbsLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(([href, name], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE_URL + href })),
  };
}
