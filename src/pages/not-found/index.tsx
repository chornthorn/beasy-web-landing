import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderV2 />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-[#1e1b4b] to-[#312e81] px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-[#93c5fd] mb-6">
              Page Not Found
            </h2>
            <p className="text-white/80 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block bg-[#93c5fd] text-[#1e1b4b] px-6 py-3 rounded-full text-[15px] font-semibold tracking-wide hover:bg-[#60a5fa] transition-all duration-300 shadow-md shadow-blue-500/20"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
