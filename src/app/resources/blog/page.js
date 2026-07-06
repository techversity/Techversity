import Image from "next/image";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Resources & Insights — Techversity.ai",
  description:
    "Guides on doctoral pathways, accreditation, certifications, and career outcomes for globally-minded professionals.",
};

export default function BlogHubPage() {
  return (
    <main className="bg-ivory">
      {/* ── hero strip — image only, text is baked into the image ── */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/Blog/hero.avif"
          alt="Techversity — Resources & Insights"
          width={2400}
          height={1000}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />
      </section>

      {/* ── grid ── */}
      <section className="max-w-[1260px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <BlogGrid />
      </section>
    </main>
  );
}