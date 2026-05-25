"use client";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen bg-[url('/city-bg.jpg')] bg-cover bg-center px-6 py-16">
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] text-[#D4AF37]">
              EXECUTIVE TRANSPORTATION
            </p>
            <h1 className="text-4xl font-bold text-[#D4AF37] md:text-5xl">
              Request a Quote
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90">
              Select your pickup location, drop-off location, vehicle type, and
              service type to receive an estimated quote.
            </p>
          </div>

          <form className="rounded-2xl border border-[#D4AF37]/70 bg-black/80 p-6 shadow-2xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input className="inputStyle" placeholder="Full Name" />
              <input className="inputStyle" placeholder="Company / Account Name Optional" />
              <input className="inputStyle" placeholder="Phone Number" />
              <input className="inputStyle" placeholder="Email Address" />

              <select className="inputStyle">
                <option>Select Pickup Location</option>
              </select>

              <select className="inputStyle">
                <option>Select Drop-Off Location</option>
              </select>

              <input className="inputStyle" type="date" />

              <div className="grid grid-cols-3 gap-3">
                <select className="inputStyle">
                  <option>Hour</option>
                </select>
                <select className="inputStyle">
                  <option>Min</option>
                </select>
                <select className="inputStyle">
                  <option>AM/PM</option>
                </select>
              </div>

              <input className="inputStyle" placeholder="Passenger Count" />

              <select className="inputStyle">
                <option>Occasion Type</option>
              </select>

              <select className="inputStyle">
                <option>Vehicle Preference</option>
              </select>

              <input className="inputStyle" placeholder="Hourly Service Hours" />
            </div>

            <textarea
              className="mt-4 min-h-[150px] w-full rounded-lg border border-[#D4AF37]/50 bg-black px-4 py-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#D4AF37]"
              placeholder="Please provide flight details, luggage count, passenger details, special requests, additional stops, child seats, itinerary notes, or any other service requirements."
            />

            <div className="mt-6 rounded-xl border border-[#D4AF37]/60 bg-black p-6 text-center">
              <p className="text-sm font-semibold text-[#D4AF37]">
                Quote Estimate
              </p>
              <p className="mt-2 text-white">
                Select trip details to calculate estimate.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-[#D4AF37]/40 bg-black p-4 text-xs leading-relaxed text-white/80">
              <p>
                <span className="font-semibold text-[#D4AF37]">
                  Pricing Notice:
                </span>{" "}
                Sedan hourly service is billed at $70 per hour with a 2-hour
                minimum. SUV hourly service is billed at $80 per hour with a
                2-hour minimum. Sprinter services require a custom quote.
              </p>

              <p className="mt-4">
                Rates do not include applicable taxes, tolls, parking, 20%
                gratuity, or STC charges required by government agencies where
                applicable. Final pricing may vary based on itinerary, wait
                time, additional stops, vehicle availability, and special
                requests.
              </p>

              <p className="mt-4">
                All domestic arrivals include a complimentary 30-minute grace
                period upon flight arrival. International arrivals include a
                complimentary 60-minute grace period upon arrival. Additional
                wait time beyond the complimentary grace period will be billed
                in 15-minute intervals.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <button
                type="button"
                className="rounded-lg border border-[#D4AF37] px-6 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Calculate Estimate
              </button>

              <button
                type="submit"
                className="rounded-lg bg-[#D4AF37] px-6 py-4 font-semibold text-black transition hover:bg-[#f1cf52]"
              >
                Request Executive Quote
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-white/80">
              Need immediate assistance?{" "}
              <a
                href="mailto:accounting@jsrexecutive.com"
                className="text-[#D4AF37] hover:underline"
              >
                accounting@jsrexecutive.com
              </a>
            </p>

            <p className="mt-2 text-center text-xs text-white/70">
              Thank you for choosing JSR Executive Transportation. A
              representative will contact you shortly to confirm pricing and
              availability.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}