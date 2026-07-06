// Per-university detail content — EU Global
// Sourced from euglobal.edu.eu. Shorter than Kennedy's — content depth follows
// what's genuinely available, not a fixed target length.

const euGlobalDetail = {
  slug: "eu-global",
  name: "EU Global",
  shortName: "EU Global",
  motto: "Be Globally Employable",
  country: "Malta",
  city: "St Julians",
  flag: "🇲🇹",
  flagCode: "mt",
  founded: 2005, // TODO: confirm — not stated on their own site, verify with manager
  mode: "Online, Blended & On-Campus (Malta)",
  language: "English",
  studentsServed: "Learners from 40+ countries",

  heroImage: "/images/Universities/EU Global/hero.avif",
  aboutImage: "https://i.pinimg.com/736x/fc/0b/29/fc0b2945867d59829956315894819fa8.jpg", // TODO: add real image asset
  GlanceImg: "https://i.pinimg.com/1200x/e6/ad/c6/e6adc682d2bb1254e52883bef5d081b9.jpg", // TODO: add real image asset
  certificateImage: "https://i.pinimg.com/736x/df/2c/22/df2c22387c024b92166bfe93156f12a2.jpg", // TODO: add real image asset
  convocationImage: "https://www.fau.edu/nursing/images/convocation-2024-group.jpg", // TODO: add real image asset
  finalCtaImage: "https://i.pinimg.com/1200x/ad/60/f0/ad60f0029361cf32060b5b2df5dbfa9e.jpg", // TODO: add real image asset

  tagline:
    "A Malta-accredited institute built for global employability — DBA, MBA, and technology programmes delivered online, blended, or on-campus.",

  // ── ABOUT ──
  about: [
    "European Global Institute of Innovation & Technology (EU Global) is a Malta Further & Higher Education Authority (MFHEA) accredited institute of higher education, offering Bachelor's, Master's, and Doctoral programmes across business, technology, and management disciplines.",
    "Its teaching model centres on project-based learning — every course is built around applying frameworks to real decisions rather than memorising theory, with a Capstone Consulting project or thesis anchoring most postgraduate pathways.",
    "EU Global runs three flexible study modes: fully online, blended (start online, finish at a partner university), and on-campus in Malta — a Schengen-area, English-speaking base with a growing footprint in Germany, the US, and the UK.",
  ],

  // ── WHY THROUGH TECHVERSITY ──
  whyTechversity: {
    lead:
      "EU Global's application process is straightforward for a well-prepared candidate — but recognition varies by country, and it pays to know exactly what you're signing up for before you begin.",
    points: [
      { title: "Recognition, explained plainly", desc: "EU Global's accreditation is genuinely documented — MFHEA-licensed, EQF-aligned, WES-listed. We walk you through exactly what that means for your specific country before you apply." },
      { title: "The right pathway, matched", desc: "DBA, MBA, or a technology master's — your advisor matches the pathway to your record and goals, not the other way around." },
      { title: "Application, shepherded", desc: "We prepare your documentation to EU Global's standard and keep the process moving, so it doesn't stall in an inbox." },
      { title: "One point of contact", desc: "A named advisor throughout — not a support ticket queue." },
      { title: "Support that outlasts enrolment", desc: "Verification, transcripts, and introductions — our relationship doesn't end the day you're accepted." },
    ],
  },

  // ── FACTS GRID ──
  facts: [
    { label: "Established", value: "2005" },
    { label: "Location", value: "St Julians, Malta" },
    { label: "Delivery", value: "Online, Blended, or On-Campus" },
    { label: "Language", value: "English" },
    { label: "Recognition", value: "MFHEA · EQF · WES-listed" },
    { label: "Pathways Offered", value: "DBA · Honorary Doctorate · Master's · Honorary Professorship · Bachelor's · Certifications" },
    { label: "PhD Available", value: "Not offered" },
    { label: "Learner Base", value: "40+ countries" },
  ],

  // ── ACCREDITATION ──
  accreditation: [
    { name: "MFHEA (Malta)", note: "Licensed by the Malta Further & Higher Education Authority, Licence No. 2024-018 — verifiable on Malta's public qualifications register.", verificationUrl: "https://qualifications.mfhea.gov.mt/#/institutions?institution=MFHEA-ORG-456&search=true" },
    { name: "EQF / MQF", note: "Programmes are aligned to Levels 6–8 of the European and Maltese Qualifications Frameworks, with ECTS credit recognition." },
    { name: "CHED (USA)", note: "Holds accreditation recognition from CHED, USA." },
    { name: "WES-listed", note: "Appears in the World Education Services (WES) list, supporting credential evaluation for study or employment in the US and Canada." },
    { name: "APHEI", note: "Educational membership of the Association of Professional Higher Education Institutions." },
  ],
  accreditationNote:
    "EU Global states plainly that recognition of its qualifications varies by country, and does not guarantee acceptance outside Malta — a rare degree of candour we think is worth passing on directly. Your advisor confirms what recognition means for your specific jurisdiction before you apply.",

  // programs genuinely offered by EU Global, matched against existing generic program pages
  // NOTE: EU Global's own DBA does not yet have a dedicated program page — to be built
  programSlugs: ["dba-esdst", "honorary-doctorate", "masters", "honorary-professorship", "bachelors", "data-science-cert"],

  offersCertifications: true,

  // ── ADMISSION STEPS ──
  admissionSteps: [
    { title: "Eligibility Review", desc: "We assess your profile against EU Global's criteria for the pathway you're considering, and tell you plainly whether it fits." },
    { title: "Pathway Match", desc: "DBA, Master's, Honorary Doctorate, or Honorary Professorship — matched to your record and goals." },
    { title: "Application & Documents", desc: "We prepare your documentation to EU Global's standard before anything is submitted." },
    { title: "Institutional Review", desc: "EU Global's own admissions process evaluates the application independently." },
    { title: "Enrolment", desc: "On approval, enrolment is confirmed and your study mode — online, blended, or on-campus — is set." },
  ],

  // ── FAQ ──
  faqs: [
    { q: "Is EU Global genuinely accredited?", a: "Yes. It holds a licence from the Malta Further & Higher Education Authority (MFHEA), aligned to the European Qualifications Framework, and appears on the World Education Services (WES) list. Your advisor shows you the primary source before you apply." },
    { q: "Does EU Global offer a PhD?", a: "No. EU Global's doctoral-level offering is the DBA, not a PhD. If a traditional PhD is what you're after, your advisor can point you to a partner institution that offers one." },
    { q: "Will my qualification be recognised in my home country?", a: "It depends on your country. EU Global is transparent that recognition varies by jurisdiction and doesn't guarantee acceptance outside Malta. We confirm what that means for you specifically before you commit to anything." },
    { q: "Can I study without relocating to Malta?", a: "Yes. EU Global offers fully online and blended study modes alongside its on-campus option — you choose based on what fits your life." },
    { q: "How long does the DBA take?", a: "Typically around three years, depending on your pace and the complexity of your research project." },
    { q: "What does Techversity's advisory cover?", a: "Eligibility review, pathway matching, document preparation, and shepherding through to enrolment — shared transparently up front." },
  ],

  ctaLine: "EU Global opens the door. Techversity walks you through it.",
};

export default euGlobalDetail;