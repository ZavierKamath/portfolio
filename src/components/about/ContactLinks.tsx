"use client";

import { useClipboard } from "@/hooks/useClipboard";
import { useState } from "react";

interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  type: 'email' | 'social' | 'external';
  copyable?: boolean;
}

const contactData: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "zavierkamath@gmail.com",
    href: "mailto:zavierkamath@gmail.com",
    icon: "✉",
    type: "email",
    copyable: true
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/zavierkamath",
    href: "https://linkedin.com/in/zavierkamath",
    icon: "⚡",
    type: "social"
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/ZavierKamath",
    href: "https://github.com/ZavierKamath",
    icon: "◇",
    type: "social"
  }
];

export default function ContactLinks() {
  const { copy, copied } = useClipboard();
  const [lastCopiedText, setLastCopiedText] = useState<string>('');

  const handleCopy = async (text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await copy(text);
    setLastCopiedText(text);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'email': return 'var(--stellar-cyan)';
      case 'social': return 'var(--nebula-purple)';
      case 'external': return 'var(--quasar-yellow)';
      default: return 'var(--asteroid-grey)';
    }
  };

  const getTypeBackground = (type: string) => {
    switch (type) {
      case 'email': return 'rgba(15, 188, 220, 0.1)';
      case 'social': return 'rgba(91, 33, 182, 0.1)';
      case 'external': return 'rgba(255, 210, 63, 0.1)';
      default: return 'rgba(139, 134, 128, 0.1)';
    }
  };

  return (
    <section className="max-w-2xl mx-auto">
      {/* Clean section header */}
      <div className="text-center mb-8">
        <h2 className="text-gradient font-display text-2xl mb-3">Let's Connect</h2>
        <p className="text-asteroid-grey text-sm">
          Open to collaboration, opportunities, and interesting conversations about astrophysics and AI.
        </p>
      </div>

      {/* Contact cards - matching ProjectCard styling */}
      <div className="space-y-4">
        {contactData.map((contact, index) => (
          <div
            key={contact.id}
            className="group transition-transform hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="card p-4 transition-all duration-200"
              style={{
                border: '2px solid var(--stellar-cyan)',
                backgroundColor: 'var(--void-black)',
                boxShadow: '2px 2px 0 var(--stellar-cyan)',
              }}
            >
              <div className="flex items-center justify-between">
                {/* Contact info with clean layout */}
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center text-lg"
                    style={{
                      border: '2px solid ' + getTypeColor(contact.type),
                      backgroundColor: getTypeBackground(contact.type),
                      color: getTypeColor(contact.type)
                    }}
                  >
                    {contact.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-ui font-bold text-star-white mb-1">
                      {contact.label}
                    </h3>
                    <p className="font-body text-sm text-asteroid-grey">
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Action buttons with clean styling */}
                <div className="flex items-center space-x-3">
                  {contact.copyable && (
                    <button
                      onClick={(e) => handleCopy(contact.value, e)}
                      className="px-4 py-2 text-sm font-ui font-medium transition-all duration-200"
                      style={{
                        border: '2px solid var(--stellar-cyan)',
                        backgroundColor: copied && lastCopiedText === contact.value ? 'var(--stellar-cyan)' : 'var(--void-black)',
                        color: copied && lastCopiedText === contact.value ? 'var(--void-black)' : 'var(--stellar-cyan)',
                      }}
                    >
                      {copied && lastCopiedText === contact.value ? 'Copied!' : 'Copy'}
                    </button>
                  )}
                  
                  <a
                    href={contact.href}
                    target={contact.type !== 'email' ? '_blank' : undefined}
                    rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="px-4 py-2 text-sm font-ui font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      border: '2px solid ' + getTypeColor(contact.type),
                      backgroundColor: 'var(--void-black)',
                      color: getTypeColor(contact.type),
                    }}
                  >
                    {contact.type === 'email' ? 'Send Email' : 'Visit'}
                  </a>
                </div>
              </div>

              {/* Subtle hover indicator */}
              <div 
                className="h-0.5 w-0 bg-stellar-cyan transition-all duration-300 group-hover:w-full mt-3"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Simple footer note */}
      <div className="text-center mt-8 text-asteroid-grey text-sm">
        <p>Based in Ohio • Always excited to discuss new opportunities</p>
      </div>
    </section>
  );
}