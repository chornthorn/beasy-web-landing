import React from "react";
import { motion } from "framer-motion";

interface Props {
  activeTab: "new" | "existing";
  onTabChange: (tab: "new" | "existing") => void;
}

const AuthTabs: React.FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex mb-8">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onTabChange("new")}
        className={`px-6 py-3 rounded-l-lg font-medium transition-colors ${
          activeTab === "new"
            ? "bg-blue-500 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        I'm new to Contabo
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onTabChange("existing")}
        className={`px-6 py-3 rounded-r-lg font-medium transition-colors ${
          activeTab === "existing"
            ? "bg-blue-500 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        I'm a Contabo Customer
      </motion.button>
    </div>
  );
};

export default AuthTabs;
