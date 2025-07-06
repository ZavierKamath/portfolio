"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useCanvas } from "@/hooks/useCanvas";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Star {
  x: number;
  y: number;
  z: number; // Depth for parallax (0-1)
  size: number;
  baseOpacity: number;
  twinklePhase: number;
  twinkleSpeed: number;
  velocityX: number;
  velocityY: number;
}

interface StarfieldCanvasProps {
  className?: string;
  particleCount?: {
    mobile: number;
    desktop: number;
  };
}

export function StarfieldCanvas({
  className = "",
  particleCount = { mobile: 100, desktop: 150 },
}: StarfieldCanvasProps) {
  const prefersReducedMotion = useReducedMotion();
  const starsRef = useRef<Star[]>([]);
  const timeRef = useRef(0);

  // Determine if mobile based on screen width
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);

  // Get particle count based on device - memoize to prevent rerenders
  const targetParticleCount = useMemo(() => {
    return isMobile ? particleCount.mobile : particleCount.desktop;
  }, [isMobile, particleCount.mobile, particleCount.desktop]);

  // Initialize stars
  const initializeStars = useCallback(
    (width: number, height: number) => {
      const stars: Star[] = [];

      for (let i = 0; i < targetParticleCount; i++) {
        const z = Math.random(); // Depth 0-1
        const size = 0.5 + z * 1.5; // Larger stars are closer (0.5-2px)

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          size,
          baseOpacity: 0.3 + z * 0.6, // Closer stars are brighter
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.5 + Math.random() * 1.5, // 0.5-2 Hz
          velocityX: (Math.random() - 0.5) * 0.2 * z, // Closer stars move faster
          velocityY: (Math.random() - 0.5) * 0.1 * z + 0.05, // Slight upward drift
        });
      }

      starsRef.current = stars;
    },
    [targetParticleCount]
  );

  // Animation draw function
  const draw = useCallback(
    (context: CanvasRenderingContext2D, deltaTime: number) => {
      const { width, height } = context.canvas;

      // Convert canvas dimensions back to logical pixels
      const logicalWidth = width / (window.devicePixelRatio || 1);
      const logicalHeight = height / (window.devicePixelRatio || 1);

      // Clear canvas
      context.clearRect(0, 0, logicalWidth, logicalHeight);

      // Initialize stars if not done or count changed
      if (starsRef.current.length !== targetParticleCount) {
        initializeStars(logicalWidth, logicalHeight);
      }

      // Update time
      timeRef.current += deltaTime * 0.001; // Convert to seconds

      // Set star color (using design system color)
      context.fillStyle = "#60A5FA"; // nebula-blue

      // Draw and update stars
      starsRef.current.forEach((star) => {
        // Update position if motion is not reduced
        if (!prefersReducedMotion) {
          star.x += star.velocityX * deltaTime * 0.1;
          star.y += star.velocityY * deltaTime * 0.1;

          // Wrap around screen edges
          if (star.x < -star.size) star.x = logicalWidth + star.size;
          if (star.x > logicalWidth + star.size) star.x = -star.size;
          if (star.y < -star.size) star.y = logicalHeight + star.size;
          if (star.y > logicalHeight + star.size) star.y = -star.size;
        }

        // Calculate twinkling opacity
        let opacity = star.baseOpacity;
        if (!prefersReducedMotion) {
          const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinklePhase);
          opacity += twinkle * 0.3 * star.baseOpacity;
        } else {
          // Very subtle opacity variation for reduced motion
          const subtleTwinkle = Math.sin(timeRef.current * 0.5 + star.twinklePhase);
          opacity += subtleTwinkle * 0.1 * star.baseOpacity;
        }

        // Clamp opacity
        opacity = Math.max(0, Math.min(1, opacity));

        // Set opacity and draw star
        context.globalAlpha = opacity;

        // Draw star as a small rectangle (faster than arc)
        const starSize = star.size;
        context.fillRect(
          Math.floor(star.x - starSize / 2),
          Math.floor(star.y - starSize / 2),
          Math.ceil(starSize),
          Math.ceil(starSize)
        );
      });

      // Reset global alpha
      context.globalAlpha = 1;
    },
    [targetParticleCount, initializeStars, prefersReducedMotion]
  );

  const { canvasRef, size } = useCanvas(draw);

  // Handle window resize to reinitialize stars
  useEffect(() => {
    if (size.width > 0 && size.height > 0) {
      initializeStars(size.width, size.height);
    }
  }, [size.width, size.height, initializeStars]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: -1,
        background: "linear-gradient(to bottom, rgba(0,8,20,0.95) 0%, rgba(0,8,20,1) 100%)",
      }}
      aria-hidden="true"
    />
  );
}
