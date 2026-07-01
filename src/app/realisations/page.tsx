import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RealisationsSection from "@/components/RealisationsSection";

export default function RealisationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <RealisationsSection />
      </div>
      <Footer />
    </main>
  );
}
