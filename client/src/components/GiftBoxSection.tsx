
import { motion } from "framer-motion";

export default function GiftBoxSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="text-4xl mb-8">🎁 📦 🎀</div>
        <p className="text-2xl font-script text-pastel-pink mb-6">
          A Special Gift For You
        </p>
        <div className="text-lg text-pastel-purple">
          May this birthday bring you countless moments of joy and happiness
        </div>
      </motion.div>
      
      <motion.div
        className="absolute -right-10 top-0 text-6xl"
        initial={{ x: 100, rotate: 0 }}
        animate={{ x: 0, rotate: -15 }}
        transition={{ duration: 1 }}
      >
        🎁
      </motion.div>
      
      <motion.div
        className="absolute -left-10 bottom-0 text-6xl"
        initial={{ x: -100, rotate: 0 }}
        animate={{ x: 0, rotate: 15 }}
        transition={{ duration: 1 }}
      >
        🎀
      </motion.div>
    </section>
  );
}
