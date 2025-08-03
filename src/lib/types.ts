export interface Skill {
  name: string;
  category: "Language" | "Framework" | "Tool" | "Cloud" | "Library" | "Concept";
}

export interface ProjectLink {
  type: "github" | "demo" | "paper" | "website";
  url: string;
  label: string;
}

export interface ProjectMedia {
  type: "video" | "image";
  src: string;
  alt: string;
  poster?: string; // For video thumbnail
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
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
  media?: ProjectMedia;
}

export interface ProjectCategory {
  projects: Project[];
}