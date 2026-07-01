const proofPoints = [
  {
    value: "Lead Developer",
    label: "of RAG framework used to save 1.5M+ / year",
    href: "/industry",
  },
  {
    value: "Mentor",
    label: "teaching 200+ developers and executives to use AI tools",
    href: "/industry#featured-work",
  },
  {
    value: "Builder",
    label: "of customer-facing AI solutions",
    href: "/industry",
  },
  {
    value: "AI Apps",
    label: "built from idea to production",
    href: "/personal",
  },
];

const audienceRoutes = [
  {
    label: "Recruiters",
    command: "open impact",
    description: "Start with current work and measurable results.",
    href: "/industry",
  },
  {
    label: "AI Engineers",
    command: "open systems",
    description: "Look at RAG, agents, data, and docs.",
    href: "/industry#featured-work",
  },
  {
    label: "Researchers",
    command: "open research",
    description: "See the physics, stats, and code background.",
    href: "/research",
  },
  {
    label: "Demos",
    command: "open products",
    description: "Try Memvia, Nero, and other small products.",
    href: "/personal",
  },
];

const worlds = [
  {
    title: "Industry",
    subtitle: "Banking AI work",
    href: "/industry",
    accent: "border-stellar-cyan text-stellar-cyan",
  },
  {
    title: "Personal",
    subtitle: "AI demos and apps",
    href: "/personal",
    accent: "border-plasma-pink text-plasma-pink",
  },
  {
    title: "Coursework",
    subtitle: "ML and analysis",
    href: "/coursework",
    accent: "border-galaxy-green text-galaxy-green",
  },
  {
    title: "Research",
    subtitle: "Astrophysics code",
    href: "/research",
    accent: "border-quasar-yellow text-quasar-yellow",
  },
];

export function PortfolioDigest() {
  return (
    <section className="container mx-auto py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-4 border-quasar-yellow bg-void-black/95 p-6 shadow-[8px_8px_0_var(--quasar-yellow)]">
          <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-quasar-yellow">
            Start Here
          </p>
          <h2 className="mb-5 font-ui text-3xl font-bold leading-tight text-star-white">
            The shortest version of the portfolio.
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <a
                key={point.value}
                href={point.href}
                className="group border border-quasar-yellow/50 bg-quasar-yellow/10 p-4 transition-colors hover:bg-quasar-yellow hover:text-void-black"
              >
                <p className="font-ui text-2xl font-bold text-star-white group-hover:text-void-black">
                  {point.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-moonlight-gray/80 group-hover:text-void-black/80">
                  {point.label}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="border-2 border-stellar-cyan bg-cosmic-navy/70 p-5 shadow-[4px_4px_0_var(--stellar-cyan)]">
          <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-stellar-cyan">
            Paths
          </p>
          <div className="space-y-3">
            {audienceRoutes.map((route) => (
              <a
                key={route.label}
                href={route.href}
                className="group block border border-stellar-cyan/45 bg-void-black/80 p-4 transition-colors hover:border-quasar-yellow hover:bg-void-black"
              >
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-ui text-xl font-bold text-star-white">{route.label}</h3>
                  <span className="text-xs text-stellar-cyan group-hover:text-quasar-yellow">
                    &gt; {route.command}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-moonlight-gray/75">
                  {route.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-2 border-moonlight-gray/20 bg-void-black/90 p-5">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.26em] text-moonlight-gray/55">
              Sections
            </p>
            <h2 className="font-ui text-3xl font-bold text-star-white">Pick a section.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-moonlight-gray/65">
            Four ways into the same work.
          </p>
        </div>

        <div className="relative grid gap-4 md:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-stellar-cyan via-quasar-yellow to-plasma-pink opacity-50 md:block"
            aria-hidden="true"
          />
          {worlds.map((world, index) => (
            <a
              key={world.title}
              href={world.href}
              className={`relative z-10 border-2 bg-cosmic-navy/95 p-5 transition-transform hover:-translate-y-1 ${
                index % 2 === 0 ? "" : "md:mt-6"
              } ${world.accent}`}
            >
              <span className="mb-4 block h-3 w-3 bg-current" aria-hidden="true" />
              <h3 className="font-ui text-2xl font-bold text-star-white">{world.title}</h3>
              <p className="mt-2 text-sm text-moonlight-gray/70">{world.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
