"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import { posts, blogCategories } from "@/lib/blog";

const ArrowIcon = ({ color = "currentColor" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function useCardReveal(count) {
  const refs = useRef([]);
  const [shown, setShown] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setShown((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [count]);

  return { refs, shown };
}

function PostCard({ post, index }) {
  const [ref, visible] = [null, true]; // reveal handled by parent via data-idx
  return (
    <Link
      href={post.href}
      className="group relative bg-white rounded-[20px] border border-line overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(22,38,61,0.14)] transition-all duration-350"
    >
      <div className="relative h-[168px] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="380px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 45%, rgba(11,18,30,0.7) 100%)" }} />
        <span
          className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold bg-white/95"
          style={{ color: post.categoryColor }}
        >
          {post.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-[18px] text-wine leading-snug mb-2.5 group-hover:text-gold-deep transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-[13.5px] text-slate leading-relaxed mb-5 flex-1">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-line">
          <span className="font-mono text-[10px] text-mist uppercase tracking-wide">
            {post.date} · {post.readTime}
          </span>
          <span className="text-gold-deep group-hover:translate-x-1 transition-transform duration-200">
            <ArrowIcon color="#9A7320" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active]
  );

  const featured = active === "All" ? posts.find((p) => p.featured) : null;
  const rest = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  const { refs, shown } = useCardReveal(rest.length);

  return (
    <div>
      {/* category chips */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-mono text-[11px] uppercase tracking-[1px] px-4 py-2 rounded-full border transition-all duration-250"
            style={{
              borderColor: active === cat ? "#9A7320" : "#E0DCCF",
              background: active === cat ? "#16263D" : "#fff",
              color: active === cat ? "#F6EEDB" : "#4F5765",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* featured post — large spotlight card */}
      {featured && (
        <Link
          href={featured.href}
          className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[24px] border border-line overflow-hidden mb-12 hover:shadow-[0_24px_60px_-12px_rgba(22,38,61,0.16)] transition-shadow duration-350"
        >
          <div className="relative h-[240px] lg:h-auto overflow-hidden">
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute top-5 left-5 font-mono text-[9px] uppercase tracking-[1.5px] px-3 py-1.5 rounded-full font-semibold bg-white/95" style={{ color: featured.categoryColor }}>
              Featured
            </span>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-[1.5px] mb-3" style={{ color: featured.categoryColor }}>
              {featured.category}
            </span>
            <h3 className="font-display font-semibold text-[26px] lg:text-[30px] text-wine leading-tight mb-4 group-hover:text-gold-deep transition-colors duration-200">
              {featured.title}
            </h3>
            <p className="text-[14.5px] text-slate leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-2 font-mono text-[10px] text-mist uppercase tracking-wide">
              {featured.date} · {featured.readTime}
              <ArrowIcon color="#9A7320" />
            </div>
          </div>
        </Link>
      )}

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post, i) => (
          <div
            key={post.slug}
            ref={(el) => (refs.current[i] = el)}
            data-idx={i}
            style={{
              opacity: shown.has(i) ? 1 : 0,
              transform: shown.has(i) ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
            }}
          >
            <PostCard post={post} index={i} />
          </div>
        ))}
      </div>

      {rest.length === 0 && (
        <p className="text-center text-slate text-sm py-16">No posts in this category yet.</p>
      )}
    </div>
  );
}