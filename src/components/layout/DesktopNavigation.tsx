import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductCategory } from "../../data/productCategories";
import MegaMenu from "./MegaMenu";

interface DesktopNavigationProps {
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (value: boolean) => void;
  productCategories: ProductCategory[];
  navItems: Array<{
    name: string;
    href: string;
  }>;
  getNavItemClass: () => string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  isMegaMenuOpen,
  setIsMegaMenuOpen,
  productCategories,
  navItems,
  getNavItemClass,
}) => {
  return (
    <div className="hidden md:flex items-center space-x-10">
      {/* Products Menu */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
          className={`flex items-center space-x-1 ${getNavItemClass()}`}
        >
          <span>Products</span>
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

        <MegaMenu
          isOpen={isMegaMenuOpen}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
          productCategories={productCategories}
        />
      </div>

      {navItems.map((item) => (
        <motion.div key={item.name} className="relative" whileHover={{ y: -1 }}>
          <Link to={item.href} className={getNavItemClass()}>
            {item.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
