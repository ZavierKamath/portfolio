"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { useProjectData } from "@/hooks/useProjectData";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { pageVariants, headerVariants } from "@/lib/animations";

export default function Industry() {
  const { projects, loading, error } = useProjectData("industry");
  
  return (
    <ErrorBoundary>
      <motion.main
        className="container mx-auto min-h-screen py-12"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <h1 className="text-gradient mb-4">Industry Projects</h1>
          <p className="text-moonlight-gray/70 max-w-2xl mx-auto">
            Real-world applications of AI and machine learning in enterprise environments, focusing on scalable solutions and business impact.
          </p>
        </motion.div>
        
        <ProjectGrid projects={projects} loading={loading} error={error} />
      </motion.main>
    </ErrorBoundary>
  );
}
