import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

export default function DoctorateHero() {
  return (
    <section className="bg-wine relative overflow-hidden">
      {/* ===== top block: background image lives ONLY here ===== */}
      <div className="relative overflow-hidden min-h-[720px] lg:min-h-[900px]">
        {/* background image slideshow — 4 photos, each crossfades in with a slow left-to-right pan */}
        {[
          "/images/SharedPrograms/HD.avif",
          "/images/SharedPrograms/DBA.avif",
          "/images/SharedPrograms/HF.avif",
          "/images/SharedPrograms/PHD.avif",
        ].map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 pointer-events-none doctorate-hero-slide"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animationDelay: `${-i * 5}s`,
              opacity: i === 0 ? 1 : 0,
            }}
          />
        ))}
        {/* neutral dark wash for text legibility — no color tint, pure neutral so the photo reads through */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(10,14,20,0.62) 0%, rgba(10,14,20,0.4) 35%, rgba(10,14,20,0.55) 75%, rgba(10,14,20,0.88) 100%)" }}
        />
        {/* fine grain texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        {/* ambient glow — gold + navy only, no red/wine tint */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-[160px] opacity-[0.14] pointer-events-none" style={{ background: "#D9A441" }} />
        <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" style={{ background: "#21385C" }} />
        {/* hairline vignette so the seal + content read as one framed certificate */}
        <div className="absolute inset-4 lg:inset-8 rounded-[28px] pointer-events-none border border-white/[0.06]" />

        <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-[720px] doctorate-hero-rise" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold">Doctorate Programs</p>
            </div>

            <h1 className="font-display font-semibold text-[40px] sm:text-[52px] lg:text-[66px] text-white leading-[1.03] mb-7">
              PhD, DBA &amp; Honorary{" "}
              <span className="relative italic text-gold-light inline-block">
                Recognition
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 8C40 2 90 2 100 6C110 10 160 10 198 4" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
                </svg>
              </span>{" "}
              — Globally Accredited
            </h1>

            <p className="text-white/70 text-[16.5px] lg:text-[18px] leading-relaxed max-w-[640px] mb-10">
              Every doctoral pathway on Techversity is offered through accredited university partners —
              reviewed, documented, and verifiable before you apply. We deliberately explain the
              differences between an earned doctorate and a conferred recognition upfront, not after.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-16 lg:mb-20">
              <Link
                href="/apply/eligibility-check"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-wine transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(217,164,65,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
                style={{ background: "linear-gradient(135deg,#E8B85A,#D9A441,#9A7320)" }}
              >
                Check If You Qualify
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href="#compare"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
              >
                Compare Doctoral Paths
              </a>
            </div>
          </div>

          {/* signature element: accreditation seal */}
          <div className="hidden lg:flex shrink-0 items-start justify-center pt-2 doctorate-hero-rise" style={{ animationDelay: "120ms" }}>
            <AccreditationSeal />
          </div>
        </div>
        </div>
      </div>
      {/* ===== end of image block — everything below is plain bg-wine, no image ===== */}

      {/* stats strip — ledger style, deliberately outside the image block */}
      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 pb-16 lg:pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-10 border-t border-white/10">
          {[
            { end: 4, suffix: "", label: "Doctoral Pathways" },
            { end: 10, suffix: "+", label: "Partner Universities" },
            { end: 30, suffix: "+", label: "Countries Recognised" },
            { end: 15, suffix: "+", label: "Years Avg. Candidate Experience" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={[
                "px-0 lg:px-8 py-1 first:pl-0",
                i !== 0 ? "lg:border-l lg:border-white/10" : "",
                i % 2 === 1 ? "pl-6" : "",
              ].join(" ")}
            >
              <p className="font-display font-semibold text-[32px] lg:text-[40px] text-gold leading-none mb-2 tabular-nums">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/50 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold/70 shrink-0" />
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .doctorate-hero-rise {
            animation: doctorate-hero-rise 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .doctorate-seal-spin {
            animation: doctorate-seal-spin 40s linear infinite;
          }
          .doctorate-hero-slide {
            animation: doctorate-hero-slide 20s ease-in-out infinite;
          }
        }
        @keyframes doctorate-hero-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes doctorate-seal-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes doctorate-hero-slide {
          0% { opacity: 0; transform: scale(1.02) translateX(-1%); }
          4% { opacity: 1; }
          21% { opacity: 1; transform: scale(1.05) translateX(1%); }
          25% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

function AccreditationSeal() {
  return (
    <div className="relative w-[168px] h-[168px]">
      <svg viewBox="0 0 168 168" className="w-full h-full" aria-hidden="true">
        <circle cx="84" cy="84" r="80" stroke="#D9A441" strokeOpacity="0.25" strokeWidth="1" fill="none" />
        <g className="doctorate-seal-spin" style={{ transformOrigin: "84px 84px" }}>
          <circle cx="84" cy="84" r="68" stroke="#D9A441" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="1 6" fill="none" />
          <path id="seal-ring-path" d="M84,20 A64,64 0 1 1 83.9,20" fill="none" />
          <text fill="#E8C77A" fontSize="8.5" letterSpacing="3" className="font-mono uppercase">
            <textPath href="#seal-ring-path" startOffset="2%">
              Verified &#8226; Accredited &#8226; Documented &#8226;
            </textPath>
          </text>
        </g>
        <circle cx="84" cy="84" r="46" stroke="#D9A441" strokeOpacity="0.5" strokeWidth="1" fill="none" />
        {/* laurel branches */}
        <g stroke="#D9A441" strokeOpacity="0.7" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M60 100C52 90 50 76 56 64" />
          <path d="M56 92C50 92 45 89 42 84" />
          <path d="M58 80C52 79 48 76 45 71" />
          <path d="M60 68C55 66 52 63 50 58" />
          <path d="M108 100C116 90 118 76 112 64" />
          <path d="M112 92C118 92 123 89 126 84" />
          <path d="M110 80C116 79 120 76 123 71" />
          <path d="M108 68C113 66 116 63 118 58" />
        </g>
        {/* mortarboard mark */}
        <g transform="translate(84,86)">
          <path d="M-20 -6 L0 -14 L20 -6 L0 2 Z" fill="#D9A441" fillOpacity="0.9" />
          <path d="M-20 -6 L-20 4" stroke="#D9A441" strokeWidth="1.4" />
          <path d="M14 -3 L14 8 C14 12 -14 12 -14 8 L-14 -3" stroke="#D9A441" strokeWidth="1.2" fill="none" />
        </g>
      </svg>
    </div>
  );
}