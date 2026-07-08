import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy | Techversity.ai",
  description: "How Techversity.ai collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "what-we-collect",
    title: "What We Collect",
    blocks: [
      { type: "h3", text: "What you give us directly" },
      { type: "paragraph", text: "When you create an account, submit an application, or contact us, you share things like your name, email, phone number, educational background, and payment details." },
      { type: "h3", text: "What we collect automatically" },
      { type: "paragraph", text: "Basic usage data: pages visited, device type, browser, and IP address. We use cookies for this — see our Cookie Policy for details." },
      { type: "h3", text: "What partners share with us" },
      { type: "paragraph", text: "Partner Institutions may share application status updates. Payment processors share transaction confirmations." },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    blocks: [
      { type: "paragraph", text: "We use your information to:" },
      { type: "list", items: [
        "Deliver the services you've signed up for",
        "Send application and account updates",
        "Process payments securely",
        "Improve the platform and prevent fraud",
        "Meet our legal obligations",
      ]},
      { type: "callout", label: "Our Commitment", text: "We do not sell your personal data. Ever." },
    ],
  },
  {
    id: "who-we-share",
    title: "Who We Share It With",
    blocks: [
      { type: "h3", text: "Partner Institutions" },
      { type: "paragraph", text: "We share your application materials with the relevant institution when you apply. They handle your data under their own privacy policy." },
      { type: "h3", text: "Payment processors" },
      { type: "paragraph", text: "Razorpay, Stripe, and PayPal process payments. We never see your full card number." },
      { type: "h3", text: "Service providers" },
      { type: "paragraph", text: "Tools for email, analytics, and support, contractually bound to protect your data." },
      { type: "h3", text: "Legal requirements" },
      { type: "paragraph", text: "We'll share data if required by law or court order." },
    ],
  },
  {
    id: "retention",
    title: "How Long We Keep It",
    blocks: [
      { type: "list", items: [
        "Application and academic records — 7 years",
        "Payment records — 7 years",
        "Communications — 3 years",
        "Account data — until deletion + 2 years",
      ]},
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    blocks: [
      { type: "paragraph", text: "Depending on where you live, you can access, correct, delete, or export your data — and withdraw consent at any time. Email privacy@techversity.ai and we'll respond within 30 days." },
      { type: "callout", label: "EU / UK Users", text: "You may also lodge a complaint with your national data protection authority." },
    ],
  },
  {
    id: "security",
    title: "Security",
    blocks: [
      { type: "paragraph", text: "We use SSL/TLS encryption, encrypted storage, staff access controls, and regular security audits. No system is 100% risk-free, but we take your data seriously." },
    ],
  },
  {
    id: "children",
    title: "Children",
    blocks: [
      { type: "paragraph", text: "Our platform is for adults (18+). Contact privacy@techversity.ai if you believe a minor has shared data with us." },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Your privacy matters to us."
      intro="At Techversity.ai, we believe you should always know what data we hold, why we hold it, and how to change or delete it — in plain English, not legal jargon."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Data Protection Team", value: "Techversity Data Protection Team" },
        { label: "Email", value: "privacy@techversity.ai", href: "mailto:privacy@techversity.ai" },
        { label: "Address", value: "Techverso Pvt Ltd, Lucknow, Uttar Pradesh, India" },
      ]}
    />
  );
}