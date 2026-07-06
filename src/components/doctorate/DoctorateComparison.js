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
    phd: "24–48 months",
    dba: "18–36 months",
    hd: "6–12 months",
    hp: "6–12 months",
  },
  {
    label: "Research / Dissertation Required?",
    phd: "Yes — full dissertation & viva defence",
    dba: "Yes — applied research project & defence",
    hd: "No — conferred, not earned",
    hp: "No — conferred, not earned",
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
  { key: "phd", label: "PhD", href: "/programs/phd", accent: "#16263D" },
  { key: "dba", label: "DBA", href: "/programs/dba", accent: "#9A7320" },
  { key: "hd", label: "Honorary Doctorate", href: "/programs/honorary-doctorate", accent: "#7C5C16" },
  { key: "hp", label: "Honorary Professorship", href: "/programs/honorary-professorship", accent: "#21385C" },
];

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
          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full border-collapse min-w-[860px]">
              <thead>
                <tr className="bg-wine">
                  <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/50 px-5 py-5 rounded-tl-2xl w-[180px]">
                    &nbsp;
                  </th>
                  {COLUMNS.map((c, i) => (
                    <th
                      key={c.key}
                      className={`text-left px-5 py-5 ${i === COLUMNS.length - 1 ? "rounded-tr-2xl" : ""}`}
                    >
                      <a href={c.href} className="font-display font-semibold text-[16px] text-white hover:text-gold-light transition-colors">
                        {c.label}
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? "bg-white" : "bg-ivory/60"}>
                    <td className="px-5 py-5 font-mono text-[10.5px] uppercase tracking-wide text-mist align-top">
                      {row.label}
                    </td>
                    {COLUMNS.map((c) => (
                      <td key={c.key} className="px-5 py-5 text-[13.5px] leading-relaxed text-slate align-top">
                        {row[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}