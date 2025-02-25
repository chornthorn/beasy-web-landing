import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollY } = useScroll();
  const { currentLang, setLanguage, t } = useLanguage();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]
  );

  // Handle scroll direction
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      if (scrollDifference > 10) {
        setIsVisible(!scrollingDown || currentScrollY < 100);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Mobile", href: "#mobile" },
    { name: "Download", href: "#download" },
    { name: "Contact", href: "#contact" },
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
  };

  const getNavItemClass = () => {
    const baseClasses =
      "text-gray-900 hover:text-[#4CAF50] transition-colors duration-300 text-[15px] tracking-wide";
    return currentLang === "kh"
      ? `${baseClasses} font-bold`
      : `${baseClasses} font-medium`;
  };

  return (
    <>
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
        className="fixed w-full top-0 z-[1000] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white"
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="#" className="block">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      b
                    </div>
                    <span className="ml-2 text-2xl font-bold text-gray-900">
                      bEasy
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={getNavItemClass()}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Language Switcher & Contact Button */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => {
                    setLanguage(currentLang === "en" ? "kh" : "en");
                  }}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#4CAF50] transition-colors duration-300"
                >
                  <span className="text-lg">
                    {languages[currentLang as keyof typeof languages].flag}
                  </span>
                  <span className="text-sm font-medium">
                    {languages[currentLang as keyof typeof languages].name}
                  </span>
                </button>
              </div>

              {/* Contact Button */}
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white rounded-full font-medium text-sm hover:from-[#8BC34A] hover:to-[#4CAF50] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Contact Us
              </a>
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={getNavItemClass()}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Language Switcher */}
                <div className="pt-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setLanguage(currentLang === "en" ? "kh" : "en");
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-1 text-gray-700 hover:text-[#4CAF50] transition-colors duration-300"
                  >
                    <span className="text-lg">
                      {languages[currentLang as keyof typeof languages].flag}
                    </span>
                    <span className="text-sm font-medium">
                      {languages[currentLang as keyof typeof languages].name}
                    </span>
                  </button>
                </div>

                {/* Contact Button */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white rounded-full font-medium text-sm hover:from-[#8BC34A] hover:to-[#4CAF50] transition-all duration-300 shadow-sm hover:shadow-md inline-block text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
