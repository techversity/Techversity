import "./globals.css";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import StickyMobileBar from "@/components/layout/StickyMobileBar";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "Techversity.ai — Your Global Path to Doctoral & Executive Credentials",
  description:
    "Earn an internationally accredited Doctorate, DBA, MBA or Executive Certification — guided end-to-end by Techversity's global education advisors.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Techversity.ai",
  legalName: "Techverso Pvt Ltd",
  url: "https://techversity.ai",
  logo: "https://techversity.ai/images/Logo/logo.avif",
  description:
    "Techversity.ai connects accomplished professionals with internationally accredited universities for doctoral, executive, and certification credentials.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/techversity-ai",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <StickyMobileBar />
        </SmoothScroll>
      </body>
    </html>
  );
}