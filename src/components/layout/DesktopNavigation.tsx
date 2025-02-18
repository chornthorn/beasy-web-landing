import React, { useState, useRef, useEffect } from "react";
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
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      const headerHeight = 80; // Header height
      const mouseY = e.clientY;

      // Close mega menu if mouse moves above header or below mega menu area
      if (mouseY < 0 || mouseY > headerHeight + 400) {
        // 400px is approximate mega menu height
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener("mousemove", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseLeave);
    };
  }, [isMegaMenuOpen, setIsMegaMenuOpen]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsMegaMenuOpen(true);
  };

  return (
    <div className="hidden md:flex items-center space-x-10" ref={menuRef}>
      {/* Products Menu */}
      <div className="relative group">
        <button
          onMouseEnter={handleMouseEnter}
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
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setIsMegaMenuOpen(false);
          }}
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
