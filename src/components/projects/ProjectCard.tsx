"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/lib/types";
import { TechBadge } from "./TechBadge";
import { processMarkdown, isMarkdownContent } from "@/lib/markdown";

interface ProjectCardProps {
  project: Project;
}

const getLinkIcon = (type: string) => {
  switch (type) {
    case "github":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case "demo":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      );
    case "paper":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      );
    case "website":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      );
    default:
      return null;
  }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [processedDescription, setProcessedDescription] = useState<string>('');
  const [processedExtendedDescription, setProcessedExtendedDescription] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);


  const hasExtendedDescription = project.extendedDescription && project.extendedDescription !== project.description;

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
        const extendedDescriptionHtml = project.extendedDescription && isMarkdownContent(project.extendedDescription)
          ? await processMarkdown(project.extendedDescription)
          : project.extendedDescription || '';

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
      className="card group border-stellar-blue/10 hover:border-stellar-blue/50 hover:shadow-glow cursor-pointer"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-h4 font-semibold text-moonlight-gray group-hover:text-stellar-blue transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-moonlight-gray/70 mt-1">{project.subtitle}</p>
          )}
        </div>
        <time 
          className="text-sm text-moonlight-gray/60 ml-4 flex-shrink-0"
          dateTime={project.date}
          aria-label={`Project completed in ${project.date}`}
        >
          {project.date}
        </time>
      </div>

      {/* Description */}
      <div className="mb-6">
        {isProcessing ? (
          <div className="animate-pulse">
            <div className="h-4 bg-moonlight-gray/20 rounded w-full mb-2"></div>
            <div className="h-4 bg-moonlight-gray/20 rounded w-5/6"></div>
          </div>
        ) : (
          <div 
            className="text-moonlight-gray/80 leading-relaxed markdown-content"
            id={`description-${project.id}`}
            dangerouslySetInnerHTML={{
              __html: isExpanded && hasExtendedDescription 
                ? (processedExtendedDescription || project.extendedDescription || '') 
                : (processedDescription || project.description)
            }}
          />
        )}
        
        {hasExtendedDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-stellar-blue hover:text-nebula-blue text-sm mt-2 inline-flex items-center gap-1 transition-colors focus-visible:ring-2"
            aria-expanded={isExpanded}
            aria-controls={`description-${project.id}`}
            aria-label={`${isExpanded ? "Collapse" : "Expand"} project description for ${project.title}`}
          >
            {isExpanded ? "Show less" : "Read more"}
            <svg 
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        )}
      </div>

      {/* Impact */}
      {project.impact && (
        <div className="mb-6 p-3 bg-supernova-orange/10 border border-supernova-orange/20 rounded-lg">
          <p className="text-sm text-supernova-orange font-medium">
            🎯 {project.impact}
          </p>
        </div>
      )}

      {/* Skills */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
          {project.skills.map((skill, index) => (
            <TechBadge key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.type === "github" || link.type === "demo" || link.type === "website" ? "_blank" : undefined}
              rel={link.type === "github" || link.type === "demo" || link.type === "website" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-3 py-2 bg-stellar-blue/10 hover:bg-stellar-blue/20 border border-stellar-blue/20 hover:border-stellar-blue/40 rounded-lg text-sm text-stellar-blue hover:text-nebula-blue transition-all duration-200 group/link"
            >
              <span className="group-hover/link:animate-pulse">
                {getLinkIcon(link.type)}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}