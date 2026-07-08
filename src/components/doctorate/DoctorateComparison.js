import Reveal from "@/components/ui/Reveal";

const ROWS = [
  {
    label: "Definition",
    phd: "Research doctorate — an original contribution to academic knowledge",
    dba: "Practitioner doctorate — applied research solving a real business problem",
    hd: "Conferred recognition of exceptional professional achievement",
    hp: "Conferred academic title recognising expertise & thought leadership",
  },
  {
    label: "Who It's For",
    phd: "Aspiring academics, researchers, subject specialists",
    dba: "Senior executives, founders, consultants (10+ yrs experience)",
    hd: "Distinguished leaders with a documented record of impact",
    hp: "Accomplished professionals recognised for expertise & influence",
  },
  {
    label: "Typical Duration",
    type: "duration",
    phd: { text: "24–48 months", fill: 75 },
    dba: { text: "18–36 months", fill: 56 },
    hd: { text: "6–12 months", fill: 19 },
    hp: { text: "6–12 months", fill: 19 },
  },
  {
    label: "Research / Dissertation Required?",
    type: "boolean",
    phd: { yes: true, text: "Full dissertation & viva defence" },
    dba: { yes: true, text: "Applied research project & defence" },
    hd: { yes: false, text: "Conferred, not earned" },
    hp: { yes: false, text: "Conferred, not earned" },
  },
  {
    label: "Typical Outcome",
    phd: "Academic career, publishing, research leadership",
    dba: "Board credibility, consulting authority, executive standing",
    hd: "Formal doctoral title, institutional recognition",
    hp: "Formal 'Prof.' title, institutional recognition",
  },
];

const COLUMNS = [
  { key: "phd", label: "PhD", href: "/programs/phd", accent: "#16263D", track: "Academic Track" },
  { key: "dba", label: "DBA", href: "/programs/dba", accent: "#9A7320", track: "Executive Track" },
  { key: "hd", label: "Honorary Doctorate", href: "/programs/honorary-doctorate", accent: "#7C5C16", track: "Recognition" },
  { key: "hp", label: "Honorary Professorship", href: "/programs/honorary-professorship", accent: "#21385C", track: "Recognition" },
];

function CheckMark({ on, color }) {
  return on ? (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
      <circle cx="7.5" cy="7.5" r="7.5" fill={color} fillOpacity="0.12" />
      <path d="M4.5 7.7L6.4 9.6L10.5 5.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#94A3B8" fillOpacity="0.12" />
      <path d="M5.3 5.3L9.7 9.7M9.7 5.3L5.3 9.7" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DoctorateComparison() {
  return (
    <section id="compare" className="scroll-mt-20 bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Compare Doctoral Paths</p>
            </div>
            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08] mb-6">
              Four pathways, <span className="italic text-gold">one standard.</span>
            </h2>
            <p className="text-slate text-[15.5px] leading-relaxed">
              Each doctoral pathway is built for a different profile and a different goal.
              Here's exactly how they differ — side by side, no fine print.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="rounded-2xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(74,16,35,0.18)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-wine">
                    <th className="text-left px-5 py-6 w-[200px] align-bottom">
                      <span className="font-mono text-[9.5px] uppercase tracking-[2px] text-white/40">
                        Compare across
                      </span>
                    </th>
                    {COLUMNS.map((c) => (
                      <th key={c.key} className="text-left px-5 py-6 align-bottom">
                        <a href={c.href} className="group inline-block">
                          <span
                            className="block h-[3px] w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-12"
                            style={{ background: c.accent === "#16263D" || c.accent === "#21385C" ? "#D9A441" : "#E8D5A3" }}
                          />
                          <span className="block font-display font-semibold text-[17px] text-white group-hover:text-gold-light transition-colors">
                            {c.label}
                          </span>
                          <span className="block font-mono text-[9.5px] uppercase tracking-[1.5px] text-white/45 mt-1.5">
                            {c.track}
                          </span>
                        </a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, ri) => (
                    <tr
                      key={row.label}
                      className={`group/row transition-colors ${ri % 2 === 0 ? "bg-white" : "bg-ivory/50"} hover:bg-gold/[0.05]`}
                    >
                      <td className="px-5 py-6 align-top border-r border-line/70">
                        <span className="font-mono text-[10px] uppercase tracking-wide text-mist leading-relaxed">
                          {row.label}
                        </span>
                      </td>

                      {COLUMNS.map((c) => {
                        const cell = row[c.key];

                        if (row.type === "duration") {
                          return (
                            <td key={c.key} className="px-5 py-6 align-top">
                              <p className="text-[13.5px] font-semibold text-wine mb-2.5 tabular-nums">{cell.text}</p>
                              <div className="h-1 w-full max-w-[110px] rounded-full bg-line/60 overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${cell.fill}%`, background: c.accent }}
                                />
                              </div>
                            </td>
                          );
                        }

                        if (row.type === "boolean") {
                          return (
                            <td key={c.key} className="px-5 py-6 align-top">
                              <div className="flex items-start gap-2">
                                <CheckMark on={cell.yes} color={c.accent} />
                                <div>
                                  <p className="text-[12px] font-semibold uppercase tracking-wide mb-1" style={{ color: cell.yes ? c.accent : "#94A3B8" }}>
                                    {cell.yes ? "Required" : "Not required"}
                                  </p>
                                  <p className="text-[13px] leading-relaxed text-slate">{cell.text}</p>
                                </div>
                              </div>
                            </td>
                          );
                        }

                        return (
                          <td key={c.key} className="px-5 py-6 text-[13.5px] leading-relaxed text-slate align-top">
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* footnote strip — closes the "no fine print" promise with an actual, visible note */}
            <div className="flex items-center gap-2.5 px-5 py-4 border-t border-line bg-ivory/70">
              <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
              <p className="font-mono text-[10px] uppercase tracking-wide text-mist">
                Honorary pathways are conferred recognitions, not earned degrees — every partner page states this explicitly
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}