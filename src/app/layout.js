import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Techversity.ai — Your Global Path to Doctoral & Executive Credentials",
  description:
    "Earn an internationally accredited Doctorate, DBA, MBA or Executive Certification — guided end-to-end by Techversity's global education advisors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}