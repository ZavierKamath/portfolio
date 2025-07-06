"use client";

export function ProjectSkeleton() {
  return (
    <div className="card animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="h-6 bg-moonlight-gray/20 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-moonlight-gray/10 rounded w-1/2"></div>
        </div>
        <div className="h-4 bg-moonlight-gray/10 rounded w-20"></div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-moonlight-gray/10 rounded w-full"></div>
        <div className="h-4 bg-moonlight-gray/10 rounded w-5/6"></div>
        <div className="h-4 bg-moonlight-gray/10 rounded w-3/4"></div>
      </div>

      {/* Impact skeleton */}
      <div className="h-4 bg-supernova-orange/20 rounded w-4/5 mb-6"></div>

      {/* Skills skeleton */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-7 bg-moonlight-gray/10 rounded-full w-16"></div>
        ))}
      </div>

      {/* Links skeleton */}
      <div className="flex gap-3">
        <div className="h-9 bg-moonlight-gray/10 rounded w-24"></div>
        <div className="h-9 bg-moonlight-gray/10 rounded w-20"></div>
      </div>
    </div>
  );
}