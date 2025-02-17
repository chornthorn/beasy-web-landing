import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  features: string[];
  basePrice: number;
  orderDetails?: any; // Add this to pass through all order details
}

const OrderSummary: React.FC<Props> = ({
  quantity,
  onQuantityChange,
  features,
  basePrice,
  orderDetails,
}) => {
  const navigate = useNavigate();

  const handleReview = () => {
    navigate("/order-vps/review", {
      state: { orderDetails },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gray-800/50 rounded-xl p-6 sticky top-4"
    >
      <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Review your configuration and proceed to checkout
        </h3>
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
            30-Day Money-Back
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
            Instant Setup
          </span>
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2">Quantity</label>
        <select
          value={quantity}
          onChange={(e) => onQuantityChange(parseInt(e.target.value))}
          className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} server{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Included Features */}
      <div className="mb-6">
        <h4 className="text-gray-300 mb-2">Included Features</h4>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-100">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="border-t border-gray-700 pt-4 mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-gray-300">Starting from</span>
          <div className="text-right">
            <span className="text-2xl font-bold text-white">${basePrice}</span>
            <span className="text-gray-400 ml-1">/mo</span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleReview}
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Continue to Review
      </motion.button>

      <div className="flex justify-center gap-4 mt-4">
        <div className="flex items-center text-gray-400 text-sm">
          <span className="mr-2">🔒</span>
          Privacy Protected
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <span className="mr-2">✓</span>
          Secure Checkout
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
