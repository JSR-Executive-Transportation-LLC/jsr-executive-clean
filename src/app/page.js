import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* MOBILE HERO IMAGE */}
        <img
          src="/images/1hero-mobile-clean.png"
          alt="JSR Executive Transportation"
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />

        {/* DESKTOP HERO IMAGE */}
        <img
          src="/images/1hero-clean.png"
          alt="JSR Executive Transportation"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />

        {/* NAVIGATION */}
        <nav className="absolute left-0 top-0 z-50 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 md:justify-end md:px-10 md:py-6">
            <div className="flex gap-4 text-base font-medium md:gap-10 md:text-xl">
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
            </div>
          </div>
        </nav>

        {/* HERO BUTTONS */}
        <div className="absolute bottom-10 left-1/2 z-40 flex w-full max-w-sm -translate-x-1/2 flex-col gap-4 px-6 md:bottom-16 md:max-w-none md:flex-row md:px-0">
          <Link
            href="/book-now"
            className="w-full rounded-xl border border-[#D4AF37] bg-black/70 px-10 py-5 text-center text-xl font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black md:w-auto"
          >
            Book Now
          </Link>

          <Link
            href="/get-a-quote"
            className="w-full rounded-xl bg-[#D4AF37] px-10 py-5 text-center text-xl font-bold text-black transition hover:opacity-90 md:w-auto"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <div className="relative z-10 bg-black">
        {/* ABOUT SECTION */}
        <section className="px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
                Executive Excellence
              </p>

              <h2 className="mb-6 text-4xl font-bold text-[#D4AF37] md:text-6xl">
                About JSR Executive Transportation
              </h2>

              <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
                JSR Executive Transportation is a premier luxury ground
                transportation company delivering reliable, discreet, and
                professional chauffeur services throughout Connecticut, New York,
                and surrounding regions.
              </p>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
                With over{" "}
                <span className="font-semibold text-[#D4AF37]">
                  45 years of combined industry experience
                </span>
                , our team understands the importance of punctuality,
                professionalism, and personalized service.
              </p>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
                From corporate travel and airport transfers to weddings, special
                events, and executive transportation, every ride is handled with
                attention to detail and a commitment to excellence.
              </p>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
                At JSR, transportation is more than getting from point A to point
                B — it is an experience built around comfort, safety,
                reliability, and exceptional customer care.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/40 shadow-2xl">
              <img
                src="/images/icons.png"
                alt="Why Choose JSR"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
              Our Services
            </p>

            <h2 className="mb-6 text-4xl font-bold text-[#D4AF37] md:text-5xl">
              Luxury Transportation for Every Occasion
            </h2>

            <p className="mx-auto mb-14 max-w-3xl text-lg text-gray-300 md:text-xl">
              From airport transfers and corporate travel to weddings, events,
              and nights out, JSR delivers professional chauffeur service tailored
              to your schedule.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                "Airport Transfers",
                "Corporate Transportation",
                "Hourly Chauffeur Service",
                "Weddings & Events",
                "Prom Transportation",
                "Executive Nights Out",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-[#D4AF37]/30 bg-black p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-[#D4AF37]">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE AREA */}
        <section className="bg-black px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
              Coverage Area
            </p>

            <h2 className="mb-6 text-4xl font-bold text-[#D4AF37] md:text-5xl">
              Serving Connecticut, New York & Beyond
            </h2>

            <p className="mx-auto mb-12 max-w-4xl text-lg text-gray-300 md:text-xl">
              JSR Executive Transportation provides premium ground transportation
              throughout Connecticut, New York City, Westchester, surrounding
              regions, and major airports.
            </p>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                "Connecticut",
                "New York City",
                "Westchester",
                "JFK Airport",
                "LaGuardia Airport",
                "Newark Airport",
                "Bradley Airport",
                "Tweed New Haven Airport",
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-[#D4AF37]/30 bg-[#111111] p-6 text-lg text-gray-200"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATE ACCOUNTS */}
        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#D4AF37]/40 bg-black p-10 text-center shadow-2xl md:p-14">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
              Corporate Travel
            </p>

            <h2 className="mb-6 text-4xl font-bold text-[#D4AF37] md:text-5xl">
              Corporate Transportation Solutions
            </h2>

            <p className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
              JSR supports executives, business travelers, corporate teams, and
              VIP clients with reliable chauffeur service, airport coordination,
              account support, and professional transportation management.
            </p>

            <div className="mb-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-[#D4AF37]/25 p-6 text-lg text-gray-200">
                Monthly Billing
              </div>
              <div className="rounded-xl border border-[#D4AF37]/25 p-6 text-lg text-gray-200">
                Executive Travel Support
              </div>
              <div className="rounded-xl border border-[#D4AF37]/25 p-6 text-lg text-gray-200">
                Airport & Flight Coordination
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block rounded-xl bg-[#D4AF37] px-10 py-5 text-lg font-bold text-black transition hover:opacity-90"
            >
              Open a Corporate Account
            </Link>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-black px-6 py-24 text-white">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
                Questions
              </p>

              <h2 className="text-4xl font-bold text-[#D4AF37] md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Do you track flights?",
                  a: "Yes. JSR monitors flight arrivals to help coordinate airport pickups and reduce scheduling issues.",
                },
                {
                  q: "Do you offer hourly service?",
                  a: "Yes. Hourly chauffeur service is available with minimum hourly requirements depending on vehicle type.",
                },
                {
                  q: "Are gratuities included?",
                  a: "Rates do not include taxes, tolls, parking, 20% gratuity, or applicable government-required charges.",
                },
                {
                  q: "Do you provide child seats?",
                  a: "Booster, toddler, and infant seat options may be requested during booking.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-[#D4AF37]/25 bg-[#111111] p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-[#D4AF37]">
                    {item.q}
                  </h3>
                  <p className="text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 py-24 text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.68)), url('/images/book-bg.png')",
          }}
        >
          <div className="relative z-10 max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D4AF37] md:text-base">
              Ready When You Are
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-[#D4AF37] md:text-7xl">
              Let’s Get You There in Style.
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-100 md:text-2xl">
              Premium chauffeur service for airport transfers, corporate travel,
              weddings, events, and nights out.
            </p>

            <div className="mb-12 flex flex-col justify-center gap-5 md:flex-row">
              <Link
                href="/book-now"
                className="rounded-xl bg-[#D4AF37] px-10 py-5 text-lg font-bold text-black transition hover:opacity-90"
              >
                Book Your Ride
              </Link>

              <Link
                href="/get-a-quote"
                className="rounded-xl border border-[#D4AF37] px-10 py-5 text-lg font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Get a Quote
              </Link>
            </div>

            <div className="space-y-3 text-lg text-gray-100">
              <p>
                Call:{" "}
                <a
                  href="tel:4752244700"
                  className="text-[#D4AF37] transition hover:text-white"
                >
                  475-224-4700
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:admin@jsrexecutive.com"
                  className="text-[#D4AF37] transition hover:text-white"
                >
                  admin@jsrexecutive.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}