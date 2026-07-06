import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/programs";

export default function CertificationsTeaser() {
  const certs = programs.filter((p) => p.category === "certifications").slice(0, 3);
  if (!certs.length) return null;

  return (
    <section id="certifications" className="scroll-mt-24 bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-gold">04</span>
                <span className="w-10 h-0.5 rounded-full bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold">Certifications</p>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-wine leading-[1.1]">
                Career-ready in weeks, not years.
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
            <Reveal key={c.slug} direction="up" delay={i * 90}>
              <Link
                href={`/certifications/${c.slug}`}
                className="cert-mini-card group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative h-[120px] overflow-hidden">
                  <Image src={c.image} alt={c.title} fill sizes="380px" className="cert-mini-img object-cover object-center" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,18,30,0.65) 100%)" }} />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-[16px] text-wine leading-snug mb-1.5 group-hover:text-gold-deep transition-colors duration-200">
                    {c.title}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-mist">{c.duration} · {c.fee}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .cert-mini-card { box-shadow: 0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.9); transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .cert-mini-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(22,38,61,0.14); }
        .cert-mini-img { transition: transform 0.7s ease; }
        .cert-mini-card:hover .cert-mini-img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}