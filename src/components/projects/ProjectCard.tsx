"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/lib/types";
import { processMarkdown, isMarkdownContent } from "@/lib/markdown";
import { ProjectMedia } from "./ProjectMedia";
import {
  getMediaCaption,
  getMissionLog,
  getPrimarySkills,
  getProjectOutcome,
  getProjectStatus,
  getSkillLabel,
  ProjectViewMode,
} from "@/lib/projectPresentation";

interface ProjectCardProps {
  project: Project;
  variant?: "feature" | "standard" | "compact";
  viewMode?: ProjectViewMode;
}

// Simplified icon component for links
const getLinkIcon = (type: string) => {
  switch (type) {
    case "github":
      return "⚡"; // Simple pixel-style symbol
    case "demo":
      return "→"; // Arrow for demo
    case "paper":
      return "◇"; // Diamond for papers
    case "website":
      return "◎"; // Circle for websites
    default:
      return "•";
  }
};

// Function to get skill bubble color based on category
const getSkillColor = (category: string) => {
  switch (category) {
    case "Language":
      return {
        backgroundColor: "#5B21B6", // Purple for languages
        color: "#FFFFFF",
      };
    case "Framework":
      return {
        backgroundColor: "#0FBCDC", // Cyan for frameworks
        color: "#000000",
      };
    case "Tool":
      return {
        backgroundColor: "#3EE751", // Green for tools
        color: "#000000",
      };
    case "Cloud":
      return {
        backgroundColor: "#FFD23F", // Yellow for cloud
        color: "#000000",
      };
    case "Library":
      return {
        backgroundColor: "#FF6B35", // Orange for libraries
        color: "#FFFFFF",
      };
    case "Concept":
      return {
        backgroundColor: "#8B8680", // Grey for concepts
        color: "#FFFFFF",
      };
    default:
      return {
        backgroundColor: "#0FBCDC", // Default cyan
        color: "#000000",
      };
  }
};

