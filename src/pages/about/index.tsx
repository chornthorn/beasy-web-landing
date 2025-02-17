import React from "react";
import Footer from "../../components/layout/Footer.tsx";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Header from "../../components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
