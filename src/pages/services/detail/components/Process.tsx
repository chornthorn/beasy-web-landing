import React from "react";
import { motion } from "framer-motion";

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We analyze your requirements and create a detailed project plan",
  },
  {
    step: "02",
    title: "Development",
    description:
      "Our team builds your solution using cutting-edge technologies",
  },
  {
    step: "03",
    title: "Testing",
    description: "Rigorous testing ensures quality and reliability",
  },
  {
    step: "04",
    title: "Deployment",
    description: "Smooth deployment and ongoing support",
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600">
            A proven methodology for delivering successful projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
