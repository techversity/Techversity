"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ScrollText,
  FileText,
  GraduationCap,
  BadgeCheck,
  Landmark,
  Globe,
  Award,
  FileCheck,
  IdCard,
  BookMarked,
  Crown,
  Users,
  Presentation,
} from "lucide-react";

const ICON_MAP = {
  "Honorary Degree Certificate": ScrollText,
  "Recognition Citation": FileText,
  "Academic Recognition Record": GraduationCap,
  "Institutional Verification": BadgeCheck,
  "Ceremonial Recognition": Landmark,
  "Global Alumni Association": Globe,
  // DBA
  "Doctoral Degree Certificate": Award,
  "Official Transcript": FileText,
  "Enrolment & Completion Letters": FileCheck,
  "Academic ID & Network Access": IdCard,
  "Convocation & Ceremony": GraduationCap,
  // PhD
  "Published Dissertation Record": BookMarked,
  "Academic Network Access": Globe,
  "Convocation & Graduation": GraduationCap,
  // Honorary Professorship
  "Honorary Professorship Certificate & Citation": Award,
  "Use of the Title 'Prof.'": Crown,
  "Distinguished Network Membership": Users,
  "Engagement Opportunities": Presentation,
  "Conferment Ceremony": Landmark,
  // Master's & Bachelor's
  "Master's Degree Certificate": Award,
  "Bachelor's Degree Certificate": Award,
};

export default function ProgramReceive({ p }) {
  const items = p.receive?.length ? p.receive : p.awardPackage;
  const intro = p.receiveIntro ?? p.awardPackageIntro;

  if (!items?.length) return null;

  return (
    <section className="bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-14 lg:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">What You Receive</p>
            </div>
            <h2 className="font-display font-semibold text-[30px] lg:text-[44px] text-wine leading-[1.08] mb-6">
              A complete award package.
            </h2>
            <p className="text-slate text-[15px] lg:text-[16.5px] leading-relaxed">{intro}</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-5 lg:gap-y-6">
          {items.map((r, i) => {
            const Icon = ICON_MAP[r.title] || ScrollText;
            return (
              <Reveal key={r.title} direction="up" delay={(i % 2) * 70}>
                <div className="group relative flex gap-6 p-6 lg:p-7 rounded-2xl border border-line bg-white/0 transition-all duration-400 ease-out hover:bg-white hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(22,38,61,0.1)]">
                  {/* icon badge — is line ko dhyan se dekho, yahi missing tha */}
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{ background: "#0F1B2E" }}
                  >
                    <Icon size={24} strokeWidth={1.75} color="#C9A227" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-[18px] lg:text-[19px] text-wine leading-snug mb-2 transition-colors duration-300 group-hover:text-gold-deep">
                      {r.title}
                    </h3>
                    <p className="text-slate text-[13.5px] leading-relaxed">{r.desc}</p>
                  </div>

                  <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold/0 group-hover:bg-gold/50 transition-colors duration-500" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}