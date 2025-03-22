import { motion } from "framer-motion";

export default function MoonBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Moon */}
      <motion.div
        className="absolute rounded-full bg-yellow-100 w-20 h-20 md:w-32 md:h-32 opacity-80"
        style={{ top: "5%", right: "10%" }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, index) => {
        const size = Math.random() * 0.5 + 0.5;
        const opacity = Math.random() * 0.5 + 0.5;
        const animationDelay = Math.random() * 5;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;

        return (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: `${size}rem`,
              height: `${size}rem`,
              left,
              top,
              opacity,
            }}
            animate={{
              opacity: [opacity, opacity * 0.5, opacity],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "easeInOut",
              delay: animationDelay,
            }}
          />
        );
      })}
    </div>
  );
}