import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started with a vision to transform digital solutions",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Opened offices in multiple countries",
  },
  {
    year: "2018",
    title: "Innovation Hub",
    description: "Launched our state-of-the-art innovation center",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Pioneered new solutions in AI and cloud technology",
  },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Recognized as a leading technology solutions provider",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">
            A timeline of our growth and achievements
          </p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e]" />
                </div>
                <div className={`flex ${index % 2 === 0 ? "justify-end" : ""}`}>
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                      <div className="text-[#ff6b4a] font-bold mb-2 transition-colors duration-300 group-hover:text-[#ff3e3e]">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
