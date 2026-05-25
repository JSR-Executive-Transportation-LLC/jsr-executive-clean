"use client";

import Link from "next/link";

const bookingUrl = "https://book.mylimobiz.com/v4/jsrexecutive";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative bg-black">
        <img
          src="/images/1hero-clean.png"
          alt="JSR Executive Transportation"
          className="block h-auto w-full"
        />

        <nav className="absolute right-0 top-0 z-30 flex gap-8 px-10 py-8 text-lg font-medium">
          <Link href="/" className="text-[#D4AF37] transition hover:text-white">
            Home
          </Link>

          <Link href="/services" className="transition hover:text-[#D4AF37]">
            Services
          </Link>

          <Link href="/fleet" className="transition hover:text-[#D4AF37]">
            Fleet
          </Link>

          <Link href="/contact" className="transition hover:text-[#D4AF37]">
            Contact
          </Link>
        </nav>
      </section>

      {/* BUTTONS */}
      <section className="bg-black px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-5 md:flex-row">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#D4AF37] bg-black px-10 py-5 text-center text-xl font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Book Now
          </a>

          <Link
            href="/get-a-quote"
            className="rounded-xl bg-[#D4AF37] px-10 py-5 text-center text-xl font-bold text-black transition hover:opacity-90"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <img
            src="/images/icons.png"
            alt="Why Choose JSR"
            className="block h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <img
            src="/images/services.png"
            alt="Our Services"
            className="block h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      {/* FLEET */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <img
            src="/images/fleet-section1.png"
            alt="Luxury Fleet"
            className="block h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <img
            src="/images/testimonials.png"
            alt="Client Testimonials"
            className="block h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      {/* FOOTER */}
<footer className="border-t border-[#D4AF37]/30 bg-black px-6 py-14">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">

    {/* BRAND */}
    <div>
      <h2 className="text-4xl font-bold text-[#D4AF37]">
        JSR
      </h2>

      <p className="mt-2 text-sm tracking-[0.3em] text-[#D4AF37]">
        EXECUTIVE TRANSPORTATION
      </p>

      <p className="mt-6 text-white/80">
        Premium transportation.
        <br />
        Professional service.
        <br />
        Every ride, elevated.
      </p>

      <a
        href="tel:4752244700"
        className="mt-6 inline-block rounded-xl border border-[#D4AF37] px-6 py-4 text-xl font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
      >
        475-224-4700
      </a>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
        QUICK LINKS
      </h3>

      <div className="flex flex-col gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/fleet">Fleet</Link>
        <Link href="/get-a-quote">Get a Quote</Link>
        <Link href="/about">About JSR</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
        OUR SERVICES
      </h3>

      <div className="flex flex-col gap-4 text-white/90">
        <p>Airport Transfers</p>
        <p>Corporate Transportation</p>
        <p>Weddings & Events</p>
        <p>Hourly Chauffeur Service</p>
        <p>Executive Night Out</p>
      </div>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
        CONTACT US
      </h3>

      <div className="flex flex-col gap-4 text-white/90">
        <p>Servicing Connecticut & Surrounding Areas</p>

        <a href="tel:4752244700">
          475-224-4700
        </a>

        <a
  href="mailto:accounting@jsrexecutive.com?subject=JSR Executive Transportation Quote Request"
  className="hover:text-[#D4AF37] transition"
>
  accounting@jsrexecutive.com
</a>

        <p>24/7 Availability</p>
      </div>
    </div>
  </div>

  <div className="mt-14 border-t border-[#D4AF37]/20 pt-6 text-center text-sm text-white/60">
    © 2026 JSR Executive Transportation. All Rights Reserved.
  </div>
    </footer>
  </main>
);
}