import React from "react";
import { HeaderV2 } from "../../../components/layout/header";
import Footer from "../../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Performance from "./components/Performance";
import DeploymentOptions from "../shared/components/DeploymentOptions";
import Pricing from "./components/Pricing";

const CloudVDS: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />
      <Hero />
      <Features />
      <Benefits />
      <Performance />
      <DeploymentOptions
        title="Operating Systems and Control Panels"
        subtitle="Choose from a variety of operating systems and control panels for your Virtual Dedicated Server"
        productType="Virtual Dedicated Server"
      />
      <Pricing />
      <Footer />
    </div>
  );
};

export default CloudVDS;
