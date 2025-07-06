"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const floatingVariants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity
    }
  }
};

const starsVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Floating Astronaut */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="mb-8 relative"
          >
            <div className="text-8xl mb-4">🚀</div>
            
            {/* Floating Stars */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={starsVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute text-starlight-yellow text-2xl"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${10 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Lost in Space</h2>
            <p className="text-body-lg text-moonlight-gray/80 mb-6">
              The page you&apos;re looking for has drifted into the cosmic void.
              Let&apos;s navigate you back to familiar territory.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <span>🏠</span>
              <span>Return Home</span>
            </Link>
            
            <Link
              href="/research"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>🔬</span>
              <span>View Research</span>
            </Link>
            
            <Link
              href="/about"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>👨‍🚀</span>
              <span>About Me</span>
            </Link>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 card border-cosmic-blue/30"
          >
            <div className="text-cosmic-blue text-4xl mb-3">🌌</div>
            <h3 className="text-lg font-semibold mb-2">Fun Space Fact</h3>
            <p className="text-body text-moonlight-gray/80">
              In the time it took you to reach this page, light from the nearest star 
              (Proxima Centauri) traveled about 300,000 kilometers through space!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}