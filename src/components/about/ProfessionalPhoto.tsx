"use client";

import { useState } from "react";
import Image from "next/image";

interface ProfessionalPhotoProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function ProfessionalPhoto({ 
  src, 
  alt = "Zavier Kamath - Professional Photo",
  className = ""
}: ProfessionalPhotoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {src && !imageError ? (
        <div className="relative">
          {/* Loading State */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-stellar-cyan text-sm">Loading...</div>
            </div>
          )}

          {/* Actual Image with direct neon border */}
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            className={`transition-opacity duration-300 hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              border: '2px solid #5B21B6',
              boxShadow: '0 0 10px rgba(91, 33, 182, 0.4), 0 0 20px rgba(91, 33, 182, 0.2), 0 0 30px rgba(91, 33, 182, 0.1)',
              objectFit: 'cover',
              aspectRatio: '1 / 1',
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
            quality={85}
          />
        </div>
      ) : (
        /* Fallback/Error State */
        <div 
          className="flex flex-col items-center justify-center text-center p-8"
          style={{
            width: '400px',
            height: '400px',
            border: '2px solid #5B21B6',
            boxShadow: '0 0 10px rgba(91, 33, 182, 0.4), 0 0 20px rgba(91, 33, 182, 0.2), 0 0 30px rgba(91, 33, 182, 0.1)',
          }}
        >
          <div className="text-4xl mb-4 text-asteroid-grey">
            📷
          </div>
          <div className="text-sm text-asteroid-grey">
            {imageError ? 'Image not found' : 'No image'}
          </div>
        </div>
      )}
    </div>
  );
}