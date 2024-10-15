import HeroPage from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturePage from "@/components/Feature";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <FeaturePage />
    </main>
  );
}
