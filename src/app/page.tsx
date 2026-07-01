import { Hero } from "@/components/home/Hero";
import { PortfolioDigest } from "@/components/home/PortfolioDigest";
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

      {/* Proof points and section links */}
      <PortfolioDigest />

      {/* Featured Demo */}
      <FeaturedDemo
        eyebrow="Featured Personal Build"
        title="Memvia"
        description="Resume memory assistant that drafts tailored resume content and application answers from a curated memory store. Built with FastAPI, Pydantic AI, SQLite, React, TypeScript, Tailwind, and Vite."
        youtubeId="v_iPcjeXWnI"
        ctaHref="/personal"
        ctaLabel="View personal projects"
      />

      {/* Featured Experience Highlight */}
      <ExperienceHighlight
        items={[
          {
            title: "Shared RAG Platform",
            subtitle: "Reusable knowledge tools for Huntington",
            description:
              "Saved an estimated $1.5M+ per year by building a shared RAG base for 5 internal AI tools.",
            impact:
              "Supports tools used by tens of thousands of colleagues across 5 internal AI projects.",
            status: "Active",
            techStack: ["Python", "AWS Lambda", "OpenSearch", "LangChain", "Strands", "LangFuse"],
            href: "/industry",
            hrefLabel: "View industry work",
          },
          {
            title: "Customer Insights Chatbot",
            subtitle: "In development for mobile and web",
            description:
              "Lead development of AI solutions that turn customer data into useful banking insights.",
            impact: "Lays groundwork for AI features across mobile and web banking.",
            status: "In Development",
            techStack: ["AWS Glue", "Athena", "Snowflake", "Cloud Run", "Vertex AI", "SQL"],
            href: "/industry",
            hrefLabel: "See project details",
          },
          {
            title: "AI Training",
            subtitle: "Teaching colleagues how to use AI well",
            description:
              "Taught developers, business partners, executives, and large internal groups how to use Copilot, Claude Code, OpenCode, Codex, and chatbots effectively.",
            impact:
              "Turned individual AI know-how into team practice through mentoring, docs, and presentations.",
            status: "Training",
            techStack: [
              "Copilot",
              "Claude Code",
              "OpenCode",
              "Codex",
              "Technical Writing",
              "Mentoring",
            ],
            href: "/industry",
            hrefLabel: "View training work",
          },
        ]}
      />

      {/* Call to Action */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="mb-8">Let&apos;s Connect</h2>
        <p className="text-body-lg max-w-2xl mx-auto mb-12">
          Interested in AI tools, web apps, or practical adoption? I&apos;d love to hear from you.
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
