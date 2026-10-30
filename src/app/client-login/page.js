import Image from "next/image";
import Link from "next/link";
import { CLIENT_APP_URL, CLIENT_LOGIN_ACTION, PHONE, PHONE_LINK } from "@/lib/site";

export const metadata = {
  title: "Client Login · My Rides",
  description: "Sign in to see, book, edit and track your JSR Executive rides, with saved cards, places and passengers.",
  alternates: { canonical: "/client-login" },
};

const ERRORS = {
  wrong: "That email and password don't match. Please try again, or reset your password below.",
  missing: "Enter your email and password.",
  busy: "Too many tries. Please wait 15 minutes, or reset your password below.",
  site: "Something went wrong signing you in. Please try again.",
};

const PERKS = [
  ["Book in seconds", "Saved cards, home and office addresses, and the people you book for."],
  ["Track your chauffeur", "See your chauffeur's name, photo and car, and follow them on the map."],
  ["Change plans", "Edit or cancel a ride yourself up to 4 hours before pickup."],
  ["Receipts anytime", "Print or save a receipt for every trip."],
];

export default async function ClientLoginPage({ searchParams }) {
  const sp = await searchParams;
  const error = typeof sp?.error === "string" ? ERRORS[sp.error] || ERRORS.site : null;
  return (
    <main className="bg-ink">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <span className="gold-rule mb-4 font-display text-[12px] tracking-[0.22em] sm:text-[13px] sm:tracking-[0.35em]">MY RIDES</span>
            <h1 className="font-display text-4xl leading-tight text-gold-gradient md:text-5xl">Your rides, all in one place.</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-mute">Sign in with the same email and password you use in the JSR Executive app.</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {PERKS.map(([t, d]) => (
                <li key={t} className="border-l-2 border-gold/50 pl-4">
                  <b className="block text-white">{t}</b>
                  <span className="text-[15px] leading-6 text-mute">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-ink-2 p-7 shadow-2xl shadow-black/50 md:p-9">
            <div className="mb-6 flex items-center gap-3">
              <Image src="/images/jsr-mark.png" alt="" width={84} height={55} className="h-10 w-auto" />
              <h2 className="font-display text-2xl text-gold">Client Login</h2>
            </div>
            {error && (
              <p role="alert" className="mb-5 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-[15px] text-red-200">
                {error}
              </p>
            )}
            <form method="post" action={CLIENT_LOGIN_ACTION} className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-mute">
                Email
                <input name="email" type="email" required autoComplete="email" className="rounded-lg border border-line bg-ink px-4 py-3 text-base text-white outline-none focus:border-gold" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-mute">
                Password
                <input name="password" type="password" required autoComplete="current-password" className="rounded-lg border border-line bg-ink px-4 py-3 text-base text-white outline-none focus:border-gold" />
              </label>
              <button type="submit" className="rounded-md bg-gold px-7 py-4 font-bold text-black transition hover:bg-gold-light">
                Sign in
              </button>
            </form>
            <div className="mt-5 flex flex-wrap justify-between gap-3 text-[15px]">
              <a href={`${CLIENT_APP_URL}?view=forgot`} className="text-gold underline-offset-4 hover:underline">
                Forgot password?
              </a>
              <a href={`${CLIENT_APP_URL}?view=signup`} className="font-semibold text-gold underline-offset-4 hover:underline">
                New here? Create an account
              </a>
            </div>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-mute">
              Tip: on your phone, open <a href={CLIENT_APP_URL} className="text-gold">app.groundnexus.com/my</a> and add it to your home screen to use it like an app. Prefer to talk to us?{" "}
              <a href={PHONE_LINK} className="text-gold">
                {PHONE}
              </a>
            </p>
          </div>
        </div>
      </section>
      <p className="sr-only">
        <Link href="/">Back to home</Link>
      </p>
    </main>
  );
}
