import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Get this year's birthday
      const thisYearBirthday = new Date(
        now.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate()
      );
      
      // If today's date is past this year's birthday, use next year's birthday
      if (now > thisYearBirthday) {
        thisYearBirthday.setFullYear(now.getFullYear() + 1);
      }
      
      const difference = thisYearBirthday.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <motion.section
      className="relative z-10 max-w-3xl mx-auto px-6 py-8 mb-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <h2 className="font-['Dancing_Script'] text-3xl text-[#FF5757] text-center mb-6">
        Counting Down to Your Special Day
      </h2>
      
      <div className="flex justify-center space-x-4 md:space-x-8">
        <div className="text-center">
          <div className="bg-[#F8C8DC] rounded-lg p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
            <span className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white" id="days">
              {formatNumber(timeLeft.days)}
            </span>
          </div>
          <p className="font-['Montserrat'] text-gray-700 mt-2">Days</p>
        </div>
        
        <div className="text-center">
          <div className="bg-[#FF5757] rounded-lg p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
            <span className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white" id="hours">
              {formatNumber(timeLeft.hours)}
            </span>
          </div>
          <p className="font-['Montserrat'] text-gray-700 mt-2">Hours</p>
        </div>
        
        <div className="text-center">
          <div className="bg-[#9D65C9] rounded-lg p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
            <span className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white" id="minutes">
              {formatNumber(timeLeft.minutes)}
            </span>
          </div>
          <p className="font-['Montserrat'] text-gray-700 mt-2">Minutes</p>
        </div>
        
        <div className="text-center">
          <div className="bg-[#FFD700] rounded-lg p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
            <span className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white" id="seconds">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
          <p className="font-['Montserrat'] text-gray-700 mt-2">Seconds</p>
        </div>
      </div>
    </motion.section>
  );
}
