
import { motion } from "framer-motion";
import { useState } from "react";

export const GiftBoxSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 relative">
      <motion.div 
        className="w-48 h-48 mx-auto cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
      >
        {!isOpen ? (
          <div className="relative">
            <motion.div 
              className="absolute w-full h-full bg-pink-500 rounded-lg"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                🎁
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            className="text-8xl text-center"
          >
            🌺
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
