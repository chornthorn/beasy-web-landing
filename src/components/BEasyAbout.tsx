import React from "react";
import { motion } from "framer-motion";

const BEasyAbout: React.FC = () => {
  const features = [
    {
      title: "Our Mission",
      description:
        "We are committed to transforming the way people access and manage household services by providing a seamless connection between customers and qualified service providers.",
      icon: (
        <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center text-[#4CAF50] transition-colors duration-300 group-hover:bg-[#4CAF50]/20">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Our Approach",
      description:
        "By leveraging modern technology and prioritizing user experience, bEasy delivers convenience, reliability, and quality right at the fingertips of our users.",
      icon: (
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 transition-colors duration-300 group-hover:bg-blue-500/20">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Our Vision",
      description:
        "To be the one-stop solution for all home service needs, making everyday life easier and more efficient for our customers while creating opportunities for service providers.",
      icon: (
        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 transition-colors duration-300 group-hover:bg-purple-500/20">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      ),
    },
  ];

  const stats = [
    { number: "100+", label: "Service Types" },
    { number: "1000+", label: "Service Providers" },
    { number: "50,000+", label: "Completed Jobs" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            About bEasy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Transforming the way people access and manage household services in
            today's fast-paced world
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                {/* Icon */}
                <div className="mb-6">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 border border-gray-200">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BEasyAbout;
