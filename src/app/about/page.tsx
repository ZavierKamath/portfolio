"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/about/Timeline";
import ContactLinks from "@/components/about/ContactLinks";
import ProfessionalPhoto from "@/components/about/ProfessionalPhoto";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function About() {
  return (
    <motion.main 
      className="container mx-auto min-h-screen py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section 
        variants={sectionVariants}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">About Me</h1>
          <p className="text-body-lg text-moonlight-gray/80 max-w-2xl mx-auto">
            From exploring the cosmos to building intelligent systems, my journey combines the rigor of physics with the innovation of AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Professional Photo */}
          <motion.div
            variants={sectionVariants}
            className="lg:col-span-1"
          >
            <div className="max-w-sm mx-auto">
              <ProfessionalPhoto className="w-full max-w-sm" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={sectionVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card">
              <h3 className="mb-4">Background</h3>
              <p className="text-body-lg mb-4">
                My journey from astrophysics to AI represents a natural evolution of curiosity about
                complex systems and patterns. Starting with constraints on dark matter particles in the Milky Way,
                I&apos;ve applied the same analytical thinking to neural networks and machine learning systems.
              </p>
              <p className="text-body-lg">
                The mathematical foundations from physics—Bayesian statistics, Monte Carlo methods, and
                computational optimization—have proven invaluable in understanding deep learning architectures
                and building enterprise-grade AI solutions.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-4">Current Focus</h3>
              <p className="text-body-lg mb-4">
                Currently working as a Data Analyst Co-op at Huntington National Bank, developing agentic AI
                systems and LLM automation workflows. My focus bridges theoretical physics and practical AI
                implementations for real-world applications.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-cosmic-blue mb-2">AI & Machine Learning</h4>
                  <ul className="space-y-1 text-body">
                    <li>• Agentic AI systems</li>
                    <li>• LLM automation workflows</li>
                    <li>• Neural network architectures</li>
                    <li>• Prompt engineering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nebula-purple mb-2">Research & Data</h4>
                  <ul className="space-y-1 text-body">
                    <li>• Bayesian statistical analysis</li>
                    <li>• High-performance computing</li>
                    <li>• Data visualization</li>
                    <li>• Research reproducibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        variants={sectionVariants}
        className="mb-16"
      >
        <Timeline />
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        variants={sectionVariants}
        className="mb-8"
      >
        <div className="max-w-2xl mx-auto">
          <ContactLinks />
        </div>
      </motion.section>
    </motion.main>
  );
}
