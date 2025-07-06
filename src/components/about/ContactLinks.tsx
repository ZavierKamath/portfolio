"use client";

import { motion } from "framer-motion";
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
    icon: "📧",
    type: "email",
    copyable: true
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/zavierkamath",
    href: "https://linkedin.com/in/zavierkamath",
    icon: "💼",
    type: "social"
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/ZavierKamath",
    href: "https://github.com/ZavierKamath",
    icon: "🔗",
    type: "social"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};

const buttonVariants = {
  idle: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.05, 
    rotate: [0, -2, 2, 0],
    transition: { 
      duration: 0.3,
      rotate: { duration: 0.5 }
    }
  },
  tap: { scale: 0.95 }
};

export default function ContactLinks() {
  const { copy, error } = useClipboard();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    await copy(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'email': return 'border-starlight-yellow hover:border-starlight-yellow/80';
      case 'social': return 'border-cosmic-blue hover:border-cosmic-blue/80';
      case 'external': return 'border-nebula-purple hover:border-nebula-purple/80';
      default: return 'border-moonlight-gray hover:border-moonlight-gray/80';
    }
  };

  const getTypeBackground = (type: string) => {
    switch (type) {
      case 'email': return 'hover:bg-starlight-yellow/10';
      case 'social': return 'hover:bg-cosmic-blue/10';
      case 'external': return 'hover:bg-nebula-purple/10';
      default: return 'hover:bg-moonlight-gray/10';
    }
  };

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-gradient mb-6 text-center">Get In Touch</h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {contactData.map((contact) => (
          <motion.div
            key={contact.id}
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              className={`
                relative overflow-hidden rounded-xl border-2 ${getTypeColor(contact.type)} 
                ${getTypeBackground(contact.type)}
                backdrop-blur-sm bg-space-dark/50
                transition-all duration-300
                group cursor-pointer
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <div className="relative p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <p className="font-medium text-white">{contact.label}</p>
                    <p className="text-moonlight-gray/80 text-sm">{contact.value}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {contact.copyable && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy(contact.id, contact.value);
                      }}
                      className={`
                        p-2 rounded-lg transition-all duration-200
                        ${copiedId === contact.id 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-space-dark/50 hover:bg-space-dark/80 text-moonlight-gray'
                        }
                      `}
                      title="Copy to clipboard"
                    >
                      {copiedId === contact.id ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-4 h-4"
                        >
                          ✓
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-4 h-4"
                        >
                          📋
                        </motion.div>
                      )}
                    </button>
                  )}

                  <a
                    href={contact.href}
                    target={contact.type !== 'email' ? '_blank' : undefined}
                    rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-lg bg-space-dark/50 hover:bg-space-dark/80 text-moonlight-gray hover:text-white transition-all duration-200"
                    title={`Open ${contact.label}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-4 h-4"
                    >
                      {contact.type === 'email' ? '📨' : '🔗'}
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Success/Error Toast */}
            {copiedId === contact.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-green-500/30"
              >
                Copied to clipboard!
              </motion.div>
            )}

            {error && copiedId === contact.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-red-500/30"
              >
                Failed to copy
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-moonlight-gray/60 text-sm">
          Always open to interesting conversations and collaborations
        </p>
      </motion.div>
    </section>
  );
}