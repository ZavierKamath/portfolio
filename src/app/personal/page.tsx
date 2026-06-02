"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectPageShell } from "@/components/projects/ProjectPageShell";
import { useProjectData } from "@/hooks/useProjectData";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function Personal() {
  const { projects, loading, error } = useProjectData("personal");

  return (
    <ErrorBoundary>
      <ProjectPageShell
        kind="personal"
        title="Personal Projects"
        description="Small AI products, voice demos, and apps built end to end."
      >
        <ProjectGrid
          projects={projects}
          loading={loading}
          error={error}
          categoryLabel="personal work"
        />
      </ProjectPageShell>
    </ErrorBoundary>
  );
}
