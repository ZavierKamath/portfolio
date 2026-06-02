"use client";

import { ReactNode } from "react";

type ProjectPageKind = "industry" | "personal" | "coursework" | "research";

interface ProjectPageShellProps {
  kind: ProjectPageKind;
  title: string;
  description: string;
  children: ReactNode;
}

const pageThemes: Record<
  ProjectPageKind,
  {
    command: string;
    panelLabel: string;
    visualTitle: string;
    accent: string;
    border: string;
    shadow: string;
    chips: string[];
    nodes: string[];
  }
> = {
  industry: {
    command: "open banking-ai",
    panelLabel: "Overview",
    visualTitle: "AI tools built for banking",
    accent: "text-stellar-cyan",
    border: "border-stellar-cyan",
    shadow: "shadow-[8px_8px_0_var(--stellar-cyan)]",
    chips: ["Lead Developer", "AI Mentor", "Agentic Builder"],
    nodes: ["AWS", "RAG", "AGENT", "API"],
  },
  personal: {
    command: "open demos",
    panelLabel: "Overview",
    visualTitle: "Small AI products to save time",
    accent: "text-plasma-pink",
    border: "border-plasma-pink",
    shadow: "shadow-[8px_8px_0_var(--plasma-pink)]",
    chips: ["Demos", "Voice", "Apps"],
    nodes: ["React", "AI", "Python", "Stripe"],
  },
  coursework: {
    command: "open coursework",
    panelLabel: "Overview",
    visualTitle: "Class projects with real analysis",
    accent: "text-galaxy-green",
    border: "border-galaxy-green",
    shadow: "shadow-[8px_8px_0_var(--galaxy-green)]",
    chips: ["ML", "Stats", "Physics"],
    nodes: ["PCA", "Bayes", "Models", "Plots"],
  },
  research: {
    command: "open research",
    panelLabel: "Overview",
    visualTitle: "Astrophysics research and code",
    accent: "text-quasar-yellow",
    border: "border-quasar-yellow",
    shadow: "shadow-[8px_8px_0_var(--quasar-yellow)]",
    chips: ["Dark matter", "Bayes", "100x faster"],
    nodes: ["Model", "Data", "Poster", "Code"],
  },
};

export function ProjectPageShell({ kind, title, description, children }: ProjectPageShellProps) {
  const theme = pageThemes[kind];

  return (
    <main className="container mx-auto min-h-screen py-12 fade-in">
      <section className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div
          className={`border-4 bg-void-black/95 p-6 ${theme.border} ${theme.shadow} fade-in-delay-1`}
        >
          <p className={`mb-4 text-[10px] uppercase tracking-[0.28em] ${theme.accent}`}>
            &gt; {theme.command}
          </p>
          <h1 className="mb-5 font-ui text-4xl font-bold leading-tight text-star-white md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-moonlight-gray/80">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {theme.chips.map((chip) => (
              <span
                key={chip}
                className={`border px-3 py-2 text-xs ${theme.border} ${theme.accent} bg-cosmic-navy/45`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`relative overflow-hidden border-2 bg-cosmic-navy/70 p-5 ${theme.border} fade-in-delay-2`}
        >
          <div className="absolute inset-0 card-terminal opacity-30" aria-hidden="true" />
          <div className="relative z-10">
            <p className={`mb-3 text-[10px] uppercase tracking-[0.24em] ${theme.accent}`}>
              {theme.panelLabel}
            </p>
            <p className="mb-5 font-ui text-2xl font-bold leading-tight text-star-white">
              {theme.visualTitle}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {theme.nodes.map((node, index) => (
                <div
                  key={node}
                  className={`border bg-void-black/85 p-4 text-center ${theme.border}`}
                  style={{ transform: `translateY(${index % 2 === 0 ? 0 : 8}px)` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-moonlight-gray/55">
                    Node {index + 1}
                  </p>
                  <p className={`mt-2 font-ui text-xl font-bold ${theme.accent}`}>{node}</p>
                </div>
              ))}
            </div>

            <div className={`mt-6 border-l-2 pl-4 ${theme.border}`}>
              <p className="text-sm leading-relaxed text-moonlight-gray/75">
                Start quick. Open details when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="hidden self-start border-2 border-moonlight-gray/20 bg-void-black/90 p-4 lg:sticky lg:top-24 lg:block">
          <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-moonlight-gray/55">
            Page Map
          </p>
          <nav className="space-y-3 text-sm">
            {[
              ["Filters", "#filters"],
              ["Featured", "#featured-work"],
              ["More", "#all-projects"],
              ["Contact", "mailto:zavierkamath@gmail.com"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block border-l-2 border-stellar-cyan/50 pl-3 text-moonlight-gray/75 transition-colors hover:border-quasar-yellow hover:text-quasar-yellow"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div>{children}</div>
      </div>
    </main>
  );
}
