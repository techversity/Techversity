"use client";

import Image from "next/image";
import useInView from "@/hooks/useInView";

const network = ["Switzerland", "Malta", "France", "Georgia", "United States", "European Union"];

export default function AboutFirm() {
  const [heroRef, heroVisible] = useInView({ threshold: 0.15 });
  const [bodyRef, bodyVisible] = useInView({ threshold: 0.15 });

  return (
    <section id="firm">
      {/* ── hero: full-bleed image, auto height matching image's own aspect — no fixed vh gap ── */}
      <div ref={heroRef} className="relative w-full overflow-hidden">
        <Image
          src="/images/About/WhyTechversity/hero.avif"
          alt="Techversity crest"
          width={2400}
          height={1260}
          priority
          className="w-full h-auto block"
          style={{
            transform: heroVisible ? "scale(1)" : "scale(1.08)",
            transition: "transform 2.2s cubic-bezier(0.22,1,0.36,1)",
          }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,20,33,0.15) 0%, rgba(11,20,33,0.05) 40%, rgba(11,20,33,0.45) 100%)" }}
        />

        <div className="absolute inset-x-0 bottom-0 w-full max-w-[1180px] mx-auto px-6 lg:px-10 pb-8 lg:pb-10">
          <div
            className="flex items-center gap-3"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            <span className="font-mono text-[11px] tracking-[3px] text-gold-light">01 / 06</span>
            <span className="w-8 h-px bg-gold-light/60" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/75">The firm</span>
          </div>
        </div>

        <div
          className="hidden lg:flex absolute bottom-9 right-10 items-center gap-3"
          style={{
            opacity: heroVisible ? 0.7 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[3px] text-white/70 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="relative w-px h-14 bg-white/25 overflow-hidden">
            <span
              className="absolute left-0 top-0 w-full h-4 bg-gold-light"
              style={{ animation: "scrollCueMove 2s ease-in-out infinite" }}
            />
          </span>
        </div>
      </div>

      {/* ── what we are ── */}
      <div ref={bodyRef} className="relative bg-ivory py-24 lg:py-28 border-b border-line overflow-hidden">
        <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">
          {/* the main statement — pushed fully right */}
          <div
            className="relative grid grid-cols-1 lg:grid-cols-[1fr_640px] gap-6 mb-16 lg:mb-20"
            style={{
              opacity: bodyVisible ? 1 : 0,
              transform: bodyVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div className="hidden lg:flex items-center justify-end pr-6">
              <span
                className="font-display font-semibold leading-none select-none"
                style={{ fontSize: "220px", color: "rgba(154,115,32,0.09)" }}
              >
                01
              </span>
            </div>

            <div>
              <h1 className="font-display font-medium text-[44px] sm:text-[64px] lg:text-[74px] leading-[1.02] tracking-tight text-wine">
                An advisory,
                <br />
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(100deg,#9A7320 20%,#D9A441 50%,#9A7320 80%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  not a university.
                </span>
              </h1>

              <span
                className="block h-px bg-gradient-to-r from-gold/60 to-transparent mt-7 mb-7"
                style={{
                  width: bodyVisible ? "120px" : "0px",
                  transition: "width 1.1s cubic-bezier(0.16,1,0.3,1) 0.3s",
                }}
              />

              <p className="max-w-[440px] text-slate text-[15px] lg:text-[16px] leading-relaxed">
                Techversity introduces, vets, and shepherds. The university confers.
              </p>
            </div>
          </div>

          {/* header — full-width, big impactful heading matching the site's pattern */}
          <div
            className="max-w-[760px] mb-14 lg:mb-16"
            style={{
              opacity: bodyVisible ? 1 : 0,
              transform: bodyVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold font-semibold">What we are</span>
            <h2 className="font-display font-semibold text-[42px] sm:text-[54px] lg:text-[64px] text-wine leading-[1.04] mt-4">
              A firm that <span className="italic text-gold">introduces</span>,<br />not one that confers.
            </h2>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-20"
            style={{
              opacity: bodyVisible ? 1 : 0,
              transform: bodyVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <div className="hidden lg:block">
              <span
                className="font-display font-semibold leading-none block"
                style={{ fontSize: "120px", color: "rgba(154,115,32,0.12)" }}
              >
                01
              </span>
            </div>

            <div className="text-slate text-[15.5px] leading-[1.85]">
              {/* first paragraph — drop cap treatment */}
              <p>
                <span
                  className="float-left font-display font-semibold text-wine leading-[0.8] pr-3 pt-1"
                  style={{ fontSize: "64px" }}
                >
                  T
                </span>
                echversity is an advisory. We do not confer degrees — we introduce accomplished
                professionals to the accredited institutions that do. The firm operates as the
                intermediary the process has always needed, sitting between a recipient whose
                record merits recognition and an institution with the authority to formalise it.
              </p>

              {/* dramatic pull-quote break */}
              <p className="font-display italic text-wine text-[24px] lg:text-[28px] leading-snug my-10 clear-left">
                Discreet. <span className="text-gold">Measured.</span> Unhurried.
              </p>

              <p>
                The posture is European-editorial. We work with a small network of accredited
                universities in Switzerland, Malta, France, Georgia, the United States, and across
                the European Union — chosen for the depth of their conferment practice, not the
                breadth of their advertising.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-8">
                {network.map((country, i) => (
                  <span
                    key={country}
                    className="group relative font-mono text-[11px] uppercase tracking-[1px] text-wine border border-line bg-white rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_10px_24px_-6px_rgba(154,115,32,0.25)] cursor-default"
                    style={{
                      opacity: bodyVisible ? 1 : 0,
                      transform: bodyVisible ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
                    }}
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-gold/60 mr-2 align-middle transition-colors duration-300 group-hover:bg-gold" />
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}