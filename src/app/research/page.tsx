"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectPageShell } from "@/components/projects/ProjectPageShell";
import { useProjectData } from "@/hooks/useProjectData";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function Research() {
  const { projects, loading, error } = useProjectData("research");

  return (
    <ErrorBoundary>
      <ProjectPageShell
        kind="research"
        title="Research Projects"
        description="Astrophysics research, statistical modeling, and scientific code."
      >
        <ProjectGrid
          projects={projects}
          loading={loading}
          error={error}
          categoryLabel="research"
        />
      </ProjectPageShell>
    </ErrorBoundary>
  );
}
