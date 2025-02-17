import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

interface PricingProps {
  title: string;
  subtitle: string;
  plans: any[];
  note?: string;
}

const Pricing: React.FC<PricingProps> = ({ title, subtitle, plans, note }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111827] to-[#1f2937] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10" />
        {/* Animated Background Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-500/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -1000],
              x: [null, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: -Math.random() * 20,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Traffic Note */}
        {note && (
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">{note}</p>
          </div>
        )}

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">🎁</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            All Plans Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-gray-300">
              <div className="text-[#93c5fd] text-lg mb-2">Free Setup</div>
              <p>No hidden setup or activation fees</p>
            </div>
            <div className="text-gray-300">
              <div className="text-[#93c5fd] text-lg mb-2">Monthly Billing</div>
              <p>Simple monthly billing with no long-term contracts</p>
            </div>
            <div className="text-gray-300">
              <div className="text-[#93c5fd] text-lg mb-2">24/7 Support</div>
              <p>Expert technical support available around the clock</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
