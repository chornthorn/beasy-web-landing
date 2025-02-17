import React from "react";
import { motion } from "framer-motion";

const HeroV8: React.FC = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#0f2167] via-[#1e47c0] to-[#3b82f6]">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-[#8ba2d5]/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.6 + 0.3,
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
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #0f2167 0%, #1e47c0 50%, #3b82f6 100%)",
            "linear-gradient(225deg, #0f2167 0%, #1e47c0 50%, #3b82f6 100%)",
          ],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Column */}
          <div className="pt-8">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#8ba2d5] text-lg mb-6 drop-shadow-md"
            >
              Stop choosing between affordability and performance!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[2.75rem] leading-tight font-bold text-white mb-12 drop-shadow-lg"
            >
              <span className="bg-gradient-to-r from-[#a4b8e4] via-[#d5e3ff] to-white bg-clip-text text-transparent">
                We offer the best prices,
              </span>
              <br />
              while others rely on flashy discounts.
            </motion.h1>

            <div className="space-y-6 text-lg">
              {[
                {
                  text: (
                    <>
                      More Computing Power for Less -{" "}
                      <a
                        href="#compare"
                        className="text-[#8ba2d5] hover:text-white transition-colors"
                      >
                        See for Yourself
                      </a>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <a
                        href="#support"
                        className="text-[#8ba2d5] hover:text-white transition-colors"
                      >
                        Award Winning Support
                      </a>{" "}
                      from an actual person
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <a
                        href="#locations"
                        className="text-[#8ba2d5] hover:text-white transition-colors"
                      >
                        Global Availability
                      </a>{" "}
                      - 9 Regions, 12 Locations
                    </>
                  ),
                },
                {
                  text: "99.996% Uptime over the last 12 months",
                },
                {
                  text: "German Quality Since 2003",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={listItemVariants}
                  className="flex items-baseline gap-x-3"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="text-2xl text-[#8ba2d5] leading-none"
                  >
                    •
                  </motion.span>
                  <div className="text-white/90 drop-shadow-sm">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Card Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative group">
              {[
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
                "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&q=80&w=2000",
                "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&q=80&w=2000",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000",
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [1.05, 1, 1, 1.05],
                    transition: {
                      times: [0, 0.1, 0.9, 1],
                      duration: 8,
                      delay: index * 2,
                      repeat: Infinity,
                      repeatDelay: 8,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transform-gpu will-change-transform"
                    style={{
                      backgroundImage: `url('${image}')`,
                      animation: "slowZoom 16s infinite",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c1957]/90 via-[#1e3a8a]/70 to-[#1e3a8a]/50" />
                </motion.div>
              ))}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#6a83c9]/40 via-[#7a93d9]/40 to-[#8aa3e9]/40 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-75"
                animate={{
                  opacity: [0.5, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <style>{`
                @keyframes slowZoom {
                  0% {
                    transform: scale(1);
                  }
                  50% {
                    transform: scale(1.1);
                  }
                  100% {
                    transform: scale(1);
                  }
                }
              `}</style>
              <div className="relative h-full p-10 flex flex-col justify-between bg-gradient-to-br from-white/[0.25] to-white/[0.15] backdrop-blur-xl transition-all duration-300 group-hover:from-white/[0.3] group-hover:to-white/[0.2]">
                {[
                  {
                    badge: "Winter Credit Back Gift",
                    title: "CLOUD VDS",
                    subtitle: (
                      <>
                        Power Up - Credit Back
                        <br />A Gift That Grows
                      </>
                    ),
                  },
                  {
                    badge: "Limited Time Offer",
                    title: "CLOUD PRO",
                    subtitle: (
                      <>
                        Enterprise Power
                        <br />
                        Startup Price
                      </>
                    ),
                  },
                  {
                    badge: "New Region Launch",
                    title: "GLOBAL EDGE",
                    subtitle: (
                      <>
                        Closer to Users
                        <br />
                        Faster Response
                      </>
                    ),
                  },
                  {
                    badge: "Holiday Special",
                    title: "CLOUD FLEX",
                    subtitle: (
                      <>
                        Scale on Demand
                        <br />
                        Pay as You Grow
                      </>
                    ),
                  },
                  {
                    badge: "Anniversary Deal",
                    title: "CLOUD MAX",
                    subtitle: (
                      <>
                        Maximum Performance
                        <br />
                        Minimum Cost
                      </>
                    ),
                  },
                ].map((content, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 flex flex-col justify-between p-8"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      transition: {
                        times: [0, 0.1, 0.9, 1],
                        duration: 8,
                        delay: i * 2,
                        repeat: Infinity,
                        repeatDelay: 8,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-white/20 text-white text-sm font-medium px-6 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg self-start"
                    >
                      {content.badge}
                    </motion.span>

                    <div>
                      <motion.h2 className="text-white text-5xl font-bold mb-4 drop-shadow-lg">
                        {content.title}
                      </motion.h2>
                      <motion.div className="text-white/90 text-2xl font-medium leading-tight mb-6 drop-shadow-md">
                        {content.subtitle}
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/30 transition-all duration-300"
                      >
                        Explore Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    backgroundColor: [
                      "rgba(139, 162, 213, 0.3)",
                      "rgba(139, 162, 213, 1)",
                      "rgba(139, 162, 213, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 8,
                    times: [0, 0.2, 1],
                    delay: i * 2,
                  }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV8;
