"use client";

import Image from "next/image";
import useInView from "@/hooks/useInView";
import CountUp from "@/components/ui/CountUp";

export default function AboutFounding() {
  const [ref, visible] = useInView({ threshold: 0.15 });

  return (
    <section id="founding" className="relative bg-ivory py-24 lg:py-28 border-b border-line overflow-hidden">
      <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">

        {/* header — matches the big-heading pattern used in "The firm" */}
        <div
          className="max-w-[760px] mb-14 lg:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] tracking-[3px] text-gold">05 / 06</span>
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-mist">The founding</span>
          </div>
          <h2 className="font-display font-semibold text-[42px] sm:text-[54px] lg:text-[64px] text-wine leading-[1.04]">
            Why this <span className="italic text-gold">firm</span> exists.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-start">

          {/* left — text */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            {/* giant translucent numeral — same device as "The firm" */}
            <span
              className="hidden lg:block absolute -top-4 -left-2 font-display font-semibold leading-none select-none pointer-events-none"
              style={{ fontSize: "160px", color: "rgba(154,115,32,0.08)", zIndex: 0 }}
            >
              05
            </span>

            <div className="relative text-slate text-[15px] leading-[1.85]">
              <p>
                <span
                  className="float-left font-display font-semibold text-wine leading-[0.8] pr-3 pt-1"
                  style={{ fontSize: "64px" }}
                >
                  T
                </span>
                echversity was founded in 2019 on a single observation: accomplished
                professionals — people whose life&rsquo;s work had already shaped industries,
                institutions, and disciplines — had no reliable path to the academic recognition
                their records merited. Universities confer, but they do not recruit.
                Professionals achieve, but they do not apply.
              </p>

              {/* pull-quote break — same treatment as "Discreet. Measured. Unhurried." */}
              <p className="font-display italic text-wine text-[24px] lg:text-[28px] leading-snug my-10 clear-left">
                The gap was <span className="text-gold">structural.</span> The firm was built to
                occupy it.
              </p>

              <p>
                An intermediary with standing at both ends. We cultivated relationships with
                accredited institutions across Europe and the United States, studied how
                conferment committees evaluate candidates, and designed an advisory practice
                around one commitment: the recipient&rsquo;s record arrives at the right
                institution, in the right form, at the right time.
              </p>
              <p className="mt-5">
                Seven years and eight partner institutions later, the practice has not changed.
                The firm remains small by intention. Every engagement is assigned to a named
                partner. We still read every submission personally. And we still say no more
                often than we say yes — because the record must be legible before the
                conversation begins.
              </p>
            </div>

            {/* animated stats */}
            <div className="relative flex gap-10 lg:gap-14 mt-12 pt-9 border-t border-line">
              <div>
                <div className="font-display font-semibold text-[30px] lg:text-[34px] text-wine leading-none tracking-tight">
                  2019
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[1px] text-mist mt-2.5 leading-tight">
                  Firm founded
                </div>
              </div>
              <div>
                <div className="font-display font-semibold text-[30px] lg:text-[34px] text-wine leading-none tracking-tight">
                  <CountUp end={8} duration={1400} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[1px] text-mist mt-2.5 leading-tight">
                  Partner institutions
                </div>
              </div>
              <div>
                <div className="font-display font-semibold text-[30px] lg:text-[34px] text-wine leading-none tracking-tight">
                  &lt;<CountUp end={40} duration={1400} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[1px] text-mist mt-2.5 leading-tight">
                  Recipients per year
                </div>
              </div>
            </div>
          </div>

          {/* right — framed image with museum-label caption plate */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            }}
          >
            <div className="relative">
              {/* corner brackets — draw in on reveal */}
              <span
                className="absolute -top-3 -left-3 w-9 h-9 border-t-2 border-l-2 z-10 pointer-events-none"
                style={{
                  borderColor: "#9A7320",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.5s ease 0.9s",
                }}
              />
              <span
                className="absolute -bottom-3 -right-3 w-9 h-9 border-b-2 border-r-2 z-10 pointer-events-none"
                style={{
                  borderColor: "#9A7320",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.5s ease 0.9s",
                }}
              />

              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://i.pinimg.com/736x/13/71/0d/13710de3bafd22eeec3eb2627f9036a2.jpg"
                  alt="Reading room, wooden shelving"
                  fill
                  className="object-cover"
                  style={{
                    transform: visible ? "scale(1)" : "scale(1.1)",
                    transition: "transform 1.6s cubic-bezier(0.22,1,0.36,1) 0.1s",
                  }}
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(22,38,61,0) 55%, rgba(22,38,61,0.55) 100%)" }}
                />

                {/* caption plate */}
                <div
                  className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.6s ease 1.1s, transform 0.6s ease 1.1s",
                  }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/85 bg-black/20 backdrop-blur-sm rounded-full px-3.5 py-1.5 border border-white/15">
                    Est. 2019
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/85 bg-black/20 backdrop-blur-sm rounded-full px-3.5 py-1.5 border border-white/15">
                    8 Partners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}