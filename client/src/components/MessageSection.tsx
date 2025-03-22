import { motion } from "framer-motion";

interface MessageSectionProps {
  name: string;
  message: string;
  yourName: string;
}

export default function MessageSection({ name, message, yourName }: MessageSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Split message by sentence ending (., !, ?)
  const sentences = message.match(/[^.!?]+[.!?]+/g) || [message];

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
          A Special Message For {name}
        </h2>

        <motion.div
          className="message-container text-lg md:text-xl space-y-4 text-pink-900"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {sentences.map((sentence, index) => (
            <motion.p 
              key={index} 
              variants={item}
              className="leading-relaxed"
            >
              {sentence}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-right text-xl text-purple-800 font-script"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          With love,<br />
          {yourName}
        </motion.div>
      </motion.div>
    </section>
  );
}