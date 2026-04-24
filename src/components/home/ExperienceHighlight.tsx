"use client";

interface HighlightedExperienceItem {
  title: string;
  subtitle?: string;
  description: string;
  impact?: string;
  status?: string;
  techStack: string[];
  href?: string;
  hrefLabel?: string;
}

interface ExperienceHighlightProps {
  items: HighlightedExperienceItem[];
}

export function ExperienceHighlight({ items }: ExperienceHighlightProps) {
  return (
    <section className="container mx-auto py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl text-star-white mb-4">Highlighted Experiences</h2>
          <p className="text-moonlight-gray/75 max-w-3xl mx-auto leading-relaxed">
            A snapshot of the Huntington work I am most focused on right now, from reusable internal
            AI platforms to customer-facing financial experiences being prepared for production.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((item, index) => {
            const accentClass =
              index % 2 === 0
                ? "border-stellar-cyan shadow-[8px_8px_0_var(--stellar-cyan)]"
                : "border-quasar-yellow shadow-[8px_8px_0_var(--quasar-yellow)]";
            const badgeClass =
              index % 2 === 0
                ? "border-stellar-cyan/60 text-stellar-cyan bg-stellar-cyan/10"
                : "border-quasar-yellow/60 text-quasar-yellow bg-quasar-yellow/10";

            return (
              <article
                key={item.title}
                className={`pixel-card flex h-full flex-col border-4 bg-void-black/95 p-8 ${accentClass}`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-moonlight-gray/60">
                      Huntington National Bank
                    </p>
                    <h3 className="font-display text-xl text-star-white md:text-2xl">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="mt-2 text-sm text-moonlight-gray/80">{item.subtitle}</p>
                    )}
                  </div>

                  {item.status && (
                    <span
                      className={`shrink-0 border px-3 py-2 text-[11px] uppercase tracking-[0.2em] ${badgeClass}`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                <p className="mb-5 text-sm leading-relaxed text-moonlight-gray/85 md:text-base">
                  {item.description}
                </p>

                {item.impact && (
                  <p className="mb-6 border-l-2 border-supernova-orange pl-4 text-sm leading-relaxed text-star-white/90">
                    {item.impact}
                  </p>
                )}

                <div className="mb-8 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-moonlight-gray/20 bg-cosmic-navy/70 px-2 py-1 text-xs text-moonlight-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.href && (
                  <div className="mt-auto">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 border-2 border-stellar-cyan px-4 py-3 text-sm text-stellar-cyan transition-colors hover:bg-stellar-cyan hover:text-void-black"
                    >
                      <span>{item.hrefLabel ?? "Explore details"}</span>
                      <span aria-hidden="true">-&gt;</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
