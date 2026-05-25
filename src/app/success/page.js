import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl rounded-3xl border border-[#D4AF37]/60 bg-black/80 p-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#D4AF37]">Payment Received</h1>
        <p className="mb-8 text-gray-300">
          Thank you. Your secure payment has been received and your reservation is being reviewed by JSR Executive.
        </p>
        <Link href="/" className="rounded-xl bg-[#D4AF37] px-6 py-3 font-bold text-black">
          Return Home
        </Link>
      </div>
    </main>
  );
}