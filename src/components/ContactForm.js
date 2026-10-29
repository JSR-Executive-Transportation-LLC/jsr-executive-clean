"use client";

import { useState } from "react";
import { EMAIL, PHONE } from "@/lib/site";

// Optional: create a free form at formspree.io and add its ID in Vercel as
// NEXT_PUBLIC_FORMSPREE_ID. Without it, the form opens the visitor's email app instead.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

const TYPES = [
  ["general", "A ride or a question"],
  ["corporate", "A corporate account"],
  ["wedding", "Wedding or event transportation"],
  ["group", "A group or Sprinter trip"],
  ["partner", "Partnering with JSR (hotels, planners, operators)"],
];

const field =
  "w-full rounded-md border border-gold/25 bg-ink px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-gold focus:ring-1 focus:ring-gold/50";

export default function ContactForm({ initialType = "general" }) {
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const startType = TYPES.some(([v]) => v === initialType) ? initialType : "general";

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    const typeLabel = (TYPES.find(([v]) => v === data.get("type")) || TYPES[0])[1];

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Website request: ${typeLabel}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nInterested in: ${typeLabel}\nDate: ${data.get("date") || "Not set"}\n\n${data.get("message") || ""}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus({ state: "ok", msg: `Your email app should open with your request. If it doesn't, email ${EMAIL} or call ${PHONE}.` });
      return;
    }

    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus({ state: "ok", msg: `Thank you. We received your request and will reply shortly. For same-day rides, please call ${PHONE}.` });
    } catch {
      setStatus({ state: "error", msg: `Your request did not send. Please call or text ${PHONE}.` });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80 sm:col-span-2">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
        I&apos;m interested in
        <select name="type" defaultValue={startType} className={field}>
          {TYPES.map(([v, l]) => (
            <option key={v} value={v}>
              {l}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
        Date of travel (if known)
        <input name="date" type="date" className={field} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80 sm:col-span-2">
        Details
        <textarea name="message" rows={5} placeholder="Pickup, destination, number of passengers, anything we should know" className={field} />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="sm:col-span-2">
        <button type="submit" disabled={status.state === "sending"} className="rounded-md bg-gold px-8 py-4 font-bold text-black transition hover:bg-gold-light disabled:opacity-60">
          {status.state === "sending" ? "Sending…" : "Send request"}
        </button>
      </div>
      {status.msg && (
        <p role="status" className={`sm:col-span-2 font-semibold ${status.state === "error" ? "text-red-400" : "text-gold"}`}>
          {status.msg}
        </p>
      )}
    </form>
  );
}
