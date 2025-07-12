"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

/**
 * Interface defining the structure of a dropdown menu item
 */
interface DropdownItem {
  href: string;
  label: string;
}

/**
 * Props for the DropdownMenu component
 */
interface DropdownMenuProps {
  /** The text to display on the dropdown trigger button */
  label: string;
  /** Array of navigation items to display in the dropdown */
  items: DropdownItem[];
  /** Additional CSS classes for styling */
  className?: string;
}

/**
 * DropdownMenu component providing accessible dropdown navigation
 * Features:
 * - Hover and keyboard navigation support
 * - Proper ARIA attributes for accessibility
 * - Smooth animations using CSS transitions
 * - Click outside to close functionality
 * - Focus management for screen readers
 */
export function DropdownMenu({ label, items, className = "" }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Check if any dropdown item is currently active based on the pathname
   */
  const hasActiveItem = items.some(item => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  });

  /**
   * Handle mouse enter with delay to prevent flickering
   */
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHovering(true);
    setIsOpen(true);
  };

  /**
   * Handle mouse leave with delay to allow moving to dropdown
   */
  const handleMouseLeave = () => {
    setHovering(false);
    timeoutRef.current = setTimeout(() => {
      if (!hovering) {
        setIsOpen(false);
      }
    }, 150);
  };

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case "Space":
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setIsOpen(true);
        // Focus first item in dropdown
        setTimeout(() => {
          const firstLink = dropdownRef.current?.querySelector('a');
          firstLink?.focus();
        }, 0);
        break;
    }
  };

  /**
   * Handle keyboard navigation within dropdown items
   */
  const handleItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = (index + 1) % items.length;
        const nextLink = dropdownRef.current?.querySelectorAll('a')[nextIndex];
        nextLink?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex = index === 0 ? items.length - 1 : index - 1;
        const prevLink = dropdownRef.current?.querySelectorAll('a')[prevIndex];
        prevLink?.focus();
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  /**
   * Close dropdown when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  /**
   * Cleanup timeout on unmount
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger Button */}
      <button
        className={`
          relative py-2 px-1 text-base font-medium transition-colors duration-200
          hover:text-nebula-blue flex items-center gap-1
          ${hasActiveItem ? "text-nebula-blue" : "text-moonlight-gray/80"}
        `}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${label} menu`}
      >
        {label}
        {/* Dropdown Arrow Icon */}
        <svg
          className={`
            w-4 h-4 transition-transform duration-200
            ${isOpen ? "rotate-180" : "rotate-0"}
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
        {/* Active indicator */}
        <span
          className={`
            absolute bottom-0 left-0 h-0.5 bg-nebula-blue
            transition-all duration-300 ease-out
            ${hasActiveItem ? "w-full" : "w-0"}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute top-full left-0 mt-2 min-w-48 z-50
          bg-dark-matter/95 backdrop-blur-md
          border border-stellar-blue/20 rounded-lg
          shadow-lg shadow-space-black/50
          transition-all duration-200 ease-out
          ${isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
          }
        `}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-2">
          {items.map((item, index) => {
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  block px-4 py-3 text-base transition-all duration-150
                  hover:bg-stellar-blue/10 hover:text-nebula-blue
                  focus:bg-stellar-blue/10 focus:text-nebula-blue focus:outline-none
                  ${isActive 
                    ? "text-nebula-blue bg-stellar-blue/5 border-r-2 border-nebula-blue" 
                    : "text-moonlight-gray"
                  }
                `}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                onKeyDown={(e) => handleItemKeyDown(e, index)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}