import React from "react";
import { motion } from "framer-motion";

const Awards: React.FC = () => {
  const awards = [
    {
      title: "Best Value for Money",
      organization: "Hosting Award",
      year: "2023",
      icon: "🏆",
      description:
        "Recognized for providing exceptional value in cloud hosting services",
    },
    {
      title: "Excellence in Customer Support",
      organization: "Cloud Computing Awards",
      year: "2023",
      icon: "🌟",
      description:
        "Awarded for outstanding customer service and technical support",
    },
    {
      title: "Best Infrastructure Innovation",
      organization: "Data Center Awards",
      year: "2023",
      icon: "💫",
      description:
        "Honored for innovative data center solutions and technology",
    },
    {
      title: "Top Cloud Provider",
      organization: "European Cloud Awards",
      year: "2023",
      icon: "🏅",
      description: "Recognized as a leading cloud service provider in Europe",
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab]">
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

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, #1a237e 0%, #283593 50%, #3949ab 100%)",
            "linear-gradient(225deg, #1a237e 0%, #283593 50%, #3949ab 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Awards
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Contabo Data Centers and Customer Support Received Multiple Awards
            </p>
          </motion.div>
        </div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-xl rounded-3xl p-8 hover:from-white/[0.25] hover:to-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
            >
              {/* Award Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-[#6a83c9]/30 to-[#8aa3e9]/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 mb-6"
              >
                {award.icon}
              </motion.div>

              {/* Award Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {award.title}
                </h3>
                <p className="text-white/90 font-medium text-sm mb-3">
                  {award.organization}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
                    {award.year}
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/20 via-[#7a93d9]/20 to-[#8aa3e9]/20 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg mb-6">
            Join thousands of satisfied customers who trust Contabo
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/10 hover:bg-[#162454] text-white rounded-full font-medium transition-colors duration-200"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
