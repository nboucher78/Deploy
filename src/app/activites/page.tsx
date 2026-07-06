"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivitiesSection from "@/components/ActivitiesSection";

export default function ActivitesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ActivitiesSection />
      <Footer />
    </main>
  );
}
