import { motion } from "framer-motion";
import { useState } from "react";
import { birthdayConfig } from "../lib/birthday-config";
import AudioPlayer from "../components/AudioPlayer";
import MoonBackground from "../components/MoonBackground";
import HeroSection from "../components/HeroSection";
import CountdownTimer from "../components/CountdownTimer";
import MessageSection from "../components/MessageSection";
import CalligraphySection from "../components/CalligraphySection";
import CakeAnimation from "../components/CakeAnimation";
import GiftSection from "../components/GiftSection";
import QuranicVersesSection from "../components/QuranicVersesSection";
import WishSection from "../components/WishSection";
import FlowerSection from "../components/FlowerSection";
import Footer from "../components/Footer";
import BalloonBackground from "../components/BalloonBackground";

export default function Home() {
  const [showCountdown] = useState(true);

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
        {showCountdown && (
          <CountdownTimer targetDate={birthdayConfig.girlfriend.birthdayDate} />
        )}
        <div className="section-moon">
          <MessageSection 
            name={birthdayConfig.girlfriend.name} 
            message={birthdayConfig.personalMessage}
            yourName={birthdayConfig.yourName}
          />
        </div>
        <div className="section-moon">
          <CalligraphySection name={birthdayConfig.girlfriend.name} />
        </div>
        <CakeAnimation />
        <GiftSection gifts={birthdayConfig.gifts} />
        <div className="section-moon">
          <QuranicVersesSection name={birthdayConfig.girlfriend.name} />
        </div>
        <WishSection wishes={birthdayConfig.wishes} />
        <FlowerSection />
        <Footer 
          name={birthdayConfig.girlfriend.name}
          yourName={birthdayConfig.yourName}
        />
      </div>
    </motion.div>
  );
}
