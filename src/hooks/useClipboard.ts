"use client";

import { useState, useCallback } from "react";

interface UseClipboardReturn {
  copy: (text: string) => Promise<void>;
  copied: boolean;
  error: Error | null;
}

export function useClipboard(resetDelay: number = 2000): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(async (text: string) => {
    if (!text) {
      setError(new Error("No text provided"));
      return;
    }

    try {
      // Reset previous state
      setError(null);
      setCopied(false);

      // Check if clipboard API is available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (!successful) {
          throw new Error("Failed to copy text");
        }
      }

      setCopied(true);

      // Reset copied state after delay
      setTimeout(() => {
        setCopied(false);
      }, resetDelay);

    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to copy text");
      setError(error);
      console.error("Copy failed:", error);
    }
  }, [resetDelay]);

  return { copy, copied, error };
}