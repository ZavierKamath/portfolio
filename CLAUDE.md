# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Zavier Kamath, showcasing astrophysics and AI research work. Built with Next.js 15, TypeScript, and Tailwind CSS with a distinctive pixel art space theme.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom pixel art theme
- **Components**: React 19 with custom hooks
- **Fonts**: Inter, JetBrains Mono, Space Grotesk from Google Fonts

### Directory Structure
- `src/app/` - Next.js App Router pages (about, coursework, industry, personal, research)
- `src/components/` - React components organized by feature (about, home, layout, projects, shared)
- `src/data/` - JSON files containing project data for each category
- `src/hooks/` - Custom React hooks for accessibility, canvas, clipboard, etc.
- `src/lib/` - Utility functions, types, constants, and animations
- `src/styles/` - CSS files for pixel art animations and backgrounds

### Key Components
- **StarfieldCanvas**: Animated background with parallax stars using HTML5 Canvas
- **ProjectCard**: Reusable component for displaying projects with expand/collapse functionality
- **Navbar**: Navigation with mobile menu and accessibility features
- **PageTransition**: Smooth transitions between pages

### Data Architecture
Projects are stored in separate JSON files by category:
- `industry-projects.json` - Professional work at Huntington Bank
- `research-projects.json` - Academic research projects  
- `coursework-projects.json` - University coursework
- `personal-projects.json` - Personal coding projects

Each project follows the `Project` interface defined in `src/lib/types.ts` with skills, links, descriptions, and metadata.

### Styling System
The project uses a comprehensive pixel art theme with:
- 16-color cosmic palette (void-black, nebula-purple, stellar-cyan, etc.)
- 8px grid system for spacing
- Pixel-perfect typography using step-based animations
- Custom shadows, glows, and CRT-style effects
- Legacy color aliases for backwards compatibility

### Custom Hooks
- `useCanvas` - Canvas rendering and animation management
- `useReducedMotion` - Respects user motion preferences
- `useAccessibility` - Accessibility announcements
- `useProjectData` - Project data fetching and filtering
- `useScrollDirection` - Scroll direction detection

## Development Guidelines

### Code Style
- ESLint configuration extends Next.js core web vitals and TypeScript rules
- Prettier formatting with custom rules
- TypeScript strict mode enabled
- Components use functional style with hooks

### Adding New Projects
1. Add project data to appropriate JSON file in `src/data/`
2. Follow the `Project` interface schema
3. Include appropriate skills, links, and descriptions
4. Test the project card display and functionality

### Working with Animations
- Use step-based animations for pixel art aesthetic
- Respect `prefers-reduced-motion` via `useReducedMotion` hook
- All animations defined in Tailwind config with pixel timing functions

### Accessibility
- Components include proper ARIA attributes
- Focus management for keyboard navigation
- Screen reader announcements via `AccessibilityAnnouncer`
- High contrast color combinations following cosmic theme