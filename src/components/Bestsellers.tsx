import React from "react";
import { motion } from "framer-motion";

const Bestsellers: React.FC = () => {
  const products = [
    {
      type: "Virtual Private Servers",
      name: "Cloud VPS 1",
      price: "5.50",
      description:
        "The cheapest way to get your own independent computing instance.",
      features: ["No Setup Fee", "Credit Back"],
    },
    {
      type: "Virtual Private Servers",
      name: "Cloud VPS 3",
      price: "17.50",
      description: "Our most popular VPS. 8 CPU Cores & 24 GB RAM do the job!",
      features: ["No Setup Fee", "Credit Back"],
    },
    {
      type: "Virtual Dedicated Servers",
      name: "Cloud VDS XL",
      price: "110.40",
      description:
        "Provisioned in minutes like a VPS. Powerful like a Dedicated Server!",
      features: ["No Setup Fee", "Credit Back"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-[#6a83c9]/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, "-100vh"],
              x: [null, `${(Math.random() - 0.5) * 200}px`],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Bestsellers
          </motion.h2>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-[1px] rounded-xl transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Border Container */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff] via-[#4d8dff] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

              {/* Card Content Container */}
              <div className="relative bg-[#1b1f23] rounded-xl p-8 h-full z-10">
                {/* Features Tags */}
                <div className="flex gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        feature === "No Setup Fee"
                          ? "bg-red-600/20 text-red-500"
                          : "bg-blue-600/20 text-blue-400"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Product Type */}
                <div className="text-gray-400 text-sm mb-2">{product.type}</div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 ml-1">/ month</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base leading-7 tracking-wide mb-8">
                  {product.description}
                </p>

                {/* Select Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-[#0062ff] to-[#60a5fa] text-white rounded-full font-medium hover:from-[#0051d4] hover:to-[#4d8dff] transition-all duration-300"
                >
                  Select
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bestsellers;
