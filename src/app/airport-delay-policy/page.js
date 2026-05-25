export default function AirportDelayPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-10 shadow-2xl">
        <h1 className="mb-8 text-5xl font-bold text-[#D4AF37]">
          Airport Delay Policy
        </h1>

        <div className="space-y-6 leading-8 text-white/80">
          <p>
            JSR Executive Transportation monitors commercial airline flight
            statuses whenever flight information is provided during booking.
          </p>

          <p>
            Chauffeur dispatch times may be adjusted based on actual flight
            arrival times to help accommodate airline delays.
          </p>

          <p>
            Delays caused by airlines, airport operations, customs, baggage
            claim, weather conditions, or air traffic control may affect pickup
            timing and vehicle availability.
          </p>

          <p>
            Extended airport delays may result in additional wait time charges
            depending on vehicle assignment and operational availability.
          </p>

          <p>
            Clients are encouraged to provide accurate airline, flight, and
            contact information when booking airport transportation services.
          </p>

          <p>
            JSR Executive Transportation is not responsible for delays caused by
            airlines, airport operations, weather conditions, traffic, or events
            beyond company control.
          </p>
        </div>
      </section>
    </main>
  );
}