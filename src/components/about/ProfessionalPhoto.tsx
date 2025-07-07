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
      <div className="pixel-fade-in">
        {/* CRT Monitor Frame */}
        <div className="card-crt card-terminal p-4" style={{ backgroundColor: 'var(--cosmic-indigo)' }}>
          {/* Terminal Header */}
          <div className="border-pixel border-stellar-cyan bg-void-black p-2 mb-4 font-body text-xs">
            <div className="flex justify-between items-center">
              <span className="text-quasar-yellow">PHOTO_VIEWER.exe</span>
              <span className="text-stellar-cyan">READY_</span>
            </div>
          </div>

          {/* Photo Container */}
          <div className="relative aspect-square bg-void-black border-pixel-thick border-asteroid-grey overflow-hidden">
            {src && !imageError ? (
              <>
                {/* Loading State */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loading-bar-pixel w-32 h-4">
                      <div className="text-xs text-terminal text-center mt-2">
                        LOADING IMAGE...
                      </div>
                    </div>
                  </div>
                )}

                {/* Actual Image */}
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ imageRendering: 'pixelated' }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  quality={60} // Reduce quality for more pixelated look
                />

                {/* Scanline Overlay */}
                {imageLoaded && (
                  <div className="absolute inset-0 scanlines pointer-events-none" />
                )}
              </>
            ) : (
              /* Fallback/Error State */
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="font-display text-4xl mb-4 text-asteroid-grey">
                  ▢
                </div>
                <div className="font-body text-sm text-asteroid-grey">
                  {imageError ? 'IMAGE_NOT_FOUND' : 'NO_IMAGE_LOADED'}
                </div>
                <div className="font-body text-xs text-stellar-cyan mt-2">
                  &gt; Check file path
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="border-pixel border-stellar-cyan bg-void-black p-2 mt-4 font-body text-xs">
            <div className="flex justify-between items-center">
              <span className="text-asteroid-grey">
                STATUS: {imageLoaded ? 'LOADED' : imageError ? 'ERROR' : 'LOADING'}
              </span>
              <span className="text-stellar-cyan">
                RES: {imageLoaded ? '512x512' : 'UNKNOWN'}
              </span>
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute -top-2 -left-2 font-display text-stellar-cyan text-xs">
          ┌─
        </div>
        <div className="absolute -top-2 -right-2 font-display text-stellar-cyan text-xs">
          ─┐
        </div>
        <div className="absolute -bottom-2 -left-2 font-display text-stellar-cyan text-xs">
          └─
        </div>
        <div className="absolute -bottom-2 -right-2 font-display text-stellar-cyan text-xs">
          ─┘
        </div>
      </div>
    </div>
  );
}