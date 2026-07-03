import Image from "next/image";
import Link from "next/link";

export default function CurriculumHero({ cert, data, accent, enrollHref }) {
  // single fixed hero image — dedicated heroImage field, else first highlight image, else cert image
  const heroImg = data.heroImage || data.highlights?.[0]?.img || cert.image;

  return (
    <section className="relative h-[520px] lg:h-[600px] overflow-hidden bg-wine">
      {/* fixed image */}
      <div className="absolute inset-0">
        <Image src={heroImg} alt={cert.title} fill sizes="100vw" priority quality={90} className="object-cover object-center" />
      </div>

      {/* gradients */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(11,18,30,.72) 0%,rgba(11,18,30,.34) 34%,rgba(11,18,30,.6) 70%,rgba(11,18,30,.97) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(11,18,30,.97) 0%,rgba(11,18,30,.55) 40%,rgba(11,18,30,.08) 68%,transparent 85%)" }} />

      <div className="relative h-full max-w-[1180px] mx-auto px-5 lg:px-8 flex flex-col">
        {/* breadcrumb */}
        <div className="pt-7 lg:pt-9 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/45">
          <Link href="/" className="hover:text-white/80 transition-colors">Home</Link><span>/</span>
          <Link href="/certifications" className="hover:text-white/80 transition-colors">Certifications</Link><span>/</span>
          <span style={{ color: accent }}>{cert.title}</span>
        </div>

        {/* bottom content */}
        <div className="mt-auto pb-11 lg:pb-14 max-w-2xl">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[3px] px-3 py-1.5 rounded-full mb-6 border" style={{ color: accent, borderColor: `${accent}44`, background: `${accent}12` }}>
            {cert.duration} · {cert.level}
          </span>
          <h1 className="font-display font-semibold text-[40px] sm:text-[54px] lg:text-[66px] text-white leading-[0.98] mb-5" style={{ textShadow: "0 2px 30px rgba(11,18,30,.6)" }}>
            {cert.title}
          </h1>
          <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed max-w-xl mb-8 font-light">{data.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={enrollHref} className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5" style={{ background: accent, boxShadow: `0 14px 36px ${accent}55` }}>
              Apply Now →
            </Link>
            <a href="#curriculum" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/25 hover:bg-white/10 transition-colors">
              View Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}