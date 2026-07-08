import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Refund & Cancellation Policy | Techversity.ai",
  description: "How refunds and cancellations work across Techversity.ai's services.",
};

const sections = [
  {
    id: "consulting-sessions",
    title: "Consulting & Advisory Sessions",
    blocks: [
      { type: "table", headers: ["When You Cancel", "Refund"], rows: [
        ["7+ business days before", "90% refund"],
        ["3–7 business days before", "50% refund"],
        ["Less than 3 business days before", "No refund"],
        ["No-show without notice", "No refund"],
      ]},
    ],
  },
  {
    id: "application-processing",
    title: "Application Processing",
    blocks: [
      { type: "table", headers: ["When You Cancel", "Refund"], rows: [
        ["Within 48 hours, before work starts", "90% refund"],
        ["After document review starts", "50% refund"],
        ["After submission to an institution", "No refund"],
      ]},
    ],
  },
  {
    id: "honorary-nominations",
    title: "Honorary Doctorate & Award Nominations",
    blocks: [
      { type: "table", headers: ["When You Cancel", "Refund"], rows: [
        ["Within 24 hours", "80% refund"],
        ["After dossier is in progress", "30% refund"],
        ["After nomination is submitted", "No refund"],
      ]},
      { type: "paragraph", text: "Refund requests after submission are reviewed individually given the personalised nature of honorary nominations." },
    ],
  },
  {
    id: "scholarship-career",
    title: "Scholarship Guidance & Career Services",
    blocks: [
      { type: "table", headers: ["When You Cancel", "Refund"], rows: [
        ["Within 48 hours", "80% refund"],
        ["After work has started", "40% refund"],
        ["After service is delivered", "No refund"],
      ]},
    ],
  },
  {
    id: "never-refundable",
    title: "What's Never Refundable",
    blocks: [
      { type: "list", items: [
        "Third-party payment processing fees (Razorpay, Stripe, PayPal)",
        "Registration or account setup fees",
        "Services fully delivered",
        "Applications already submitted to an institution",
      ]},
    ],
  },
  {
    id: "outcomes",
    title: "Outcomes Don't Affect Refunds",
    blocks: [
      { type: "paragraph", text: "We don't offer refunds based on admissions results, scholarship decisions, or honorary program outcomes. Our fee covers the expert service we provide — not the institution's decision." },
    ],
  },
  {
    id: "if-we-cancel",
    title: "If We Cancel",
    blocks: [
      { type: "paragraph", text: "If Techversity.ai is unable to deliver a service, you'll receive a full refund or a service credit — your choice." },
    ],
  },
  {
    id: "how-to-request",
    title: "How to Request a Refund",
    blocks: [
      { type: "paragraph", text: "Email refunds@techversity.ai with your name, transaction ID, and reason. We'll acknowledge within 3 business days and process eligible refunds within 10–15 business days to your original payment method." },
    ],
  },
  {
    id: "faqs",
    title: "Frequently Asked Questions",
    blocks: [
      { type: "h3", text: "I paid but haven't used the service. Can I get a refund?" },
      { type: "paragraph", text: "If it's been less than 48 hours and work hasn't started, you'll get 90% back. Contact us quickly." },
      { type: "h3", text: "I wasn't admitted. Do I get my money back?" },
      { type: "paragraph", text: "No. Our fee covers the application support we provided — not the institution's decision." },
      { type: "h3", text: "I was charged twice by accident." },
      { type: "paragraph", text: "We'll refund the duplicate charge within 5–7 business days. Email billing@techversity.ai." },
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="We want you to feel confident about every payment."
      intro="Simple principle: if we haven't started work yet, you get most of your money back."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Refunds", value: "refunds@techversity.ai", href: "mailto:refunds@techversity.ai" },
        { label: "Billing", value: "billing@techversity.ai", href: "mailto:billing@techversity.ai" },
      ]}
    />
  );
}