import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import StickyMobileBar from "@/components/layout/StickyMobileBar";

export const metadata = {
  metadataBase: new URL("https://techversity.ai"),
  title: "Techversity.ai — Your Global Path to Doctoral & Executive Credentials",
  description:
    "Earn an internationally accredited Doctorate, DBA, MBA or Executive Certification — guided end-to-end by Techversity's global education advisors.",
  verification: {
    google: "ddyxUusngpVL1-pBESeH4k5iMJUhk2Fjb2dnhrSINuw",
  },
  icons: {
    icon: [{ url: "/images/Logo/logo.avif", type: "image/avif" }],
  },
  openGraph: {
    title: "Techversity.ai — Your Global Path to Doctoral & Executive Credentials",
    description:
      "Earn an internationally accredited Doctorate, DBA, MBA or Executive Certification — guided end-to-end by Techversity's global education advisors.",
    url: "https://techversity.ai",
    siteName: "Techversity.ai",
    images: [
      {
        url: "/images/OG/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Techversity.ai — Recognition for a Life of Impact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techversity.ai — Your Global Path to Doctoral & Executive Credentials",
    description:
      "Earn an internationally accredited Doctorate, DBA, MBA or Executive Certification — guided end-to-end by Techversity's global education advisors.",
    images: ["/images/OG/og-default.jpg"],
  },
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
    <html lang="en">
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