import React from "react";
import { motion } from "framer-motion";

const Awards: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Awards Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-8"
          >
            {/* HostAdvice Award 2023 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4]/20 to-[#00a2ff]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src="/hostadvice-windows-award-2023.svg"
                alt="HostAdvice Windows Hosting Award 2023"
                className="w-full h-full object-contain relative z-10 drop-shadow-xl"
              />
              <motion.div
                className="absolute inset-0 bg-[#0078D4]/10 rounded-full"
                initial={false}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Windows Award */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4]/20 to-[#00a2ff]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src="/windows-hosting-award.svg"
                alt="Windows Hosting Award"
                className="w-full h-full object-contain relative z-10 drop-shadow-xl"
              />
              <motion.div
                className="absolute inset-0 bg-[#0078D4]/10 rounded-full"
                initial={false}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Award Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Recognized by Experts
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              The experts from HostAdvice continuously review hosting providers
              and have awarded Contabo with the{" "}
              <span className="text-[#0078D4] font-semibold whitespace-nowrap">
                Top 10 Windows Hosting Award
              </span>{" "}
              again this year.
            </p>
          </motion.div>
        </div>

        {/* Additional Recognition Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Award-Winning Windows Hosting
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Our commitment to providing exceptional Windows hosting solutions
            has been recognized by industry experts. Experience the quality and
            reliability that sets us apart in the hosting industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
