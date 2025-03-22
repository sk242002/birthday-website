import { motion } from "framer-motion";
import { useState } from "react";

interface Gift {
  title: string;
  description: string;
  color: string;
}

interface GiftSectionProps {
  gifts: Gift[];
}

export default function GiftSection({ gifts }: GiftSectionProps) {
  const [activeGift, setActiveGift] = useState<number | null>(null);

  const getColor = (color: string) => {
    switch (color) {
      case "rose":
        return "bg-gradient-to-br from-pink-400 to-pink-600";
      case "softTeal":
        return "bg-gradient-to-br from-teal-400 to-teal-600";
      case "lightPurple":
        return "bg-gradient-to-br from-purple-400 to-purple-600";
      default:
        return "bg-gradient-to-br from-blue-400 to-blue-600";
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Special Gifts For You
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`rounded-2xl ${getColor(gift.color)} text-white shadow-xl hover:shadow-2xl transition-all p-6 cursor-pointer relative overflow-hidden`}
              onClick={() => setActiveGift(activeGift === index ? null : index)}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-white/20 w-40 h-10 -right-20 top-5"></div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{gift.title}</h3>

              <motion.div
                initial={false}
                animate={{
                  height: activeGift === index ? "auto" : "0px",
                  opacity: activeGift === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-white/90 mt-2">{gift.description}</p>
              </motion.div>

              <div className="mt-4 flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors"
                >
                  {activeGift === index ? "Close" : "See Details"}
                </motion.button>

                <motion.div
                  animate={{ rotate: activeGift === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}