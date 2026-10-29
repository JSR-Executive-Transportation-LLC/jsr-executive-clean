"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOKING_URL, PHONE, PHONE_LINK, QUOTE_PATH } from "@/lib/site";

const NAV = [
  { href: "/services", label: "Services", match: ["/services", "/corporate-transportation", "/weddings-events", "/hourly-chauffeur"] },
  { href: "/airports", label: "Airports", match: ["/airports"] },
  { href: "/fleet", label: "Fleet", match: ["/fleet"] },
  { href: "/about", label: "About", match: ["/about"] },
  { href: "/contact", label: "Contact", match: ["/contact"] },
];

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (item) => item.match.some((m) => pathname === m || pathname.startsWith(m + "/"));

  return (
    <>
      <div className="hidden border-b border-line bg-ink-2 text-[13px] text-mute md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span>Licensed &amp; insured Connecticut livery service · Available 24/7</span>
          <span>
            Call or text{" "}
            <a href={PHONE_LINK} className="font-semibold text-gold hover:text-gold-light">
              {PHONE}
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3">
          <Link href="/" className="mr-auto flex items-center gap-3" aria-label="JSR Executive Transportation home">
            <Image src="/images/jsr-mark.png" alt="" width={84} height={55} priority className="h-11 w-auto" />
            <span className="hidden font-display text-[13px] leading-tight tracking-[0.18em] text-gold sm:block">
              Executive
              <br />
              Transportation
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item) ? "page" : undefined}
                className={`rounded px-3 py-2 text-[15px] font-semibold transition ${
                  isActive(item) ? "text-gold" : "text-white/85 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href={QUOTE_PATH} className="ml-2 rounded-md border border-gold/60 px-4 py-2 text-[14px] font-bold text-gold transition hover:bg-gold/10">
              Get a Quote
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ml-2 rounded-md bg-gold px-5 py-2 text-[14px] font-bold text-black transition hover:bg-gold-light">
              Book Now
            </a>
          </nav>

          <button
            type="button"
            className="rounded-md border border-gold/40 px-3 py-2 text-sm font-semibold text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="border-t border-line bg-ink px-6 pb-6 lg:hidden" aria-label="Mobile" onClick={(e) => e.target.closest("a") && setOpen(false)}>
            {[{ href: "/", label: "Home", match: ["/"] }, ...NAV].map((item) => (
              <Link key={item.href} href={item.href} className="block border-b border-white/5 py-3 text-lg font-semibold text-white/90">
                {item.label}
              </Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link href={QUOTE_PATH} className="rounded-md border border-gold/60 py-3 text-center font-bold text-gold">
                Get a Quote
              </Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold py-3 text-center font-bold text-black">
                Book Now
              </a>
            </div>
            <a href={PHONE_LINK} className="mt-4 block text-center text-gold">
              Call or text {PHONE}
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
