import HeroPage from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkPage from "@/components/Work";
import SecondPage from "@/components/Second";
import FeaturePage from "@/components/Feature";
import SolutionPage from "@/components/Soultion";
import AudiencePage from "@/components/Audience";
import QuestionPage from "@/components/Question";
import SecondLastPage from "@/components/SecondLast";
import LastOnePage from "@/components/LastOne";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <SecondPage />
      {/* <WorkPage /> */}
      <FeaturePage />
      <SolutionPage />
      <AudiencePage />
      <QuestionPage />
      <SecondLastPage />
      <LastOnePage />
    </main>
  );
}
