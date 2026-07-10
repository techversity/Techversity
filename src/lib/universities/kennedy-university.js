// Per-university detail content
// Flexible structure — each university fills only the sections it needs,
// with its own content depth (some long, some short).

const kennedyUniversity = {
  slug: "kennedy-university",
  name: "Kennedy University",
  shortName: "Kennedy",
  motto: "To Think Is To Be Free",
  country: "European Union",
  city: "Brussels",
  flag: "🇪🇺",
  flagCode: "eu",
  founded: 1985,
  mode: "100% Online",
  language: "English",
  studentsServed: "Global cohort across 40+ countries",

  // hero + gallery imagery (high-quality campus/academic)
  heroImage:
    "/images/Universities/Kennedy/hero.avif",
  aboutImage:
    "/images/Universities/Kennedy/about.avif",
   
  GlanceImg :
  "/images/Universities/Kennedy/glance.avif", 
  certificateImage:
    "/images/Universities/Kennedy/certification.avif",
  // convocation moment image
  convocationImage:
    "/images/Universities/Kennedy/Convocation.avif",
  finalCtaImage:
  "/images/SharedPrograms/CTA.avif",

  // one-line hero descriptor
  tagline:
    "A borderless university built for professionals who refuse to pause their lives to earn their degree.",

  // ── ABOUT (sticky-image scroll section) ──
  // longer, multi-paragraph — Kennedy gets a rich about
  about: [
    "Kennedy University is the European chapter of a lineage that began with Kennedy University of Baptist in the United States. It was founded on a single, uncompromising idea: that advanced education should transcend borders — that a capable professional in Nairobi, Dubai, or São Paulo should have the same access to a rigorous degree as one sitting in a lecture hall in Europe.",
    "Delivered entirely online, Kennedy removes the two barriers that stop most accomplished professionals from ever completing a doctorate or master's — time and location. There is no relocation, no career break, no rigid timetable. The university's academic model is built around independent thinkers who already carry the weight of a demanding career.",
    "Its guiding motto — \"To think is to be free\" — is not decoration. Kennedy's programmes are designed to sharpen independent judgement, not to reward memorisation. For the right candidate, it is one of the most direct, dignified routes to a globally recognised credential.",
    "The university draws its faculty from practitioners as much as academics — supervisors who have led companies, advised governments, and published in their fields. That balance keeps the coursework tethered to the real world, so that what a candidate studies on a Tuesday evening can be applied in their organisation by the following week.",
    "Above all, Kennedy is built for people who have already proven themselves in their careers and now want the credential to match. It does not ask you to start over. It asks you to formalise, deepen, and defend what you already know — and it recognises that with a degree that carries weight across the world.",
  ],

  // ── WHY THROUGH TECHVERSITY (branding section) ──
  whyTechversity: {
    lead:
      "You could apply to Kennedy University directly. Most people don't — because doing it alone means navigating accreditation questions, document formatting, and committee expectations with no one in your corner. Here is what changes when you go through Techversity.",
    points: [
      { title: "One advisor, start to finish", desc: "A single point of contact who knows Kennedy's process intimately — from first question to conferral. You are never handed off to a queue." },
      { title: "Accreditation, laid bare", desc: "We show you exactly which bodies recognise Kennedy, and what that recognition means in your jurisdiction — before you spend a rupee." },
      { title: "Your application, shepherded", desc: "We format your portfolio to Kennedy's standards, pre-empt committee questions, and submit only when it's genuinely ready." },
      { title: "A faster, cleaner path", desc: "Because we know what Kennedy's committee looks for, applications we shepherd move faster and stall less often." },
      { title: "Support that outlasts enrolment", desc: "Verification, transcripts, alumni introductions — our relationship doesn't end the day you're accepted." },
    ],
  },

  // ── FACTS GRID ──
  facts: [
    { label: "Established", value: "1985" },
    { label: "Location", value: "Brussels, EU" },
    { label: "Delivery", value: "100% Online" },
    { label: "Language", value: "English" },
    { label: "Parent Institution", value: "Kennedy University of Baptist, USA" },
    { label: "Recognition", value: "6+ international bodies" },
    { label: "Doctoral Pathways", value: "PhD · DBA · Honorary" },
    { label: "Career Break Needed", value: "None" },
  ],

  // ── ACCREDITATION (curated — credible bodies only) ──
  accreditation: [
    { name: "French Ministry of National Education", note: "Authorised as a private distance education institution under the Ministry of National Education, Higher Education, Research and Innovation." },
    { name: "AUAP", note: "Accredited by the Association of Universities of Asia and the Pacific." },
    { name: "QAHE", note: "Accredited by the International Association for Quality Assurance in Higher Education." },
    { name: "ECLBS", note: "Registered member of the European Council of Leading Business Schools." },
    { name: "UN DESA", note: "Listed in the database of the United Nations Department of Economic and Social Affairs." },
    { name: "Florida Dept. of Education", note: "Verified with the Florida Department of Education Commission for Independent Education." },
  ],
  accreditationNote:
    "Recognition and its meaning vary by jurisdiction. Your advisor confirms exactly what Kennedy's recognition means for your country before any application begins.",

  // programs offered (slugs into lib/programs.js) — certifications excluded here
  programSlugs: ["dba", "phd", "honorary-doctorate", "masters", "honorary-professorship", "bachelors"],

  // certifications only shown for ESDST + EU Global — Kennedy: false
  offersCertifications: false,

  // ── ADMISSION STEPS ──
  admissionSteps: [
    { title: "Eligibility Review", desc: "A candid first conversation. We assess your profile against Kennedy's criteria — and tell you plainly whether it fits, at no cost." },
    { title: "Programme & Pathway Match", desc: "Your advisor recommends the right pathway — PhD, DBA, or Honorary — based on your record, goals, and the recognition you need." },
    { title: "Application & Documents", desc: "We format your portfolio to Kennedy's standards, gather references, and pre-empt committee questions before submitting." },
    { title: "Committee Review", desc: "Kennedy's academic committee independently evaluates your application. We stay in contact throughout and keep you informed at every stage." },
    { title: "Conferral & Enrolment", desc: "On approval, your credential is prepared and issued — with the option of an in-person ceremony or official dispatch." },
  ],

  // ── FAQ (10 premium, Kennedy-specific) ──
  faqs: [
    { q: "Is a degree from Kennedy University genuinely recognised?", a: "Yes. Kennedy holds recognition from multiple international bodies — including the French Ministry of National Education, AUAP, QAHE, and ECLBS. What that recognition means depends on your country, and your advisor confirms exactly how it applies to your situation before you commit to anything." },
    { q: "Can I use the title 'Dr.' after completing a doctorate here?", a: "Yes. On conferral of an earned doctorate (PhD or DBA), or an Honorary Doctorate, you are entitled to use the prefix 'Dr.' in professional and social contexts — on business cards, email signatures, and official documents." },
    { q: "How is this different from simply buying a degree online?", a: "We do not sell degrees, and neither does Kennedy. Every application is independently evaluated by Kennedy's academic committee against genuine criteria. Techversity's role is advisory — we guide qualified candidates through a real process. If your profile doesn't meet the standard, we'll tell you honestly." },
    { q: "Do I need to pause my career or relocate?", a: "No. Kennedy is delivered entirely online, with no residency requirement. The programmes are built specifically for working professionals who intend to keep their careers moving while they study." },
    { q: "How long does a doctorate at Kennedy take?", a: "It depends on the pathway. An Honorary Doctorate typically takes four to six months. A DBA runs eighteen to thirty-six months, and a PhD twenty-four to forty-eight — the exact timeline depends on your prior preparation and the pace you set." },
    { q: "What are the entry requirements?", a: "For a PhD or DBA, a Master's degree and relevant professional experience are the standard baseline. An Honorary Doctorate is assessed on sustained achievement and measurable contribution rather than prior qualifications. Your advisor reviews your specific profile at the first stage." },
    { q: "What does Techversity's advisory fee cover?", a: "It covers eligibility review, pathway matching, portfolio preparation, application shepherding, and coordination through to conferral. Fees vary by programme and are shared transparently up front — there are no hidden costs." },
    { q: "What happens if my application isn't approved?", a: "Careful pre-screening keeps this rare. If Kennedy's committee does decline, we work with you to strengthen and resubmit the application, or introduce you to an alternative accredited partner where eligible — and our fair-outcome terms apply." },
    { q: "Will my degree be verifiable by an employer or third party?", a: "Yes. Every credential conferred through Kennedy comes with an official certificate, a transcript, and a verifiable digital record. Techversity also provides an independent verification page for any third party to confirm authenticity." },
    { q: "Can I speak to someone before deciding anything?", a: "Absolutely — and we encourage it. The first conversation is exploratory, free, and carries no obligation. We would rather tell you honestly whether this is right for you than push you toward a decision that isn't." },
  ],

  // final CTA line
  ctaLine: "Kennedy opens the door. Techversity walks you through it.",
};

export default kennedyUniversity;