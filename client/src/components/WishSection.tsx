import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Star, Gift, Sparkles } from "lucide-react";

interface Wish {
  icon: string;
  text: string;
}

interface WishSectionProps {
  wishes: Wish[];
}

export default function WishSection({ wishes }: WishSectionProps) {
  const [hoveredWish, setHoveredWish] = useState<number | null>(null);
  
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      heart: <Heart className="h-6 w-6" />,
      star: <Star className="h-6 w-6" />,
      gifts: <Gift className="h-6 w-6" />,
      magic: <Sparkles className="h-6 w-6" />
    };
    
    return iconMap[iconName] || <Heart className="h-6 w-6" />;
  };
  
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Birthday Wishes
        </h2>
        
        <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredWish(index)}
              onMouseLeave={() => setHoveredWish(null)}
            >
              <div className={`
                bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20
                transition-all duration-300
                ${hoveredWish === index ? 'bg-white/20 scale-105' : 'scale-100'}
              `}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`
                      p-3 rounded-full
                      ${hoveredWish === index ? 'bg-pink-500 text-white' : 'bg-white/10 text-pink-300'}
                      transition-colors duration-300
                    `}>
                      {getIcon(wish.icon)}
                    </div>
                    
                    <div>
                      <p className="text-lg text-white/90 leading-relaxed">{wish.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated sparkles when hovered */}
              {hoveredWish === index && (
                <>
                  {[0, 1, 2, 3].map(sparkle => (
                    <motion.div
                      key={`sparkle-${index}-${sparkle}`}
                      className="absolute text-xl"
                      initial={{ 
                        opacity: 1, 
                        x: 0, 
                        y: 0,
                        scale: 0
                      }}
                      animate={{ 
                        opacity: [1, 0],
                        x: [0, (sparkle % 2 === 0 ? 20 : -20) * (Math.floor(sparkle / 2) + 1)],
                        y: [0, (sparkle < 2 ? -20 : 20) * (sparkle % 2 + 1)],
                        scale: [0, 1]
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut"
                      }}
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            May these wishes come true for you in the coming year. You deserve all the happiness in the world.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}