import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { formatTimeDisplay } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Create this year's birthday
      const thisYearBirthday = new Date(
        now.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate()
      );
      
      // If this year's birthday already passed, use next year's
      if (now > thisYearBirthday) {
        thisYearBirthday.setFullYear(now.getFullYear() + 1);
      }
      
      // Check if birthday is today (ignoring the time)
      const isToday = 
        now.getDate() === targetDate.getDate() && 
        now.getMonth() === targetDate.getMonth();
      
      setIsBirthdayToday(isToday);
      
      // Calculate the time difference
      const difference = thisYearBirthday.getTime() - now.getTime();
      
      if (difference <= 0) {
        // It's the birthday!
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      // Calculate days, hours, minutes, seconds
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Cleanup
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (isBirthdayToday) {
    return (
      <motion.div
        className="py-16 px-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-pink-600">
          🎉 Happy Birthday! 🎉
        </h2>
        <p className="text-xl md:text-2xl text-purple-800">
          Today is your special day! Enjoy every moment!
        </p>
      </motion.div>
    );
  }

  return (
    <section className="py-16 px-6 text-center max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-purple-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Countdown to the Big Day
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            className="w-[80px] md:w-[120px] bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
              {formatTimeDisplay(block.value)}
            </div>
            <div className="text-sm md:text-base text-purple-800 font-medium">
              {block.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.p
        className="mt-10 text-lg text-purple-800 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Getting ready to celebrate your amazing day! The countdown has begun!
      </motion.p>
    </section>
  );
}