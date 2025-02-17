import React from "react";
import { HeaderV2 } from "../../../components/layout/header";
import Footer from "../../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DeploymentApps from "./components/DeploymentApps";
import Pricing from "./components/Pricing";
import Comparison from "./components/Comparison";
import Awards from "./components/Awards";
import Distributions from "./components/Distributions";

const WindowsVPS: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />
      <Hero />
      <Features />
      <DeploymentApps />
      <Pricing />
      <Comparison />
      <Awards />
      <Distributions />
      <Footer />
    </div>
  );
};

export default WindowsVPS;
