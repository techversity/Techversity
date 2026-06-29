// Content sourced from techversity.ai (real data, timelines, eligibility, FAQ)
// Layout/design is our own.

export const doctorateStats = [
  { val: "10+",   label: "Countries served" },
  { val: "8+",    label: "Partner universities" },
  { val: "82%",   label: "Acceptance rate" },
  { val: "4.0/5", label: "Recipient satisfaction" },
];

export const doctorateTypes = [
  {
    slug: "honorary-doctorate",
    abbr: "HC",
    name: "Honorary Doctorate",
    latin: "Doctor Honoris Causa",
    tagline: "A formal recognition for work that has already reshaped a field.",
    meta: ["By invitation", "Portfolio reviewed", "Conferment ceremony"],
    timeline: "4–6 months",
    duration: "4–6 months from first conversation to conferment",
    dissertation: false,
    forWhom: "Accomplished leaders whose contribution is already established in their field.",
    overview:
      "An Honorary Doctorate recognises the contribution a life's work has already made to its field. Unlike a conferred doctorate, it is awarded on the strength of professional record — not on coursework, residency, or a defended dissertation. It is the university's public act of saying: this matter has been settled by the work itself.",
    eligibility: [
      "Sustained work of 15 or more years",
      "A clear original contribution to a discipline",
      "Evidence of peer or institutional recognition",
      "A measurable public or sector-wide reach",
    ],
    accent: "#9A7320",
    image: "https://i.pinimg.com/736x/01/62/3f/01623f83a3ee8d7e771bf3149743a918.jpg",
  },
  {
    slug: "dba",
    abbr: "DBA",
    name: "Doctor of Business Administration",
    latin: "DBA",
    tagline: "Applied research, returning with discipline to practice.",
    meta: ["Cohort", "18–36 months", "Online + research residencies"],
    timeline: "18–36 months",
    duration: "18 to 36 months",
    dissertation: true,
    forWhom: "Senior executives who want to apply rigorous research to real business practice — without leaving their role.",
    overview:
      "The DBA is a practitioner doctorate. It carries both rigour and relevance, contributing to theory, practice, and research in business and management. Unlike a PhD, it is geared towards advancing capability in the professional sphere — designed for working executives who pursue applied research alongside their careers.",
    eligibility: [
      "A Master's degree or equivalent qualification",
      "Substantial managerial or leadership experience",
      "A research interest tied to professional practice",
      "Capacity to commit to a multi-year applied research project",
    ],
    accent: "#21385C",
    image: "https://i.pinimg.com/736x/84/91/6b/84916b4de31c7a26c0488138bd0a74a5.jpg",
  },
  {
    slug: "phd",
    abbr: "PhD",
    name: "Doctor of Philosophy",
    latin: "PhD",
    tagline: "An original contribution to knowledge, defended.",
    meta: ["Individual supervision", "24–48 months", "Dissertation"],
    timeline: "24–48 months",
    duration: "24 to 48 months",
    dissertation: true,
    forWhom: "Those pursuing an original, defensible contribution to knowledge — for research, academia, or evidence-based leadership.",
    overview:
      "The PhD is the highest academic award in a field. It requires the candidate to contribute original thought through a written dissertation, defended under individual supervision. It suits those who seek to advance knowledge itself — and to carry the authority that an earned, defended doctorate confers.",
    eligibility: [
      "A Master's degree in a related discipline",
      "A clearly defined original research question",
      "Commitment to individual supervision and a defended dissertation",
      "Several years of focused research work",
    ],
    accent: "#16263D",
    image: "https://i.pinimg.com/736x/d0/d2/e8/d0d2e86921550bb8913689afff282eaa.jpg",
  },
];

// Comparison table rows (PhD vs DBA vs Honorary)
export const doctorateComparison = {
  columns: ["Honorary Doctorate", "DBA", "PhD"],
  rows: [
    { label: "Basis",          values: ["Recognition of existing work", "Applied research", "Original research"] },
    { label: "Who it's for",   values: ["Established leaders", "Working executives", "Researchers & academics"] },
    { label: "Duration",       values: ["4–6 months", "18–36 months", "24–48 months"] },
    { label: "Dissertation",   values: ["Not required", "Applied project", "Required & defended"] },
    { label: "Delivery",       values: ["Portfolio review", "Online + residencies", "Individual supervision"] },
    { label: "Recognition",    values: ["Symbolic, honorific", "Professional doctorate", "Academic doctorate"] },
  ],
};

export const doctorateFaqs = [
  {
    q: "What distinguishes an Honorary Doctorate from a conferred one?",
    a: "An Honorary Doctorate (Doctor Honoris Causa) recognises the contribution a life's work has already made to its field. Unlike a conferred doctorate, it is awarded on the strength of professional record — not on coursework, residency, or defended dissertation. It is the university's public act of saying: this matter has been settled by the work itself.",
  },
  {
    q: "Who is considered eligible?",
    a: "Our partner institutions look for sustained work of 15 or more years, a clear original contribution to a discipline, evidence of peer or institutional recognition, and a measurable public or sector-wide reach. Our first conversation is a review of your record against those criteria — candidly, and without cost.",
  },
  {
    q: "How long does the process take?",
    a: "An Honorary Doctorate typically takes four to six months from first conversation to conferment. A DBA runs eighteen to thirty-six months; a PhD, twenty-four to forty-eight. Every timeline depends on the institution, the programme, and the pace the recipient is willing to set.",
  },
  {
    q: "Are the degrees accredited?",
    a: "Yes. Every partner institution holds accreditation with its respective national or international body. We work only with institutions whose conferment carries formal recognition — ISO-certified, EU-recognised, or nationally accredited depending on jurisdiction. Full details are published alongside each institution on the network page.",
  },
  {
    q: "What does the advisory fee include?",
    a: "Fees vary by programme and institution. They cover review, introduction, application shepherding, and — where available — attendance at the conferment ceremony. We publish transparent fee schedules on request; there are no hidden costs, and no fees are charged for the initial conversation.",
  },
  {
    q: "What if I am not yet ready to apply?",
    a: "Most conversations we hold are exploratory. We often recommend waiting — whether for a publication, a further chapter of work, or a change in circumstance. The correct time for the record is not necessarily now, and we will say so plainly if that is our reading.",
  },
];

// The advisory process — five steps
export const doctorateProcess = [
  { n: "01", verb: "Qualify",  desc: "We review a life's work — not a CV." },
  { n: "02", verb: "Shortlist", desc: "We identify the universities that match." },
  { n: "03", verb: "Introduce", desc: "We make the introduction, formally." },
  { n: "04", verb: "Shepherd",  desc: "We remain present through every step of consideration." },
  { n: "05", verb: "Confer",    desc: "You are recognised." },
];