"use client";

import Timeline from "@/components/about/Timeline";
import ContactLinks from "@/components/about/ContactLinks";
import ProfessionalPhoto from "@/components/about/ProfessionalPhoto";

export default function About() {
  const quickFacts = [
    {
      label: "Current Role",
      value: "AI Engineer",
      detail: "Building internal AI tools at Huntington National Bank",
    },
    {
      label: "Education",
      value: "Georgia Tech OMSCS + OSU Physics",
      detail: "AI graduate work plus physics research",
    },
    {
      label: "Strongest Work",
      value: "RAG, AI agents, and AI Education",
      detail: "Production systems, useful chatbots, and presentations",
    },
    {
      label: "Currently Building",
      value: "Banking AI + small products",
      detail: "Memvia, Nero, Physics Grad Match, and automation experiments",
    },
  ];

  return (
    <main className="container mx-auto min-h-screen py-12 fade-in">
      {/* Hero Section */}
      <section className="mb-16 fade-in-delay-1">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">About Me</h1>
          <p className="text-body-lg text-moonlight-gray/80 max-w-3xl mx-auto">
            I build practical AI tools, then teach people how to make the most out of them.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="border-2 border-stellar-cyan bg-void-black/95 p-4 shadow-[2px_2px_0_var(--stellar-cyan)]"
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-stellar-cyan">
                {fact.label}
              </p>
              <h2 className="font-ui text-xl font-bold leading-tight text-star-white">
                {fact.value}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-moonlight-gray/70">{fact.detail}</p>
            </div>
          ))}
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
                I&apos;m an AI Engineer at Huntington National Bank, where I build AI tools in a
                regulated banking environment. My strongest work combines agents, data systems,
                backend services, React frontends, and practical product design.
              </p>
              <p className="text-asteroid-grey">
                Before industry, I studied physics and astrophysics at Ohio State and worked on dark
                matter research through Bayesian analysis and code optimization. I still use that
                research background to build reliable software.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-4 text-star-white">Current Focus</h3>
              <p className="text-asteroid-grey mb-4">
                At Huntington, I build shared AI tools, customer-facing AI solutions, document
                processing flows, and React interfaces. Outside work, I build products like Memvia,
                Nero, and Physics Grad Match.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#FF6B35" }}>
                    AI Engineering
                  </h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• Shared RAG systems</li>
                    <li>• Customer AI solutions</li>
                    <li>• Agents and tool calls</li>
                    <li>• Document processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stellar-cyan mb-2">Web Development</h4>
                  <ul className="space-y-1 text-asteroid-grey">
                    <li>• React and TypeScript frontends</li>
                    <li>• Python and FastAPI backends</li>
                    <li>• Cloud data and inference</li>
                    <li>• Demos and dashboards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="mb-4 text-star-white">Communication & AI Education</h3>
              <p className="text-asteroid-grey mb-4">
                A major part of my value is helping other people use AI well. I&apos;ve taught
                developers, business partners, executives, and large internal groups how to use
                Copilot, Claude Code, OpenCode, Codex, and chatbots effectively.
              </p>
              <p className="text-asteroid-grey">
                I also own a data science agent skills repo that captures reusable team knowledge.
                I care about turning AI from isolated demos into shared practice.
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
