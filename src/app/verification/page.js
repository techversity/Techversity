import VerificationForm from "@/components/verification/VerificationForm";

export const metadata = {
  title: "Verify a Credential — Techversity.ai",
  description:
    "Verify a degree or certification conferred through a Techversity partner institution — confirmed personally against the issuing body's register.",
};

export default function VerificationPage() {
  return (
    <main className="bg-ivory">
      {/* ── hero strip ── */}
      <section className="bg-wine relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-20 relative text-center">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Verification</p>
          <h1 className="font-display font-semibold text-[38px] lg:text-[54px] text-white leading-[1.05] max-w-2xl mx-auto">
            Verify a <span className="italic text-gold">credential.</span>
          </h1>
          <span className="block h-px bg-gradient-to-r from-transparent via-gold-light/70 to-transparent mt-6 mb-6 w-[100px] mx-auto" />
          <p className="text-white/60 text-[16px] max-w-xl mx-auto leading-relaxed">
            A record, once conferred, can be verified independently — by an employer, a licensing
            body, or the recipient themselves.
          </p>
        </div>
      </section>

      {/* ── form ── */}
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <VerificationForm />
      </section>
    </main>
  );
}