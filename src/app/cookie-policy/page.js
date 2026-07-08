import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Cookie Policy | Techversity.ai",
  description: "What cookies Techversity.ai uses and how to control them.",
};

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    blocks: [
      { type: "paragraph", text: "Cookies are small files saved to your device when you visit a website. They help keep you logged in, remember your preferences, and let us understand how the platform is used." },
    ],
  },
  {
    id: "cookies-we-use",
    title: "The Cookies We Use",
    blocks: [
      { type: "h3", text: "Essential" },
      { type: "paragraph", text: "Keep the platform running: login, session security, payment processing. Cannot be disabled." },
      { type: "h3", text: "Analytics" },
      { type: "paragraph", text: "Google Analytics helps us understand which pages are popular and where we can improve. Data is aggregated and anonymous." },
      { type: "h3", text: "Marketing" },
      { type: "paragraph", text: "Google Ads and Meta Pixel measure whether our advertising is working. We don't use these to build intrusive profiles." },
      { type: "h3", text: "Functional" },
      { type: "paragraph", text: "Remember your language and region preferences between visits." },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Payment Cookies",
    blocks: [
      { type: "paragraph", text: "Razorpay, Stripe, and PayPal set their own security cookies during checkout. These are governed by their own privacy policies." },
    ],
  },
  {
    id: "your-choices",
    title: "Your Choices",
    blocks: [
      { type: "paragraph", text: "Choose your preferences on our cookie banner when you first visit — or update them anytime via Cookie Settings in the footer." },
      { type: "list", items: [
        "Google Analytics opt-out: tools.google.com/dlpage/gaoptout",
        "Google Ads & Meta: manage through your account settings on those platforms",
      ]},
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="We use cookies to make Techversity.ai work better for you."
      intro="Here's what cookies are, what we use them for, and how to control them."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Email", value: "privacy@techversity.ai", href: "mailto:privacy@techversity.ai" },
      ]}
    />
  );
}