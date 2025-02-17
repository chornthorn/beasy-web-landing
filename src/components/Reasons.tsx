import React from "react";
import { motion } from "framer-motion";

const Reasons: React.FC = () => {
  const reasons = [
    {
      title: "Right Hardware",
      description:
        "We select hardware based on CPU performance per EUR and energy efficiency per Watt, ensuring long-lasting and cost-effective operations.",
    },
    {
      title: "Scale & Standardization",
      description:
        "Our unified hardware platform across global data centers enables better purchase discounts and simplified maintenance.",
    },
    {
      title: "Optimization",
      description:
        "Proprietary scripts optimize server load, logistics, and warehouse management to reduce waste and improve pricing.",
    },
    {
      title: "Lean Culture",
      description:
        "German efficiency at its best - we maintain low overhead costs while delivering high-quality service, ensuring profitability.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-[#6a83c9]/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, "-100vh"],
              x: [null, `${(Math.random() - 0.5) * 200}px`],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, #1a237e 0%, #283593 50%, #3949ab 100%)",
            "linear-gradient(225deg, #1a237e 0%, #283593 50%, #3949ab 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            4 Reasons Behind Contabo's Low Prices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80"
          >
            Keeping prices low is deep in Contabo DNA
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-[1px] rounded-xl transition-all duration-500"
              whileHover={{ scale: 1 }}
            >
              {/* Gradient Border Container */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff] via-[#4d8dff] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

              {/* Card Content Container */}
              <div className="relative bg-[#1b1f23] rounded-xl p-8 h-full z-10">
                {/* Content */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-[#0062ff]/20 via-[#4d8dff]/20 to-[#60a5fa]/20 text-blue-400 text-sm font-medium rounded mb-6 border border-[#4d8dff]/30"
                  >
                    {
                      [
                        "Machine Learning",
                        "Compute",
                        "Database",
                        "Generative AI",
                      ][index]
                    }
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-[#0062ff] group-hover:to-[#60a5fa] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-7 tracking-wide mb-6">
                    {reason.description}
                  </p>
                  <div className="flex items-center text-[#4d8dff] font-medium group-hover:translate-x-2 transition-transform duration-500">
                    Explore more
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reasons;
