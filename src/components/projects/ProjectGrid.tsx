"use client";

import React from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
  error?: string | null;
}

export function ProjectGrid({ projects, loading = false, error = null }: ProjectGridProps) {
  // Loading state
  if (loading) {
    return <LoadingSkeleton variant="project" count={4} />;
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-h3 text-moonlight-gray mb-4">Oops! Something went wrong</h3>
        <p className="text-moonlight-gray/70 max-w-md mx-auto mb-6">
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-h3 text-moonlight-gray mb-4">No Projects Yet</h3>
        <p className="text-moonlight-gray/70 max-w-md mx-auto">
          This section is under construction. Check back soon for exciting projects and research!
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-stellar-blue/10 hover:bg-stellar-blue/20 border border-stellar-blue/20 hover:border-stellar-blue/40 rounded-lg text-stellar-blue hover:text-nebula-blue transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Get in Touch
        </a>
      </div>
    );
  }

  // Main grid with projects
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((project, index) => (
        <div key={`${project.id}-${index}`}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}