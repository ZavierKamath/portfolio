"use client";

import React from "react";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectMedia as ProjectMediaType } from "@/lib/types";

interface ExperienceHighlightProps {
  title: string;
  subtitle?: string;
  description: string;
  media: ProjectMediaType;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ExperienceHighlight({
  title,
  subtitle,
  description,
  media,
  techStack,
  githubUrl,
  demoUrl
}: ExperienceHighlightProps) {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-center mb-16 font-display text-2xl text-star-white">
        Featured Experience
      </h2>
      
      <div className="max-w-7xl mx-auto">
        {/* Main highlight card */}
        <div 
          className="pixel-card group overflow-hidden"
          style={{ 
            border: '4px solid var(--stellar-cyan)',
            backgroundColor: 'var(--void-black)',
            padding: '0',
            boxShadow: '8px 8px 0 var(--stellar-cyan), 0 0 20px rgba(15, 188, 220, 0.3)',
          }}
        >
          <div className="grid lg:grid-cols-3 gap-0 min-h-[400px]">
            {/* Video Section - Takes 2/3 width on desktop */}
            <div className="lg:col-span-2 relative">
              <ProjectMedia 
                media={media} 
                className="w-full h-full min-h-[300px] lg:min-h-[400px]"
              />
              
              {/* Video overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void-black/20 pointer-events-none" />
              
              {/* Featured badge */}
              <div className="absolute top-4 left-4 bg-stellar-cyan text-void-black px-3 py-1 font-display text-xs border-2 border-void-black">
                FEATURED
              </div>
            </div>

            {/* Info Section - Takes 1/3 width on desktop */}
            <div className="p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-b from-void-black to-cosmic-navy">
              {/* Title and subtitle */}
              <div className="mb-6">
                <h3 className="font-display text-xl lg:text-2xl text-star-white leading-tight mb-2">
                  {title}
                </h3>
                {subtitle && (
                  <p className="font-body text-sm text-stellar-cyan mb-4">
                    {subtitle}
                  </p>
                )}
                <p className="font-body text-sm lg:text-base text-moonlight-gray leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="font-display text-xs text-stellar-cyan mb-3 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.slice(0, 6).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-body border border-stellar-cyan/50 text-stellar-cyan bg-stellar-cyan/10 hover:bg-stellar-cyan/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {techStack.length > 6 && (
                    <span className="px-2 py-1 text-xs font-body text-asteroid-grey">
                      +{techStack.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 pixel-btn text-xs px-3 py-2 border-2 border-stellar-cyan text-stellar-cyan hover:bg-stellar-cyan hover:text-void-black transition-colors text-center"
                  >
                    <span className="mr-1">⚡</span>
                    View Code
                  </a>
                )}
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 pixel-btn text-xs px-3 py-2 border-2 border-quasar-yellow text-quasar-yellow hover:bg-quasar-yellow hover:text-void-black transition-colors text-center"
                  >
                    <span className="mr-1">→</span>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting projects grid */}
        <div className="mt-16">
          <h3 className="text-center mb-8 font-display text-lg text-moonlight-gray">
            Other Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Dark Matter Research */}
            <div className="card bg-cosmic-navy/50 border-2 border-pulsar-purple/50">
              <h4 className="mb-3 text-star-white font-display text-base">Dark Matter Analysis</h4>
              <p className="text-asteroid-grey text-sm mb-4 leading-relaxed">
                Advanced Bayesian analysis constraining Warm Dark Matter particle mass to &gt;4 keV/c², 
                achieving 100x computational improvement and doubling previous research bounds.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pulsar-purple/20 text-pulsar-purple text-xs">
                  Bayesian Statistics
                </span>
                <span className="px-2 py-1 bg-stellar-cyan/20 text-stellar-cyan text-xs">
                  Python
                </span>
                <span className="px-2 py-1 bg-aurora-green/20 text-aurora-green text-xs">
                  Astrophysics
                </span>
              </div>
            </div>

            {/* AI Loan Processing */}
            <div className="card bg-cosmic-navy/50 border-2 border-supernova-orange/50">
              <h4 className="mb-3 text-star-white font-display text-base">AI Loan Processing</h4>
              <p className="text-asteroid-grey text-sm mb-4 leading-relaxed">
                Engineered autonomous agentic AI system for loan processing with document analysis, 
                natural language processing, and secure data management on AWS infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-supernova-orange/20 text-supernova-orange text-xs">
                  AWS
                </span>
                <span className="px-2 py-1 bg-stellar-cyan/20 text-stellar-cyan text-xs">
                  AI Engineering
                </span>
                <span className="px-2 py-1 bg-aurora-green/20 text-aurora-green text-xs">
                  LangChain
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}