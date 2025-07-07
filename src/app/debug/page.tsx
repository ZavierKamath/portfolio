"use client";

import { useProjectData } from "@/hooks/useProjectData";
import { Project } from "@/lib/types";

/**
 * Debug page to test project data loading
 * Visit /debug to see what data is being loaded
 */
export default function DebugPage() {
  const research = useProjectData("research");
  const coursework = useProjectData("coursework");
  const industry = useProjectData("industry");
  const personal = useProjectData("personal");

  const renderDebugSection = (
    title: string,
    data: { projects: Project[]; loading: boolean; error: string | null }
  ) => (
    <div className="mb-8 p-6 bg-dark-matter rounded-lg border border-stellar-blue/20">
      <h2 className="text-xl font-bold text-nebula-blue mb-4">{title}</h2>
      
      <div className="grid gap-4">
        <div>
          <strong className="text-moonlight-gray">Loading:</strong>
          <span className={`ml-2 px-2 py-1 rounded text-xs ${
            data.loading 
              ? 'bg-warning-amber/20 text-warning-amber' 
              : 'bg-success-green/20 text-success-green'
          }`}>
            {data.loading ? 'TRUE' : 'FALSE'}
          </span>
        </div>
        
        <div>
          <strong className="text-moonlight-gray">Error:</strong>
          <span className={`ml-2 px-2 py-1 rounded text-xs ${
            data.error 
              ? 'bg-error-red/20 text-error-red' 
              : 'bg-success-green/20 text-success-green'
          }`}>
            {data.error || 'NONE'}
          </span>
        </div>
        
        <div>
          <strong className="text-moonlight-gray">Project Count:</strong>
          <span className="ml-2 px-2 py-1 rounded text-xs bg-info-blue/20 text-info-blue">
            {data.projects.length}
          </span>
        </div>
        
        {data.projects.length > 0 && (
          <div>
            <strong className="text-moonlight-gray">Projects:</strong>
            <ul className="ml-4 mt-2 space-y-1">
              {data.projects.map((project) => (
                <li key={project.id} className="text-moonlight-gray/70">
                  • {project.title} (ID: {project.id})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="container mx-auto py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient mb-8 text-center">
          Debug: Project Data Loading
        </h1>
        
        <div className="mb-8 p-4 bg-pulsar-purple/10 border border-pulsar-purple/20 rounded-lg">
          <p className="text-moonlight-gray text-sm">
            <strong>Debug Information:</strong> This page shows the raw data being loaded 
            for each project type. Check the browser console for detailed logs.
          </p>
        </div>

        {renderDebugSection("Research Projects", research)}
        {renderDebugSection("Coursework Projects", coursework)}
        {renderDebugSection("Industry Projects", industry)}
        {renderDebugSection("Personal Projects", personal)}
        
        <div className="mt-8 p-4 bg-stellar-blue/10 border border-stellar-blue/20 rounded-lg">
          <p className="text-moonlight-gray text-sm">
            <strong>Note:</strong> If you see projects here but not on the main pages, 
            the issue is likely with the ProjectGrid component or page routing.
          </p>
        </div>
      </div>
    </main>
  );
}