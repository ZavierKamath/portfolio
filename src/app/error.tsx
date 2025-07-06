"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error("Application error:", error);
  }, [error]);

  if (!mounted) return null;

  const handleReset = () => {
    try {
      reset();
    } catch (resetError) {
      console.error("Error during reset:", resetError);
      window.location.reload();
    }
  };

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Error Icon with Animation */}
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ 
              duration: 1,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <div className="text-8xl mb-4">⚠️</div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Houston, We Have a Problem
            </h1>
            <h2 className="text-xl font-semibold mb-4 text-cosmic-blue">
              System Malfunction Detected
            </h2>
            <p className="text-body-lg text-moonlight-gray/80 mb-6">
              Something went wrong in our cosmic navigation system. 
              Our mission control team has been notified and is working on a solution.
            </p>
          </motion.div>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === "development" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left"
            >
              <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
              <pre className="text-sm text-red-300 whitespace-pre-wrap break-words">
                {error.message}
              </pre>
              {error.digest && (
                <p className="text-xs text-red-400 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.button
              onClick={handleReset}
              className="btn-primary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🔄</span>
              <span>Retry Mission</span>
            </motion.button>
            
            <motion.button
              onClick={() => window.location.href = "/"}
              className="btn-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🏠</span>
              <span>Return to Base</span>
            </motion.button>
          </motion.div>

          {/* Technical Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 card border-starlight-yellow/30"
          >
            <div className="text-starlight-yellow text-4xl mb-3">🛠️</div>
            <h3 className="text-lg font-semibold mb-2">Need Technical Support?</h3>
            <p className="text-body text-moonlight-gray/80 mb-4">
              If this error persists, please contact mission control with the error details.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 text-sm">
              <span className="text-moonlight-gray/60">Error occurred at:</span>
              <span className="text-cosmic-blue font-mono">
                {new Date().toISOString()}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}