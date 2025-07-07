"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative pixel-fade-in">
          {/* ASCII 404 Display */}
          <div className="mb-8 font-display">
            <div className="border-pixel-thick border-mars-red bg-void-black p-4 mb-4">
              <div className="text-mars-red text-sm mb-2">
                NAVIGATION ERROR: PAGE_NOT_FOUND
              </div>
              <div className="text-quasar-yellow font-lg">
                ERROR CODE: 404
              </div>
            </div>
            
            {/* Pixel Art Rocket */}
            <div className="text-6xl mb-4 pixel-float">🚀</div>
            
            {/* ASCII Stars */}
            <div className="grid grid-cols-6 gap-2 max-w-xs mx-auto mb-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="text-quasar-yellow text-lg pixel-blink"
                  style={{
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  ★
                </div>
              ))}
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 pixel-fade-in pixel-delay-200">
            <h1 className="font-display text-xl text-gradient mb-4 glow-cyan">
              LOST IN CYBERSPACE
            </h1>
            <h2 className="font-ui text-lg font-bold mb-4 text-stellar-cyan">
              COORDINATES UNKNOWN
            </h2>
            <div className="font-body text-sm text-star-white space-y-1">
              <div>&gt; Target page not found in database</div>
              <div>&gt; Scanning alternate routes...</div>
              <div>&gt; Initiating navigation protocol</div>
            </div>
          </div>

          {/* Navigation Links - Pixel Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 pixel-fade-in pixel-delay-400">
            <Link
              href="/"
              className="btn-pixel-primary flex items-center justify-center space-x-2"
            >
              <span className="font-display">⌂</span>
              <span>HOME</span>
            </Link>
            
            <Link
              href="/research"
              className="btn-pixel-secondary flex items-center justify-center space-x-2"
            >
              <span className="font-display">⚗</span>
              <span>RESEARCH</span>
            </Link>
            
            <Link
              href="/about"
              className="btn-pixel-secondary flex items-center justify-center space-x-2"
            >
              <span className="font-display">☽</span>
              <span>ABOUT</span>
            </Link>
          </div>

          {/* Info Terminal */}
          <div className="p-6 card-pixel card-data border-pixel-thick border-stellar-cyan pixel-fade-in pixel-delay-500">
            <div className="font-display text-lg mb-3 text-stellar-cyan">
              [SPACE_FACT.DAT]
            </div>
            <div className="font-body text-sm space-y-2 text-left">
              <div className="text-star-white">
                &gt; DID_YOU_KNOW:
              </div>
              <div className="text-asteroid-grey pl-4">
                In the time it took to reach this page,<br/>
                light from Proxima Centauri traveled<br/>
                ~300,000 kilometers through space!
              </div>
              <div className="border-t border-asteroid-grey pt-2 mt-2">
                <div className="text-stellar-cyan text-xs">
                  &gt; FACT_SOURCE: COSMIC_DATABASE_V2.1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}