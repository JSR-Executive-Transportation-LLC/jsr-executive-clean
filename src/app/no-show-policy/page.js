export default function NoShowPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-10 shadow-2xl">
        <h1 className="mb-8 text-5xl font-bold text-[#D4AF37]">
          No-Show Policy
        </h1>

        <div className="space-y-6 leading-8 text-white/80">
          <p>
            A reservation is considered a no-show when the passenger fails to
            arrive at the scheduled pickup location within the allotted
            complimentary wait time and cannot be reached by the chauffeur or
            dispatch.
          </p>

          <p>
            No-show reservations are billed in full.
          </p>

          <p>
            Chauffeurs and dispatch personnel will make reasonable attempts to
            contact the passenger using the contact information provided during
            booking.
          </p>

          <p>
            For airport arrivals, flight tracking may be used to assist with
            timing and passenger coordination.
          </p>

          <p>
            Clients are responsible for ensuring accurate contact information is
            provided at the time of reservation.
          </p>

          <p>
            Repeated no-shows may result in refusal of future service.
          </p>
        </div>
      </section>
    </main>
  );
}