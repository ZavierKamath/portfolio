"use client";

import React from "react";
import { motion } from "framer-motion";
import { errorVariants } from "@/lib/animations";

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

  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} reset={this.reset} />;
      }

      return <DefaultErrorFallback error={this.state.error} reset={this.reset} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  reset: () => void;
}

function DefaultErrorFallback({ error, reset }: ErrorFallbackProps) {
  return (
    <motion.div
      className="min-h-[400px] flex items-center justify-center"
      variants={errorVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-6xl mb-6">🌌</div>
        <h2 className="text-h3 text-moonlight-gray mb-4">Houston, we have a problem</h2>
        <p className="text-moonlight-gray/70 mb-6">
          Something went wrong while loading this section. Don&apos;t worry, our team of space engineers is on it!
        </p>
        
        {error && process.env.NODE_ENV === "development" && (
          <details className="mb-6 p-4 bg-error-red/10 border border-error-red/20 rounded-lg text-left">
            <summary className="cursor-pointer text-error-red font-medium">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-error-red/80 whitespace-pre-wrap">
              {error.stack}
            </pre>
          </details>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-secondary"
          >
            Go Home
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Hook for functional component error boundaries
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
}