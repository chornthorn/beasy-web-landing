import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
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

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab]">
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
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Choose the perfect server solution for your needs
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Cloud VPS Card */}
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
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  Credit Back
                </span>
              </div>
              <h3 className="text-white text-lg font-medium mb-2">CLOUD VPS</h3>
              <h4 className="text-white text-2xl font-bold mb-4">
                Virtual Private Servers
              </h4>
              <div className="mb-4">
                <span className="text-white/80 text-sm font-medium">from</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$5.50</span>
                  <span className="text-white/80 ml-2 font-medium">
                    / month
                  </span>
                </div>
              </div>
              <p className="text-white/90 text-sm mb-6 font-medium tracking-wide">
                Starts with 4 vCPU, 6 GB RAM, and 100 GB NVMe.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-[#162454] text-white font-medium transition-colors duration-200"
              >
                View all Cloud VPS
              </motion.button>
            </div>
          </motion.div>

          {/* Cloud VDS Card */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/20 via-[#7a93d9]/20 to-[#8aa3e9]/20 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6" />
            <div className="relative bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-xl rounded-3xl p-8 hover:from-white/[0.25] hover:to-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  Credit Back
                </span>
              </div>
              <h3 className="text-white text-lg font-medium mb-2">CLOUD VDS</h3>
              <h4 className="text-white text-2xl font-bold mb-4">
                Virtual Dedicated Servers
              </h4>
              <div className="mb-4">
                <span className="text-white/80 text-sm font-medium">from</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$46.40</span>
                  <span className="text-white/80 ml-2 font-medium">
                    / month
                  </span>
                </div>
              </div>
              <p className="text-white/90 text-sm mb-6 font-medium tracking-wide">
                Up to 96 GB RAM and dedicated resources provisioned instantly.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-[#162454] text-white font-medium transition-colors duration-200"
              >
                View all Cloud VDS
              </motion.button>
            </div>
          </motion.div>

          {/* Bare Metal Card */}
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
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  Credit Back
                </span>
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                BARE METAL
              </h3>
              <h4 className="text-white text-2xl font-bold mb-4">
                Dedicated Servers
              </h4>
              <div className="mb-4">
                <span className="text-white/80 text-sm font-medium">from</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$80.00</span>
                  <span className="text-white/80 ml-2 font-medium">
                    / month
                  </span>
                </div>
              </div>
              <p className="text-white/90 text-sm mb-6 font-medium tracking-wide">
                Bare metal servers with individual configuration and full
                control.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-[#162454] text-white font-medium transition-colors duration-200"
              >
                View all Dedicated Servers
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={statsVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-white mb-2">200,000+</h3>
            <p className="text-white/90 font-medium">Customers Worldwide</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-2">400,000+</h3>
            <p className="text-white/90 font-medium">Servers Running</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-2">21 Years</h3>
            <p className="text-white/90 font-medium">In Business</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
