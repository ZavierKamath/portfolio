import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'cosmic-black': '#0A0E1A',
        'nebula-blue': '#60A5FA',
        
        // Secondary Colors
        'stellar-blue': '#3B82F6',
        'deep-space-navy': '#1E293B',
        'moonlight-gray': '#E2E8F0',
        
        // Accent Colors
        'supernova-orange': '#F97316',
        'aurora-green': '#10B981',
        'pulsar-purple': '#8B5CF6',
        
        // Functional Colors
        'success-green': '#22C55E',
        'error-red': '#EF4444',
        'info-blue': '#3B82F6',
        'warning-amber': '#F59E0B',
        
        // Background Colors
        'space-black': '#000814',
        'dark-matter': '#0F172A',
        'starfield': '#F8FAFC',
        'cosmic-dust': '#F1F5F9',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        // Heading sizes
        'h1': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em' }],
        'h2': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
        'h3': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em' }],
        'h4': ['24px', { lineHeight: '32px', letterSpacing: '0' }],
        // Body text sizes
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
        // Special text
        'label': ['12px', { lineHeight: '16px', letterSpacing: '0.05em' }],
      },
      spacing: {
        'atomic': '4px',
        'micro': '8px',
        'small': '16px',
        'default': '24px',
        'medium': '32px',
        'large': '48px',
        'xl': '64px',
        'xxl': '96px',
      },
      borderRadius: {
        'card': '16px',
        'content': '12px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'button': '0 4px 12px rgba(30, 58, 138, 0.2)',
        'card-hover': '0 8px 32px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 1.5s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionDuration: {
        'quick': '150ms',
        'standard': '250ms',
        'smooth': '350ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;