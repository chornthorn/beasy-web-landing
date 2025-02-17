import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time varies based on project complexity. Typically, our solutions are deployed within 4-12 weeks.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 technical assistance, regular maintenance, and dedicated account management.",
  },
  {
    question: "Can your solution integrate with our existing systems?",
    answer:
      "Yes, our solutions are built to integrate seamlessly with your existing infrastructure and can be customized to meet your specific needs.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "We implement industry-leading security protocols including end-to-end encryption, regular security audits, and compliance with international standards.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
