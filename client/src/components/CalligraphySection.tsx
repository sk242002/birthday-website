import { motion } from "framer-motion";
import { useState } from "react";

interface CalligraphySectionProps {
  name: string;
}

export default function CalligraphySection({ name }: CalligraphySectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const calligraphyStyles = [
    {
      id: 1,
      name: "Arabic",
      font: "font-arabic",
      sample: `${name}, مبارك جشن پیدائش`,
      description: "The elegant flowing style of Arabic calligraphy",
    },
    {
      id: 2,
      name: "Devanagari",
      font: "font-devanagari",
      sample: `${name}, जन्मदिन मुबारक हो`,
      description: "The beautiful curves of Devanagari script",
    },
    {
      id: 3,
      name: "Cursive",
      font: "font-cursive",
      sample: `Happy Birthday, ${name}`,
      description: "Flowing western calligraphy with graceful connections",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 bg-white/10 backdrop-blur-sm rounded-3xl max-w-4xl mx-auto my-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-800">
          Calligraphy for You
        </h2>
        
        <p className="text-lg mb-8 text-pink-800">
          Since you love calligraphy, here are some birthday wishes written in different calligraphic styles.
        </p>

        <div className="flex justify-center mb-8 space-x-2">
          {calligraphyStyles.map((style, index) => (
            <button
              key={style.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === index 
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" 
                  : "bg-white/20 text-purple-800 hover:bg-white/40"
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/30 p-8 rounded-2xl"
        >
          <div 
            className={`text-4xl md:text-6xl mb-4 text-purple-900 ${
              calligraphyStyles[activeTab].font === "font-cursive" 
                ? "font-serif italic" 
                : calligraphyStyles[activeTab].font === "font-arabic"
                  ? "font-serif" 
                  : "font-sans"
            }`}
          >
            {calligraphyStyles[activeTab].sample}
          </div>
          <p className="text-pink-800 mt-4">
            {calligraphyStyles[activeTab].description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}