import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const offices = [
  {
    city: "Phnom Penh",
    country: "Cambodia",
    address: "Street 123, Khan 7 Makara, Phnom Penh",
    phone: "+855 23 123 456",
    email: "pp@suntel.com",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "123 Business Street, #01-01, Singapore 123456",
    phone: "+65 6789 0123",
    email: "sg@suntel.com",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#ff6b4a]/5 via-white to-[#ff3e3e]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                We'd love to hear from you. Let's discuss how we can help
                transform your business.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form & Offices */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b4a] focus:ring-2 focus:ring-[#ff6b4a]/20 transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b4a] focus:ring-2 focus:ring-[#ff6b4a]/20 transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b4a] focus:ring-2 focus:ring-[#ff6b4a]/20 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b4a] focus:ring-2 focus:ring-[#ff6b4a]/20 transition-colors duration-300"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b4a] focus:ring-2 focus:ring-[#ff6b4a]/20 transition-colors duration-300"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white rounded-full py-3 font-medium hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Offices */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Offices
                </h2>
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                      <div className="relative h-48">
                        <img
                          src={office.image}
                          alt={office.city}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-2 text-gray-600">
                          <p>{office.address}</p>
                          <p>
                            <span className="font-medium">Phone:</span>{" "}
                            {office.phone}
                          </p>
                          <p>
                            <span className="font-medium">Email:</span>{" "}
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Social Media Links */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {["facebook", "twitter", "linkedin", "instagram"].map(
                      (platform) => (
                        <motion.a
                          key={platform}
                          href={`#${platform}`}
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-[#ff6b4a] transition-colors duration-300 border border-gray-200"
                        >
                          <span className="sr-only">{platform}</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {platform === "facebook" && (
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            )}
                            {platform === "twitter" && (
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            )}
                            {platform === "linkedin" && (
                              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            )}
                            {platform === "instagram" && (
                              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                            )}
                          </svg>
                        </motion.a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
