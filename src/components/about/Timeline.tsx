"use client";

import { useState, useEffect } from "react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: "education" | "experience" | "award";
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "georgia-tech-omscs",
    title: "M.S. in Computer Science (OMSCS)",
    organization: "Georgia Institute of Technology",
    location: "Remote",
    period: "Jan 2026 - Aug 2027 (Expected)",
    description: [
      "Maintain a 4.0 GPA on the AI track while working full-time as an AI Engineer",
      "Completed Human-Computer Interaction and Quantum Computing; currently enrolled in Knowledge-Based AI",
      "Strengthening CS fundamentals while building AI tools and small products",
    ],
    type: "education",
    icon: "◉",
  },
  {
    id: "huntington-ai-engineer",
    title: "AI Engineer",
    organization: "Huntington National Bank",
    location: "Columbus, OH",
    period: "Sep 2025 - Present",
    description: [
      "Built a shared RAG base supporting 5 internal AI projects",
      "Saved an estimated $1.5M+ per year by standardizing how internal teams launch AI knowledge agents",
      "Lead customer-facing AI solutions that turn banking data into useful insights",
      "Built brand-compliant React frontends that let business partners interact directly with internal AI systems",
    ],
    type: "experience",
    icon: "■",
  },
  {
    id: "huntington-ai-enablement",
    title: "AI Training",
    organization: "Huntington National Bank",
    location: "Columbus, OH",
    period: "2025 - Present",
    description: [
      "Taught developers, business partners, executives, and large internal groups",
      "Mentor colleagues on Copilot, Claude Code, OpenCode, Codex, and chatbots",
      "Created guidance, internal docs, and presentations for hundreds of colleagues",
      "Own the data science agent skills repo for reusable team knowledge",
    ],
    type: "experience",
    icon: "◆",
  },
  {
    id: "independent-ai-project-builder",
    title: "Independent Builder",
    organization: "Personal Projects",
    location: "Remote",
    period: "Jul 2024 - Present",
    description: [
      "Started building AI projects independently in July 2024 and kept shipping outside work and school",
      "Built RepQuest, Physics Grad Match, Pizza Phone Agent, Nero, and Memvia",
      "Used React, TypeScript, Python, FastAPI, voice AI APIs, vector search, Stripe, Supabase, and SQLite",
      "Focused on practical demos instead of toy examples",
    ],
    type: "experience",
    icon: "◇",
  },
  {
    id: "huntington-coop",
    title: "AI Engineering Co-op",
    organization: "Huntington National Bank",
    location: "Columbus, OH",
    period: "May 2025 - Aug 2025",
    description: [
      "Built early AI projects for retrieval and document handling in banking",
      "Developed loan automation AI solutions using AWS and LangChain",
      "Contributed to AI Center of Excellence research and development",
    ],
    type: "experience",
    icon: "□",
  },
  {
    id: "senior-award",
    title: "Physics Senior Award",
    organization: "Alpheus W. and Adah B. Smith Endowment",
    location: "OSU",
    period: "May 2025",
    description: [
      "Recognized for outstanding academic achievement among senior Physics majors",
      "Awarded $400 prize for exceptional performance",
    ],
    type: "award",
    icon: "▲",
  },
  {
    id: "graduation",
    title: "Bachelor of Science",
    organization: "The Ohio State University",
    location: "Columbus, OH",
    period: "Fall 2021 - May 2025",
    description: [
      "Majors: Physics and Astronomy & Astrophysics | Minor: Spanish",
      "GPA: 3.983/4.0 | Summa Cum Laude",
      "Dean's List recognition for all 8 semesters",
    ],
    type: "education",
    icon: "●",
  },
  {
    id: "research-assistant",
    title: "Astrophysics Research Assistant",
    organization: "OSU Astronomy Department",
    location: "Columbus, OH",
    period: "Summer 2023 - Summer 2024",
    description: [
      "Advanced Warm Dark Matter particle mass constraints to >4 keV/c? through Bayesian analysis",
      "Cut analysis runtime by 100x by optimizing computational bottlenecks in the simulation codebase",
      "Authored research methods summary for an upcoming publication and presented findings at OSU",
    ],
    type: "experience",
    icon: "♦",
  },
  {
    id: "valorant-captain",
    title: "VALORANT Team Captain",
    organization: "Buckeye Gaming Collective",
    location: "Columbus, OH",
    period: "Autumn 2023 - Spring 2024",
    description: [
      "Led competitive esports team to tournament-level performance",
      "Coordinated strategic planning and practice sessions",
      "Mentored teammates while representing organization",
    ],
    type: "experience",
    icon: "★",
  },
  {
    id: "research-scholarship",
    title: "Summer Research Scholarship",
    organization: "OSU Physics Department",
    location: "Columbus, OH",
    period: "May 2023",
    description: [
      "Awarded $5,000 scholarship for conducting cutting-edge physics research",
      "Recognized for academic excellence and research potential",
    ],
    type: "award",
    icon: "✦",
  },
  {
    id: "trustees-scholarship",
    title: "Trustees Scholarship",
    organization: "The Ohio State University",
    location: "Columbus, OH",
    period: "Fall 2021 - Spring 2025",
    description: [
      "Merit-based scholarship for academic excellence",
      "Sustained high academic performance throughout undergraduate studies",
    ],
    type: "award",
    icon: "♠",
  },
];

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "education" | "experience" | "award">("all");
  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const filteredData = timelineData.filter((item) => filter === "all" || item.type === filter);
  const visibleData = filter === "all" && !showArchive ? filteredData.slice(0, 5) : filteredData;
  const hiddenArchiveCount = filteredData.length - visibleData.length;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "#5B21B6"; // Purple
      case "experience":
        return "var(--stellar-cyan)";
      case "award":
        return "var(--quasar-yellow)";
      default:
        return "var(--asteroid-grey)";
    }
  };

  const getTypeBackground = (type: string) => {
    switch (type) {
      case "education":
        return "rgba(91, 33, 182, 0.1)";
      case "experience":
        return "rgba(15, 188, 220, 0.1)";
      case "award":
        return "rgba(255, 210, 63, 0.1)";
      default:
        return "rgba(139, 134, 128, 0.1)";
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      {/* Simplified Header */}
      <div className="mb-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-stellar-cyan">
              Career Log
            </p>
            <h2 className="font-ui text-3xl font-bold text-star-white">Timeline</h2>
          </div>
          {filter === "all" && (
            <button
              type="button"
              onClick={() => setShowArchive(!showArchive)}
              className="border border-quasar-yellow px-4 py-2 text-sm text-quasar-yellow transition-colors hover:bg-quasar-yellow hover:text-void-black"
            >
              {showArchive ? "Collapse archive" : `Show full archive (${hiddenArchiveCount} more)`}
            </button>
          )}
        </div>

        {/* Simple Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {(["all", "education", "experience", "award"] as const).map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                if (type !== "all") {
                  setShowArchive(true);
                }
              }}
              className={`px-4 py-2 text-sm border-2 transition-colors ${
                filter === type
                  ? "bg-stellar-cyan text-void-black border-stellar-cyan"
                  : "bg-void-black text-stellar-cyan border-stellar-cyan hover:bg-stellar-cyan hover:text-void-black"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative pixel-stagger-children">
        {/* ASCII Timeline Line */}
        <div
          className="absolute left-8 top-0 bottom-0 w-0.5 opacity-60"
          style={{
            background: `linear-gradient(to bottom, 
              var(--stellar-cyan) 0%, 
              var(--nebula-purple) 50%, 
              var(--quasar-yellow) 100%)`,
          }}
        />

        <div className="space-y-8">
          {visibleData.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className="timeline-item pixel-scroll-reveal relative flex items-start space-x-6"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Simple Icon */}
              <div
                className="flex-shrink-0 w-16 h-16 border-2 flex items-center justify-center text-2xl z-10 font-ui font-bold"
                style={{
                  borderColor: getTypeColor(item.type),
                  backgroundColor: getTypeBackground(item.type),
                  color: getTypeColor(item.type),
                }}
              >
                {item.icon}
              </div>

              {/* Simplified Content Card */}
              <div className="flex-1 min-w-0">
                <div
                  className="pixel-card"
                  style={{
                    border: "2px solid var(--stellar-cyan)",
                    backgroundColor: "var(--void-black)",
                    padding: "1.5rem",
                    boxShadow: "2px 2px 0 var(--stellar-cyan)",
                    borderLeftWidth: "4px",
                    borderLeftColor: getTypeColor(item.type),
                  }}
                >
                  {/* Simple Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h3 className="font-ui text-xl font-bold text-star-white mb-1">{item.title}</h3>
                    <span className="text-sm" style={{ color: getTypeColor(item.type) }}>
                      {item.period}
                    </span>
                  </div>

                  {/* Organization Info */}
                  <div className="mb-4">
                    <p className="text-stellar-cyan font-medium">{item.organization}</p>
                    <p className="text-asteroid-grey text-sm">{item.location}</p>
                  </div>

                  {/* Clean Description List */}
                  <div className="space-y-2">
                    {item.description.map((desc, descIndex) => (
                      <p key={descIndex} className="text-sm text-star-white leading-relaxed">
                        • {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filter === "all" && hiddenArchiveCount > 0 ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowArchive(true)}
              className="border-2 border-stellar-cyan px-5 py-3 text-sm text-stellar-cyan transition-colors hover:bg-stellar-cyan hover:text-void-black"
            >
              Open full timeline archive
            </button>
          </div>
        ) : (
          <div className="mt-8 text-center">
            <span className="text-asteroid-grey text-sm">End of Timeline</span>
          </div>
        )}
      </div>
    </section>
  );
}
