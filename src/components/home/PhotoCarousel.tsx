"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/hero/linkdin.jpeg",
    alt: "Professional headshot"
  },
  {
    src: "/hero/presentation.jpg",
    alt: "Conference presentation"
  },
  {
    src: "/hero/capngown.jpeg",
    alt: "Graduation day photo"
  }
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 5000);
    };

    if (!isPaused) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Photos */}
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Ken Burns effect container */}
            <div className={`absolute inset-0 ${
              index === currentIndex ? "animate-ken-burns" : ""
            }`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 bg-moonlight-gray" 
                : "bg-moonlight-gray/40 hover:bg-moonlight-gray/60"
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}