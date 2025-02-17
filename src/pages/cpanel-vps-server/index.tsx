import React from "react";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import WhyHost from "./components/WhyHost";
import WhyChoose from "./components/WhyChoose";

const CPanelVPS: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />
      <Hero />
      <Features />
      <Pricing />
      <WhyHost />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default CPanelVPS;
