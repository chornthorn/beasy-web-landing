import React from "react";
import { motion } from "framer-motion";

const HeroV4: React.FC = () => {
  const services = [
    {
      title: "Custom Software",
      description: "Tailored solutions for your business needs",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure infrastructure",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "AI Services",
      description: "Intelligent automation solutions",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full min-w-[1000px]"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          {[...Array(3)].map((_, index) => (
            <motion.path
              key={index}
              d="M0,500 C200,400 400,600 600,500 C800,400 1000,600 1000,500 V1000 H0 V500 Z"
              fill={`rgba(255, 107, 74, ${0.03 - index * 0.01})`}
              animate={{
                d: [
                  "M0,500 C200,400 400,600 600,500 C800,400 1000,600 1000,500 V1000 H0 V500 Z",
                  "M0,500 C200,600 400,400 600,500 C800,600 1000,400 1000,500 V1000 H0 V500 Z",
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 10 + index * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-[#ff6b4a]/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
              className="inline-flex items-center px-6 py-2 rounded-full bg-white shadow-lg border border-gray-100"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent">
                Welcome to Suntel Technology
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Innovate with
                <br />
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent">
                    Technology
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-3 bg-[#ff6b4a]/10 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-6">
                Transform your business with cutting-edge solutions that drive
                growth and innovation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white rounded-full font-medium text-lg hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Column - Floating Cards */}
          <div className="relative lg:h-[600px]">
            <div className="relative w-full h-full">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 30}%`,
                    right: `${index * 5}%`,
                    zIndex: 3 - index,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-100 shadow-lg w-72"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-[#ff6b4a] to-[#ff3e3e] rounded-xl text-white">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="w-96 h-96 rounded-full border-2 border-[#ff6b4a]/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV4;
