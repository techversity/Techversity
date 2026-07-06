import Link from "next/link";
import Image from "next/image";

export default function ArticleHero({ post }) {
  return (
    <section className="bg-ivory pt-10 lg:pt-14 pb-0">
      <div className="max-w-[820px] mx-auto px-5 lg:px-8">
        {/* breadcrumb */}
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-mist hover:text-gold-deep transition-colors duration-150 mb-8"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Articles
        </Link>

        {/* category */}
        <span
          className="inline-block font-mono text-[10px] uppercase tracking-[2px] px-3 py-1.5 rounded-full font-semibold mb-5"
          style={{ background: `${post.categoryColor}14`, color: post.categoryColor }}
        >
          {post.category}
        </span>

        {/* title */}
        <h1 className="font-display font-semibold text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.08] text-wine mb-6">
          {post.title}
        </h1>

        {/* dek */}
        {post.dek && (
          <p className="text-[18px] lg:text-[19px] text-slate leading-relaxed mb-8 max-w-[680px]">
            {post.dek}
          </p>
        )}

        {/* meta row */}
        <div className="flex items-center gap-3 pb-8 border-b border-line">
          <span className="w-9 h-9 rounded-full bg-wine flex items-center justify-center font-mono text-[11px] text-white font-bold shrink-0">
            T
          </span>
          <span className="text-[13.5px] text-ink font-semibold">{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="font-mono text-[11.5px] text-mist">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="font-mono text-[11.5px] text-mist">{post.readTime}</span>
        </div>
      </div>

      {/* cover image */}
      <div className="max-w-[980px] mx-auto px-5 lg:px-8 mt-10">
        <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[460px] rounded-[24px] overflow-hidden">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 980px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}