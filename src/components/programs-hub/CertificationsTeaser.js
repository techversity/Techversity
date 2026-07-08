import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/lib/certifications";

export default function CertificationsTeaser() {
  // tagged (Most Popular / Trending) certifications surface first
  const sorted = [...certifications].sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0));
  const certs = sorted.slice(0, 3);
  if (!certs.length) return null;

  return (
    <section id="certifications" className="scroll-mt-24 relative overflow-hidden bg-ivory">
      <span
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 font-display font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: "340px", color: "rgba(22,38,61,0.035)" }}
      >
        04
      </span>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-gold">04</span>
                <span className="w-10 h-0.5 rounded-full bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold">Certifications</p>
                <span className="font-mono text-[9px] text-mist">· {certifications.length} tracks</span>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[42px] text-wine leading-[1.1]">
                Career-ready in weeks, <span className="italic text-gold">not years.</span>
              </h2>
            </div>
            <Link
              href="/certifications"
              className="shrink-0 inline-flex items-center gap-2 font-semibold text-[13.5px] text-wine border border-line rounded-full px-5 py-2.5 hover:border-wine hover:bg-white transition-colors"
            >
              View All Certifications
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <Reveal key={c.href} direction="up" delay={i * 90}>
              <Link
                href={c.href}
                className="cert-card group relative flex flex-col h-full bg-white rounded-[20px] overflow-hidden"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <Image src={c.image} alt={c.title} fill sizes="380px" className="cert-card-img object-cover object-center" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 35%, rgba(11,18,30,0.72) 100%)" }} />

                  <span className="absolute top-3.5 right-3.5 w-6 h-6 border-t-2 border-r-2 rounded-tr-md border-white/0 group-hover:border-white/60 transition-all duration-400 z-10" />

                  {c.tag && (
                    <span
                      className="absolute top-3.5 left-3.5 font-mono text-[8.5px] uppercase tracking-wide font-bold rounded-full px-2.5 py-1"
                      style={{ background: c.accent, color: "#fff" }}
                    >
                      {c.tag}
                    </span>
                  )}

                  <span
                    className="absolute bottom-3.5 left-3.5 w-9 h-9 rounded-full flex items-center justify-center font-mono text-[10.5px] font-bold"
                    style={{ background: "#fff", color: c.accent }}
                  >
                    {c.abbr}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-wide mb-1.5" style={{ color: c.accent }}>{c.field}</p>
                  <h3 className="font-display font-semibold text-[17px] text-wine leading-snug mb-2 group-hover:text-gold-deep transition-colors duration-200">
                    {c.title}
                  </h3>
                  <p className="text-slate text-[12.5px] leading-relaxed mb-4 flex-1 line-clamp-2">{c.desc}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-mist">{c.duration}</span>
                    {c.stats?.[1] && (
                      <span className="font-mono text-[10px] uppercase tracking-wide text-mist">{c.stats[1].val} enrolled</span>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card { box-shadow: 0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9); transition: transform 0.4s cubic-bezier(0.2,0,0.2,1), box-shadow 0.4s ease; }
        .cert-card:hover { transform: translateY(-5px); box-shadow: 0 22px 46px rgba(22,38,61,0.16); }
        .cert-card-img { transition: transform 0.7s cubic-bezier(0.2,0,0.2,1); }
        .cert-card:hover .cert-card-img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}