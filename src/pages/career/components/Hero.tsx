import React from "react";
import { motion } from "framer-motion";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#ff6b4a]/5 via-white to-[#ff3e3e]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Be part of our mission to transform digital infrastructure and
              empower businesses worldwide.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingAnimation}
              className="relative"
            >
              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/5 blur-xl rounded-full transform-gpu" />

              {/* Image */}
              <motion.img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/draws/features.svg"
                alt="Team Collaboration"
                className="w-full max-w-lg relative"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] bg-gradient-to-b from-[#ff6b4a]/5 to-transparent rounded-full transform rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-1/2 -left-1/2 w-[100rem] h-[100rem] bg-gradient-to-t from-[#ff3e3e]/5 to-transparent rounded-full transform -rotate-45"
        />
      </div>
    </section>
  );
};

export default Hero;
