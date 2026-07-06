import { notFound } from "next/navigation";
import { programs } from "@/lib/programs";
import legacyProgramDetails from "@/lib/program-details";
import { getProgramDetail } from "@/lib/programs/index";
import LegacyProgramPage from "./LegacyProgramPage";

import ProgramHero from "@/components/program-detail/ProgramHero";
import ProgramStatsStrip from "@/components/program-detail/ProgramStatsStrip";
import ProgramInstitutions from "@/components/program-detail/ProgramInstitutions";
import ProgramWhatIs from "@/components/program-detail/ProgramWhatIs";
import ProgramWhoFor from "@/components/program-detail/ProgramWhoFor";
import ProgramWhyMatters from "@/components/program-detail/ProgramWhyMatters";
import ProgramFields from "@/components/program-detail/ProgramFields";
import ProgramReceive from "@/components/program-detail/ProgramReceive";
import ProgramStanding from "@/components/program-detail/ProgramStanding";
import ProgramJourney from "@/components/program-detail/ProgramJourney";
import ProgramProfiles from "@/components/program-detail/ProgramProfiles";
import ProgramFaq from "@/components/program-detail/ProgramFaq";
import ProgramCeremony from "@/components/program-detail/ProgramCeremony";
import { ProgramResources, ProgramFinalCTA } from "@/components/program-detail/ProgramShowcase";

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const rich = getProgramDetail(slug);
  if (rich) {
    return {
      title: `${rich.name} | Techversity.ai`,
      description: rich.subtitle,
    };
  }
  const prog = programs.find((p) => p.slug === slug);
  if (!prog) return {};
  const d = legacyProgramDetails[slug];
  return {
    title: `${prog.title} | Techversity.ai`,
    description: d?.tagline || prog.desc,
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;

  // NEW premium editorial layout — for programs with rich detail data
  const rich = getProgramDetail(slug);
  if (rich) {
    return (
      <main className="bg-ivory">
        <ProgramHero p={rich} />
        <ProgramStatsStrip stats={rich.heroStats} />
        <ProgramWhatIs p={rich} />
        <ProgramWhoFor p={rich} />
        <ProgramWhyMatters p={rich} />
        <ProgramFields p={rich} />
        <ProgramReceive p={rich} />
        <ProgramJourney p={rich} />
        <ProgramProfiles p={rich} />
        <ProgramStanding p={rich} />
        <ProgramInstitutions p={rich} />
        <ProgramCeremony p={rich} />
        <ProgramFaq p={rich} />
        <ProgramResources p={rich} />
        <ProgramFinalCTA p={rich} />
      </main>
    );
  }

  // LEGACY layout — all other programs, unchanged
  const prog = programs.find((p) => p.slug === slug);
  if (!prog) notFound();
  const d = legacyProgramDetails[slug];
  if (!d) notFound();

  return <LegacyProgramPage prog={prog} d={d} />;
}