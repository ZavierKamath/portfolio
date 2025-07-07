"use client";

interface LoadingSkeletonProps {
  variant?: "project" | "simple";
  count?: number;
}

function ProjectSkeletonItem() {
  return (
    <div className="card-pixel card-data pixel-fade-in">
      {/* Terminal Loading Header */}
      <div className="border-pixel border-asteroid-grey bg-void-black p-2 mb-4 font-body text-xs">
        <div className="flex justify-between items-center">
          <span className="text-quasar-yellow">PROJECT_LOADER.exe</span>
          <span className="text-stellar-cyan pixel-blink">LOADING_</span>
        </div>
      </div>

      {/* Header skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="loading-bar-pixel h-6 mb-2 w-3/4">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-xs text-stellar-cyan">TITLE</span>
            </div>
          </div>
          <div className="loading-bar-pixel h-4 w-1/2">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-body text-xs text-asteroid-grey">TYPE</span>
            </div>
          </div>
        </div>
        <div className="loading-bar-pixel h-4 w-20" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-6">
        <div className="loading-bar-pixel h-3 w-full" />
        <div className="loading-bar-pixel h-3 w-5/6" />
        <div className="loading-bar-pixel h-3 w-3/4" />
      </div>

      {/* Impact skeleton */}
      <div className="loading-bar-pixel h-4 w-4/5 mb-6" />

      {/* Skills skeleton */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="loading-bar-pixel h-6 w-16" />
        ))}
      </div>

      {/* Links skeleton */}
      <div className="flex gap-3">
        <div className="loading-bar-pixel h-8 w-24" />
        <div className="loading-bar-pixel h-8 w-20" />
      </div>

      {/* Status Bar */}
      <div className="border-t border-asteroid-grey pt-2 mt-4">
        <div className="flex justify-between items-center font-body text-xs">
          <span className="text-asteroid-grey">████████░░ 80% LOADED</span>
          <span className="text-stellar-cyan">STANDBY</span>
        </div>
      </div>
    </div>
  );
}

function SimpleSkeletonItem() {
  return (
    <div className="card-pixel card-terminal pixel-fade-in">
      <div className="space-y-3">
        <div className="loading-bar-pixel h-6 w-3/4" />
        <div className="loading-bar-pixel h-4 w-full" />
        <div className="loading-bar-pixel h-4 w-5/6" />
      </div>
    </div>
  );
}

export function LoadingSkeleton({ variant = "project", count = 4 }: LoadingSkeletonProps) {
  return (
    <div className={variant === "project" ? "grid gap-8 md:grid-cols-2 lg:grid-cols-2 pixel-stagger-children" : "space-y-4 pixel-stagger-children"}>
      {[...Array(count)].map((_, i) => (
        <div key={i} style={{ animationDelay: `${i * 100}ms` }}>
          {variant === "project" ? (
            <ProjectSkeletonItem />
          ) : (
            <SimpleSkeletonItem />
          )}
        </div>
      ))}
    </div>
  );
}

// Export the project skeleton for backward compatibility
export function ProjectSkeleton() {
  return <ProjectSkeletonItem />;
}