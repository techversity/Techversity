import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications as certs } from "@/lib/certifications";
import curriculum from "@/lib/curriculum/index";
import CurriculumInteractive from "@/components/curriculum/CurriculumInteractive";
import CurriculumHero from "@/components/curriculum/CurriculumHero";
import HighlightsMarquee from "@/components/curriculum/HighlightsMarquee";
import JourneyTimeline from "@/components/curriculum/JourneyTimeline";
import Reveal from "@/components/ui/Reveal";

const slugOf = (c) => c.href.split("/").filter(Boolean).pop();

export function generateStaticParams() {
  return certs.map((c) => ({ slug: slugOf(c) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cert = certs.find((c) => slugOf(c) === slug);
  if (!cert) return { title: "Curriculum — Techversity.ai" };
  return {
    title: `${cert.title} Certification Curriculum — Techversity.ai`,
    description: `${cert.desc} ${cert.duration} · University-awarded certification, guided end-to-end by Techversity.`,
  };
}

const Icon = ({ name, color = "currentColor", size = 22 }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    check: <><polyline points="20 6 9 17 4 12" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    award: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></>,
  };
  return <svg {...p}>{paths[name] || paths.award}</svg>;
};

export default async function CurriculumPage({ params }) {
  const { slug } = await params;
  const cert = certs.find((c) => slugOf(c) === slug);
  if (!cert) return notFound();

  const data = curriculum[slug] || {
    tagline: cert.desc, overview: cert.desc,
    heroStats: cert.stats?.map(s => ({ val: s.val, unit: s.unit, label: s.label })) || [],
    highlights: [], journey: [],
    modules: [{ n: 1, title: "Core Curriculum", weeks: cert.duration, courses: cert.skills, skills: cert.skills }],
    tools: [], capstone: null, outcomes: cert.included || [], learningJourney: [], forWhom: [], compare: null, faqs: [],
  };

  const accent = cert.accent;
  const enrollHref = `/certifications/enroll/${slug}`;

  return (
    <main className="bg-ivory">

      {/* HERO (client, sliding images) */}
      <CurriculumHero cert={cert} data={data} accent={accent} enrollHref={enrollHref} />

      {/* HERO STATS STRIP */}
      {data.heroStats?.length > 0 && (
        <div className="bg-wine relative">
          <div className="max-w-[1180px] mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {data.heroStats.map((s) => (
              <div key={s.label} className="py-8 px-4 lg:px-7 text-center lg:text-left">
                <p className="font-display font-bold text-[30px] lg:text-[34px] leading-none" style={{ color: accent }}>
                  {s.val}<span className="text-[15px] ml-0.5 text-white/50">{s.unit}</span>
                </p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-white/50 mt-2.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* OVERVIEW + quick facts */}
      <section id="overview" className="scroll-mt-24 max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
          <Reveal direction="up">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-4" style={{ color: accent }}>Program Overview</p>
              <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-wine leading-[1.15] mb-6">{data.tagline}</h2>
              <p className="text-slate text-[15px] lg:text-[16px] leading-[1.9]">{data.overview}</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <div className="rounded-2xl border border-line bg-white p-7 lg:sticky lg:top-24">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-5">At a glance</p>
              <dl className="space-y-4">
                {[["Duration", cert.duration], ["Level", cert.level], ["Format", "Live · Online"], ["Awarded by", "University partner"], ["Career support", "Included"]].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 pb-4 border-b border-line last:border-0 last:pb-0">
                    <dt className="font-mono text-[10px] uppercase tracking-wide text-mist">{k}</dt>
                    <dd className="text-[13.5px] font-semibold text-wine text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link href={enrollHref} className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-[13.5px] text-white transition-transform hover:-translate-y-0.5" style={{ background: accent }}>
                Apply Now <Icon name="arrow" size={14} color="#fff" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY NOW */}
      {data.whyNow && (
        <section className="bg-wine relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: accent }} />
          <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="up">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[3px] mb-4" style={{ color: accent }}>Why This, Why Now</p>
                  <h2 className="font-display font-semibold text-[30px] lg:text-[42px] text-white leading-[1.1] mb-5">{data.whyNow.heading}</h2>
                  <p className="text-white/65 text-[15px] lg:text-[16px] leading-[1.85]">{data.whyNow.body}</p>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-4">
                {data.whyNow.stats.map((st, i) => (
                  <Reveal key={st.label} direction="up" delay={i * 90}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full">
                      <p className="font-display font-bold text-[30px] lg:text-[36px] leading-none text-white">{st.val}<span className="text-[16px]" style={{ color: accent }}>{st.unit}</span></p>
                      <p className="text-white/55 text-[12px] leading-snug mt-3">{st.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HIGHLIGHTS (client marquee w/ image slide) */}
      {data.highlights?.length > 0 && <HighlightsMarquee highlights={data.highlights} accent={accent} />}

      {/* JOURNEY (serpentine) */}
      {data.journey?.length > 0 && (
        <JourneyTimeline journey={data.journey} accent={accent} weeksLabel={cert.duration} />
      )}

      {/* CURRICULUM MODULES + tabs */}
      <div id="curriculum" className="scroll-mt-24">
        <CurriculumInteractive data={data} cert={cert} accent={accent} enrollHref={enrollHref} />
      </div>

      {/* TOOLS */}
      {data.tools?.length > 0 && (
        <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Tools You'll Master</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">{data.tools.length}+ industry-standard tools.</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {data.tools.map((t, i) => (
              <Reveal key={t} direction="up" delay={i < 12 ? i * 35 : 0}>
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-line bg-white text-[13.5px] font-medium text-wine transition-all duration-200 hover:-translate-y-0.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />{t}
                </span>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.projects?.length > 0 && (
        <section id="projects" className="scroll-mt-24 bg-white border-y border-line">
          <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <Reveal direction="up">
              <div className="max-w-2xl mb-12">
                <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Industry Projects</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight mb-3">
                  {data.projects.length}+ projects on real datasets.
                </h2>
                <p className="text-slate text-[14px]">Every project is built on real, publicly available data — the portfolio that gets you shortlisted.</p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.projects.map((p, i) => (
                <Reveal key={p.title} direction="up" delay={(i % 3) * 80}>
                  <div className="group relative rounded-2xl border border-line bg-ivory p-6 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(22,38,61,0.1)]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-md" style={{ background: `${accent}14`, color: accent }}>Project {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display font-semibold text-[17px] text-wine leading-snug mb-2">{p.title}</h3>
                    <p className="text-slate text-[13.5px] leading-relaxed">{p.desc}</p>
                    <span className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: accent }} />
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-mist text-[11px] mt-6">Projects are built on real publicly available datasets and are indicative; they may evolve as the curriculum updates.</p>
          </div>
        </section>
      )}

      {/* SKILLS COVERED */}
      {data.skillsCovered?.length > 0 && (
        <section id="skills" className="scroll-mt-24 max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Skills You'll Cover</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">
                {data.skillsCovered.length}+ job-ready skills.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-1">
            {data.skillsCovered.map((sk, i) => (
              <Reveal key={sk} direction="up" delay={i < 9 ? (i % 3) * 50 : 0}>
                <div className="flex items-center gap-3 py-3 border-b border-line">
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${accent}18` }}>
                    <Icon name="check" size={12} color={accent} />
                  </span>
                  <span className="text-wine text-[14px]">{sk}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CAPSTONE */}
      {data.capstone && (
        <section className="bg-white border-y border-line">
          <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <div className="rounded-3xl bg-wine relative overflow-hidden p-8 lg:p-14">
              <div className="absolute -bottom-24 -left-16 w-[380px] h-[380px] rounded-full blur-[110px] opacity-25 pointer-events-none" style={{ background: accent }} />
              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <Reveal direction="up">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[3px] mb-4" style={{ color: accent }}>The Capstone</p>
                    <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-white leading-tight mb-5">{data.capstone.title}</h2>
                    <p className="text-white/70 text-[15px] leading-relaxed">{data.capstone.desc}</p>
                  </div>
                </Reveal>
                <div className="space-y-3">
                  {data.capstone.points.map((pt, i) => (
                    <Reveal key={i} direction="left" delay={i * 80}>
                      <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-4">
                        <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: accent }}><Icon name="check" size={12} color="#fff" /></span>
                        <p className="text-white/85 text-[14px] leading-snug">{pt}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OUTCOMES */}
      {data.outcomes?.length > 0 && (
        <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>What You'll Walk Away With</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">Skills that show up in interviews.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {data.outcomes.map((o, i) => (
              <Reveal key={i} direction="up" delay={i < 6 ? i * 60 : 0}>
                <div className="flex items-start gap-3 py-3 border-b border-line">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${accent}18` }}><Icon name="check" size={12} color={accent} /></span>
                  <p className="text-wine text-[14.5px] leading-snug">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* WHO IS THIS FOR */}
      {data.forWhom?.length > 0 && (
        <section className="bg-white border-y border-line">
          <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <Reveal direction="up">
              <div className="max-w-2xl mb-12">
                <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Who This Is For</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">Built for where you're headed.</h2>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.forWhom.map((f, i) => (
                <Reveal key={f.title} direction="up" delay={i * 80}>
                  <div className="group rounded-2xl border border-line overflow-hidden bg-ivory h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(22,38,61,0.1)]">
                    {f.img && (
                      <div className="relative h-40 overflow-hidden">
                        <Image src={f.img} alt={f.title} fill sizes="300px" className="object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(11,18,30,.72))" }} />
                        <h3 className="absolute bottom-4 left-4 right-4 font-display font-semibold text-[18px] text-white leading-tight">{f.title}</h3>
                      </div>
                    )}
                    <p className="p-5 text-slate text-[13.5px] leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPARE */}
      {data.compare && (
        <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>The Techversity Difference</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">Not another video course.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal direction="up">
              <div className="rounded-2xl border-2 p-7 h-full" style={{ borderColor: `${accent}44`, background: `${accent}08` }}>
                <p className="font-display font-semibold text-[19px] text-wine mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: accent }}><Icon name="check" size={13} color="#fff" /></span>With Techversity
                </p>
                <ul className="space-y-3">
                  {data.compare.ours.map((o) => (<li key={o} className="flex items-start gap-3 text-[14px] text-wine"><Icon name="check" size={15} color={accent} />{o}</li>))}
                </ul>
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <div className="rounded-2xl border border-line bg-white p-7 h-full">
                <p className="font-display font-semibold text-[19px] text-mist mb-5">Typical online courses</p>
                <ul className="space-y-3">
                  {data.compare.others.map((o) => (<li key={o} className="flex items-start gap-3 text-[14px] text-mist"><span className="shrink-0 mt-1 w-3.5 h-0.5 bg-mist/50 rounded-full" />{o}</li>))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* UNIVERSITY / PROVIDER */}
      {data.university && (
        <section className="bg-wine relative overflow-hidden">
          <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <Reveal direction="up">
              <div className="max-w-2xl mb-12">
                <p className="font-mono text-[10px] uppercase tracking-[3px] mb-4" style={{ color: accent }}>Awarded By Our University Partners</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-white leading-tight mb-4">A credential that carries weight.</h2>
                <p className="text-white/65 text-[15px] leading-relaxed">{data.university.intro}</p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {data.university.partners.map((u, i) => (
                <Reveal key={u.name} direction="up" delay={i * 100}>
                  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden h-full transition-all duration-300 hover:border-white/25">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={u.img} alt={u.name} fill sizes="560px" className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(11,18,30,.4),rgba(11,18,30,.9))" }} />
                      <div className="absolute bottom-4 left-5 right-5">
                        <div className="flex items-center gap-2 mb-1"><Icon name="building" size={15} color={accent} /><span className="font-mono text-[9px] uppercase tracking-wide text-white/60">{u.country}</span></div>
                        <h3 className="font-display font-semibold text-[22px] text-white leading-none">{u.name}</h3>
                      </div>
                    </div>
                    <p className="p-5 text-white/60 text-[13.5px] leading-relaxed">{u.blurb}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal direction="up">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="shrink-0 mt-0.5"><Icon name="award" size={18} color={accent} /></span>
                <p className="text-white/70 text-[13.5px] leading-relaxed">{data.university.note}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* PRICING */}
      {data.pricing && (
        <section id="pricing" className="scroll-mt-24 max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Fee & Financing</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">One transparent fee. Everything included.</h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[400px_1fr] gap-6">
            <Reveal direction="up">
              <div className="relative rounded-3xl bg-wine overflow-hidden p-8 lg:p-10 h-full">
                <div className="absolute -top-20 -right-16 w-[280px] h-[280px] rounded-full blur-[90px] opacity-30 pointer-events-none" style={{ background: accent }} />
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[2px] text-white/50 mb-3">Total Program Fee</p>
                  <p className="font-display font-bold text-white leading-none mb-2"><span className="text-[28px] align-top">{data.pricing.currency === "USD" ? "$" : "₹"}</span><span className="text-[54px]">{data.pricing.total}</span></p>
                  {(data.pricing.discount || data.pricing.strike) && (
                    <p className="flex items-center gap-2 mb-2">
                      {data.pricing.discount && <span className="font-mono text-[11px] px-2 py-0.5 rounded-md font-semibold" style={{ background: accent, color: "#16263D" }}>{data.pricing.discount}</span>}
                      {data.pricing.strike && <span className="text-white/40 text-[15px] line-through">{data.pricing.currency === "USD" ? "$" : "₹"}{data.pricing.strike}</span>}
                    </p>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-wide text-white/40 mb-8">Inclusive of taxes</p>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 mb-4">
                    <p className="text-white/50 text-[11px] font-mono uppercase tracking-wide mb-1">Pay in installments, as low as</p>
                    <p className="font-display font-bold text-[26px] text-white">{data.pricing.currency === "USD" ? "$" : "₹"}{data.pricing.emi}<span className="text-[13px] text-white/50 font-sans font-normal">/month</span></p>
                  </div>
                  {data.pricing.seat && (
                    <div className="flex items-center gap-2 mb-6 text-white/70 text-[12.5px]">
                      <Icon name="check" size={13} color={accent} />
                      Reserve your seat — pay {data.pricing.currency === "USD" ? "$" : "₹"}{data.pricing.seat} to block it
                    </div>
                  )}
                  <Link href={enrollHref} className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5" style={{ background: accent, boxShadow: `0 14px 36px ${accent}55` }}>
                    Apply Now <Icon name="arrow" size={14} color="#16263D" />
                  </Link>
                  <p className="text-white/40 text-[11px] leading-relaxed mt-4">{data.pricing.note}</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <div className="rounded-3xl border border-line bg-white p-8 lg:p-10 h-full">
                <p className="font-display font-semibold text-[20px] text-wine mb-6">What your fee includes</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {data.pricing.includes.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${accent}18` }}><Icon name="check" size={12} color={accent} /></span>
                      <span className="text-[14px] text-slate leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-line flex flex-wrap items-center gap-x-8 gap-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-mist">Financing partners</p>
                  <div className="flex flex-wrap gap-4 text-wine font-semibold text-[15px]"><span>ShopSe</span><span>Propelld</span><span>Fibe</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* APPLICATION PROCESS */}
      {data.applicationProcess?.length > 0 && (
        <section className="bg-white border-y border-line">
          <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <Reveal direction="up">
              <div className="max-w-2xl mb-12">
                <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>How To Apply</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight mb-3">
                  Three simple steps to enrol.
                </h2>
                <p className="text-slate text-[14px]">We review applications on a rolling basis — qualified candidates receive an admission offer.</p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {data.applicationProcess.map((a, i) => (
                <Reveal key={a.step} direction="up" delay={i * 90}>
                  <div className="relative rounded-2xl border border-line bg-ivory p-7 h-full">
                    <span className="font-display font-bold text-[44px] leading-none" style={{ color: `${accent}33` }}>{a.step}</span>
                    <h3 className="font-display font-semibold text-[19px] text-wine mt-3 mb-2">{a.title}</h3>
                    <p className="text-slate text-[13.5px] leading-relaxed">{a.desc}</p>
                    {i < data.applicationProcess.length - 1 && (
                      <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-white border border-line items-center justify-center text-mist z-10" style={{ display: "flex" }}>
                        <Icon name="arrow" size={12} color={accent} />
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BATCH PROFILE */}
      {data.batchProfile && (
        <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Your Cohort</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight mb-3">
                Who you'll learn alongside.
              </h2>
              <p className="text-slate text-[14px]">{data.batchProfile.intro}</p>
            </div>
          </Reveal>
          <div className="space-y-4">
            {data.batchProfile.industries.map((ind, i) => (
              <Reveal key={ind.label} direction="up" delay={i * 60}>
                <div className="flex items-center gap-4">
                  <span className="w-44 shrink-0 text-[13.5px] text-wine font-medium">{ind.label}</span>
                  <div className="flex-1 h-2.5 rounded-full bg-line overflow-hidden">
                    <span className="block h-full rounded-full" style={{ width: `${ind.pct}%`, background: accent }} />
                  </div>
                  <span className="w-10 shrink-0 text-right font-mono text-[12px] text-slate">{ind.pct}%</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs?.length > 0 && (
        <section id="faq" className="scroll-mt-24 bg-white border-t border-line">
          <div className="max-w-[860px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <Reveal direction="up">
              <div className="text-center mb-12">
                <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Questions</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">Good to know.</h2>
              </div>
            </Reveal>
            <div className="space-y-3">
              {data.faqs.map((f, i) => (
                <Reveal key={i} direction="up" delay={i < 6 ? i * 50 : 0}>
                  <details className="group rounded-2xl border border-line bg-ivory overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none">
                      <span className="font-display font-semibold text-[16px] lg:text-[17px] text-wine leading-snug">{f.q}</span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-line flex items-center justify-center transition-transform duration-300 group-open:rotate-45" style={{ color: accent }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                      </span>
                    </summary>
                    <p className="px-5 lg:px-6 pb-6 text-slate text-[14px] leading-relaxed">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="bg-wine relative overflow-hidden">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[130px] opacity-20 pointer-events-none" style={{ background: accent }} />
        <div className="relative max-w-[820px] mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
          <Reveal direction="up">
            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-white leading-[1.1] mb-5">Ready to earn your {cert.title} credential?</h2>
            <p className="text-white/65 text-[15px] lg:text-[17px] leading-relaxed mb-10 max-w-lg mx-auto">Talk to an advisor about the next cohort — no obligation, just a straight conversation about whether this is the right fit.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={enrollHref} className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5" style={{ background: accent, boxShadow: `0 14px 36px ${accent}55` }}>
                Apply Now <Icon name="arrow" size={14} color="#16263D" />
              </Link>
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/25 hover:bg-white/10 transition-colors">Talk to an Advisor</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}