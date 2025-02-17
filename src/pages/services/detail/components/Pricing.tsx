import React from "react";
import { motion } from "framer-motion";

const pricing = [
  {
    title: "Starter",
    price: "$999",
    period: "per month",
    features: [
      "Basic feature set",
      "Up to 5 users",
      "10GB storage",
      "Email support",
    ],
  },
  {
    title: "Professional",
    price: "$1,999",
    period: "per month",
    features: [
      "Advanced features",
      "Up to 20 users",
      "50GB storage",
      "Priority support",
      "API access",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "per month",
    features: [
      "Full feature set",
      "Unlimited users",
      "Unlimited storage",
      "24/7 support",
      "API access",
      "Custom integration",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`bg-white rounded-2xl p-8 h-full border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? "border-[#ff6b4a]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <div className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white text-sm font-medium px-4 py-1 rounded-full">
                      Popular
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-[#ff6b4a] mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                <button
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white hover:from-[#ff3e3e] hover:to-[#ff6b4a]"
                      : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
