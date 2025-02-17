import React from "react";
import { motion } from "framer-motion";
import { CompanyHeader } from "../../../components/layout/header";
import Footer from "../../../components/Footer";

const ServiceDetail: React.FC = () => {
  const features = [
    {
      title: "Custom Development",
      description:
        "Tailored solutions built specifically for your business needs",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration with leading cloud platforms",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We analyze your requirements and create a detailed project plan",
    },
    {
      step: "02",
      title: "Development",
      description:
        "Our team builds your solution using cutting-edge technologies",
    },
    {
      step: "03",
      title: "Testing",
      description: "Rigorous testing ensures quality and reliability",
    },
    {
      step: "04",
      title: "Deployment",
      description: "Smooth deployment and ongoing support",
    },
  ];

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

  const faqs = [
    {
      question: "How long does implementation take?",
      answer:
        "Implementation time varies based on project complexity. Typically, our solutions are deployed within 4-12 weeks.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including 24/7 technical assistance, regular maintenance, and dedicated account management.",
    },
    {
      question: "Can your solution integrate with our existing systems?",
      answer:
        "Yes, our solutions are built to integrate seamlessly with your existing infrastructure and can be customized to meet your specific needs.",
    },
    {
      question: "What security measures are in place?",
      answer:
        "We implement industry-leading security protocols including end-to-end encryption, regular security audits, and compliance with international standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b4a]/5 via-white to-[#ff3e3e]/5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Enterprise Software Development
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Transform your business with custom software solutions designed
                for scalability, security, and success.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-[#ff6b4a]/10 rounded-xl flex items-center justify-center text-[#ff6b4a] mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology for delivering successful projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
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

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our services
              </p>
            </div>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] rounded-3xl overflow-hidden">
              <div className="px-8 py-16 md:p-16 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Let's discuss how our enterprise software solutions can help
                  you achieve your goals.
                </p>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-300">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
