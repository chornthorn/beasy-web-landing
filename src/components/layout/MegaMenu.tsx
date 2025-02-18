import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCategory } from "../../data/productCategories";

interface MegaMenuProps {
  isOpen: boolean;
  productCategories: ProductCategory[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, productCategories }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible bridge to prevent gap */}
          <div className="absolute h-4 inset-x-0 -bottom-4" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[95]"
            style={{ top: "80px" }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-3 gap-16 py-10">
                {productCategories.map((category) => (
                  <div key={category.title} className="relative group">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 transition-colors duration-300 group-hover:text-[#ff6b4a]">
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
