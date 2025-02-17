import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background grid animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#111827] bg-opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-transparent to-[#111827]" />

        {/* Animated Windows Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-blue-400/20"
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
            {["🪟", "⊞", "💻", "🖥️"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* Windows Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="w-16 h-16 bg-[#0078D4] rounded-lg flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                viewBox="0 0 23 23"
                fill="currentColor"
              >
                <path d="M0 3.25l9.5-1.25v9.25H0V3.25zM10.75 1.875L23 0v11.25H10.75V1.875zM0 12.75h9.5V22L0 20.75V12.75zM10.75 12.75H23V23l-12.25-1.625V12.75z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gray-800 text-gray-100 text-sm font-medium rounded-full mb-8"
          >
            WINDOWS VPS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Windows VPS Server - Affordable,
            <br />
            Fast, and Flexible
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Scalable Windows VPS hosting designed and priced for everyone - from
            beginners to tech pros. Enjoy quick setup, consistent performance,
            and secure, scalable solutions that give you full control over setup
            and administration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#0078D4] to-[#00a2ff] text-white rounded-full font-semibold text-lg hover:from-[#006cbd] hover:to-[#0091e6] transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Deploy Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold text-lg hover:bg-gray-700 transition-all duration-300"
            >
              Compare Plans
            </motion.button>
          </motion.div>

          {/* Credit Back Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 text-red-200 rounded-full"
          >
            <span className="text-lg">💰</span>
            <span className="font-semibold">Up to $50.00 Credit Back</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
