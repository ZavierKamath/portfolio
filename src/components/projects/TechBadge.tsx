"use client";

import { useState } from "react";
import { Skill } from "@/lib/types";

interface TechBadgeProps {
  skill: Skill;
}

const getCategoryColor = (category: Skill["category"]) => {
  switch (category) {
    case "Language":
      return "bg-stellar-blue/20 text-stellar-blue border-stellar-blue/30";
    case "Framework":
      return "bg-pulsar-purple/20 text-pulsar-purple border-pulsar-purple/30";
    case "Tool":
      return "bg-aurora-green/20 text-aurora-green border-aurora-green/30";
    case "Cloud":
      return "bg-supernova-orange/20 text-supernova-orange border-supernova-orange/30";
    case "Library":
      return "bg-nebula-blue/20 text-nebula-blue border-nebula-blue/30";
    case "Concept":
      return "bg-moonlight-gray/20 text-moonlight-gray border-moonlight-gray/30";
    default:
      return "bg-moonlight-gray/20 text-moonlight-gray border-moonlight-gray/30";
  }
};

export function TechBadge({ skill }: TechBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default ${getCategoryColor(skill.category)}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {skill.name}
      </span>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-dark-matter border border-stellar-blue/20 rounded text-xs text-moonlight-gray whitespace-nowrap z-10">
          {skill.category}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-matter"></div>
        </div>
      )}
    </div>
  );
}