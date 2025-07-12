"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MobileMenu } from "./MobileMenu";
import { DropdownMenu } from "./DropdownMenu";

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

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const pathname = usePathname();

  // Determine if navbar should be visible
  const shouldShow = scrollDirection === "up" || isAtTop;

  // Check if a basic navigation link is active (including nested routes)
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40
          bg-dark-matter/80 backdrop-blur-md
          border-b border-stellar-blue/10
          transition-transform duration-300 ease-out
          ${shouldShow ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <Link
              href="/"
              className="text-xl font-bold text-moonlight-gray hover:text-nebula-blue transition-colors duration-200"
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#0FBCDC', // stellar-cyan
                textUnderlineOffset: '4px',
                textDecorationThickness: '2px'
              }}
            >
              Zavier Kamath Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Basic Navigation Links */}
              {basicNavigationLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative py-2 px-1 text-base font-medium transition-colors duration-200
                      hover:text-nebula-blue
                      ${isActive ? "text-nebula-blue" : "text-moonlight-gray/80"}
                    `}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <span
                      className={`
                        absolute bottom-0 left-0 h-0.5 bg-nebula-blue
                        transition-all duration-300 ease-out
                        ${isActive ? "w-full" : "w-0"}
                      `}
                    />
                  </Link>
                );
              })}
              
              {/* Experience and Projects Dropdown */}
              <DropdownMenu
                label="Experience and Projects"
                items={experienceProjectsItems}
              />
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/resume.pdf"
                download
                className="text-base text-moonlight-gray hover:text-nebula-blue transition-colors duration-200"
              >
                Resume
              </a>
              <a
                href="https://github.com/ZavierKamath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-moonlight-gray hover:text-nebula-blue transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/zavierkamath/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-moonlight-gray hover:text-nebula-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-moonlight-gray hover:text-nebula-blue transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
