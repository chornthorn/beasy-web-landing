import React from "react";
import { motion } from "framer-motion";

const HeroV7: React.FC = () => {
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
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#0a1130] via-[#162454] to-[#2b3f78]">
      {/* Animated particles */}
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
            "linear-gradient(45deg, #0a1130 0%, #162454 50%, #2b3f78 100%)",
            "linear-gradient(225deg, #0a1130 0%, #162454 50%, #2b3f78 100%)",
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
            className="mb-12"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#6a83c9]/20 text-white text-sm font-medium mb-8 backdrop-blur-md border border-[#6a83c9]/30 shadow-lg">
              Cloud Solutions Provider
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <motion.span
                className="inline-block bg-gradient-to-r from-[#a4b8e4] via-[#d5e3ff] to-white bg-clip-text text-transparent drop-shadow-lg"
                whileHover={{
                  scale: 1.02,
                  textShadow: "0 0 8px rgba(255,255,255,0.5)",
                }}
              >
                We offer the best prices,
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-white drop-shadow-lg"
                whileHover={{
                  scale: 1.02,
                  textShadow: "0 0 8px rgba(255,255,255,0.5)",
                }}
              >
                while others rely on flashy discounts.
              </motion.span>
            </h1>
            <p className="text-xl text-white/90 mb-12 drop-shadow-md">
              Experience enterprise-grade cloud solutions at unbeatable prices
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
            {/* Computing Power Card */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/20 via-[#7a93d9]/20 to-[#8aa3e9]/20 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6" />
              <div className="relative bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-xl rounded-3xl p-8 hover:from-white/[0.25] hover:to-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#6a83c9]/30 to-[#8aa3e9]/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"
                  >
                    ⚡
                  </motion.div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-sm">
                      Computing Power
                    </h3>
                    <p className="text-white/90 text-base mb-3">
                      More power for less cost
                    </p>
                    <motion.a
                      href="#compare"
                      className="text-white/90 hover:text-white text-sm font-medium inline-flex items-center gap-1 group"
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
              </div>
            </motion.div>

            {/* Award Winning Support Card */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative md:translate-y-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/20 via-[#7a93d9]/20 to-[#8aa3e9]/20 rounded-3xl transform -rotate-3 transition-transform duration-300 group-hover:-rotate-6" />
              <div className="relative bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-xl rounded-3xl p-8 hover:from-white/[0.25] hover:to-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#6a83c9]/30 to-[#8aa3e9]/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300"
                  >
                    🏆
                  </motion.div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-sm">
                      Award Winning Support
                    </h3>
                    <p className="text-white/90 text-base">
                      From an actual person
                    </p>
                  </div>
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
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/20 via-[#7a93d9]/20 to-[#8aa3e9]/20 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6" />
              <div className="relative bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-xl rounded-3xl p-8 hover:from-white/[0.25] hover:to-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#6a83c9]/30 to-[#8aa3e9]/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"
                  >
                    🌍
                  </motion.div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-sm">
                      Global Availability
                    </h3>
                    <p className="text-white/90 text-base">
                      9 Regions, 12 Locations
                    </p>
                  </div>
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
              className="group relative md:translate-y-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/20 via-[#7a93d9]/20 to-[#8aa3e9]/20 rounded-3xl transform -rotate-3 transition-transform duration-300 group-hover:-rotate-6" />
              <div className="relative bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-xl rounded-3xl p-8 hover:from-white/[0.25] hover:to-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#6a83c9]/30 to-[#8aa3e9]/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300"
                  >
                    🇩🇪
                  </motion.div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-sm">
                      German Quality
                    </h3>
                    <p className="text-white/90 text-base">Since 2003</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV7;
