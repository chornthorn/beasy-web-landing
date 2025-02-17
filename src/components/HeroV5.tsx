import React from "react";

const HeroV5: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-[#4263EB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-[3.5rem] font-bold text-white text-center mb-16 leading-tight max-w-3xl mx-auto">
            We offer the best prices, while others rely on flashy discounts.
          </h1>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Computing Power Card */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-white/[0.15] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-4xl mt-1">⚡</span>
                <div>
                  <h3 className="text-white text-2xl font-medium mb-2">
                    Computing Power
                  </h3>
                  <p className="text-white/80 text-lg mb-2">
                    More power for less cost
                  </p>
                  <a
                    href="#compare"
                    className="text-white/80 hover:text-white text-lg"
                  >
                    See for Yourself →
                  </a>
                </div>
              </div>
            </div>

            {/* Award Winning Support Card */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-white/[0.15] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-4xl mt-1">🏆</span>
                <div>
                  <h3 className="text-white text-2xl font-medium mb-2">
                    Award Winning Support
                  </h3>
                  <p className="text-white/80 text-lg">From an actual person</p>
                </div>
              </div>
            </div>

            {/* Global Availability Card */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-white/[0.15] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-4xl mt-1">🌍</span>
                <div>
                  <h3 className="text-white text-2xl font-medium mb-2">
                    Global Availability
                  </h3>
                  <p className="text-white/80 text-lg">
                    9 Regions, 12 Locations
                  </p>
                </div>
              </div>
            </div>

            {/* German Quality Card */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-white/[0.15] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-4xl mt-1">🇩🇪</span>
                <div>
                  <h3 className="text-white text-2xl font-medium mb-2">
                    German Quality
                  </h3>
                  <p className="text-white/80 text-lg">Since 2003</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV5;
