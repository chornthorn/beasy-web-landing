import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompanyHeader } from "./components/layout/header";
import Hero from "./components/Hero";
import HeroV2 from "./components/HeroV2";
import HeroV9 from "./components/HeroV9";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/not-found";

function App() {
  const [heroVersion, setHeroVersion] = React.useState<"v1" | "v2" | "v9">(
    "v2"
  );

  const nextVersion = () => {
    if (heroVersion === "v1") return "v2";
    if (heroVersion === "v2") return "v9";
    return "v1";
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <CompanyHeader />
              <main>
                {/* Hero Version Toggle */}
                <div className="fixed bottom-4 right-4 z-50 bg-white rounded-full shadow-lg border border-gray-200 p-2">
                  <button
                    onClick={() => setHeroVersion(nextVersion())}
                    className="text-sm font-medium text-gray-600 hover:text-[#ff6b4a] transition-colors duration-300 px-3 py-1"
                  >
                    Switch to Hero{" "}
                    {heroVersion === "v1"
                      ? "V2"
                      : heroVersion === "v2"
                      ? "V9"
                      : "V1"}
                  </button>
                </div>

                {/* Hero Components */}
                {heroVersion === "v1" && <Hero />}
                {heroVersion === "v2" && <HeroV2 />}
                {heroVersion === "v9" && <HeroV9 />}

                <div id="about">
                  <About />
                </div>
                <div id="services">
                  <Services />
                </div>
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
