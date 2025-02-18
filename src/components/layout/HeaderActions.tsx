import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

interface HeaderActionsProps {
  isLangOpen: boolean;
  setIsLangOpen: (value: boolean) => void;
  languages: {
    [key: string]: {
      name: string;
      flag: string;
    };
  };
  handleLanguageChange: (lang: "en" | "kh") => void;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({
  isLangOpen,
  setIsLangOpen,
  languages,
  handleLanguageChange,
}) => {
  const { currentLang, t } = useLanguage();

  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Contact Button */}
      <Link to="/contact">
        <motion.button
          className={`bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white px-5 py-2.5 rounded-full text-[15px] tracking-wide hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-md shadow-[#ff3e3e]/20 ${
            currentLang === "kh" ? "font-bold" : "font-semibold"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("cta.getInTouch")}
        </motion.button>
      </Link>

      {/* Language Switcher */}
      <div className="relative">
        <motion.button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center space-x-1 px-3 py-2 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">{languages[currentLang].flag}</span>
          <span className="text-gray-900 text-sm font-medium">
            {languages[currentLang].name}
          </span>
          <svg
            className={`w-4 h-4 text-gray-600 transform transition-transform duration-200 ${
              isLangOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.button>

        {/* Language Dropdown */}
        {isLangOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 py-2"
          >
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as "en" | "kh")}
                className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-50 transition-colors duration-200 ${
                  currentLang === code ? "text-[#ff6b4a]" : "text-gray-700"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeaderActions;
