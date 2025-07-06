"use client";

import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

interface UseScrollDirectionReturn {
  scrollDirection: ScrollDirection;
  isAtTop: boolean;
}

// Throttle function to limit scroll event frequency
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function useScrollDirection(): UseScrollDirectionReturn {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollY > lastScrollY.current ? "down" : "up";
      const atTop = scrollY < 10; // Small threshold to account for minor scroll variations

      // Only update if direction actually changed or if we're crossing the top threshold
      if (direction !== scrollDirection || (atTop && !isAtTop) || (!atTop && isAtTop)) {
        setScrollDirection(direction);
        setIsAtTop(atTop);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    const onScroll = throttle(() => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    }, 100);

    // Set initial values
    const initialScrollY = window.pageYOffset || document.documentElement.scrollTop;
    lastScrollY.current = initialScrollY;
    setIsAtTop(initialScrollY < 10);

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollDirection, isAtTop]);

  return { scrollDirection, isAtTop };
}
