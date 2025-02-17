import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";

interface Props {
  orderDetails: {
    term: string;
    region: string;
    storageType: string;
    storageSize: number;
    objectStorage: string;
  };
}

const ReviewSummary: React.FC<Props> = ({ orderDetails }) => {
  const details = [
    { label: "Contract Period", value: "1 Month" },
    { label: "Region", value: "Asia (Singapore)" },
    { label: "Storage", value: "100 GB NVMe" },
    { label: "Ubuntu", value: "24.04" },
    { label: "Object Storage", value: "250 GB Object Storage in Asia" },
    { label: "Bandwidth", value: "32 TB Out + Unlimited In" },
  ];

  return (
    <div className="bg-gray-800/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Order Summary</h2>
        <button className="text-blue-400 hover:text-blue-300">Change</button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Cloud VPS 1 × 1
        </h3>
        <div className="space-y-2">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex justify-between text-sm py-1"
            >
              <span className="text-gray-400">{detail.label}</span>
              <span className="text-white">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="setup">No Setup Fee</Badge>
        <Badge variant="credit">
          Get 4.99<span className="text-xs">€</span> Credit Back
        </Badge>
        <Badge variant="time">Today Only</Badge>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-400">
          <span>Monthly</span>
          <span>$11.14</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>One-Time Setup Fee</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-gray-400 line-through">
          <span>Due Today</span>
          <span>$7.75</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-6">
        <div className="flex justify-between items-baseline">
          <span className="text-gray-300">Due Today</span>
          <div className="text-right">
            <span className="text-2xl font-bold text-white">$11.14</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4">
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
  );
};

export default ReviewSummary;
