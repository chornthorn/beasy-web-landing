import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "100% Dedicated Resources",
    description:
      "Get guaranteed CPU, RAM, and NVMe storage with no overprovisioning. Your resources are yours alone.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Hardware",
    description:
      "Powered by AMD EPYC processors and high-performance NVMe SSDs for blazing-fast performance.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Instant Deployment",
    description:
      "Get your server up and running in minutes with our automated provisioning system.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Full Root Access",
    description:
      "Complete control over your server with root/administrator access and choice of operating system.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
  },
  {
    title: "DDoS Protection",
    description:
      "Enterprise-grade protection against DDoS attacks included at no additional cost.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Expert Support",
    description:
      "Our experienced team is available around the clock to help you with any issues.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111827] to-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Cloud VDS?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience the perfect balance of power, performance, and
            reliability with our Virtual Dedicated Servers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-all group"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff]/0 via-[#4d8dff]/0 to-[#60a5fa]/0 group-hover:from-[#0062ff]/20 group-hover:via-[#4d8dff]/20 group-hover:to-[#60a5fa]/20 transition-all duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-[#93c5fd] group-hover:bg-gray-700/80 group-hover:text-[#60a5fa] transition-all">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#93c5fd] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
