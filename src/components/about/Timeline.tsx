"use client";

import { useState, useEffect } from "react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: 'education' | 'experience' | 'award';
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "huntington-coop",
    title: "Data Analyst Co-op",
    organization: "Huntington National Bank",
    location: "Columbus, OH",
    period: "May 2025 - Present",
    description: [
      "Developed fully automatic agentic AI loan application solution demo using AWS and LangChain",
      "Created LLM automation workflows and architecture designs for data science team",
      "Integrated enterprise-grade prompt engineering techniques"
    ],
    type: "experience",
    icon: "■"
  },
  {
    id: "senior-award",
    title: "Physics Senior Award",
    organization: "Alpheus W. and Adah B. Smith Endowment",
    location: "OSU",
    period: "May 2025",
    description: [
      "Recognized for outstanding academic achievement among senior Physics majors",
      "Awarded $400 prize for exceptional performance"
    ],
    type: "award",
    icon: "▲"
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
      "Dean's List recognition for all 8 semesters"
    ],
    type: "education",
    icon: "●"
  },
  {
    id: "research-assistant",
    title: "Astrophysics Research Assistant",
    organization: "OSU Astronomy Department",
    location: "Columbus, OH",
    period: "Summer 2023 - Summer 2024",
    description: [
      "Advanced constraints on Warm Dark Matter particle mass to >4 keV/c²",
      "Optimized computational bottlenecks achieving 100x runtime improvement",
      "Authored research methods summary for upcoming publication"
    ],
    type: "experience",
    icon: "♦"
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
      "Mentored teammates while representing organization"
    ],
    type: "experience",
    icon: "★"
  },
  {
    id: "research-scholarship",
    title: "Summer Research Scholarship",
    organization: "OSU Physics Department",
    location: "Columbus, OH",
    period: "May 2023",
    description: [
      "Awarded $5,000 scholarship for conducting cutting-edge physics research",
      "Recognized for academic excellence and research potential"
    ],
    type: "award",
    icon: "✦"
  },
  {
    id: "trustees-scholarship",
    title: "Trustees Scholarship",
    organization: "The Ohio State University",
    location: "Columbus, OH",
    period: "Fall 2021 - Spring 2025",
    description: [
      "Merit-based scholarship for academic excellence",
      "Sustained high academic performance throughout undergraduate studies"
    ],
    type: "award",
    icon: "♠"
  }
];

export default function Timeline() {
  const [filter, setFilter] = useState<'all' | 'education' | 'experience' | 'award'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const filteredData = timelineData.filter(item => 
    filter === 'all' || item.type === filter
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'var(--nebula-purple)';
      case 'experience': return 'var(--stellar-cyan)';
      case 'award': return 'var(--quasar-yellow)';
      default: return 'var(--asteroid-grey)';
    }
  };

  const getTypeBackground = (type: string) => {
    switch (type) {
      case 'education': return 'rgba(91, 33, 182, 0.1)';
      case 'experience': return 'rgba(15, 188, 220, 0.1)';
      case 'award': return 'rgba(255, 210, 63, 0.1)';
      default: return 'rgba(139, 134, 128, 0.1)';
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="mb-8">
        <div className="border-pixel border-stellar-cyan bg-void-black p-4 font-display">
          <div className="text-terminal text-sm mb-2">
            <span className="text-quasar-yellow">ZAVIER_KAMATH.exe</span> 
            <span className="ml-4">████████░░ 80% Loaded</span>
          </div>
          <div className="border-t border-stellar-cyan pt-2">
            <h2 className="text-gradient font-display text-xl glow-cyan">TIMELINE.DAT</h2>
          </div>
        </div>
        
        {/* Filter Buttons - Pixel Style */}
        <div className="flex flex-wrap gap-2 mt-4">
          {(['all', 'education', 'experience', 'award'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 font-ui text-sm font-bold uppercase transition-all duration-150 border-pixel ${
                filter === type
                  ? 'bg-stellar-cyan text-void-black border-star-white shadow-pixel-sm'
                  : 'bg-cosmic-indigo text-stellar-cyan border-stellar-cyan hover:bg-stellar-cyan hover:text-void-black'
              }`}
              style={{
                transition: 'all 0.15s steps(4)'
              }}
            >
              [
              {filter === type ? '■' : '□'}
              ] {type.toUpperCase()}
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
              var(--quasar-yellow) 100%)`
          }}
        />

        <div className="space-y-8">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className="timeline-item pixel-scroll-reveal relative flex items-start space-x-6"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Pixel Icon */}
              <div 
                className="flex-shrink-0 w-16 h-16 border-pixel-thick flex items-center justify-center text-2xl z-10 font-display pixel-float"
                style={{
                  borderColor: getTypeColor(item.type),
                  backgroundColor: getTypeBackground(item.type),
                  boxShadow: `0 0 0 2px var(--void-black), 4px 4px 0 var(--void-black)`,
                  color: getTypeColor(item.type)
                }}
              >
                {item.icon}
              </div>

              {/* Content Card - Pixel Style */}
              <div className="flex-1 min-w-0">
                <div 
                  className="card-pixel card-starfield relative"
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: getTypeColor(item.type),
                    paddingLeft: '24px',
                    backgroundColor: 'var(--cosmic-navy)'
                  }}
                >
                  {/* Status Bar */}
                  <div className="text-xs font-body text-terminal mb-2 opacity-80">
                    <span className="text-quasar-yellow">[{item.type.toUpperCase()}_ENTRY]</span>
                    <span className="ml-4 text-asteroid-grey">[STATUS: ACTIVE]</span>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-ui text-lg font-bold text-star-white mb-1 glow-cyan">
                      {item.title}
                    </h3>
                    <span 
                      className="font-body text-sm whitespace-nowrap terminal-cursor"
                      style={{ color: getTypeColor(item.type) }}
                    >
                      {item.period}
                    </span>
                  </div>
                  
                  {/* Organization Info */}
                  <div className="mb-4 p-2 bg-cosmic-navy border-pixel border-asteroid-grey">
                    <p className="font-ui font-medium text-stellar-cyan">&gt; {item.organization}</p>
                    <p className="font-body text-sm text-moon-silver">&gt; {item.location}</p>
                  </div>

                  {/* Description List - ASCII Style */}
                  <div className="space-y-1">
                    {item.description.map((desc, descIndex) => (
                      <div key={descIndex} className="font-body text-sm flex items-start">
                        <span 
                          className="mr-3 font-bold"
                          style={{ color: getTypeColor(item.type) }}
                        >
                          ▸
                        </span>
                        <span className="flex-1 text-star-white leading-relaxed">{desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Corner Decoration */}
                  <div 
                    className="absolute top-2 right-2 font-display text-xs opacity-60"
                    style={{ color: getTypeColor(item.type) }}
                  >
                    [·]
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 border-pixel border-stellar-cyan bg-void-black p-2 font-body text-xs text-terminal">
          <span className="text-quasar-yellow">TIMELINE.DAT</span>
          <span className="ml-4 text-asteroid-grey">EOF REACHED</span>
          <span className="ml-4 text-stellar-cyan">PRESS ANY KEY TO CONTINUE_</span>
        </div>
      </div>
    </section>
  );
}