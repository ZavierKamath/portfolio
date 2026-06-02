"use client";

import React, { useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import {
  getAvailableFilters,
  projectMatchesFilter,
  ProjectFilter,
  ProjectViewMode,
} from "@/lib/projectPresentation";

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
  error?: string | null;
  categoryLabel?: string;
}

export function ProjectGrid({
  projects,
  loading = false,
  error = null,
  categoryLabel = "projects",
}: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [viewMode, setViewMode] = useState<ProjectViewMode>("quick");

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
        <p className="text-moonlight-gray/70 max-w-md mx-auto mb-6">{error}</p>
        <button onClick={() => window.location.reload()} className="btn-primary">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Get in Touch
        </a>
      </div>
    );
  }

  const availableFilters = getAvailableFilters(projects);
  const filteredProjects = projects.filter((project) =>
    projectMatchesFilter(project, activeFilter)
  );
  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const supportingProjects = filteredProjects.filter((project) => !project.featured);
  const highlightedProjects =
    featuredProjects.length > 0 ? featuredProjects : filteredProjects.slice(0, 1);
  const highlightedIds = new Set(highlightedProjects.map((project) => project.id));
  const displayedSupportingProjects = supportingProjects.filter(
    (project) => !highlightedIds.has(project.id)
  );

  const hasSupportingProjects = displayedSupportingProjects.length > 0;
  const resultLabel = `${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}`;

  return (
    <div className="space-y-10 pixel-stagger-children">
      <section
        id="filters"
        className="border-2 border-stellar-cyan bg-void-black/95 p-4 shadow-[2px_2px_0_var(--stellar-cyan)]"
      >
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-[0.24em] text-stellar-cyan">
              &gt; browse {categoryLabel}
            </p>
            <p className="text-sm text-moonlight-gray/75">{resultLabel} shown.</p>
          </div>

          <div className="flex border border-moonlight-gray/20 bg-cosmic-navy/50 p-1">
            {(["quick", "deep"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                className={`px-3 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                  viewMode === mode
                    ? "bg-quasar-yellow text-void-black"
                    : "text-moonlight-gray hover:bg-stellar-cyan hover:text-void-black"
                }`}
              >
                {mode === "quick" ? "Quick" : "Details"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {availableFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`border px-3 py-2 text-xs transition-colors ${
                activeFilter === filter
                  ? "border-stellar-cyan bg-stellar-cyan text-void-black"
                  : "border-stellar-cyan/60 bg-void-black text-stellar-cyan hover:bg-stellar-cyan hover:text-void-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {filteredProjects.length === 0 ? (
        <section className="border-2 border-quasar-yellow bg-quasar-yellow/10 p-8 text-center">
          <p className="mb-2 font-ui text-xl font-bold text-star-white">No matches.</p>
          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className="text-sm text-quasar-yellow hover:text-stellar-cyan"
          >
            Reset filters
          </button>
        </section>
      ) : (
        <>
          <section id="featured-work" className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-quasar-yellow">
                  Featured
                </p>
                <h2 className="font-ui text-2xl font-bold text-star-white">Featured Work</h2>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {highlightedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`pixel-fade-in ${index === 0 ? "lg:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <ProjectCard
                    project={project}
                    variant={index === 0 ? "feature" : "standard"}
                    viewMode={viewMode}
                  />
                </div>
              ))}
            </div>
          </section>

          {hasSupportingProjects && (
            <section id="all-projects" className="space-y-4">
              <div>
                <h2 className="font-ui text-2xl font-bold text-star-white">More Projects</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {displayedSupportingProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="pixel-fade-in"
                    style={{ animationDelay: `${(index + highlightedProjects.length) * 120}ms` }}
                  >
                    <ProjectCard
                      project={project}
                      variant={viewMode === "quick" ? "compact" : "standard"}
                      viewMode={viewMode}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
