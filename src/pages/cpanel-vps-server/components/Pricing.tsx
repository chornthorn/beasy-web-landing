import React from "react";
import { motion } from "framer-motion";
import { cpanelPlans } from "../data/plans";

const PricingCard: React.FC<{ plan: any }> = ({ plan }) => {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <motion.div
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
      {/* Gradient Border Container */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

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
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
          {plan.name}
          <span className="block text-lg font-medium text-orange-500 mt-1">
            cPanel License
          </span>
        </h3>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">${plan.price}</span>
            <span className="text-gray-400 ml-2">/ month</span>
          </div>
        </div>

        {/* Specifications */}
        <ul className="space-y-4 mb-8">
          {/*{Object.entries(plan.specs).map(([key, value], idx) => (*/}
          {Object.entries(plan.specs).map(([key, value], idx) => (
            <li key={key} className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0"
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
              <span className="text-sm">
               {value as React.ReactNode} {/* Type assertion */}
                {key === "traffic" && plan.trafficNote && (
                  <span className="text-xs ml-2 text-gray-500">
                    {plan.trafficNote}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Select Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
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
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            cPanel VPS Plans
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect cPanel VPS plan for your needs. All plans include
            a cPanel license and enterprise-grade performance.
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
          {cpanelPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Traffic Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-100 text-sm">
            * In Australia and Japan, we offer 10 TB of outgoing, and unlimited
            inbound data transfer at the same great performance.
          </p>
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">🎁</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            All Plans Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-gray-100">
              <div className="text-orange-500 text-lg mb-2">Free Setup</div>
              <p>No hidden setup or activation fees</p>
            </div>
            <div className="text-gray-100">
              <div className="text-orange-500 text-lg mb-2">
                Monthly Billing
              </div>
              <p>Simple monthly billing with no long-term contracts</p>
            </div>
            <div className="text-gray-100">
              <div className="text-orange-500 text-lg mb-2">24/7 Support</div>
              <p>Expert technical support available around the clock</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
