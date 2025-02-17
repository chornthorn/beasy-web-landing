import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CompanyHeader } from "../../components/layout/header";
import Footer from "../../components/Footer";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />

      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] bg-gradient-to-b from-[#ff6b4a]/5 to-transparent rounded-full transform rotate-45" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[100rem] h-[100rem] bg-gradient-to-t from-[#ff3e3e]/5 to-transparent rounded-full transform -rotate-45" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-transparent bg-clip-text leading-none">
                404
              </h1>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600">
                Oops! The page you're looking for seems to have taken a
                different route. Let's get you back on track.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={goBack}
                className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center space-x-2 group"
              >
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Go Back</span>
              </button>

              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white font-semibold hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                >
                  <span>Back to Home</span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16"
            >
              <img
                src="https://illustrations.popsy.co/gray/crashed-error.svg"
                alt="404 Illustration"
                className="max-w-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
