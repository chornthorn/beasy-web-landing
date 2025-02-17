import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b4a]/5 via-white to-[#ff3e3e]/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Since our founding, we've been at the forefront of digital
              innovation, helping businesses adapt and thrive in an
              ever-evolving technological landscape.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b4a]/20 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="w-full h-full border-2 border-[#ff6b4a]/20 rounded-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24">
              <motion.div
                animate={{
                  rotate: [360, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="w-full h-full border-2 border-[#ff3e3e]/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
