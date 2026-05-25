export default function WaitTimePolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-10 shadow-2xl">
        <h1 className="mb-8 text-5xl font-bold text-[#D4AF37]">
          Wait Time Policy
        </h1>

        <div className="space-y-6 leading-8 text-white/80">
          <p>
            JSR Executive Transportation provides complimentary wait time for
            airport and non-airport pickups to ensure a smooth and professional
            travel experience.
          </p>

          <p>
            Domestic airport arrivals include up to 45 minutes of complimentary
            wait time from the time the flight has landed.
          </p>

          <p>
            International airport arrivals include up to 60 minutes of
            complimentary wait time from the time the flight has landed.
          </p>

          <p>
            Non-airport pickups include up to 15 minutes of complimentary wait
            time from the scheduled pickup time.
          </p>

          <p>
            Additional wait time beyond the complimentary grace period may be
            billed at the applicable hourly rate in incremental charges.
          </p>

          <p>
            Wait time charges may vary depending on vehicle type, reservation
            type, and location.
          </p>
        </div>
      </section>
    </main>
  );
}