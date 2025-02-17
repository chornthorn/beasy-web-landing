import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import TopBanner from "./TopBanner";
import { useAuth } from "../../auth";

interface FeaturedItem {
  name: string;
  description: string;
  icon: string;
}

interface Category {
  title: string;
  items: string[];
}

interface MegaMenu {
  featured: {
    title: string;
    items: FeaturedItem[];
  };
  categories: Category[];
}

interface NavItem {
  name: string;
  href: string;
  megaMenu?: MegaMenu;
}

const HeaderV2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { openLogin } = useAuth();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      if (activeMenu) setActiveMenu(null);
    });
    return () => unsubscribe();
  }, [activeMenu, scrollY]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(30, 27, 75, 0.95)", "rgba(30, 27, 75, 0.98)"]
  );

  const navItems: NavItem[] = [
    {
      name: "Products",
      href: "/",
      megaMenu: {
        featured: {
          title: "Popular Products",
          items: [
            {
              name: "Cloud VPS",
              description: "Virtual Private Servers with NVMe storage",
              icon: "⚡️",
            },
            {
              name: "Cloud VDS",
              description: "Virtual Dedicated Servers with dedicated resources",
              icon: "🚀",
            },
            {
              name: "Windows VPS",
              description: "Windows-based Virtual Private Servers",
              icon: "🪟",
            },
          ],
        },
        categories: [
          {
            title: "Compute",
            items: ["Cloud VPS", "Cloud VDS", "Storage VPS", "Windows VPS"],
          },
          {
            title: "Storage",
            items: ["Object Storage", "Block Storage", "Backup Storage", "CDN"],
          },
          {
            title: "Hosting",
            items: [
              "cPanel VPS",
              "Domain Names",
              "Web Hosting",
              "Email Hosting",
            ],
          },
        ],
      },
    },
    {
      name: "Solutions",
      href: "/",
      megaMenu: {
        featured: {
          title: "Popular Solutions",
          items: [
            {
              name: "Web Hosting",
              description: "Host your websites and applications",
              icon: "🌐",
            },
            {
              name: "Game Servers",
              description: "Low-latency game hosting solutions",
              icon: "🎮",
            },
            {
              name: "AI & ML",
              description: "High-performance computing for AI workloads",
              icon: "🤖",
            },
          ],
        },
        categories: [
          {
            title: "By Industry",
            items: [
              "E-commerce",
              "SaaS",
              "Media & Entertainment",
              "Healthcare",
            ],
          },
          {
            title: "By Use Case",
            items: ["Development", "Testing", "Production", "Backup"],
          },
          {
            title: "By Technology",
            items: ["Kubernetes", "Docker", "WordPress", "Node.js"],
          },
        ],
      },
    },
    {
      name: "Developers",
      href: "#developers",
      megaMenu: {
        featured: {
          title: "Developer Tools",
          items: [
            {
              name: "API",
              description: "RESTful API for automation",
              icon: "🔧",
            },
            {
              name: "CLI",
              description: "Command-line interface tool",
              icon: "💻",
            },
            {
              name: "SDKs",
              description: "Software Development Kits",
              icon: "📦",
            },
          ],
        },
        categories: [
          {
            title: "Resources",
            items: [
              "Documentation",
              "API Reference",
              "Code Samples",
              "Tutorials",
            ],
          },
          {
            title: "Tools",
            items: ["Cloud Manager", "Monitoring", "Metrics", "Logs"],
          },
          {
            title: "Community",
            items: ["GitHub", "Discord", "Forum", "Blog"],
          },
        ],
      },
    },
    { name: "Partners", href: "#partners" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <TopBanner />
      <motion.header
        style={{
          backgroundColor,
        }}
        className="sticky top-0 z-50 shadow-lg shadow-[#1e1b4b]/50"
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/"
                  className="text-2xl font-bold bg-gradient-to-r from-[#93c5fd] via-[#818cf8] to-[#93c5fd] bg-clip-text text-transparent hover:from-[#60a5fa] hover:via-[#818cf8] hover:to-[#60a5fa] transition-all duration-300"
                >
                  CloudReseller
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.name)}
                >
                  <motion.div className="flex items-center space-x-1 group">
                    <motion.div whileHover={{ y: -1 }}>
                      <Link
                        to={item.href}
                        className="text-white hover:text-[#93c5fd] transition-colors duration-300 text-[15px] font-medium tracking-wide"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                    {item.megaMenu && (
                      <motion.svg
                        className="w-4 h-4 text-white/70 group-hover:text-[#93c5fd] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: activeMenu === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    )}
                  </motion.div>

                  {/* Mega Menu */}
                  {item.megaMenu && activeMenu === item.name && (
                    <div
                      className={`fixed left-0 right-0 w-full ${
                        scrollY.get() > 0 ? "top-[72px]" : "top-[104px]"
                      }`}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      {/* Full-width backdrop */}
                      <div className="absolute inset-0 bg-[#1e1b4b]/90 backdrop-blur-lg" />

                      {/* Content container */}
                      <div className="relative">
                        {/* Top border glow */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#93c5fd]/50 to-transparent" />

                        {/* Main content */}
                        <div className="max-w-7xl mx-auto px-4">
                          <div className="py-8">
                            <div className="grid grid-cols-4 gap-8">
                              {/* Featured Section */}
                              <div className="col-span-1">
                                <h3 className="text-[#93c5fd] font-semibold mb-4">
                                  {item.megaMenu.featured.title}
                                </h3>
                                <div className="space-y-4">
                                  {item.megaMenu.featured.items.map(
                                    (featured, idx) => (
                                      <Link
                                        key={idx}
                                        to={(() => {
                                          switch (featured.name) {
                                            case "Cloud VPS":
                                              return "/compute/cloud-vps";
                                            case "Cloud VDS":
                                              return "/compute/cloud-vds";
                                            case "Windows VPS":
                                              return "/compute/windows-vps";
                                            default:
                                              return "#";
                                          }
                                        })()}
                                        className="group block p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                                      >
                                        <div className="text-xl mb-1">
                                          {featured.icon}
                                        </div>
                                        <div className="font-medium text-white group-hover:text-[#93c5fd] transition-colors duration-300">
                                          {featured.name}
                                        </div>
                                        <div className="text-sm text-white/70">
                                          {featured.description}
                                        </div>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* Categories */}
                              {item.megaMenu.categories.map((category, idx) => (
                                <div key={idx} className="col-span-1">
                                  <h3 className="text-[#93c5fd] font-semibold mb-4">
                                    {category.title}
                                  </h3>
                                  <ul className="space-y-2">
                                    {category.items.map((subItem, subIdx) => (
                                      <li key={subIdx}>
                                        <Link
                                          to={(() => {
                                            switch (subItem) {
                                              case "Cloud VPS":
                                                return "/compute/cloud-vps";
                                              case "Cloud VDS":
                                                return "/compute/cloud-vds";
                                              case "Storage VPS":
                                                return "/compute/storage-vps";
                                              case "Windows VPS":
                                                return "/compute/windows-vps";
                                              case "Object Storage":
                                                return "/object-storage";
                                              case "cPanel VPS":
                                                return "/cpanel-vps-server";
                                              case "Domain Names":
                                                return "/domains";
                                              default:
                                                return "#";
                                            }
                                          })()}
                                          className="text-white/90 hover:text-[#93c5fd] transition-colors duration-300 text-[14px] block py-1 relative group/link"
                                        >
                                          <span className="relative">
                                            {subItem}
                                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#93c5fd] transition-all duration-300 group-hover/link:w-full" />
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Button */}
            <div className="hidden md:block">
              <motion.button
                onClick={openLogin}
                className="bg-[#93c5fd] text-[#1e1b4b] px-5 py-2.5 rounded-full text-[15px] font-semibold tracking-wide hover:bg-[#60a5fa] transition-all duration-300 shadow-md shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden ${isOpen ? "block" : "hidden"}`}
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ x: 4 }}>
                  <Link
                    to={
                      item.href === "/"
                        ? "/"
                        : item.href === "/pricing"
                        ? "/pricing"
                        : "#"
                    }
                    className="block text-white hover:text-[#93c5fd] transition-colors duration-300 px-3 py-2.5 text-[15px] font-medium tracking-wide"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <motion.button
                  onClick={openLogin}
                  className="block bg-[#93c5fd] text-[#1e1b4b] px-3 py-2.5 rounded-full text-[15px] font-semibold tracking-wide hover:bg-[#60a5fa] transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Log in
                </motion.button>
              </div>
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
};

export default HeaderV2;
