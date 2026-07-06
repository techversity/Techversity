// images

const floridaCoastalDetail = {
  slug: "florida-coastal-school-of-law", // TODO — slug still says "school-of-law", consider renaming
  name: "Florida Coastal",
  shortName: "FCU",
  motto: "University for Working Adults",
  country: "United States",
  city: "Jacksonville, Florida",
  flag: "🇺🇸",
  flagCode: "us",
  founded: 1996, // TODO
  mode: "100% Online",
  language: "English",
  studentsServed: "Working adults, career changers, global",

  heroImage: "/images/Universities/Florida/hero.avif",
  aboutImage:
    "https://images.unsplash.com/photo-1758270705290-62b6294dd044?w=1200&q=80",
  GlanceImg:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  certificateImage:
    "https://i.pinimg.com/1200x/cd/86/02/cd8602dcab57da974a709c2588661f7c.jpg",
  convocationImage:
    "https://i.pinimg.com/1200x/86/a8/3d/86a83dff4cc9f9ba68832e1e7a823081.jpg",
  finalCtaImage:
    "https://i.pinimg.com/1200x/ad/60/f0/ad60f0029361cf32060b5b2df5dbfa9e.jpg",

  tagline:
    "A Jacksonville-based online university — DBA and Doctorate of Computer Science, alongside a full Master's catalogue, with academic partnerships from Cisco, IBM, CompTIA, and Microsoft.",

  // ── ABOUT ──
  about: [
    "Florida Coastal University, based in Jacksonville, Florida, is built specifically for working adults — offering 100% online Bachelor's, Master's, and Doctoral programmes across Business, Computer Science, and Education Leadership.",
    "Its Doctor of Business Administration and Doctorate of Computer Science are each available across four specialisation tracks (Finance, Marketing, Management, and IT for the DBA; AI, Cybersecurity, Data Science, and IoT for the DCS), alongside a Doctorate of Education Leadership for academic administrators and policy-focused scholars.",
    "Florida Coastal states plainly on its own site that it is provisionally licensed by the Florida Commission for Independent Education (CIE) — a status worth understanding clearly before you apply, and one we don't gloss over.",
  ],

  // ── WHY THROUGH TECHVERSITY ──
  whyTechversity: {
    lead:
      "Florida Coastal is upfront that its licensure is provisional — which is exactly the kind of detail a good advisor makes sure you understand, not skip past.",
    points: [
      { title: "Status, stated plainly", desc: "Florida Coastal is provisionally licensed by Florida's CIE — we confirm what this means for your specific goals before you apply, not after." },
      { title: "The right track, matched", desc: "DBA, Doctorate of Computer Science, or Master's — and the right specialisation track within it — matched to your career direction." },
      { title: "Application, shepherded", desc: "We prepare your documentation to Florida Coastal's standard and keep the process moving." },
      { title: "One point of contact", desc: "A named advisor throughout — not a support ticket queue." },
      { title: "Support that outlasts enrolment", desc: "Verification and transcript support don't end the day you're accepted." },
    ],
  },

  // ── FACTS GRID ──
  facts: [
    { label: "Established", value: "1996" },
    { label: "Location", value: "Jacksonville, Florida, USA" },
    { label: "Delivery", value: "100% Online" },
    { label: "Language", value: "English" },
    { label: "Licensure", value: "Florida CIE (Provisional)" },
    { label: "Doctoral Tracks", value: "DBA (4) · DCS (4) · Ed.D." },
    { label: "Academic Partners", value: "Cisco · IBM · CompTIA · Microsoft" },
    { label: "Intakes", value: "September · January · May" },
  ],

  // ── ACCREDITATION ──
  accreditation: [
    { name: "Florida Commission for Independent Education (CIE)", note: "Provisionally licensed — Florida Coastal states this directly on its own site. A provisional licence is not the same as full, final licensure, and it does not by itself constitute national or regional accreditation." },
  ],
  accreditationNote:
    "Florida Coastal is direct about its own status: provisionally licensed by Florida's CIE. We say this plainly because it affects how the credential may be recognised for licensure, credit transfer, or employer purposes. Your advisor confirms what this means for your specific goals before you apply.",

  // TODO — Florida Coastal doesn't yet have its own dedicated DBA/Master's program pages
  programSlugs: ["dba", "masters", "bachelors"],

  offersCertifications: false,

  // ── ADMISSION STEPS ──
  admissionSteps: [
    { title: "Eligibility Review", desc: "We assess your record against Florida Coastal's criteria and tell you plainly whether it fits." },
    { title: "Track Match", desc: "DBA, Doctorate of Computer Science, or Master's — and the right specialisation, matched to your goals." },
    { title: "Application & Documents", desc: "We prepare your documentation to Florida Coastal's standard before anything is submitted." },
    { title: "Institutional Review", desc: "Florida Coastal's own admissions process evaluates the application." },
    { title: "Enrolment", desc: "On approval, enrolment is confirmed for the next available intake — September, January, or May." },
  ],

  // ── FAQ ──
  faqs: [
    { q: "Is Florida Coastal University the same as Florida Coastal School of Law?", a: "No. Florida Coastal University is a separate, present-day online institution offering Business, Computer Science, and Education programmes. It has no relation to the now-closed law school of a similar name." },
    { q: "Is Florida Coastal accredited?", a: "Florida Coastal states directly on its own site that it is provisionally licensed by the Florida Commission for Independent Education (CIE). This is a provisional status, not full licensure or national/regional accreditation — we explain exactly what this means before you apply." },
    { q: "What doctoral specialisations are available?", a: "The DBA offers Finance, Marketing, Management, and IT tracks. The Doctorate of Computer Science offers AI, Cybersecurity, Data Science, and IoT tracks. A Doctorate of Education Leadership is also available." },
    { q: "Can I study without relocating?", a: "Yes. All Florida Coastal programmes are delivered 100% online." },
    { q: "How is my degree verified?", a: "Techversity provides an independent verification page for any employer or third party to confirm authenticity." },
  ],

  ctaLine: "Florida Coastal is upfront about its licensure status. So are we.",
};

export default floridaCoastalDetail;