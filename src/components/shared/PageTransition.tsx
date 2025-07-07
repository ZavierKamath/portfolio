"use client";

import { usePathname } from "next/navigation";
import { useAccessibility } from "@/hooks/useAccessibility";
import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { reducedMotion } = useAccessibility();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayChildren(children);
      return;
    }

    setIsTransitioning(true);
    
    // Start exit animation
    const exitTimer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 250); // Half of transition duration

    return () => clearTimeout(exitTimer);
  }, [pathname, children, reducedMotion]);

  if (reducedMotion) {
    return <main className="pixel-page-content">{children}</main>;
  }

  return (
    <main 
      className={`pixel-page-content transition-all duration-500 ${
        isTransitioning ? 'pixel-page-exit' : 'pixel-page-enter'
      }`}
      style={{
        transition: 'all 0.5s steps(8)'
      }}
    >
      {displayChildren}
    </main>
  );
}