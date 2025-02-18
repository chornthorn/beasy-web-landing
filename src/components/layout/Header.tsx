import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import MobileMenu from "./MobileMenu";
import HeaderActions from "./HeaderActions";
import DesktopNavigation from "./DesktopNavigation";
import productCategories from "../../data/productCategories";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
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
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: "Career", href: "/career" },
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
            <DesktopNavigation
              isMegaMenuOpen={isMegaMenuOpen}
              setIsMegaMenuOpen={setIsMegaMenuOpen}
              productCategories={productCategories}
              navItems={navItems}
              getNavItemClass={getNavItemClass}
            />

            {/* Header Actions (Contact Button & Language Switcher) */}
            <HeaderActions
              isLangOpen={isLangOpen}
              setIsLangOpen={setIsLangOpen}
              languages={languages}
              handleLanguageChange={handleLanguageChange}
            />

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
          <MobileMenu
            isOpen={isOpen}
            isMegaMenuOpen={isMegaMenuOpen}
            setIsMegaMenuOpen={setIsMegaMenuOpen}
            productCategories={productCategories}
            navItems={navItems}
            languages={languages}
            handleLanguageChange={handleLanguageChange}
          />
        </nav>
      </motion.header>

      {/* Overlay for mega menu */}
      {isMegaMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[90]"
          onClick={() => setIsMegaMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
