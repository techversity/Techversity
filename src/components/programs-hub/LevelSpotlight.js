import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function LevelSpotlight({ p, sectionId, num, label, accent, flip = false, dark = false }) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-24 relative overflow-hidden ${dark ? "bg-wine" : "bg-white"} border-b border-line`}
    >
      {dark && (
        <>
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "30px 30px" }}
          />
          <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full blur-[150px] opacity-[0.13] pointer-events-none" style={{ background: accent }} />
        </>
      )}

      {/* giant ghost watermark numeral */}
      <span
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 font-display font-semibold leading-none select-none pointer-events-none ${flip ? "-left-10" : "-right-10"}`}
        style={{ fontSize: "340px", color: dark ? "rgba(255,255,255,0.035)" : "rgba(22,38,61,0.035)" }}
      >
        {num}
      </span>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-14">
            <span className="font-mono text-[12px] font-bold" style={{ color: dark ? "#D9A441" : accent }}>{num}</span>
            <span className="w-10 h-0.5 rounded-full" style={{ background: dark ? "#D9A441" : accent }} />
            <p className="font-mono text-[10px] uppercase tracking-[2.5px]" style={{ color: dark ? "#D9A441" : accent }}>{label}</p>
          </div>
        </Reveal>

        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center ${flip ? "lg:[direction:rtl]" : ""}`}>
          <Reveal direction={flip ? "right" : "left"}>
            <div className="relative h-[320px] lg:h-[500px] rounded-[26px] overflow-hidden" style={{ direction: "ltr", boxShadow: dark ? "0 30px 70px rgba(0,0,0,0.35)" : "0 30px 70px rgba(22,38,61,0.18)" }}>
              <Image src={p.image} alt={p.title} fill sizes="640px" className="object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(11,18,30,0.75) 0%, rgba(11,18,30,0.1) 55%, transparent 100%)" }} />

              {/* corner brackets */}
              <span className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 rounded-tl-md" style={{ borderColor: `${accent}99` }} />
              <span className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 rounded-br-md" style={{ borderColor: `${accent}99` }} />

              <span
                className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center font-mono text-[14px] font-bold"
                style={{ background: p.badgeBg, color: p.badgeText }}
              >
                {p.initials}
              </span>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[2px] text-white/70 mb-1.5">{label}</p>
                <p className="font-display font-semibold text-[20px] text-white leading-tight">{p.title}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction={flip ? "left" : "right"} delay={100}>
            <div style={{ direction: "ltr" }}>
              <h3 className={`font-display font-semibold text-[30px] lg:text-[44px] leading-[1.08] mb-6 ${dark ? "text-white" : "text-wine"}`}>
                {p.title}
              </h3>
              <p className={`text-[15px] lg:text-[16.5px] leading-relaxed mb-8 max-w-lg ${dark ? "text-white/70" : "text-slate"}`}>
                {p.desc}
              </p>

              <div className="flex items-start gap-2.5 mb-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark ? "#D9A441" : accent} strokeWidth="2" className="mt-0.5 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className={`text-[13.5px] leading-snug ${dark ? "text-white/60" : "text-wine/70"}`}>{p.forWho}</span>
              </div>

              {/* stat highlight strip */}
              <div
                className={`grid grid-cols-3 gap-px mb-9 rounded-2xl overflow-hidden ${dark ? "" : "border border-line"}`}
                style={{ background: dark ? "rgba(255,255,255,0.08)" : "#E0DCCF" }}
              >
                {[
                  { label: "Duration", value: p.duration },
                  { label: "Mode", value: p.mode },
                  { label: "Fee", value: p.fee },
                ].map((s) => (
                  <div key={s.label} className={`px-4 py-4 ${dark ? "bg-wine" : "bg-white"}`}>
                    <p className={`font-mono text-[8.5px] uppercase tracking-[1.5px] mb-1.5 ${dark ? "text-white/40" : "text-mist"}`}>{s.label}</p>
                    <p className={`font-display font-semibold text-[14px] leading-tight ${dark ? "text-gold-light" : "text-wine"}`}>{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply/application-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#E8B85A,#D9A441,#9A7320)", boxShadow: "0 10px 26px rgba(154,115,32,0.32)", color: "#16233D" }}
                >
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href={`/programs/${p.slug}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] transition-all duration-300 ${dark ? "text-white border border-white/25 hover:bg-white/10" : "text-wine border border-line hover:border-wine hover:bg-ivory"}`}
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