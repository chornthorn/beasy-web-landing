import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";
import Input from "../../components/auth/Input";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", { email, password, name });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e1b4b] to-[#151438]">
      <HeaderV2 />
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.05] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-[440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent mb-3">
              Create an account
            </h1>
            <p className="text-gray-400 text-lg">
              Join our cloud platform and start building
            </p>
          </div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-gray-700/95 to-gray-800/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-600/20 p-8"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Input
                label="Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-blue-500/80 text-white rounded-lg font-semibold text-lg hover:bg-blue-500 transition-all duration-300 border border-blue-500/30"
              >
                Create Account
              </motion.button>
            </motion.form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <span className="text-gray-400">Already have an account? </span>
              <Link
                to="/"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Sign in
              </Link>
            </div>

            {/* Terms */}
            <div className="mt-6 text-center text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
