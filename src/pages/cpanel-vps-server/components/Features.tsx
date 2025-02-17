import React from "react";
import { motion } from "framer-motion";
import { features } from "../data/plans";

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose cPanel VPS Hosting?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Experience the power of cPanel with our optimized VPS hosting
            solutions. Get all the tools you need to manage your websites
            efficiently.
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
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors duration-300 group relative"
            >
              {/* Icon with cPanel-themed Effect */}
              <div className="relative">
                <div className="text-3xl mb-4 relative z-10">
                  {feature.icon}
                </div>
                <motion.div
                  className="absolute inset-0 bg-orange-500/10 rounded-full"
                  initial={false}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Title with Orange Hover Effect */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>

              {/* Description with Improved Readability */}
              <p className="text-gray-100 leading-relaxed group-hover:text-white transition-colors">
                {feature.description}
              </p>

              {/* cPanel-themed Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-400/0 to-orange-300/0 group-hover:from-orange-500/20 group-hover:via-orange-400/20 group-hover:to-orange-300/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">🎛️</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Industry-Leading Control Panel
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            cPanel is the most popular web hosting control panel for a reason.
            With its intuitive interface and powerful features, you can manage
            your websites, email accounts, databases, and more with just a few
            clicks.
          </p>
        </motion.div>

        {/* Feature Highlight Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "Easy to Use",
              description:
                "Intuitive interface that makes web hosting management simple",
            },
            {
              icon: "🛡️",
              title: "Secure & Reliable",
              description:
                "Built-in security features to keep your websites protected",
            },
            {
              icon: "🔄",
              title: "Regular Updates",
              description:
                "Automatic updates ensure you have the latest features",
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
