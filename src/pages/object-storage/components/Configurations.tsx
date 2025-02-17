import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { regionalPlans, regions } from "../data/plans";

const Configurations: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const navigate = useNavigate();

  const handleSelect = (plan: any) => {
    const regionParam = plan.region.toLowerCase().replace(/\s+/g, "-");
    const sizeInGB = parseInt(plan.size.split(" ")[0]);
    navigate(
      `/object-storage/order/?qty=1&region=${regionParam}&size=${sizeInGB}`
    );
  };

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Most Popular Storage Configurations
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Pick one of the plans or customize the amount of storage you need on
            a monthly basis. You only pay for each 250 GB slice you use (no PhD
            in accounting or economics needed).
          </p>
        </div>

        {/* Region Selection */}
        <div className="flex justify-center gap-2 mb-12">
          {regions.map((region) => (
            <motion.button
              key={region}
              onClick={() => setSelectedRegion(region)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedRegion === region
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {region}
            </motion.button>
          ))}
        </div>

        {/* Plans List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          {regionalPlans
            .filter((plan) => plan.region === selectedRegion)
            .map((plan, idx) => (
              <motion.div
                key={plan.size}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-700/50 last:border-0"
              >
                {/* Plan Info */}
                <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-lg font-medium text-white">
                    {plan.size} in {plan.region}
                  </h3>
                </div>

                {/* Price */}
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/ month</span>
                    </div>
                  </div>

                  {/* Select Button */}
                  <motion.button
                    onClick={() => handleSelect(plan)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Select
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">🌍</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Global Data Centers
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Choose from multiple regions worldwide to ensure the best
            performance for your users. Your data stays in the region you
            select, giving you complete control over data residency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Configurations;
