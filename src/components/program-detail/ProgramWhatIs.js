import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ProgramWhatIs({ p }) {
  if (!p.whatIs?.length) return null;

  return (
    <section className="relative bg-white">
      <div className="absolute top-40 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.5] pointer-events-none -z-0" style={{ background: "rgba(154,115,32,0.06)" }} />

      <div className="relative max-w-[1240px] mx-auto px-5 lg:px-8 py-20 lg:py-28">

        {/* HEADING — full width, centered, premium */}
        <Reveal direction="up">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold">What It Is</p>
            </div>
            <h2 className="font-display font-semibold text-[38px] lg:text-[62px] text-wine leading-[1.02] mb-7">
              An honour,<br />not a <span className="italic text-gold">qualification.</span>
            </h2>
            <p className="text-slate text-[16px] lg:text-[18px] leading-[1.8] max-w-2xl">{p.whatIsIntro}</p>
          </div>
        </Reveal>

        {/* IMAGE (sticky) + TEXT (scroll) */}
        <div className="grid lg:grid-cols-[460px_1fr] gap-12 lg:gap-16 items-start">

          {/* LEFT — sticky image */}
          <div className="lg:sticky lg:top-24">
            <Reveal direction="right">
              {p.whatIsImage && (
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 rounded-tl-lg z-10" style={{ borderColor: "#9A7320" }} />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 rounded-br-lg z-10" style={{ borderColor: "#9A7320" }} />
                  <div className="relative rounded-[14px] overflow-hidden" style={{ boxShadow: "0 24px 56px rgba(22,38,61,0.22)" }}>
                    <Image src={p.whatIsImage} alt="Honorary doctorate" width={920} height={1150} className="w-full h-auto object-contain" />
                  </div>
                </div>
              )}
            </Reveal>
          </div>

          {/* RIGHT — scrolling cards + quote */}
          <div>
            <div className="space-y-4">
              {p.whatIs.map((item, i) => (
                <Reveal key={item.title} direction="up" delay={i * 55}>
                  <div className="group relative rounded-2xl border border-line bg-ivory/25 p-7 lg:p-8 overflow-hidden transition-all duration-300 hover:bg-white hover:border-gold/30 hover:shadow-[0_18px_44px_rgba(22,38,61,0.1)]">
                    <span className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400" style={{ background: "#9A7320" }} />
                    <div className="flex items-start gap-5">
                      <span className="font-display font-semibold text-[30px] leading-none shrink-0" style={{ color: "rgba(154,115,32,0.3)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-[19px] lg:text-[21px] text-wine leading-snug mb-2.5">{item.title}</h3>
                        <p className="text-slate text-[14px] leading-[1.8]">{item.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {p.whatIsQuote && (
              <Reveal direction="up" delay={100}>
                <div className="mt-8 rounded-2xl p-8 lg:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #16263D, #21385C)" }}>
                  <span className="font-display text-[70px] text-gold/25 leading-none absolute top-3 left-6">&ldquo;</span>
                  <p className="relative font-display italic text-[19px] lg:text-[24px] text-white leading-[1.5] pl-8">
                    {p.whatIsQuote}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}