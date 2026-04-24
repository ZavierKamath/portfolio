import { Hero } from "@/components/home/Hero";
import { ExperienceHighlight } from "@/components/home/ExperienceHighlight";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Scroll indicator */}
      <div className="text-center py-4 -mt-24">
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

      {/* Featured Experience Highlight */}
      <ExperienceHighlight
        items={[
          {
            title: "Reusable Enterprise RAG Platform",
            subtitle: "Config-driven internal knowledge systems for teams across Huntington",
            description:
              "I built reusable AWS infrastructure for retrieval, indexing, agent configuration, session history, observability, and reranked search so new internal RAG tools can be launched without rebuilding the stack from scratch.",
            impact:
              "This platform now supports multiple enterprise use cases and powers tools used by tens of thousands of colleagues.",
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
              "This project is still in development, and I am spearheading much of the data and AI work needed to prepare it for production. The work includes nightly data preparation, large-scale prompt generation, and the foundation for future customer-facing conversational experiences.",
            impact:
              "The goal is a production-ready system that can eventually support AI experiences across mobile and web for millions of customers.",
            status: "In Development",
            techStack: ["AWS Glue", "Athena", "Snowflake", "Cloud Run", "Vertex AI", "SQL"],
            href: "/industry",
            hrefLabel: "See project details",
          },
        ]}
      />

      {/* Call to Action */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="mb-8">Let&apos;s Connect</h2>
        <p className="text-body-lg max-w-2xl mx-auto mb-12">
          Interested in collaborating on research projects, discussing AI applications in science,
          or exploring opportunities? I&apos;d love to hear from you.
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
