import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export function ProgramResources({ p }) {
  if (!p.resources?.length) return null;
  return (
    <section className="bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Downloadable Resources</p>
          </div>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-wine leading-[1.1] mb-14 max-w-xl">
            Explore before you apply.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {p.resources.map((r, i) => (
            <Reveal key={r.title} direction="up" delay={i * 70}>
              <div className="group h-full rounded-2xl bg-white border border-line p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_46px_rgba(22,38,61,0.1)]">
                <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(154,115,32,0.12)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </span>
                <h3 className="font-display font-semibold text-[17px] text-wine leading-snug mb-2.5">{r.title}</h3>
                <p className="text-slate text-[13px] leading-relaxed mb-6">{r.desc}</p>
                <Link href="/apply/eligibility-check" className="inline-flex items-center gap-2 font-semibold text-[12.5px] text-gold group-hover:gap-3 transition-all">
                  Request Copy
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramFinalCTA({ p }) {
  return (
    <section className="relative bg-wine overflow-hidden">
      {/* Background image — comes from p.finalCtaImage in the program's data file, not hardcoded */}
      {p.finalCtaImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${p.finalCtaImage}')` }}
        />
      )}

      {/* Wine-tone overlay — lighter so the image actually shows through, still keeps text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28,10,20,0.72) 0%, rgba(58,14,32,0.55) 45%, rgba(28,10,20,0.8) 100%)",
        }}
      />

      {/* Gold glow accent */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ background: "#9A7320" }} />

      <div className="relative max-w-[820px] mx-auto px-5 lg:px-8 py-24 lg:py-32 text-center">
        <Reveal direction="up">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-6">{p.finalCtaEyebrow}</p>
          <h2 className="font-display font-semibold text-[32px] lg:text-[52px] text-white leading-[1.06] mb-7">
            {p.finalCtaTitle}
          </h2>
          <p className="text-white/65 text-[15px] lg:text-[17px] max-w-xl mx-auto leading-relaxed mb-11">
            {p.finalCtaBody}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply/eligibility-check" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white transition-transform hover:-translate-y-0.5" style={{ background: "#9A7320", boxShadow: "0 12px 30px rgba(154,115,32,0.4)" }}>
              Check Your Eligibility
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white/85 border border-white/25 hover:border-white/50 transition-colors">
              Talk to an Advisor
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}