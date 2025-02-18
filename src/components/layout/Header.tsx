import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollY } = useScroll();
  const { currentLang, setLanguage, t } = useLanguage();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]
  );

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only trigger hide/show if scroll difference is significant
      if (scrollDifference > 10) {
        setIsVisible(!scrollingDown || currentScrollY < 100);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: "Career", href: "/career" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const languages = {
    en: {
      name: "English",
      flag: "🇺🇸",
    },
    kh: {
      name: "ខ្មែរ",
      flag: "🇰🇭",
    },
  };

  const handleLanguageChange = (lang: "en" | "kh") => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const getNavItemClass = () => {
    const baseClasses =
      "text-gray-900 hover:text-[#ff6b4a] transition-colors duration-300 text-[15px] tracking-wide";
    return currentLang === "kh"
      ? `${baseClasses} font-bold`
      : `${baseClasses} font-medium`;
  };

  return (
    <motion.header
      style={{
        backgroundColor,
      }}
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed w-full top-0 z-50 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className="block">
                <img
                  src="https://suntel.io/images/uploads/home_logo/20241220073110.png"
                  alt="Suntel Technology"
                  className="h-8 w-auto"
                />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                whileHover={{ y: -1 }}
              >
                <Link to={item.href} className={getNavItemClass()}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Button and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
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
                        currentLang === code
                          ? "text-[#ff6b4a]"
                          : "text-gray-700"
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
      </nav>
    </motion.header>
  );
};

export default Header;
