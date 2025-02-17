import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Dedicated Resources",
    description:
      "100% dedicated CPU, RAM, and storage with no overprovisioning",
    icon: "💪",
  },
  {
    title: "Enterprise Hardware",
    description: "Powered by AMD EPYC processors and NVMe SSDs",
    icon: "⚡",
  },
  {
    title: "Instant Deployment",
    description: "Get your dedicated server up and running in minutes",
    icon: "🚀",
  },
  {
    title: "Full Root Access",
    description: "Complete control over your virtual dedicated environment",
    icon: "🔑",
  },
  {
    title: "DDoS Protection",
    description:
      "Enterprise-grade protection against DDoS attacks included free",
    icon: "🛡️",
  },
  {
    title: "24/7 Expert Support",
    description: "Dedicated technical support team available around the clock",
    icon: "💬",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our Virtual Dedicated Servers deliver enterprise-level performance
            and reliability with dedicated resources and advanced features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300 group relative"
            >
              {/* Icon with Pulsing Effect */}
              <div className="relative">
                <div className="text-3xl mb-4 relative z-10">
                  {feature.icon}
                </div>
                <motion.div
                  className="absolute inset-0 bg-gray-600/10 rounded-full"
                  initial={false}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Title with Hover Effect */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#93c5fd] transition-colors">
                {feature.title}
              </h3>

              {/* Description with Improved Readability */}
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff]/0 via-[#4d8dff]/0 to-[#60a5fa]/0 group-hover:from-[#0062ff]/20 group-hover:via-[#4d8dff]/20 group-hover:to-[#60a5fa]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Performance Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Dedicated Performance
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience unmatched performance with dedicated resources, ensuring
            your applications run at peak efficiency without resource
            contention.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
