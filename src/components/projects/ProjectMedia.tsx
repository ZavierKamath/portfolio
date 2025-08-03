"use client";

import React, { useState, useRef, useEffect } from "react";
import { ProjectMedia as ProjectMediaType } from "@/lib/types";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProjectMediaProps {
  media: ProjectMediaType;
  className?: string;
}

interface MediaSkeletonProps {
  className?: string;
}

function MediaSkeleton({ className = "" }: MediaSkeletonProps) {
  return (
    <div className={`loading-bar-pixel bg-shadow-purple border-2 border-stellar-cyan ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-xs text-stellar-cyan">MEDIA</span>
      </div>
    </div>
  );
}

export function ProjectMedia({ media, className = "" }: ProjectMediaProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Handle video autoplay with reduced motion consideration
  const shouldAutoplay = media.autoplay && !prefersReducedMotion;

  useEffect(() => {
    if (media.type === "video" && videoRef.current && shouldAutoplay) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, [shouldAutoplay, media.type]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  if (hasError) {
    return (
      <div className={`bg-shadow-purple border-2 border-mars-red flex items-center justify-center min-h-[200px] ${className}`}>
        <div className="text-center p-4">
          <div className="font-display text-2xl mb-2 text-mars-red">!</div>
          <div className="font-body text-xs text-asteroid-grey">MEDIA_ERROR</div>
        </div>
      </div>
    );
  }

  const containerClasses = `relative overflow-hidden border-2 border-stellar-cyan bg-void-black ${className}`;

  if (media.type === "image") {
    return (
      <div className={containerClasses}>
        {isLoading && (
          <div className="absolute inset-0 z-10">
            <MediaSkeleton className="w-full h-full" />
          </div>
        )}
        <OptimizedImage
          src={media.src}
          alt={media.alt}
          fill
          className="w-full h-full"
          objectFit="cover"
          onLoad={handleLoad}
          onError={handleError}
        />
        {/* Pixel effect overlay */}
        {!isLoading && !hasError && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="scanlines opacity-10" />
          </div>
        )}
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className={containerClasses}>
        {isLoading && (
          <div className="absolute inset-0 z-10">
            <MediaSkeleton className="w-full h-full" />
          </div>
        )}
        
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          poster={media.poster}
          autoPlay={shouldAutoplay}
          loop={media.loop}
          muted={media.muted}
          controls
          playsInline
          onLoadedData={handleLoad}
          onError={handleError}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          style={{ imageRendering: 'pixelated' }}
          aria-label={media.alt}
        >
          {/* Multiple source formats for better compatibility */}
          {media.src.endsWith('.mkv') && (
            <source src={media.src} type="video/x-matroska" />
          )}
          {media.src.endsWith('.mp4') && (
            <source src={media.src} type="video/mp4" />
          )}
          {media.src.endsWith('.webm') && (
            <source src={media.src} type="video/webm" />
          )}
          {/* Fallback: try the original source with generic video type */}
          <source src={media.src} type="video/*" />
          Your browser does not support the video format. Please try converting to MP4 for better compatibility.
        </video>

        {/* Custom play button overlay for better UX */}
        {!isPlaying && !isLoading && !hasError && (
          <button
            onClick={handleVideoToggle}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-200 group"
            aria-label="Play video"
          >
            <div className="w-16 h-16 border-2 border-stellar-cyan bg-void-black flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="font-display text-stellar-cyan text-lg">▶</span>
            </div>
          </button>
        )}

        {/* Pixel effect overlay */}
        {!isLoading && !hasError && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="scanlines opacity-10" />
          </div>
        )}

        {/* Media type indicator */}
        <div className="absolute top-2 right-2 bg-void-black border border-stellar-cyan px-2 py-1">
          <span className="font-display text-xs text-stellar-cyan">VID</span>
        </div>
      </div>
    );
  }

  return null;
}