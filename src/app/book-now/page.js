"use client";

import Link from "next/link";

export default function BookNowPage() {
  const inputClass =
    "peer w-full rounded-xl border border-[#D4AF37]/25 bg-black/70 px-4 pb-3 pt-6 text-white outline-none transition duration-300 placeholder-transparent focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/60 focus:shadow-[0_0_18px_rgba(212,175,55,0.25)]";

  const labelClass =
    "absolute left-4 top-2 text-xs tracking-wide text-[#D4AF37] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#D4AF37]";

  const selectClass =
    "w-full rounded-xl border border-[#D4AF37]/25 bg-black/70 p-5 text-white outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/60 focus:shadow-[0_0_18px_rgba(212,175,55,0.25)]";

  const Field = ({ label, type = "text", required = false }) => (
    <div className="relative">
      <input required={required} type={type} placeholder={label} className={inputClass} />
      <label className={labelClass}>{label}</label>
    </div>
  );

  const Divider = () => <div className="my-10 h-px bg-[#D4AF37]/25" />;

  return (
    <main
      className="min-h-screen bg-black bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.56), rgba(0,0,0,0.72)), url('/images/book-bg.png')",
      }}
    >
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#D4AF37]/40 bg-black/75 px-8 py-4 backdrop-blur-md">
        <Link href="/">
          <img src="/images/logo.png" alt="JSR Executive Transportation" className="h-12 w-auto" />
        </Link>

        <div className="flex gap-8 text-lg">
          <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
          <Link href="/services" className="hover:text-[#D4AF37] transition">Services</Link>
          <Link href="/fleet" className="hover:text-[#D4AF37] transition">Fleet</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>
        </div>
      </nav>

      <section className="px-6 pt-24 pb-10 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.6em] text-[#D4AF37]">
          Private Chauffeur Service
        </p>

        <h1 className="mb-6 text-6xl font-bold text-[#D4AF37] md:text-7xl">
          Book Your Ride
        </h1>

        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-100">
          Luxury transportation tailored to your schedule with professional
          chauffeurs, premium vehicles, and first-class service.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <form className="rounded-3xl border border-[#D4AF37]/70 bg-black/70 p-8 shadow-2xl backdrop-blur-md md:p-12">
            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>✦</span> Account Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Company / Account Name" required />
                <Field label="Account Number" />
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>👤</span> Passenger Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Passenger Name" required />
                <Field label="Contact Number" type="tel" required />
                <Field label="Email Address" type="email" required />
                <Field label="Passenger Count" type="number" required />
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>📍</span> Trip Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <input
                    required
                    type="date"
                    placeholder="Pickup Date"
                    className={`${inputClass} cursor-pointer`}
                    onClick={(e) =>
                      e.currentTarget.showPicker && e.currentTarget.showPicker()
                    }
                    onFocus={(e) =>
                      e.currentTarget.showPicker && e.currentTarget.showPicker()
                    }
                  />
                  <label className={labelClass}>Pickup Date</label>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                    📅
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <select required className={selectClass}>
                    <option value="">Hour</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>

                  <select required className={selectClass}>
                    <option value="">Minutes</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </select>

                  <select required className={selectClass}>
                    <option value="">AM/PM</option>
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>

                <Field label="Pickup Location" required />
                <Field label="Drop-Off Location" required />
                <Field label="Additional Stops" />
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>✈</span> Airport / Flight Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Pickup Airport" />
                <Field label="Drop-Off Airport" />
                <Field label="Airline" />
                <Field label="Flight Number" />
                <Field label="Tail Number" />

                <select className={selectClass}>
                  <option value="">Airport Pickup Preference</option>
                  <option>Curbside Pickup</option>
                  <option>Inside Meet & Greet Pickup</option>
                </select>
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>🚘</span> Service Selection
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <select required className={selectClass}>
                  <option value="">Occasion Type</option>
                  <option>Hourly</option>
                  <option>Airport Transfer</option>
                  <option>Point to Point</option>
                  <option>Wedding</option>
                  <option>Prom</option>
                </select>

                <select required className={selectClass}>
                  <option value="">Vehicle Type</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Sprinter</option>
                </select>

                <select className={`${selectClass} md:col-span-2`}>
                  <option value="">Sprinter Configuration</option>
                  <option>Sprinter Limo Style Seating</option>
                  <option>Forward Facing Seating</option>
                </select>
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>🧒</span> Child Safety Seating
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <select className={selectClass}>
                  <option value="">Car Seat Needed?</option>
                  <option>No Car Seat Needed</option>
                  <option>Booster Seat</option>
                  <option>Toddler Seat</option>
                  <option>Infant Seat</option>
                </select>

                <Field label="Car Seat Quantity / Notes" />
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>🔒</span> Secure Reservation Portal
              </h2>

              <div className="mb-6 rounded-2xl border border-[#D4AF37]/30 bg-[#111111]/85 p-5 text-sm text-gray-300">
                Your payment information should be completed through JSR’s
                secure payment processor or dispatch system.
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <select required className={selectClass}>
                  <option value="">Select Payment Method</option>
                  <option>Stored Card Ending in 1234</option>
                  <option>Stored Card Ending in 5678</option>
                  <option>Add New Credit Card Securely</option>
                </select>

                <Field label="Billing ZIP Code" />
              </div>
            </div>

            <Divider />

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[#D4AF37]">
                <span>📝</span> Special Instructions
              </h2>

              <textarea
                rows="6"
                placeholder="Special instructions, luggage details, child seat notes, meet & greet instructions, preferred chauffeur, or other requests..."
                className="w-full rounded-xl border border-[#D4AF37]/25 bg-black/70 p-5 text-white outline-none transition duration-300 placeholder-gray-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/60 focus:shadow-[0_0_18px_rgba(212,175,55,0.25)]"
              />
            </div>

            <Divider />

            <button
  type="button"
  onClick={async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 10000, // $100 test authorization
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Unable to start checkout.");
    }
  }}
  className="w-full rounded-xl bg-[#D4AF37] py-5 text-xl font-bold text-black shadow-lg transition hover:opacity-90 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
>
  Continue to Secure Payment
</button>

            <p className="mt-5 text-center text-gray-300">
              A JSR representative will contact you shortly to confirm your
              reservation details.
            </p>
          </form>

          <aside className="h-fit rounded-3xl border border-[#D4AF37]/60 bg-black/70 p-8 shadow-2xl backdrop-blur-md lg:sticky lg:top-28">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              Concierge Review
            </p>

            <h3 className="mb-6 text-3xl font-bold text-white">
              Trip Summary
            </h3>

            <div className="space-y-5 text-gray-300">
              <div className="border-b border-[#D4AF37]/20 pb-4">
                <p className="text-[#D4AF37]">Status</p>
                <p>Reservation request pending submission</p>
              </div>

              <div className="border-b border-[#D4AF37]/20 pb-4">
                <p className="text-[#D4AF37]">Airport Pickup</p>
                <p>Curbside or inside meet & greet available</p>
              </div>

              <div className="border-b border-[#D4AF37]/20 pb-4">
                <p className="text-[#D4AF37]">Child Safety Seating</p>
                <p>Booster, toddler, and infant seat options available</p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#111111]/85 p-5">
                <p className="mb-2 text-[#D4AF37]">
                  Secure Reservation Portal
                </p>

                <p className="text-sm">
                  Payment and trip details will be reviewed before final
                  confirmation.
                </p>
              </div>
            </div>

            <a
              href="mailto:admin@jsrexecutive.com"
              className="mt-8 block rounded-xl border border-[#D4AF37] px-6 py-4 text-center text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Email admin@jsrexecutive.com
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}