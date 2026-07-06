import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ProgramInstitutions({ p }) {
  if (!p.institutions?.length) return null;

  return (
    <section id="institutions" className="scroll-mt-20 bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Choose Your Institution</p>
            </div>
            <h2 className="font-display font-semibold text-[30px] lg:text-[44px] text-wine leading-[1.08] mb-6">
              Distinguished institutions, one standard.
            </h2>
            <p className="text-slate text-[15px] lg:text-[16.5px] leading-relaxed">{p.institutionsIntro}</p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {p.institutions.map((inst, i) => (
            <Reveal key={inst.slug} direction="up" delay={i * 80}>
              <div className="group grid lg:grid-cols-[380px_1fr] rounded-[20px] overflow-hidden bg-white border border-line transition-all duration-400 hover:shadow-[0_28px_60px_rgba(22,38,61,0.14)]">
                {/* image */}
                <div className="relative h-[220px] lg:h-auto overflow-hidden">
                  <Image src={inst.image} alt={inst.name} fill sizes="380px" className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.5), transparent 55%)" }} />
                  <div className="absolute bottom-5 left-6">
                    <p className="font-display font-semibold text-[22px] text-white leading-tight">{inst.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-white/75 mt-1">{inst.region}</p>
                  </div>
                </div>

                {/* body */}
                <div className="p-7 lg:p-9">
                  <p className="text-slate text-[14px] leading-[1.85] mb-6">{inst.description}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist mb-1.5">Recognition Categories</p>
                      <p className="text-wine text-[13px] font-medium leading-relaxed">{inst.categories}</p>
                    </div>
                    <div className="pt-4 border-t border-line">
                      <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist mb-1.5">Standing &amp; Accreditation</p>
                      <p className="text-wine text-[13px] font-medium leading-relaxed">{inst.standing}</p>
                    </div>
                  </div>

                  <Link href={`/universities/${inst.slug}`}
                    className="inline-flex items-center gap-2 mt-7 font-semibold text-[13px] text-wine border border-wine/25 rounded-full px-5 py-2.5 transition-colors hover:bg-wine hover:text-white">
                    View Institution
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {p.institutionsFooter && (
          <Reveal direction="up" delay={100}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl bg-wine p-7 lg:p-8">
              <p className="text-white/80 text-[14.5px] leading-relaxed max-w-xl">{p.institutionsFooter}</p>
              <Link href="/apply/eligibility-check" className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] text-white transition-transform hover:-translate-y-0.5" style={{ background: "#9A7320" }}>
                Book a Consultation
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}