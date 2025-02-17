import React from "react";
import { motion } from "framer-motion";
import { features } from "../data/plans";

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Windows VPS Hosting?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Windows VPS hosting offers a range of benefits that meet the dynamic
            needs of businesses and developers. Here's how a Windows VPS can
            benefit your projects:
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
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#0078D4] transition-colors duration-300 group relative"
            >
              {/* Icon with Windows-themed Effect */}
              <div className="relative">
                <div className="text-3xl mb-4 relative z-10">
                  {feature.icon}
                </div>
                <motion.div
                  className="absolute inset-0 bg-[#0078D4]/10 rounded-full"
                  initial={false}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Title with Windows Blue Hover Effect */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#0078D4] transition-colors">
                {feature.title}
              </h3>

              {/* Description with Improved Readability */}
              <p className="text-gray-100 leading-relaxed group-hover:text-white transition-colors">
                {feature.description}
              </p>

              {/* Windows-themed Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0078D4]/0 via-[#00a2ff]/0 to-[#00b7ff]/0 group-hover:from-[#0078D4]/20 group-hover:via-[#00a2ff]/20 group-hover:to-[#00b7ff]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Windows-specific Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">⊞</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Optimized for Windows Workloads
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Our Windows VPS solutions are specifically optimized for
            Windows-based applications and services, ensuring optimal
            performance for your .NET applications, SQL Server databases, and
            other Windows workloads.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
