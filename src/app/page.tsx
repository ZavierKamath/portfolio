import { Hero } from "@/components/home/Hero";
import { ExperienceHighlight } from "@/components/home/ExperienceHighlight";
import { FeaturedDemo } from "@/components/home/FeaturedDemo";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Scroll indicator */}
      <div className="text-center py-4">
        <p className="text-moonlight-gray/60 text-sm mb-2">Scroll to explore</p>
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 mx-auto text-nebula-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Featured Demo */}
      <FeaturedDemo
        eyebrow="Featured Personal Build"
        title="Memvia: AI Resume + Job Application Assistant"
        description="Built Memvia, a full-stack AI job application assistant that generates tailored resume content and application answers by searching a curated memory store. Developed the FastAPI, Pydantic AI, OpenRouter, SQLite, React, TypeScript, Tailwind, and Vite stack by hand."
        youtubeId="v_iPcjeXWnI"
        ctaHref="/personal"
        ctaLabel="View personal projects"
      />

      {/* Featured Experience Highlight */}
      <ExperienceHighlight
        items={[
          {
            title: "Reusable Enterprise RAG Platform",
            subtitle: "Config-driven internal knowledge systems for teams across Huntington",
            description:
              "Saved an estimated $300K+ per year by leading development of reusable AWS infrastructure for retrieval, indexing, agent configuration, session history, observability, and reranked search.",
            impact:
              "Powers tools used by tens of thousands of colleagues and standardizes chatbot delivery across 5 internal AI projects.",
            status: "Production Systems",
            techStack: ["Python", "AWS Lambda", "OpenSearch", "LangChain", "Strands", "LangFuse"],
            href: "/industry",
            hrefLabel: "View industry work",
          },
          {
            title: "Customer-Facing Financial Insights + AI Chatbot",
            subtitle:
              "Preparing personalized financial AI experiences for Huntington digital channels",
            description:
              "Lead development of customer-facing AI prototypes by designing nightly data preparation, large-scale prompt generation, and cross-cloud serving architecture for future mobile and web experiences.",
            impact:
              "Lays groundwork for production AI experiences that could eventually serve millions of banking customers.",
            status: "In Development",
            techStack: ["AWS Glue", "Athena", "Snowflake", "Cloud Run", "Vertex AI", "SQL"],
            href: "/industry",
            hrefLabel: "See project details",
          },
          {
            title: "AI Enablement, Mentoring, and Education",
            subtitle: "Teaching colleagues how to use AI tools responsibly and effectively",
            description:
              "Drove responsible AI adoption by teaching developers, business partners, executives, and large internal audiences how to use Copilot, Claude Code, OpenCode, Codex, and AI chatbots effectively.",
            impact:
              "Turns individual AI expertise into team capability through presentations, documentation, workflow design, and hands-on mentoring for hundreds of colleagues.",
            status: "Enablement",
            techStack: [
              "Copilot",
              "Claude Code",
              "OpenCode",
              "Codex",
              "Technical Writing",
              "Mentoring",
            ],
            href: "/industry",
            hrefLabel: "View enablement work",
          },
        ]}
      />

      {/* Call to Action */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="mb-8">Let&apos;s Connect</h2>
        <p className="text-body-lg max-w-2xl mx-auto mb-12">
          Interested in AI engineering, full-stack product work, or practical AI adoption? I&apos;d
          love to hear from you.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:zavierkamath@gmail.com"
            className="btn-primary"
            style={{
              backgroundColor: "transparent",
              boxShadow:
                "0 0 10px rgba(91, 33, 182, 0.4), 0 0 20px rgba(91, 33, 182, 0.2), 0 0 30px rgba(91, 33, 182, 0.1)",
            }}
          >
            Get in Touch
          </a>
          <a
            href="/about"
            className="btn-secondary"
            style={{
              backgroundColor: "transparent",
              boxShadow:
                "0 0 10px rgba(91, 33, 182, 0.4), 0 0 20px rgba(91, 33, 182, 0.2), 0 0 30px rgba(91, 33, 182, 0.1)",
            }}
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
