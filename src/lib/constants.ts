// Design Tokens for Astrophysics Portfolio
// Based on the astronomy-themed design system

export const colors = {
  // Primary Colors
  "cosmic-black": "#0A0E1A",
  "nebula-blue": "#60A5FA", // Lighter blue for better contrast

  // Secondary Colors
  "stellar-blue": "#3B82F6",
  "deep-space-navy": "#1E293B",
  "moonlight-gray": "#E2E8F0",

  // Accent Colors
  "supernova-orange": "#F97316",
  "aurora-green": "#10B981",
  "pulsar-purple": "#8B5CF6",

  // Functional Colors
  "success-green": "#22C55E",
  "error-red": "#EF4444",
  "info-blue": "#3B82F6",
  "warning-amber": "#F59E0B",

  // Background Colors
  "space-black": "#000814",
  "dark-matter": "#0F172A",
  starfield: "#F8FAFC",
  "cosmic-dust": "#F1F5F9",

  // Semantic Colors
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const spacing = {
  atomic: "4px",
  micro: "8px",
  small: "16px",
  default: "24px",
  medium: "32px",
  large: "48px",
  xl: "64px",
  xxl: "96px",
} as const;

export const typography = {
  fontFamilies: {
    primary: "Inter",
    monospace: "JetBrains Mono",
    display: "Space Grotesk",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    h1: { size: "48px", lineHeight: "56px", letterSpacing: "-0.03em" },
    h2: { size: "36px", lineHeight: "44px", letterSpacing: "-0.02em" },
    h3: { size: "28px", lineHeight: "36px", letterSpacing: "-0.01em" },
    h4: { size: "24px", lineHeight: "32px", letterSpacing: "0" },
    "body-large": { size: "18px", lineHeight: "28px", letterSpacing: "0" },
    body: { size: "16px", lineHeight: "24px", letterSpacing: "0" },
    "body-small": { size: "14px", lineHeight: "20px", letterSpacing: "0.01em" },
    code: { size: "14px", lineHeight: "20px", letterSpacing: "0" },
    label: { size: "12px", lineHeight: "16px", letterSpacing: "0.05em" },
  },
} as const;

export const animations = {
  durations: {
    quick: "150ms",
    standard: "250ms",
    smooth: "350ms",
    slow: "500ms",
  },
  easings: {
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const shadows = {
  card: "0 4px 24px rgba(0, 0, 0, 0.3)",
  button: "0 4px 12px rgba(30, 58, 138, 0.2)",
  "card-hover": "0 8px 32px rgba(59, 130, 246, 0.3)",
  glow: "0 0 20px rgba(59, 130, 246, 0.5)",
} as const;

export const borderRadius = {
  button: "8px",
  content: "12px",
  card: "16px",
} as const;

export const breakpoints = {
  mobile: "640px",
  tablet: "1024px",
  desktop: "1440px",
  wide: "1441px",
} as const;

export const components = {
  buttons: {
    primary: {
      height: "48px",
      paddingX: "24px",
      borderRadius: borderRadius.button,
      background: `linear-gradient(to right, ${colors["nebula-blue"]}, ${colors["stellar-blue"]})`,
      textColor: colors.white,
      shadow: shadows.button,
    },
    secondary: {
      height: "48px",
      paddingX: "24px",
      borderRadius: borderRadius.button,
      background: "transparent",
      borderWidth: "2px",
      borderColor: colors["nebula-blue"],
      textColor: colors["nebula-blue"],
    },
    ghost: {
      height: "40px",
      background: "none",
      textColor: colors["stellar-blue"],
    },
  },
  cards: {
    project: {
      background: colors["dark-matter"],
      borderRadius: borderRadius.card,
      padding: spacing.default,
      shadow: shadows.card,
      borderColor: `rgba(59, 130, 246, 0.1)`,
    },
    content: {
      background: "rgba(15, 23, 42, 0.6)",
      borderRadius: borderRadius.content,
      padding: "20px",
      borderColor: "rgba(226, 232, 240, 0.1)",
      backdropFilter: "blur(12px)",
    },
  },
  inputs: {
    height: "48px",
    borderRadius: borderRadius.button,
    background: "rgba(15, 23, 42, 0.4)",
    borderColor: "rgba(226, 232, 240, 0.2)",
    focusBorderColor: colors["stellar-blue"],
    textColor: colors["moonlight-gray"],
    placeholderColor: "rgba(226, 232, 240, 0.4)",
  },
  icons: {
    navigation: "24px",
    action: "20px",
    feature: "32px",
  },
} as const;

// Type exports for better TypeScript integration
export type ColorKeys = keyof typeof colors;
export type SpacingKeys = keyof typeof spacing;
export type FontSizeKeys = keyof typeof typography.fontSizes;
