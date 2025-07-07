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
            <h3 className="mb-4">Astrophysics Research</h3>
            <p className="text-body">
              Deep exploration of astrophysical phenomena using computational methods and Bayesian statistics.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🦾</div>
            <h3 className="mb-4">AI Applications</h3>
            <p className="text-body">
              Creation and application of Agentic AI systems for real-world applications. 
              Leveraging LLMs and AI tools to build products and services.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="mb-4">Data Science</h3>
            <p className="text-body">
              Machine learning applications for finding insights in data.
              Neural networks, Random Forests, and other techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="container mx-auto py-20">
        <h2 className="text-center mb-16">Experience Highlights</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="mb-4">Latest Research Project</h3>
            <p className="text-body-lg mb-4">
              Developed novel neural network architectures for analyzing gravitational wave data,
              improving detection sensitivity by 15% over traditional methods.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pulsar-purple/20 text-pulsar-purple rounded-full text-sm">
                Deep Learning
              </span>
              <span className="px-3 py-1 bg-stellar-blue/20 text-stellar-blue rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-aurora-green/20 text-aurora-green rounded-full text-sm">
                TensorFlow
              </span>
            </div>
          </div>

          <div className="card">
            <h3 className="mb-4">Industry Application</h3>
            <p className="text-body-lg mb-4">
              Built scalable data pipeline processing terabytes of astronomical observations,
              enabling real-time analysis and automated anomaly detection.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-supernova-orange/20 text-supernova-orange rounded-full text-sm">
                Data Engineering
              </span>
              <span className="px-3 py-1 bg-stellar-blue/20 text-stellar-blue rounded-full text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-aurora-green/20 text-aurora-green rounded-full text-sm">
                Apache Spark
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
          <a href="mailto:zavierkamath@gmail.com" className="btn-primary">
            Get in Touch
          </a>
          <a href="/about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
