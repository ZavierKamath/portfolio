export interface Skill {
  name: string;
  category: "Language" | "Framework" | "Tool" | "Cloud" | "Library" | "Concept";
}

export interface ProjectLink {
  type: "github" | "demo" | "paper" | "website";
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  extendedDescription?: string; // For "read more" functionality
  skills: Skill[];
  links: ProjectLink[];
  impact?: string; // Key achievement or metric
  featured?: boolean;
}

export interface ProjectCategory {
  projects: Project[];
}