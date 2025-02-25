import React from "react";
import { motion } from "framer-motion";

const BEasyServices: React.FC = () => {
  const services = [
    {
      id: "cleaning",
      title: "Home Cleaning",
      description:
        "Professional cleaning services for your home, including regular cleaning, deep cleaning, and specialized services.",
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
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "maintenance",
      title: "Home Maintenance",
      description:
        "Reliable maintenance services including plumbing, electrical work, HVAC, and general repairs for your home.",
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
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "landscaping",
      title: "Landscaping & Gardening",
      description:
        "Expert landscaping and gardening services to keep your outdoor spaces beautiful and well-maintained.",
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
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "handyman",
      title: "Handyman Services",
      description:
        "Skilled handymen for furniture assembly, mounting, installations, and other small tasks around your home.",
      icon: (
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 transition-colors duration-300 group-hover:bg-green-500/20">
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "pest-control",
      title: "Pest Control",
      description:
        "Effective pest control services to keep your home free from unwanted insects and pests.",
      icon: (
        <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 transition-colors duration-300 group-hover:bg-red-500/20">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "moving",
      title: "Moving & Delivery",
      description:
        "Reliable moving and delivery services for furniture, appliances, and other items to and from your home.",
      icon: (
        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 transition-colors duration-300 group-hover:bg-indigo-500/20">
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
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            A one-stop solution for all your home service needs, delivered with
            quality and reliability
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BEasyServices;
