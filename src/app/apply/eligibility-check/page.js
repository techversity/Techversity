import EligibilityWizard from "@/components/forms/EligibilityWizard";

export const metadata = {
  title: "Check Your Eligibility — Techversity.ai",
  description: "Answer a few quick questions and a Techversity advisor will map the right doctoral, executive, or certification pathway for you.",
};

const STEPS = [
  { n: "01", t: "Answer a few questions", d: "Tell us your standing, goal, and timeline — under two minutes." },
  { n: "02", t: "Get matched", d: "We pair you with the right programme and accredited university partner." },
  { n: "03", t: "Talk to an advisor", d: "A dedicated advisor calls within 24 hours to guide your next step." },
];

export default function EligibilityPage() {
  return (
    <main className="bg-ivory">
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* LEFT: context */}
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Eligibility Check</p>
            <h1 className="font-display font-semibold text-[36px] lg:text-[50px] text-wine leading-[1.05] mb-6">
              See if you <span className="italic text-gold">qualify.</span>
            </h1>
            <p className="text-slate text-[16px] leading-relaxed mb-10 max-w-md">
              Every Techversity pathway is offered through accredited university partners.
              Answer a few questions and we'll show you where you stand — no commitment required.
            </p>

            <div className="flex flex-col gap-7">
              {STEPS.map(s => (
                <div key={s.n} className="flex items-start gap-4">
                  <span className="font-display font-semibold text-[18px] text-gold/70 shrink-0 w-8">{s.n}</span>
                  <div>
                    <p className="font-display font-semibold text-[17px] text-wine mb-1">{s.t}</p>
                    <p className="text-[13.5px] text-slate leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: wizard */}
          <EligibilityWizard source="eligibility_check" />

        </div>
      </section>
    </main>
  );
}