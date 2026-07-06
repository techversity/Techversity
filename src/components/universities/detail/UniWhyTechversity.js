import Reveal from "@/components/ui/Reveal";

const Ic = ({ paths, c = "currentColor", s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);

const advisor = <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m17 11 2 2 4-4" /></g>;
const shield = <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></g>;
const doc = <g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></g>;
const bolt = <g><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></g>;
const heart = <g><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" /></g>;
const arrow = <g><path d="M5 12h14M12 5l7 7-7 7" /></g>;

const ICONS = [advisor, shield, doc, bolt, heart];

export default function UniWhyTechversity({ d }) {
  const w = d.whyTechversity;

  return (
    <section className="relative bg-ivory overflow-hidden">
      <div className="absolute -top-32 right-0 w-[440px] h-[440px] rounded-full blur-[160px] opacity-[0.18] pointer-events-none" style={{ background: "#9A7320" }} />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
        {/* headline row */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center mb-16">
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Why through Techversity</p>
              </div>
              <h2 className="font-display font-semibold text-[34px] lg:text-[52px] text-wine leading-[1.04]">
                The degree is theirs.<br />
                <span className="text-gold">The path is ours.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <p className="text-slate text-[15px] lg:text-[16.5px] leading-[1.85] lg:border-l lg:border-line lg:pl-16">
              {w.lead}
            </p>
          </Reveal>
        </div>

        {/* value cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {w.points.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={i * 60}>
              <div className="group h-full bg-white rounded-2xl border border-line p-6 lg:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(22,38,61,0.12)] hover:border-gold/40">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: "rgba(154,115,32,0.12)" }}>
                  <Ic paths={ICONS[i]} c="#9A7320" s={22} />
                </span>
                <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-gold mb-2">0{i + 1}</p>
                <h3 className="font-display font-semibold text-[15.5px] text-wine leading-snug mb-2">{p.title}</h3>
                <p className="text-slate text-[12px] leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* closing line */}
        <Reveal direction="up" delay={120}>
          <div className="mt-14 pt-10 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-display italic text-[18px] lg:text-[24px] text-wine leading-snug max-w-lg">
              {d.ctaLine}
            </p>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white shrink-0 transition-transform hover:-translate-y-0.5" style={{ background: "#9A7320" }}>
              See the programs
              <Ic paths={arrow} c="#fff" s={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}