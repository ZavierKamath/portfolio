"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} reset={this.handleReset} />;
      }

      return (
        <div className="container mx-auto py-12 px-4">
          <div className="text-center max-w-lg mx-auto pixel-fade-in">
            {/* Error Terminal */}
            <div className="border-pixel-thick border-mars-red bg-void-black p-4 mb-6">
              <div className="text-mars-red font-display text-sm mb-2">
                CRITICAL_ERROR_DETECTED
              </div>
              <div className="text-quasar-yellow font-body text-xs">
                ████████████████████████ 100% FAILED
              </div>
            </div>

            <div className="font-display text-6xl mb-4 pixel-blink text-mars-red">
              !
            </div>

            <h2 className="font-ui text-lg font-bold mb-4 text-stellar-cyan">
              COMPONENT MALFUNCTION
            </h2>
            
            <div className="font-body text-sm text-star-white mb-6 space-y-1">
              <div>&gt; Unexpected error in component</div>
              <div>&gt; Error boundary triggered</div>
              <div>&gt; Safe mode activated</div>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-6 p-4 border-pixel border-mars-red card-alert text-left">
                <h3 className="text-mars-red font-ui font-bold mb-2 text-sm">
                  [DEBUG_INFO]
                </h3>
                <pre className="font-code text-xs text-star-white whitespace-pre-wrap break-words">
                  {this.state.error.message}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="btn-pixel-primary flex items-center justify-center space-x-2"
              >
                <span className="font-display">⟲</span>
                <span>RESET</span>
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="btn-pixel-secondary flex items-center justify-center space-x-2"
              >
                <span className="font-display">↻</span>
                <span>RELOAD</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}