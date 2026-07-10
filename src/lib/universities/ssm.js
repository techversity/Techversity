// images

const ssmDetail = {
  slug: "ssm",
  name: "SSM",
  shortName: "SSM",
  motto: "We Create Leaders",
  country: "Switzerland",
  city: "Geneva (Swiss campus)",
  flag: "🇨🇭",
  flagCode: "ch",
  founded: 2006, // TODO
  mode: "Online, or In-Residence (Geneva, Barcelona, Madrid, Rome, Brescia, Cairo, Malta, UAE)",
  language: "English",
  studentsServed: "Learners across Europe, MENA, and beyond",

  heroImage: "/images/Universities/SSM/hero.avif",
  aboutImage:
    "/images/Universities/SSM/about.avif",
  GlanceImg:
    "/images/Universities/SSM/glance.avif",
  certificateImage:
    "/images/Universities/SSM/certification.avif",
  convocationImage:
    "/images/Universities/SSM/convocation.avif",
  finalCtaImage:
    "/images/SharedPrograms/CTA.avif",

  tagline:
    "DEAC-accredited, eduQua-certified for two decades — a genuinely well-documented business school with campuses from Geneva to Dubai.",

  // ── ABOUT ──
  about: [
    "Swiss School of Management (SSM) is a business school offering BBA (180 ECTS), MBA (60 ECTS), EMBA (60 ECTS, applied-research focus), and DBA (120 ECTS) — delivered online or in-residence across a genuinely global campus network: Geneva, Barcelona, Madrid, Rome, Brescia, Cairo, Malta, and the UAE.",
    "SSM holds institutional accreditation from the Distance Education Accrediting Commission (DEAC) — a U.S. Department of Education-recognised national accrediting agency — alongside a Certificate of Authorization from the Texas Higher Education Coordinating Board, IACBE programmatic accreditation, and over two decades of eduQua certification in Switzerland.",
    "Honorary Doctorate and Professorial Appointment recognition — distinct from SSM's publicly listed BBA/MBA/EMBA/DBA catalogue — are available specifically through Techversity's advisory partnership with SSM. Your advisor explains exactly what this distinction means before you apply.",
  ],

  // ── WHY THROUGH TECHVERSITY ──
  whyTechversity: {
    lead:
      "SSM's DBA accreditation is genuinely strong — DEAC, IACBE, decades of eduQua. The honorary and professorial pathways run through a separate advisory arrangement, and we say so plainly.",
    points: [
      { title: "Recognition, shown at source", desc: "DEAC's DOE-recognised status, IACBE, eduQua — we link you to the primary documentation for SSM's DBA, not a summary." },
      { title: "The arrangement, named clearly", desc: "Honorary Doctorate and Professorial pathways run through Techversity's advisory partnership — distinct from SSM's public catalogue, and we tell you that upfront." },
      { title: "The right pathway, matched", desc: "DBA, Honorary Doctorate, or Professorial Appointment — matched to your record and your actual goals." },
      { title: "Application, shepherded", desc: "We prepare your documentation to SSM's standard and keep the process moving." },
      { title: "One point of contact", desc: "A named advisor throughout — not a support ticket queue." },
    ],
  },

  // ── FACTS GRID ──
  facts: [
    { label: "Institutional Accreditation", value: "DEAC (US DOE-recognised)" },
    { label: "State Authorization", value: "Texas HECB" },
    { label: "Programmatic", value: "IACBE" },
    { label: "Swiss Quality Cert.", value: "eduQua (20+ years)" },
    { label: "Campuses", value: "Geneva · Barcelona · Madrid · Rome · Cairo · Malta · UAE" },
    { label: "DBA Length", value: "2 years, 120 ECTS" },
    { label: "Delivery", value: "Online or In-Residence" },
    { label: "Honorary/Professorship", value: "Via advisory partnership" },
  ],

  // ── ACCREDITATION ──
  accreditation: [
    { name: "DEAC (USA)", note: "Institutional accreditation from the Distance Education Accrediting Commission, a U.S. Department of Education-recognised national accrediting agency, awarded following review at DEAC's June 2024 meeting." },
    { name: "Texas Higher Education Coordinating Board", note: "Certificate of Authorization, supporting compliance with the State Authorization Reciprocity Agreement (NC-SARA)." },
    { name: "IACBE", note: "Programmatic accreditation for business degree offerings." },
    { name: "eduQua (Switzerland)", note: "Swiss quality certification held continuously for more than two decades." },
    { name: "IAU (International Association of Universities)", note: "Listed with the International Association of Universities, a UNESCO-affiliated global membership network." },
  ],
  accreditationNote:
    "SSM's DBA, MBA, EMBA, and BBA sit behind genuinely strong, verifiable accreditation — DEAC's recognition is U.S. Department of Education-recognised, not merely self-described. Honorary Doctorate and Professorial Appointment recognition are separate from this catalogue and run through Techversity's specific advisory partnership with SSM — your advisor confirms exactly what applies to your pathway before you apply.",

  // TODO — SSM doesn't yet have its own dedicated DBA program page
  programSlugs: ["dba", "honorary-doctorate", "honorary-professorship", "bachelors"],
  programPricing: { "dba": "From $15,000", "bachelors": "From $8,000" },

  offersCertifications: false,

  // ── ADMISSION STEPS ──
  admissionSteps: [
    { title: "Eligibility Review", desc: "We assess your record against SSM's criteria and tell you plainly whether it fits." },
    { title: "Pathway Match", desc: "DBA, Honorary Doctorate, or Professorial Appointment — matched to your record and goals." },
    { title: "Application & Documents", desc: "We prepare your documentation to SSM's standard before anything is submitted." },
    { title: "Institutional Review", desc: "SSM's own admissions process — or Techversity's advisory review for honorary/professorial pathways — evaluates the application." },
    { title: "Enrolment", desc: "On approval, enrolment is confirmed and your chosen delivery format begins." },
  ],

  // ── FAQ ──
  faqs: [
    { q: "Is SSM genuinely accredited?", a: "Yes. SSM holds institutional accreditation from DEAC, a U.S. Department of Education-recognised national accrediting agency, alongside IACBE programmatic accreditation and over two decades of eduQua certification in Switzerland. This applies to its BBA, MBA, EMBA, and DBA." },
    { q: "Does SSM offer Honorary Doctorates?", a: "SSM's public catalogue lists BBA, MBA, EMBA, and DBA. Honorary Doctorate and Professorial Appointment recognition are available specifically through Techversity's advisory partnership with SSM — we tell you this distinction plainly before you apply." },
    { q: "Can I complete the DBA online?", a: "Yes, alongside in-residence options across SSM's global campus network — Geneva, Barcelona, Madrid, Rome, Brescia, Cairo, Malta, and the UAE." },
    { q: "How long is the DBA?", a: "Two years, 120 ECTS credits." },
    { q: "How is my credential verified?", a: "SSM maintains its own Degree and Status Authentication process. Techversity also provides an independent verification page for any third party to confirm authenticity." },
  ],

  ctaLine: "SSM's DBA accreditation speaks for itself. Techversity is plain about which pathways go through which door.",
};

export default ssmDetail;