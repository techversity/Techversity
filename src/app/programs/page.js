import { programs } from "@/lib/programs";
import ProgramsHubHero from "@/components/programs-hub/ProgramsHubHero";
import DoctorateBentoSection from "@/components/programs-hub/DoctorateBentoSection";
import LevelSpotlight from "@/components/programs-hub/LevelSpotlight";
import CertificationsTeaser from "@/components/programs-hub/CertificationsTeaser";
import ProgramsHubFinalCTA from "@/components/programs-hub/ProgramsHubFinalCTA";

export const metadata = {
  title: "Degree Programs — Doctorate, Master's & Bachelor's | Techversity.ai",
  description:
    "Explore internationally accredited degree programs — Doctorate, Master's, and Bachelor's — delivered online through Techversity's global university partners.",
};

export default function ProgramsPage() {
  const masters = programs.find((p) => p.slug === "masters");
  const bachelors = programs.find((p) => p.slug === "bachelors");

  return (
    <main className="bg-ivory">
      <ProgramsHubHero />

      <DoctorateBentoSection />

      {masters && (
        <LevelSpotlight
          p={masters}
          sectionId="masters"
          num="02"
          label="Master's"
          accent="#21385C"
          dark={false}
        />
      )}

      {bachelors && (
        <LevelSpotlight
          p={bachelors}
          sectionId="bachelors"
          num="03"
          label="Bachelor's"
          accent="#9A7320"
          flip
          dark
        />
      )}

      <CertificationsTeaser />

      <ProgramsHubFinalCTA />
    </main>
  );
}