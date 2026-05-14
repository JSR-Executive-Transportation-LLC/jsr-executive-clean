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
      <footer className="bg-black px-6 pt-10">
        <div className="mx-auto max-w-7xl">
          <img
            src="/images/footer.png"
            alt="JSR Footer"
            className="block h-auto w-full"
          />
        </div>
      </footer>
    </main>
  );
}