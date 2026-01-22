"use client";
import applyGoogleTranslateDOMPatch from "@/utils/applyGoogleTranslateDOMPatch";
import { useEffect } from "react";
import ComponentsSection from "./components/ComponentsSection";
import FaqSection from "./components/FaqSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MetricsSection from "./components/MetricsSection";
import PurchaseSection from "./components/PurchaseSection";
import SuccessCasesSection from "./components/SuccessCasesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TopSection from "./components/TopSection";

export default function Home() {
  useEffect(() => {
    applyGoogleTranslateDOMPatch();
  }, []);

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden pt-12 md:pt-16">
      <Header />
      <TopSection />
      <FeaturesSection />
      <ComponentsSection />
      <MetricsSection />
      <SuccessCasesSection />
      <PurchaseSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
