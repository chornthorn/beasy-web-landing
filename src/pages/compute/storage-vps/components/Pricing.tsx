import React from "react";
import { motion } from "framer-motion";
import { storagePlans } from "../data/plans";

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111827] to-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Storage VPS Plans
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect storage plan for your needs. All plans include
            enterprise-grade SSDs and optimized storage performance.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {storagePlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="group relative p-[1px] rounded-xl transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Border Container - Using original blue gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff] via-[#4d8dff] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

              {/* Card Content Container */}
              <div className="relative bg-gray-900 rounded-xl p-8 h-full z-10">
                {/* Credit Back Tag */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-900/20 text-red-300">
                    Credit Back
                  </span>
                  {plan.popular && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-900/20 text-green-400">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#60a5fa] transition-colors duration-300">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/ month</span>
                  </div>
                </div>

                {/* Specifications */}
                <ul className="space-y-4 mb-8">
                  {[
                    plan.specs.cpu,
                    plan.specs.ram,
                    plan.specs.storage,
                    plan.specs.bandwidth,
                    <>
                      {plan.specs.traffic}
                      <span className="text-xs ml-2 text-gray-500">
                        {plan.trafficNote}
                      </span>
                    </>,
                  ].map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#4d8dff] mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* Select Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-[#0062ff] to-[#60a5fa] text-white rounded-full font-medium hover:from-[#0051d4] hover:to-[#4d8dff] transition-all duration-300"
                >
                  Select
                </motion.button>

                {/* No Setup Fee Badge */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-600 text-white">
                    No Setup Fee
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Traffic Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            * In Australia and Japan, we offer 10 TB of outgoing, and unlimited
            inbound data transfer at the same great performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
