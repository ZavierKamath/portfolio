"use client";

import { useState, useEffect } from "react";
import { Project, ProjectCategory } from "@/lib/types";

interface UseProjectDataReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

type ProjectType = "research" | "industry" | "coursework" | "personal";

const projectDataCache = new Map<ProjectType, ProjectCategory>();

export function useProjectData(type: ProjectType): UseProjectDataReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProjectData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        if (projectDataCache.has(type)) {
          const cachedData = projectDataCache.get(type)!;
          if (isMounted) {
            setProjects(cachedData.projects);
            setLoading(false);
          }
          return;
        }

        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 300));

        let data: unknown;
        
        switch (type) {
          case "research":
            data = await import("@/data/research-projects.json");
            break;
          case "industry":
            data = await import("@/data/industry-projects.json");
            break;
          case "coursework":
            data = await import("@/data/coursework-projects.json");
            break;
          case "personal":
            data = await import("@/data/personal-projects.json");
            break;
          default:
            throw new Error(`Unknown project type: ${type}`);
        }

        const typedData = (data as { default?: ProjectCategory })?.default || data as ProjectCategory;
        
        // Cache the data
        projectDataCache.set(type, typedData);

        if (isMounted) {
          setProjects(typedData.projects);
          setLoading(false);
        }
      } catch (err) {
        console.error(`Error loading ${type} projects:`, err);
        if (isMounted) {
          setError(`Failed to load ${type} projects. Please try again.`);
          setLoading(false);
          setProjects([]);
        }
      }
    };

    loadProjectData();

    return () => {
      isMounted = false;
    };
  }, [type]);

  return { projects, loading, error };
}

// Helper function to clear cache (useful for development)
export function clearProjectDataCache() {
  projectDataCache.clear();
}