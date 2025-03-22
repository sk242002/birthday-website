import { motion } from "framer-motion";

interface FooterProps {
  name: string;
  yourName: string;
}

export default function Footer({ name, yourName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-gradient-to-r from-purple-900/80 to-pink-900/80 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Happy Birthday, {name}!
          </h3>
          
          <p className="mb-6 text-white/80">
            With all my love and best wishes for an amazing year ahead.
          </p>
          
          <div className="text-lg font-semibold mb-6">
            <span className="opacity-80">Made with ❤️ by</span>{" "}
            <span className="font-bold">{yourName}</span>
          </div>
          
          <div className="text-sm opacity-60 mt-6">
            © {currentYear} | Your special birthday celebration
          </div>
        </motion.div>
      </div>
    </footer>
  );
}