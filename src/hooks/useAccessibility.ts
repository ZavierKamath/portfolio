"use client";

import { useEffect, useState } from "react";

interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  prefersDark: boolean;
}

export function useAccessibility(): AccessibilityPreferences {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reducedMotion: false,
    highContrast: false,
    prefersDark: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const highContrastQuery = window.matchMedia("(prefers-contrast: high)");
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updatePreferences = () => {
      setPreferences({
        reducedMotion: reducedMotionQuery.matches,
        highContrast: highContrastQuery.matches,
        prefersDark: darkModeQuery.matches,
      });
    };

    // Initial check
    updatePreferences();

    // Listen for changes
    reducedMotionQuery.addEventListener("change", updatePreferences);
    highContrastQuery.addEventListener("change", updatePreferences);
    darkModeQuery.addEventListener("change", updatePreferences);

    return () => {
      reducedMotionQuery.removeEventListener("change", updatePreferences);
      highContrastQuery.removeEventListener("change", updatePreferences);
      darkModeQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  return preferences;
}

// Utility function to get animation configuration based on user preferences
export function getAnimationConfig(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      initial: false,
      animate: false,
      transition: { duration: 0 },
      variants: undefined,
    };
  }
  
  return {};
}

// Hook to announce content changes to screen readers
export function useAnnouncer() {
  const [announcement, setAnnouncement] = useState("");

  const announce = (message: string, _priority: "polite" | "assertive" = "polite") => {
    setAnnouncement("");
    // Small delay to ensure screen reader picks up the change
    setTimeout(() => {
      setAnnouncement(message);
    }, 100);
  };

  return { announcement, announce };
}

// Hook for focus management
export function useFocusManagement() {
  const focusElement = (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
    }
  };

  const trapFocus = (containerSelector: string) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: Event) => {
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.key !== "Tab") return;

      if (keyEvent.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          keyEvent.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          keyEvent.preventDefault();
        }
      }
    };

    container.addEventListener("keydown", handleTabKey);
    
    return () => {
      container.removeEventListener("keydown", handleTabKey);
    };
  };

  return { focusElement, trapFocus };
}