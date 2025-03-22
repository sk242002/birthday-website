import { motion } from "framer-motion";
import { FaHeart, FaStar, FaGift, FaMagic } from "react-icons/fa";

interface Wish {
  icon: string;
  text: string;
}

interface WishSectionProps {
  wishes: Wish[];
}

export default function WishSection({ wishes }: WishSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <FaHeart className="text-pink-500" />;
      case "star":
        return <FaStar className="text-yellow-500" />;
      case "gifts":
        return <FaGift className="text-purple-500" />;
      case "magic":
        return <FaMagic className="text-blue-500" />;
      default:
        return <FaStar className="text-yellow-500" />;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Birthday Wishes
        </motion.h2>

        <motion.ul
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {wishes.map((wish, index) => (
            <motion.li
              key={index}
              variants={item}
              className="flex items-start space-x-4 bg-white/20 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-2xl mt-1">{getIcon(wish.icon)}</div>
              <p className="text-lg text-purple-900">{wish.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}