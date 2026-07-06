"use client";

import Reveal from "@/components/ui/Reveal";
import {
  Rocket,
  GraduationCap,
  Cpu,
  HeartHandshake,
  FlaskConical,
  Briefcase,
  Lightbulb,
  ClipboardList,
  Building2,
  Crown,
  Landmark,
  Scale,
  Stethoscope,
} from "lucide-react";

const ICON_MAP = {
  "Founder & Entrepreneur": Rocket,
  "Education Leader": GraduationCap,
  "Technology Executive": Cpu,
  "Social Impact Leader": HeartHandshake,
  "Research Contributor": FlaskConical,
  "Business Leader": Briefcase,
  // DBA
  "Founder": Rocket,
  "Vice President": Crown,
  "Management Consultant": ClipboardList,
  "Corporate Director": Building2,
  "Entrepreneur": Lightbulb,
  "Senior Executive": Briefcase,
  // PhD
  "Research Associate": FlaskConical,
  "Corporate Professional": Building2,
  "Educator": GraduationCap,
  "Industry Leader": Cpu,
  "Government Officer": Landmark,
  // Honorary Professorship
  "Research Scientist": FlaskConical,
  "Public Policy Leader": Landmark,
  "Healthcare Administrator": Stethoscope,
  "Legal Professional": Scale,
  "Entrepreneur & Founder": Rocket,
};

// "Honorary Doctor in Entrepreneurship" -> "Entrepreneurship"
function getCategory(award) {
  if (!award) return "";
  const match = award.match(/Honorary Doctor(?:ate)? in (.+)/i);
  return match ? match[1] : award;
}

export default function ProgramProfiles({ p }) {
  if (!p.profiles?.length) return null;

  return (
    <section className="bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Distinguished Profiles</p>
            </div>
            <h2 className="font-display font-semibold text-[30px] lg:text-[44px] text-wine leading-[1.08] mb-6">
              The shape of recognition.
            </h2>
            <p className="text-slate text-[15px] lg:text-[16.5px] leading-relaxed">{p.profilesIntro}</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.profiles.map((pr, i) => {
            const Icon = ICON_MAP[pr.role] || Briefcase;
            const category = getCategory(pr.award);
            return (
              <Reveal key={pr.role} direction="up" delay={(i % 3) * 70}>
                <div className="group relative h-full rounded-2xl bg-white border border-line p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(22,38,61,0.12)]">
                  {/* watermark icon — top-right, faint, grows slightly on hover */}
                  <Icon
                    size={84}
                    strokeWidth={1}
                    className="absolute -top-3 -right-3 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
                    style={{ color: "#9A7320", opacity: 0.08 }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      {/* small solid icon chip next to label */}
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                        style={{ background: "#9A7320" }}
                      >
                        <Icon size={13} strokeWidth={2} color="#fff" />
                      </span>
                      {/* category label instead of generic "Profile" */}
                      <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-mist truncate">
                        {category}
                      </p>
                    </div>

                    <h3 className="font-display font-semibold text-[18px] text-wine leading-snug mb-1">
                      {pr.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="h-px w-5 bg-gold" />
                      <p className="font-display italic text-[13.5px] text-gold">{pr.award}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="font-mono text-[8.5px] uppercase tracking-[1.5px] text-mist mb-1">
                          Achievements
                        </p>
                        <p className="text-slate text-[12.5px] leading-relaxed">{pr.achievements}</p>
                      </div>
                      <div className="pt-3 border-t border-line">
                        <p className="font-mono text-[8.5px] uppercase tracking-[1.5px] text-mist mb-1">
                          Recognition
                        </p>
                        <p className="text-slate text-[12.5px] leading-relaxed">{pr.recognition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}