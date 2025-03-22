import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MoonBackground() {
  const [stars, setStars] = useState<{ key: number; x: string; y: string; size: number; delay: number }[]>([]);
  
  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 100 }).map((_, i) => {
      return {
        key: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5
      };
    });
    
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Moon */}
      <motion.div 
        className="absolute top-[5%] right-[10%] w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-yellow-100 rounded-full shadow-[0_0_60px_30px_rgba(255,248,200,0.4)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Moon craters */}
        <div className="absolute top-[20%] left-[30%] w-6 h-6 md:w-10 md:h-10 bg-yellow-200/40 rounded-full"></div>
        <div className="absolute top-[50%] left-[60%] w-4 h-4 md:w-6 md:h-6 bg-yellow-200/30 rounded-full"></div>
        <div className="absolute top-[70%] left-[40%] w-5 h-5 md:w-8 md:h-8 bg-yellow-200/30 rounded-full"></div>
      </motion.div>
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.key}
          className="absolute rounded-full bg-white"
          style={{ 
            left: star.x, 
            top: star.y, 
            width: star.size, 
            height: star.size 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut" 
          }}
        />
      ))}
      
      {/* Shooting stars - random appearance */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ 
          width: "100px",
          transform: "rotate(-45deg)",
          top: "15%",
          left: "30%" 
        }}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          x: ["0%", "200%"],
          y: ["0%", "200%"]
        }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatDelay: 15 + Math.random() * 20
        }}
      />
      
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ 
          width: "150px",
          transform: "rotate(-30deg)",
          top: "35%",
          left: "55%" 
        }}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          x: ["0%", "200%"],
          y: ["0%", "200%"]
        }}
        transition={{ 
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 25 + Math.random() * 15
        }}
      />
    </div>
  );
}