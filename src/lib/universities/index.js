import kennedyDetail from "./kennedy-university";
import euGlobalDetail from "./eu-global";
import americanManagementDetail from "./american-management-university";
import esdstDetail from "./esdst";
import ccuDetail from "./christian-central-university";
import sbsDetail from "./sbs-swiss-business-school";
import prowessDetail from "./prowess-university";
import euroAsianDetail from "./euro-asian-university";
import ssmDetail from "./ssm";
import floridaCoastalDetail from "./florida-coastal";

const details = {
  "kennedy-university": kennedyDetail,
  "eu-global": euGlobalDetail,
  "american-management-university": americanManagementDetail,
  "esdst": esdstDetail,
  "christian-central-university": ccuDetail,
  "sbs-swiss-business-school": sbsDetail,
  "prowess-university": prowessDetail,
  "euro-asian-university": euroAsianDetail,
  "ssm": ssmDetail,
  "florida-coastal-school-of-law": floridaCoastalDetail,
};

const ALL_PROGRAMS = ["dba", "phd", "honorary-doctorate", "masters", "honorary-professorship", "bachelors"];
const NO_PHD = ["dba", "honorary-doctorate", "masters", "honorary-professorship", "bachelors"];
const DBA_ONLY = ["dba", "bachelors"];
const DBA_MASTERS = ["dba", "masters", "bachelors"];
const DBA_HONORARY_PROFESSORSHIP = ["dba", "honorary-doctorate", "honorary-professorship", "bachelors"];

