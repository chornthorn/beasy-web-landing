import React from "react";
import { motion } from "framer-motion";

const HeroV9: React.FC = () => {
  const gradients = [
    {
      vertical:
        "linear-gradient(to bottom, transparent, #ff6b4a26, #ff3e3e26, #ff6b4a26, transparent)",
      horizontal:
        "linear-gradient(to right, transparent, #ff6b4a26, #ff3e3e26, #ff6b4a26, transparent)",
    },
    {
      vertical:
        "linear-gradient(to bottom, transparent, #ff3e3e26, #ff6b4a26, #ff3e3e26, transparent)",
      horizontal:
        "linear-gradient(to right, transparent, #ff3e3e26, #ff6b4a26, #ff3e3e26, transparent)",
    },
    {
      vertical:
        "linear-gradient(to bottom, transparent, #ff6b4a26, #ff3e3e26, #ff6b4a26, transparent)",
      horizontal:
        "linear-gradient(to right, transparent, #ff6b4a26, #ff3e3e26, #ff6b4a26, transparent)",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical Lines */}
        <div className="absolute inset-0 flex justify-around">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="w-[2px] h-full origin-center"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scaleY: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.7, 1],
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
              style={{
                background: gradients[i % 3].vertical,
              }}
            />
          ))}
        </div>

        {/* Horizontal Lines */}
        <div className="absolute inset-0 flex flex-col justify-around">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="w-full h-[2px] origin-center"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scaleX: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.7, 1],
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
              style={{
                background: gradients[i % 3].horizontal,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-[#ff6b4a]/30 rounded-full"
            initial={{
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [0, Math.random() * 0.5 + 0.5],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white text-sm font-medium rounded-full mb-8"
            >
              Innovative Technology Solutions
            </motion.div>

            <div className="space-y-4 mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Empowering Success
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Through Technology
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent leading-tight">
                Innovation
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">
              At Suntel Technology, we help businesses achieve their goals
              through custom software development, telecom solutions, and
              cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white rounded-full font-medium text-lg hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg"
              >
                Explore Solutions
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24 max-w-4xl mx-auto">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "200+", label: "Projects Delivered" },
                { number: "50+", label: "Expert Team Members" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV9;
