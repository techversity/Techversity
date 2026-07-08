import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getUniversitiesByProgram } from "@/lib/universities";
import { flagUrl } from "@/lib/flag";

const DOCTORATE_SLUGS = ["dba", "phd", "honorary-doctorate", "honorary-professorship"];

export default function DoctorateUniversities() {
  const seen = new Map();
  DOCTORATE_SLUGS.forEach((slug) => {
    getUniversitiesByProgram(slug).forEach((u) => {
      if (!seen.has(u.slug)) seen.set(u.slug, u);
    });
  });
  const universities = Array.from(seen.values());

  if (!universities.length) return null;

  const [featured, ...rest] = universities;

  return (
    <section className="bg-ivory relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #16263D 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" style={{ background: "#9A7320" }} />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">University Partners</p>
              </div>
              <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08]">
                {universities.length} universities, <span className="italic text-gold">one accreditation standard.</span>
              </h2>
            </div>
            <p className="text-slate text-[14.5px] leading-relaxed max-w-sm lg:text-right">
              Every partner below is independently accredited and documented — review each
              one's standing before you apply, not after.
            </p>
          </div>
        </Reveal>

        {/* featured spotlight card — first partner, wide format */}
        {featured && (
          <Reveal direction="up">
            <Link
              href={`/universities/${featured.slug}`}
              className="uni-feature-card group relative flex flex-col md:flex-row h-full bg-white rounded-[22px] overflow-hidden mb-6"
              style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}
            >
              <div className="relative h-[220px] md:h-auto md:w-[42%] shrink-0 overflow-hidden">
                {featured.buildingImage ? (
                  <Image src={featured.buildingImage} alt={featured.name} fill sizes="500px" className="uni-feature-img object-cover object-center" />
                ) : (
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#16263D,#21385C)" }} />
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.6) 0%, rgba(12,22,38,0.05) 60%)" }} />
                <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 rounded-full pl-1 pr-2.5 py-1">
                  <span className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0">
                    <Image src={flagUrl(featured.country, 40)} alt={featured.country} width={18} height={18} className="w-full h-full object-cover" unoptimized />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wide text-wine font-semibold">{featured.country}</span>
                </span>
              </div>

              <div className="relative p-7 lg:p-9 flex flex-col flex-1">
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold mb-3">Featured Partner · 01</span>
                <h3 className="font-display font-semibold text-[24px] lg:text-[30px] text-wine leading-tight mb-3 group-hover:text-gold-deep transition-colors duration-300">
                  {featured.name}
                </h3>
                <p className="text-slate text-[14px] leading-relaxed mb-6 max-w-lg">{featured.tagline}</p>

                {featured.accreditation?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.accreditation.slice(0, 3).map((a) => (
                      <span key={a.name} className="font-mono text-[9px] uppercase tracking-wide text-gold-deep bg-gold-light border border-gold/25 rounded-full px-2.5 py-1">
                        {a.name}
                      </span>
                    ))}
                  </div>
                )}

                <span className="inline-flex items-center gap-2 font-semibold text-[13px] text-wine group-hover:text-gold-deep transition-colors duration-300 mt-auto">
                  View Institution
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* rest of partners — refined grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((u, i) => (
            <Reveal key={u.slug} direction="up" delay={i * 70}>
              <Link
                href={`/universities/${u.slug}`}
                className="uni-mini-card group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}
              >
                <div className="relative h-[170px] overflow-hidden">
                  {u.buildingImage ? (
                    <Image src={u.buildingImage} alt={u.name} fill sizes="380px" className="uni-mini-img object-cover object-center" />
                  ) : (
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#16263D,#21385C)" }} />
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.72) 0%, rgba(12,22,38,0.08) 65%)" }} />

                  <span className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-white/95 rounded-full pl-1 pr-2.5 py-1">
                    <span className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                      <Image src={flagUrl(u.country, 40)} alt={u.country} width={16} height={16} className="w-full h-full object-cover" unoptimized />
                    </span>
                    <span className="font-mono text-[8.5px] uppercase tracking-wide text-wine font-semibold">{u.country}</span>
                  </span>

                  <span className="absolute top-3.5 right-3.5 font-mono text-[10px] text-white/70 font-semibold">
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  {/* gold top-bar reveal on hover */}
                  <span className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" style={{ background: "linear-gradient(90deg,#E8B85A,#D9A441,#9A7320)" }} />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[16.5px] text-wine leading-tight mb-2 group-hover:text-gold-deep transition-colors duration-300">
                    {u.name}
                  </h3>
                  <p className="text-slate text-[12.5px] leading-relaxed mb-4 flex-1">{u.tagline}</p>

                  {u.accreditation?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {u.accreditation.slice(0, 2).map((a) => (
                        <span key={a.name} className="font-mono text-[8.5px] uppercase tracking-wide text-gold-deep bg-gold-light border border-gold/20 rounded-full px-2 py-0.5">
                          {a.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-flex items-center gap-1.5 font-semibold text-[11.5px] text-wine group-hover:text-gold-deep transition-colors duration-300 mt-auto">
                    View Institution
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .uni-feature-card, .uni-mini-card {
          transition: transform 0.5s cubic-bezier(0.2,0,0.2,1), box-shadow 0.5s ease;
        }
        .uni-feature-card:hover, .uni-mini-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 26px 55px rgba(22,38,61,0.16), 0 0 0 1px rgba(154,115,32,0.32);
        }
        .uni-feature-img, .uni-mini-img {
          transform: scale(1.02);
          transition: transform 0.7s cubic-bezier(0.2,0,0.2,1);
        }
        .uni-feature-card:hover .uni-feature-img,
        .uni-mini-card:hover .uni-mini-img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}