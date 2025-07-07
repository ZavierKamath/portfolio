"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/lib/types";
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
      className="card card-cosmic group cursor-pointer pixel-fade-in"
      style={{ 
        borderColor: 'var(--stellar-cyan)',
        backgroundColor: 'var(--cosmic-navy)',
        animationDelay: `${Math.random() * 300}ms`
      }}
    >
      {/* Terminal Header */}
      <div className="border-pixel border-stellar-cyan bg-void-black p-3 mb-4 -mx-6 -mt-6 md:-mx-6 md:-mt-6 sm:-mx-4 sm:-mt-4 font-display">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-quasar-yellow">PROJECT_FILE.exe</span>
          <div className="flex items-center space-x-2">
            <span className="text-stellar-cyan pixel-blink">●</span>
            <span className="text-asteroid-grey hidden sm:inline">ACTIVE</span>
          </div>
        </div>
        <div className="border-t border-stellar-cyan pt-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h3 className="font-ui text-base sm:text-lg font-bold text-gradient glow-cyan">
              {project.title}
            </h3>
            <time 
              className="font-body text-xs text-asteroid-grey bg-cosmic-indigo px-2 py-1 border-pixel border-asteroid-grey w-fit"
              dateTime={project.date}
              aria-label={`Project completed in ${project.date}`}
            >
              [{project.date}]
            </time>
          </div>
          {project.subtitle && (
            <p className="text-xs text-stellar-cyan mt-1 font-body">&gt; {project.subtitle}</p>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center mb-4 p-2 bg-cosmic-indigo border-pixel border-asteroid-grey font-body text-xs">
        <div className="flex items-center space-x-4">
          <span className="text-quasar-yellow">STATUS:</span>
          <span className="text-stellar-cyan">LOADED</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-asteroid-grey">████████░░</span>
          <span className="text-stellar-cyan">80%</span>
        </div>
      </div>

      {/* Description - Terminal Style */}
      <div className="mb-6">
        <div className="border-pixel border-asteroid-grey bg-cosmic-indigo p-3 mb-4">
          <div className="text-xs text-quasar-yellow mb-2 font-body">[DESCRIPTION.DAT]</div>
          {isProcessing ? (
            <div className="space-y-2">
              <div className="loading-bar-pixel h-3 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xs text-stellar-cyan">LOADING</span>
                </div>
              </div>
              <div className="loading-bar-pixel h-3 w-4/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xs text-stellar-cyan">DATA</span>
                </div>
              </div>
            </div>
          ) : (
            <div 
              className="text-star-white leading-relaxed font-body text-sm markdown-content"
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
              className="btn-pixel-secondary mt-3 text-xs"
              aria-expanded={isExpanded}
              aria-controls={`description-${project.id}`}
              aria-label={`${isExpanded ? "Collapse" : "Expand"} project description for ${project.title}`}
            >
              <span className="font-display">{isExpanded ? "▲" : "▼"}</span>
              <span className="ml-2">{isExpanded ? "MINIMIZE" : "EXPAND"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Impact - Alert Style */}
      {project.impact && (
        <div className="mb-6 card-alert border-pixel-thick border-mars-red p-3">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-mars-red font-display text-lg">!</span>
            <span className="text-quasar-yellow font-body text-xs">[IMPACT_ANALYSIS]</span>
          </div>
          <p className="text-sm text-star-white font-body leading-relaxed">
            &gt; {project.impact}
          </p>
        </div>
      )}

      {/* Skills - Terminal Grid */}
      <div className="mb-6">
        <div className="border-pixel border-asteroid-grey bg-cosmic-indigo p-3">
          <div className="text-xs text-quasar-yellow mb-3 font-body">[TECH_STACK.DAT]</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-32 sm:max-h-24 overflow-y-auto">
            {project.skills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="text-xs font-body text-stellar-cyan bg-void-black border-pixel border-stellar-cyan px-2 py-1 hover:bg-stellar-cyan hover:text-void-black transition-all duration-150"
                style={{
                  transition: 'all 0.15s steps(4)',
                  animationDelay: `${index * 50}ms`
                }}
              >
                ▸ {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links - Action Panel */}
      {project.links.length > 0 && (
        <div className="border-t border-stellar-cyan pt-4">
          <div className="text-xs text-quasar-yellow mb-3 font-body">[ACTION_PANEL]</div>
          <div className="flex gap-3 flex-wrap">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.type === "github" || link.type === "demo" || link.type === "website" ? "_blank" : undefined}
                rel={link.type === "github" || link.type === "demo" || link.type === "website" ? "noopener noreferrer" : undefined}
                className="btn-pixel-primary text-xs group/link"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="font-display group-hover/link:pixel-blink">
                  {getLinkIcon(link.type)}
                </span>
                <span className="ml-2 font-ui">{link.label.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ASCII Corner Decorations */}
      <div className="absolute -top-1 -left-1 font-display text-stellar-cyan text-xs pointer-events-none">
        ┌─
      </div>
      <div className="absolute -top-1 -right-1 font-display text-stellar-cyan text-xs pointer-events-none">
        ─┐
      </div>
      <div className="absolute -bottom-1 -left-1 font-display text-stellar-cyan text-xs pointer-events-none">
        └─
      </div>
      <div className="absolute -bottom-1 -right-1 font-display text-stellar-cyan text-xs pointer-events-none">
        ─┘
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
      
      {/* Status Indicator */}
      <div className="absolute top-2 right-2 font-display text-xs opacity-60 text-stellar-cyan pointer-events-none">
        [·]
      </div>
    </article>
  );
}