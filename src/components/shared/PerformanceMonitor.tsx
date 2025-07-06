"use client";

import { useEffect, useRef, useState } from "react";

interface PerformanceMonitorProps {
  isVisible?: boolean;
}

export function PerformanceMonitor({ isVisible = false }: PerformanceMonitorProps) {
  const [fps, setFps] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const measureFPS = () => {
      frameCountRef.current++;

      const now = performance.now();
      if (now - lastTimeRef.current >= 1000) {
        setFps(frameCountRef.current);
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      rafRef.current = requestAnimationFrame(measureFPS);
    };

    rafRef.current = requestAnimationFrame(measureFPS);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-dark-matter/90 backdrop-blur-sm border border-stellar-blue/20 rounded-lg p-3 text-xs font-mono">
      <div className="text-moonlight-gray">
        <div>
          FPS:{" "}
          <span
            className={
              fps >= 55 ? "text-aurora-green" : fps >= 30 ? "text-warning-amber" : "text-error-red"
            }
          >
            {fps}
          </span>
        </div>
        <div>Target: 60 FPS</div>
      </div>
    </div>
  );
}
