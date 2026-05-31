interface FeaturedDemoProps {
  title: string;
  eyebrow: string;
  description: string;
  youtubeId: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function FeaturedDemo({
  title,
  eyebrow,
  description,
  youtubeId,
  ctaHref,
  ctaLabel,
}: FeaturedDemoProps) {
  return (
    <section className="container mx-auto py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-stellar-cyan">
              {eyebrow}
            </p>
            <h2 className="mb-5 font-display text-2xl text-star-white md:text-3xl">{title}</h2>
            <p className="mb-8 text-sm leading-relaxed text-moonlight-gray/80 md:text-base">
              {description}
            </p>

            {ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 border-2 border-stellar-cyan px-4 py-3 text-sm text-stellar-cyan transition-colors hover:bg-stellar-cyan hover:text-void-black"
              >
                <span>{ctaLabel ?? "View project"}</span>
                <span aria-hidden="true">-&gt;</span>
              </a>
            )}
          </div>

          <div className="pixel-card border-4 border-stellar-cyan bg-void-black p-3 shadow-[8px_8px_0_var(--stellar-cyan)]">
            <div className="relative aspect-video overflow-hidden border-2 border-stellar-cyan bg-cosmic-navy">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                title={`${title} video demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 scanlines opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
