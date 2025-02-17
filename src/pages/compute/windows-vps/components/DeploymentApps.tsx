import React from "react";
import { motion } from "framer-motion";

const apps = [
  {
    name: "Plesk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#0078D4]">
        <path
          fill="currentColor"
          d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.5 3.8L12 11.8 4.5 8.1 12 4.3zM4 9.8l7 3.5v7l-7-3.5v-7zm9 0v7l7-3.5v-7l-7 3.5z"
        />
      </svg>
    ),
    description: "Complete web hosting control panel for your Windows server",
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#0078D4]">
        <path
          fill="currentColor"
          d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"
        />
      </svg>
    ),
    description: "Containerize and manage your Windows applications",
  },
  {
    name: "Windows Admin Center",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#0078D4]">
        <path
          fill="currentColor"
          d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5h2v5h14v-5h2zm-4-9a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10zm0 2H7v4h10V7z"
        />
      </svg>
    ),
    description: "Browser-based management tool for Windows servers",
  },
  {
    name: "IIS Manager",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#0078D4]">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"
        />
      </svg>
    ),
    description: "Manage your web applications and websites",
  },
];

const DeploymentApps: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Apps and Deployment Options for Your Windows VPS
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Choose from our selection of pre-configured applications and
            management tools designed specifically for Windows environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apps.map((app, idx) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800/80 transition-all duration-300 group relative"
            >
              {/* App Icon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6 flex justify-center"
              >
                <div className="relative">
                  {app.icon}
                  <motion.div
                    className="absolute inset-0 bg-[#0078D4]/10 rounded-full"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* App Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0078D4] transition-colors">
                {app.name}
              </h3>

              {/* Description */}
              <p className="text-gray-100 leading-relaxed">{app.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0078D4]/0 via-[#00a2ff]/0 to-[#00b7ff]/0 group-hover:from-[#0078D4]/10 group-hover:via-[#00a2ff]/10 group-hover:to-[#00b7ff]/10 transition-all duration-500" />
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
          <div className="text-3xl mb-4">⚙️</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Easy Deployment & Management
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            All applications come pre-configured and optimized for Windows
            Server environments. Get started quickly with our one-click
            installers and intuitive management interfaces.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentApps;
