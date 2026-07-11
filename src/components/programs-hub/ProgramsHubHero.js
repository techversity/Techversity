import Reveal from "@/components/ui/Reveal";

const SLIDES = [
  "/images/SharedPrograms/HD.avif",
  "/images/SharedPrograms/PHD.avif",
  "/images/SharedPrograms/DBA.avif",
  "/images/SharedPrograms/Master.avif",
  "/images/SharedPrograms/HF.avif",
  "/images/SharedPrograms/Bach.avif",
];

export default function ProgramsHubHero() {
  return (
    <section className="relative bg-wine overflow-hidden min-h-[720px] lg:min-h-[900px] flex items-center">
      {/* background slideshow — 6 photos, each crossfades in with a slow pan */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 pointer-events-none programs-hero-slide"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animationDelay: `${-i * 5}s`,
            opacity: i === 0 ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }} />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[150px] opacity-[0.12] pointer-events-none" style={{ background: "#D9A441" }} />

      {/* links row — top right */}
      <div className="absolute top-6 right-5 lg:top-8 lg:right-8 z-10">
        <Reveal direction="up">
          <div className="flex flex-wrap items-center justify-end gap-x-8 gap-y-3">
            {[
              { label: "Doctorate", href: "#doctorate" },
              { label: "Master's", href: "#masters" },
              { label: "Bachelor's", href: "#bachelors" },
              { label: "Certifications", href: "#certifications" },
            ].map((c) => (
              <a key={c.href} href={c.href} className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-mono text-[11px] uppercase tracking-wide">{c.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28 relative w-full" />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .programs-hero-slide {
            animation: programs-hero-slide 30s ease-in-out infinite;
          }
        }
        @keyframes programs-hero-slide {
          0% { opacity: 0; transform: scale(1.0) translateX(0); }
          2% { opacity: 1; }
          14% { opacity: 1; transform: scale(1.02) translateX(0); }
          16.6% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}