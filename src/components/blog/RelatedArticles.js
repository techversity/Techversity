import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blog";

export default function RelatedArticles({ currentSlug, category }) {
  const related = posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : 0) - (b.category === category ? -1 : 0))
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="bg-ivory-2/50 border-t border-line py-16 lg:py-20">
      <div className="max-w-[1100px] mx-auto px-5 lg:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">
          Keep Reading
        </p>
        <h2 className="font-display font-semibold text-[28px] lg:text-[34px] text-wine mb-10">
          More From the <span className="italic text-gold">Resource Centre</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group flex flex-col bg-white rounded-[18px] border border-line overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(22,38,61,0.14)] transition-all duration-300"
            >
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="360px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span
                  className="font-mono text-[9px] uppercase tracking-wider mb-2"
                  style={{ color: post.categoryColor }}
                >
                  {post.category}
                </span>
                <h3 className="font-display font-semibold text-[16px] text-wine leading-snug group-hover:text-gold-deep transition-colors duration-200">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}