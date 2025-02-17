import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TopBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      icon: "🎉",
      text: "Get 3 months free with annual plans",
      badge: "48H LEFT",
    },
    {
      icon: "⚡️",
      text: "Save 30% on Cloud VPS plans",
      badge: "TODAY ONLY",
    },
    {
      icon: "🚀",
      text: "Free migration assistance for new customers",
      badge: "LIMITED TIME",
    },
    {
      icon: "💎",
      text: "Premium support included with all plans",
      badge: "SPECIAL OFFER",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] text-white py-2.5 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/0 via-[#60a5fa]/10 to-[#60a5fa]/0"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-6">
          <div className="flex-1 text-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPromo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center space-x-3"
              >
                <span role="img" aria-label="promotion" className="text-xl">
                  {promotions[currentPromo].icon}
                </span>
                <span className="text-[15px] font-medium tracking-wide">
                  {promotions[currentPromo].text}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/20">
                  {promotions[currentPromo].badge}
                </span>
                <motion.a
                  href="#learn-more"
                  className="text-[#93c5fd] hover:text-[#60a5fa] transition-colors duration-300 text-[15px] font-medium ml-2 inline-flex items-center group"
                  whileHover={{ x: 3 }}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            {["Blog", "Docs", "Get Support", "Contact Sales"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white/90 hover:text-[#93c5fd] transition-colors duration-300 text-[13px] font-medium tracking-wide"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#93c5fd]/30"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default TopBanner;
