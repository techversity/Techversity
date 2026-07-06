import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/programs";

const ORDER = ["phd", "dba", "honorary-doctorate", "honorary-professorship"];

export default function DoctoratePathCards() {
  const paths = ORDER.map((slug) => programs.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section className="bg-white border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Four Pathways</p>
            </div>
            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08]">
              Pick the path that <span className="italic text-gold">matches your record.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((p, i) => (
            <Reveal key={p.slug} direction="up" delay={i * 90}>
              <Link
                href={`/programs/${p.slug}`}
                className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
                style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}
              >
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
                  style={{ boxShadow: "0 24px 50px rgba(22,38,61,0.16), 0 0 0 1px rgba(154,115,32,0.35)" }} />

                <div className="relative h-[140px] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="320px" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,18,30,0.7) 100%)" }} />
                  <span
                    className="absolute top-3.5 left-3.5 w-9 h-9 rounded-full flex items-center justify-center font-mono text-[11px] font-bold"
                    style={{ background: p.badgeBg, color: p.badgeText }}
                  >
                    {p.initials}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[18px] text-wine leading-snug mb-2.5 group-hover:text-gold-deep transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-slate text-[13px] leading-relaxed mb-5 flex-1">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="font-mono text-[9px] uppercase tracking-wide text-gold-deep bg-gold-light border border-gold/20 rounded-full px-2.5 py-1">{p.duration}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-slate bg-ivory-2 border border-line rounded-full px-2.5 py-1">{p.mode}</span>
                  </div>

                  <span className="inline-flex items-center gap-2 font-semibold text-[12.5px] text-wine group-hover:text-gold-deep transition-colors duration-200 mt-auto">
                    Explore Pathway
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}