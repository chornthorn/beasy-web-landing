import React from "react";
import { motion } from "framer-motion";

const Locations: React.FC = () => {
  const locations = [
    { name: "US (West)", x: "20%", y: "35%" },
    { name: "US (Central)", x: "25%", y: "38%" },
    { name: "US (East)", x: "28%", y: "35%" },
    { name: "United Kingdom", x: "45%", y: "30%" },
    { name: "EU", x: "48%", y: "32%" },
    { name: "Asia (India)", x: "60%", y: "45%" },
    { name: "Asia (Japan)", x: "82%", y: "35%" },
    { name: "Asia (Singapore)", x: "75%", y: "55%" },
    { name: "Australia (Sydney)", x: "85%", y: "65%" },
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4"
          >
            9 Regions, 12 Locations, Global Availability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#1a237e]/80 max-w-2xl mx-auto"
          >
            Deploy your applications closer to your users
          </motion.p>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[2/1] bg-white rounded-3xl overflow-hidden">
          <img
            src="https://images.ctfassets.net/uhwn5kvabnul/70r3jlYV2VRH46JFdRDnhe/c5cca188d2090db74049bfbcf7728bd8/Contabo_Data_Center_Region_Map.svg"
            alt="Global Data Center Regions"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#1a237e] mb-2">9</h3>
            <p className="text-[#1a237e]/90 font-medium">Global Regions</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#1a237e] mb-2">12</h3>
            <p className="text-[#1a237e]/90 font-medium">Data Centers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#1a237e] mb-2">99.9%</h3>
            <p className="text-[#1a237e]/90 font-medium">Uptime SLA</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