export function ProjectCard({
  project,
  variant = "standard",
  viewMode = "deep",
}: ProjectCardProps) {
  const [processedDescription, setProcessedDescription] = useState<string>("");
  const [processedExtendedDescription, setProcessedExtendedDescription] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(variant === "feature");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const isCompact = variant === "compact" || viewMode === "quick";
  const isFeature = variant === "feature";
  const outcome = getProjectOutcome(project);
  const status = getProjectStatus(project);
  const visibleSkillLimit = isCompact ? 4 : 6;
  const visibleSkills = showAllSkills
    ? project.skills
    : getPrimarySkills(project, visibleSkillLimit);
  const hasHiddenSkills = project.skills.length > visibleSkillLimit;
  const hiddenSkillCount = Math.max(project.skills.length - visibleSkillLimit, 0);
  const mediaCaption = getMediaCaption(project);
  const missionLog = getMissionLog(project, processedExtendedDescription);
  const showMissionLog = viewMode === "deep" && processedExtendedDescription && isExpanded;

  // Process markdown on component mount
  useEffect(() => {
    let isMounted = true;

    const processDescriptions = async () => {
      if (!isMounted) return;

      setIsProcessing(true);

      try {
        // Process main description
        const descriptionHtml = isMarkdownContent(project.description)
          ? await processMarkdown(project.description)
          : project.description;

        // Process extended description if it exists
        let extendedDescriptionHtml = "";
        if (project.extendedDescription) {
          extendedDescriptionHtml = isMarkdownContent(project.extendedDescription)
            ? await processMarkdown(project.extendedDescription)
            : project.extendedDescription;
        }

        if (isMounted) {
          setProcessedDescription(descriptionHtml);
          setProcessedExtendedDescription(extendedDescriptionHtml);
          setIsProcessing(false);
        }
      } catch (error) {
        console.error("Error processing markdown for project:", project.id, error);
        if (isMounted) {
          // Fallback to original text
          setProcessedDescription(project.description);
          setProcessedExtendedDescription(project.extendedDescription || "");
          setIsProcessing(false);
        }
      }
    };

    processDescriptions();

    return () => {
      isMounted = false;
    };
  }, [project.description, project.extendedDescription, project.id]);

  return (
    <article
      className={`pixel-card group flex h-full flex-col border-2 bg-void-black transition-transform hover:-translate-y-1 ${
        isFeature
          ? "border-quasar-yellow shadow-[8px_8px_0_var(--quasar-yellow)]"
          : "border-stellar-cyan shadow-[2px_2px_0_var(--stellar-cyan)]"
      } ${isFeature ? "p-5 md:p-7" : "p-5"}`}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="mb-2 font-body text-[10px] uppercase tracking-[0.22em] text-moonlight-gray/55">
            {project.date}
          </p>
          <h3 className="font-ui text-2xl font-bold leading-tight text-star-white md:text-3xl">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-2 text-sm leading-relaxed text-moonlight-gray/75">
              {project.subtitle}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-col gap-2 text-right">
          <span className="border border-stellar-cyan/60 bg-stellar-cyan/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-stellar-cyan">
            {status}
          </span>
          {isFeature && (
            <span className="border border-quasar-yellow/70 bg-quasar-yellow/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-quasar-yellow">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-[minmax(130px,0.45fr)_1fr]">
        <div className="border border-quasar-yellow/70 bg-quasar-yellow/10 p-3">
          <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-quasar-yellow">Outcome</p>
          <p className="font-ui text-lg font-semibold leading-snug text-star-white">{outcome}</p>
        </div>

        <div className="border border-moonlight-gray/15 bg-cosmic-navy/40 p-3">
          <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-stellar-cyan">
            Built
          </p>
          {isProcessing ? (
            <p className="text-sm text-asteroid-grey">Loading project summary...</p>
          ) : (
            <div
              className="text-sm leading-relaxed text-moonlight-gray/85 [&_p]:mb-2 [&_p:last-child]:mb-0"
              dangerouslySetInnerHTML={{
                __html: processedDescription || project.description,
              }}
            />
          )}
        </div>
      </div>

      {!isCompact && project.media && (
        <div className="mb-5">
          <ProjectMedia
            media={project.media}
            className={isFeature ? "h-56 w-full sm:h-64 md:h-80" : "h-48 w-full sm:h-56"}
          />
          {mediaCaption && (
            <p className="mt-2 border-l-2 border-stellar-cyan pl-3 text-xs leading-relaxed text-moonlight-gray/65">
              {mediaCaption}
            </p>
          )}
        </div>
      )}

      {project.impact && (
        <div className="mb-4 border-2 border-supernova-orange/80 bg-supernova-orange/10 p-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-supernova-orange">
              Impact
            </span>
            <span aria-hidden="true" className="text-supernova-orange">
              ◆
            </span>
          </div>
          <p className="text-sm leading-relaxed text-star-white/90">{project.impact}</p>
        </div>
      )}

      {viewMode === "deep" && processedExtendedDescription && (
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="border border-stellar-cyan px-3 py-2 text-xs uppercase tracking-[0.18em] text-stellar-cyan transition-colors hover:bg-stellar-cyan hover:text-void-black"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Hide details" : "Show details"}
          </button>
        </div>
      )}

      {showMissionLog && (
        <div className="mb-5 grid gap-3 md:grid-cols-2">
          {missionLog.map((item) => (
            <div key={item.label} className="border border-moonlight-gray/15 bg-void-black p-3">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-stellar-cyan">
                {item.label}
              </p>
              {item.html ? (
                <div
                  className="text-sm leading-relaxed text-moonlight-gray/80 [&_p]:mb-2 [&_p:last-child]:mb-0"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              ) : (
                <p className="text-sm leading-relaxed text-moonlight-gray/80">{item.body}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mb-4 mt-auto">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-moonlight-gray/55">Tech</p>
          {hasHiddenSkills && (
            <button
              type="button"
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="text-xs text-stellar-cyan hover:text-quasar-yellow"
              aria-expanded={showAllSkills}
            >
              {showAllSkills ? "Show less" : `+${hiddenSkillCount} more`}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {visibleSkills.map((skill, index) => {
            const skillColors = getSkillColor(skill.category);
            return (
              <span
                key={`${skill.name}-${index}`}
                className="border px-2 py-1 text-xs font-body"
                style={{
                  backgroundColor: skillColors.backgroundColor,
                  color: skillColors.color,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                {getSkillLabel(skill)}
              </span>
            );
          })}
        </div>
      </div>

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={
                link.type === "github" || link.type === "demo" || link.type === "website"
                  ? "_blank"
                  : undefined
              }
              rel={
                link.type === "github" || link.type === "demo" || link.type === "website"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-flex items-center border-2 border-stellar-cyan px-3 py-2 text-sm text-stellar-cyan transition-colors hover:bg-stellar-cyan hover:text-void-black"
            >
              <span className="mr-2">{getLinkIcon(link.type)}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
