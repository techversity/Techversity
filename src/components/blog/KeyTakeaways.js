export default function KeyTakeaways({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="my-10 rounded-2xl bg-wine px-7 py-7 lg:px-8 lg:py-8">
      <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold mb-4">
        Key Takeaways
      </p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-gold-light/90">
            <span className="shrink-0 font-display italic text-gold text-[15px] leading-relaxed">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}