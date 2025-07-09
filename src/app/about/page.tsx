"use client";

import Timeline from "@/components/about/Timeline";
import ContactLinks from "@/components/about/ContactLinks";
import ProfessionalPhoto from "@/components/about/ProfessionalPhoto";

export default function About() {
  return (
    <main className="container mx-auto min-h-screen py-12 fade-in">
      {/* Hero Section */}
      <section className="mb-16 fade-in-delay-1">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">About Me</h1>
          <p className="text-body-lg text-moonlight-gray/80 max-w-2xl mx-auto">
            From exploring the cosmos to building intelligent systems, my journey combines the rigor of physics with the innovation of AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Professional Photo */}
          <div className="lg:col-span-1">
            <div className="max-w-sm mx-auto">
              <ProfessionalPhoto className="w-full max-w-sm" />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="mb-4 text-star-white">Background</h3>
              <p className="text-asteroid-grey mb-4">
                My journey bridges the cosmic and computational, spanning from dark matter research in 
                astrophysics to building intelligent AI systems. This unique path combines rigorous 
                scientific methodology with cutting-edge technology development, creating a foundation 
                for both theoretical understanding and practical innovation.
              </p>
              <p className="text-asteroid-grey">
                The mathematical rigor of physics—including Bayesian inference, Monte Carlo simulations, 
                and optimization theory—translates seamlessly to machine learning architectures, statistical 
                modeling, and enterprise AI system design, enabling solutions that are both scientifically 
                sound and commercially viable.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-4 text-star-white">Current Focus</h3>
              <p className="text-asteroid-grey mb-4">
                As a Data Analyst Co-op at Huntington National Bank, I architect and deploy agentic AI 
                systems that revolutionize financial services through intelligent automation. My work 
                spans from theoretical AI research to production-ready enterprise solutions, creating 
                tangible value through innovative technology applications.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#FF6B35' }}>AI & Machine Learning</h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• Advanced agentic AI architectures</li>
                    <li>• Enterprise LLM automation pipelines</li>
                    <li>• Deep neural network optimization</li>
                    <li>• Sophisticated prompt engineering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stellar-cyan mb-2">Research & Data</h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• Advanced Bayesian statistical modeling</li>
                    <li>• High-performance computational systems</li>
                    <li>• Interactive data visualization</li>
                    <li>• Reproducible research methodologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16 fade-in-delay-2">
        <Timeline />
      </section>

      {/* Contact Section */}
      <section className="mb-8 fade-in-delay-2">
        <div className="max-w-2xl mx-auto">
          <ContactLinks />
        </div>
      </section>
    </main>
  );
}
