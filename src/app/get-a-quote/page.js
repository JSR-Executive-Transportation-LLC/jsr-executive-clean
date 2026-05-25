"use client";

export default function QuotePage() {
  const locations = [
    "Andover, CT",
    "Ansonia, CT",
    "Ashford, CT",
    "Avon, CT",
    "Barkhamsted, CT",
    "Beacon Falls, CT",
    "Berlin, CT",
    "Bethany, CT",
    "Bethel, CT",
    "Bethlehem, CT",
    "Bloomfield, CT",
    "Bolton, CT",
    "Bozrah, CT",
    "Branford, CT",
    "Bridgeport, CT",
    "Bridgewater, CT",
    "Bristol, CT",
    "Brookfield, CT",
    "Brooklyn, CT",
    "Burlington, CT",
    "Canaan, CT",
    "Canterbury, CT",
    "Canton, CT",
    "Chaplin, CT",
    "Cheshire, CT",
    "Chester, CT",
    "Clinton, CT",
    "Colchester, CT",
    "Colebrook, CT",
    "Columbia, CT",
    "Cornwall, CT",
    "Coventry, CT",
    "Cromwell, CT",
    "Danbury, CT",
    "Darien, CT",
    "Deep River, CT",
    "Derby, CT",
    "Durham, CT",
    "East Granby, CT",
    "East Haddam, CT",
    "East Hampton, CT",
    "East Hartford, CT",
    "East Haven, CT",
    "East Lyme, CT",
    "East Windsor, CT",
    "Eastford, CT",
    "Easton, CT",
    "Ellington, CT",
    "Enfield, CT",
    "Essex, CT",
    "Fairfield, CT",
    "Farmington, CT",
    "Franklin, CT",
    "Glastonbury, CT",
    "Goshen, CT",
    "Granby, CT",
    "Greenwich, CT",
    "Griswold, CT",
    "Groton, CT",
    "Guilford, CT",
    "Haddam, CT",
    "Hamden, CT",
    "Hampton, CT",
    "Hartford, CT",
    "Hartland, CT",
    "Harwinton, CT",
    "Hebron, CT",
    "Kent, CT",
    "Killingly, CT",
    "Killingworth, CT",
    "Lebanon, CT",
    "Ledyard, CT",
    "Lisbon, CT",
    "Litchfield, CT",
    "Lyme, CT",
    "Madison, CT",
    "Manchester, CT",
    "Mansfield, CT",
    "Marlborough, CT",
    "Meriden, CT",
    "Middlebury, CT",
    "Middlefield, CT",
    "Middletown, CT",
    "Milford, CT",
    "Monroe, CT",
    "Montville, CT",
    "Morris, CT",
    "Naugatuck, CT",
    "New Britain, CT",
    "New Canaan, CT",
    "New Fairfield, CT",
    "New Hartford, CT",
    "New Haven, CT",
    "New London, CT",
    "New Milford, CT",
    "Newington, CT",
    "Newtown, CT",
    "Norfolk, CT",
    "North Branford, CT",
    "North Canaan, CT",
    "North Haven, CT",
    "Norwalk, CT",
    "Norwich, CT",
    "Old Lyme, CT",
    "Old Saybrook, CT",
    "Orange, CT",
    "Oxford, CT",
    "Plainfield, CT",
    "Plainville, CT",
    "Plymouth, CT",
    "Pomfret, CT",
    "Portland, CT",
    "Preston, CT",
    "Prospect, CT",
    "Putnam, CT",
    "Redding, CT",
    "Ridgefield, CT",
    "Rocky Hill, CT",
    "Roxbury, CT",
    "Salem, CT",
    "Salisbury, CT",
    "Scotland, CT",
    "Seymour, CT",
    "Sharon, CT",
    "Shelton, CT",
    "Sherman, CT",
    "Simsbury, CT",
    "Somers, CT",
    "South Windsor, CT",
    "Southbury, CT",
    "Southington, CT",
    "Sprague, CT",
    "Stafford, CT",
    "Stamford, CT",
    "Sterling, CT",
    "Stonington, CT",
    "Stratford, CT",
    "Suffield, CT",
    "Thomaston, CT",
    "Thompson, CT",
    "Tolland, CT",
    "Torrington, CT",
    "Trumbull, CT",
    "Union, CT",
    "Vernon, CT",
    "Voluntown, CT",
    "Wallingford, CT",
    "Warren, CT",
    "Washington, CT",
    "Waterbury, CT",
    "Waterford, CT",
    "Watertown, CT",
    "West Hartford, CT",
    "West Haven, CT",
    "Westbrook, CT",
    "Weston, CT",
    "Westport, CT",
    "Wethersfield, CT",
    "Willington, CT",
    "Wilton, CT",
    "Winchester, CT",
    "Windham, CT",
    "Windsor, CT",
    "Windsor Locks, CT",
    "Wolcott, CT",
    "Woodbridge, CT",
    "Woodbury, CT",
    "Woodstock, CT",

    "Yale University",
    "Union Station New Haven",
    "Bridgeport Train Station",
    "Stamford Transportation Center",
    "Hartford Union Station",

    "Bradley International Airport",
    "Tweed New Haven Airport",
    "LaGuardia Airport",
    "John F. Kennedy International Airport",
    "Newark Liberty International Airport",
    "Westchester County Airport",
    "Teterboro Airport",
    "Boston Logan International Airport",

    "Other / Not Listed",
  ];

  const occasionTypes = [
    "Airport Transfer",
    "Corporate Travel",
    "Wedding",
    "Prom / Formal Event",
    "Night Out",
    "Hourly Chauffeur Service",
    "Special Event",
    "Medical Appointment",
    "Cruise Transfer",
    "Funeral Service",
    "Other",
  ];

  const vehicleTypes = [
    "Executive Sedan",
    "Luxury SUV",
    "Executive Sprinter Van",
    "Stretch Limousine",
    "Party Bus",
    "Not Sure / Best Available",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative bg-black px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] text-[#D4AF37]">
              EXECUTIVE TRANSPORTATION
            </p>

            <h1 className="text-5xl font-bold text-[#D4AF37]">
              Request a Quote
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
              Select your pickup location, drop-off location, vehicle type, and
              service type to receive an estimated quote.
            </p>
          </div>

          <form className="rounded-2xl border border-[#D4AF37]/60 bg-black/90 p-8 shadow-2xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input type="text" placeholder="Full Name" className="inputStyle" />
              <input type="text" placeholder="Company / Account Name Optional" className="inputStyle" />
              <input type="tel" placeholder="Phone Number" className="inputStyle" />
              <input type="email" placeholder="Email Address" className="inputStyle" />

              <select className="inputStyle">
                <option value="">Select Pickup Location</option>
                {locations.map((location) => (
                  <option key={`pickup-${location}`}>{location}</option>
                ))}
              </select>

              <select className="inputStyle">
                <option value="">Select Drop-Off Location</option>
                {locations.map((location) => (
                  <option key={`dropoff-${location}`}>{location}</option>
                ))}
              </select>

              <input type="date" className="inputStyle" />

              <div className="grid grid-cols-3 gap-3">
                <select className="inputStyle">
                  <option>Hour</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>

                <select className="inputStyle">
                  <option>Min</option>
                  <option>00</option>
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                </select>

                <select className="inputStyle">
                  <option>AM/PM</option>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>

              <input type="number" placeholder="Passenger Count" className="inputStyle" />

              <select className="inputStyle">
                <option value="">Occasion Type</option>
                {occasionTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>

              <select className="inputStyle">
                <option value="">Vehicle Preference</option>
                {vehicleTypes.map((vehicle) => (
                  <option key={vehicle}>{vehicle}</option>
                ))}
              </select>

              <input type="number" placeholder="Hourly Service Hours" className="inputStyle" />
            </div>

            <textarea
              className="mt-5 min-h-[180px] w-full rounded-xl border border-[#D4AF37]/50 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#D4AF37]"
              placeholder="Please provide flight details, luggage count, passenger details, special requests, additional stops, child seats, itinerary notes, or any other service requirements."
            />

            <div className="mt-6 rounded-xl border border-[#D4AF37]/50 bg-black p-6 text-center">
              <p className="text-lg font-semibold text-[#D4AF37]">
                Quote Estimate
              </p>
              <p className="mt-2 text-white/80">
                Select trip details to calculate estimate.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-[#D4AF37]/30 bg-black p-5 text-xs leading-6 text-white/70">
              <p>
                <span className="font-semibold text-[#D4AF37]">
                  Pricing Notice:
                </span>{" "}
                Sedan hourly service is billed at $70 per hour with a 2-hour
                minimum. SUV hourly service is billed at $80 per hour with a
                2-hour minimum. Sprinter services require a custom quote.
              </p>

              <p className="mt-4">
                Rates do not include applicable taxes, tolls, parking, gratuity,
                or STC charges where applicable. Final pricing may vary based on
                itinerary, wait time, additional stops, vehicle availability,
                and special requests.
              </p>

              <p className="mt-4">
                Domestic arrivals include a complimentary 30-minute grace
                period. International arrivals include a complimentary
                60-minute grace period.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <button
                type="button"
                className="rounded-xl border border-[#D4AF37] px-6 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Calculate Estimate
              </button>

              <button
                type="submit"
                className="rounded-xl bg-[#D4AF37] px-6 py-4 text-lg font-semibold text-black transition hover:opacity-90"
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

            <p className="mt-3 text-center text-xs text-white/50">
              Thank you for choosing JSR Executive Transportation. A
              representative will contact you shortly to confirm pricing and
              availability.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}