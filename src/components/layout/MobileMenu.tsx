import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { ProductCategory } from "../../data/productCategories";

interface MobileMenuProps {
  isOpen: boolean;
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (value: boolean) => void;
  productCategories: ProductCategory[];
  navItems: Array<{
    name: string;
    href: string;
  }>;
  languages: {
    [key: string]: {
      name: string;
      flag: string;
    };
  };
  handleLanguageChange: (lang: "en" | "kh") => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isMegaMenuOpen,
  setIsMegaMenuOpen,
  productCategories,
  navItems,
  languages,
  handleLanguageChange,
}) => {
  const { currentLang, t } = useLanguage();

  const getNavItemClass = () => {
    const baseClasses =
      "text-gray-900 hover:text-[#ff6b4a] transition-colors duration-300 text-[15px] tracking-wide";
    return currentLang === "kh"
      ? `${baseClasses} font-bold`
      : `${baseClasses} font-medium`;
  };

  return (
    <motion.div
      className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {/* Mobile Products Menu */}
        <div className="py-2">
          <button
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="w-full flex justify-between items-center px-3 py-2.5 text-gray-900"
          >
            <span className={getNavItemClass()}>Products</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isMegaMenuOpen ? "rotate-180" : ""
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
          </button>
          {isMegaMenuOpen && (
            <div className="mt-2 space-y-4 px-4">
              {productCategories.map((category) => (
                <div key={category.title} className="mb-4">
                  <h3 className="text-[#ff6b4a] font-bold text-lg mb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="block py-2">
                          <div className="text-gray-900 font-medium">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.description}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {navItems.map((item) => (
          <motion.div key={item.name} whileHover={{ x: 4 }}>
            <Link
              to={item.href}
              className={`block px-3 py-2.5 ${getNavItemClass()}`}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        <div className="pt-4 space-y-2">
          <Link to="/contact">
            <motion.button
              className={`block w-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white px-3 py-2.5 rounded-full text-[15px] tracking-wide hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 ${
                currentLang === "kh" ? "font-bold" : "font-semibold"
              }`}
              whileHover={{ x: 4 }}
            >
              {t("cta.getInTouch")}
            </motion.button>
          </Link>

          {/* Mobile Language Switcher */}
          <div className="flex justify-center space-x-2">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as "en" | "kh")}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full border-2 transition-colors duration-300 ${
                  currentLang === code
                    ? "border-[#ff6b4a] text-[#ff6b4a]"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
