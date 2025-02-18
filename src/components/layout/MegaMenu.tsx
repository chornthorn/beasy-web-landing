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
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 w-screen"
      style={{
        top: "calc(100% + 1px)",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-white/70 backdrop-blur-md border-t border-gray-200 shadow-lg w-screen"
      />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-[#ff6b4a] font-bold text-lg mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="group block">
                        <div className="text-gray-900 font-medium group-hover:text-[#ff6b4a] transition-colors duration-300">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          {item.description}
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
    </div>
  );
};

export default MegaMenu;
