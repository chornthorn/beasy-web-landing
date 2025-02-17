import React from "react";
import { motion } from "framer-motion";

const Performance: React.FC = () => {
  const stats = [
    {
      value: "100%",
      label: "Dedicated Resources",
      description: "No resource sharing or overprovisioning",
    },
    {
      value: "2.8 GHz",
      label: "AMD EPYC™",
      description: "Enterprise-grade processors",
    },
    {
      value: "NVMe",
      label: "SSD Storage",
      description: "Ultra-fast storage performance",
    },
    {
      value: "1 Gbit/s",
      label: "Network Speed",
      description: "High-speed network connectivity",
    },
  ];

  const features = [
    "AMD EPYC™ 7282 processors with up to 12 physical cores",
    "Up to 96 GB dedicated RAM with ECC",
    "Enterprise NVMe SSDs with up to 720 GB storage",
    "Up to 1 Gbit/s port speed with unlimited traffic option",
    "DDoS protection included at no extra cost",
    "Full root access and choice of operating system",
  ];

  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10" />
        <div className="absolute inset-0 bg-[#111827] opacity-90" />
        {/* Animated Background Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-500/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -1000],
              x: [null, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: -Math.random() * 20,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Enterprise-Grade Performance at Your Fingertips
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-8"
            >
              Experience blazing-fast performance with our enterprise hardware
              stack, featuring AMD EPYC™ processors and NVMe SSDs.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-[#93c5fd] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/80 transition-all group"
              >
                {/* Floating Animation Container */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="text-3xl font-bold text-[#93c5fd] mb-2 group-hover:text-[#60a5fa] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </div>
                </motion.div>
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff]/0 via-[#4d8dff]/0 to-[#60a5fa]/0 group-hover:from-[#0062ff]/20 group-hover:via-[#4d8dff]/20 group-hover:to-[#60a5fa]/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
