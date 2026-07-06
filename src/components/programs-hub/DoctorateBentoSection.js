import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/programs";

const ORDER = ["dba", "phd", "honorary-doctorate", "honorary-professorship"];

export default function DoctorateBentoSection() {
  const items = ORDER.map((slug) => programs.find((p) => p.slug === slug)).filter(Boolean);
  const [big, ...rest] = items;

  return (
    <section id="doctorate" className="scroll-mt-24 bg-white border-b border-line">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-wine">01</span>
                <span className="w-10 h-0.5 rounded-full bg-wine" />
                <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-wine">Doctorate</p>
                <span className="font-mono text-[9px] text-mist">· {items.length} pathways</span>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-wine leading-[1.1]">
                The highest credential a career can carry.
              </h2>
            </div>
            <Link
              href="/doctorate"
              className="shrink-0 inline-flex items-center gap-2 font-semibold text-[13.5px] text-wine border border-line rounded-full px-5 py-2.5 hover:border-wine hover:bg-wine-pale transition-colors"
            >
              Compare All 4 Pathways
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </Reveal>

        {/* bento grid — one large feature tile + 3 smaller tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {big && (
            <Reveal direction="up" className="lg:col-span-2">
              <Link
                href={`/programs/${big.slug}`}
                className="bento-tile group relative flex flex-col justify-end h-[280px] lg:h-[420px] rounded-[22px] overflow-hidden"
              >
                <Image src={big.image} alt={big.title} fill sizes="760px" className="bento-img object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.88) 0%, rgba(12,22,38,0.25) 55%, rgba(12,22,38,0.05) 100%)" }} />
                <span
                  className="absolute top-5 left-5 w-10 h-10 rounded-full flex items-center justify-center font-mono text-[12px] font-bold"
                  style={{ background: big.badgeBg, color: big.badgeText }}
                >
                  {big.initials}
                </span>
                <div className="relative p-7 lg:p-9">
                  <h3 className="font-display font-semibold text-[24px] lg:text-[32px] text-white leading-tight mb-3 group-hover:text-gold-light transition-colors duration-300">
                    {big.title}
                  </h3>
                  <p className="text-white/70 text-[14px] leading-relaxed max-w-md mb-5">{big.desc}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-[13px] text-gold-light">
                    Explore Pathway
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {rest.map((p, i) => (
              <Reveal key={p.slug} direction="up" delay={(i + 1) * 90}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="bento-tile group relative flex flex-col justify-end h-[190px] lg:h-[124px] rounded-[18px] overflow-hidden"
                >
                  <Image src={p.image} alt={p.title} fill sizes="380px" className="bento-img object-cover object-center" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.85) 0%, rgba(12,22,38,0.3) 60%, rgba(12,22,38,0.1) 100%)" }} />
                  <span
                    className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full flex items-center justify-center font-mono text-[9px] font-bold"
                    style={{ background: p.badgeBg, color: p.badgeText }}
                  >
                    {p.initials}
                  </span>
                  <div className="relative p-4">
                    <h3 className="font-display font-semibold text-[15px] text-white leading-tight group-hover:text-gold-light transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bento-tile { box-shadow: 0 4px 20px rgba(22,38,61,0.1); transition: transform 0.4s cubic-bezier(0.2,0,0.2,1), box-shadow 0.4s ease; }
        .bento-tile:hover { transform: translateY(-4px); box-shadow: 0 20px 44px rgba(22,38,61,0.22); }
        .bento-img { transition: transform 0.7s cubic-bezier(0.2,0,0.2,1); }
        .bento-tile:hover .bento-img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}