import React from "react";
import { motion } from "framer-motion";
import { features } from "../data/extensions";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#111827] bg-opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-transparent to-[#111827]" />

        {/* Animated Domain Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-cyan-400/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -1000],
              x: [null, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: -Math.random() * 20,
            }}
          >
            {[".com", ".org", ".net", "🌐"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* Domain Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-3xl">.com</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <img src="/domain-icon.svg" alt="Domain Icon" className="w-8 h-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Domains
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Register New and Manage Your Existing Domains with Ease
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="flex items-center gap-3"
              >
                <div className="text-2xl">{feature.icon}</div>
                <div className="text-left">
                  <div className="font-medium text-white">{feature.title}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for your perfect domain name..."
                className="w-full px-6 py-4 bg-white/10 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
              >
                Search
              </motion.button>
            </div>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-sm text-gray-400"
          >
            Please note that we offer domains only to customers who have at
            least one other product with Contabo.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
