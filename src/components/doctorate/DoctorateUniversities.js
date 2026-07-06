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

  return (
    <section className="bg-ivory relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #16263D 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">University Partners</p>
            </div>
            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08] mb-6">
              {universities.length} universities offer <span className="italic text-gold">doctoral pathways.</span>
            </h2>
            <p className="text-slate text-[15.5px] leading-relaxed max-w-xl">
              Every partner below is independently accredited and documented — review each
              one's standing before you apply, not after.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((u, i) => (
            <Reveal key={u.slug} direction="up" delay={i * 70}>
              <Link
                href={`/universities/${u.slug}`}
                className="uni-mini-card group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out"
                style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9)" }}
              >
                <div className="relative h-[120px] overflow-hidden">
                  {u.buildingImage ? (
                    <Image src={u.buildingImage} alt={u.name} fill sizes="380px" className="uni-mini-img object-cover object-center" />
                  ) : (
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#16263D,#21385C)" }} />
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.7) 0%, rgba(12,22,38,0.1) 65%)" }} />
                  <span className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-white/95 rounded-full pl-1 pr-2.5 py-1">
                    <span className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                      <Image src={flagUrl(u.country, 40)} alt={u.country} width={16} height={16} className="w-full h-full object-cover" unoptimized />
                    </span>
                    <span className="font-mono text-[8.5px] uppercase tracking-wide text-wine font-semibold">{u.country}</span>
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[16.5px] text-wine leading-tight mb-2 group-hover:text-gold-deep transition-colors duration-300">
                    {u.name}
                  </h3>
                  <p className="text-slate text-[12.5px] leading-relaxed mb-4 flex-1">{u.tagline}</p>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[11.5px] text-wine group-hover:text-gold-deep transition-colors duration-300">
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
        .uni-mini-card:hover { transform: translateY(-4px); box-shadow: 0 20px 45px rgba(22,38,61,0.14), 0 0 0 1px rgba(154,115,32,0.3); }
        .uni-mini-img { transform: scale(1.02); transition: transform 0.7s cubic-bezier(0.2,0,0.2,1); }
        .uni-mini-card:hover .uni-mini-img { transform: scale(1.1); }
      `}</style>
    </section>
  );
}