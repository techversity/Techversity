import Link from "next/link";
import Image from "next/image";

export default function ArticleHero({ post }) {
  return (
    <section className="relative bg-wine">
      {/* full-bleed cover image */}
      <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[620px] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* editorial gradient — darkest at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,18,30,0.55) 0%, rgba(11,18,30,0.15) 30%, rgba(11,18,30,0.55) 68%, rgba(11,18,30,0.94) 100%)",
          }}
        />
        {/* fine grain texture, matching site-wide device */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "3px 3px" }}
        />

        {/* breadcrumb, floating top-left */}
        <div className="absolute top-0 left-0 right-0 max-w-[980px] mx-auto px-5 lg:px-8 pt-8 lg:pt-10">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/70 hover:text-gold-light transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
        </div>

        {/* title block, anchored to bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[980px] mx-auto px-5 lg:px-8 pb-9 lg:pb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span
              className="font-mono text-[10px] uppercase tracking-[2.5px] px-3 py-1.5 rounded-full font-semibold"
              style={{ background: `${post.categoryColor}26`, color: "#fff", boxShadow: `inset 0 0 0 1px ${post.categoryColor}66` }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="font-display font-semibold text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.06] text-white mb-0 max-w-[880px]">
            {post.title}
          </h1>
        </div>
      </div>

      {/* meta + dek — off the image, on solid navy, for clean readability */}
      <div className="max-w-[820px] mx-auto px-5 lg:px-8 pt-9 pb-10 lg:pt-11 lg:pb-12">
        {post.dek && (
          <p className="text-[18px] lg:text-[19.5px] text-white/75 leading-relaxed mb-8 max-w-[680px] font-light">
            {post.dek}
          </p>
        )}

        <div className="flex items-center gap-3 pt-7 border-t border-white/10">
          <span className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-[11px] text-wine font-bold shrink-0" style={{ background: "linear-gradient(135deg,#E8B85A,#9A7320)" }}>
            T
          </span>
          <span className="text-[13.5px] text-white font-semibold">{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-white/25" />
          <span className="font-mono text-[11.5px] text-white/50">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/25" />
          <span className="font-mono text-[11.5px] text-white/50">{post.readTime}</span>
        </div>
      </div>
    </section>
  );
}