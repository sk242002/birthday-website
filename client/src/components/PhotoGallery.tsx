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

  return (
    <motion.section
      className="relative z-10 max-w-6xl mx-auto px-4 py-8 mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="font-['Dancing_Script'] text-3xl md:text-4xl text-white text-center mb-8">
        Our Beautiful Memories
      </h2>
      
      <div 
        ref={scrollRef}
        className="gallery-container custom-scrollbar flex overflow-x-auto pb-6 space-x-4 scrollbar-thin scrollbar-thumb-white/70 scrollbar-track-white/30"
        onScroll={handleScroll}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="gallery-slide flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-64 object-cover"
            />
            <div className="p-3 bg-white">
              <p className="font-['Montserrat'] text-gray-800">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white ${
                activeIndex === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
