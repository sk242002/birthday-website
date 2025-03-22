import { useState, useEffect } from "react";
import BalloonBackground from "@/components/BalloonBackground";
import Header from "@/components/Header";
import MainMessage from "@/components/MainMessage";
import PhotoGallery from "@/components/PhotoGallery";
import InteractiveGifts from "@/components/InteractiveGifts";
import CountdownTimer from "@/components/CountdownTimer";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { photos, gifts } from "@/lib/data";

// Set this to your girlfriend's birthday
const BIRTHDAY_DATE = new Date("2023-10-15"); // Example date

export default function Home() {
  const [isBirthdayInFuture, setIsBirthdayInFuture] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    // Check if birthday is in the future
    const today = new Date();
    // Create this year's birthday
    const thisYearBirthday = new Date(
      today.getFullYear(),
      BIRTHDAY_DATE.getMonth(),
      BIRTHDAY_DATE.getDate()
    );
    
    // If this year's birthday already passed, check next year's
    if (today > thisYearBirthday) {
      thisYearBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    setIsBirthdayInFuture(today < thisYearBirthday);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Happy Birthday, My Love!',
        text: 'I made this special birthday page just for you!',
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied! Share this with your loved ones.');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <motion.div 
      className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#F8C8DC] to-[#9D65C9]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BalloonBackground />
      <Header />
      <MainMessage />
      <PhotoGallery photos={photos} />
      <InteractiveGifts gifts={gifts} />
      {isBirthdayInFuture && <CountdownTimer targetDate={BIRTHDAY_DATE} />}
      <MusicPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />
      <Footer onShare={handleShare} />
    </motion.div>
  );
}
