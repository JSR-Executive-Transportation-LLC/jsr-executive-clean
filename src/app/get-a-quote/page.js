"use client";

import { useMemo, useState } from "react";
import { hourlyRates, routeRates } from "./rates";

const vehicleOptions = [
  { label: "Executive Sedan", value: "sedan" },
  { label: "Luxury SUV", value: "suv" },
  { label: "Executive Sprinter Van", value: "sprinter" },
  { label: "Stretch Limousine", value: "limousine" },
  { label: "Party Bus", value: "party-bus" },
  { label: "Not Sure / Best Available", value: "best-available" },
];

function money(value) {
  return `$${Number(value).toLocaleString()}`;
}

function normalizeVehicle(route) {
  return (route.vehicle || route.vehicleType || "")
    .toString()
    .trim()
    .toLowerCase();
}

function normalizeText(value) {
  return value.toString().trim();
}

export default function QuotePage() {
  const [serviceType, setServiceType] = useState("point-to-point");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [hours, setHours] = useState("");
  const [estimate, setEstimate] = useState(
    "Select trip details to calculate estimate."
  );
  const isCustomVehicle = vehicle && vehicle !== "sedan" && vehicle !== "suv";
  const hourlyMinimum = isCustomVehicle ? 5 : 2;

  const { locations, rateMap } = useMemo(() => {
    const locationSet = new Set();
    const map = new Map();

    routeRates.forEach((route) => {
      const origin = normalizeText(route.origin || "");
      const destination = normalizeText(route.destination || "");
      const routeVehicle = normalizeVehicle(route);
      const rate = Number(route.rate);

      if (!origin || !destination || !routeVehicle || !rate) return;

      locationSet.add(origin);
      locationSet.add(destination);

      const forwardKey = `${origin}|||${destination}|||${routeVehicle}`;
      const reverseKey = `${destination}|||${origin}|||${routeVehicle}`;

      map.set(forwardKey, rate);
      map.set(reverseKey, rate);
    });

    return {
      locations: Array.from(locationSet).sort((a, b) => a.localeCompare(b)),
      rateMap: map,
    };
  }, []);

  const calculateEstimate = () => {
    if (!vehicle) {
      setEstimate("Please select a vehicle type.");
      return;
    }

    if (isCustomVehicle) {
      setEstimate(
        serviceType === "hourly"
          ? "Custom hourly quote required for this vehicle (5-hour minimum). Please submit your request."
          : "Custom quote required for this vehicle. Please submit your request."
      );
      return;
    }

    if (serviceType === "hourly") {
      const requestedHours = Math.max(
        Number(hours) || hourlyRates.minimumHours,
        hourlyRates.minimumHours
      );
      const hourlyRate = vehicle === "sedan" ? hourlyRates.sedan : hourlyRates.suv;
      const vehicleLabel = vehicle === "sedan" ? "Executive Sedan" : "Luxury SUV";

      setEstimate(
        `Estimated ${vehicleLabel} Hourly Service: ${money(
          requestedHours * hourlyRate
        )} (${requestedHours} hours at ${money(hourlyRate)}/hour)`
      );
      return;
    }

    if (!pickup || !dropoff) {
      setEstimate("Please select pickup and drop-off locations.");
      return;
    }

    const routeKey = `${pickup}|||${dropoff}|||${vehicle}`;
    const routeRate = rateMap.get(routeKey);

    if (routeRate) {
      const vehicleLabel = vehicle === "sedan" ? "Executive Sedan" : "Luxury SUV";
      setEstimate(`Estimated ${vehicleLabel} Transfer: ${money(routeRate)}`);
      return;
    }

    setEstimate("A point-to-point rate is not available for this route. Please submit a custom quote request.");
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

Service Type: ${serviceType === "hourly" ? "Hourly" : "Point-to-Point"}
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
              className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37] md:col-span-2"
              value={serviceType}
              onChange={(event) => {
                setServiceType(event.target.value);
                setEstimate("Select trip details to calculate estimate.");
              }}
            >
              <option value="point-to-point">Point-to-Point Transfer</option>
              <option value="hourly">Hourly Service</option>
            </select>

            {serviceType === "point-to-point" && <>
              <select
                className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                value={pickup}
                onChange={(event) => setPickup(event.target.value)}
              >
                <option value="">Select Pickup Location</option>
                {locations.map((location) => (
                  <option key={`pickup-${location}`} value={location}>{location}</option>
                ))}
              </select>

              <select
                className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                value={dropoff}
                onChange={(event) => setDropoff(event.target.value)}
              >
                <option value="">Select Drop-Off Location</option>
                {locations.map((location) => (
                  <option key={`dropoff-${location}`} value={location}>{location}</option>
                ))}
              </select>
            </>}

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

            {serviceType === "hourly" && (
              <input
                type="number"
                min={hourlyMinimum}
                step="1"
                placeholder={`Number of hours (${hourlyMinimum} minimum)`}
                className="rounded-xl border border-[#D4AF37]/30 bg-black px-4 py-4 text-white outline-none placeholder:text-white/50 focus:border-[#D4AF37]"
                value={hours}
                onChange={(event) => setHours(event.target.value)}
              />
            )}
          </div>

          {serviceType === "hourly" && (
            <p className="mt-4 text-center text-sm text-white/70">
              {vehicle === "sedan"
                ? "$89 per hour - 2-hour minimum"
                : vehicle === "suv"
                  ? "$109 per hour - 2-hour minimum"
                  : isCustomVehicle
                    ? "This vehicle requires a custom rate and has a 5-hour minimum."
                    : "Sedan and SUV: 2-hour minimum. All other vehicles: 5-hour minimum."}
            </p>
          )}

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
        </section>
      </div>
    </main>
  );
}
