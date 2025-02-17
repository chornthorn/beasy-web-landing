import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🌐",
    title: "Domain Management",
    description:
      "Easily handle multiple domains and subdomains, adjusting DNS settings directly from the cPanel dashboard to streamline site architecture.",
  },
  {
    icon: "📧",
    title: "Easy Email Administration",
    description:
      "Simplify your email setup and management. Create, manage, and secure email accounts with ease, enhancing your communications.",
  },
  {
    icon: "📊",
    title: "Performance Monitoring",
    description:
      "Track and analyze your server's performance directly from cPanel, allowing for timely optimizations to maintain high service levels.",
  },
  {
    icon: "🗄️",
    title: "Reliable Data Management",
    description:
      "cPanel's comprehensive database management resources enable efficient handling of data. Create, modify, and administrate your database with ease.",
  },
  {
    icon: "➕",
    title: "Flexible Application Installation",
    description:
      "Use cPanel's Softaculous or similar application installers to quickly deploy a wide range of software solutions, from blogs to e-commerce systems.",
  },
  {
    icon: "⚙️",
    title: "Customization Tools",
    description:
      "Tailor your hosting environment to your needs, including PHP version selection, cron job scheduling, and custom error pages to enhance user experience.",
  },
  {
    icon: "🔄",
    title: "Automated Site Operations",
    description:
      "Automate your website's operational tasks, from backups to updates. cPanel's tools allow for seamless maintenance, keeping your site running smoothly.",
  },
  {
    icon: "🖥️",
    title: "Intuitive Web Management",
    description:
      "Effortlessly manage your backend with cPanel's user-friendly interface. Set up databases, emails, and domains, and easily integrate with WordPress.",
  },
  {
    icon: "🔒",
    title: "Enhanced Security Features",
    description:
      "Protect your online presence with cPanel's built-in security tools. Easily manage SSL certificates, firewalls, and more to keep your site safe from threats.",
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Why Choose a cPanel VPS for your Projects?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            Learn more about how adding a cPanel license to your VPS can improve
            your website management, ensuring streamlined operations, heightened
            security, and seamless scalability. Here's how it stands out as a
            top choice for web hosting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Feature Card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 border border-gray-700/50">
                {/* Icon Container */}
                <div className="mb-4 inline-block">
                  <div className="relative">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl transform scale-150" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
