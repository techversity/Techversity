"use client";

const icons = {
  info: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  document: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
};

export default function FaqSidebar({ categories }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hidden lg:block sticky top-28 self-start">
      <p className="font-mono text-[10px] uppercase tracking-[2px] text-mist mb-5">Jump to</p>
      <div className="flex flex-col gap-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="group flex items-center gap-3 text-left py-2.5 px-3 rounded-lg transition-colors duration-300 hover:bg-white"
          >
            <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gold-deep border border-gold/25 bg-gold-light/30 transition-transform duration-300 group-hover:-translate-y-0.5">
              {icons[cat.icon]}
            </span>
            <span className="text-[13.5px] text-wine font-medium leading-snug">{cat.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-2xl border border-line bg-white">
        <p className="font-display font-semibold text-[15px] text-wine leading-snug mb-2">
          Still unsure?
        </p>
        <p className="text-slate text-[13px] leading-relaxed mb-4">
          A first conversation is always confidential and carries no obligation.
        </p>
        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[1.5px] text-gold-deep font-semibold"
        >
          Talk to an advisor <span>→</span>
        </a>
      </div>
    </div>
  );
}