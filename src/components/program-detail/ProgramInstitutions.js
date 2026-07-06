import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getUniversitiesByProgram } from "@/lib/universities";
import { flagUrl } from "@/lib/flag";

export default function ProgramInstitutions({ p }) {
  const universities = getUniversitiesByProgram(p.programTag || p.slug);
  if (!universities?.length) return null;

  return (
    <section id="institutions" className="scroll-mt-20 bg-ivory relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #16263D 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full blur-[160px] opacity-[0.10] pointer-events-none" style={{ background: "#9A7320" }} />

      {/* giant watermark numeral, consistent with site-wide device */}
      <span
        className="hidden lg:block absolute -bottom-14 -right-6 font-display font-semibold leading-none select-none pointer-events-none text-wine"
        style={{ fontSize: "260px", opacity: 0.035 }}
      >
        {String(universities.length).padStart(2, "0")}
      </span>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold">Choose Your Institution</p>
            </div>
            <h2 className="font-display font-semibold text-[38px] lg:text-[58px] text-wine leading-[1.05] mb-7">
              {universities.length} institution{universities.length > 1 ? "s" : ""}, <span className="italic text-gold">one standard.</span>
            </h2>
            <p className="text-slate text-[16px] lg:text-[17px] leading-[1.8] max-w-2xl">{p.institutionsIntro}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((u, i) => (
            <Reveal key={u.slug} direction="up" delay={i * 80}>
              <Link
                href={`/universities/${u.slug}`}
                className="uni-card group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out"
                style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}
              >
                {/* image header */}
                <div className="relative h-[150px] overflow-hidden">
                  {u.buildingImage ? (
                    <Image
                      src={u.buildingImage}
                      alt={u.name}
                      fill
                      sizes="400px"
                      className="uni-card-img object-cover object-center"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#16263D,#21385C)" }} />
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.75) 0%, rgba(12,22,38,0.15) 60%, rgba(12,22,38,0.05) 100%)" }} />

                  {/* flag badge */}
                  <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-3 py-1 shadow-sm">
                    <span className="w-5 h-5 rounded-full overflow-hidden ring-1 ring-black/5 shrink-0">
                      <Image src={flagUrl(u.country, 40)} alt={u.country} width={20} height={20} className="w-full h-full object-cover" unoptimized />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-wine font-semibold">{u.country}</span>
                  </span>

                  {/* gold top bar reveal on hover */}
                  <span className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" style={{ background: "linear-gradient(90deg,#E8B85A,#D9A441,#9A7320)" }} />
                </div>

                {/* corner brackets that fade in on hover */}
                <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 rounded-tr-md border-gold/0 group-hover:border-gold/60 transition-all duration-400 pointer-events-none z-10" />
                <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 rounded-bl-md border-gold/0 group-hover:border-gold/60 transition-all duration-400 pointer-events-none z-10" style={{ transitionDelay: "60ms" }} />

                <div className="relative p-7 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[22px] text-wine leading-tight mb-3 group-hover:text-gold-deep transition-colors duration-300">
                    {u.name}
                  </h3>

                  <p className="text-slate text-[13.5px] leading-relaxed mb-6 flex-1">{u.tagline}</p>

                  <div className="pt-5 border-t border-line">
                    <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist mb-2.5">Standing</p>
                    <div className="flex flex-wrap gap-1.5">
                      {u.accreditation.slice(0, 2).map((a) => (
                        <span
                          key={a.name}
                          className="font-mono text-[9px] uppercase tracking-wide text-gold-deep bg-gold-light border border-gold/20 rounded-full px-2.5 py-1 transition-colors duration-300 group-hover:bg-gold/15"
                        >
                          {a.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[12.5px] text-wine group-hover:text-gold-deep transition-colors duration-300">
                    View Institution
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {p.institutionsFooter && (
          <Reveal direction="up" delay={100}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl bg-white p-7 lg:p-8" style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}>
              <p className="text-slate text-[14.5px] leading-relaxed max-w-xl">{p.institutionsFooter}</p>
              <Link
                href="/apply/eligibility-check"
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#B08A2E,#9A7320)", boxShadow: "0 8px 22px rgba(154,115,32,0.28)" }}
              >
                Book a Consultation
              </Link>
            </div>
          </Reveal>
        )}
      </div>

      <style>{`
        .uni-card {
          transition: transform 0.5s cubic-bezier(0.2,0,0.2,1), box-shadow 0.5s ease;
        }
        .uni-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px rgba(22,38,61,0.18), 0 0 0 1px rgba(154,115,32,0.35);
        }
        .uni-card-img {
          transform: scale(1.04);
          transition: transform 0.7s cubic-bezier(0.2,0,0.2,1);
        }
        .uni-card:hover .uni-card-img {
          transform: scale(1.14);
        }
      `}</style>
    </section>
  );
}