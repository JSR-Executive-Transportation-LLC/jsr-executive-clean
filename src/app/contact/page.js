import Link from "next/link";

export default function CTASection() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 z-50 w-full border-b border-[#D4AF37]/30 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* LOGO */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="JSR Executive Transportation"
              className="h-14 w-auto cursor-pointer"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex gap-8 text-lg font-medium">
            <Link
              href="/"
              className="text-white transition hover:text-[#D4AF37]"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-white transition hover:text-[#D4AF37]"
            >
              Services
            </Link>

            <Link
              href="/fleet"
              className="text-white transition hover:text-[#D4AF37]"
            >
              Fleet
            </Link>

            <Link
              href="/contact"
              className="text-white transition hover:text-[#D4AF37]"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.68)), url('/images/book-bg.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl pt-32">
          {/* SMALL TITLE */}
          <p className="text-[#D4AF37] uppercase tracking-[0.45em] text-sm md:text-base mb-6">
            Ready When You Are
          </p>

          {/* MAIN TITLE */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#D4AF37] mb-8">
            Let’s Get You There in Style.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-12">
            Premium chauffeur service for airport transfers, corporate travel,
            weddings, events, and nights out.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row justify-center gap-5 mb-12">
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
              className="border border-[#D4AF37] text-[#D4AF37] font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#D4AF37] hover:text-black transition duration-300 backdrop-blur-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-3 text-lg text-gray-100">
            <p>
              Call:{" "}
              <a
                href="tel:4752244700"
                className="text-[#D4AF37] hover:text-white transition"
              >
                475-224-4700
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:accounting@jsrexecutive.com"
                className="text-[#D4AF37] hover:text-white transition"
              >
                accounting@jsrexecutive.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}