export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-10 shadow-2xl">
        <h1 className="mb-8 text-5xl font-bold text-[#D4AF37]">
          Cancellation Policy
        </h1>

        <div className="space-y-6 leading-8 text-white/80">
          <p>
            Sedan and SUV reservations may be cancelled without charge when
            cancelled at least 24 hours before the scheduled pickup time.
          </p>

          <p>
            Cancellations made within 24 hours of pickup may be subject to a
            cancellation fee of up to 50% of the reservation total.
          </p>

          <p>
            Cancellations made within 12 hours of pickup may be charged in full.
          </p>

          <p>
            Specialty vehicles including sprinter vans, stretch limousines,
            party buses, wedding transportation, and event transportation may
            require a minimum 30-daycancellation notice.
          </p>

          <p>
            No-shows are billed in full.
          </p>

          <p>
            Cancellation terms may vary depending on reservation details,
            distance, event type, vehicle type, and third-party vendor
            requirements.
          </p>
        </div>
      </section>
    </main>
  );
}