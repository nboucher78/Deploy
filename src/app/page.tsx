import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import RealisationsSection from "@/components/RealisationsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ActivitiesSection />
      <RealisationsSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
