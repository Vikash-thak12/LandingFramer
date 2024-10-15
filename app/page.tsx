import FeaturePage from "@/components/Feature";
import HeroPage from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkPage from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <FeaturePage />
      <WorkPage />
    </main>
  );
}
