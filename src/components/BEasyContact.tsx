import React from "react";
import { motion } from "framer-motion";

const BEasyContact: React.FC = () => {
  const contactInfo = [
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: (
        <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center text-[#4CAF50] transition-colors duration-300 group-hover:bg-[#4CAF50]/20">
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Email",
      value: "support@beasy.com",
      icon: (
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 transition-colors duration-300 group-hover:bg-blue-500/20">
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Location",
      value: "123 App Street, Suite 100, San Francisco, CA 94105",
      icon: (
        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 transition-colors duration-300 group-hover:bg-purple-500/20">
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <>
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Have questions about bEasy? We're here to help. Contact our
              support team or send us a message.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      {info.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-gray-800">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-[15px] font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full h-12 px-4 rounded-full border-2 border-gray-100 focus:border-[#4CAF50] focus:ring-0 text-gray-600 placeholder-gray-400/60 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[15px] font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full h-12 px-4 rounded-full border-2 border-gray-100 focus:border-[#4CAF50] focus:ring-0 text-gray-600 placeholder-gray-400/60 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-[15px] font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full h-12 px-4 rounded-full border-2 border-gray-100 focus:border-[#4CAF50] focus:ring-0 text-gray-600 placeholder-gray-400/60 transition-colors duration-300"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-[15px] font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full p-4 rounded-3xl border-2 border-gray-100 focus:border-[#4CAF50] focus:ring-0 text-gray-600 placeholder-gray-400/60 transition-colors duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white rounded-full font-medium text-[15px] hover:from-[#8BC34A] hover:to-[#4CAF50] transition-all duration-300 hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        >
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0508841397855!2d-122.41941548468204!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1645564608692!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="bEasy Location"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BEasyContact;
