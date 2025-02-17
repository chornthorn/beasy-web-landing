import React from "react";
import { motion } from "framer-motion";

const comparisons = [
  {
    title: "Licensing",
    description:
      "Windows provides volume licensing and enterprise features that can be more cost-effective than Linux for large setups.",
    icon: "📜",
  },
  {
    title: "Development",
    description:
      "Windows is proprietary, offering a unified environment. Linux is open-source and customizable, but requires more expertise.",
    icon: "💻",
  },
  {
    title: "Configuration",
    description:
      "Windows primarily uses a GUI, making it user-friendly. Linux is more efficient via CLI, but with a learning curve.",
    icon: "⚙️",
  },
  {
    title: "Installation",
    description:
      "Windows employs user-friendly installer-based software setup. Linux uses more complex package managers.",
    icon: "📦",
  },
  {
    title: "Performance",
    description:
      "Windows integrates well with its ecosystem of tools and apps. Linux sacrifices integration for greater efficiency.",
    icon: "⚡",
  },
  {
    title: "File Systems",
    description:
      "Windows enhances compatibility and streamlined data management within its ecosystem, boosting reliability.",
    icon: "📁",
  },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What are the main advantages of a Windows VPS vs. Linux equivalents?
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Windows servers offer benefits that make them a preferred choice for
            many users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#0078D4] transition-colors duration-300 group relative"
            >
              {/* Icon with Windows-themed Effect */}
              <div className="relative">
                <div className="text-3xl mb-4 relative z-10">{item.icon}</div>
                <motion.div
                  className="absolute inset-0 bg-[#0078D4]/10 rounded-full"
                  initial={false}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Title with Windows Blue Hover Effect */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#0078D4] transition-colors">
                {item.title}
              </h3>

              {/* Description with Improved Readability */}
              <p className="text-gray-100 leading-relaxed group-hover:text-white transition-colors">
                {item.description}
              </p>

              {/* Windows-themed Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0078D4]/0 via-[#00a2ff]/0 to-[#00b7ff]/0 group-hover:from-[#0078D4]/20 group-hover:via-[#00a2ff]/20 group-hover:to-[#00b7ff]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">⊞</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Enterprise-Ready Windows Environment
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Get the best of both worlds with our Windows VPS solutions -
            enterprise-grade features with the ease of use that Windows is known
            for, all backed by our reliable infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
