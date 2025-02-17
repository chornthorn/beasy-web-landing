import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderV2 } from "../../../components/layout/header";
import Footer from "../../../components/Footer";
import AuthTabs from "./components/AuthTabs";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ReviewSummary from "./components/ReviewSummary";

const OrderReview: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;
  const [activeTab, setActiveTab] = useState<"new" | "existing">("existing");

  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  const handleRegister = (email: string, password: string, name: string) => {
    // Handle registration logic here
    console.log("Registration attempt:", { email, password, name });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#111827]"
    >
      <HeaderV2 />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex space-x-2 text-gray-400">
              <span>Virtual Private Servers</span>
              <span>›</span>
              <span>Cloud VPS 1</span>
              <span>›</span>
              <span className="text-gray-300">Review</span>
            </nav>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Register or Login
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
                <AnimatePresence mode="wait">
                  {activeTab === "existing" ? (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <LoginForm onSubmit={handleLogin} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RegisterForm onSubmit={handleRegister} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ReviewSummary orderDetails={orderDetails} />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default OrderReview;
