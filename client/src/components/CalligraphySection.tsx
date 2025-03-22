import { motion } from "framer-motion";

interface CalligraphySectionProps {
  name: string;
}

export default function CalligraphySection({ name }: CalligraphySectionProps) {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pastel-purple">
            Your Art Inspires
          </h2>
          <p className="text-lg text-pastel-blue max-w-2xl mx-auto">
            Your passion for calligraphy and art brings beauty into this world. Here's a special calligraphy celebration for you.
          </p>
        </motion.div>
        
        {/* English Calligraphy */}
        <motion.div
          className="mb-16 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl text-pastel-pink mb-6 text-center">
            Celebrating {name}'s creativity
          </h3>
          <div className="font-script text-4xl md:text-6xl text-center text-pastel-yellow mb-6 leading-relaxed">
            Happy Birthday
          </div>
          <div className="font-script text-3xl md:text-4xl text-center text-pastel-mint italic">
            May your creativity flourish!
          </div>
        </motion.div>
        
        {/* Arabic Calligraphy */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl text-pastel-pink mb-6 text-center">
            Arabic Calligraphy
          </h3>
          <div className="font-arabic text-4xl md:text-6xl text-center text-pastel-yellow mb-6 leading-relaxed" dir="rtl">
            عيد ميلاد سعيد
          </div>
          <div className="font-arabic text-2xl md:text-3xl text-center text-pastel-blue italic" dir="rtl">
            كل عام وأنت بخير
          </div>
        </motion.div>
      </div>
      
      {/* Decorative art supplies */}
      <motion.div
        className="absolute -top-10 -right-10 text-6xl text-pastel-purple opacity-40 rotate-12"
        initial={{ opacity: 0, rotate: 0, x: 20 }}
        whileInView={{ opacity: 0.4, rotate: 12, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        ✒️
      </motion.div>
      
      <motion.div
        className="absolute -bottom-10 -left-10 text-6xl text-pastel-pink opacity-40 -rotate-12"
        initial={{ opacity: 0, rotate: 0, x: -20 }}
        whileInView={{ opacity: 0.4, rotate: -12, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        🖌️
      </motion.div>
    </section>
  );
}