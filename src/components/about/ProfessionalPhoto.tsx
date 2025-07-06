"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ProfessionalPhotoProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function ProfessionalPhoto({ 
  src, 
  alt = "Zavier Kamath - Professional Photo",
  className = ""
}: ProfessionalPhotoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const placeholderVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`relative ${className}`}
    >
      {/* Decorative border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cosmic-blue via-nebula-purple to-starlight-yellow p-1">
        <div className="w-full h-full bg-space-dark rounded-xl" />
      </div>

      {/* Image container */}
      <div className="relative overflow-hidden rounded-xl aspect-square">
        {src && !imageError ? (
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              priority
            />
          </motion.div>
        ) : (
          <motion.div
            variants={placeholderVariants}
            initial="hidden"
            animate="visible"
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-space-dark via-space-dark/80 to-space-dark/60"
          >
            {/* Placeholder content */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cosmic-blue to-nebula-purple flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">Zavier Kamath</p>
                <p className="text-moonlight-gray/80 text-sm">
                  Astrophysics → AI/ML
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-dark/30 via-transparent to-transparent" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-starlight-yellow rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cosmic-blue/20 via-nebula-purple/20 to-starlight-yellow/20 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}