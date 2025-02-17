import React from "react";
import { motion } from "framer-motion";
import { features } from "../data/plans";

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything You Need at a Fraction of the Cost
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Our S3-compatible object storage provides all the features you need
            for secure, scalable, and efficient data storage at an unbeatable
            price.
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
              className="relative group"
            >
              {/* Feature Card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 border border-gray-700/50">
                {/* Icon Container */}
                <div className="mb-4 inline-block">
                  <div className="relative">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl transform scale-150" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Storage Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl text-blue-500/10"
                initial={{ y: "100%", x: Math.random() * 100 + "%" }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -Math.random() * 20,
                }}
              >
                ☁️
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise-Grade Cloud Storage
            </h3>
            <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Get the reliability and features of enterprise cloud storage
              without the enterprise price tag. Our object storage solution is
              designed to meet your needs while keeping costs predictable and
              affordable.
            </p>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "High Performance",
              description:
                "Fast access to your data with optimized infrastructure",
            },
            {
              icon: "💰",
              title: "Cost Effective",
              description: "Pay only for what you use with no hidden fees",
            },
            {
              icon: "🔒",
              title: "Secure & Reliable",
              description: "Enterprise-grade security with 99.9% availability",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
