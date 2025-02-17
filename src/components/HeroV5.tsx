import React from "react";
import { motion } from "framer-motion";

const HeroV5: React.FC = () => {
  const gradients = [
    {
      hex: `linear-gradient(60deg, rgba(255,107,74,0.03), rgba(255,62,62,0.05))`,
    },
    {
      hex: `linear-gradient(60deg, rgba(255,62,62,0.03), rgba(255,107,74,0.05))`,
    },
    {
      hex: `linear-gradient(60deg, rgba(255,107,74,0.02), rgba(255,62,62,0.04))`,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,74,0.05),rgba(255,62,62,0.05))]" />
      </div>

      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical Hexagons */}
        <div className="absolute inset-0 flex justify-around">
          {[...Array(6)].map((_, i) => (
            <div key={`v-${i}`} className="relative">
              {[...Array(8)].map((_, j) => (
                <motion.div
                  key={`v-${i}-${j}`}
                  className="w-32 h-[138px] relative mb-[-34px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1, 0.8],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2 + j * 0.1,
                  }}
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background: gradients[i % 3].hex,
                      transform: `rotate(${((i + j) % 2) * 30}deg)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(135deg, rgba(255,107,74,${
                  0.1 + Math.random() * 0.1
                }) 0%, rgba(255,62,62,${0.1 + Math.random() * 0.1}) 100%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Moving Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px w-full"
              style={{
                top: `${15 + i * 15}%`,
                background: `linear-gradient(90deg, transparent, rgba(255,107,74,0.1), rgba(255,62,62,0.1), transparent)`,
              }}
              animate={{
                x: [-1000, 1000],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white shadow-lg rounded-full mb-8"
            >
              <span className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent text-sm font-medium">
                Welcome to Suntel Technology
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4 mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your Business
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                With Modern
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent leading-tight">
                Technology
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Experience cutting-edge solutions that drive innovation and
              growth. Partner with us to bring your vision to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white rounded-full font-medium text-lg hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                Learn More
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent mb-2">
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

export default HeroV5;
