import React from "react";
import { motion } from "framer-motion";

const HeroV6: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-200 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, "-100vh"],
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
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "linear-gradient(0deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%)",
            "linear-gradient(360deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%)",
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-blue-100/10 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-200/20">
              Cloud Solutions Provider
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent"
                whileHover={{
                  scale: 1.02,
                  textShadow: "0 0 8px rgba(255,255,255,0.5)",
                }}
              >
                We offer the best prices,
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-blue-200"
                whileHover={{
                  scale: 1.02,
                  textShadow: "0 0 8px rgba(255,255,255,0.5)",
                }}
              >
                while others rely on flashy discounts.
              </motion.span>
            </h1>
            <p className="text-xl text-blue-100/80 mb-8">
              Experience enterprise-grade cloud solutions at unbeatable prices
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Computing Power Card */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-lg rounded-3xl p-8 hover:from-white/[0.2] hover:to-white/[0.1] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                >
                  ⚡
                </motion.div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Computing Power
                  </h3>
                  <p className="text-blue-100/80 text-base mb-3">
                    More power for less cost
                  </p>
                  <motion.a
                    href="#compare"
                    className="text-blue-200 hover:text-white text-sm font-medium inline-flex items-center gap-1 group"
                    whileHover={{ x: 5 }}
                  >
                    See for Yourself
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Award Winning Support Card */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-lg rounded-3xl p-8 hover:from-white/[0.2] hover:to-white/[0.1] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                >
                  🏆
                </motion.div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Award Winning Support
                  </h3>
                  <p className="text-blue-100/80 text-base">
                    From an actual person
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Global Availability Card */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-lg rounded-3xl p-8 hover:from-white/[0.2] hover:to-white/[0.1] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                >
                  🌍
                </motion.div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Global Availability
                  </h3>
                  <p className="text-blue-100/80 text-base">
                    9 Regions, 12 Locations
                  </p>
                </div>
              </div>
            </motion.div>

            {/* German Quality Card */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-lg rounded-3xl p-8 hover:from-white/[0.2] hover:to-white/[0.1] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                >
                  🇩🇪
                </motion.div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    German Quality
                  </h3>
                  <p className="text-blue-100/80 text-base">Since 2003</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV6;
