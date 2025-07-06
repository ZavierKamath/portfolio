"use client";

import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  variant?: "project" | "simple";
  count?: number;
}

// Note: Shimmer variants removed for build simplicity - using CSS animate-pulse instead

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

function ProjectSkeletonItem() {
  return (
    <motion.div 
      className="card animate-pulse"
      variants={itemVariant}
      transition={{ duration: 0.4 }}
    >
      {/* Header skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="h-6 bg-moonlight-gray/20 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-moonlight-gray/10 rounded w-1/2"></div>
        </div>
        <div className="h-4 bg-moonlight-gray/10 rounded w-20"></div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-moonlight-gray/10 rounded w-full"></div>
        <div className="h-4 bg-moonlight-gray/10 rounded w-5/6"></div>
        <div className="h-4 bg-moonlight-gray/10 rounded w-3/4"></div>
      </div>

      {/* Impact skeleton */}
      <div className="h-4 bg-supernova-orange/20 rounded w-4/5 mb-6"></div>

      {/* Skills skeleton */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-7 bg-moonlight-gray/10 rounded-full w-16"></div>
        ))}
      </div>

      {/* Links skeleton */}
      <div className="flex gap-3">
        <div className="h-9 bg-moonlight-gray/10 rounded w-24"></div>
        <div className="h-9 bg-moonlight-gray/10 rounded w-20"></div>
      </div>
    </motion.div>
  );
}

function SimpleSkeletonItem() {
  return (
    <motion.div 
      className="space-y-4 p-6 bg-dark-matter rounded-lg animate-pulse"
      variants={itemVariant}
    >
      <div className="h-6 bg-moonlight-gray/20 rounded w-3/4"></div>
      <div className="h-4 bg-moonlight-gray/10 rounded w-full"></div>
      <div className="h-4 bg-moonlight-gray/10 rounded w-5/6"></div>
    </motion.div>
  );
}

export function LoadingSkeleton({ variant = "project", count = 4 }: LoadingSkeletonProps) {
  return (
    <motion.div
      className={variant === "project" ? "grid gap-8 md:grid-cols-2 lg:grid-cols-2" : "space-y-4"}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {[...Array(count)].map((_, i) => (
        variant === "project" ? (
          <ProjectSkeletonItem key={i} />
        ) : (
          <SimpleSkeletonItem key={i} />
        )
      ))}
    </motion.div>
  );
}

// Export the project skeleton for backward compatibility
export function ProjectSkeleton() {
  return <ProjectSkeletonItem />;
}