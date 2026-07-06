"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import useInView from "@/hooks/useInView";
import { posts } from "@/lib/blog";


/* ── Featured card ── */
function FeaturedPost({ post, visible, imgKey, active, onDotClick, dotCount }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={post.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-line h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* image — wipes in from left on every switch via keyframe */}
      <div className="relative overflow-hidden" style={{ height: "320px" }}>
        <div
          key={imgKey}
          style={{
            position: "absolute", inset: 0,
            animation: visible ? "blogImgWipe 0.85s cubic-bezier(0.77,0,0.175,1) forwards" : "none",
            clipPath: visible ? undefined : "inset(0 100% 0 0)",
          }}
        >
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover object-center"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
            sizes="55vw"
          />
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent z-10" />

        {/* category chip */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="font-mono text-[9px] uppercase tracking-[2px] px-2.5 py-1.5 rounded-sm font-semibold text-white"
            style={{ background: post.categoryColor }}
          >
            {post.category}
          </span>
        </div>

        {/* read time */}
        <div className="absolute top-4 right-4 z-20">
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1.5 rounded-sm">
            {post.readTime}
          </span>
        </div>

        {/* dot nav */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); onDotClick(i); }}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "20px" : "6px",
                  height: "6px",
                  background: active === i ? "#fff" : "rgba(255,255,255,0.4)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-7">
        <h3 className="font-display font-semibold text-[24px] text-wine leading-snug mb-4 group-hover:text-gold transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-[13px] text-slate leading-relaxed flex-1 mb-6">
          {post.excerpt}
        </p>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t border-line">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-wine flex items-center justify-center font-mono text-[9px] text-white font-bold">T</span>
            <span className="text-[11px] text-mist">{post.author} · {post.date}</span>
          </div>
          <span
            className="flex items-center gap-1.5 font-semibold text-[12px] transition-all duration-200"
            style={{ color: hovered ? post.categoryColor : "#8A92A0" }}
          >
            Read Article
            <svg
              style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s ease" }}
              width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>

      {/* colored bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${post.categoryColor}, ${post.categoryColor}88)`,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
      />
    </Link>
  );
}

/* ── Compact card ── */
function CompactPost({ post, visible, delay, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group w-full text-left"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div
        className={`relative flex gap-5 rounded-2xl border p-5 overflow-hidden transition-all duration-250
          ${isActive
            ? "bg-white border-gold/30 shadow-[0_4px_20px_rgba(154,115,32,0.10)]"
            : "bg-white border-line hover:bg-white"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* left accent */}
        <span
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-transform duration-350 origin-bottom"
          style={{
            background: post.categoryColor,
            transform: isActive || hovered ? "scaleY(1)" : "scaleY(0)",
          }}
        />

        {/* image */}
        <div className="relative shrink-0 rounded-xl overflow-hidden" style={{ width: "100px", height: "100px" }}>
          <div
            style={{
              position: "absolute", inset: 0,
              clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              transition: `clip-path 0.7s cubic-bezier(0.77,0,0.175,1) ${delay + 100}ms`,
            }}
          >
            <Image
              src={post.img}
              alt={post.title}
              fill
              className="object-cover"
              style={{
                transform: isActive || hovered ? "scale(1.08)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
              sizes="100px"
            />
          </div>
        </div>

        {/* text */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <span
              className="font-mono text-[8px] uppercase tracking-[2px] mb-2 block"
              style={{ color: post.categoryColor }}
            >
              {post.category}
            </span>
            <h3
              className="font-display font-semibold text-[17px] leading-snug mb-2 transition-colors duration-200 line-clamp-2"
              style={{ color: isActive || hovered ? post.categoryColor : "#16263D" }}
            >
              {post.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <span className="font-mono text-[9px] text-mist">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span className="font-mono text-[9px] text-mist">{post.readTime}</span>
            {isActive && (
              <span
                className="ml-auto font-mono text-[8px] uppercase tracking-wider font-semibold"
                style={{ color: post.categoryColor }}
              >
                Reading →
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

// Homepage only ever shows a short preview — not the full library.
// Change this number if you want 3 instead of 4 (or vice versa).
const PREVIEW_COUNT = 3;

export default function BlogPreview() {
  const [sectionRef, visible] = useInView({ threshold: 0.08 });
  const [active,   setActive]  = useState(0);
  const [imgKey,   setImgKey]  = useState(0);
  const timerRef   = useRef(null);

  const previewPosts = posts.slice(0, PREVIEW_COUNT);

  const resetGo = useCallback((i) => {
    clearInterval(timerRef.current);
    setActive(i);
    setImgKey(k => k + 1);
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % previewPosts.length);
      setImgKey(k => k + 1);
    }, 4500);
  }, [previewPosts.length]);

  useEffect(() => {
    if (!visible) return;
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % previewPosts.length);
      setImgKey(k => k + 1);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [visible, previewPosts.length]);

  return (
    <section ref={sectionRef} className="bg-ivory-2 py-20 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">From the Blog</p>
            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-tight">
              Guides &amp; Insights<br />
              <span className="italic text-gold">Worth Reading</span>
            </h2>
          </div>
          <Link
            href="/resources/blog"
            className="hidden sm:flex items-center gap-2 font-semibold text-[13px] text-wine hover:text-gold transition-colors duration-150 group"
          >
            Visit Resource Centre
            <svg className="group-hover:translate-x-1 transition-transform duration-150" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-start">

          <FeaturedPost
            post={previewPosts[active]}
            visible={visible}
            imgKey={imgKey}
            active={active}
            onDotClick={resetGo}
            dotCount={previewPosts.length}
          />

          <div className="flex flex-col gap-4">
            {previewPosts.map((post, i) => (
              <CompactPost
                key={post.href}
                post={post}
                visible={visible}
                delay={150 + i * 100}
                isActive={active === i}
                onClick={() => resetGo(i)}
              />
            ))}

            <Link
              href="/resources/blog"
              className="group flex items-center justify-between rounded-2xl border-2 border-dashed border-line hover:border-gold/40 hover:bg-gold/[0.02] transition-all duration-300 p-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(30px)",
                transition: "opacity 0.6s ease 460ms, transform 0.6s ease 460ms",
              }}
            >
              <div>
                <p className="font-display font-semibold text-[16px] text-wine group-hover:text-gold transition-colors duration-200">
                  View All Articles →
                </p>
                <p className="font-mono text-[9px] text-mist mt-0.5">10+ guides published at launch</p>
              </div>
              <div className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-mist group-hover:border-gold group-hover:text-gold transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blogImgWipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
      `}</style>
    </section>
  );
}