import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
      audioRef.current.loop = true;
    }

    // Control playback
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-20"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <button 
        onClick={onToggle}
        className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg flex items-center transition-all duration-300 hover:bg-white/30 border border-white/30"
      >
        <FaMusic className="text-pastel-purple mr-2" />
        <span className="font-['Montserrat'] text-pastel-pink">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>
      </button>
    </motion.div>
  );
}
