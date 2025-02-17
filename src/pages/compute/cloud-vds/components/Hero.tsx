import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background grid animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1e1b4b] bg-opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b] via-transparent to-[#1e1b4b]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#312e81] text-white/90 text-sm font-medium rounded-full mb-8"
          >
            CLOUD VDS FOR LESS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Virtual Dedicated Servers:
            <br />
            Power Meets Affordability
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            We combined the best of both{" "}
            <Link
              to="/compute/cloud-vps"
              className="text-[#93c5fd] hover:text-[#60a5fa] transition-colors"
            >
              Cloud VPS
            </Link>{" "}
            and{" "}
            <Link
              to="/dedicated-servers"
              className="text-[#93c5fd] hover:text-[#60a5fa] transition-colors"
            >
              Dedicated Servers
            </Link>{" "}
            so that you can run the most intensive compute workloads. Each VDS
            comes with 100% dedicated RAM, processors, and Enterprise-grade NVMe
            SSD storage.
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
              className="px-8 py-4 bg-[#93c5fd] text-[#1e1b4b] rounded-full font-semibold text-lg hover:bg-[#60a5fa] transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Deploy Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#312e81] text-white rounded-full font-semibold text-lg hover:bg-[#1e1b4b] transition-all duration-300"
            >
              Compare Plans
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
