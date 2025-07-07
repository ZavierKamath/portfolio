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
        console.log(`🔍 [useProjectData] Starting to load ${type} projects`);
        setLoading(true);
        setError(null);

        // Check cache first
        if (projectDataCache.has(type)) {
          const cachedData = projectDataCache.get(type)!;
          console.log(`✅ [useProjectData] Found ${type} in cache:`, cachedData);
          if (isMounted) {
            setProjects(cachedData.projects);
            setLoading(false);
          }
          return;
        }

        console.log(`⏳ [useProjectData] Loading ${type} from file system`);
        
        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 300));

        let data: unknown;
        
        switch (type) {
          case "research":
            console.log(`📂 [useProjectData] Importing research-projects.json`);
            data = await import("@/data/research-projects.json");
            break;
          case "industry":
            console.log(`📂 [useProjectData] Importing industry-projects.json`);
            data = await import("@/data/industry-projects.json");
            break;
          case "coursework":
            console.log(`📂 [useProjectData] Importing coursework-projects.json`);
            data = await import("@/data/coursework-projects.json");
            break;
          case "personal":
            console.log(`📂 [useProjectData] Importing personal-projects.json`);
            data = await import("@/data/personal-projects.json");
            break;
          default:
            throw new Error(`Unknown project type: ${type}`);
        }

        console.log(`📦 [useProjectData] Raw imported data for ${type}:`, data);

        const typedData = (data as { default?: ProjectCategory })?.default || data as ProjectCategory;
        
        console.log(`🔄 [useProjectData] Processed data for ${type}:`, typedData);
        console.log(`📊 [useProjectData] Number of projects found: ${typedData.projects?.length || 0}`);
        
        // Cache the data
        projectDataCache.set(type, typedData);

        if (isMounted) {
          setProjects(typedData.projects);
          setLoading(false);
          console.log(`✅ [useProjectData] Successfully loaded ${typedData.projects?.length || 0} ${type} projects`);
        }
      } catch (err) {
        console.error(`❌ [useProjectData] Error loading ${type} projects:`, err);
        console.error(`❌ [useProjectData] Error stack:`, (err as Error).stack);
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