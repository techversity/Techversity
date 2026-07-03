import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { doctorateTypes, doctorateProcess, doctorateFaqs } from "@/lib/doctorate";

export function generateStaticParams() {
  return doctorateTypes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = doctorateTypes.find((d) => d.slug === slug);
  if (!t) return {};
  return {
    title: `${t.name} (${t.latin}) — Techversity.ai`,
    description: t.tagline,
  };
}

export default async function DoctorateTypePage({ params }) {
  const { slug } = await params;
  const t = doctorateTypes.find((d) => d.slug === slug);
  if (!t) return notFound();

  const stats = t.stats || [];
  const traits = t.traits || [];
  const phases = t.structurePhases || [];
  const docs = t.requiredDocs || [];
  const faqs = t.customFaqs || doctorateFaqs;
  const process = doctorateProcess;

  return (
    <main className="bg-ivory">

      {/* ═══ HERO — full-bleed editorial ═══ */}
      <section className="relative h-[92vh] min-h-[680px] max-h-[860px] overflow-hidden bg-wine">
        <Image
          src={t.heroImage || t.image}
          alt={t.name}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,30,0.78) 0%, rgba(11,18,30,0.35) 32%, rgba(11,18,30,0.55) 68%, rgba(11,18,30,0.97) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,18,30,0.55) 0%, rgba(11,18,30,0.05) 45%, transparent 70%)" }} />

        <div className="relative h-full flex flex-col">
          <div className="max-w-[1320px] w-full mx-auto px-6 lg:px-10 pt-7 lg:pt-9 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/45">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/doctorate" className="hover:text-white/80 transition-colors">Doctorate</Link>
            <span>/</span>
            <span className="text-gold">{t.name}</span>
          </div>

          <div className="mt-auto max-w-[1320px] w-full mx-auto px-6 lg:px-10 pb-12 lg:pb-16">
            <p className="font-mono text-[11px] uppercase tracking-[4px] text-gold mb-6">{t.latin}</p>
            <h1 className="font-display font-semibold text-[52px] sm:text-[72px] lg:text-[96px] text-white leading-[0.96] mb-8 max-w-4xl">
              {t.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-gold">{t.name.split(" ").slice(-1)}</span>.
            </h1>
            <p className="text-white/70 text-[17px] lg:text-[19px] leading-relaxed max-w-xl mb-10 font-light">
              {t.tagline}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {t.meta.map((m) => (
                <span key={m} className="font-mono text-[9px] uppercase tracking-wide text-white/75 bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
                  {m}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/apply/eligibility-check"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-wine bg-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C9A04A]"
                style={{ boxShadow: "0 14px 36px rgba(154,115,32,0.4)" }}
              >
                Check Your Eligibility →
              </Link>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>

        {stats[0] && (
          <div className="hidden lg:block absolute top-9 right-10 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-2xl">
            <div className="font-display font-bold text-[32px] text-gold leading-none">{stats[0].val}</div>
            <div className="font-mono text-[8.5px] uppercase tracking-wider text-mist mt-1.5">{stats[0].label}</div>
          </div>
        )}
      </section>

      {stats.length > 0 && (
        <div className="bg-wine relative">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }}
          />
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 relative">
            {stats.map((s) => (
              <div key={s.label} className="py-9 px-4 lg:px-8 text-center lg:text-left">
                <div className="font-display font-bold text-[34px] text-gold leading-none mb-2">{s.val}</div>
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══ THE RECOGNITION — compact editorial, image + text ═══ */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-10">The Recognition</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
            <Reveal direction="left">
              <div className="relative w-full aspect-[4/5] lg:aspect-[5/6] rounded-[14px] overflow-hidden group" style={{ boxShadow: "0 18px 50px rgba(22,38,61,0.14)" }}>
                <Image
                  src={t.introImage || t.image}
                  alt={`${t.name} — recognition`}
                  fill
                  sizes="540px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[14px]" />
              </div>
            </Reveal>

            <div>
              <Reveal delay={100}>
                <p className="text-[16px] lg:text-[18px] text-ink leading-[1.75] mb-10">
                  {t.longOverview || t.overview}
                </p>
              </Reveal>

              {stats.length > 0 && (
                <Reveal delay={180}>
                  <div className="pt-8 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
                    {stats.map((s) => (
                      <div key={s.label} className="group cursor-default">
                        <div className="font-mono text-[9.5px] uppercase tracking-wider text-mist mb-2 group-hover:text-gold transition-colors duration-300">
                          {s.label}
                        </div>
                        <div className="font-display font-semibold text-[26px] lg:text-[30px] text-wine leading-none transition-transform duration-300 group-hover:-translate-y-0.5">
                          {s.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO IS CONSIDERED ═══ */}
      {traits.length > 0 && (
        <section className="bg-ivory">
          <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20 border-b border-line pb-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Consideration</p>
                  <h2 className="font-display font-semibold text-[32px] lg:text-[48px] text-wine leading-[1.08]">
                    Who is considered.
                  </h2>
                </div>
                <p className="text-[15px] text-slate leading-relaxed max-w-xs">
                  The record should be legible before the conversation begins.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
              {traits.map((tr, i) => (
                <Reveal key={tr.n} delay={i * 50}>
                  <div className={`flex items-start gap-6 py-7 px-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-wine-pale hover:px-6 group ${i < traits.length - 2 ? "border-b border-line" : ""}`}>
                    <span className="font-display font-semibold text-[22px] text-gold/50 leading-none w-10 shrink-0 pt-0.5 transition-colors duration-300 group-hover:text-gold">
                      {tr.n}
                    </span>
                    <p className="text-[16px] lg:text-[17px] text-ink leading-relaxed font-display">{tr.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ HOW WE PROCEED — connected timeline ═══ */}
      <section id="process" className="relative bg-wine overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }}
        />
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-20 lg:py-32 relative">
          <Reveal>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">The Process</p>
              <h2 className="font-display font-semibold text-[32px] lg:text-[48px] text-white leading-[1.08]">
                How we <span className="italic text-gold">proceed.</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-14">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 70}>
                  <div className="relative group cursor-default">
                    <div
                      className="relative z-10 w-[52px] h-[52px] rounded-full bg-wine border border-gold/40 flex items-center justify-center mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10"
                      style={{ boxShadow: "0 0 0 0 rgba(154,115,32,0)" }}
                    >
                      <span className="font-display font-semibold text-[18px] text-gold">{p.n}</span>
                    </div>
                    <h3 className="font-display font-semibold text-[19px] lg:text-[21px] text-white mb-2.5 transition-colors duration-300 group-hover:text-gold">{p.verb}</h3>
                    <p className="text-[13.5px] text-white/50 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAM STRUCTURE — card grid ═══ */}
      {phases.length > 0 && (
        <section className="bg-ivory">
          <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
            <Reveal>
              <div className="mb-14 lg:mb-16">
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Structure</p>
                <h2 className="font-display font-semibold text-[32px] lg:text-[48px] text-wine leading-[1.08] mb-4">
                  Program structure.
                </h2>
                <p className="font-display italic text-[16px] lg:text-[18px] text-slate leading-relaxed max-w-2xl">
                  A structured evaluation, designed to thoroughly assess and document a career's contribution — {t.duration} from first conversation to conferment.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {phases.map((ph, i) => (
                <Reveal key={ph.n} delay={i * 80}>
                  <div className="h-full bg-white border border-line rounded-[16px] p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40" style={{ boxShadow: "0 4px 18px rgba(22,38,61,0.05)" }}>
                    <div className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-wider text-gold mb-5">
                      <span>{ph.n}</span>
                      <span className="text-line">·</span>
                      <span className="text-mist">{ph.time}</span>
                    </div>
                    <h3 className="font-display font-semibold text-[22px] lg:text-[25px] text-wine leading-snug mb-6 pb-6 border-b border-line">
                      {ph.title}.
                    </h3>
                    <ul className="flex flex-col gap-3.5">
                      {ph.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-[14px] lg:text-[14.5px] text-slate leading-relaxed">
                          <span className="text-gold/70 shrink-0">—</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ REQUIRED DOCUMENTS ═══ */}
      {docs.length > 0 && (
        <section className="relative bg-wine overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }}
          />
          <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-20 lg:py-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20 items-start">
              <Reveal direction="left">
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Required</p>
                <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-white leading-[1.08] mb-6">
                  What we will ask for.
                </h2>
                <p className="text-[15px] text-white/55 leading-relaxed max-w-xs">
                  Nothing here is unusual for a professional of your record — most candidates assemble this within a week, with an advisor's help.
                </p>
              </Reveal>
              <Reveal direction="right" delay={100}>
                <div className="border-t border-white/15">
                  {docs.map((d, i) => (
                    <div key={d} className="grid grid-cols-[56px_1fr] gap-2 py-6 px-3 -mx-3 border-b border-white/15 group transition-all duration-300 hover:bg-white/[0.04] hover:px-5 rounded-lg cursor-default">
                      <span className="font-display font-semibold text-[26px] text-gold/40 leading-none transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[15.5px] lg:text-[16.5px] text-white/85 leading-relaxed font-display pt-0.5 transition-colors duration-300 group-hover:text-white">{d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQ ═══ */}
      <section className="bg-ivory">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <Reveal>
            <div className="mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Voices</p>
              <h2 className="font-display font-semibold text-[32px] lg:text-[48px] text-wine leading-[1.08]">
                Questions we are asked.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion items={faqs} accent={t.accent} />
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA — full-bleed image close ═══ */}
      <section className="relative h-[480px] lg:h-[560px] overflow-hidden bg-wine">
        <Image
          src={t.introImage || t.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,30,0.92) 0%, rgba(11,18,30,0.75) 50%, rgba(11,18,30,0.92) 100%)" }} />
        <div className="relative h-full flex items-center">
          <div className="max-w-[1180px] w-full mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">Begin</p>
              <h2 className="font-display font-semibold text-[34px] lg:text-[46px] text-white leading-[1.1] mb-5">
                Let's review your record — <span className="italic text-gold">candidly.</span>
              </h2>
              <p className="text-white/60 text-[15px] lg:text-[16px] leading-relaxed max-w-lg">
                The first conversation costs nothing and commits you to nothing. We'll tell you plainly whether the time is right.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/apply/eligibility-check"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-wine bg-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C9A04A]"
                  style={{ boxShadow: "0 14px 36px rgba(154,115,32,0.4)" }}
                >
                  Check Your Eligibility →
                </Link>
                <Link
                  href="/doctorate"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
                >
                  Compare Pathways
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}