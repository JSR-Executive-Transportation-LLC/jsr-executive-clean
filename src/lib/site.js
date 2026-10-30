// Business details used across the whole website.
// Change something here (phone, email, booking link) and every page updates.

export const SITE_URL = "https://jsrexecutive.com";
export const COMPANY = "JSR Executive Transportation";
export const PHONE = "475-224-4700";
export const PHONE_LINK = "tel:+14752244700";
export const SMS_LINK = "sms:+14752244700";
export const EMAIL = "reservations@jsrexecutive.com";
// Online booking runs on GroundNexus: customers get a price, save a card and send a request.
export const BOOKING_URL = "https://app.groundnexus.com/book";
export const QUOTE_PATH = "/get-a-quote";
// Client accounts (the rider app) also run on GroundNexus.
export const CLIENT_APP_URL = "https://app.groundnexus.com/my";
export const CLIENT_LOGIN_PATH = "/client-login";
export const CLIENT_LOGIN_ACTION = "https://app.groundnexus.com/api/customer/web-login";

export const SERVICES = [
  {
    slug: "airport-transportation",
    href: "/airports",
    name: "Airport Transfers",
    short:
      "Door-to-door rides to JFK, LaGuardia, Newark, Bradley, Westchester and private aviation terminals, with flight tracking on every arrival.",
  },
  {
    slug: "corporate-transportation",
    href: "/corporate-transportation",
    name: "Corporate Transportation",
    short:
      "Executive travel for meetings, client pickups and roadshows, with corporate accounts and monthly invoicing.",
  },
  {
    slug: "weddings-events",
    href: "/weddings-events",
    name: "Weddings & Events",
    short:
      "Getaway cars, wedding party SUVs and Sprinter guest shuttles, coordinated with your planner and timeline.",
  },
  {
    slug: "hourly-chauffeur",
    href: "/hourly-chauffeur",
    name: "Hourly Chauffeur",
    short:
      "A chauffeur at your disposal by the hour for meetings, errands, shopping and multi-stop days.",
  },
  {
    slug: "night-out",
    href: "/hourly-chauffeur#night-out",
    name: "Executive Night Out",
    short:
      "Dinners, concerts, games and casino nights in Connecticut or New York City. Your chauffeur waits while you enjoy the evening.",
  },
];

export const FLEET = [
  {
    key: "sedan",
    name: "Executive Sedan",
    model: "Cadillac CT5 or similar",
    image: "/images/fleet-sedan.jpg",
    passengers: 3,
    bags: 3,
    bestFor: "Solo business travelers and couples. Airport runs, client pickups and meetings.",
  },
  {
    key: "suv",
    name: "Luxury SUV",
    model: "Cadillac Escalade or similar",
    image: "/images/fleet-suv.jpg",
    passengers: 6,
    bags: 6,
    bestFor: "Families, small groups and travelers with extra luggage. Our most requested airport vehicle.",
  },
  {
    key: "sprinter",
    name: "Executive Sprinter",
    model: "Mercedes-Benz Sprinter or similar",
    image: "/images/fleet-sprinter.jpg",
    passengers: 14,
    bags: 14,
    bestFor: "Wedding parties, corporate groups, roadshows and event shuttles, with stand-up headroom.",
  },
];

// Drive times are typical ranges in normal traffic. Edit them as you learn your real times.
export const AIRPORTS = [
  {
    slug: "jfk",
    code: "JFK",
    name: "John F. Kennedy International Airport",
    short: "JFK",
    location: "Queens, New York",
    intro:
      "JFK is where most international flights from Connecticut depart, and the drive crosses some of the busiest roads in the region. We plan departure pickups around traffic on I-95, the Hutchinson and the Van Wyck, and meet arriving passengers inside the terminal.",
    times: [
      ["Greenwich", "1 hr – 1 hr 30 min"],
      ["Stamford", "1 hr 10 min – 1 hr 40 min"],
      ["Norwalk / Westport", "1 hr 20 min – 1 hr 50 min"],
      ["New Haven", "1 hr 50 min – 2 hr 30 min"],
      ["Hartford", "2 hr 30 min – 3 hr"],
    ],
  },
  {
    slug: "laguardia",
    code: "LGA",
    name: "LaGuardia Airport",
    short: "LaGuardia",
    location: "Queens, New York",
    intro:
      "LaGuardia is the closest major New York airport to Fairfield County and a common choice for domestic business travel. Its terminals are spread out, so we confirm your airline and terminal before every pickup.",
    times: [
      ["Greenwich", "40 min – 1 hr 10 min"],
      ["Stamford", "50 min – 1 hr 20 min"],
      ["Norwalk / Westport", "1 hr – 1 hr 30 min"],
      ["New Haven", "1 hr 30 min – 2 hr"],
      ["Hartford", "2 hr 15 min – 2 hr 45 min"],
    ],
  },
  {
    slug: "newark",
    code: "EWR",
    name: "Newark Liberty International Airport",
    short: "Newark",
    location: "Newark, New Jersey",
    intro:
      "Newark is often the better choice for United flights and many international routes. The trip from Connecticut crosses the George Washington Bridge, so we build extra time into every departure.",
    times: [
      ["Greenwich", "1 hr 10 min – 1 hr 40 min"],
      ["Stamford", "1 hr 20 min – 1 hr 50 min"],
      ["Norwalk / Westport", "1 hr 30 min – 2 hr"],
      ["New Haven", "2 hr – 2 hr 45 min"],
      ["Hartford", "2 hr 45 min – 3 hr 15 min"],
    ],
  },
  {
    slug: "bradley",
    code: "BDL",
    name: "Bradley International Airport",
    short: "Bradley",
    location: "Windsor Locks, Connecticut",
    intro:
      "Bradley is Connecticut's main airport and the easiest way to fly from central and northern Connecticut. Shorter lines and an easier drive make it a good alternative to the New York airports.",
    times: [
      ["Hartford", "20 – 30 min"],
      ["New Britain", "30 – 40 min"],
      ["New Haven", "50 min – 1 hr 10 min"],
      ["Stamford", "1 hr 30 min – 2 hr"],
      ["Greenwich", "1 hr 40 min – 2 hr 10 min"],
    ],
  },
  {
    slug: "westchester",
    code: "HPN",
    name: "Westchester County Airport",
    short: "Westchester",
    location: "White Plains, New York",
    intro:
      "Westchester County Airport is minutes from Greenwich and Stamford and serves both airline and private flights. We pick up at the main terminal and at the private aviation terminals on the airfield.",
    times: [
      ["Greenwich", "15 – 25 min"],
      ["Stamford", "20 – 30 min"],
      ["Norwalk / Westport", "30 – 45 min"],
      ["New Haven", "1 hr – 1 hr 15 min"],
      ["Hartford", "1 hr 45 min – 2 hr 15 min"],
    ],
  },
];

export const OTHER_AIRPORTS = [
  "Tweed-New Haven Airport (HVN)",
  "Boston Logan International (BOS)",
  "T.F. Green, Providence (PVD)",
  "Private aviation terminals (FBOs)",
];

export const POLICIES = [
  ["/terms", "Terms & Conditions"],
  ["/cancellation-policy", "Cancellation Policy"],
  ["/privacy-policy", "Privacy Policy"],
  ["/payment-policy", "Payment Policy"],
  ["/wait-time-policy", "Wait Time Policy"],
  ["/no-show-policy", "No-Show Policy"],
  ["/damage-cleaning-policy", "Damage / Cleaning Policy"],
  ["/airport-delay-policy", "Airport Delay Policy"],
];
