import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#ff6b4a]/5 via-white to-[#ff3e3e]/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">Welcome to</span>
                <span className="block text-[#ff6b4a]">Suntel Technology</span>
              </motion.h1>
            </div>
          </motion.div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* CEO Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Message Content */}
                <div className="px-6 py-12 sm:px-12 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      A Message from Our CEO
                    </h2>
                    <div className="prose prose-lg text-gray-600">
                      <p>Dear valued partners and friends,</p>
                      <p className="mt-4">
                        At Suntel Technology, we believe in the transformative
                        power of technology to create meaningful change in
                        people's lives. Our journey began with a simple yet
                        powerful vision: to make innovative technology
                        accessible to businesses of all sizes.
                      </p>
                      <p className="mt-4">
                        Today, we stand proud as a leading technology solutions
                        provider, but our core mission remains unchanged. We
                        continue to push boundaries, embrace innovation, and
                        maintain our commitment to excellence in everything we
                        do.
                      </p>
                      <p className="mt-4">
                        As we look to the future, we remain dedicated to our
                        partners' success, investing in cutting-edge solutions
                        while nurturing the relationships that have brought us
                        this far.
                      </p>
                      <p className="mt-8">
                        Thank you for being part of our journey.
                      </p>
                    </div>

                    {/* Signature Section */}
                    <div className="mt-8">
                      <div className="text-[#ff6b4a] font-bold text-xl">
                        John Smith
                      </div>
                      <div className="text-gray-600">
                        Chief Executive Officer
                      </div>
                      <div className="text-gray-600">Suntel Technology</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Values Section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Vision */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="text-[#ff6b4a] text-2xl mb-4">Our Vision</div>
                <p className="text-gray-600">
                  To be the leading technology partner that empowers businesses
                  to thrive in the digital age.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="text-[#ff6b4a] text-2xl mb-4">Our Mission</div>
                <p className="text-gray-600">
                  Delivering innovative solutions that drive growth and create
                  lasting value for our clients.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="text-[#ff6b4a] text-2xl mb-4">Our Values</div>
                <p className="text-gray-600">
                  Innovation, integrity, excellence, and commitment to our
                  clients' success.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomePage;
