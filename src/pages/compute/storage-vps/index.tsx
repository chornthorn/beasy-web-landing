import React from "react";
import { HeaderV2 } from "../../../components/layout/header";
import Footer from "../../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DeploymentOptions from "../shared/components/DeploymentOptions";
import Pricing from "./components/Pricing";

const StorageVPS: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />
      <Hero />
      <Features />
      <DeploymentOptions
        title="Operating Systems and Control Panels"
        subtitle="Choose from a variety of operating systems and control panels optimized for storage workloads"
        productType="Storage VPS"
      />
      <Pricing />
      <Footer />
    </div>
  );
};

export default StorageVPS;
