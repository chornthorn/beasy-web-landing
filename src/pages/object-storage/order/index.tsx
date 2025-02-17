import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HeaderV2 } from "../../../components/layout/header";
import Footer from "../../../components/Footer";

interface OrderDetails {
  region: string;
  size: number;
  quantity: number;
  price: number;
}

const OrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    region: searchParams.get("region") || "european-union",
    size: parseInt(searchParams.get("size") || "250"),
    quantity: parseInt(searchParams.get("qty") || "1"),
    price: 2.99,
  });

  const formatRegion = (region: string) => {
    switch (region) {
      case "european-union":
        return "Europe";
      case "united-states":
        return "United States";
      case "asia":
        return "Singapore";
      default:
        return region;
    }
  };

  const handleSizeChange = (value: string) => {
    let newSize = parseInt(value);

    // Ensure size is within bounds
    if (isNaN(newSize)) newSize = 250;
    if (newSize < 250) newSize = 250;
    if (newSize > 25000) newSize = 25000;

    // Ensure size is a multiple of 250
    newSize = Math.round(newSize / 250) * 250;

    setOrderDetails({ ...orderDetails, size: newSize });
  };

  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex space-x-2 text-gray-400">
              <a
                href="/object-storage"
                className="hover:text-blue-400 transition-colors"
              >
                Object Storage
              </a>
              <span>›</span>
              <span className="text-gray-300">Order</span>
            </nav>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Order Object Storage
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Object Storage
                </h2>

                {/* Region Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    1. Select Region
                  </h3>
                  <div className="space-y-4">
                    {["european-union", "united-states", "asia"].map(
                      (region) => (
                        <label
                          key={region}
                          className="flex items-center p-4 rounded-lg border border-gray-700 cursor-pointer hover:border-blue-500 transition-colors"
                        >
                          <input
                            type="radio"
                            name="region"
                            value={region}
                            checked={orderDetails.region === region}
                            onChange={(e) =>
                              setOrderDetails({
                                ...orderDetails,
                                region: e.target.value,
                              })
                            }
                            className="form-radio text-blue-500 focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-100">
                            Object Storage: {formatRegion(region)}
                            {region === "asia" && (
                              <span className="ml-2 text-sm text-gray-400">
                                (+$0.40)
                              </span>
                            )}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    2. Initial Size
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          value={orderDetails.size}
                          onChange={(e) => handleSizeChange(e.target.value)}
                          min="250"
                          max="25000"
                          step="250"
                          className="w-24 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                        />
                        <span className="text-gray-300">GB</span>
                      </div>
                      <span className="text-gray-100">
                        ${orderDetails.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Size Slider */}
                  <div className="px-4">
                    <input
                      type="range"
                      min="250"
                      max="25000"
                      step="250"
                      value={orderDetails.size}
                      onChange={(e) => handleSizeChange(e.target.value)}
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>250 GB</span>
                      <span>25 TB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-xl p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Order Summary
                  </h2>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Share
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-white">
                    Object Storage
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Storage Quantity:</span>
                      <select
                        value={orderDetails.quantity}
                        onChange={(e) =>
                          setOrderDetails({
                            ...orderDetails,
                            quantity: parseInt(e.target.value),
                          })
                        }
                        className="bg-gray-700 rounded px-2 py-1"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div>
                        Object Storage: {formatRegion(orderDetails.region)}
                      </div>
                      <div>{orderDetails.size} GB</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Monthly</span>
                    <span className="text-white font-semibold">
                      ${(orderDetails.price * orderDetails.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Due Today</span>
                    <span className="text-white font-semibold">
                      ${(orderDetails.price * orderDetails.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  Next
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
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderPage;
