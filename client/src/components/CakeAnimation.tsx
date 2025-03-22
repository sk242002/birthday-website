import { motion } from "framer-motion";
import { useState } from "react";

export default function CakeAnimation() {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const handleBlowCandles = () => {
    if (!isBlownOut) {
      setIsBlownOut(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 1000);
    }
  };
  
  return (
    <section className="py-24 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-pastel-yellow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Make a Wish!
      </motion.h2>
      
      <motion.div
        className="relative cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        onClick={handleBlowCandles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Cake base */}
        <div className="relative w-64 h-56 mx-auto">
          {/* Cake layers */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-24 bg-pastel-pink rounded-lg"></div>
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-48 h-20 bg-pastel-purple rounded-lg"></div>
          <div className="absolute bottom-44 left-1/2 -translate-x-1/2 w-40 h-16 bg-pastel-blue rounded-lg"></div>
          
          {/* Cake decorations */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-3 bg-pastel-mint rounded-lg"></div>
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-48 h-3 bg-pastel-yellow rounded-lg"></div>
          
          {/* Candles */}
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="absolute bottom-60 left-1/2 transform" style={{ marginLeft: `${(i - 2) * 15}px` }}>
              <div className="w-2 h-10 bg-gradient-to-b from-pastel-purple to-pastel-blue rounded-sm"></div>
              
              {/* Flame */}
              {!isBlownOut && (
                <motion.div 
                  className="w-4 h-6 bg-gradient-to-b from-pastel-yellow to-yellow-500 rounded-full absolute -top-6 left-1/2 -translate-x-1/2 origin-bottom"
                  animate={{ 
                    scaleY: [1, 1.1, 0.9, 1.2, 1],
                    rotate: [-5, 5, -3, 4, -5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  <div className="w-2 h-3 bg-gradient-to-b from-white to-pastel-yellow rounded-full absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Instruction */}
        {!isBlownOut && (
          <motion.div 
            className="text-lg text-pastel-pink text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Tap the cake to blow out the candles!
          </motion.div>
        )}
        
        {/* Confetti when blown out */}
        {isBlownOut && (
          <>
            {Array.from({ length: 30 }).map((_, i) => {
              const colors = ['#FFD1DC', '#E0BBE4', '#BFE1FF', '#C4F4C7', '#FFFFD1'];
              const size = Math.random() * 8 + 4;
              const angle = Math.random() * 360;
              const distance = Math.random() * 200 + 50;
              const colorIndex = Math.floor(Math.random() * colors.length);
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full z-10"
                  style={{ 
                    backgroundColor: colors[colorIndex],
                    top: '50%',
                    left: '50%',
                    width: size,
                    height: size
                  }}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: Math.cos(angle * (Math.PI / 180)) * distance,
                    y: Math.sin(angle * (Math.PI / 180)) * distance,
                    opacity: 0,
                    rotate: Math.random() * 360
                  }}
                  transition={{ 
                    duration: 1 + Math.random(),
                    ease: "easeOut"
                  }}
                />
              );
            })}
          </>
        )}
      </motion.div>
      
      {/* Message after blowing */}
      {showMessage && (
        <motion.div
          className="mt-10 text-center max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-pastel-pink">Your wish has been made!</h3>
          <p className="text-lg text-pastel-blue">May all your dreams and wishes come true this year! Remember that the universe is working to make your special wishes a reality.</p>
        </motion.div>
      )}
    </section>
  );
}