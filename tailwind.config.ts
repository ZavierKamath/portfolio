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
        // Primary Cosmic Palette
        'void-black': '#000000',
        'nebula-purple': '#5B21B6',
        'stellar-cyan': '#0FBCDC',
        'cosmic-indigo': '#1A1A2E',

        // 16-Color Pixel Art Palette
        'star-white': '#FFFFFF',
        'plasma-pink': '#FF006E',
        'quasar-yellow': '#FFD23F',
        'comet-orange': '#FF6B35',
        'galaxy-green': '#3EE751',
        'deep-space-blue': '#0F4C81',
        'asteroid-grey': '#8B8680',
        'moon-silver': '#C0C0C0',
        'mars-red': '#D62828',
        'neptune-teal': '#2E8B8B',
        'shadow-purple': '#2B0548',
        'cosmic-navy': '#16213E',
        'stardust': '#F5F5F5',
        'eclipse': '#1C1C1C',
        'pulsar-magenta': '#C77DFF',
        'meteor-brown': '#6F4E37',

        // Legacy color aliases for backwards compatibility
        'cosmic-black': '#000000',
        'nebula-blue': '#0FBCDC',
        'stellar-blue': '#0FBCDC',
        'deep-space-navy': '#1A1A2E',
        'moonlight-gray': '#C0C0C0',
        'supernova-orange': '#FF6B35',
        'aurora-green': '#3EE751',
        'pulsar-purple': '#5B21B6',
        'success-green': '#3EE751',
        'error-red': '#D62828',
        'info-blue': '#0FBCDC',
        'warning-amber': '#FFD23F',
        'space-black': '#000000',
        'dark-matter': '#1A1A2E',
        'starfield': '#F5F5F5',
        'cosmic-dust': '#C0C0C0',
      },
      fontFamily: {
        'display': ['"Press Start 2P"', 'monospace'],
        'ui': ['"Pixelify Sans"', 'sans-serif'],
        'body': ['"IBM Plex Mono"', 'monospace'],
        'code': ['"JetBrains Mono"', 'monospace'],
        // Legacy aliases
        'inter': ['"IBM Plex Mono"', 'monospace'],
        'jetbrains-mono': ['"JetBrains Mono"', 'monospace'],
        'space-grotesk': ['"Press Start 2P"', 'monospace'],
      },
      fontSize: {
        // Pixel-Perfect Sizes (8px grid)
        'xs': ['8px', { lineHeight: '12px' }],     // Pixel UI
        'sm': ['12px', { lineHeight: '16px' }],    // Small
        'base': ['14px', { lineHeight: '20px' }],  // Regular
        'lg': ['16px', { lineHeight: '24px' }],    // Large
        'xl': ['24px', { lineHeight: '32px' }],    // H2
        '2xl': ['32px', { lineHeight: '40px' }],   // H1
        
        // Legacy aliases
        'h1': ['32px', { lineHeight: '40px' }],
        'h2': ['24px', { lineHeight: '32px' }],
        'h3': ['16px', { lineHeight: '24px' }],
        'h4': ['12px', { lineHeight: '16px' }],
        'body-lg': ['16px', { lineHeight: '24px' }],
        'body': ['14px', { lineHeight: '20px' }],
        'body-sm': ['12px', { lineHeight: '16px' }],
        'label': ['8px', { lineHeight: '12px' }],
      },
      spacing: {
        // 8px Grid System
        'xxs': '8px',   // 1 unit
        'xs': '16px',   // 2 units
        's': '24px',    // 3 units
        'm': '32px',    // 4 units
        'l': '48px',    // 6 units
        'xl': '64px',   // 8 units
        'xxl': '96px',  // 12 units
        
        // Legacy aliases
        'atomic': '8px',
        'micro': '8px',
        'small': '16px',
        'default': '24px',
        'medium': '32px',
        'large': '48px',
      },
      borderRadius: {
        // Pixel theme uses no border radius by default
        'none': '0',
        'sm': '2px',  // Only for CRT monitor effect
        'md': '4px',  // Minimal curves
        
        // Legacy aliases set to pixel values
        'card': '0',
        'content': '0',
        'button': '0',
      },
      borderWidth: {
        'pixel': '2px',
        'pixel-thick': '4px',
        'pixel-extra': '8px',
      },
      boxShadow: {
        // Pixel Shadows
        'pixel-sm': '2px 2px 0 #000000',
        'pixel-md': '4px 4px 0 #000000',
        'pixel-lg': '8px 8px 0 #000000',
        'pixel-inset': 'inset 2px 2px 0 rgba(255,255,255,0.3), inset -2px -2px 0 rgba(0,0,0,0.5)',
        
        // CRT Glow Effects
        'glow-cyan': '0 0 5px #0FBCDC, 0 0 10px #0FBCDC, 0 0 15px #0FBCDC',
        'glow-purple': '0 0 5px #5B21B6, 0 0 10px #5B21B6, 0 0 15px #5B21B6',
        'glow-yellow': '0 0 5px #FFD23F, 0 0 10px #FFD23F, 0 0 15px #FFD23F',
        
        // Legacy aliases
        'card': '4px 4px 0 #000000',
        'button': '2px 2px 0 #000000',
        'card-hover': '8px 8px 0 #000000',
      },
      animation: {
        // Pixel Animations (step timing)
        'pixel-float': 'pixel-float 2s steps(4) infinite',
        'pixel-blink': 'pixel-blink 1s steps(2) infinite',
        'pixel-fade-in': 'pixel-fade-in 0.5s steps(4) forwards',
        'pixel-card-lift': 'pixel-card-lift 0.2s steps(4) forwards',
        'crt-flicker': 'crt-flicker 0.15s infinite',
        'twinkle': 'twinkle 2s steps(2) infinite',
        'scanline': 'scanline 8s linear infinite',
        'typing-cursor': 'typing-cursor 1s steps(2) infinite',
        'pixel-loading': 'pixel-loading-bar 1s linear infinite',
        
        // Parallax layers
        'parallax-slow': 'parallax-slow 120s linear infinite',
        'parallax-medium': 'parallax-medium 60s linear infinite',
        'parallax-fast': 'parallax-fast 30s linear infinite',
        
        // Legacy aliases
        'shimmer': 'pixel-loading-bar 1s linear infinite',
        'pulse-soft': 'pixel-blink 1.5s steps(2) infinite',
        'slide-up': 'pixel-fade-in 0.4s steps(4)',
        'fade-in': 'pixel-fade-in 0.3s steps(4)',
      },
      keyframes: {
        'pixel-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-8px)' },
          '75%': { transform: 'translateY(8px)' },
        },
        'pixel-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pixel-fade-in': {
          'from': { opacity: '0', transform: 'translateY(16px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pixel-card-lift': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-8px)' },
        },
        'crt-flicker': {
          '0%': { opacity: '1' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '1' },
          '30%': { opacity: '0.95' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0.98' },
          '60%': { opacity: '1' },
          '70%': { opacity: '0.96' },
          '80%': { opacity: '1' },
          '90%': { opacity: '0.97' },
          '100%': { opacity: '1' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'typing-cursor': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pixel-loading-bar': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '32px 0' },
        },
        'parallax-slow': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        'parallax-medium': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        'parallax-fast': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        
        // Legacy keyframes
        'shimmer': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '32px 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionDuration: {
        'instant': '0s',
        'fast': '0.15s',
        'normal': '0.3s',
        'slow': '0.5s',
        'slower': '1s',
        
        // Legacy aliases
        'quick': '0.15s',
        'standard': '0.3s',
        'smooth': '0.5s',
      },
      transitionTimingFunction: {
        'pixel': 'steps(4)',
        'retro': 'steps(8)',
        'blink': 'steps(2)',
        
        // Legacy
        'smooth': 'steps(4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pixel-loading': 'repeating-linear-gradient(90deg, var(--stellar-cyan) 0px, var(--stellar-cyan) 8px, var(--deep-space-blue) 8px, var(--deep-space-blue) 16px)',
        'scanlines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
      },
      backdropBlur: {
        'pixel': '2px',
      },
      zIndex: {
        'background': '-1',
        'base': '0',
        'content': '10',
        'overlay': '100',
        'modal': '1000',
        'tooltip': '1100',
      },
    },
  },
  plugins: [],
} satisfies Config;