import HeroPage from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkPage from "@/components/Work";
import SecondPage from "@/components/Second";
import FeaturePage from "@/components/Feature";
import SolutionPage from "@/components/Soultion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <SecondPage />
      <WorkPage />
      <FeaturePage />
      <SolutionPage />
      {/* <LastPage /> */}
    </main>
  );
}
