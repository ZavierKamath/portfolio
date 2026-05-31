"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { useProjectData } from "@/hooks/useProjectData";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function Industry() {
  const { projects, loading, error } = useProjectData("industry");

  return (
    <ErrorBoundary>
      <main className="container mx-auto min-h-screen py-12 fade-in">
        <div className="text-center mb-12 fade-in-delay-1">
          <h1 className="text-gradient mb-4">Industry Projects</h1>
          <p className="text-moonlight-gray/70 max-w-2xl mx-auto">
            AI engineering, full-stack product work, and enablement in enterprise environments, with
            a focus on scalable systems and measurable business impact.
          </p>
        </div>

        <div className="fade-in-delay-2">
          <ProjectGrid projects={projects} loading={loading} error={error} />
        </div>
      </main>
    </ErrorBoundary>
  );
}
