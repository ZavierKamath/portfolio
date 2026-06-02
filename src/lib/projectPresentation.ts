import { Project, Skill } from "@/lib/types";

export type ProjectFilter =
  | "All"
  | "Banking"
  | "Voice AI"
  | "RAG"
  | "Apps"
  | "Data"
  | "Research";

export type ProjectViewMode = "quick" | "deep";

const outcomeByProjectId: Record<string, string> = {
  "reusable-enterprise-rag-platform": "$300K+/year saved",
  "customer-financial-insights-chatbot": "Customer insight prototype",
  "ai-enablement-workflow-automation": "Hundreds of colleagues enabled",
  "ai-agent-skills-repository": "Shared team knowledge",
  "ai-document-processing-systems": "Faster document review",
  "warm-dark-matter-constraints": "100x runtime improvement",
  memvia: "Resume helper",
  nero: "Voice tracking",
  "pizza-agent-demo": "Phone orders to tickets",
  "physics-grad-match": "Professor matching",
  "rep-quest": "Mobile workout logs",
  "quasar-pca-analysis": "Recovered quasar spectra",
  "tully-fisher-regression": "Regression with uncertainty",
  "nfl-data-analysis": "75%+ play precision",
  "thermal-conductivity-analysis": "Heat model validated",
};

const mediaCaptionByProjectId: Record<string, string> = {
  "reusable-enterprise-rag-platform":
    "Sketch of the shared retrieval and configuration stack.",
  "customer-financial-insights-chatbot":
    "Concept for the customer insights chatbot.",
  "warm-dark-matter-constraints":
    "Research poster and final dark matter constraints.",
  memvia:
    "Demo thumbnail for resume memory, drafting, and application answers.",
  nero: "Mobile demo of voice input and personal tracking.",
  "pizza-agent-demo": "Phone agent creating restaurant tickets from a voice order.",
  "physics-grad-match":
    "Demo of professor matching, search, and checkout.",
};

const skillNameMap: Record<string, string> = {
  "Amazon OpenSearch": "OpenSearch",
  "AWS Step Functions": "Step Functions",
  "Google Cloud Run": "Cloud Run",
  "Microsoft Copilot": "Copilot",
  "Open AI Embeddings and LLM model APIs": "OpenAI APIs",
  "Next.js API Routes": "Next.js APIs",
  "Supabase (PostgreSQL and OAuth)": "Supabase",
  "LLM Prompt Engineering": "Prompts",
  "LLM Context Engineering": "Context",
  "Retrieval-Augmented Generation": "RAG",
  "Full-Stack Architecture": "Apps",
  "Vector Similarity Search": "Vector Search",
  "Principal Component Analysis": "PCA",
  "High-Performance Computing": "HPC",
  "Astronomical Data Processing": "Astro Data",
  "Laboratory Instrumentation": "Lab Instruments",
  "Agentic AI Systems": "Agents",
  "Agentic AI": "Agents",
  "AI Product Architecture": "AI Product",
  "AI Guardrails": "Guardrails",
  "Data Engineering": "Data Eng",
  "Data Science": "Data",
  "Prompt Engineering": "Prompts",
  "Context Engineering": "Context",
  "Developer Enablement": "Training",
  "Knowledge Management": "Knowledge",
  "Workflow Orchestration": "Workflows",
  "Data Visualization": "Charts",
  "Statistical Analysis": "Stats",
  "Machine Learning": "ML",
  "Mobile Development": "Mobile",
  "UI/UX Design": "UI/UX",
  "Web Development": "Web",
};

const filterKeywords: Record<Exclude<ProjectFilter, "All">, string[]> = {
  Banking: [
    "huntington",
    "enterprise",
    "bank",
    "aws",
    "customer-facing",
    "document",
    "colleagues",
    "governance",
  ],
  "Voice AI": ["voice", "twilio", "deepgram", "assemblyai", "elevenlabs", "phone"],
  RAG: ["rag", "retrieval", "vector", "opensearch", "memory", "knowledge", "embeddings"],
  Apps: [
    "full-stack",
    "react",
    "typescript",
    "frontend",
    "backend",
    "fastapi",
    "next.js",
    "vite",
    "stripe",
    "supabase",
  ],
  Data: [
    "data",
    "bayesian",
    "statistics",
    "regression",
    "machine learning",
    "pca",
    "numerical",
    "scikit",
    "analysis",
  ],
  Research: [
    "research",
    "physics",
    "astrophysics",
    "astronomy",
    "dark matter",
    "quasar",
    "spectra",
    "galaxy",
    "thermal",
  ],
};

export const projectFilters: ProjectFilter[] = [
  "All",
  "Banking",
  "Voice AI",
  "RAG",
  "Apps",
  "Data",
  "Research",
];

export function getProjectOutcome(project: Project): string {
  if (outcomeByProjectId[project.id]) {
    return outcomeByProjectId[project.id];
  }

  const metricMatch = `${project.description} ${project.impact ?? ""}`.match(
    /(\$[\w.+/-]+|\d+[xX]|\d+%\+?|\d+\+|millions|hundreds|tens of thousands)/i
  );

  return metricMatch?.[0] ?? "Technical build";
}

export function getProjectStatus(project: Project): string {
  if (project.date.toLowerCase().includes("present")) {
    return "Active";
  }

  if (project.featured) {
    return "Featured";
  }

  return "Archive";
}

export function getSkillLabel(skill: Skill): string {
  return skillNameMap[skill.name] ?? skill.name;
}

export function getMediaCaption(project: Project): string | null {
  if (!project.media) {
    return null;
  }

  return (
    mediaCaptionByProjectId[project.id] ??
    `Visual reference for ${project.title}.`
  );
}

export function getProjectSearchText(project: Project): string {
  return [
    project.title,
    project.subtitle,
    project.date,
    project.description,
    project.extendedDescription,
    project.impact,
    ...project.skills.map((skill) => `${skill.name} ${skill.category}`),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function projectMatchesFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "All") {
    return true;
  }

  const searchText = getProjectSearchText(project);
  return filterKeywords[filter].some((keyword) => searchText.includes(keyword));
}

export function getAvailableFilters(projects: Project[]): ProjectFilter[] {
  return projectFilters.filter(
    (filter) =>
      filter === "All" || projects.some((project) => projectMatchesFilter(project, filter))
  );
}

export function getPrimarySkills(project: Project, count = 6): Skill[] {
  const priority = ["Language", "Framework", "Cloud", "Tool", "Library", "Concept"];

  return [...project.skills]
    .sort((a, b) => priority.indexOf(a.category) - priority.indexOf(b.category))
    .slice(0, count);
}

export function getMissionLog(project: Project, extendedDescriptionHtml: string) {
  return [
    {
      label: "Problem",
      body: project.subtitle ?? project.description,
    },
    {
      label: "Details",
      body: extendedDescriptionHtml || project.extendedDescription || project.description,
      html: Boolean(extendedDescriptionHtml),
    },
    {
      label: "Role",
      body: "Owned the hands-on build, validation, docs, or demo delivery.",
    },
    {
      label: "Result",
      body: project.impact ?? project.description,
    },
  ];
}
