import React, { useState } from "react";
import { motion } from "framer-motion";
import { deploymentOptions } from "../data/deployment";

interface DeploymentOptionsProps {
  title?: string;
  subtitle?: string;
  productType?: string;
}

const DeploymentOptions: React.FC<DeploymentOptionsProps> = ({
  title = "Operating Systems and Control Panels",
  subtitle = "Choose from a variety of operating systems and control panels",
  productType = "Server",
}) => {
  const [activeTab, setActiveTab] = useState<"os" | "panel" | "custom">("os");

  const tabs = [
    { id: "os", label: "Operating Systems" },
    { id: "panel", label: "Panels & Apps" },
    { id: "custom", label: "Custom Images" },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case "os":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {deploymentOptions.operatingSystems.map((os, idx) => (
              <motion.div
                key={os.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                  <motion.img
                    src={os.logo}
                    alt={os.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gray-600/10 rounded-full"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors">
                  {os.name}
                </span>
              </motion.div>
            ))}
          </div>
        );
      case "panel":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {deploymentOptions.panels.map((panel, idx) => (
              <motion.div
                key={panel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center p-8 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer group"
              >
                <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                  <motion.img
                    src={panel.logo}
                    alt={panel.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gray-600/10 rounded-full"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-gray-300 text-lg font-medium text-center group-hover:text-white transition-colors">
                  {panel.name}
                </span>
              </motion.div>
            ))}
          </div>
        );
      case "custom":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/80 transition-colors cursor-pointer group"
          >
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/80 transition-colors"
                >
                  <svg
                    className="w-12 h-12 text-[#93c5fd] group-hover:text-[#60a5fa] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#93c5fd] transition-colors">
                  Deploy Your Perfect Image
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  With Custom Images, you can instantly deploy your .iso or
                  .qcow2 image via web UI or API.
                </p>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title} for Your {productType}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#93c5fd] text-[#111827]"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentOptions;
