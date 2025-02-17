import React from "react";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Configurations from "./components/Configurations";

const ObjectStorage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />
      <Hero />
      <Features />
      <Configurations />
      <Footer />
    </div>
  );
};

export default ObjectStorage;
