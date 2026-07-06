import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function UniFaq({ d }) {
  if (!d.faqs?.length) return null;

  return (
    <section className="bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* sticky heading */}
          <div className="lg:sticky lg:top-28">
            <Reveal direction="right">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Questions, Answered</p>
              </div>
              <h2 className="font-display font-semibold text-[30px] lg:text-[44px] text-wine leading-[1.08] mb-6">
                Everything you'd want to ask.
              </h2>
              <p className="text-slate text-[14.5px] leading-relaxed max-w-sm">
                The questions serious applicants ask before committing — answered plainly.
                Still unsure? A first conversation with an advisor is always free.
              </p>
            </Reveal>
          </div>

          {/* accordion */}
          <Reveal direction="left" delay={100}>
            <FaqAccordion items={d.faqs} accent="#9A7320" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}