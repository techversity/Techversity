import Button from "@/components/ui/Button";
import AlumniCard from "@/components/ui/AlumniCard";

export default function Hero() {
  return (
    <section className="bg-ivory border-b border-line py-12 lg:py-20 relative overflow-hidden">
      {/* ghosted watermark (desktop only) */}
      <span className="hidden lg:block absolute -right-4 top-4 font-display italic font-bold text-[280px] text-wine/[0.035] leading-none pointer-events-none select-none">
        Dr.
      </span>

      <div className="max-w-[1260px] mx-auto px-5 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 bg-wine-pale border border-wine/20 text-wine px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold mb-5 lg:mb-6">
              <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
              Internationally Accredited Doctoral Programs
            </div>

            <h1 className="animate-fade-up delay-1 font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-wine leading-[1.05] tracking-tight mb-5 lg:mb-6">
              Your Global Path to <em className="text-gold font-semibold italic">Doctoral</em>{" "}
              &amp; Executive Credentials
            </h1>

            <p className="animate-fade-up delay-2 text-base lg:text-lg text-slate leading-relaxed mb-8 lg:mb-9 max-w-[520px]">
              Partner with internationally accredited universities across Europe, the US &amp; beyond.
              Personally guided, 100% online, career-focused for working professionals.
            </p>

            <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button href="/apply/eligibility-check" variant="primary">Assess Eligibility →</Button>
              <Button href="/programs" variant="secondary">Explore Programs →</Button>
            </div>
          </div>

          {/* RIGHT — alumni rotating card */}
          <div className="animate-fade-right delay-2">
            <AlumniCard />
          </div>

        </div>
      </div>
    </section>
  );
}