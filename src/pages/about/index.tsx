import React from "react";
import { CompanyHeader } from "../../components/layout/header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />
      <main>
        <Hero />
        <Values />
        <Team />
        <Timeline />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
