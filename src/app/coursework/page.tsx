"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectPageShell } from "@/components/projects/ProjectPageShell";
import { useProjectData } from "@/hooks/useProjectData";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function Coursework() {
  const { projects, loading, error } = useProjectData("coursework");

  return (
    <ErrorBoundary>
      <ProjectPageShell
        kind="coursework"
        title="Coursework Projects"
        description="Class projects in machine learning, physics, and data analysis."
      >
        <ProjectGrid
          projects={projects}
          loading={loading}
          error={error}
          categoryLabel="coursework"
        />
      </ProjectPageShell>
    </ErrorBoundary>
  );
}
