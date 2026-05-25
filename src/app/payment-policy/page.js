export default function PaymentPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-10 shadow-2xl">
        <h1 className="mb-8 text-5xl font-bold text-[#D4AF37]">
          Payment Policy
        </h1>

        <div className="space-y-6 leading-8 text-white/80">
          <p>
            Payment is required for all transportation services provided by JSR
            Executive Transportation.
          </p>

          <p>
            Major credit cards and approved electronic payment methods are
            accepted.
          </p>

          <p>
            Additional charges may apply for wait time, parking, tolls,
            additional stops, itinerary changes, damages, and cleaning fees.
          </p>

          <p>
            Final pricing may vary from initial estimates depending on actual
            trip details and operational adjustments.
          </p>

          <p>
            Corporate billing accounts may be subject to separate billing terms
            and approval requirements.
          </p>
        </div>
      </section>
    </main>
  );
}