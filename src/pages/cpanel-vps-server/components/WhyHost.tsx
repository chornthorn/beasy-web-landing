import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "💳",
    title: "Pricing & Scalability",
    description:
      "Choose affordable cPanel VPS options that allow easy upgrading or adjustment to meet your needs without locking you into long-term contracts.",
  },
  {
    icon: "⏱️",
    title: "High Uptime & Global Reach",
    description:
      "Rely on our high uptime commitments, and choose from our 11 global Data Centers to ensure low latency for your customers, wherever they may be.",
  },
  {
    icon: "💾",
    title: "Backup & Recovery",
    description: (
      <>
        Schedule your own backups with ease directly via cPanel, or make use of
        our FTP backup or{" "}
        <span className="text-orange-400 hover:text-orange-300 cursor-pointer transition-colors">
          Object Storage
        </span>{" "}
        options to further secure your data.
      </>
    ),
  },
];

const WhyHost: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111827] to-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Why host your cPanel VPS with Contabo?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card with Hover Effect */}
              <div className="bg-white rounded-2xl p-8 h-full transform transition-transform duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="text-4xl mb-6">{reason.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Shadow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHost;
