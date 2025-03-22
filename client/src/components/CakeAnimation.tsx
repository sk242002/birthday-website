import { motion } from "framer-motion";
import { useState } from "react";

export default function CakeAnimation() {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleBlow = () => {
    setIsBlownOut(true);
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  };

  const resetCandles = () => {
    setIsBlownOut(false);
    setShowMessage(false);
  };

  // Candle positions
  const candles = [
    { left: "30%", top: "-20px" },
    { left: "50%", top: "-30px" },
    { left: "70%", top: "-20px" },
  ];

  return (
    <section className="py-16 px-6 text-center max-w-4xl mx-auto my-10 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-800">
        Make a Wish!
      </h2>

      <motion.div 
        className="relative mx-auto w-64 h-48 md:w-96 md:h-64"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Cake */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-3xl rounded-b-lg shadow-lg">
          {/* Cake frosting */}
          <div className="absolute top-0 w-full h-3 bg-white rounded-full transform -translate-y-1"></div>
          <div className="absolute top-1/4 w-full border-b-4 border-pink-200 border-dashed"></div>
        </div>
        
        {/* Cake plate */}
        <div className="absolute bottom-0 w-[110%] h-4 bg-gray-200 rounded-full left-1/2 transform -translate-x-1/2 translate-y-2"></div>
        
        {/* Candles */}
        {candles.map((candle, index) => (
          <div key={index} className="absolute" style={{ left: candle.left, top: candle.top }}>
            <div className="w-2 h-16 bg-gradient-to-t from-purple-300 to-pink-200 mx-auto relative">
              {!isBlownOut && (
                <motion.div 
                  className="absolute -top-6 w-4 h-4 bg-yellow-500 rounded-full blur-[2px] z-10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5 + (index * 0.2)
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-1 h-3 bg-orange-500 blur-[1px] transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              )}
            </div>
          </div>
        ))}
        
        {/* Decorations */}
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div 
            key={index}
            className="absolute top-1/4 w-2 h-2 rounded-full bg-yellow-300"
            style={{ 
              left: `${20 + (index * 15)}%`, 
              top: `${30 + ((index % 2) * 15)}%` 
            }}
            animate={{
              y: [0, -3, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: index * 0.3
            }}
          />
        ))}
      </motion.div>

      <div className="mt-12 flex flex-col items-center">
        {!isBlownOut ? (
          <motion.button
            onClick={handleBlow}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Blow the Candles!
          </motion.button>
        ) : (
          <motion.button
            onClick={resetCandles}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Light Candles Again
          </motion.button>
        )}

        {showMessage && (
          <motion.div
            className="mt-6 text-xl text-purple-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎉 Your wish has been sent to the universe! 🌟
          </motion.div>
        )}
      </div>
    </section>
  );
}