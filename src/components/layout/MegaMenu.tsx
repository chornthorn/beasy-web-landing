import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductCategory } from "../../data/productCategories";

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  productCategories: ProductCategory[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  productCategories,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed left-0 right-0 w-full z-50"
      style={{ top: "80px" }} // Header height
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white border-t border-gray-200 shadow-md"
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      />

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Close Button */}
          <button
            onClick={onMouseLeave}
            className="absolute top-4 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-[#ff6b4a] transition-colors duration-200"
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

          <div className="grid grid-cols-3 gap-12">
            {productCategories.map((category) => (
              <div key={category.title} className="relative">
                <h3 className="text-[#ff6b4a] font-bold text-lg mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-5">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="group block p-4 -mx-4 rounded-xl transition-all duration-200 hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-gray-900 font-medium group-hover:text-[#ff6b4a] transition-colors duration-300">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 mt-1">
                              {item.description}
                            </div>
                          </div>
                          <div className="opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                            <svg
                              className="w-5 h-5 text-[#ff6b4a]"
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
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
