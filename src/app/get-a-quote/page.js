"use client";

import { useMemo, useState } from "react";
import { hourlyRates, routeRates } from "./rates";

const vehicleOptions = [
  { label: "Executive Sedan", value: "sedan" },
  { label: "Luxury SUV", value: "suv" },
  { label: "Executive Sprinter Van", value: "custom" },
  { label: "Stretch Limousine", value: "custom" },
  { label: "Party Bus", value: "custom" },
  { label: "Not Sure / Best Available", value: "custom" },
];

function money(value) {
  return `$${Number(value).toLocaleString()}`;
}

export default function QuotePage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [hours, setHours] = useState("");
  const [estimate, setEstimate] = useState(
    "Select trip details to calculate estimate."
  );

  const { locations, rateMap } = useMemo(() => {
    const locationSet = new Set();
    const map = new Map();

    routeRates.forEach((route) => {
      const { origin, destination, vehicle, rate } = route;

      locationSet.add(origin);
      locationSet.add(destination);

      const forwardKey = `${origin}|||${destination}|||${vehicle}`;
      const reverseKey = `${destination}|||${origin}|||${vehicle}`;

      map.set(forwardKey, rate);
      map.set(reverseKey, rate);
    });

    return {
      locations: Array.from(locationSet).sort((a, b) => a.localeCompare(b)),
      rateMap: map,
    };
  }, []);

  const calculateEstimate = () => {
    if (!pickup || !dropoff || !vehicle) {
      setEstimate("Please select pickup, drop-off, and vehicle type.");
      return;
    }

    if (vehicle === "custom") {
      setEstimate(
        "Custom quote required for this vehicle. Please submit your request."
      );
      return;
    }

    const routeKey = `${pickup}|||${dropoff}|||${vehicle}`;
    const routeRate = rateMap.get(routeKey);

    if (routeRate) {
      const vehicleLabel = vehicle === "sedan" ? "Executive Sedan" : "Luxury SUV";
      setEstimate(`Estimated ${vehicleLabel} Transfer: ${money(routeRate)}`);
      return;
    }

    const requestedHours = Math.max(
      Number(hours) || hourlyRates.minimumHours,
      hourlyRates.minimumHours
    );

    if (vehicle === "sedan") {
      setEstimate(
        `Estimated Executive Sedan Hourly Service: ${money(
          requestedHours * hourlyRates.sedan
        )}`
      );
      return;
    }

    if (vehicle === "suv") {
      setEstimate(
        `Estimated Luxury SUV Hourly Service: ${money(
          requestedHours * hourlyRates.suv
        )}`
      );
    }
  };

  const handleRequestQuote = () => {
    const selectedVehicle =
      vehicleOptions.find((option) => option.value === vehicle)?.label ||
      "Not selected";

    const subject = encodeURIComponent(
      "JSR Executive Transportation Quote Request"
    );

    const body = encodeURIComponent(
      `Hello JSR Executive Transportation,

I would like to request an executive transportation quote.

Pickup Location: ${pickup || "Not selected"}
Drop-Off Location: ${dropoff || "Not selected"}
Vehicle Type: ${selectedVehicle}
Hourly Service Hours: ${hours || "Not provided"}
Estimate Shown: ${estimate}

Please contact me to confirm final pricing and availability.`
    );

    window.location.href = `mailto:accounting@jsrexecutive.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-[#D4AF37]">
            Request a Quote
          </h1>

          <p className="mt-4 text-white/70">
            Executive Transportation Pricing & Reservations
          </p>
        </div>

        <section className="rounded-2xl border border-[#D4AF37]/40 bg-black/80 p-8 shadow-2xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <select
              className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
              value={pickup}
              onChange={(event) => setPickup(event.target.value)}
            >
              <option value="">Select Pickup Location</option>

              {locations.map((location) => (
                <option key={`pickup-${location}`} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
              value={dropoff}
              onChange={(event) => setDropoff(event.target.value)}
            >
              <option value="">Select Drop-Off Location</option>

              {locations.map((location) => (
                <option key={`dropoff-${location}`} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
              value={vehicle}
              onChange={(event) => setVehicle(event.target.value)}
            >
              <option value="">Select Vehicle</option>

              {vehicleOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <input
              type="number"
              min="2"
              placeholder="Hourly Service Hours"
              className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none placeholder:text-white/50 focus:border-[#D4AF37]"
              value={hours}
              onChange={(event) => setHours(event.target.value)}
            />
          </div>

          <div className="mt-8 rounded-xl border border-[#D4AF37]/30 bg-black p-6 text-center">
            <p className="text-2xl font-semibold text-[#D4AF37]">
              {estimate}
            </p>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-white/60">
            Estimates do not include applicable tolls, parking, wait time,
            gratuity, STC charges, additional stops, or special requests. Final
            pricing is subject to confirmation by JSR Executive Transportation.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <button
              type="button"
              onClick={calculateEstimate}
              className="rounded-xl border border-[#D4AF37] px-6 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Calculate Estimate
            </button>

            <button
              type="button"
              onClick={handleRequestQuote}
              className="rounded-xl bg-[#D4AF37] px-6 py-4 text-center text-lg font-semibold text-black transition hover:opacity-90"
            >
              Request Executive Quote
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-white/70">
            Need immediate assistance?{" "}
            <a
              href="mailto:accounting@jsrexecutive.com?subject=JSR Executive Transportation Quote Request"
              className="text-[#D4AF37] hover:underline"
            >
              accounting@jsrexecutive.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}