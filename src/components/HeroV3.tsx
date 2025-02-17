import React from "react";
import { motion } from "framer-motion";

const HeroV3: React.FC = () => {
  // Animation variants for the mesh gradient
  const meshAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for floating elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for text reveal
  const textReveal = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Mesh Gradient Background */}
      <motion.div
        variants={meshAnimation}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,74,0.1),rgba(255,62,62,0.1))]"
      />

      {/* Animated Shapes */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.1,
            transition: { duration: 2, ease: "easeOut" },
          }}
          className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#ff6b4a]/30 to-[#ff3e3e]/30 blur-3xl"
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute"
              style={{
                top: `${20 + index * 30}%`,
                left: `${70 + index * 10}%`,
                width: `${100 - index * 20}px`,
                height: `${100 - index * 20}px`,
                background: `linear-gradient(135deg, rgba(255,107,74,${
                  0.1 - index * 0.02
                }) 0%, rgba(255,62,62,${0.1 - index * 0.02}) 100%)`,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                transform: `rotate(${index * 45}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#ff6b4a]/10 to-[#ff3e3e]/10"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent">
                Welcome to Suntel Technology
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h1
                variants={textReveal}
                initial="initial"
                animate="animate"
                className="text-5xl lg:text-6xl font-bold"
              >
                <span className="text-gray-900">Empowering Your</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent">
                  Digital Future
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-lg"
            >
              Transform your business with cutting-edge technology solutions.
              From custom software to cloud infrastructure, we deliver
              innovation that drives growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white rounded-full font-medium text-lg hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "200+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Elements */}
          <div className="relative lg:h-[600px]">
            {/* Main Visual Element */}
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="relative z-10"
            >
              {/* Abstract Shapes */}
              <div className="relative w-full h-full">
                {/* Central Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                  <div className="relative w-full h-full">
                    {/* Rotating Circles */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        transition: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                      className="absolute inset-0"
                    >
                      {[...Array(3)].map((_, index) => (
                        <div
                          key={index}
                          className="absolute inset-0 border-2 rounded-full"
                          style={{
                            borderColor: `rgba(255, 107, 74, ${
                              0.2 - index * 0.05
                            })`,
                            transform: `scale(${1 + index * 0.2}) rotate(${
                              index * 30
                            }deg)`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="w-24 h-24 bg-gradient-to-br from-[#ff6b4a] to-[#ff3e3e] rounded-xl shadow-lg flex items-center justify-center"
                      >
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: [0, 360],
                      transition: {
                        duration: 15 + index * 5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="absolute"
                    style={{
                      top: `${20 + index * 20}%`,
                      right: `${10 + index * 20}%`,
                      width: `${40 - index * 5}px`,
                      height: `${40 - index * 5}px`,
                      background: `linear-gradient(135deg, rgba(255,107,74,${
                        0.3 - index * 0.05
                      }) 0%, rgba(255,62,62,${0.3 - index * 0.05}) 100%)`,
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV3;
