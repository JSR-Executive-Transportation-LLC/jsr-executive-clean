import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { JsonLd } from "@/components/ui";
import { COMPANY, EMAIL, PHONE, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxury Car Service in Connecticut | JSR Executive Transportation",
    template: "%s | JSR Executive Transportation",
  },
  description:
    "Licensed, insured luxury car service in Connecticut. Airport transfers to JFK, LaGuardia, Newark, Bradley and Westchester, corporate travel, weddings and hourly chauffeur service, 24/7.",
  openGraph: {
    type: "website",
    siteName: COMPANY,
    images: [{ url: "/images/1hero-clean.png", width: 1535, height: 1024, alt: COMPANY }],
  },
  icons: {
    icon: "/images/jsr-mark.png",
    shortcut: "/images/jsr-mark.png",
    apple: "/images/jsr-mark.png",
  },
};

export const viewport = {
  themeColor: "#070708",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: COMPANY,
  url: SITE_URL,
  telephone: `+1-${PHONE}`,
  email: EMAIL,
  image: `${SITE_URL}/images/1hero-clean.png`,
  logo: `${SITE_URL}/images/jsr-logo-full.png`,
  description: "Licensed and insured luxury chauffeured transportation in Connecticut: airport transfers, corporate travel, weddings, events and hourly service.",
  areaServed: [
    { "@type": "State", name: "Connecticut" },
    { "@type": "City", name: "New York" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <JsonLd data={businessLd} />
      </head>
      <body className="min-h-screen bg-ink text-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
