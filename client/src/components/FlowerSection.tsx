import { motion } from "framer-motion";

export default function FlowerSection() {
  // Colors for flowers
  const flowerColors = [
    "text-pastel-pink",
    "text-pastel-purple", 
    "text-pastel-blue",
    "text-pastel-mint",
    "text-pastel-yellow"
  ];
  
  // Create an array of flowers with random positions
  const flowers = Array.from({ length: 12 }).map((_, i) => {
    const size = 80 + Math.random() * 60; // Random size between 80-140px
    const delay = Math.random() * 1.5; // Random delay for animation
    const colorIndex = Math.floor(Math.random() * flowerColors.length);
    
    return {
      id: i,
      x: `${Math.random() * 80 + 10}%`, // Random horizontal position
      size: size,
      delay: delay,
      color: flowerColors[colorIndex]
    };
  });

  return (
    <section className="py-16 px-6 relative overflow-hidden max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-pastel-yellow relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Blooming Wishes
      </motion.h2>
      
      {/* Flower SVGs scattered around */}
      {flowers.map((flower) => (
        <motion.div 
          key={flower.id}
          className={`absolute ${flower.color}`}
          style={{ 
            left: flower.x, 
            width: flower.size, 
            height: flower.size 
          }}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
              duration: 0.7, 
              delay: flower.delay 
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Simple flower SVG */}
            <g fill="currentColor">
              <circle cx="50" cy="50" r="12" fill="#FFFFD1" />
              <path d="M50,15 C55,35 65,45 85,50 C65,55 55,65 50,85 C45,65 35,55 15,50 C35,45 45,35 50,15 Z" />
            </g>
          </svg>
        </motion.div>
      ))}
      
      <div className="text-center mt-10 relative z-10">
        <motion.p
          className="text-lg md:text-xl text-pastel-blue max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Like these flowers, may your year ahead be filled with beautiful moments, 
          growth, and the vibrant colors of happiness.
        </motion.p>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export const FlowerSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="text-4xl mb-8">🌸 🌹 🌺</div>
        <p className="text-2xl font-script text-pink-600 mb-6">
          "Phool k liye phool"
        </p>
        <div className="text-lg text-purple-800">
          Like these beautiful flowers, may your life bloom with happiness and love
        </div>
      </motion.div>
      
      <motion.div
        className="absolute -right-10 top-0 text-6xl"
        initial={{ x: 100, rotate: 0 }}
        animate={{ x: 0, rotate: -15 }}
        transition={{ duration: 1 }}
      >
        🌸
      </motion.div>
      
      <motion.div
        className="absolute -left-10 bottom-0 text-6xl"
        initial={{ x: -100, rotate: 0 }}
        animate={{ x: 0, rotate: 15 }}
        transition={{ duration: 1 }}
      >
        🌺
      </motion.div>
    </section>
  );
};
