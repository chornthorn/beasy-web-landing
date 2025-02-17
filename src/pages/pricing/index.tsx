import React from "react";
import { motion } from "framer-motion";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";
import PricingTable from "./components/PricingTable";
import {
  virtualPrivateServers,
  storageVPSPlans,
  virtualDedicatedServers,
  dedicatedServers,
} from "./data/plans";

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <HeaderV2 />

      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 md:mb-8"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl md:text-3xl">💰</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Pricing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
            >
              A simple price structure for great products
            </motion.p>
          </div>

          {/* Pricing Tables */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {/* Virtual Private Servers Table */}
            <PricingTable
              title="Virtual Private Servers"
              description="Independent computing instances optimized for performance equipped with fast NVMe drives."
              plans={virtualPrivateServers}
              showPort={true}
            />

            {/* Virtual Dedicated Servers Table */}
            <PricingTable
              title="Virtual Dedicated Servers"
              description="High performance virtual machines with dedicated resources provisioned in minutes."
              plans={virtualDedicatedServers}
              showPort={true}
              showDiscount={true}
              showCPUDetails={true}
            />

            {/* Storage VPS Table */}
            <PricingTable
              title="Storage VPS"
              description="Storage-optimized VPS to for all of your data storage needs."
              plans={storageVPSPlans}
              showPort={true}
            />

            {/* Dedicated Servers Table */}
            <PricingTable
              title="Dedicated Servers"
              description="Single-tenant bare metal servers with full control over individual hardware configuration."
              plans={dedicatedServers}
              showPort={true}
              showCPUDetails={true}
              showRAMNotes={true}
              showOutletNote={true}
            />
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 p-6 md:p-8 bg-gray-800/30 rounded-xl text-center"
          >
            <div className="text-2xl md:text-3xl mb-4">🌟</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-gray-100 p-4">
                <div className="text-blue-400 text-lg mb-2">Free Setup</div>
                <p className="text-sm md:text-base">
                  No hidden setup or activation fees
                </p>
              </div>
              <div className="text-gray-100 p-4">
                <div className="text-blue-400 text-lg mb-2">
                  Monthly Billing
                </div>
                <p className="text-sm md:text-base">
                  Simple monthly billing with no long-term contracts
                </p>
              </div>
              <div className="text-gray-100 p-4">
                <div className="text-blue-400 text-lg mb-2">24/7 Support</div>
                <p className="text-sm md:text-base">
                  Expert technical support available around the clock
                </p>
              </div>
            </div>
          </motion.div>

          {/* Traffic Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 text-center text-xs md:text-sm text-gray-400 px-4"
          >
            * In Australia and Japan, we offer 10 TB of outgoing, and unlimited
            inbound data transfer at the same great performance.
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
