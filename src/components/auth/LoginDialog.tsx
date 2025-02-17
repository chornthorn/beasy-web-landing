import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "../auth/LoginForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog: React.FC<Props> = ({ isOpen, onClose }) => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log("Login attempt:", { email, password });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 grid place-items-center z-[100]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-[90%] max-w-[440px] bg-gradient-to-b from-gray-700/95 to-gray-800/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-600/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8">
              {/* Close button */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="relative pt-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <LoginForm onSubmit={handleLogin} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginDialog;
