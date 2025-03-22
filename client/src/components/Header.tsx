import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative z-10 py-10 px-4 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="font-['Dancing_Script'] text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
          Happy Birthday, <span className="text-[#FFD700]">My Love!</span>
        </h1>
        <p className="font-['Montserrat'] text-lg md:text-xl text-white opacity-90 mb-8">
          Today is all about celebrating the amazing person you are!
        </p>
        
        <motion.div
          className="inline-block text-[#FF5757] mb-6"
          animate={{ 
            scale: [1, 1.3, 1, 1.3, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <FaHeart className="text-5xl" />
        </motion.div>
      </motion.div>
    </header>
  );
}
