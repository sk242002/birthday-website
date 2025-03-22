import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
  const pastelColors = [
    "text-pastel-pink bg-white/5",
    "text-pastel-purple bg-white/5",
    "text-pastel-blue bg-white/5",
    "text-pastel-mint bg-white/5",
    "text-pastel-yellow bg-white/5"
  ];

  return (
    <section className="pt-24 pb-16 px-6 flex flex-col items-center justify-center text-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          className="inline-block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-8xl mb-4">🎂</div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Happy Birthday Mantasha!
        </motion.h1>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-purple mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        <motion.p
          className="text-xl md:text-2xl text-pastel-blue mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Wishing you a fantastic day filled with joy, love, and unforgettable moments!
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {["Joy", "Love", "Peace", "Success", "Happiness"].map((word, index) => (
            <span
              key={index}
              className={`inline-block px-4 py-2 rounded-full ${pastelColors[index % pastelColors.length]} border border-white/30 backdrop-blur-sm`}
            >
              {word}
            </span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-xl text-pastel-yellow"
        >
          ✨ Scroll down to explore your surprise ✨
        </motion.div>
      </motion.div>
    </section>
  );
}