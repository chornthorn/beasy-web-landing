import React from "react";
import { motion } from "framer-motion";

const BEasyHero: React.FC = () => {
  // Animation variants for floating effect
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

  // Animation variants for background shapes
  const shapeAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 0.3,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        {/* Gradient Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.1,
            transition: { duration: 2, ease: "easeOut" },
          }}
          className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4CAF50]/30 to-[#8BC34A]/30 blur-3xl"
        />

        {/* Animated Shapes */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={shapeAnimation}
            className="absolute bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] rounded-full opacity-30"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              right: `${Math.random() * 50 + 50}%`,
              filter: "blur(50px)",
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-44 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                Home Services Made Easy
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Your Home Services{" "}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                  At Your Fingertips
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-lg"
            >
              bEasy connects you with qualified, vetted service providers for
              all your home needs. From cleaning to maintenance, get reliable
              assistance with just a few taps.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white rounded-full font-medium text-lg hover:from-[#8BC34A] hover:to-[#4CAF50] transition-all duration-300 shadow-lg hover:shadow-xl">
                Download App
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              {[
                { number: "1000+", label: "Service Providers" },
                { number: "50,000+", label: "Happy Customers" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - App Mockup */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            className="relative lg:h-[600px]"
          >
            {/* Main Image */}
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800"
                alt="bEasy Mobile App"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-10 right-10 w-20 h-20 border-4 border-[#4CAF50]/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                transition: { duration: 15, repeat: Infinity, ease: "linear" },
              }}
              className="absolute bottom-10 left-10 w-32 h-32 border-4 border-[#8BC34A]/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BEasyHero;
