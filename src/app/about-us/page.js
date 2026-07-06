import AboutProgressRail from "@/components/about/AboutProgressRail";
import AboutFirm from "@/components/about/AboutFirm";
import AboutAudience from "@/components/about/AboutAudience";
import AboutDistinction from "@/components/about/AboutDistinction";
import AboutStandard from "@/components/about/AboutStandard";
import AboutFounding from "@/components/about/AboutFounding";
import AboutThreshold from "@/components/about/AboutThreshold";

export const metadata = {
  title: "Why Techversity — An Advisory, Not a University | Techversity.ai",
  description:
    "Techversity introduces, vets, and shepherds accomplished professionals to the accredited institutions that confer doctoral and executive recognition. Founded 2019.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-ivory">
      <AboutProgressRail />
      <AboutFirm />
      <AboutAudience />
      <AboutDistinction />
      <AboutStandard />
      <AboutFounding />
      <AboutThreshold />
    </main>
  );
}