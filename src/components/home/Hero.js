import Button from "@/components/ui/Button";

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
            {/* badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-wine-pale border border-wine/20 text-wine px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold mb-5 lg:mb-6">
              <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
              Internationally Accredited Doctoral Programs
            </div>

            {/* heading */}
            <h1 className="animate-fade-up delay-1 font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-wine leading-[1.05] tracking-tight mb-5 lg:mb-6">
              Your Global Path to <em className="text-gold font-semibold italic">Doctoral</em>{" "}
              &amp; Executive Credentials
            </h1>

            {/* subtext */}
            <p className="animate-fade-up delay-2 text-base lg:text-lg text-slate leading-relaxed mb-8 lg:mb-9 max-w-[520px]">
              Partner with internationally accredited universities across Europe, the US &amp; beyond.
              Personally guided, 100% online, career-focused for working professionals.
            </p>

            {/* buttons */}
            <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button href="/apply/eligibility-check" variant="primary">Assess Eligibility →</Button>
              <Button href="/programs" variant="secondary">Explore Programs →</Button>
            </div>
          </div>

          {/* RIGHT — alumni spotlight */}
          <div className="animate-fade-right delay-2 bg-white border border-line rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(22,38,61,0.12)] relative">
            {/* top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-wine to-gold z-20"></div>

            {/* photo area */}
            <div className="relative h-56 bg-wine">
              <img
                src="https://images.unsplash.com/photo-1758691737644-ef8be18256c3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/55 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-white/95 text-wine text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow z-10">
                <span className="text-gold">✦</span> Accredited Alumni
              </span>
            </div>

            {/* body */}
            <div className="p-6 lg:p-7">
              <p className="font-display italic text-xl text-ink leading-relaxed mb-5">
                “The applied research let me solve a real problem from my own company — and earn the title that opened boardroom doors.”
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-line">
                <div>
                  <div className="font-display font-semibold text-lg text-wine leading-tight">Dr. Rajesh Kumar</div>
                  <div className="text-xs text-mist">CFO → Doctor of Business Administration</div>
                </div>
                <span className="text-xs font-mono text-mist uppercase tracking-wider">India</span>
              </div>

              <div className="mt-3">
                <span className="inline-block bg-wine-light text-wine text-[11px] font-semibold px-2.5 py-1 rounded">
                  DBA · ESDST University
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}