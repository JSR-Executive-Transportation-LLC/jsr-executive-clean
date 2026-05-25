import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl rounded-3xl border border-[#D4AF37]/60 bg-black/80 p-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#D4AF37]">Payment Not Completed</h1>
        <p className="mb-8 text-gray-300">
          Your payment was not completed. You can return to the booking page and try again.
        </p>
        <Link href="/book-now" className="rounded-xl bg-[#D4AF37] px-6 py-3 font-bold text-black">
          Back to Booking
        </Link>
      </div>
    </main>
  );
}