import React from "react";

const HeroV4: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 animate-gradient">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      </div>

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left column */}
          <div className="flex-1 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <span className="text-sm font-medium">
                Stop choosing between affordability and performance!
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              We offer the{" "}
              <span className="relative inline-block">
                best prices
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 -skew-y-3"></div>
              </span>
              <br />
              while others rely on flashy discounts.
            </h1>

            {/* Features in cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold">Computing Power</h3>
                </div>
                <p className="text-white/80 mb-3">More power for less cost</p>
                <a
                  href="#compare"
                  className="text-blue-300 hover:text-blue-200 text-sm group-hover:underline inline-flex items-center"
                >
                  See for Yourself
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Award Winning Support
                  </h3>
                </div>
                <p className="text-white/80">From an actual person</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold">Global Availability</h3>
                </div>
                <p className="text-white/80">9 Regions, 12 Locations</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl">🇩🇪</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">German Quality</h3>
                    <p className="text-white/80">Since 2003</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Promo Card */}
          <div className="lg:flex-1 w-full max-w-xl">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl overflow-hidden">
                {/* Animated snow particles */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-20 bg-[length:16px_16px] animate-snow"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-10 bg-[length:24px_24px] animate-snow-slow"></div>
                </div>

                <div className="relative p-8">
                  <div className="bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1 rounded-full w-fit">
                    Winter Credit Back Gift
                  </div>

                  <div className="mt-12 mb-16">
                    <h2 className="text-white text-6xl font-bold mb-6">
                      CLOUD VDS
                    </h2>
                    <div className="text-white/90 text-2xl font-medium leading-tight">
                      Power Up - Credit Back
                      <br />A Gift That Grows
                    </div>
                  </div>

                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                    Explore Now
                  </button>

                  {/* Decorative snowflakes */}
                  <div className="absolute top-8 right-8 text-white/20 text-7xl font-bold">
                    ❄
                  </div>
                  <div className="absolute bottom-8 right-24 text-white/10 text-5xl font-bold">
                    ❄
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV4;
