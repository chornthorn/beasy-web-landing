import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import JobListings from "./components/JobListings";
import CTA from "./components/CTA";

const CareerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <JobListings />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
