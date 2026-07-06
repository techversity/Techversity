import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function LevelSpotlight({ p, sectionId, num, label, accent, flip = false, dark = false }) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-24 border-b border-line ${dark ? "bg-wine" : "bg-white"}`}
    >
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[12px] font-bold" style={{ color: dark ? "#D9A441" : accent }}>{num}</span>
            <span className="w-10 h-0.5 rounded-full" style={{ background: dark ? "#D9A441" : accent }} />
            <p className="font-mono text-[10px] uppercase tracking-[2.5px]" style={{ color: dark ? "#D9A441" : accent }}>{label}</p>
          </div>
        </Reveal>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flip ? "lg:[direction:rtl]" : ""}`}>
          <Reveal direction={flip ? "right" : "left"}>
            <div className="relative h-[280px] lg:h-[420px] rounded-[24px] overflow-hidden" style={{ direction: "ltr" }}>
              <Image src={p.image} alt={p.title} fill sizes="600px" className="object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.5), transparent 60%)" }} />
              <span
                className="absolute top-5 left-5 w-11 h-11 rounded-full flex items-center justify-center font-mono text-[13px] font-bold"
                style={{ background: p.badgeBg, color: p.badgeText }}
              >
                {p.initials}
              </span>
            </div>
          </Reveal>

          <Reveal direction={flip ? "left" : "right"} delay={100}>
            <div style={{ direction: "ltr" }}>
              <h3 className={`font-display font-semibold text-[28px] lg:text-[40px] leading-[1.1] mb-5 ${dark ? "text-white" : "text-wine"}`}>
                {p.title}
              </h3>
              <p className={`text-[15px] lg:text-[16px] leading-relaxed mb-6 ${dark ? "text-white/70" : "text-slate"}`}>
                {p.desc}
              </p>

              <div className="flex items-start gap-2.5 mb-7">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" className="mt-0.5 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className={`text-[13.5px] leading-snug ${dark ? "text-white/60" : "text-wine/70"}`}>{p.forWho}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className={`font-mono text-[9px] uppercase tracking-wide rounded-full px-3 py-1.5 border ${dark ? "text-white/80 border-white/20 bg-white/5" : "text-wine bg-ivory border-line"}`}>{p.duration}</span>
                <span className={`font-mono text-[9px] uppercase tracking-wide rounded-full px-3 py-1.5 border ${dark ? "text-white/80 border-white/20 bg-white/5" : "text-wine bg-ivory border-line"}`}>{p.mode}</span>
                <span className="font-mono text-[9px] uppercase tracking-wide text-gold-deep bg-gold-light border border-gold/25 rounded-full px-3 py-1.5 font-semibold">{p.fee}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply/application-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#B08A2E,#9A7320)", boxShadow: "0 8px 22px rgba(154,115,32,0.28)" }}
                >
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href={`/programs/${p.slug}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] transition-all duration-200 ${dark ? "text-white border border-white/25 hover:bg-white/10" : "text-wine border border-line hover:border-wine hover:bg-ivory"}`}
                >
                  View Program
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}