import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../auth";

const AuthButtons: React.FC = () => {
  const { openLogin } = useAuth();

  return (
    <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={openLogin}
        className="text-gray-300 hover:text-white transition-colors"
      >
        Log in
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={openLogin}
        className="bg-[#93c5fd] text-[#1e1b4b] px-4 py-2 rounded-lg font-medium hover:bg-[#60a5fa] transition-colors"
      >
        Sign up
      </motion.button>
    </div>
  );
};

export default AuthButtons;
