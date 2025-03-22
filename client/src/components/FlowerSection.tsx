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
          <div className="text-4xl">🌸</div>
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