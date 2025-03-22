import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaMusic, FaStar } from "react-icons/fa";

interface Gift {
  id: number;
  icon: string;
  title: string;
  message: string;
  color: string;
}

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGift = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    switch (gift.icon) {
      case "gift":
        return <FaGift className={`text-5xl text-[${gift.color}]`} />;
      case "music":
        return <FaMusic className={`text-5xl text-[${gift.color}]`} />;
      case "star":
        return <FaStar className={`text-5xl text-[${gift.color}]`} />;
      default:
        return <FaGift className={`text-5xl text-[${gift.color}]`} />;
    }
  };

  return (
    <motion.div
      className="gift-card bg-white rounded-xl shadow-xl p-6 text-center cursor-pointer"
      onClick={toggleGift}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="gift-icon mb-4">
        {renderIcon()}
      </div>
      <h3 className="font-['Dancing_Script'] text-2xl text-[#FF5757] mb-2">{gift.title}</h3>
      <p className="font-['Montserrat'] text-gray-700 text-sm">Click to open</p>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="gift-reveal mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-['Montserrat'] text-gray-800">{gift.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
