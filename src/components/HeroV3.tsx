import React from "react";

const HeroV3: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-[0.03] pattern-grid-lg"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Column */}
          <div className="flex-1 max-w-2xl">
            {/* Highlight text */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-8">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium">
                Stop choosing between affordability and performance!
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
              We offer the best prices, while others rely on{" "}
              <span className="relative">
                flashy discounts
                <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-200/50 -z-10"></span>
              </span>
            </h1>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                    <span className="text-blue-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium mb-1">
                      More Computing Power for Less
                    </div>
                    <a
                      href="#compare"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      See for Yourself →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                    <span className="text-blue-600 text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium mb-1">
                      Award Winning Support
                    </div>
                    <div className="text-gray-600 text-sm">
                      from an actual person
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                    <span className="text-blue-600 text-xl">🌍</span>
                  </div>
                  <div>
                    <a
                      href="#locations"
                      className="text-gray-900 font-medium mb-1 hover:text-blue-600"
                    >
                      Global Availability
                    </a>
                    <div className="text-gray-600 text-sm">
                      9 Regions, 12 Locations
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                    <span className="text-blue-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium mb-1">
                      99.996% Uptime
                    </div>
                    <div className="text-gray-600 text-sm">
                      over the last 12 months
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                    <span className="text-blue-600 text-xl">🇩🇪</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      German Quality
                    </div>
                    <div className="text-gray-600 text-sm">Since 2003</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Column */}
          <div className="lg:flex-1 w-full max-w-xl">
            <div className="relative">
              {/* Background card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl overflow-hidden">
                {/* Snow pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-20 bg-[length:16px_16px]"></div>

                <div className="p-8">
                  {/* Card content */}
                  <div className="flex flex-col h-full">
                    <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1 rounded-full w-fit mb-8">
                      Winter Credit Back Gift
                    </div>

                    <div className="flex-1">
                      <h2 className="text-white text-5xl font-bold mb-4">
                        CLOUD VDS
                      </h2>
                      <div className="text-white/90 text-2xl font-medium leading-tight mb-8">
                        Power Up - Credit Back
                        <br />A Gift That Grows
                      </div>
                      <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                        Explore Now
                      </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4">
                      <div className="text-white/20 text-6xl font-bold">❄</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV3;
