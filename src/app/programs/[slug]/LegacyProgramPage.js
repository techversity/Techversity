import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

/* ─── SVG icons ─────────────────────────────────────────────────── */
function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function LegacyProgramPage({ prog, d }) {

  const flagUrl = prog.code !== "un"
    ? `https://flagcdn.com/w40/${prog.code}.png`
    : null;

  const categoryLabel = {
    doctorate: "Doctorate",
    masters: "Master's Programme",
    executive: "Executive Education",
    certifications: "Certification",
  }[prog.category] || "Programme";

  /* level accent color — matches existing design */
  const accentGold = "linear-gradient(135deg,#C9A04A,#9A7320)";

  return (
    <main className="bg-ivory">

      {/* ══════════════════════════════════════════════════════════
          HERO — full-bleed image, editorial overlay, floating card
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[86vh] lg:min-h-[92vh] max-h-[960px] overflow-hidden bg-wine">

        {/* background image */}
        <Image
          src={d.heroImage}
          alt={prog.title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        {/* gradient overlays */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,17,28,0.72) 0%, rgba(10,17,28,0.28) 30%, rgba(10,17,28,0.52) 65%, rgba(10,17,28,0.97) 100%)" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(10,17,28,0.60) 0%, rgba(10,17,28,0.08) 50%, transparent 80%)" }}
        />

        {/* dot-grid watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "36px 36px" }}
        />

        {/* content */}
        <div className="relative h-full flex flex-col">

          {/* breadcrumb */}
          <div className="max-w-[1320px] w-full mx-auto px-6 lg:px-10 pt-7 lg:pt-9 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/45">
            <Link href="/" className="hover:text-white/75 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-white/75 transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-gold/90">{prog.title}</span>
          </div>

          {/* hero text — bottom-anchored */}
          <div className="mt-auto max-w-[1320px] w-full mx-auto px-6 lg:px-10 pb-12 lg:pb-16">

            {/* category pill */}
            <div className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-gold">{categoryLabel}</span>
            </div>

            <h1 className="font-display font-semibold text-[44px] sm:text-[62px] lg:text-[82px] text-white leading-[0.96] mb-6 max-w-4xl">
              {prog.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-gold">{prog.title.split(" ").slice(-1)}</span>.
            </h1>

            <p className="text-white/65 text-[16px] lg:text-[18px] leading-relaxed max-w-[520px] mb-10 font-light">
              {d.tagline}
            </p>

            {/* meta pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[prog.duration, prog.mode, prog.level, prog.fee].map((m) => (
                <span key={m}
                  className="font-mono text-[9px] uppercase tracking-wide text-white/75 bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
                  {m}
                </span>
              ))}
              {flagUrl && (
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wide text-white/75 bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
                  <img src={flagUrl} alt={prog.country} className="w-4 h-auto rounded-sm" />
                  {prog.country}
                </span>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/apply/eligibility-check"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-semibold text-[14px] text-wine transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: accentGold, boxShadow: "0 14px 36px rgba(154,115,32,0.4)" }}>
                Check Your Eligibility →
              </Link>
              <a href="https://wa.me/13239168629" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/25 hover:border-white/55 hover:bg-white/[0.06] transition-all duration-200">
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>

        {/* floating quick-facts card — desktop */}
        <div className="hidden lg:block absolute top-24 right-10 bg-white/95 backdrop-blur-sm rounded-2xl p-7 shadow-2xl w-[280px]"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.28)" }}>
          <p className="font-mono text-[9px] uppercase tracking-[3px] text-mist mb-5">Programme at a glance</p>
          {[
            ["University", prog.university],
            ["Duration", prog.duration],
            ["Mode", prog.mode],
            ["Level", prog.level],
            ["Investment", prog.fee],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between items-start py-3 border-b border-line last:border-0">
              <span className="font-mono text-[10px] uppercase tracking-wider text-mist">{label}</span>
              <span className="font-display font-semibold text-[14px] text-wine text-right max-w-[140px] leading-snug">{val}</span>
            </div>
          ))}
          <Link href="/apply/eligibility-check"
            className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-[13px] text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: accentGold, boxShadow: "0 8px 22px rgba(154,115,32,0.32)" }}>
            Apply Now →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS STRIP — navy
      ══════════════════════════════════════════════════════════ */}
      <div className="bg-wine relative">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "34px 34px" }}
        />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {d.stats.map((s) => (
            <div key={s.label} className="py-8 lg:py-10 px-4 lg:px-8 text-center lg:text-left">
              <div className="font-display font-bold text-[32px] lg:text-[40px] text-gold leading-none mb-1.5">
                {s.val}<span className="text-[18px] lg:text-[22px] text-gold/70 ml-1">{s.unit}</span>
              </div>
              <div className="font-mono text-[9.5px] uppercase tracking-wider text-white/45">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          OVERVIEW — image left, text right
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* image */}
            <Reveal direction="left">
              <div className="relative h-[340px] lg:h-[480px] rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 24px 64px rgba(22,38,61,0.18)" }}>
                <Image
                  src={d.sectionImage}
                  alt={prog.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,38,61,0.45) 0%, transparent 55%)" }}
                />
                {/* gold corner bracket */}
                <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-gold/60 rounded-tl-sm" />
                <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-gold/60 rounded-br-sm" />
                {/* university badge */}
                <div className="absolute bottom-5 left-5">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                    {flagUrl && <img src={flagUrl} alt="" className="w-4 h-auto" />}
                    <span className="font-display font-semibold text-[13px] text-wine">{prog.university}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* text */}
            <Reveal direction="right" delay={120}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">About This Programme</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-[1.08] mb-6">
                  {prog.desc}
                </h2>
                <p className="text-slate text-[15.5px] leading-[1.8] mb-10">
                  {d.overview}
                </p>

                {/* highlights */}
                <div className="flex flex-col gap-5">
                  {d.highlights.map((h, i) => (
                    <Reveal key={i} direction="right" delay={120 + i * 80}>
                      <div className="flex gap-5 items-start group">
                        <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:-translate-y-0.5"
                          style={{ background: "rgba(154,115,32,0.1)", border: "1px solid rgba(154,115,32,0.2)" }}>
                          <span className="text-gold text-lg leading-none">{h.icon}</span>
                        </div>
                        <div>
                          <p className="font-display font-semibold text-[17px] text-wine mb-1">{h.title}</p>
                          <p className="text-slate text-[14px] leading-relaxed">{h.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHO IS THIS FOR — 3 ivory cards
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-ivory-2 py-16 lg:py-20 border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <Reveal direction="up">
            <div className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Ideal Candidate</p>
              <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-wine leading-[1.1]">
                Built for <em className="text-gold not-italic">one kind</em> of professional.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", label: "Profile", val: prog.forWho },
              { n: "02", label: "Outcome", val: prog.outcome },
              { n: "03", label: "Mode", val: `${prog.mode} · ${prog.duration} · ${prog.level}` },
            ].map((item, i) => (
              <Reveal key={item.n} direction="up" delay={i * 80}>
                <div className="group relative bg-white rounded-2xl p-7 border border-line transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 overflow-hidden"
                  style={{ boxShadow: "0 4px 20px rgba(22,38,61,0.06)" }}>
                  <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: accentGold }} />
                  <span className="font-display font-bold text-[48px] text-wine/[0.06] leading-none select-none absolute top-3 right-5">{item.n}</span>
                  <p className="font-mono text-[9.5px] uppercase tracking-[2.5px] text-gold mb-3">{item.label}</p>
                  <p className="font-display font-semibold text-[18px] text-wine leading-snug">{item.val}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CURRICULUM — accordion (FaqAccordion reused)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

            {/* sticky left header */}
            <Reveal direction="left">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">What You'll Study</p>
                <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-wine leading-[1.08] mb-6">
                  A curriculum built around <em className="text-gold not-italic">real outcomes</em>.
                </h2>
                <p className="text-slate text-[14.5px] leading-relaxed mb-8">
                  {d.modules.length} modules, each designed to move you toward a concrete professional result — not just academic completion.
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-[36px] text-gold leading-none">{d.modules.length}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-mist leading-tight">Core<br />Modules</span>
                </div>
              </div>
            </Reveal>

            {/* accordion */}
            <Reveal direction="right" delay={100}>
              <FaqAccordion
                accent="#9A7320"
                items={d.modules.map((m) => ({
                  q: m.title,
                  a: (
                    <ul className="space-y-2 mt-1">
                      {m.topics.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span className="mt-[3px]"><Check /></span>
                          <span className="text-[14px] text-slate leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  ),
                }))}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CAREER OUTCOMES — numbered list with image
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-line overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0A111C 0%,#16263D 60%,#1D3050 100%)" }}>
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">

          <Reveal direction="up">
            <div className="mb-14">
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold/70 mb-4">After You Graduate</p>
              <h2 className="font-display font-semibold text-[28px] lg:text-[42px] text-white leading-[1.07]">
                What this programme <em className="text-gold not-italic">opens</em> for you.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {d.outcomes.map((o, i) => (
              <Reveal key={i} direction="up" delay={i * 70}>
                <div className="group flex gap-5 items-start bg-white/[0.04] border border-white/10 rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-gold/25">
                  <span className="font-display font-bold text-[38px] text-gold/20 leading-none shrink-0 group-hover:text-gold/35 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/75 text-[15px] leading-relaxed pt-2 group-hover:text-white/90 transition-colors duration-300">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ELIGIBILITY — checklist with image
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* text */}
            <Reveal direction="left">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">Eligibility Criteria</p>
                <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-wine leading-[1.08] mb-8">
                  Is this programme right for you?
                </h2>
                <div className="flex flex-col gap-4">
                  {d.eligibility.map((e, i) => (
                    <Reveal key={i} direction="left" delay={i * 60}>
                      <div className="flex items-start gap-4 group">
                        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300"
                          style={{ background: "rgba(154,115,32,0.12)", border: "1px solid rgba(154,115,32,0.25)" }}>
                          <Check />
                        </div>
                        <p className="text-wine text-[15px] leading-relaxed pt-1">{e}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link href="/apply/eligibility-check"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: accentGold, boxShadow: "0 10px 28px rgba(154,115,32,0.3)" }}>
                    Check Your Eligibility →
                  </Link>
                  <a href="https://wa.me/13239168629" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-[14px] text-wine border border-wine/25 hover:bg-wine-pale transition-all duration-200">
                    Talk to an Advisor
                  </a>
                </div>
              </div>
            </Reveal>

            {/* image */}
            <Reveal direction="right" delay={100}>
              <div className="relative h-[360px] lg:h-[480px] rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 24px 64px rgba(22,38,61,0.15)" }}>
                <Image
                  src={d.heroImage}
                  alt="Eligibility"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,38,61,0.6) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-7 left-7 right-7">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
                    <p className="font-mono text-[9px] uppercase tracking-[2.5px] text-mist mb-1.5">Programme Investment</p>
                    <p className="font-display font-bold text-[22px] text-wine">{prog.fee}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          UNIVERSITY OPTIONS — multi-partner grid
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-line"
        style={{ background: "linear-gradient(160deg,#FAF7EF 0%,#F3EEE0 100%)" }}>

        {/* soft dot texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#9A7320 1px,transparent 0)", backgroundSize: "30px 30px" }}
        />

        <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10">
          <Reveal direction="up">
            <div className="mb-12 max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Choose Your University</p>
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-wine leading-[1.08] mb-4">
                This programme is offered by <em className="text-gold not-italic">multiple accredited universities</em>.
              </h2>
              <p className="text-slate text-[15px] leading-relaxed">
                Same curriculum, same outcomes — pick the institution, fee, and duration that fits you best.
              </p>
            </div>
          </Reveal>

          <div className={`grid grid-cols-1 gap-5 ${(d.universities?.length || 1) >= 3 ? "md:grid-cols-3" : (d.universities?.length || 1) === 2 ? "md:grid-cols-2" : ""}`}>
            {(d.universities || [{
              slug: d.universitySlug, name: d.universityName, country: d.universityCountry,
              flag: d.universityFlag, code: prog.code, fee: prog.fee, duration: prog.duration,
            }]).map((u, i) => {
              const uFlagUrl = u.code && u.code !== "un" ? `https://flagcdn.com/w40/${u.code}.png` : null;
              return (
                <Reveal key={u.slug + i} direction="up" delay={i * 90}>
                  <div className="group relative bg-white rounded-2xl p-7 lg:p-8 border border-line overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-gold/30"
                    style={{ boxShadow: "0 6px 24px rgba(22,38,61,0.06)" }}>
                    {/* top gradient bar reveal on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"
                      style={{ background: accentGold }} />
                    {/* glow blob */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(circle,rgba(217,164,65,0.18),transparent 70%)" }} />

                    <div className="relative flex items-center gap-3 mb-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-line bg-ivory transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {u.flag}
                      </div>
                      {uFlagUrl && (
                        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-mist border border-line rounded-full px-2.5 py-1">
                          <img src={uFlagUrl} alt="" className="w-3.5 h-auto" />
                          {u.country}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-semibold text-[19px] text-wine leading-snug mb-4 min-h-[48px]">{u.name}</h3>

                    <div className="flex items-center justify-between border-t border-line pt-4 mb-5">
                      <div>
                        <p className="font-mono text-[8.5px] uppercase tracking-wider text-mist mb-1">Duration</p>
                        <p className="font-display font-semibold text-[14px] text-wine">{u.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[8.5px] uppercase tracking-wider text-mist mb-1">Investment</p>
                        <p className="font-display font-semibold text-[14px] text-gold">{u.fee}</p>
                      </div>
                    </div>

                    <Link href={`/apply/eligibility-check`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-[13px] text-wine border border-wine/20 group-hover:bg-wine-pale group-hover:border-wine/35 transition-all duration-300">
                      Select This University <ArrowRight />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA — navy gradient
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(125deg,#06121F 0%,#0B2545 45%,#143155 80%,#0C2548 100%)" }}>

        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#D9A441 1px,transparent 0)", backgroundSize: "28px 28px" }}
        />

        {/* gold corner accent */}
        <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
          style={{ background: "radial-gradient(circle at 0 0,rgba(217,164,65,0.12),transparent 70%)" }}
        />

        <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <Reveal direction="up">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold/60 mb-6">Begin Your Journey</p>
            <h2 className="font-display font-semibold text-[30px] lg:text-[52px] text-white leading-[1.05] mb-5 max-w-3xl mx-auto">
              Ready to start your{" "}
              <em className="text-gold not-italic">{prog.title}</em> journey?
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed max-w-xl mx-auto mb-12">
              Speak with an advisor who specialises in {categoryLabel.toLowerCase()} programmes. No automated responses — a real person, matched to your profile.
            </p>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply/eligibility-check"
                className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 font-semibold text-[15px] text-wine transition-all duration-200 hover:-translate-y-1"
                style={{ background: accentGold, boxShadow: "0 16px 44px rgba(154,115,32,0.38)" }}>
                Check Your Eligibility →
              </Link>
              <a href="https://wa.me/13239168629" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 font-semibold text-[15px] text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.05] transition-all duration-200">
                Talk to an Advisor
              </a>
            </div>
          </Reveal>

          {/* bottom trust line */}
          <Reveal direction="up" delay={200}>
            <div className="flex items-center justify-center gap-4 mt-12">
              {["Free consultation", "No documents yet", "Response within 24hrs"].map((t, i) => (
                <span key={t} className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-wider text-white/35">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-white/20" />}
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}