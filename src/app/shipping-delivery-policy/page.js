import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Shipping & Delivery Policy | Techversity.ai",
  description: "How Techversity.ai delivers digital and physical items.",
};

const sections = [
  {
    id: "digital-delivery",
    title: "Digital Delivery",
    blocks: [
      { type: "list", items: [
        "Booking confirmation — immediately after payment",
        "Consultation links / session access — within 24 hours",
        "Application acknowledgements — within 2–3 business days",
        "Advisory reports and documents — as agreed in your package",
        "Documents forwarded from Partner Institutions — within 3–7 business days of receipt",
      ]},
      { type: "paragraph", text: "Keep your registered email up to date and check your spam folder if something's late." },
    ],
  },
  {
    id: "physical-delivery",
    title: "Physical Delivery",
    blocks: [
      { type: "paragraph", text: "Some Partner Institutions dispatch physical items — degree parchments, honorary award certificates, or welcome packs. These ship directly from the institution, not from us." },
      { type: "table", headers: ["Region", "Estimated Delivery"], rows: [
        ["India", "5–10 business days"],
        ["South & Southeast Asia", "10–21 business days"],
        ["Middle East, Africa, Europe, Americas", "14–28 business days"],
      ]},
      { type: "paragraph", text: "Customs duties and import taxes are your responsibility." },
    ],
  },
  {
    id: "if-not-arrived",
    title: "If Something Doesn't Arrive",
    blocks: [
      { type: "h3", text: "Digital items" },
      { type: "paragraph", text: "Check spam, then email support@techversity.ai with your transaction reference." },
      { type: "h3", text: "Physical items" },
      { type: "paragraph", text: "Notify us within 14 days of the expected delivery date. We'll follow up with the institution and courier. Replacements are subject to the institution's own policy." },
    ],
  },
];

export default function ShippingDeliveryPolicyPage() {
  return (
    <LegalPageLayout
      title="How we deliver — digitally and physically."
      intro="Most of what Techversity.ai delivers arrives digitally. Here's what to expect."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Email", value: "support@techversity.ai", href: "mailto:support@techversity.ai" },
      ]}
    />
  );
}