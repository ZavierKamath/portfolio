import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-center mb-16">About My Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="mb-4">Research</h3>
            <p className="text-body">
              Deep exploration of astrophysical phenomena using computational methods and data
              analysis techniques.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="mb-4">AI & ML</h3>
            <p className="text-body">
              Applying machine learning to scientific discovery and building intelligent systems for
              real-world applications.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="mb-4">Technology</h3>
            <p className="text-body">
              Full-stack development with modern frameworks, creating tools that make complex data
              accessible.
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
          <a href="mailto:contact@example.com" className="btn-primary">
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
