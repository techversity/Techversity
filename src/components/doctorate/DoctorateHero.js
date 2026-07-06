import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

export default function DoctorateHero() {
  return (
    <section className="bg-wine relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-[160px] opacity-[0.14] pointer-events-none" style={{ background: "#D9A441" }} />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold">Doctorate Programs</p>
          </div>

          <h1 className="font-display font-semibold text-[40px] sm:text-[52px] lg:text-[66px] text-white leading-[1.04] mb-7">
            PhD, DBA &amp; Honorary <span className="italic text-gold-light">Recognition</span> — Globally Accredited
          </h1>

          <p className="text-white/70 text-[16.5px] lg:text-[18px] leading-relaxed max-w-[640px] mb-10">
            Every doctoral pathway on Techversity is offered through accredited university partners —
            reviewed, documented, and verifiable before you apply. We deliberately explain the
            differences between an earned doctorate and a conferred recognition upfront, not after.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 mb-16 lg:mb-20">
            <Link
              href="/apply/eligibility-check"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#E8B85A,#D9A441,#9A7320)" }}
            >
              Check If You Qualify →
            </Link>
            <a
              href="#compare"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white border border-white/25 hover:bg-white/10 transition-colors"
            >
              Compare Doctoral Paths
            </a>
          </div>
        </div>

        {/* stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-10 border-t border-white/10">
          {[
            { end: 4, suffix: "", label: "Doctoral Pathways" },
            { end: 10, suffix: "+", label: "Partner Universities" },
            { end: 30, suffix: "+", label: "Countries Recognised" },
            { end: 15, suffix: "+", label: "Years Avg. Candidate Experience" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-semibold text-[32px] lg:text-[40px] text-gold leading-none mb-2">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}