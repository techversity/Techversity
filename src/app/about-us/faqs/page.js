import Image from "next/image";
import Link from "next/link";
import { faqCategories } from "@/lib/faqs";
import FaqCategoryList from "@/components/faqs/FaqCategoryList";
import FaqSidebar from "@/components/faqs/FaqSidebar";

export const metadata = {
  title: "FAQs — Techversity.ai",
  description:
    "Answers to common questions about Techversity's advisory model, accreditation, eligibility, timelines, and confidentiality.",
};

export default function FaqsPage() {
  return (
    <main className="bg-ivory">
      {/* ── hero strip ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/About/Faq/faq.avif"
          alt="Techversity — Support"
          width={2400}
          height={800}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />
      </section>

      {/* ── body: sidebar nav + grouped accordions ── */}
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
          <FaqSidebar categories={faqCategories} />

          <div className="max-w-[720px]">
            {faqCategories.map((cat) => (
              <FaqCategoryList key={cat.id} id={cat.id} title={cat.title} icon={cat.icon} items={cat.items} />
            ))}

            <div className="text-center mt-4 pt-8 border-t border-line lg:hidden">
              <p className="text-slate text-[13.5px]">
                Still have questions?{" "}
                <Link
                  href="/contact-us"
                  className="text-gold font-semibold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
                >
                  Talk to an advisor
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}