import Link from "next/link";

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-black px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="JSR Executive Transportation"
              className="h-14 w-auto"
            />
          </Link>

          <div className="flex gap-8 text-lg">
            <Link href="/" className="hover:text-[#D4AF37] transition">
              Home
            </Link>

            <Link href="/services" className="hover:text-[#D4AF37] transition">
              Services
            </Link>

            <Link href="/fleet" className="text-[#D4AF37]">
              Fleet
            </Link>

            <Link href="/contact" className="hover:text-[#D4AF37] transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* FLEET IMAGE */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#D4AF37]/40 shadow-2xl">
          <img
            src="/images/fleet-section1.png"
            alt="JSR Executive Transportation Fleet"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#D4AF37]">
          Reserve the Right Vehicle for Your Occasion
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
          Choose from premium sedans, luxury SUVs, and executive Sprinter
          options designed for comfort, professionalism, and reliability.
        </p>

        <div className="flex flex-col justify-center gap-5 md:flex-row">
          
          <a
  href="https://book.mylimobiz.com/v4/jsrexecutive"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-[#D4AF37] bg-black px-8 py-4 text-lg font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
>
  Book Now
</a>

          <Link
            href="/get-a-quote"
            className="rounded-xl border border-[#D4AF37] px-10 py-5 text-lg font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}