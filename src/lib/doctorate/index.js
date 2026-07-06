import honoraryDoctorate from "./honorary-doctorate";
import dba from "./dba";
import phd from "./phd";

export const doctorateTypes = [honoraryDoctorate, dba, phd];

export function getDoctorateBySlug(slug) {
  return doctorateTypes.find((d) => d.slug === slug) || null;
}

export function getAllDoctorateSlugs() {
  return doctorateTypes.map((d) => d.slug);
}

// Hub-level stats strip
export const doctorateStats = [
  { val: "10+", label: "Countries served" },
  { val: "8+", label: "Partner universities" },
  { val: "82%", label: "Acceptance rate" },
  { val: "4.0/5", label: "Recipient satisfaction" },
];

// Hub comparison table — PhD vs DBA vs Honorary
export const doctorateComparison = {
  columns: ["Honorary Doctorate", "DBA", "PhD"],
  rows: [
    { label: "Basis", values: ["Recognition of existing work", "Applied research", "Original research"] },
    { label: "Who it's for", values: ["Established leaders", "Working executives", "Researchers & academics"] },
    { label: "Duration", values: ["4–6 months", "18–36 months", "24–48 months"] },
    { label: "Dissertation", values: ["Not required", "Applied project", "Required & defended"] },
    { label: "Delivery", values: ["Portfolio review", "Online + residencies", "Individual supervision"] },
    { label: "Recognition", values: ["Symbolic, honorific", "Professional doctorate", "Academic doctorate"] },
  ],
};

// Hub-level general FAQs (not the per-type customFaqs)
export const doctorateFaqs = [
  {
    q: "What distinguishes an Honorary Doctorate from a conferred one?",
    a: "An Honorary Doctorate (Doctor Honoris Causa) recognises the contribution a life's work has already made to its field. Unlike a conferred doctorate, it is awarded on the strength of professional record — not on coursework, residency, or defended dissertation.",
  },
  {
    q: "Who is considered eligible?",
    a: "Eligibility depends on the pathway. Honorary recognition looks for sustained work of 15+ years and measurable impact. DBA and PhD pathways require a Master's degree and a defined research direction. Our first conversation reviews your profile against the right pathway — candidly, and without cost.",
  },
  {
    q: "How long does the process take?",
    a: "An Honorary Doctorate typically takes four to six months from first conversation to conferment. A DBA runs eighteen to thirty-six months; a PhD, twenty-four to forty-eight. Every timeline depends on the institution, the programme, and the pace the candidate is willing to set.",
  },
  {
    q: "Are the degrees accredited?",
    a: "Yes. Every partner institution holds accreditation with its respective national or international body. We work only with institutions whose conferment carries formal recognition. Full details are published alongside each institution on the university pages.",
  },
  {
    q: "What does the advisory fee include?",
    a: "Fees vary by programme and institution. They cover review, introduction, application shepherding, and — where available — attendance at the conferment ceremony. We publish transparent fee schedules on request; there are no hidden costs.",
  },
  {
    q: "What if I am not yet ready to apply?",
    a: "Most conversations we hold are exploratory. We often recommend waiting — whether for a publication, a further chapter of work, or a change in circumstance. The correct time is not necessarily now, and we will say so plainly if that is our reading.",
  },
];

// Hub-level advisory process — five steps
export const doctorateProcess = [
  { n: "01", verb: "Qualify", desc: "We review a life's work — not a CV." },
  { n: "02", verb: "Shortlist", desc: "We identify the universities that match." },
  { n: "03", verb: "Introduce", desc: "We make the introduction, formally." },
  { n: "04", verb: "Shepherd", desc: "We remain present through every step of consideration." },
  { n: "05", verb: "Confer", desc: "You are recognised." },
];