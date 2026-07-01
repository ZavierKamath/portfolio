"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectPageShell } from "@/components/projects/ProjectPageShell";
import { useProjectData } from "@/hooks/useProjectData";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function Industry() {
  const { projects, loading, error } = useProjectData("industry");

  return (
    <ErrorBoundary>
      <ProjectPageShell
        kind="industry"
        title="Industry Projects"
        description="AI tools, banking AI solutions, and internal training at Huntington."
      >
        <ProjectGrid
          projects={projects}
          loading={loading}
          error={error}
          categoryLabel="industry work"
        />
      </ProjectPageShell>
    </ErrorBoundary>
  );
}
