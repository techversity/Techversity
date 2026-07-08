import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/programs";

const ORDER = ["dba", "phd", "honorary-doctorate", "honorary-professorship"];

export default function DoctorateBentoSection() {
  const items = ORDER.map((slug) => programs.find((p) => p.slug === slug)).filter(Boolean);
  const [big, ...rest] = items;

  return (
    <section id="doctorate" className="scroll-mt-24 relative overflow-hidden bg-white border-b border-line">
      {/* giant ghost watermark numeral — consistent with LevelSpotlight sections */}
      <span
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10 font-display font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: "340px", color: "rgba(22,38,61,0.035)" }}
      >
        01
      </span>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-wine">01</span>
                <span className="w-10 h-0.5 rounded-full bg-wine" />
                <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-wine">Doctorate</p>
                <span className="font-mono text-[9px] text-mist">· {items.length} pathways</span>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[42px] text-wine leading-[1.1]">
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

        {/* feature tile — full width, generous height */}
        {big && (
          <Reveal direction="up">
            <Link
              href={`/programs/${big.slug}`}
              className="doc-tile group relative flex flex-col justify-end h-[320px] lg:h-[400px] rounded-[24px] overflow-hidden mb-5"
            >
              <Image src={big.image} alt={big.title} fill sizes="1180px" className="doc-tile-img object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(12,22,38,0.9) 0%, rgba(12,22,38,0.55) 45%, rgba(12,22,38,0.15) 100%)" }} />

              {/* corner brackets */}
              <span className="absolute top-5 right-5 w-7 h-7 border-t-2 border-r-2 rounded-tr-md border-gold/0 group-hover:border-gold/70 transition-all duration-400 z-10" />
              <span className="absolute bottom-5 left-5 w-7 h-7 border-b-2 border-l-2 rounded-bl-md border-gold/0 group-hover:border-gold/70 transition-all duration-400 z-10" style={{ transitionDelay: "60ms" }} />

              <span
                className="absolute top-6 left-6 lg:left-9 w-11 h-11 rounded-full flex items-center justify-center font-mono text-[12px] font-bold"
                style={{ background: big.badgeBg, color: big.badgeText }}
              >
                {big.initials}
              </span>

              <div className="relative p-7 lg:p-9 max-w-lg">
                <p className="font-mono text-[9.5px] uppercase tracking-[2px] text-gold-light mb-3">Featured Pathway</p>
                <h3 className="font-display font-semibold text-[26px] lg:text-[36px] text-white leading-tight mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {big.title}
                </h3>
                <p className="text-white/70 text-[14px] leading-relaxed mb-5">{big.desc}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-[13px] text-gold-light">
                  Explore Pathway
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* 3 supporting tiles — equal row, proper height, no squish */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <Reveal key={p.slug} direction="up" delay={(i + 1) * 90}>
              <Link
                href={`/programs/${p.slug}`}
                className="doc-tile group relative flex flex-col justify-end h-[220px] rounded-[20px] overflow-hidden"
              >
                <Image src={p.image} alt={p.title} fill sizes="380px" className="doc-tile-img object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.88) 0%, rgba(12,22,38,0.25) 60%, rgba(12,22,38,0.05) 100%)" }} />

                <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 rounded-tr-md border-gold/0 group-hover:border-gold/70 transition-all duration-400 z-10" />

                <span
                  className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center font-mono text-[10px] font-bold"
                  style={{ background: p.badgeBg, color: p.badgeText }}
                >
                  {p.initials}
                </span>

                <div className="relative p-5">
                  <h3 className="font-display font-semibold text-[17px] text-white leading-tight mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-white/60 group-hover:text-gold-light transition-colors duration-300">
                    Explore
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .doc-tile { box-shadow: 0 4px 20px rgba(22,38,61,0.1); transition: transform 0.4s cubic-bezier(0.2,0,0.2,1), box-shadow 0.4s ease; }
        .doc-tile:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(22,38,61,0.24); }
        .doc-tile-img { transition: transform 0.7s cubic-bezier(0.2,0,0.2,1); }
        .doc-tile:hover .doc-tile-img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}