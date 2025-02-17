import React from "react";
import { motion } from "framer-motion";

const distributions = [
  {
    version: "Windows Server 2022",
    features: [
      "All Windows Server 2016 Features",
      "All Windows Server 2019 Features",
      "Secured-Core-Technology",
      "DNS-over-HTTPS (DoH)",
      "Microsoft Edge browser",
      "Upgraded Hyper V Manager",
      "Enhanced Storage Replication",
    ],
  },
  {
    version: "Windows Server 2019",
    features: [
      "All Windows Server 2012R2 Features",
      "All Windows Server 2016 Features",
      "Advanced Threat Protection",
      "Windows Admin Center",
      "Kubernetes support",
      "Device Guard",
      "Kernel soft reboot",
    ],
  },
  {
    version: "Windows Server 2016",
    features: [
      "All Windows Server 2012R2 Features",
      "Windows Defender",
      "Windows Powershell 5.0",
      "Network Controller",
      "IP Address Management (IPAM)",
    ],
  },
];

const Distributions: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Available Windows Distributions
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            We offer the following preinstalled Windows Server Standard versions
            across all our servers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {distributions.map((dist, idx) => (
            <motion.div
              key={dist.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#0078D4] transition-colors duration-300 group relative"
            >
              {/* Windows Version */}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#0078D4] transition-colors">
                {dist.version}
              </h3>

              {/* Features List */}
              <ul className="space-y-3">
                {dist.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#0078D4] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-100 leading-relaxed group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Windows-themed Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0078D4]/0 via-[#00a2ff]/0 to-[#00b7ff]/0 group-hover:from-[#0078D4]/20 group-hover:via-[#00a2ff]/20 group-hover:to-[#00b7ff]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800/30 rounded-xl text-center"
        >
          <div className="text-3xl mb-4">⊞</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Enterprise-Grade Windows Server
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            All our Windows Server installations come with the latest updates
            and security patches, ensuring you have a stable and secure
            environment for your applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Distributions;
