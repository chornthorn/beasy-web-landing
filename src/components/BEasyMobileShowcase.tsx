import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BEasyMobileShowcase: React.FC = () => {
  // Track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the complete user flow with more screenshots
  const screenshots = [
    {
      id: 1,
      title: "Welcome Screen",
      description: "Get started with BEasy and discover home services near you",
      image:
        "https://placehold.co/300x600/4CAF50/FFFFFF/png?text=Welcome+Screen",
      alt: "BEasy app welcome screen",
    },
    {
      id: 2,
      title: "Home Dashboard",
      description:
        "Browse available services and see top providers in your area",
      image:
        "https://placehold.co/300x600/2196F3/FFFFFF/png?text=Home+Dashboard",
      alt: "BEasy app home dashboard",
    },
    {
      id: 3,
      title: "Service Selection",
      description: "Choose from a variety of services for your home needs",
      image:
        "https://placehold.co/300x600/9C27B0/FFFFFF/png?text=Service+Selection",
      alt: "BEasy app service selection screen",
    },
    {
      id: 4,
      title: "Provider Listing",
      description:
        "View all available service providers with ratings and reviews",
      image:
        "https://placehold.co/300x600/FF9800/FFFFFF/png?text=Provider+Listing",
      alt: "BEasy app provider listing screen",
    },
    {
      id: 5,
      title: "Booking Details",
      description: "Schedule services with just a few taps",
      image:
        "https://placehold.co/300x600/E91E63/FFFFFF/png?text=Booking+Details",
      alt: "BEasy app booking details screen",
    },
    {
      id: 6,
      title: "Appointment Confirmation",
      description: "Review your booking details before confirming",
      image:
        "https://placehold.co/300x600/607D8B/FFFFFF/png?text=Appointment+Confirmation",
      alt: "BEasy app appointment confirmation screen",
    },
    {
      id: 7,
      title: "Provider Tracking",
      description: "Track your service provider in real-time",
      image:
        "https://placehold.co/300x600/F44336/FFFFFF/png?text=Provider+Tracking",
      alt: "BEasy app provider tracking screen",
    },
    {
      id: 8,
      title: "Service Completion",
      description: "Confirm service completion and leave a review",
      image:
        "https://placehold.co/300x600/009688/FFFFFF/png?text=Service+Completion",
      alt: "BEasy app service completion screen",
    },
  ];

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Mobile Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Experience the complete user flow of BEasy right from your mobile
            device
          </motion.p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          {/* Slider container with navigation buttons */}
          <div className="relative">
            {/* Phone frame with screenshot */}
            <div className="relative flex justify-center mb-12">
              <div className="relative w-[280px] h-[560px]">
                {/* Phone frame - stays constant */}
                <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-800 shadow-xl z-20 pointer-events-none"></div>

                {/* Sliding content */}
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-lg border-4 border-gray-800 w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <img
                        src={screenshots[currentIndex].image}
                        alt={screenshots[currentIndex].alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Description */}
            <motion.div
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {screenshots[currentIndex].description}
              </p>
            </motion.div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mb-10">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[#4CAF50]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* User flow progress */}
            <div className="flex justify-between items-center mb-10 max-w-2xl mx-auto">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentIndex + 1) / screenshots.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href="#download"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#43A047] hover:to-[#7CB342] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50] transition-all duration-300"
            >
              Download the App
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BEasyMobileShowcase;
