"use client";


function Paragraph({ text }) {
  return (
    <p className="text-[16.5px] leading-[1.85] text-slate mb-6">{text}</p>
  );
}

function Heading({ text }) {
  return (
    <h2 className="font-display font-semibold text-[28px] lg:text-[32px] text-wine leading-snug mt-12 mb-5 pt-1">
      {text}
    </h2>
  );
}

function Quote({ text }) {
  return (
    <blockquote className="relative my-10 pl-7 pr-4 py-1 border-l-[3px] border-gold">
      <span className="absolute -left-[3px] top-0 w-[3px] h-full bg-gradient-to-b from-gold to-gold/20" />
      <p className="font-display italic text-[22px] lg:text-[24px] text-wine leading-snug">
        &ldquo;{text}&rdquo;
      </p>
    </blockquote>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mb-6 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-slate">
          <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComparisonTable({ headers, rows }) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-wine">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-mono text-[11px] uppercase tracking-wider text-gold-light px-5 py-3.5 first:rounded-tl-2xl last:rounded-tr-2xl"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-ivory-2/40"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-4 text-[14px] leading-relaxed align-top ${
                    ci === 0
                      ? "font-semibold text-wine whitespace-nowrap"
                      : "text-slate"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleBody({ blocks = [] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <Heading key={i} text={block.text} />;
          case "quote":
            return <Quote key={i} text={block.text} />;
          case "list":
            return <BulletList key={i} items={block.items} />;
          case "table":
            return <ComparisonTable key={i} headers={block.headers} rows={block.rows} />;
          case "paragraph":
          default:
            return <Paragraph key={i} text={block.text} />;
        }
      })}
    </div>
  );
}