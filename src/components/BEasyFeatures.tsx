import React from "react";
import { motion } from "framer-motion";

const BEasyFeatures: React.FC = () => {
  const features = [
    {
      title: "Easy Booking",
      description:
        "Book services with just a few taps. Our intuitive interface makes scheduling appointments quick and hassle-free.",
      icon: (
        <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center text-[#4CAF50] transition-colors duration-300 group-hover:bg-[#4CAF50]/20">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Verified Providers",
      description:
        "All service providers undergo thorough background checks and verification to ensure quality and reliability.",
      icon: (
        <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 transition-colors duration-300 group-hover:bg-blue-500/20">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Real-time Tracking",
      description:
        "Track your service provider's arrival in real-time. Know exactly when they'll arrive at your doorstep.",
      icon: (
        <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 transition-colors duration-300 group-hover:bg-purple-500/20">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Secure Payments",
      description:
        "Pay securely through the app with multiple payment options. No need for cash transactions.",
      icon: (
        <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 transition-colors duration-300 group-hover:bg-green-500/20">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Ratings & Reviews",
      description:
        "Read and leave reviews for service providers. Our rating system helps maintain high service standards.",
      icon: (
        <div className="w-16 h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-500/20">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "24/7 Support",
      description:
        "Our customer support team is available 24/7 to assist you with any questions or concerns about your service.",
      icon: (
        <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 transition-colors duration-300 group-hover:bg-red-500/20">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            App Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Designed with user experience in mind, our app makes managing home
            services effortless
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02] text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">{feature.icon}</div>

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
      </div>
    </section>
  );
};

export default BEasyFeatures;
