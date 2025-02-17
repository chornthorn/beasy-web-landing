import React from "react";
import { motion } from "framer-motion";
import { VPSPlan } from "../data/plans";

interface PricingTableProps {
  title: string;
  description: string;
  plans: VPSPlan[];
  showPort?: boolean;
  showDiscount?: boolean;
  showCPUDetails?: boolean;
  showRAMNotes?: boolean;
  showOutletNote?: boolean;
}

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  description,
  plans,
  showPort = false,
  showDiscount = false,
  showCPUDetails = false,
  showRAMNotes = false,
  showOutletNote = false,
}) => {
  return (
    <div className="mb-16">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-100">
          {description}{" "}
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            More Details
          </a>
        </p>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="lg:hidden space-y-6">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.model}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            {/* Model and Badges */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.model}
              </h3>
              {plan.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {plan.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`text-xs px-2 py-1 rounded ${
                        badge === "Credit Back"
                          ? "bg-red-900/20 text-red-300"
                          : "bg-blue-900/20 text-blue-300"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">CPU</div>
                <div className="text-gray-100">
                  {plan.cpu}
                  {showCPUDetails && plan.cpuDetail && (
                    <div className="text-sm text-gray-500">
                      {plan.cpuDetail}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">RAM</div>
                <div className="text-gray-100">
                  {plan.ram}
                  {showRAMNotes && plan.ramNote && (
                    <div className="text-sm text-gray-500">{plan.ramNote}</div>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-sm text-gray-400 mb-1">Storage</div>
                <div className="text-gray-100">
                  {plan.storage}
                  {plan.storageNote && (
                    <div className="text-sm text-gray-500">
                      {plan.storageNote}
                    </div>
                  )}
                </div>
              </div>
              {showPort && (
                <div className="col-span-2">
                  <div className="text-sm text-gray-400 mb-1">Port</div>
                  <div className="text-gray-100">{plan.port}</div>
                </div>
              )}
              <div className="col-span-2">
                <div className="text-sm text-gray-400 mb-1">Data Transfer</div>
                <div className="text-gray-100">
                  {plan.dataTransfer}
                  {plan.transferNote && (
                    <div className="text-sm text-gray-500">
                      {plan.transferNote}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between">
              <div>
                {showDiscount && plan.originalPrice && (
                  <div className="text-sm text-gray-400 line-through mb-1">
                    ${plan.originalPrice.toFixed(2)} / month
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">
                    ${plan.price.toFixed(2)}
                  </span>
                  <span className="text-gray-400">/ month</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                Select
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop/Tablet View - Table Layout */}
      <div className="hidden lg:block bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 text-gray-300 font-medium">
                  Model
                </th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">
                  CPU
                </th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">
                  RAM
                </th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">
                  Storage
                </th>
                {showPort && (
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">
                    Port
                  </th>
                )}
                <th className="text-left py-4 px-4 text-gray-300 font-medium">
                  Data Transfer
                </th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">
                  Price
                </th>
                <th className="py-4 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, idx) => (
                <motion.tr
                  key={plan.model}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-b border-gray-700/50 last:border-0"
                >
                  {/* Model with Badges */}
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-white font-medium">
                        {plan.model}
                      </span>
                      {plan.badges.length > 0 && (
                        <div className="flex gap-2">
                          {plan.badges.map((badge) => (
                            <span
                              key={badge}
                              className={`text-xs px-2 py-1 rounded ${
                                badge === "Credit Back"
                                  ? "bg-red-900/20 text-red-300"
                                  : "bg-blue-900/20 text-blue-300"
                              }`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* CPU */}
                  <td className="py-4 px-4">
                    <div className="text-gray-300">
                      {plan.cpu}
                      {showCPUDetails && plan.cpuDetail && (
                        <div className="text-sm text-gray-500">
                          {plan.cpuDetail}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* RAM */}
                  <td className="py-4 px-4">
                    <div className="text-gray-300">
                      {plan.ram}
                      {showRAMNotes && plan.ramNote && (
                        <div className="text-sm text-gray-500">
                          {plan.ramNote}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Storage */}
                  <td className="py-4 px-4">
                    <div className="text-gray-300">
                      {plan.storage}
                      {plan.storageNote && (
                        <div className="text-sm text-gray-500">
                          {plan.storageNote}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Port (if applicable) */}
                  {showPort && (
                    <td className="py-4 px-4 text-gray-300">{plan.port}</td>
                  )}

                  {/* Data Transfer */}
                  <td className="py-4 px-4">
                    <div className="text-gray-300">
                      {plan.dataTransfer}
                      {plan.transferNote && (
                        <div className="text-sm text-gray-500">
                          {plan.transferNote}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4">
                    <div>
                      {showDiscount && plan.originalPrice && (
                        <div className="text-sm text-gray-400 line-through mb-1">
                          ${plan.originalPrice.toFixed(2)} / month
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-white">
                          ${plan.price.toFixed(2)}
                        </span>
                        <span className="text-gray-400">/ month</span>
                      </div>
                    </div>
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Select
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Outlet Note */}
      {showOutletNote && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Looking for more affordable Dedicated Servers? Shop for the{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              discounted Outlet Servers
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
