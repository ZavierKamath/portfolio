"use client";

import { useEffect, useState } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error("Application error:", error);
  }, [error]);

  if (!mounted) return null;

  const handleReset = () => {
    try {
      reset();
    } catch (resetError) {
      console.error("Error during reset:", resetError);
      window.location.reload();
    }
  };

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative pixel-fade-in">
          {/* ASCII Error Display */}
          <div className="mb-8 font-display">
            <div className="text-8xl mb-4 pixel-blink text-mars-red">!</div>
            <div className="border-pixel-thick border-mars-red bg-void-black p-4 font-body text-xs">
              <div className="text-mars-red mb-2">
                ERROR: SYSTEM_MALFUNCTION_DETECTED
              </div>
              <div className="text-quasar-yellow">
                ████████████████████████ 100% FAILED
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 pixel-fade-in pixel-delay-200">
            <h1 className="font-display text-2xl text-gradient mb-4 glow-cyan">
              SYSTEM ERROR
            </h1>
            <h2 className="font-ui text-lg font-bold mb-4 text-stellar-cyan">
              CRITICAL MALFUNCTION
            </h2>
            <p className="font-body text-base text-star-white mb-6">
              &gt; Navigation system failure detected<br/>
              &gt; Mission control has been notified<br/>
              &gt; Attempting automated recovery...
            </p>
          </div>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-8 p-4 border-pixel border-mars-red card-alert text-left pixel-fade-in pixel-delay-300">
              <h3 className="text-mars-red font-ui font-bold mb-2 text-sm">
                [DEBUG_OUTPUT]
              </h3>
              <pre className="font-code text-xs text-star-white whitespace-pre-wrap break-words bg-void-black p-2 border-pixel border-asteroid-grey">
                {error.message}
              </pre>
              {error.digest && (
                <p className="font-body text-xs text-asteroid-grey mt-2">
                  &gt; ERROR_ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons - Pixel Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 pixel-fade-in pixel-delay-400">
            <button
              onClick={handleReset}
              className="btn-pixel-primary flex items-center justify-center space-x-2"
            >
              <span className="font-display">⟲</span>
              <span>RETRY</span>
            </button>
            
            <button
              onClick={() => window.location.href = "/"}
              className="btn-pixel-secondary flex items-center justify-center space-x-2"
            >
              <span className="font-display">⌂</span>
              <span>HOME</span>
            </button>
          </div>

          {/* Technical Support Terminal */}
          <div className="p-6 card-pixel card-data border-pixel-thick border-quasar-yellow pixel-fade-in pixel-delay-500">
            <div className="font-display text-xl mb-3 text-quasar-yellow">
              [SUPPORT]
            </div>
            <div className="font-body text-sm space-y-2">
              <div className="text-star-white">
                &gt; Technical support required?
              </div>
              <div className="text-asteroid-grey">
                &gt; Contact mission control with error data
              </div>
              <div className="border-t border-asteroid-grey pt-2 mt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <span className="text-asteroid-grey">&gt; ERROR_TIME:</span>
                  <span className="text-stellar-cyan font-code">
                    {new Date().toISOString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}