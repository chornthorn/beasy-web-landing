import React, { useState } from "react";
import { motion } from "framer-motion";
import { domainExtensions, categories, highlights } from "../data/extensions";

const Extensions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("generic");

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6"
            >
              <div className="text-3xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-100 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Extensions Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">
                    Extension
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">
                    Meaning
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">
                    Category
                  </th>
                  <th className="text-right py-4 px-4 text-gray-300 font-medium">
                    Price / month
                  </th>
                  <th className="text-right py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {domainExtensions
                  .filter((ext) =>
                    ext.category.toLowerCase().includes(selectedCategory)
                  )
                  .map((extension, idx) => (
                    <motion.tr
                      key={extension.extension}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="border-b border-gray-700/50 last:border-0"
                    >
                      <td className="py-4 px-4">
                        <span className="text-cyan-400 font-medium">
                          {extension.extension}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {extension.meaning}
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {extension.category}
                      </td>
                      <td className="py-4 px-4 text-right text-white font-medium">
                        ${extension.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full text-sm font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
                        >
                          Register
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-gray-800/30 rounded-xl text-center text-sm text-gray-400"
        >
          Please note that we offer domains only to customers who have at least
          one other product with Contabo. All domain related features are
          available in the Contabo Customer Control Panel.
        </motion.div>
      </div>
    </section>
  );
};

export default Extensions;
