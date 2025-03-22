import { motion } from "framer-motion";
import { useState } from "react";

interface Gift {
  title: string;
  description: string;
  color: string;
}

interface GiftSectionProps {
  gifts: Gift[];
}

export default function GiftSection({ gifts }: GiftSectionProps) {
  const [selectedGift, setSelectedGift] = useState<number | null>(null);
  
  const getGiftColor = (color: string) => {
    const colorMap: Record<string, string> = {
      rose: "bg-rose-500",
      softTeal: "bg-teal-400",
      lightPurple: "bg-purple-400",
      default: "bg-pink-500"
    };
    
    return colorMap[color] || colorMap.default;
  };
  
  const getGiftIcon = (index: number) => {
    const icons = ["🎁", "🎂", "🎨"];
    return icons[index % icons.length];
  };
  
  return (
    <section className="py-24 px-6 relative">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Special Gifts For You
        </h2>
        
        <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              className={`${
                selectedGift === index ? "scale-105 z-10" : "scale-100"
              } transition-all duration-300 relative`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div 
                className={`rounded-xl overflow-hidden shadow-xl cursor-pointer h-full border-2 ${
                  selectedGift === index 
                    ? "border-white" 
                    : "border-white/20"
                }`}
                onClick={() => setSelectedGift(selectedGift === index ? null : index)}
              >
                {/* Gift header with color based on gift type */}
                <div className={`${getGiftColor(gift.color)} p-6 flex items-center justify-center`}>
                  <span className="text-5xl">{getGiftIcon(index)}</span>
                </div>
                
                {/* Gift content */}
                <div className="p-6 bg-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-white">{gift.title}</h3>
                  
                  <div className="text-sm text-white/80 mb-4 line-clamp-3">
                    {selectedGift === index 
                      ? gift.description
                      : `${gift.description.substring(0, 80)}...`
                    }
                  </div>
                  
                  <button 
                    className={`text-sm px-4 py-2 rounded-full ${
                      selectedGift === index 
                        ? "bg-white text-purple-800" 
                        : "bg-white/20 text-white hover:bg-white/30"
                    } transition-all`}
                  >
                    {selectedGift === index ? "Close" : "Learn More"}
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${getGiftColor(gift.color)} 
                flex items-center justify-center text-white font-bold text-lg
                ${selectedGift === index ? "opacity-100" : "opacity-70"}`}
              >
                ✨
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          className="text-center text-white/80 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          These special gifts are selected just for you, to celebrate your incredible journey and all the amazing qualities that make you so special.
        </motion.p>
      </motion.div>
    </section>
  );
}