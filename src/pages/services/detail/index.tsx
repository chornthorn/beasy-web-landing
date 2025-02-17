import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const ServiceDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
