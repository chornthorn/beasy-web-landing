import React from "react";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Extensions from "./components/Extensions";

const Domains: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />
      <Hero />
      <Extensions />
      <Footer />
    </div>
  );
};

export default Domains;
