import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getUniversitiesByProgram } from "@/lib/universities";

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
                className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
                style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}
              >
                {/* hover: deep shadow + gold ring, consistent with other cards site-wide */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: "0 28px 60px rgba(22,38,61,0.16), 0 0 0 1px rgba(154,115,32,0.4)" }} />

                {/* gold hairline that grows on hover */}
                <span className="absolute top-0 left-7 right-7 h-px bg-line overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: "#9A7320" }} />
                </span>

                <div className="relative p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="text-[22px] leading-none">{u.flag}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-mist">{u.country}</span>
                  </div>

                  <h3 className="font-display font-semibold text-[22px] text-wine leading-tight mb-3 group-hover:text-gold-deep transition-colors duration-200">
                    {u.name}
                  </h3>

                  <p className="text-slate text-[13.5px] leading-relaxed mb-6 flex-1">{u.tagline}</p>

                  <div className="pt-5 border-t border-line">
                    <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist mb-2.5">Standing</p>
                    <div className="flex flex-wrap gap-1.5">
                      {u.accreditation.slice(0, 2).map((a) => (
                        <span
                          key={a.name}
                          className="font-mono text-[9px] uppercase tracking-wide text-gold-deep bg-gold-light border border-gold/20 rounded-full px-2.5 py-1"
                        >
                          {a.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[12.5px] text-wine group-hover:text-gold-deep transition-colors duration-200">
                    View Institution
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
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
    </section>
  );
}