import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Rescheduling Policy | Techversity.ai",
  description: "How to reschedule sessions and consultations with Techversity.ai.",
};

const sections = [
  {
    id: "how-to-reschedule",
    title: "How to Reschedule",
    blocks: [
      { type: "paragraph", text: "Email support@techversity.ai with your booking reference and preferred new time." },
    ],
  },
  {
    id: "timing-fees",
    title: "Timing and Fees",
    blocks: [
      { type: "table", headers: ["Notice Given", "Fee"], rows: [
        ["7+ business days", "Free (first reschedule always free)"],
        ["3–6 business days", "10% of session fee"],
        ["1–2 business days", "20% of session fee"],
        ["Less than 24 hours", "30% of session fee or session forfeited"],
        ["No-show, no notice", "Session forfeited, no reschedule offered"],
      ]},
      { type: "paragraph", text: "Each booking allows up to 2 reschedules. Further changes may incur a nominal admin fee, confirmed with you at the time of request." },
    ],
  },
  {
    id: "if-we-reschedule",
    title: "If We Reschedule",
    blocks: [
      { type: "paragraph", text: "If we need to move your session, we'll notify you and offer a new time or a full refund. No fees apply." },
    ],
  },
  {
    id: "group-sessions",
    title: "Group Sessions",
    blocks: [
      { type: "paragraph", text: "Group sessions and webinars can't be rescheduled per individual. Ask us about a recording if you can't attend." },
    ],
  },
  {
    id: "session-expiry",
    title: "Session Expiry",
    blocks: [
      { type: "paragraph", text: "Unused session credits expire 12 months from purchase." },
    ],
  },
];

export default function ReschedulingPolicyPage() {
  return (
    <LegalPageLayout
      title="Life happens. Here's how we handle changes."
      intro="Flexible for you, fair to our team."
      lastUpdated="July 7, 2026"
      effective="July 7, 2026"
      sections={sections}
      contact={[
        { label: "Email", value: "support@techversity.ai", href: "mailto:support@techversity.ai" },
        { label: "Subject Line", value: "Reschedule Request — [Your Name] — [Session Date]" },
        { label: "Response Time", value: "We'll confirm within 2 business days." },
      ]}
    />
  );
}