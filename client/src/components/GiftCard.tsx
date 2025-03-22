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

  // Map the gift colors to pastel color classes
  const getColorClass = () => {
    switch (gift.color) {
      case "#FF5757":
      case "#F8C8DC":
        return "text-pastel-pink";
      case "#9D65C9":
      case "#E0BBE4":
        return "text-pastel-purple";
      case "#BFE1FF":
      case "#5DA9E9":
        return "text-pastel-blue";
      case "#C4F4C7":
      case "#70D6A3":
        return "text-pastel-mint";
      case "#FFD700":
      case "#FFFFD1":
        return "text-pastel-yellow";
      default:
        return "text-pastel-pink";
    }
  };

  const renderIcon = () => {
    const colorClass = getColorClass();
    switch (gift.icon) {
      case "gift":
        return <FaGift className={`text-5xl ${colorClass}`} />;
      case "music":
        return <FaMusic className={`text-5xl ${colorClass}`} />;
      case "star":
        return <FaStar className={`text-5xl ${colorClass}`} />;
      default:
        return <FaGift className={`text-5xl ${colorClass}`} />;
    }
  };

  return (
    <motion.div
      className="gift-card bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 text-center cursor-pointer border border-white/20"
      onClick={toggleGift}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="gift-icon mb-4">
        {renderIcon()}
      </div>
      <h3 className="font-['Dancing_Script'] text-2xl text-pastel-pink mb-2">{gift.title}</h3>
      <p className="font-['Montserrat'] text-pastel-blue text-sm">Click to open</p>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="gift-reveal mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-['Montserrat'] text-pastel-yellow">{gift.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
