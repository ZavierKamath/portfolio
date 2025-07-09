"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/lib/types";
import { processMarkdown, isMarkdownContent } from "@/lib/markdown";

interface ProjectCardProps {
  project: Project;
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
        color: "#FFFFFF"
      };
    case "Framework":
      return {
        backgroundColor: "#0FBCDC", // Cyan for frameworks
        color: "#000000"
      };
    case "Tool":
      return {
        backgroundColor: "#3EE751", // Green for tools
        color: "#000000"
      };
    case "Cloud":
      return {
        backgroundColor: "#FFD23F", // Yellow for cloud
        color: "#000000"
      };
    case "Library":
      return {
        backgroundColor: "#FF6B35", // Orange for libraries
        color: "#FFFFFF"
      };
    case "Concept":
      return {
        backgroundColor: "#8B8680", // Grey for concepts
        color: "#FFFFFF"
      };
    default:
      return {
        backgroundColor: "#0FBCDC", // Default cyan
        color: "#000000"
      };
  }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [processedDescription, setProcessedDescription] = useState<string>('');
  const [processedExtendedDescription, setProcessedExtendedDescription] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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
        let extendedDescriptionHtml = '';
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
        console.error('Error processing markdown for project:', project.id, error);
        if (isMounted) {
          // Fallback to original text
          setProcessedDescription(project.description);
          setProcessedExtendedDescription(project.extendedDescription || '');
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
      className="pixel-card group transition-transform hover:scale-105"
      style={{ 
        border: '2px solid var(--stellar-cyan)',
        backgroundColor: 'var(--void-black)',
        padding: '1.5rem',
        boxShadow: '2px 2px 0 var(--stellar-cyan)',
      }}
    >
      {/* Simple header with title and tiny star accent */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-display text-lg text-star-white">
          {project.title}
        </h3>
        <span className="text-stellar-cyan text-xs">★</span>
      </div>

      {/* Clean description with expandable extended description */}
      <div className="mb-4">
        {isProcessing ? (
          <div className="text-sm text-asteroid-grey">Loading...</div>
        ) : (
          <div className="text-sm leading-relaxed">
            {/* Main description - always visible */}
            <div 
              className="text-gray-300 mb-2"
              dangerouslySetInnerHTML={{
                __html: processedDescription || project.description
              }}
            />
            
            {/* Extended description - conditionally visible */}
            {isExpanded && processedExtendedDescription && (
              <div 
                className="text-gray-400 transition-all duration-300 ease-in-out"
                dangerouslySetInnerHTML={{
                  __html: processedExtendedDescription
                }}
              />
            )}
            
            {/* Read more/Show less button - only if extended description exists */}
            {processedExtendedDescription && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-stellar-cyan text-xs hover:text-cyan-300 transition-colors duration-200 mt-2 font-medium"
                aria-label={isExpanded ? "Show less" : "Read more"}
              >
                {isExpanded ? "Show less ↑" : "Read more ↓"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Colored skill bubbles */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => {
            const skillColors = getSkillColor(skill.category);
            return (
              <span
                key={`${skill.name}-${index}`}
                className="px-3 py-2 rounded-sm text-base font-body"
                style={{
                  backgroundColor: skillColors.backgroundColor,
                  color: skillColors.color,
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Larger action buttons */}
      {project.links.length > 0 && (
        <div className="flex gap-3 mt-4">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.type === "github" || link.type === "demo" || link.type === "website" ? "_blank" : undefined}
              rel={link.type === "github" || link.type === "demo" || link.type === "website" ? "noopener noreferrer" : undefined}
              className="pixel-btn text-sm px-4 py-2 border-2 border-stellar-cyan text-stellar-cyan hover:bg-stellar-cyan hover:text-void-black transition-colors rounded-sm"
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