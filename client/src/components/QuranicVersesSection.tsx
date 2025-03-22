import { motion } from "framer-motion";

interface QuranicVersesSectionProps {
  name: string;
}

export default function QuranicVersesSection({ name }: QuranicVersesSectionProps) {
  const verses = [
    {
      id: 1,
      arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
      translation: "My Lord, have mercy upon them as they brought me up [when I was] small.",
      reference: "Surah Al-Isra 17:24",
    },
    {
      id: 2,
      arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      translation: "And say, 'My Lord, increase me in knowledge.'",
      reference: "Surah Ta-Ha 20:114",
    },
    {
      id: 3,
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Indeed, with hardship comes ease.",
      reference: "Surah Ash-Sharh 94:6",
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
          Inspirational Verses for {name}
        </h2>
        
        <p className="text-lg mb-10 text-pink-800">
          May these beautiful words guide you and bring you peace throughout your new year.
        </p>

        <div className="space-y-10">
          {verses.map((verse, index) => (
            <motion.div
              key={verse.id}
              className="bg-white/20 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-right mb-4">
                <p className="text-2xl md:text-3xl text-purple-900 font-arabic leading-loose">
                  {verse.arabic}
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-pink-900 italic mb-2">
                "{verse.translation}"
              </p>
              
              <p className="text-sm text-purple-700 font-medium">
                {verse.reference}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}