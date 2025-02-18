import React from "react";
import { motion } from "framer-motion";

const FiveGService: React.FC = () => {
  const features = [
    {
      title: "Ultra-Fast Speed",
      description:
        "Experience speeds up to 20Gbps with our 5G network infrastructure",
      icon: (
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
      ),
      gradient: "from-[#FF6B4A] to-[#FF3E3E]",
    },
    {
      title: "Low Latency",
      description:
        "Ultra-low latency of 1ms for real-time applications and critical operations",
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-[#4A90FF] to-[#3E6CFF]",
    },
    {
      title: "Massive Connectivity",
      description: "Support for up to 1 million devices per square kilometer",
      icon: (
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
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      gradient: "from-[#9C4AFF] to-[#783EFF]",
    },
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description:
        "Automate and optimize manufacturing processes with real-time monitoring and control. Enable predictive maintenance, automated quality control, and robotic process automation with ultra-reliable low latency communication.",
      icon: "🏭",
      image:
        "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-500/80 to-indigo-600/80",
    },
    {
      title: "Connected Healthcare",
      description:
        "Enable remote surgeries and real-time patient monitoring with ultra-reliable connectivity. Support telemedicine, remote diagnostics, and AI-powered health monitoring systems with secure, high-speed networks.",
      icon: "🏥",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-emerald-500/80 to-green-600/80",
    },
    {
      title: "Smart Cities",
      description:
        "Power smart city infrastructure with massive IoT device connectivity. Enable intelligent traffic management, smart utilities, public safety systems, and environmental monitoring with comprehensive network coverage.",
      icon: "🌆",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-500/80 to-pink-600/80",
    },
    {
      title: "Autonomous Vehicles",
      description:
        "Support self-driving vehicles with ultra-low latency communication. Enable real-time traffic data, vehicle-to-vehicle communication, and advanced driver assistance systems with reliable network infrastructure.",
      icon: "🚗",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500/80 to-red-600/80",
    },
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description:
        "Advanced security features including network slicing and end-to-end encryption",
    },
    {
      title: "Scalability",
      description:
        "Easily scale your network to accommodate growing device numbers and data demands",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce operational costs with efficient network management and optimization",
    },
    {
      title: "Future-Ready",
      description:
        "Stay ahead with a network that's ready for future technological advancements",
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
          >
            5G Technology Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
          >
            Next-generation connectivity for enterprise and industrial
            applications
          </motion.p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the power of 5G technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-8 border border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm group-hover:border-gray-300 transition-all duration-300 h-full hover:shadow-lg">
                {/* Icon with gradient background */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="mt-24 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Industry Use Cases
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Transform your industry with 5G technology
            </p>
          </motion.div>

          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-[400px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center text-2xl`}
                    >
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                  <button className="mt-8 inline-flex items-center text-[#ff6b4a] font-medium hover:text-[#ff3e3e] transition-colors duration-300">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
          <p className="mt-4 text-xl text-gray-600">
            Why choose our 5G solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us to learn how our 5G solutions can revolutionize your
              operations
            </p>
            <button className="bg-white text-[#ff6b4a] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FiveGService;
