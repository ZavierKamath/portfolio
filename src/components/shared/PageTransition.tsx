"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAccessibility } from "@/hooks/useAccessibility";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween",
  duration: 0.3,
  ease: "easeInOut"
};

const reducedMotionVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const reducedMotionTransition = {
  duration: 0.15
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { reducedMotion } = useAccessibility();

  const variants = reducedMotion ? reducedMotionVariants : pageVariants;
  const transition = reducedMotion ? reducedMotionTransition : pageTransition;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}