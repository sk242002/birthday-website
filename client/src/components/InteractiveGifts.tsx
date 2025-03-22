import { motion } from "framer-motion";
import GiftCard from "./GiftCard";

interface Gift {
  id: number;
  icon: string;
  title: string;
  message: string;
  color: string;
}

interface InteractiveGiftsProps {
  gifts: Gift[];
}

export default function InteractiveGifts({ gifts }: InteractiveGiftsProps) {
  return (
    <motion.section
      className="relative z-10 max-w-4xl mx-auto px-4 py-10 mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="font-['Dancing_Script'] text-3xl md:text-4xl text-pastel-yellow text-center mb-10">
        Your Special Gifts
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gifts.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </motion.section>
  );
}
