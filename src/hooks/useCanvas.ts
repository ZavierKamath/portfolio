"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseCanvasOptions {
  width?: number;
  height?: number;
  dpr?: number; // Device pixel ratio
}

interface UseCanvasReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  context: CanvasRenderingContext2D | null;
  size: { width: number; height: number };
}

export function useCanvas(
  draw: (context: CanvasRenderingContext2D, deltaTime: number) => void,
  options: UseCanvasOptions = {}
): UseCanvasReturn {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const frameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);
  const isActiveRef = useRef(true);
  const drawRef = useRef(draw);
  
  // Update draw function ref without causing re-renders
  drawRef.current = draw;

  // Initialize canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setContext(ctx);
  }, []);

  // Handle canvas sizing
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = options.width || window.innerWidth;
    const height = options.height || window.innerHeight;
    const dpr = options.dpr || window.devicePixelRatio || 1;

    // Set display size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Set actual canvas size with device pixel ratio
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Scale context to ensure correct drawing operations
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    setSize({ width, height });
  }, [options.width, options.height, options.dpr]);

  // Handle window resize with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateCanvasSize, 100);
    };

    updateCanvasSize(); // Initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [updateCanvasSize]);

  // Animation loop
  const animate = useCallback(
    (currentTime: number) => {
      if (!context || !isActiveRef.current) return;

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Cap delta time to prevent large jumps
      const cappedDeltaTime = Math.min(deltaTime, 33.33); // Max 30 FPS minimum

      drawRef.current(context, cappedDeltaTime);

      frameRef.current = requestAnimationFrame(animate);
    },
    [context]
  );

  // Start/stop animation loop
  useEffect(() => {
    if (!context) return;

    lastTimeRef.current = performance.now();
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [context, animate]);

  // Handle tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden;

      if (isActiveRef.current && context) {
        // Resume animation
        lastTimeRef.current = performance.now();
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Pause animation
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [context, animate]);

  return {
    canvasRef,
    context,
    size,
  };
}
