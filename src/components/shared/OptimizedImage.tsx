"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

interface ImageSkeletonProps {
  className?: string;
}

function ImageSkeleton({ className = "" }: ImageSkeletonProps) {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-space-dark via-moonlight-gray/10 to-space-dark ${className}`}>
      <div className="flex items-center justify-center h-full">
        <div className="text-moonlight-gray/40 text-4xl">🖼️</div>
      </div>
    </div>
  );
}

interface ImageErrorProps {
  className?: string;
  alt: string;
}

function ImageError({ className = "", alt }: ImageErrorProps) {
  return (
    <div className={`bg-space-dark/50 border-2 border-dashed border-moonlight-gray/20 flex items-center justify-center ${className}`}>
      <div className="text-center p-4">
        <div className="text-moonlight-gray/40 text-4xl mb-2">📷</div>
        <p className="text-moonlight-gray/60 text-sm">{alt}</p>
        <p className="text-moonlight-gray/40 text-xs mt-1">Image not available</p>
      </div>
    </div>
  );
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  objectFit = "cover",
  placeholder = "empty",
  blurDataURL,
  sizes,
  quality = 85,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoad = () => {
    setLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    onError?.();
  };

  // Generate a simple blur data URL for better loading experience
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;
    
    // Simple 1x1 transparent pixel
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyBYWVq5HFqXjbkQjP5jmI6Rm8KAwF+o5tOwq/1fVVVUVVVVVVVVVX//9k=";
  };

  if (!mounted) {
    return <ImageSkeleton className={className} />;
  }

  if (error) {
    return <ImageError className={className} alt={alt} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton className="w-full h-full" />
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={placeholder === "blur" ? generateBlurDataURL() : undefined}
          className={`transition-opacity duration-300 ${
            objectFit === "cover" ? "object-cover" :
            objectFit === "contain" ? "object-contain" :
            objectFit === "fill" ? "object-fill" :
            objectFit === "scale-down" ? "object-scale-down" :
            "object-none"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            opacity: loading ? 0 : 1
          }}
        />
      </motion.div>

      {/* Loading overlay for better UX */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/10 via-nebula-purple/10 to-starlight-yellow/10 flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-cosmic-blue text-2xl"
          >
            ⭐
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}