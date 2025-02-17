import React from "react";
import { CompanyHeader } from "../../../components/layout/header";
import Footer from "../../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

const ServiceDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />
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
