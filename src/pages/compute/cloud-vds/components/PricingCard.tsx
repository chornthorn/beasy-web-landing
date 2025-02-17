import React from "react";
import { motion } from "framer-motion";
import { Plan } from "../data";

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
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
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff] via-[#4d8dff] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

      {/* Card Content Container */}
      <div className="relative bg-[#1b1f23] rounded-xl p-8 h-full z-10">
        {/* Features Tags */}
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-600/20 text-red-300">
            No Setup Fee
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-600/20 text-blue-400">
            Credit Back
          </span>
          {plan.popular && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-600/20 text-green-400">
              Most Popular
            </span>
          )}
        </div>

        {/* Product Type */}
        <div className="text-white/80 text-sm mb-2">
          Virtual Dedicated Server
        </div>

        {/* Product Name */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg text-white/70 line-through">
              ${plan.originalPrice}
            </span>
            <span className="text-4xl font-bold text-white">${plan.price}</span>
            <span className="text-white/80">/ month</span>
          </div>
          <div className="text-green-400 text-sm mt-1">Save 20%</div>
        </div>

        {/* Specifications */}
        <ul className="space-y-4 mb-8">
          {[
            plan.specs.cpu,
            plan.specs.cpuModel,
            plan.specs.ram,
            <>
              {plan.specs.storage}
              <span className="text-xs ml-2 text-white/70">
                {plan.storageNote}
              </span>
            </>,
            plan.specs.bandwidth,
            <>
              {plan.specs.traffic}
              <span className="text-xs ml-2 text-white/70">
                {plan.trafficNote}
              </span>
            </>,
          ].map((spec, idx) => (
            <li key={idx} className="flex items-center text-white/90">
              <svg
                className="w-5 h-5 text-[#93c5fd] mr-3 flex-shrink-0"
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
      </div>
    </motion.div>
  );
};

export default PricingCard;
