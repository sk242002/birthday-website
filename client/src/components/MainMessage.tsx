import { motion } from "framer-motion";
import { FaStar, FaHeart, FaGift } from "react-icons/fa";

export default function MainMessage() {
  return (
    <motion.section
      className="relative z-10 max-w-3xl mx-auto px-6 py-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl mb-16 border border-white/20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h2 className="font-['Pacifico'] text-3xl md:text-4xl text-pastel-pink mb-6">
          To the one who makes my heart smile...
        </h2>
        <p className="font-['Montserrat'] text-lg text-pastel-blue leading-relaxed mb-8">
          Another year around the sun means another year of loving you more than I did before. 
          Your smile lights up my world, your laugh is my favorite melody, and your heart is the most precious gift.
          On your special day, I want you to know how incredibly grateful I am to have you in my life.
        </p>
        <p className="font-['Dancing_Script'] text-2xl md:text-3xl text-pastel-purple mb-4">
          Wishing you all the happiness in the world!
        </p>
        <div className="flex justify-center space-x-3">
          <FaStar className="text-pastel-yellow text-xl" />
          <FaHeart className="text-pastel-pink text-xl" />
          <FaGift className="text-pastel-mint text-xl" />
          <FaHeart className="text-pastel-pink text-xl" />
          <FaStar className="text-pastel-yellow text-xl" />
        </div>
      </div>
    </motion.section>
  );
}
