import { motion } from "framer-motion";

interface MessageSectionProps {
  name: string;
  message: string;
  yourName: string;
}

export default function MessageSection({ name, message, yourName }: MessageSectionProps) {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-pastel-pink">
            A Special Message For You
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-pastel-pink rounded-full"></div>
          </div>
          
          <div className="text-pastel-blue text-lg leading-relaxed mb-8 whitespace-pre-line">
            {message}
          </div>
          
          <div className="text-right text-pastel-purple italic">
            <p>With love,</p>
            <p className="font-semibold mt-1">{yourName}</p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-pastel-pink text-4xl opacity-60">❝</div>
          <div className="absolute bottom-4 right-4 text-pastel-pink text-4xl opacity-60">❞</div>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pastel-pink/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pastel-purple/20 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
    </section>
  );
}