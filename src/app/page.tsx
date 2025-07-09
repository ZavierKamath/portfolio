import { Hero } from "@/components/home/Hero";

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

      {/* Experience Preview */}
      <section className="container mx-auto py-20">
        <h2 className="text-center mb-16">Experience Highlights</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="mb-4 text-star-white">Dark Matter Model Analysis</h3>
            <p className="text-asteroid-grey mb-4">
            Advanced research constraining Warm Dark Matter particle mass to &gt;4 keV/c² through 
            sophisticated Bayesian statistical analysis of Milky Way satellite galaxy data, achieving 
            breakthrough improvements in computational efficiency and doubling previous research bounds.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pulsar-purple/20 text-pulsar-purple rounded-full text-sm">
                Bayesian Statistics
              </span>
              <span className="px-3 py-1 bg-stellar-blue/20 text-stellar-blue rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-aurora-green/20 text-aurora-green rounded-full text-sm">
                Computational Astrophysics
              </span>
            </div>
          </div>

          <div className="card">
            <h3 className="mb-4 text-star-white">Digital Loan Portal POC</h3>
            <p className="text-asteroid-grey mb-4">
            Engineered a fully autonomous agentic AI system for loan processing that seamlessly handles 
            customer interactions, document analysis, natural language processing, and secure data 
            management using enterprise-grade AWS infrastructure and advanced LLM workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-supernova-orange/20 text-supernova-orange rounded-full text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-stellar-blue/20 text-stellar-blue rounded-full text-sm">
                AI Systems Engineering
              </span>
              <span className="px-3 py-1 bg-aurora-green/20 text-aurora-green rounded-full text-sm">
                Context Engineering
              </span>
            </div>
          </div>
        </div>
      </section>

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
