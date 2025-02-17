import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompanyHeader } from "./components/layout/header";
import Hero from "./components/Hero";
import HeroV2 from "./components/HeroV2";
import HeroV3 from "./components/HeroV3";
import HeroV4 from "./components/HeroV4";
import HeroV5 from "./components/HeroV5";
import HeroV9 from "./components/HeroV9";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/not-found";
import ServiceDetail from "./pages/services/detail";
import ServicesPage from "./pages/services";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import BlogDetail from "./pages/blog/detail";
import ContactPage from "./pages/contact";

function App() {
  const [heroVersion, setHeroVersion] = React.useState<
    "v1" | "v2" | "v3" | "v4" | "v5" | "v9"
  >("v2");

  const nextVersion = () => {
    if (heroVersion === "v1") return "v2";
    if (heroVersion === "v2") return "v3";
    if (heroVersion === "v3") return "v4";
    if (heroVersion === "v4") return "v5";
    if (heroVersion === "v5") return "v9";
    return "v1";
  };

  return (
    <Router>
      <Routes>
        {/* Home Page */}
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
                      ? "V3"
                      : heroVersion === "v3"
                      ? "V4"
                      : heroVersion === "v4"
                      ? "V5"
                      : heroVersion === "v5"
                      ? "V9"
                      : "V1"}
                  </button>
                </div>

                {/* Hero Components */}
                {heroVersion === "v1" && <Hero />}
                {heroVersion === "v2" && <HeroV2 />}
                {heroVersion === "v3" && <HeroV3 />}
                {heroVersion === "v4" && <HeroV4 />}
                {heroVersion === "v5" && <HeroV5 />}
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

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Services Routes */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
