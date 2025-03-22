import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    
    // Scroll to the selected photo
    if (scrollRef.current) {
      const galleryItems = scrollRef.current.querySelectorAll(".gallery-slide");
      if (galleryItems[index]) {
        galleryItems[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  };

  // Handle scroll events to update the active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < photos.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Array of pastel color classes for alternating photo captions
  const pastelColors = [
    "bg-pastel-pink/20 text-pastel-pink",
    "bg-pastel-purple/20 text-pastel-purple",
    "bg-pastel-blue/20 text-pastel-blue",
    "bg-pastel-mint/20 text-pastel-mint",
    "bg-pastel-yellow/20 text-pastel-yellow"
  ];

  return (
    <motion.section
      className="relative z-10 max-w-6xl mx-auto px-4 py-8 mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="font-['Dancing_Script'] text-3xl md:text-4xl text-pastel-yellow text-center mb-8">
        Our Beautiful Memories
      </h2>
      
      <div 
        ref={scrollRef}
        className="gallery-container custom-scrollbar flex overflow-x-auto pb-6 space-x-4 scrollbar-thin scrollbar-thumb-pastel-pink/70 scrollbar-track-white/10"
        onScroll={handleScroll}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="gallery-slide flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-64 object-cover"
            />
            <div className={`p-3 backdrop-blur-sm ${pastelColors[index % pastelColors.length]}`}>
              <p className="font-['Montserrat']">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {photos.map((_, index) => {
            const dotColor = index % 2 === 0 ? "bg-pastel-pink" : "bg-pastel-purple";
            return (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${dotColor} ${
                  activeIndex === index ? "opacity-100 scale-125" : "opacity-50"
                } transition-all duration-300`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
