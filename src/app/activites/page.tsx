import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivitiesSection from "@/components/ActivitiesSection";

export default function ActivitesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <ActivitiesSection />
      </div>
      <Footer />
    </main>
  );
}
