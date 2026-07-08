import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/programs";

const ORDER = ["phd", "dba", "honorary-doctorate", "honorary-professorship"];

const CATEGORY_LABEL = {
  phd: "Doctorate",
  dba: "Doctorate",
  "honorary-doctorate": "Honorary",
  "honorary-professorship": "Honorary",
};

export default function DoctoratePathCards() {
  const paths = ORDER.map((slug) => programs.find((p) => p.slug === slug)).filter(Boolean);

  if (!paths.length) return null;

  return (
    <section className="bg-white border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Four Pathways</p>
              </div>
              <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08]">
                Pick the path that <span className="italic text-gold">matches your record.</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[2px] text-mist shrink-0">
              {String(paths.length).padStart(2, "0")} Programmes
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((p, i) => (
            <Reveal key={p.slug} direction="up" delay={i * 90}>
              <div className="path-card group relative flex flex-col h-full bg-white rounded-[20px] overflow-hidden">
                {/* image block */}
                <div className="relative h-[190px] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="320px" className="path-card-img object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,30,0.15) 0%, transparent 30%, rgba(11,18,30,0.55) 100%)" }} />

                  <span className="absolute top-3.5 right-3.5 w-6 h-6 border-t-2 border-r-2 rounded-tr-md border-gold/0 group-hover:border-gold/70 transition-all duration-400 z-10" />

                  <span
                    className="absolute top-3.5 left-3.5 font-mono text-[8.5px] uppercase tracking-[1.5px] font-bold rounded-full px-3 py-1.5"
                    style={{ background: p.badgeBg, color: p.badgeText }}
                  >
                    {CATEGORY_LABEL[p.slug] || "Doctorate"}
                  </span>

                  <span className="absolute bottom-3.5 right-3.5 font-mono text-[9px] uppercase tracking-wide text-white bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                    {p.duration}
                  </span>
                </div>

                {/* content block */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[19px] text-wine leading-snug mb-2.5 group-hover:text-gold-deep transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-slate text-[13px] leading-relaxed mb-6 flex-1">{p.desc}</p>

                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-line">
                    <span className="font-mono text-[9.5px] uppercase tracking-wide text-mist">{p.mode}</span>
                    <span className="font-display font-semibold text-[16px] text-gold-deep">{p.fee}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/apply/application-form"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 font-semibold text-[12.5px] text-white bg-wine hover:bg-[#0d1826] transition-colors duration-200"
                    >
                      Apply Now
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <Link
                      href={`/programs/${p.slug}`}
                      className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2.5 font-semibold text-[12.5px] text-wine border border-line hover:border-wine transition-colors duration-200"
                    >
                      View Program
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .path-card {
          box-shadow: 0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9);
          transition: transform 0.4s cubic-bezier(0.2,0,0.2,1), box-shadow 0.4s ease;
        }
        .path-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 24px 50px rgba(22,38,61,0.16), 0 0 0 1px rgba(154,115,32,0.3);
        }
        .path-card-img { transform: scale(1.02); transition: transform 0.7s cubic-bezier(0.2,0,0.2,1); }
        .path-card:hover .path-card-img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}