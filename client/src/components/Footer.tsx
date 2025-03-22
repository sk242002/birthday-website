import { motion } from "framer-motion";
import { FaHeart, FaShareAlt } from "react-icons/fa";

interface FooterProps {
  onShare: () => void;
}

export default function Footer({ onShare }: FooterProps) {
  return (
    <motion.footer
      className="relative z-10 py-8 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <p className="font-['Montserrat'] text-white/90">
        Made with <FaHeart className="inline text-[#FF5757]" /> just for you
      </p>
      <div className="mt-4">
        <button 
          className="bg-white/30 hover:bg-white/50 text-white rounded-full py-2 px-4 transition-colors duration-300"
          onClick={onShare}
        >
          <FaShareAlt className="inline mr-2" /> Share This
        </button>
      </div>
    </motion.footer>
  );
}
