"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/industry", label: "Industry" },
  { href: "/coursework", label: "Coursework" },
  { href: "/personal", label: "Personal" },
  { href: "/about", label: "About" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-space-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`
          absolute right-0 top-0 h-full w-80 max-w-sm
          bg-dark-matter/95 backdrop-blur-md
          border-l border-stellar-blue/20
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Menu Content */}
        <div className="flex h-full flex-col p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="p-2 text-moonlight-gray hover:text-nebula-blue transition-colors duration-150"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {navigationLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`
                    text-xl font-medium transition-all duration-200
                    hover:text-nebula-blue hover:translate-x-2
                    ${
                      isActive
                        ? "text-nebula-blue border-l-2 border-nebula-blue pl-4"
                        : "text-moonlight-gray"
                    }
                    transform
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer Links */}
          <div className="mt-auto pt-8 border-t border-stellar-blue/20">
            <div className="flex space-x-6">
              <a
                href="/resume.pdf"
                download
                className="text-sm text-moonlight-gray hover:text-nebula-blue transition-colors duration-150"
              >
                Resume
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-moonlight-gray hover:text-nebula-blue transition-colors duration-150"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-moonlight-gray hover:text-nebula-blue transition-colors duration-150"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
