import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Disclaimer | Techversity.ai",
  description: "Important information to know before enrolling through Techversity.ai.",
};

const sections = [
  {
    id: "we-facilitate",
    title: "We Facilitate. We Don't Award.",
    blocks: [
      { type: "paragraph", text: "Techversity.ai guides, advises, and connects learners with opportunities — but we do not award degrees, certifications, or honorary recognitions. Every qualification is issued by an independent Partner Institution under their own authority." },
    ],
  },
  {
    id: "not-guaranteed",
    title: "Admissions Are Not Guaranteed",
    blocks: [
      { type: "paragraph", text: "Engaging our services is an investment in expert guidance — not a guaranteed result. Admissions, scholarship decisions, and honorary conferments are entirely in the hands of Partner Institutions." },
    ],
  },
  {
    id: "honorary",
    title: "About Honorary Doctorates and Recognition Awards",
    blocks: [
      { type: "paragraph", text: "Honorary qualifications are not earned academic degrees. They are conferred based on professional achievement — not taught study or research." },
      { type: "list", items: [
        "Fees to Techversity.ai cover facilitation — not the award itself",
        "Receipt of our service does not guarantee conferment",
        "Do not use an honorary title to imply an earned degree — this may be illegal in your jurisdiction",
      ]},
    ],
  },
  {
    id: "verify-accreditation",
    title: "Verify Accreditation Yourself",
    blocks: [
      { type: "paragraph", text: "We share information about Partner Institutions, but we are not an accreditation body. Accreditation status can change, and recognition varies by country, employer, and profession." },
      { type: "callout", label: "Before You Enroll", text: "Verify independently that the qualification is recognised by your employer, professional body, and relevant government authority." },
    ],
  },
  {
    id: "visa",
    title: "Visa and Immigration",
    blocks: [
      { type: "paragraph", text: "Techversity.ai is not a licensed immigration advisor. We cannot guarantee visa approvals. Please seek qualified immigration advice for visa-related matters." },
    ],
  },
  {
    id: "faqs",
    title: "Frequently Asked Questions",
    blocks: [
      { type: "h3", text: "Can I use my honorary doctorate title professionally?" },
      { type: "paragraph", text: "Yes, but always make clear it's honorary. Using it to imply an earned degree is misleading and may be unlawful." },
      { type: "h3", text: "Are all your Partner Institutions accredited?" },
      { type: "paragraph", text: "We partner with reputable institutions, but accreditation varies by program and country. Always verify before enrolling." },
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Be informed before you enroll."
      intro="Techversity.ai is an education platform, not a university. Here's what you need to know."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Email", value: "info@techversity.ai", href: "mailto:info@techversity.ai" },
        { label: "Address", value: "Techverso Pvt Ltd, Lucknow, Uttar Pradesh, India" },
      ]}
    />
  );
}