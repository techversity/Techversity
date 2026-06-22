import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

export default function StatsBar() {
  const stats = [
    { n: 12, suffix: "+", label: "Countries served" },
    { n: 10, suffix: "+", label: "Partner universities" },
    { n: 98, suffix: "%", label: "Acceptance rate" },
    { n: 4.8, suffix: "/5", label: "Recipient satisfaction", decimal: true },
  ];

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* top row: index + tagline */}
        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <div className="font-mono text-xs tracking-wider text-mist">
            <span className="text-wine">01</span> / 08 &nbsp; THE RECORD
          </div>
          <div className="hidden md:block font-display italic text-lg lg:text-xl text-ink">
            A measured account of the firm’s work.
          </div>
        </div>

        {/* stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-line">
          {stats.map((s, i) => (
            <Reveal key={i} direction="up" delay={i * 120}>
              <div className="px-2 lg:px-8 py-8 lg:py-10 border-line lg:border-l first:border-l-0 lg:[&:nth-child(1)]:border-l-0">
                {/* index */}
                <div className="font-mono text-xs text-mist mb-4">0{i + 1}</div>

                {/* number */}
                <div className="font-display font-semibold text-6xl lg:text-7xl text-ink leading-none flex items-start">
                  {s.decimal ? (
                    <span>{s.n}</span>
                  ) : (
                    <CountUp end={s.n} />
                  )}
                  <span className="text-wine text-2xl lg:text-3xl font-display ml-1 mt-1">{s.suffix}</span>
                </div>

                {/* label */}
                <div className="text-sm lg:text-base text-slate mt-5">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}