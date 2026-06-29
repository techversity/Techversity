import LeadForm from "@/components/forms/LeadForm";

export const metadata = {
  title: "Contact Us — Techversity.ai",
  description: "Speak with a Techversity advisor about doctoral, executive, and certification programs. Get personal guidance on your global credential journey.",
};

const CONTACT = {
  phone:    "+1 (323) 916-8629",
  phoneRaw: "+13239168629",
  whatsapp: "13239168629",
  email:    "admissions@techversity.ai",
  address:  "1138 East Rosecrans Ave, Los Angeles, CA 90059, USA",
};

export default function ContactPage() {
  return (
    <main className="bg-ivory">

      {/* ── hero strip ── */}
      <section className="bg-wine relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-20 relative">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Get in Touch</p>
          <h1 className="font-display font-semibold text-[38px] lg:text-[54px] text-white leading-[1.05] max-w-2xl">
            Let's talk about your <span className="italic text-gold">global credential.</span>
          </h1>
          <p className="text-white/60 text-[16px] mt-5 max-w-xl leading-relaxed">
            Every enquiry is handled personally by a Techversity advisor — no call centres, no bots.
            Tell us where you are, and we'll map the path forward.
          </p>
        </div>
      </section>

      {/* ── body: info + form ── */}
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

          {/* LEFT: contact channels */}
          <div>
            <h2 className="font-display font-semibold text-[24px] text-wine mb-8">Reach us directly</h2>

            <div className="flex flex-col gap-7">
              {/* phone */}
              <a href={`tel:${CONTACT.phoneRaw}`} className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-line flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">Call Us</p>
                  <p className="text-[15px] text-wine font-medium group-hover:text-gold transition-colors">{CONTACT.phone}</p>
                </div>
              </a>

              {/* whatsapp */}
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-line flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#9A7320">
                    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 7 9.3a4.9 4.9 0 0 0 1 2.6 11 11 0 0 0 4.3 3.8c.6.3 1.1.4 1.5.5a3.5 3.5 0 0 0 1.6.1 2.7 2.7 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.2-.1-.4-.2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">WhatsApp</p>
                  <p className="text-[15px] text-wine font-medium group-hover:text-gold transition-colors">Message an advisor</p>
                </div>
              </a>

              {/* email */}
              <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-line flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">Email</p>
                  <p className="text-[15px] text-wine font-medium group-hover:text-gold transition-colors">{CONTACT.email}</p>
                </div>
              </a>

              {/* address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-line flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">Office</p>
                  <p className="text-[15px] text-wine font-medium leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>
            </div>

            {/* response promise */}
            <div className="mt-10 rounded-2xl p-6" style={{ background: "rgba(154,115,32,0.06)", border: "1px solid rgba(154,115,32,0.18)" }}>
              <p className="font-display font-semibold text-[17px] text-wine mb-1.5">Advisor response within 24 hours</p>
              <p className="text-[13.5px] text-slate leading-relaxed">
                Submit the form and a dedicated advisor will reach out to understand your goals and recommend the right pathway.
              </p>
            </div>
          </div>

          {/* RIGHT: form card */}
          <div className="bg-white rounded-[24px] border border-line p-8 lg:p-11 shadow-sm">
            <LeadForm
              source="contact_us"
              variant="contact"
              showMessage
              heading={<>Send us a <span className="italic text-gold">message.</span></>}
              subheading="Enquiry Form"
            />
          </div>

        </div>
      </section>
    </main>
  );
}