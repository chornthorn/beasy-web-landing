import * as React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BEasyHero from "./components/BEasyHero";
import BEasyServices from "./components/BEasyServices";
import BEasyAbout from "./components/BEasyAbout";
import BEasyFeatures from "./components/BEasyFeatures";
import BEasyMobileShowcase from "./components/BEasyMobileShowcase";
import BEasyDownload from "./components/BEasyDownload";
import BEasyContact from "./components/BEasyContact";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <BEasyHero />
          <div id="about">
            <BEasyAbout />
          </div>
          <div id="services">
            <BEasyServices />
          </div>
          <div id="features">
            <BEasyFeatures />
          </div>
          <div id="mobile">
            <BEasyMobileShowcase />
          </div>
          <div id="download">
            <BEasyDownload />
          </div>
          <div id="contact">
            <BEasyContact />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
