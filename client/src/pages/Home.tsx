import { motion } from "framer-motion";
import { birthdayConfig } from "../lib/birthday-config";
import AudioPlayer from "../components/AudioPlayer";
import MoonBackground from "../components/MoonBackground";
import HeroSection from "../components/HeroSection";
import MessageSection from "../components/MessageSection";
import CakeAnimation from "../components/CakeAnimation";
import GiftSection from "../components/GiftSection";
import QuranicVersesSection from "../components/QuranicVersesSection";
import WishSection from "../components/WishSection";
import FlowerSection from "../components/FlowerSection";
import Footer from "../components/Footer";
import BalloonBackground from "../components/BalloonBackground";
import GiftBoxSection from "../components/GiftBoxSection"; // Added import


export default function Home() {
  return (
    <motion.div className="min-h-screen starry-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <MoonBackground />
      <BalloonBackground />
      <AudioPlayer url={birthdayConfig.backgroundMusicUrl} />
      <div className="relative z-10">
        <HeroSection name={birthdayConfig.girlfriend.name} />
        <div className="section-moon">
          <MessageSection 
            name={birthdayConfig.girlfriend.name} 
            message={birthdayConfig.personalMessage + "\nA small gift from Saif: \nMay your birthday sparkle with moments of laughter, love, and cherished memories. Your friendship means the world to me. Stay blessed! 🎁✨"}
            yourName={birthdayConfig.yourName + " & Saif"}
          />
        </div>
        <GiftBoxSection /> {/* Replaced CalligraphySection */}
        <FlowerSection /> {/* Added FlowerSection */}
        <CakeAnimation />
        <GiftSection gifts={birthdayConfig.gifts} />
        <div className="section-moon">
          <QuranicVersesSection name={birthdayConfig.girlfriend.name} />
        </div>
        <WishSection wishes={birthdayConfig.wishes} />
        <Footer 
          name={birthdayConfig.girlfriend.name}
          yourName={birthdayConfig.yourName}
        />
      </div>
    </motion.div>
  );
}