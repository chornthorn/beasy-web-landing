import React from "react";
import { motion } from "framer-motion";

const BEasyDownload: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto max-w-xs">
              {/* Main Phone */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800"
                  alt="bEasy App Screenshot"
                  className="w-full h-auto"
                />
              </div>

              {/* Secondary Phone (Positioned to the right and behind) */}
              <div className="absolute -right-20 top-20 w-3/4 rounded-3xl overflow-hidden shadow-xl border-8 border-white transform rotate-6">
                <img
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&w=800"
                  alt="bEasy App Screenshot 2"
                  className="w-full h-auto"
                />
              </div>

              {/* Tertiary Phone (Positioned to the left and behind) */}
              <div className="absolute -left-16 bottom-20 w-2/3 rounded-3xl overflow-hidden shadow-xl border-8 border-white transform -rotate-12">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
                  alt="bEasy App Screenshot 3"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right Column - Download Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-6">
              Download the bEasy App Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get access to on-demand home services right from your smartphone.
              Our app is available on both iOS and Android platforms.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Download?</h3>
              <ul className="space-y-3">
                {[
                  "Book services anytime, anywhere",
                  "Track service providers in real-time",
                  "Secure payment options",
                  "Rate and review service quality",
                  "Exclusive in-app discounts and offers",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 flex-shrink-0 text-white"
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* App Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-black text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-black text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.491.873.148.09.316.138.488.138.169 0 .335-.046.48-.134l.003-.002 11.166-7.933c.276-.198.44-.51.44-.843s-.164-.645-.44-.843L4.781.172l-.003-.002A.987.987 0 004.298.036a.99.99 0 00-.488.138.982.982 0 00-.491.873v.065c0 .261.109.503.29.684z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BEasyDownload;
