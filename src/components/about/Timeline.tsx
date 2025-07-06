"use client";

import { motion } from "framer-motion";
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
    icon: "💼"
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
    icon: "🏆"
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
    icon: "🎓"
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
    icon: "🔬"
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
    icon: "🎮"
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
    icon: "🎖️"
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
    icon: "📚"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<'all' | 'education' | 'experience' | 'award'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
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
      case 'education': return 'border-nebula-purple';
      case 'experience': return 'border-cosmic-blue';
      case 'award': return 'border-starlight-yellow';
      default: return 'border-moonlight-gray';
    }
  };

  const getTypeBackground = (type: string) => {
    switch (type) {
      case 'education': return 'bg-nebula-purple/10';
      case 'experience': return 'bg-cosmic-blue/10';
      case 'award': return 'bg-starlight-yellow/10';
      default: return 'bg-moonlight-gray/10';
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-gradient mb-4">Journey</h2>
        <div className="flex flex-wrap gap-2">
          {(['all', 'education', 'experience', 'award'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === type
                  ? 'bg-cosmic-blue text-white shadow-lg'
                  : 'bg-space-dark/50 text-moonlight-gray hover:bg-space-dark/80'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-blue via-nebula-purple to-starlight-yellow opacity-50" />

        <div className="space-y-8">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              id={item.id}
              variants={itemVariants}
              className={`timeline-item relative flex items-start space-x-6 ${
                visibleItems.has(item.id) ? 'animate-fade-in' : ''
              }`}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full border-2 ${getTypeColor(item.type)} ${getTypeBackground(item.type)} flex items-center justify-center text-2xl z-10 bg-space-dark`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className={`card border-l-4 ${getTypeColor(item.type)} pl-6`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <span className="text-sm text-moonlight-gray/80 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-cosmic-blue font-medium">{item.organization}</p>
                    <p className="text-moonlight-gray/80 text-sm">{item.location}</p>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, index) => (
                      <li key={index} className="text-body flex items-start">
                        <span className="text-starlight-yellow mr-2 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}