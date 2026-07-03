import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import CertHeroShowcase from "@/components/certifications/CertHeroShowcase";
import { certifications } from "@/lib/certifications";

export const metadata = {
  title: "Certifications — Industry-Recognised Programs | Techversity.ai",
  description:
    "Six industry-aligned certification programs — Data Science, Agentic AI, Cybersecurity, Cloud Computing, Data Analytics, Project Management. Career-ready in weeks, globally recognised.",
};

/* ── aggregate stats from lib data ── */
const totalEnrolled = certifications.reduce((sum, c) => {
  const n = parseInt(String(c.stats[1]?.val || "0").replace(/[^\d]/g, ""), 10) || 0;
  return sum + n;
}, 0);
const avgCompletion = Math.round(
  certifications.reduce((sum, c) => sum + parseInt(c.stats[2]?.val || "0", 10), 0) / certifications.length
);

const trustPoints = [
  {
    icon: "target",
    title: "Industry-Aligned Curriculum",
    desc: "Every syllabus is built with practitioners, not just academics — tools and workflows you'll actually use on the job.",
  },
  {
    icon: "compass",
    title: "Career Support Included",
    desc: "1-on-1 advisor, resume review, and interview preparation come standard — not an upsell.",
  },
  {
    icon: "calendar",
    title: "Flexible, Self-Paced Schedule",
    desc: "Built for working professionals — learn around your job, not instead of it.",
  },
  {
    icon: "globe",
    title: "Globally Recognised Certificate",
    desc: "A credential that reads clearly on LinkedIn and in interviews, anywhere in the world.",
  },
];

const TrustIcon = ({ name }) => {
  const p = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#9A7320", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="#9A7320" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></>,
    calendar: <><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M16 2.5v4M8 2.5v4M3 9.5h18" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9s1.3-6.4 3.8-9z" /></>,
  };
  return <svg {...p}>{paths[name]}</svg>;
};

const faqs = [
  {
    q: "Do I need a technical background to enroll?",
    a: "It depends on the certification. Data Analytics and Project Management are built for beginners with no coding background. Data Science, Agentic AI, and Cybersecurity assume basic comfort with computers but not prior coding experience — the first two weeks bring everyone to the same baseline.",
  },
  {
    q: "Is the certificate recognised by employers?",
    a: "Yes. Each certification is designed around real industry tools and workflows, and every graduate receives a verifiable certificate with a unique ID that employers can check through our verification portal.",
  },
  {
    q: "Can a certification count toward a Master's degree later?",
    a: "Select certifications carry credit-eligible modules toward specific Master's pathways with our university partners. Your advisor will confirm which pathway applies once you enroll.",
  },
  {
    q: "What happens if I fall behind the schedule?",
    a: "All programs are self-paced with weekly milestones, not hard deadlines. Your career advisor checks in regularly and can adjust your timeline if work or life gets in the way.",
  },
  {
    q: "How is this different from a free YouTube course?",
    a: "Structure, accountability, and outcomes. You get a fixed curriculum, a dedicated advisor, a capstone or portfolio project, and a certificate — plus interview preparation once you're ready for the job market.",
  },
];