export const universities = [
  {
    slug: "esdst",
    name: "ESDST",
    fullName: "European School of Data Science & Technology",
    country: "Switzerland",
    flag: "🇨🇭",
    founded: 1998,
    mode: "Online + Campus (Face-to-Face)",
    tagline: "A Swiss data science school — AI, machine learning, and big data analytics, eduQua-certified.",
    buildingImage:
      "/images/Universities/ESDST/hero.avif",
    overview:
      "ESDST is a Swiss institution focused on Data Science, Artificial Intelligence, Machine Learning, and Big Data Analytics — eduQua-certified, with programmes concluding in a Capstone Consulting Project rather than classroom exams. A France-based partnership allows ESDST to offer Ministry of Labour France-approved RNCP diplomas at Levels 6 and 7.",
    accreditation: [
      { name: "eduQua (Switzerland)", note: "Certified under eduQua, the Swiss quality label for continuing education and training institutions." },
    ],
    programsOffered: [...DBA_MASTERS, "certifications"],
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of ESDST, supporting applicant review, application shepherding, and enrolment coordination.",
  },
  {
    slug: "kennedy-university",
    name: "Kennedy University",
    fullName: "Kennedy University",
    country: "United States",
    flag: "🇺🇸",
    founded: 1985,
    mode: "Online",
    tagline: "A long-standing partner across all three doctoral pathways.",
    buildingImage:
      "/images/Universities/Kennedy/hero.avif",
    overview:
      "Kennedy University confers both earned doctoral degrees and honorary recognitions to accomplished professionals across business, public service, and the arts. Honorary conferment is portfolio-based, evaluated by an academic committee — without coursework or residency requirements.",
    accreditation: [
      { name: "Institutional accreditation", note: "Accreditation and recognition details are confirmed with your advisor before any application begins, and linked to the issuing body's public register." },
    ],
    programsOffered: ALL_PROGRAMS,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of Kennedy University, supporting portfolio review, application shepherding, and conferment coordination.",
  },
  {
    slug: "eu-global",
    name: "EU Global",
    fullName: "European Global Institute of Innovation & Technology",
    country: "Malta",
    flag: "🇲🇹",
    founded: 2005,
    mode: "Online + Individual Supervision",
    tagline: "EU-based research supervision across business and technology.",
    buildingImage:
      "/images/Universities/EU Global/hero.avif",
    overview:
      "EU Global Institute offers individually supervised doctoral research across business, technology, and social science disciplines. Candidates are matched with a supervisor in their research area and progress at a pace set between candidate and supervisor.",
    accreditation: [
      { name: "EU-recognised institutional status", note: "Recognition varies by jurisdiction and is confirmed with your advisor before enrolment, with a link to the issuing body's public register." },
    ],
    programsOffered: [...NO_PHD, "certifications"],
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of EU Global Institute, supporting proposal development, application shepherding, and supervisor matching.",
  },
  {
    slug: "american-management-university",
    name: "American Management University",
    fullName: "American Management University",
    country: "United States",
    flag: "🇺🇸",
    founded: 1991,
    mode: "Online Cohort",
    tagline: "Executive-focused cohorts for working managers.",
    buildingImage:
      "/images/Universities/American/hero.avif",
    overview:
      "American Management University runs cohort-based doctoral and executive programmes built specifically around the schedules of senior managers and directors, with a peer cohort of similarly senior professionals throughout.",
    accreditation: [
      { name: "Institutional accreditation", note: "Accreditation and recognition details are confirmed with your advisor before any application begins, and linked to the issuing body's public register." },
    ],
    programsOffered: ALL_PROGRAMS,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of American Management University, supporting applicant review and cohort placement.",
  },
  {
    slug: "sbs-swiss-business-school",
    name: "SBS Swiss",
    fullName: "SBS Swiss Business School",
    country: "Switzerland",
    flag: "🇨🇭",
    founded: 1998,
    mode: "Online + Zurich/Malta Campus",
    tagline: "Zurich-founded business school with a global doctoral track.",
    buildingImage:
      "/images/Universities/SBS/hero.avif",
    overview:
      "SBS Swiss Business School, headquartered in Kloten-Zurich since 1998, offers a Doctor of Business Administration accredited both institutionally (Swiss Accreditation Council) and at the programme level (ACBSP) — delivered hybrid at the Zurich campus, dual-accredited with ESC Clermont, or fully online through the Malta campus.",
    accreditation: [
      { name: "Swiss Accreditation Council (HEdA)", note: "Institutional accreditation, confirmed with your advisor and linked to the public accreditation decision before application." },
      { name: "ACBSP", note: "Programme-level accreditation specific to the DBA." },
    ],
    programsOffered: DBA_ONLY,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of SBS Swiss Business School, supporting applicant review and application shepherding.",
  },
  {
    slug: "florida-coastal-school-of-law",
    name: "Florida Coastal",
    fullName: "Florida Coastal University",
    country: "United States",
    flag: "🇺🇸",
    founded: 1996, // TODO
    mode: "100% Online",
    tagline: "A Jacksonville-based online university for working adults — DBA and Master's across business, computer science, and education.",
    buildingImage:
      "/images/Universities/Florida/hero.avif",
    overview:
      "Florida Coastal University, based in Jacksonville, Florida, offers 100% online Bachelor's, Master's, and Doctoral programmes in Business, Computer Science, and Education Leadership. It is provisionally licensed by the Florida Commission for Independent Education — a status Florida Coastal states plainly on its own site.",
    accreditation: [
      { name: "Florida Commission for Independent Education (CIE)", note: "Provisionally licensed — a status the university states directly on its own site, not a full or final licensure. Your advisor confirms what this means for your specific goals before you apply." },
    ],
    programsOffered: DBA_MASTERS,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of Florida Coastal, supporting applicant review and application shepherding.",
  },
  {
    slug: "ssm",
    name: "SSM",
    fullName: "Swiss School of Management",
    country: "Switzerland",
    flag: "🇨🇭",
    founded: 2006, // TODO
    mode: "Online + Geneva/Barcelona/Rome + Global Campuses",
    tagline: "DEAC-accredited business school — DBA publicly, with Honorary Doctorate and Professorship via advisory partnership.",
    buildingImage:
      "/images/Universities/SSM/hero.avif",
    overview:
      "Swiss School of Management (SSM) is a DEAC-accredited business school with campuses across Geneva, Barcelona, Madrid, Rome, Brescia, Cairo, Malta, and the UAE, offering BBA, MBA, EMBA, and DBA publicly. Honorary Doctorate and Professorial Appointment recognition are available through Techversity's specific advisory partnership with SSM.",
    accreditation: [
      { name: "DEAC (USA)", note: "Institutionally accredited by the Distance Education Accrediting Commission — a U.S. Department of Education-recognised national accrediting agency." },
      { name: "Texas Higher Education Coordinating Board", note: "Holds a Certificate of Authorization from the Texas Higher Education Coordinating Board." },
    ],
    programsOffered: DBA_HONORARY_PROFESSORSHIP,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of Swiss School of Management, supporting applicant review and application shepherding.",
  },
  {
    slug: "christian-central-university",
    name: "Christian Central University",
    fullName: "Central Christian University",
    country: "United States",
    flag: "🇺🇸",
    founded: 2005, // corrected — was wrong (2020)
    mode: "Online",
    tagline: "Faith-based university, Orlando — doctoral & executive pathways via advisory partnership.",
    buildingImage:
      "/images/Universities/CCU/hero.avif",
    overview:
      "Central Christian University (CCU) is a Christian faith-based institution founded in 2005 in Orlando, Florida, licensed by the Florida Commission for Independent Education. Its public catalogue centres on Bachelor's and Master's study; doctoral, honorary, and executive pathways are available through Techversity's specific advisory partnership with CCU.",
    accreditation: [
      { name: "Florida Commission for Independent Education", note: "State licensure. Recognition details are confirmed with your advisor before any application begins, and linked to the issuing body's public register." },
    ],
    programsOffered: ALL_PROGRAMS,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of Central Christian University, supporting portfolio review and application shepherding.",
  },
  {
    slug: "euro-asian-university",
    name: "Euro-Asian University",
    fullName: "Euro-Asian University",
    country: "Estonia",
    flag: "🇪🇪",
    founded: 2010, // TODO
    mode: "Online",
    tagline: "An Estonia-registered online institution offering PhD, Honorary Doctorate, and Professorship pathways.",
    buildingImage:
      "/images/Universities/Euro Asian/hero.avif",
    overview:
      "Euro-Asian University is registered in Estonia and delivers Undergraduate, Postgraduate, PhD, Fellowship, Professorship, and Honorary Doctorate pathways entirely online. It describes itself as internationally accredited without naming a specific government-recognised accrediting body — your advisor confirms exactly what recognition applies to your goals before you apply.",
    accreditation: [
      { name: "Estonia registration", note: "Registered in Estonia. The institution describes itself as internationally accredited without citing a specific government-recognised accrediting body. Your advisor helps you verify what matters for your specific goals before any application begins." },
    ],
    programsOffered: ALL_PROGRAMS,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of Euro-Asian University, supporting applicant review and application shepherding.",
  },
  {
    slug: "prowess-university",
    name: "Prowess University",
    fullName: "Prowess University",
    country: "United States",
    flag: "🇺🇸",
    founded: 1993, // TODO
    mode: "Online (School of Open and Distance Learning)",
    tagline: "A Delaware-registered distance-learning institution offering Honorary Doctoral and Professorial recognition.",
    buildingImage:
      "/images/Universities/Prowess/hero.avif",
    overview:
      "Prowess University is a Delaware-registered distance-learning institution (School of Open and Distance Learning), offering Certificate, Undergraduate, Graduate, MBA, Honorary Doctoral, and Professorial Appointment pathways. Its Delaware registration is a business registration, not an educational accreditation — your advisor confirms exactly what recognition applies to your goals before you apply.",
    accreditation: [
      { name: "Delaware business registration", note: "Registered as a Delaware corporation — a business registration, not an educational accreditation. Prowess also lists a range of private, voluntary accreditations on its own site; their recognition value varies by country and is not government-issued. Your advisor helps you verify what matters for your specific goals." },
    ],
    programsOffered: ALL_PROGRAMS,
    partnershipType:
      "Techversity.ai is an authorised enrolment advisory partner of Prowess University, supporting proposal development and supervisor matching.",
  },
];

export function getUniversityBySlug(slug) {
  return universities.find((u) => u.slug === slug) || null;
}

export function getUniversityDetail(slug) {
  return details[slug] || null;
}

export function getUniversitiesWithDetail() {
  return universities.filter((u) => details[u.slug]);
}

export function getAllUniversitySlugs() {
  return universities.map((u) => u.slug);
}

export function getUniversitiesByProgram(programSlug) {
  return universities.filter((u) => u.programsOffered.includes(programSlug));
}