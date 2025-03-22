import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";

export default function BalloonBackground() {
  const balloons = [
    { color: "#F8C8DC", top: "10%", left: "5%", delay: 0 },
    { color: "#FFD700", top: "15%", left: "20%", delay: 2 },
    { color: "#FF5757", top: "5%", right: "15%", delay: 0 },
    { color: "#9D65C9", top: "20%", right: "5%", delay: 2 },
    { color: "#F8C8DC", bottom: "20%", left: "10%", delay: 0 },
    { color: "#FFD700", bottom: "25%", right: "10%", delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute z-1 opacity-80"
          style={{
            top: balloon.top,
            left: balloon.left,
            right: balloon.right,
            bottom: balloon.bottom,
            color: balloon.color,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "easeInOut",
            delay: balloon.delay,
          }}
        >
          <FaBirthdayCake className="text-4xl md:text-5xl" />
        </motion.div>
      ))}
    </div>
  );
}
