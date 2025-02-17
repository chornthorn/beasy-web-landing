import React from "react";
import { motion } from "framer-motion";

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
      description:
        "Enterprise-grade server hardware and infrastructure solutions",
    },
    {
      name: "HPE",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg",
      description: "High-performance computing and storage solutions",
    },
    {
      name: "AMD EPYC",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/amd_logo-freelogovectors.net_.png",
      description: "Powerful server processors for optimal performance",
    },
    {
      name: "Samsung",
      logo: "https://eventprojection.co.uk/wp-content/uploads/2018/10/samsung-black-and-white-logo.png",
      description: "High-speed memory and storage components",
    },
  ];

  const support = {
    title: "First-class Customer Support",
    description:
      "A Premium Support Experience for every customer is one of our cornerstones at Contabo. 64 highly-trained support specialists are here to assist you 24 hours a day, 365 days a year.",
    subtext:
      "Don't take our word for it! The quality of our support has been recognized year after year by experts from CHIP Hotline Test, the gold standard for customer support testing in Germany. Thousands of customers mention support in their 5-star reviews of Contabo.",
    link: "Learn more about the Contabo Support Experience",
  };

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
            Who We Work With to Build Our Servers
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-[1px] rounded-xl transition-all duration-500"
              whileHover={{ scale: 1 }}
            >
              {/* Gradient Border Container */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0062ff] via-[#4d8dff] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

              {/* Card Content Container */}
              <div className="relative bg-[#1b1f23] rounded-xl p-8 h-full z-10 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-40 h-16 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Support Image */}
          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://images.ctfassets.net/uhwn5kvabnul/7otp3F5m2NvQaxogw0U4iP/1313a1cbdd2a29cf71364bd868f9cc58/support-guy_BFCM.svg"
              alt="Customer Support"
              className="w-full h-auto max-w-lg mx-auto filter brightness-[1.1]"
            />
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="flex text-yellow-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Support Content */}
          <motion.div variants={itemVariants} className="text-white">
            <h3 className="text-3xl font-bold mb-6">{support.title}</h3>
            <p className="text-gray-300 text-base leading-7 tracking-wide mb-6">
              {support.description}
            </p>
            <p className="text-gray-300 text-base leading-7 tracking-wide mb-6">
              {support.subtext}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#4d8dff] font-medium group hover:translate-x-2 transition-transform duration-500"
            >
              {support.link}
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
