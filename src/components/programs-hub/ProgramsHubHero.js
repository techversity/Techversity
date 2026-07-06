import Reveal from "@/components/ui/Reveal";

export default function ProgramsHubHero() {
  return (
    <section className="relative bg-wine overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80"
          alt="Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(12,22,38,0.94) 0%, rgba(12,22,38,0.80) 45%, rgba(12,22,38,0.58) 100%)" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }} />

      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28 relative">
        <Reveal direction="up">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">Degree Programs</p>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h1 className="font-display font-semibold text-[42px] lg:text-[62px] text-white leading-[1.04] max-w-3xl mb-6">
            Credentials that carry <span className="italic text-gold">across borders.</span>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mb-9">
            Internationally accredited degrees — Doctorate, Master's, and Bachelor's — delivered
            online through our global university partners, built for working professionals.
          </p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
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
    </section>
  );
}