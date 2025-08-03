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

      {/* About Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-center mb-16">My Passions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="mb-4 text-star-white">Astrophysics Research</h3>
            <p className="text-asteroid-grey">
              Exploring cosmic phenomena through computational modeling, statistical analysis, and advanced simulation techniques to understand the fundamental physics of our universe.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🦾</div>
            <h3 className="mb-4 text-star-white">AI Applications</h3>
            <p className="text-asteroid-grey">
              Building intelligent systems and agentic AI solutions that solve real-world problems across industries, from finance to scientific research and beyond.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="mb-4 text-star-white">Data Science</h3>
            <p className="text-asteroid-grey">
              Extracting meaningful insights from complex datasets using machine learning, statistical modeling, and advanced data visualization techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Experience Highlight */}
      <ExperienceHighlight
        title="AI Voice Agent in Action"
        subtitle="Real-time Pizza Ordering System"
        description="Watch this AI agent take pizza orders in real-time, demonstrating advanced voice recognition, context understanding, and automated workflow processing. This technology can be applied to any business using telephone-based customer support."
        media={{
          type: "video",
          src: "/projects/pizza-agent/demo.mp4",
          alt: "Pizza voice AI agent demo showcasing an AI agent that takes pizza orders over phone",
          poster: "/projects/pizza-agent/poster.png",
          autoplay: false,
          loop: true,
          muted: true
        }}
        techStack={[
          "Deepgram",
          "Voice AI", 
          "Agentic AI",
          "Python",
          "Asyncio",
          "Twilio",
          "React",
          "Context Engineering"
        ]}
        githubUrl="https://github.com/ZavierKamath/pizza-agent"
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
              backgroundColor: 'transparent',
              boxShadow: '0 0 10px rgba(91, 33, 182, 0.4), 0 0 20px rgba(91, 33, 182, 0.2), 0 0 30px rgba(91, 33, 182, 0.1)',
            }}
          >
            Get in Touch
          </a>
          <a 
            href="/about" 
            className="btn-secondary"
            style={{
              backgroundColor: 'transparent',
              boxShadow: '0 0 10px rgba(91, 33, 182, 0.4), 0 0 20px rgba(91, 33, 182, 0.2), 0 0 30px rgba(91, 33, 182, 0.1)',
            }}
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
