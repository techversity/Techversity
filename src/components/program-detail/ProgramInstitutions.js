import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getUniversitiesByProgram } from "@/lib/universities";

export default function ProgramInstitutions({ p }) {
  const universities = getUniversitiesByProgram(p.programTag || p.slug);
  if (!universities?.length) return null;

  return (
    <section id="institutions" className="scroll-mt-20 bg-wine relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      {/* giant watermark numeral, consistent with site-wide device */}
      <span
        className="hidden lg:block absolute -bottom-10 -right-6 font-display font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: "260px", color: "rgba(255,255,255,0.035)" }}
      >
        {String(universities.length).padStart(2, "0")}
      </span>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold-light" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold-light">Choose Your Institution</p>
            </div>
            <h2 className="font-display font-semibold text-[30px] lg:text-[44px] text-white leading-[1.08] mb-6">
              {universities.length} institution{universities.length > 1 ? "s" : ""}, <span className="italic text-gold-light">one standard.</span>
            </h2>
            <p className="text-white/60 text-[15px] lg:text-[16.5px] leading-relaxed">{p.institutionsIntro}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((u, i) => (
            <Reveal key={u.slug} direction="up" delay={i * 80}>
              <Link
                href={`/universities/${u.slug}`}
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-line/40 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.25)]"
              >
                {/* corner brackets, matching the site-wide specimen-card motif */}
                <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30 z-10 pointer-events-none" />
                <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30 z-10 pointer-events-none" />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[22px] leading-none">{u.flag}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-mist">{u.country}</span>
                  </div>

                  <h3 className="font-display font-semibold text-[21px] text-wine leading-tight mb-3 group-hover:text-gold-deep transition-colors duration-200">
                    {u.name}
                  </h3>

                  <p className="text-slate text-[13.5px] leading-relaxed mb-6 flex-1">{u.tagline}</p>

                  <div className="pt-5 border-t border-line">
                    <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist mb-2">Standing</p>
                    <div className="flex flex-wrap gap-1.5">
                      {u.accreditation.slice(0, 2).map((a) => (
                        <span
                          key={a.name}
                          className="font-mono text-[9px] uppercase tracking-wide text-gold-deep bg-gold-light/40 border border-gold/20 rounded-full px-2.5 py-1"
                        >
                          {a.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[12.5px] text-wine">
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
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8">
              <p className="text-white/75 text-[14.5px] leading-relaxed max-w-xl">{p.institutionsFooter}</p>
              <Link
                href="/apply/eligibility-check"
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] text-wine transition-transform hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#C9A04A,#9A7320)" }}
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