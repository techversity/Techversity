import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import TrustBar from "@/components/home/TrustBar";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import DoctorateSpotlight from "@/components/home/DoctorateSpotlight";
import StatsBar from "@/components/home/StatsBar";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <TrustBar />
      <ProgramsGrid />
      <DoctorateSpotlight />
      {/* <StatsBar /> */}
    </>
  );
}