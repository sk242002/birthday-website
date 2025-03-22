import { motion } from "framer-motion";

interface QuranicVersesSectionProps {
  name: string;
}

export default function QuranicVersesSection({ name }: QuranicVersesSectionProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Blessings & Wisdom
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Some beautiful verses and blessings for your special day.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {/* First verse */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="font-arabic text-2xl md:text-3xl text-center mb-6 text-white leading-loose" dir="rtl">
              رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي
            </div>
            <div className="text-center text-white/80 italic">
              "My Lord, expand for me my chest and ease for me my task."
              <div className="mt-2 text-sm">(Surah Taha, 20:25-26)</div>
            </div>
          </motion.div>
          
          {/* Second verse */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="font-arabic text-2xl md:text-3xl text-center mb-6 text-white leading-loose" dir="rtl">
              فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا
            </div>
            <div className="text-center text-white/80 italic">
              "For indeed, with hardship will be ease. Indeed, with hardship will be ease."
              <div className="mt-2 text-sm">(Surah Ash-Sharh, 94:5-6)</div>
            </div>
          </motion.div>
          
          {/* Birthday blessing */}
          <motion.div
            className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Special Birthday Dua for {name}
              </h3>
              <div className="font-arabic text-xl md:text-2xl text-center mb-4 text-white leading-loose" dir="rtl">
                بارك الله لك في عمرك وأحسن عملك وغفر ذنبك
              </div>
              <div className="text-center text-white/90 italic">
                "May Allah bless you with a long life, good deeds, and forgiveness."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 opacity-10 text-8xl">✨</div>
      <div className="absolute bottom-0 left-0 opacity-10 text-8xl">✨</div>
    </section>
  );
}