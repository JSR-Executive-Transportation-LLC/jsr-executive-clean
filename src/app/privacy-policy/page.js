export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-10 shadow-2xl">
        <h1 className="mb-8 text-5xl font-bold text-[#D4AF37]">
          Privacy Policy
        </h1>

        <div className="space-y-6 leading-8 text-white/80">
          <p>
            JSR Executive Transportation respects your privacy and is committed
            to protecting your personal information.
          </p>

          <p>
            Information collected through this website may include names, phone
            numbers, email addresses, reservation details, and billing
            information.
          </p>

          <p>
            Customer information is used solely for transportation services,
            customer communication, reservation management, and operational
            purposes.
          </p>

          <p>
            JSR Executive Transportation does not sell or share personal
            information with unrelated third parties.
          </p>

          <p>
            Payment information is securely processed through trusted third-party
            payment providers including Stripe.
          </p>

          <p>
            By using this website, you consent to the collection and use of
            information in accordance with this privacy policy.
          </p>
        </div>
      </section>
    </main>
  );
}