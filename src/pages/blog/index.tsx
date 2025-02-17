import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CompanyHeader } from "../../components/layout/header";
import Footer from "../../components/Footer";
import { blogPosts } from "./data";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />

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
                Our Latest Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                Stay updated with the latest trends, insights, and innovations
                in technology
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]">
                      <div className="relative h-64">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm text-[#ff6b4a]">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-700">
                          {post.content?.split("\n")[0].slice(0, 150)}...
                        </p>
                        <div className="flex items-center text-[#ff6b4a] font-medium group-hover:text-[#ff3e3e] transition-colors duration-300">
                          Read More
                          <svg
                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
