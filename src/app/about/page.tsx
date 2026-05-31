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
            I build practical AI systems and full-stack products, then teach other people how to use
            them responsibly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Professional Photo */}
          <div className="lg:col-span-1">
            <div className="max-w-sm mx-auto">
              <ProfessionalPhoto src="/hero/suit_and_tie.png" className="w-full max-w-sm" />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="mb-4 text-star-white">Background</h3>
              <p className="text-asteroid-grey mb-4">
                I&apos;m an AI Engineer and full-stack developer at Huntington National Bank, where
                I lead production-minded AI work in a highly regulated banking environment. My
                strongest work combines agentic AI, data systems, backend services, React frontends,
                and practical product design.
              </p>
              <p className="text-asteroid-grey">
                Before moving into industry AI engineering, I trained in physics and astrophysics at
                Ohio State and advanced dark matter research through Bayesian analysis and code
                optimization. Astrophysics is still a personal interest, but professionally I use
                that research background to build reliable software and AI products.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-4 text-star-white">Current Focus</h3>
              <p className="text-asteroid-grey mb-4">
                At Huntington, I lead development of reusable AI platforms, customer-facing AI
                prototypes, document processing workflows, and React interfaces that make AI systems
                usable for business partners. Outside work, I build personal AI products such as
                Memvia, Nero, and Physics Grad Match to keep sharpening end-to-end product
                engineering.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#FF6B35" }}>
                    AI Engineering
                  </h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• Reusable enterprise RAG systems</li>
                    <li>• Customer-facing LLM product architecture</li>
                    <li>• Agentic workflows and tool-calling systems</li>
                    <li>• AI document processing and data pipelines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stellar-cyan mb-2">Full-Stack Development</h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• React, TypeScript, and Tailwind frontends</li>
                    <li>• Python, FastAPI, and Pydantic AI backends</li>
                    <li>• Cross-cloud data and inference architecture</li>
                    <li>• Product demos, dashboards, and AI UX</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="mb-4 text-star-white">Communication & AI Education</h3>
              <p className="text-asteroid-grey mb-4">
                A major part of my value is helping other people use AI well. I drove responsible AI
                adoption by teaching developers, business partners, executives, and large internal
                audiences how to use Copilot, Claude Code, OpenCode, Codex, and AI chatbots
                effectively. That includes presentations to hundreds of colleagues, technical
                documentation, workflow design, and direct mentoring.
              </p>
              <p className="text-asteroid-grey">
                I also own a data science AI agent skills repository, capturing team knowledge so
                colleagues can reuse it through agentic workflows. I care about turning AI from
                isolated demos into shared engineering capability.
              </p>
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
