"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function GetAQuotePage() {
  const [rates, setRates] = useState([]);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [occasion, setOccasion] = useState("");
  const [hours, setHours] = useState("");
  const [estimate, setEstimate] = useState("");

  useEffect(() => {
    fetch("/data/rates.json")
      .then((res) => res.json())
      .then((data) => setRates(data))
      .catch((err) => console.error("Could not load rates:", err));
  }, []);

  const inputClass =
    "w-full rounded-xl border border-[#D4AF37]/25 bg-black/70 p-5 text-white outline-none transition duration-300 placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/60";

  const selectClass =
    "w-full rounded-xl border border-[#D4AF37]/25 bg-black/70 p-5 text-white outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/60";

  const cities = useMemo(() => {
    return [
      ...new Set(rates.map((r) => r["Origin City/Town"]).filter(Boolean)),
    ].sort();
  }, [rates]);

  const airports = useMemo(() => {
    return [
      ...new Set(rates.map((r) => r["Destination"]).filter(Boolean)),
    ].sort();
  }, [rates]);

  const pickupOptions = useMemo(() => {
    return [...new Set([...cities, ...airports])].sort();
  }, [cities, airports]);

  const destinationOptions = useMemo(() => {
    return [...new Set([...airports, ...cities])].sort();
  }, [cities, airports]);

  function calculateEstimate() {
    if (!occasion || !vehicle) {
      setEstimate("Please select occasion type and vehicle type.");
      return;
    }

    if (vehicle === "Sprinter") {
      setEstimate("Custom Quote Required");
      return;
    }

    if (occasion === "Hourly") {
      const selectedHours = Number(hours);
      if (!selectedHours || selectedHours < 1) {
        setEstimate("Please enter the number of hourly service hours.");
        return;
      }

      const billableHours = Math.max(selectedHours, 2);

      if (vehicle === "Sedan") {
        setEstimate(`Estimated Hourly Rate: $${billableHours * 70}`);
        return;
      }

      if (vehicle === "SUV") {
        setEstimate(`Estimated Hourly Rate: $${billableHours * 80}`);
        return;
      }
    }

    const directMatch = rates.find(
      (r) =>
        r["Origin City/Town"] === pickup &&
        r["Destination"] === destination &&
        r["Vehicle Type"] === vehicle
    );

    const reverseMatch = rates.find(
      (r) =>
        r["Origin City/Town"] === destination &&
        r["Destination"] === pickup &&
        r["Vehicle Type"] === vehicle
    );

    const match = directMatch || reverseMatch;

    if (match) {
      setEstimate(`Estimated Rate: $${match["Rate"]}`);
    } else {
      setEstimate("Custom Quote Required");
    }
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.86)), url('/images/book-bg.png')",
      }}
    >
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-black/80 px-6 py-5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="JSR Executive Transportation"
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex gap-5 text-base md:gap-8 md:text-lg">
            <Link href="/" className="hover:text-[#D4AF37] transition">
              Home
            </Link>

            <Link href="/services" className="hover:text-[#D4AF37] transition">
              Services
            </Link>

            <Link href="/fleet" className="hover:text-[#D4AF37] transition">
              Fleet
            </Link>

            <Link href="/contact" className="hover:text-[#D4AF37] transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
          Executive Transportation
        </p>

        <h1 className="mb-6 text-5xl font-bold text-[#D4AF37] md:text-7xl">
          Request a Quote
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
          Select your pickup location, drop-off location, vehicle type, and
          service type to receive an estimated quote.
        </p>
      </section>

      {/* FORM */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#D4AF37]/60 bg-black/75 p-8 shadow-2xl backdrop-blur-md md:p-14">
          <div className="grid gap-6 md:grid-cols-2">
            <input type="text" placeholder="Full Name" className={inputClass} />

            <input
              type="text"
              placeholder="Company / Account Name Optional"
              className={inputClass}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={inputClass}
            />

            <select
              className={selectClass}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            >
              <option value="">Select Pickup Location</option>
              {pickupOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              className={selectClass}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Drop-Off Location</option>
              {destinationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <div className="relative">
              <input
                type="date"
                className={`${inputClass} cursor-pointer`}
                onClick={(e) =>
                  e.currentTarget.showPicker && e.currentTarget.showPicker()
                }
                onFocus={(e) =>
                  e.currentTarget.showPicker && e.currentTarget.showPicker()
                }
              />

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                📅
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <select className={selectClass}>
                <option value="">Hour</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select className={selectClass}>
                <option value="">Min</option>
                <option>00</option>
                <option>15</option>
                <option>30</option>
                <option>45</option>
              </select>

              <select className={selectClass}>
                <option value="">AM/PM</option>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>

            <input
              type="number"
              placeholder="Passenger Count"
              className={inputClass}
            />

            <select
              className={selectClass}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Occasion Type</option>
              <option>Airport Transfer</option>
              <option>Hourly</option>
              <option>Point to Point</option>
              <option>Corporate Travel</option>
              <option>Wedding</option>
              <option>Prom</option>
              <option>Night Out</option>
            </select>

            <select
              className={selectClass}
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              <option value="">Vehicle Preference</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Sprinter</option>
            </select>

            <input
              type="number"
              placeholder="Hourly Service Hours"
              className={inputClass}
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />

            <textarea
              rows="6"
              placeholder="Additional details, luggage information, airport details, special requests, additional stops, etc."
              className={`${inputClass} md:col-span-2`}
            />
          </div>

          {/* ESTIMATE */}
          <div className="mt-8 rounded-2xl border border-[#D4AF37]/40 bg-black/60 p-6 text-center">
            <p className="mb-2 text-xl font-bold text-[#D4AF37]">
              Quote Estimate
            </p>

            <p className="text-2xl text-white">
              {estimate || "Select trip details to calculate estimate."}
            </p>
          </div>

          {/* PRICING NOTICE */}
          <div className="mt-8 rounded-xl border border-[#D4AF37]/20 bg-black/40 p-4 text-sm leading-relaxed text-gray-300">
            <span className="font-semibold text-[#D4AF37]">
              Pricing Notice:
            </span>{" "}
            Sedan hourly service is billed at $70 per hour with a 2-hour
            minimum. SUV hourly service is billed at $80 per hour with a 2-hour
            minimum. Sprinter services require a custom quote.
            <br />
            <br />
            Rates do not include applicable taxes, tolls, parking, 20%
            gratuity, or STC charges required by government agencies where
            applicable. Final pricing may vary based on itinerary, wait time,
            additional stops, vehicle availability, and special requests.
            <br />
            <br />
            All domestic arrivals include a complimentary 30-minute grace period
            upon flight arrival. International arrivals include a complimentary
            60-minute grace period upon arrival. Additional wait time beyond the
            complimentary grace period will be billed at a rate of $15 per
            15-minute interval in quarterly increments.
          </div>

          {/* BUTTONS */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={calculateEstimate}
              className="w-full rounded-xl border border-[#D4AF37] py-5 text-xl font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Calculate Estimate
            </button>

            <button
              type="button"
              className="w-full rounded-xl bg-[#D4AF37] py-5 text-xl font-bold text-black transition hover:opacity-90 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
            >
              Submit Quote Request
            </button>
          </div>

          <p className="mt-5 text-center text-gray-300">
            A JSR representative will contact you shortly with final pricing and
            availability.
          </p>
        </div>
      </section>
    </main>
  );
}