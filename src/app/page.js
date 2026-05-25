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
          <Link
            href="/"
            className="text-[#D4AF37] transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="transition hover:text-[#D4AF37]"
          >
            Services
          </Link>

          <Link
            href="/fleet"
            className="transition hover:text-[#D4AF37]"
          >
            Fleet
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[#D4AF37]"
          >
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">

          {/* BRAND */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="JSR Executive Transportation"
              className="mb-6 w-24 object-contain"
            />

            <p className="leading-8 text-white/80">
              Premium transportation.
              <br />
              Professional service.
              <br />
              Every ride, elevated.
            </p>

            <a
              href="tel:4752244700"
              className="mt-8 inline-block rounded-xl border border-[#D4AF37] px-6 py-4 text-lg font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              475-224-4700
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-3 text-white/90">
              <Link href="/" className="hover:text-[#D4AF37]">
                Home
              </Link>

              <Link href="/services" className="hover:text-[#D4AF37]">
                Services
              </Link>

              <Link href="/fleet" className="hover:text-[#D4AF37]">
                Fleet
              </Link>

              <Link href="/get-a-quote" className="hover:text-[#D4AF37]">
                Get a Quote
              </Link>

              <Link href="/about" className="hover:text-[#D4AF37]">
                About JSR
              </Link>

              <Link href="/contact" className="hover:text-[#D4AF37]">
                Contact
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
              OUR SERVICES
            </h3>

            <div className="flex flex-col gap-3 text-white/90">
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

            <div className="flex flex-col gap-3 text-white/90">
              <p>Servicing Connecticut & Surrounding Areas</p>

              <a
                href="tel:4752244700"
                className="hover:text-[#D4AF37]"
              >
                475-224-4700
              </a>

              <a
                href="mailto:accounting@jsrexecutive.com"
                className="hover:text-[#D4AF37]"
              >
                accounting@jsrexecutive.com
              </a>

              <p>24/7 Availability</p>
            </div>
          </div>

          {/* POLICIES */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
              POLICIES
            </h3>

            <div className="flex flex-col gap-3 text-white/90">
              <Link href="/terms" className="hover:text-[#D4AF37]">
                Terms & Conditions
              </Link>

              <Link
                href="/cancellation-policy"
                className="hover:text-[#D4AF37]"
              >
                Cancellation Policy
              </Link>

              <Link
                href="/privacy-policy"
                className="hover:text-[#D4AF37]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/payment-policy"
                className="hover:text-[#D4AF37]"
              >
                Payment Policy
              </Link>

              <Link
                href="/wait-time-policy"
                className="hover:text-[#D4AF37]"
              >
                Wait Time Policy
              </Link>

              <Link
                href="/no-show-policy"
                className="hover:text-[#D4AF37]"
              >
                No-Show Policy
              </Link>

              <Link
                href="/damage-cleaning-policy"
                className="hover:text-[#D4AF37]"
              >
                Damage / Cleaning Policy
              </Link>

              <Link
                href="/airport-delay-policy"
                className="hover:text-[#D4AF37]"
              >
                Airport Delay Policy
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-[#D4AF37]/20 pt-6 text-center text-sm text-white/60">
          © 2026 JSR Executive Transportation. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}