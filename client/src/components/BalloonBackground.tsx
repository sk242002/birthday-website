import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";

export default function BalloonBackground() {
  const [balloons, setBalloons] = useState<{ id: number; x: string; color: string; delay: number; duration: number }[]>([]);
  
  useEffect(() => {
    // Generate random balloons
    const colors = [
      "text-pink-500",
      "text-purple-500",
      "text-blue-400",
      "text-fuchsia-500",
      "text-violet-400",
      "text-rose-400"
    ];
    
    const newBalloons = Array.from({ length: 15 }).map((_, i) => {
      return {
        id: i,
        x: `${5 + Math.random() * 90}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 15
      };
    });
    
    setBalloons(newBalloons);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating balloons */}
      {balloons.map(balloon => (
        <motion.div
          key={balloon.id}
          className={`absolute bottom-0 ${balloon.color} opacity-70`}
          style={{ left: balloon.x }}
          initial={{ y: "110vh" }}
          animate={{ 
            y: "-120vh", 
            x: [
              `${parseFloat(balloon.x) - 5}%`,
              `${parseFloat(balloon.x) + 5}%`,
              `${parseFloat(balloon.x) - 5}%`
            ]
          }}
          transition={{ 
            y: { 
              duration: balloon.duration,
              repeat: Infinity,
              delay: balloon.delay,
              ease: "linear"
            },
            x: {
              duration: balloon.duration / 3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: balloon.delay,
              ease: "easeInOut"
            }
          }}
        >
          {/* Balloon shape */}
          <div className="relative">
            <svg width="40" height="50" viewBox="0 0 40 50" fill="currentColor">
              <path d="M20,0 C31,0 40,9 40,20 C40,35 25,50 20,50 C15,50 0,35 0,20 C0,9 9,0 20,0 Z" />
            </svg>
            <div className="absolute w-0.5 h-20 bg-gray-400 top-[95%] left-1/2 -translate-x-1/2"></div>
          </div>
        </motion.div>
      ))}
      
      {/* Cake icons floating up occasionally */}
      <motion.div
        className="text-pink-500 absolute bottom-0 left-[20%]"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: ["100vh", "0vh", "-10vh", "-20vh"] 
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 15,
          times: [0, 0.2, 0.8, 1],
          ease: "easeOut"
        }}
      >
        <FaBirthdayCake size={30} />
      </motion.div>
      
      <motion.div
        className="text-purple-500 absolute bottom-0 right-[30%]"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: ["100vh", "0vh", "-15vh", "-25vh"] 
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 20,
          times: [0, 0.2, 0.8, 1],
          ease: "easeOut",
          delay: 5
        }}
      >
        <FaBirthdayCake size={24} />
      </motion.div>
    </div>
  );
}