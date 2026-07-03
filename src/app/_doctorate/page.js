import Image from "next/image";
import Link from "next/link";
import {
  doctorateStats, doctorateTypes, doctorateComparison,
  doctorateFaqs, doctorateProcess,
} from "@/lib/doctorate";

export const metadata = {
  title: "Doctorate Programs — PhD, DBA & Honorary Doctorate | Techversity.ai",
  description: "Internationally accredited doctoral pathways for accomplished professionals. PhD, DBA, and Honorary Doctorate — personally guided through accredited university partners.",
};

export default function DoctorateHub() {
  return (
    <main className="bg-ivory">

      {/* ═══ HERO — split: text + image ═══ */}
      <section className="relative bg-wine overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }} />

        <div className="max-w-[1240px] mx-auto px-5 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center min-h-[560px] py-16 lg:py-0">

            {/* left text */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">Doctoral Pathways</p>
              <h1 className="font-display font-semibold text-[42px] lg:text-[62px] text-white leading-[1.02] mb-7">
                The record a <span className="italic text-gold">life's work</span> earns.
              </h1>
              <p className="text-white/65 text-[16px] lg:text-[17px] leading-relaxed max-w-xl mb-9">
                Every doctoral pathway is offered through accredited university partners. PhD, DBA,
                and Honorary Doctorate — reviewed candidly, introduced formally, shepherded to conferment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/apply/eligibility-check"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#B08A2E,#9A7320)", boxShadow: "0 10px 28px rgba(154,115,32,0.3)" }}>
                  Check Your Eligibility →
                </Link>
                <Link href="#compare"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200">
                  Compare Pathways
                </Link>
              </div>
            </div>

            {/* right image — framed */}
            <div className="relative hidden lg:block h-[460px]">
              <div className="absolute inset-0 rounded-[20px] overflow-hidden" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
                <Image src="https://i.pinimg.com/736x/97/67/34/9767343c0c019435bea1cf41b474b384.jpg"
                  alt="Convocation" fill sizes="500px" className="object-cover object-center" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.5), transparent 60%)" }} />
              </div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 border border-gold/30 rounded-[20px] pointer-events-none" />
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="font-display font-bold text-[26px] text-gold leading-none">82%</div>
                <div className="font-mono text-[8px] uppercase tracking-wider text-mist mt-1">Acceptance rate</div>
              </div>
            </div>

          </div>
        </div>

        {/* stats strip */}
        <div className="relative border-t border-white/10">
          <div className="max-w-[1240px] mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {doctorateStats.map((s) => (
              <div key={s.label} className="py-6 px-4 text-center lg:text-left">
                <div className="font-display font-bold text-[28px] text-gold leading-none mb-1.5">{s.val}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THREE PATHWAYS — alternating rich rows ═══ */}
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">The Pathways</p>
          <h2 className="font-display font-semibold text-[32px] lg:text-[44px] text-wine leading-[1.08]">
            Three recognitions, each answering a different dimension of a life's work.
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {doctorateTypes.map((t, i) => (
            <div key={t.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              {/* image */}
              <div className="relative h-[300px] lg:h-[380px] rounded-[20px] overflow-hidden lg:[direction:ltr]"
                style={{ boxShadow: "0 20px 60px rgba(22,38,61,0.18)" }}>
                <Image src={t.image} alt={t.name} fill sizes="600px" className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.5), transparent 55%)" }} />
                <div className="absolute top-5 left-5">
                  <span className="font-display font-bold text-[15px] text-white bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-3.5 py-2">
                    {t.abbr}
                  </span>
                </div>
              </div>

              {/* text */}
              <div className="lg:[direction:ltr]">
                <p className="font-mono text-[9px] uppercase tracking-[2.5px] text-gold mb-3">{t.latin}</p>
                <h3 className="font-display font-semibold text-[28px] lg:text-[34px] text-wine leading-tight mb-4">{t.name}</h3>
                <p className="text-[15px] lg:text-[16px] text-slate leading-relaxed mb-6">{t.overview}</p>

                {/* meta pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {t.meta.map((m) => (
                    <span key={m} className="font-mono text-[9px] uppercase tracking-wide text-wine bg-white border border-line rounded-full px-3 py-1.5">
                      {m}
                    </span>
                  ))}
                </div>

                <Link href={`/doctorate/${t.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-[14px] text-white rounded-full px-6 py-3 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: t.accent, boxShadow: `0 8px 22px ${t.accent}33` }}>
                  Explore {t.abbr === "HC" ? "Honorary Doctorate" : t.abbr}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COMPARISON CARDS ═══ */}
      <section id="compare" className="bg-wine relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">
              At a Glance
            </p>
            <h2 className="font-display font-semibold text-[32px] lg:text-[44px] text-white leading-[1.08]">
              Which fits <span className="italic text-gold">your record?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                abbr: "HC",
                name: "Honorary Doctorate",
                latin: "Doctor Honoris Causa",
                topBg: "linear-gradient(135deg,#2a1f0a,#3d2d10)",
                badgeBg: "rgba(176,138,46,0.2)",
                badgeColor: "#C9A04A",
                badgeBorder: "rgba(176,138,46,0.3)",
                latinColor: "rgba(201,160,74,0.6)",
                valColor: "#C9A04A",
                values: [
                  "Recognition of existing work",
                  "Established leaders",
                  "4–6 months",
                  "Not required",
                  "Portfolio review",
                  "Symbolic, honorific",
                ],
              },
              {
                abbr: "DBA",
                name: "Doctor of Business Administration",
                latin: "DBA",
                topBg: "linear-gradient(135deg,#0d1a2a,#16263D)",
                badgeBg: "rgba(255,255,255,0.1)",
                badgeColor: "rgba(255,255,255,0.7)",
                badgeBorder: "rgba(255,255,255,0.15)",
                latinColor: "rgba(255,255,255,0.35)",
                valColor: "rgba(255,255,255,0.85)",
                values: [
                  "Applied research",
                  "Working executives",
                  "18–36 months",
                  "Applied project",
                  "Online + residencies",
                  "Professional doctorate",
                ],
              },
              {
                abbr: "PhD",
                name: "Doctor of Philosophy",
                latin: "PhD",
                topBg: "linear-gradient(135deg,#0a1520,#0f1e30)",
                badgeBg: "rgba(255,255,255,0.08)",
                badgeColor: "rgba(255,255,255,0.6)",
                badgeBorder: "rgba(255,255,255,0.12)",
                latinColor: "rgba(255,255,255,0.3)",
                valColor: "rgba(255,255,255,0.85)",
                values: [
                  "Original research",
                  "Researchers & academics",
                  "24–48 months",
                  "Required & defended",
                  "Individual supervision",
                  "Academic doctorate",
                ],
              },
            ].map((card) => (
              <div
                key={card.abbr}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                {/* Card top */}
                <div className="px-5 py-6" style={{ background: card.topBg }}>
                  <span
                    className="inline-block font-mono text-[10px] tracking-[2px] uppercase rounded-lg px-3 py-1 mb-4"
                    style={{
                      background: card.badgeBg,
                      color: card.badgeColor,
                      border: `0.5px solid ${card.badgeBorder}`,
                    }}
                  >
                    {card.abbr}
                  </span>
                  <p className="font-display font-semibold text-[17px] text-white leading-snug mb-1">
                    {card.name}
                  </p>
                  <p className="font-mono text-[10px] tracking-wider" style={{ color: card.latinColor }}>
                    {card.latin}
                  </p>
                </div>

                {/* Card rows */}
                <div className="px-5 py-2" style={{ background: "rgba(12,22,38,0.6)" }}>
                  {["Basis", "Who it's for", "Duration", "Dissertation", "Delivery", "Recognition"].map((label, i) => (
                    <div
                      key={label}
                      className="flex justify-between items-start gap-4 py-3 border-b border-white/[0.08] last:border-none"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white/35 shrink-0 pt-0.5 w-24">
                        {label}
                      </span>
                      <span className="text-[13px] text-right leading-snug" style={{ color: card.valColor }}>
                        {card.values[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADVISORY PROCESS ═══ */}
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">The Advisory</p>
          <h2 className="font-display font-semibold text-[32px] lg:text-[44px] text-wine leading-[1.08] mb-3">
            The advisory, in five verbs.
          </h2>
          <p className="text-slate text-[15px]">Every conferment follows the same unhurried rhythm. Average · 4–9 months.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {doctorateProcess.map((p, i) => (
            <div key={p.n} className="relative group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-wine text-white font-display font-bold text-[14px] flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  {p.n}
                </span>
                {i < doctorateProcess.length - 1 && <span className="hidden lg:block flex-1 h-px bg-line" />}
              </div>
              <h3 className="font-display font-semibold text-[20px] text-wine mb-2">{p.verb}.</h3>
              <p className="text-[13.5px] text-slate leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-white border-t border-line">
        <div className="max-w-[880px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
          <div className="mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Questions, Read Fully</p>
            <h2 className="font-display font-semibold text-[32px] lg:text-[44px] text-wine leading-[1.08]">
              The questions a serious record raises.
            </h2>
          </div>

          <div className="flex flex-col">
            {doctorateFaqs.map((f, i) => (
              <details key={i} className="group border-b border-line py-2">
                <summary className="flex items-start justify-between gap-5 py-5 cursor-pointer list-none">
                  <span className="font-display font-semibold text-[18px] lg:text-[20px] text-wine leading-snug group-hover:text-gold transition-colors">{f.q}</span>
                  <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center shrink-0 mt-1 group-open:bg-gold group-open:border-gold transition-all">
                    <svg className="group-open:rotate-45 transition-transform duration-300 text-wine group-open:text-white" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-[15px] text-slate leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      

    </main>
  );
}