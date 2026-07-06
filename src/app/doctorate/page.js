import DoctorateHero from "@/components/doctorate/DoctorateHero";
import DoctorateComparison from "@/components/doctorate/DoctorateComparison";
import DoctoratePathCards from "@/components/doctorate/DoctoratePathCards";
import DoctorateUniversities from "@/components/doctorate/DoctorateUniversities";
import DoctorateEligibilityCTA from "@/components/doctorate/DoctorateEligibilityCTA";
import Testimonials from "@/components/home/Testimonials";
import ProgramFaq from "@/components/program-detail/ProgramFaq";
import DoctorateFinalCTA from "@/components/doctorate/DoctorateFinalCTA";

export const metadata = {
  title: "Doctorate Programs — PhD, DBA & Honorary Recognition | Techversity.ai",
  description:
    "Explore PhD, DBA, Honorary Doctorate, and Honorary Professorship pathways through Techversity's accredited university partners — compared side by side, with transparent recognition and verified accreditation.",
};

const doctorateFaqs = {
  faqs: [
    { q: "Are these doctoral programs accredited?", a: "Every doctoral pathway on Techversity is delivered through independently accredited partner universities. Each university's accreditation is documented on its own detail page — review it before you apply, not after." },
    { q: "What's the real difference between a PhD and a DBA?", a: "A PhD is a research doctorate aimed at creating new academic knowledge — built for aspiring academics and researchers. A DBA is a practitioner's doctorate, built around applied research that solves a real problem inside your own organisation — designed for senior executives who want doctoral credibility without stepping out of their career." },
    { q: "Is an Honorary Doctorate legally the same as an earned PhD or DBA?", a: "No, and we say this plainly rather than let it slide. An Honorary Doctorate is a conferred recognition of achievement, not an earned academic degree — it does not certify that you completed doctoral-level research or coursework, and should not be presented as equivalent to a PhD or DBA for employment or licensing purposes." },
    { q: "Can I use the title 'Dr.' or 'Professor' afterwards?", a: "Yes, in all four pathways, recipients may use the relevant title — 'Dr.' for PhD, DBA, and Honorary Doctorate, or 'Prof.' for Honorary Professorship — in professional and academic settings, consistent with the conferring institution's guidelines." },
    { q: "Is a dissertation required for every pathway?", a: "PhD and DBA candidates complete a full research process culminating in a defended dissertation or applied research project. Honorary Doctorate and Honorary Professorship are conferred recognitions and do not involve coursework or a dissertation — this is precisely what distinguishes 'earned' from 'conferred.'" },
    { q: "How do I know which pathway fits my background?", a: "It depends on your career stage, professional record, and what you want the credential to do for you next — not on which sounds more prestigious. The eligibility check reviews your specific profile and gives you an honest recommendation, in a few minutes, at no cost." },
    { q: "How long does each pathway take?", a: "PhD typically runs 24–48 months, DBA 18–36 months, and Honorary Doctorate or Honorary Professorship 6–12 months — since the latter two are conferred rather than earned through coursework and research." },
    { q: "Can I pursue any of these while working full-time?", a: "Yes. PhD and DBA pathways are structured around your existing career — coursework, supervision, and research work happen online, evenings and weekends. Honorary recognitions require no ongoing time commitment at all beyond the review and conferment process." },
  ],
};

export default function DoctorateHubPage() {
  return (
    <main>
      <DoctorateHero />
      <DoctorateComparison />
      <DoctoratePathCards />
      <DoctorateUniversities />
      <DoctorateEligibilityCTA />
      <Testimonials />
      <ProgramFaq p={doctorateFaqs} />
      <DoctorateFinalCTA />
    </main>
  );
}