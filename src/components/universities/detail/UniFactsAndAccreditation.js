import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export function UniFactsGrid({ d }) {
  return (
    <section className="bg-white">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-center">
          {/* left — heading + accent image */}
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">At a Glance</p>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-wine leading-[1.1] mb-8">
                The facts,<br />before the pitch.
              </h2>
              <div className="relative rounded-2xl overflow-hidden aspect-[5/4] hidden lg:block" style={{ boxShadow: "0 20px 50px rgba(22,38,61,0.15)" }}>
                <Image src={d.GlanceImg} alt={d.name} fill sizes="440px" className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.4), transparent 55%)" }} />
                <p className="absolute bottom-5 left-5 font-display text-[18px] text-white font-semibold">{d.shortName}</p>
              </div>
            </div>
          </Reveal>

          {/* right — facts as elegant hover tiles */}
          <div className="grid grid-cols-2 gap-4">
            {d.facts.map((f, i) => (
              <Reveal key={f.label} direction="up" delay={i * 50}>
                <div className="group relative h-full rounded-xl border border-line bg-ivory/40 p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(22,38,61,0.1)] hover:border-gold/40">
                  <span className="absolute top-0 left-0 h-full w-[3px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400" style={{ background: "#9A7320" }} />
                  <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist mb-3">{f.label}</p>
                  <p className="font-display font-semibold text-[17px] lg:text-[19px] text-wine leading-snug">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function UniAccreditation({ d }) {
  return (
    <section className="bg-wine-pale border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <Reveal direction="up">
          <div className="flex items-start gap-4 mb-10">
            <span className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(154,115,32,0.12)", color: "#9A7320" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-2">Accreditation &amp; Recognition</p>
              <h2 className="font-display font-semibold text-[24px] lg:text-[32px] text-wine leading-[1.15]">Recognised, and we can prove it.</h2>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.accreditation.map((a, i) => (
            <Reveal key={a.name} direction="up" delay={i * 60}>
              <div className="group relative h-full rounded-2xl border bg-white p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_46px_rgba(22,38,61,0.12)]" style={{ borderColor: "rgba(154,115,32,0.22)" }}>
                {/* gold top bar reveal */}
                <span className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ background: "#9A7320" }} />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="font-display font-semibold text-[15px] text-wine leading-snug">{a.name}</p>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: "rgba(34,160,107,0.12)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22A06B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                </div>
                <p className="text-slate text-[12.5px] leading-relaxed">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {d.accreditationNote && (
          <Reveal direction="up" delay={100}>
            <div className="mt-8 flex items-start gap-3 max-w-2xl">
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(154,115,32,0.12)" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              </span>
              <p className="text-[12.5px] text-mist leading-relaxed">{d.accreditationNote}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}