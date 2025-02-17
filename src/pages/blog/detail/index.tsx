import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Components } from "react-markdown";
import { CompanyHeader } from "../../../components/layout/header";
import Footer from "../../../components/Footer";
import { getPostById } from "../data";

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPostById(id || "");

  if (!post) {
    return <div>Post not found</div>;
  }

  const relatedPosts = [
    {
      title: "AI in Enterprise Solutions",
      date: "Feb 12, 2025",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cybersecurity Best Practices",
      date: "Feb 10, 2025",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const promotedServices = [
    {
      title: "Cloud Solutions",
      description:
        "Transform your business with our enterprise-grade cloud infrastructure.",
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
      title: "AI Services",
      description:
        "Leverage the power of AI to automate and optimize your operations.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const components: Components = {
    code: ({ node, inline, className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#ff6b4a]/5 via-white to-[#ff3e3e]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-[#ff6b4a]">{post.category}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {post.title}
              </motion.h1>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-2xl mb-8"
                  />
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={components}
                  >
                    {post.content || ""}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Sidebar */}
              <div className="relative">
                <div className="sticky top-24 space-y-8">
                  {/* Promoted Services */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Our Services
                    </h3>
                    <div className="space-y-4">
                      {promotedServices.map((service) => (
                        <motion.div
                          key={service.title}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-4 border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg cursor-pointer"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-[#ff6b4a]/10 rounded-lg flex items-center justify-center text-[#ff6b4a]">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-gray-900 font-semibold mb-1">
                                {service.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-white/90 mb-4">
                      Transform your business with our cloud solutions.
                    </p>
                    <button className="w-full bg-white text-gray-900 rounded-full py-2 font-medium hover:bg-gray-100 transition-colors duration-300">
                      Contact Us
                    </button>
                  </div>

                  {/* Related Posts */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <motion.div
                          key={post.title}
                          whileHover={{ scale: 1.02 }}
                          className="group cursor-pointer"
                        >
                          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                            <div className="aspect-w-16 aspect-h-9">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="text-gray-900 font-semibold mb-1 group-hover:text-[#ff6b4a] transition-colors duration-300">
                                {post.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
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

export default BlogDetail;
