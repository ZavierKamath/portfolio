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
    icon: "▣",
    type: "social"
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/ZavierKamath",
    href: "https://github.com/ZavierKamath",
    icon: "◈",
    type: "social"
  }
];

export default function ContactLinks() {
  const { copy, copied } = useClipboard();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
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
      {/* Terminal Header */}
      <div className="mb-6">
        <div className="border-pixel border-stellar-cyan bg-void-black p-4 font-display">
          <div className="text-terminal text-sm mb-2">
            <span className="text-quasar-yellow">CONTACT_MANAGER.exe</span> 
            <span className="ml-4">███████░░░ 70% Loaded</span>
          </div>
          <div className="border-t border-stellar-cyan pt-2">
            <h2 className="text-gradient font-display text-xl glow-cyan">COMM_LINKS.DAT</h2>
          </div>
        </div>
      </div>

      {/* Contact Links Grid */}
      <div className="space-y-4 pixel-stagger-children">
        {contactData.map((contact, index) => (
          <div
            key={contact.id}
            className="pixel-scroll-reveal relative"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="card-pixel card-terminal card-interactive p-4 transition-all duration-150 hover:shadow-pixel-lg"
              style={{
                borderColor: getTypeColor(contact.type),
                backgroundColor: 'var(--cosmic-navy)',
                transition: 'all 0.15s steps(4)'
              }}
              onMouseEnter={() => setHoveredId(contact.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Status Bar */}
              <div className="text-xs font-body text-terminal mb-2 opacity-80">
                <span className="text-quasar-yellow">[{contact.type.toUpperCase()}_LINK]</span>
                <span className="ml-4 text-asteroid-grey">
                  {hoveredId === contact.id ? '[READY]' : '[IDLE]'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                {/* Contact Info */}
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 border-pixel flex items-center justify-center font-display text-lg"
                    style={{
                      borderColor: getTypeColor(contact.type),
                      backgroundColor: getTypeBackground(contact.type),
                      color: getTypeColor(contact.type)
                    }}
                  >
                    {contact.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-ui font-bold text-star-white mb-1 text-sm">
                      {contact.label.toUpperCase()}
                    </h3>
                    <p className="font-body text-xs text-asteroid-grey">
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  {contact.copyable && (
                    <button
                      onClick={(e) => handleCopy(contact.value, e)}
                      className="px-3 py-1 border-pixel border-stellar-cyan bg-cosmic-indigo text-stellar-cyan font-ui text-xs font-bold hover:bg-stellar-cyan hover:text-void-black transition-all duration-150"
                      style={{
                        transition: 'all 0.15s steps(4)'
                      }}
                    >
                      {copied && lastCopiedText === contact.value ? '[COPIED!]' : '[COPY]'}
                    </button>
                  )}
                  
                  <a
                    href={contact.href}
                    target={contact.type !== 'email' ? '_blank' : undefined}
                    rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="px-3 py-1 border-pixel bg-void-black font-ui text-xs font-bold hover:shadow-pixel-sm transition-all duration-150"
                    style={{
                      borderColor: getTypeColor(contact.type),
                      color: getTypeColor(contact.type),
                      transition: 'all 0.15s steps(4)'
                    }}
                  >
                    [OPEN]
                  </a>
                </div>
              </div>

              {/* Hover Effect ASCII Decoration */}
              {hoveredId === contact.id && (
                <div 
                  className="absolute -top-1 -right-1 font-display text-xs pixel-blink"
                  style={{ color: getTypeColor(contact.type) }}
                >
                  ▸
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="mt-6 border-pixel border-stellar-cyan bg-void-black p-2 font-body text-xs">
        <div className="flex justify-between items-center">
          <div className="text-terminal">
            <span className="text-quasar-yellow">COMM_LINKS.DAT</span>
            <span className="ml-4 text-asteroid-grey">
              {contactData.length} CHANNELS ACTIVE
            </span>
          </div>
          <div className="text-stellar-cyan">
            STATUS: READY_
          </div>
        </div>
      </div>
    </section>
  );
}