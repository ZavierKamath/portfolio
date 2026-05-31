"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
    <div className={`loading-bar-pixel ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-xs text-stellar-cyan">IMG</span>
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
  quality = 75,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const onLoadRef = useRef(onLoad);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onLoadRef.current = onLoad;
    onErrorRef.current = onError;
  }, [onLoad, onError]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoadRef.current?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onErrorRef.current?.();
  };

  useEffect(() => {
    let isActive = true;

    setIsLoading(true);
    setHasError(false);

    const preloadImage = new window.Image();
    preloadImage.onload = () => {
      if (!isActive) return;
      setIsLoading(false);
      onLoadRef.current?.();
    };
    preloadImage.onerror = () => {
      if (!isActive) return;
      setIsLoading(false);
      setHasError(true);
      onErrorRef.current?.();
    };
    preloadImage.src = src;

    return () => {
      isActive = false;
    };
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`bg-shadow-purple border-pixel border-mars-red flex items-center justify-center ${className}`}
      >
        <div className="text-center p-4">
          <div className="font-display text-2xl mb-2 text-mars-red">!</div>
          <div className="font-body text-xs text-asteroid-grey">IMG_ERROR</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton className="w-full h-full" />
        </div>
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        style={{
          objectFit,
          imageRendering: "pixelated", // Add pixel rendering
        }}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Pixel effect overlay when loaded */}
      {!isLoading && !hasError && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="scanlines opacity-20" />
        </div>
      )}
    </div>
  );
}
