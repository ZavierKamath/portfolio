"use client";

interface AccessibilityAnnouncerProps {
  announcement: string;
  priority?: "polite" | "assertive";
}

export function AccessibilityAnnouncer({ 
  announcement, 
  priority = "polite" 
}: AccessibilityAnnouncerProps) {
  return (
    <div
      role="status"
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}

// Add screen reader only utility to global CSS
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}