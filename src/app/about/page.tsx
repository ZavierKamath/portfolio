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
            From exploring the cosmos to building intelligent systems, my journey combines the rigor
            of physics with the innovation of AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Professional Photo */}
          <div className="lg:col-span-1">
            <div className="max-w-sm mx-auto">
              <ProfessionalPhoto src="/professional-photo.jpg" className="w-full max-w-sm" />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="mb-4 text-star-white">Background</h3>
              <p className="text-asteroid-grey mb-4">
                My background combines dark matter research, production AI engineering at Huntington
                National Bank, and graduate study in Georgia Tech&apos;s Online Master of Science in
                Computer Science program on the AI track. That mix gives me experience with rigorous
                scientific analysis, real-world system building, and continued formal study in
                computer science.
              </p>
              <p className="text-asteroid-grey">
                The statistical methods I used in physics research—like Monte Carlo simulations and
                Bayesian analysis—directly apply to machine learning and AI development. This
                background helps me build systems that actually work in practice.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-4 text-star-white">Current Focus</h3>
              <p className="text-asteroid-grey mb-4">
                At Huntington, I build reusable AI platforms, document processing systems, and
                in-development customer-facing financial AI experiences. I currently spearhead much
                of the data and AI preparation work for a customer insights initiative while
                continuing my OMSCS coursework on the side.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#FF6B35" }}>
                    AI & Machine Learning
                  </h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• Reusable enterprise RAG systems</li>
                    <li>• Customer-facing LLM product design</li>
                    <li>• AI document processing workflows</li>
                    <li>• Technical communication and enablement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stellar-cyan mb-2">Research & Data</h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• Advanced Bayesian statistical modeling</li>
                    <li>• Cross-cloud data and AI pipelines</li>
                    <li>• Data visualization and analysis</li>
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
