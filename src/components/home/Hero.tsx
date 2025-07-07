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
                  Zavier Kamath
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-moonlight-gray/80 mb-8 leading-relaxed">
              Bridging Cosmological Research & AI Applications
              </p>

              <CTAButtons />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}