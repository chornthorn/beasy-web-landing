import React from "react";
import { motion } from "framer-motion";

const DevOps: React.FC = () => {
  const features = [
    {
      title: "Deploy Your Perfect Image. Instantly. Anywhere.",
      description:
        "With Custom Images you can instantly deploy your .iso or .qcow2 images and spin up cloud VPS and VDS compute instances via web interface or API.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-[#60A5FA]"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      ),
      link: "Learn more about Custom Images",
      gradient: "from-[#4f46e5]/30 via-[#6366f1]/20 to-[#818cf8]/30",
      hoverGradient: "from-[#4f46e5]/40 via-[#6366f1]/30 to-[#818cf8]/40",
    },
    {
      title: "API to Automate Cloud Provisioning & Management",
      description:
        "Get full programmatic access to your cloud resources with the Contabo API. Integrate with your your own scripts and DevOps tools to create seamless & efficient workflows.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-[#60A5FA]"
          fill="currentColor"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
      link: "Learn more about the Contabo API",
      gradient: "from-[#7c3aed]/30 via-[#8b5cf6]/20 to-[#a78bfa]/30",
      hoverGradient: "from-[#7c3aed]/40 via-[#8b5cf6]/30 to-[#a78bfa]/40",
    },
    {
      title: "Manage Your Servers Directly From the Command Line",
      description:
        "Use any of the Contabo API features from your terminal. The Contabo CLI has an easy to use natural syntax and is available on Windows, Linux and MacOS.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-[#60A5FA]"
          fill="currentColor"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z" />
        </svg>
      ),
      link: "Learn more about the Contabo CLI",
      gradient: "from-[#0ea5e9]/30 via-[#38bdf8]/20 to-[#7dd3fc]/30",
      hoverGradient: "from-[#0ea5e9]/40 via-[#38bdf8]/30 to-[#7dd3fc]/40",
    },
    {
      title: "Secure with SSH Keys Customize with cloud-init Scripts",
      description:
        "Customize and secure your deployments with cloud-init scripts and SSH keys via the API or web interface.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-[#60A5FA]"
          fill="currentColor"
        >
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </svg>
      ),
      link: "Learn more about cloud-init",
      gradient: "from-[#2563eb]/30 via-[#3b82f6]/20 to-[#60a5fa]/30",
      hoverGradient: "from-[#2563eb]/40 via-[#3b82f6]/30 to-[#60a5fa]/40",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#3730a3]">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-[#6a83c9]/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, "-100vh"],
              x: [null, `${(Math.random() - 0.5) * 200}px`],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)",
            "linear-gradient(225deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DevOps Features: Automation & Flexibility
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              With Contabo DevOps Features you can manage cloud infrastructure
              straight from code, integrate deployment pipelines and much more
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur-xl rounded-3xl p-8 hover:bg-gradient-to-br hover:${feature.hoverGradient} transition-all duration-500 shadow-lg hover:shadow-xl border border-white/10`}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-300 mb-6 group-hover:bg-white/20"
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-white/90 font-medium transition-all duration-200 hover:text-white group-hover:translate-x-1"
                >
                  {feature.link}
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevOps;
