import React from "react";

const HeroV2: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content Column */}
          <div className="pt-8">
            <p className="text-blue-600 text-lg mb-6">
              Stop choosing between affordability and performance!
            </p>
            <h1 className="text-[2.75rem] leading-tight font-bold text-gray-900 mb-12">
              We offer the best prices, while others rely on flashy discounts.
            </h1>

            <div className="space-y-6 text-lg">
              <div className="flex items-baseline gap-x-2">
                <span className="text-2xl text-blue-600 leading-none">•</span>
                <div>
                  More Computing Power for Less -{" "}
                  <a href="#compare" className="text-blue-600 hover:underline">
                    See for Yourself
                  </a>
                </div>
              </div>
              <div className="flex items-baseline gap-x-2">
                <span className="text-2xl text-blue-600 leading-none">•</span>
                <div>
                  <a href="#support" className="text-blue-600 hover:underline">
                    Award Winning Support
                  </a>{" "}
                  from an actual person
                </div>
              </div>
              <div className="flex items-baseline gap-x-2">
                <span className="text-2xl text-blue-600 leading-none">•</span>
                <div>
                  <a
                    href="#locations"
                    className="text-blue-600 hover:underline"
                  >
                    Global Availability
                  </a>{" "}
                  - 9 Regions, 12 Locations
                </div>
              </div>
              <div className="flex items-baseline gap-x-2">
                <span className="text-2xl text-blue-600 leading-none">•</span>
                <div>99.996% Uptime over the last 12 months</div>
              </div>
              <div className="flex items-baseline gap-x-2">
                <span className="text-2xl text-blue-600 leading-none">•</span>
                <div>German Quality Since 2003</div>
              </div>
            </div>
          </div>

          {/* Card Column */}
          <div className="relative mt-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=1200&h=800')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30" />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="inline-block bg-red-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Winter Credit Back Gift
                  </span>
                </div>

                <div>
                  <h2 className="text-white text-5xl font-bold mb-4">
                    CLOUD VDS
                  </h2>
                  <div className="text-white text-2xl font-medium leading-tight mb-6">
                    Power Up - Credit Back
                    <br />A Gift That Grows
                  </div>
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>

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
    </section>
  );
};

export default HeroV2;
