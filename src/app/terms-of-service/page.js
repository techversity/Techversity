import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Terms & Conditions | Techversity.ai",
  description: "The terms governing your use of Techversity.ai's admissions consulting and advisory platform.",
};

const sections = [
  {
    id: "what-we-are",
    title: "What Techversity.ai Is",
    blocks: [
      { type: "paragraph", text: "Techversity.ai is an education marketplace and admissions consulting platform. We help professionals access PhD programs, DBA programs, Executive Doctorates, Master's programs, professional certifications, honorary doctorate nominations, and academic consulting." },
      { type: "callout", label: "Important", text: "Techversity.ai does not award degrees or qualifications. All degrees, certifications, and honorary recognitions are issued entirely by Partner Institutions — not by us. Our role is to guide, advise, and facilitate." },
    ],
  },
  {
    id: "using-platform",
    title: "Using Our Platform",
    blocks: [
      { type: "paragraph", text: "You must be at least 18 years old. By creating an account, you agree to:" },
      { type: "list", items: [
        "Provide accurate information",
        "Keep your login credentials private",
        "Use the platform only for lawful purposes",
        "Not submit forged, plagiarised, or falsified documents",
      ]},
      { type: "paragraph", text: "If we discover false information, we reserve the right to cancel your application and close your account." },
    ],
  },
  {
    id: "our-services",
    title: "Our Services",
    blocks: [
      { type: "h3", text: "Admissions facilitation" },
      { type: "paragraph", text: "We help prepare and submit applications. Admissions decisions belong entirely to institutions." },
      { type: "h3", text: "Academic consulting" },
      { type: "paragraph", text: "Our advisors help you choose programs and strengthen applications." },
      { type: "h3", text: "Honorary program facilitation" },
      { type: "paragraph", text: "We facilitate nominations for honorary doctorates and recognition programs." },
      { type: "h3", text: "Scholarship guidance" },
      { type: "paragraph", text: "We share information about opportunities and help you apply. We don't control who receives scholarships." },
      { type: "h3", text: "Career development" },
      { type: "paragraph", text: "Advisory services to help you progress professionally." },
    ],
  },
  {
    id: "outcomes",
    title: "Outcomes Are Not Guaranteed",
    blocks: [
      { type: "paragraph", text: "We cannot guarantee admission to any program, any award, any scholarship, or any specific result. Our job is to give you the best possible chance — final decisions always belong to Partner Institutions." },
    ],
  },
  {
    id: "honorary-programs",
    title: "About Honorary Programs",
    blocks: [
      { type: "paragraph", text: "Honorary doctorates and recognition awards are not earned academic degrees. They are conferred by Partner Institutions based on professional achievement." },
      { type: "list", items: [
        "Fees paid to Techversity.ai cover our facilitation service — not the award itself",
        "Submitting a nomination doesn't guarantee the award",
        "Do not use an honorary title to imply you hold an earned academic degree — this may be unlawful in your jurisdiction",
      ]},
    ],
  },
  {
    id: "payments",
    title: "Payments",
    blocks: [
      { type: "paragraph", text: "We accept Razorpay, Stripe, and PayPal. All fees are shown clearly before you pay." },
      { type: "paragraph", text: "If you have a question about a charge, contact billing@techversity.ai before raising a dispute with your bank. Raising a chargeback for a service that was delivered — without speaking to us first — is a breach of these Terms and may result in account suspension." },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    blocks: [
      { type: "paragraph", text: "All content on Techversity.ai belongs to us or our partners. You may use it for personal purposes but may not copy, redistribute, or commercially exploit it without our permission." },
    ],
  },
  {
    id: "partner-institutions",
    title: "Partner Institutions",
    blocks: [
      { type: "paragraph", text: "Partner Institutions are independent organisations. We don't control their admissions decisions, program changes, fee updates, or accreditation status." },
      { type: "callout", label: "Your Responsibility", text: "Always verify a program's accreditation independently before committing to enroll." },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      { type: "paragraph", text: "We're responsible for our own work — not for decisions made by Partner Institutions, application outcomes, visa results, or events outside our control. Our liability is limited to fees you paid us in the three months before the issue arose." },
    ],
  },
  {
    id: "disputes",
    title: "Disputes",
    blocks: [
      { type: "paragraph", text: "Contact legal@techversity.ai first. If unresolved within 30 days, disputes will be settled by binding arbitration under the Arbitration and Conciliation Act, 1996 (India), in Lucknow, India, in English." },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="How Techversity.ai works — and what we both agree to."
      intro="These Terms explain what Techversity.ai is, what we do for you, and what we ask in return. Written in plain English."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Email", value: "legal@techversity.ai", href: "mailto:legal@techversity.ai" },
        { label: "Address", value: "Techverso Pvt Ltd, Lucknow, Uttar Pradesh, India" },
        { label: "Governed By", value: "Indian Law" },
      ]}
    />
  );
}