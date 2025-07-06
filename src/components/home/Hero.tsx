"use client";

import { PhotoCarousel } from "./PhotoCarousel";
import { CTAButtons } from "./CTAButtons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content container with proper z-index */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Photo carousel and text side-by-side on desktop */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Photo carousel */}
            <div className="order-2 lg:order-1">
              <PhotoCarousel />
            </div>

            {/* Right side - Text content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">
                  From Dark Matter to Neural Networks
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-moonlight-gray/80 mb-8 leading-relaxed">
                Astrophysicist turned AI researcher, bridging the cosmos with cutting-edge machine
                learning. Exploring the universe through data, algorithms, and scientific discovery.
              </p>

              <CTAButtons />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
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
        </div>
      </div>
    </section>
  );
}