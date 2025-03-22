import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
  return (
    <section className="py-20 px-6 text-center relative z-10">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Happy Birthday {name}!
        </h1>
        <motion.div
          className="text-2xl md:text-3xl text-pink-800 mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ✨ Celebrating your special day with all my love ✨
        </motion.div>
      </motion.div>
    </section>
  );
}