export default function CertificationsHubPage() {
  return (
    <main className="bg-ivory">

      {/* ═══ HERO — full-bleed, matches doctorate ═══ */}
      <CertHeroShowcase certs={certifications} />

      {/* stats bar */}
      <div className="bg-wine relative">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }}
        />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 relative">
          <div className="py-9 px-4 lg:px-8 text-center lg:text-left">
            <div className="font-display font-bold text-[34px] text-gold leading-none mb-2">{certifications.length}</div>
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-white/50">Programs</div>
          </div>
          <div className="py-9 px-4 lg:px-8 text-center lg:text-left">
            <div className="font-display font-bold text-[34px] text-gold leading-none mb-2">{Math.round(totalEnrolled / 100) / 10}K+</div>
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-white/50">Learners Enrolled</div>
          </div>
          <div className="py-9 px-4 lg:px-8 text-center lg:text-left">
            <div className="font-display font-bold text-[34px] text-gold leading-none mb-2">{avgCompletion}%</div>
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-white/50">Avg. Completion</div>
          </div>
          <div className="py-9 px-4 lg:px-8 text-center lg:text-left">
            <div className="font-display font-bold text-[34px] text-gold leading-none mb-2">6–12</div>
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-white/50">Weeks to Finish</div>
          </div>
        </div>
      </div>

      {/* ═══ GRID ═══ */}
      <section id="programs" className="pt-14 lg:pt-20 scroll-mt-20">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-8 mb-9">
          <Reveal direction="up">
            <h2 className="font-display font-semibold text-[26px] lg:text-[30px] text-wine">Explore all programs</h2>
          </Reveal>
        </div>
        <CertificationsGrid certs={certifications} />
      </section>

      {/* ═══ WHY CERTIFY ═══ */}
      <section className="bg-white border-y border-line py-20 lg:py-24">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-8">
          <Reveal direction="up">
            <p className="font-mono text-[11px] uppercase tracking-[3px] text-gold mb-4">Why Techversity</p>
            <h2 className="font-display font-semibold text-[30px] lg:text-[38px] text-wine max-w-[560px] mb-14">
              Certification, without the guesswork
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} direction="up" delay={i * 90}>
                <div className="flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold-light flex items-center justify-center">
                    <TrustIcon name={t.icon} />
                  </div>
                  <h3 className="font-display font-semibold text-[18px] text-wine leading-snug">{t.title}</h3>
                  <p className="text-[13.5px] text-slate leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PATHWAY CROSS-SELL BANNER ═══ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-8">
          <Reveal direction="up">
            <div className="relative rounded-[24px] overflow-hidden bg-wine px-8 py-14 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "linear-gradient(135deg, transparent 45%, #9A7320 45%, #9A7320 55%, transparent 55%)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="relative max-w-[540px]">
                <p className="font-mono text-[10.5px] uppercase tracking-[3px] text-gold mb-4">Beyond the certificate</p>
                <h3 className="font-display font-semibold text-[26px] lg:text-[32px] text-white leading-tight mb-3">
                  Certifications can count toward a Master's degree
                </h3>
                <p className="text-[14px] text-white/65 leading-relaxed">
                  Select programs carry credit-eligible modules toward related Master's pathways with our university
                  partners — talk to an advisor to see if your track qualifies.
                </p>
              </div>
              <Link
                href="/programs"
                className="relative shrink-0 inline-flex items-center gap-2 bg-gold text-white font-semibold text-[14px] px-7 py-3.5 rounded-md hover:bg-gold-deep transition-colors"
              >
                View Degree Pathways <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-[820px] mx-auto px-5 lg:px-8">
          <Reveal direction="up">
            <p className="font-mono text-[11px] uppercase tracking-[3px] text-gold mb-4 text-center">FAQ</p>
            <h2 className="font-display font-semibold text-[28px] lg:text-[34px] text-wine text-center mb-12">
              Common questions
            </h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <FaqAccordion items={faqs} accent="#9A7320" />
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-wine py-20 lg:py-24">
        <div className="max-w-[820px] mx-auto px-5 lg:px-8 text-center">
          <Reveal direction="up">
            <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-white leading-tight mb-5">
              Ready to build a career-ready skillset?
            </h2>
            <p className="text-[15px] text-white/65 leading-relaxed mb-10 max-w-[480px] mx-auto">
              Talk to an advisor about which certification fits your goals — no obligation, just a straight
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply/eligibility-check"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold text-[14px] px-8 py-3.5 rounded-md hover:bg-gold-deep transition-colors"
              >
                Check Your Eligibility <ArrowRight />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-[14px] px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors"
              >
                Talk to an Advisor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}