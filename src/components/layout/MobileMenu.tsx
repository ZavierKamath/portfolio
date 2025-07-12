"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Basic navigation links (non-dropdown items)
const basicNavigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

// Experience and Projects dropdown items with updated labels
const experienceProjectsItems = [
  { href: "/research", label: "Research Experience" },
  { href: "/industry", label: "Industry Experience" },
  { href: "/coursework", label: "Coursework Projects" },
  { href: "/personal", label: "Personal Projects" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  /**
   * Check if any experience/projects item is currently active
   */
  const hasActiveExperienceItem = experienceProjectsItems.some(item => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  });

  /**
   * Auto-expand experience section if any item is active
   */
  useEffect(() => {
    if (hasActiveExperienceItem) {
      setIsExperienceExpanded(true);
    }
  }, [hasActiveExperienceItem]);

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
            {/* Basic Navigation Links */}
            {basicNavigationLinks.map((link, index) => {
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

            {/* Experience and Projects Expandable Section */}
            <div className="flex flex-col">
              {/* Experience and Projects Header Button */}
              <button
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                className={`
                  text-xl font-medium transition-all duration-200 text-left
                  hover:text-nebula-blue hover:translate-x-2 flex items-center justify-between
                  ${
                    hasActiveExperienceItem
                      ? "text-nebula-blue border-l-2 border-nebula-blue pl-4"
                      : "text-moonlight-gray"
                  }
                  transform
                `}
                style={{
                  animationDelay: `${basicNavigationLinks.length * 50}ms`,
                }}
                aria-expanded={isExperienceExpanded}
                aria-label="Experience and Projects menu"
              >
                <span>Experience and Projects</span>
                {/* Expand/Collapse Arrow */}
                <svg
                  className={`
                    w-5 h-5 transition-transform duration-200 ml-2
                    ${isExperienceExpanded ? "rotate-180" : "rotate-0"}
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Experience and Projects Submenu */}
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-out
                  ${isExperienceExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="mt-4 ml-6 space-y-4">
                  {experienceProjectsItems.map((item, subIndex) => {
                    const isActive = pathname === item.href || 
                      (item.href !== "/" && pathname.startsWith(item.href));
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={`
                          block text-lg font-medium transition-all duration-200
                          hover:text-nebula-blue hover:translate-x-2
                          ${
                            isActive
                              ? "text-nebula-blue border-l-2 border-nebula-blue pl-4"
                              : "text-moonlight-gray/80"
                          }
                          transform
                        `}
                        style={{
                          animationDelay: `${(basicNavigationLinks.length + 1 + subIndex) * 50}ms`,
                        }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* Footer Links */}
          <div className="mt-auto pt-8 border-t border-stellar-blue/20">
            <div className="flex space-x-6">
              <a
                href="/resume.pdf"
                download
                className="text-base text-moonlight-gray hover:text-nebula-blue transition-colors duration-150"
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
