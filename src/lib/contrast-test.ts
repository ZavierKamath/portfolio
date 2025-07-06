// Color contrast testing utility
// Testing key color combinations for WCAG compliance

import { colors } from "./constants";

// Convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}

// Calculate relative luminance
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1: string, color2: string): number {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const lum1 = getLuminance(r1, g1, b1);
  const lum2 = getLuminance(r2, g2, b2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

// Test key color combinations
export const contrastTests = [
  {
    name: "Main text on dark background",
    foreground: colors["moonlight-gray"],
    background: colors["space-black"],
    requirement: 4.5,
    context: "Primary body text",
  },
  {
    name: "Headings on dark background",
    foreground: colors["moonlight-gray"],
    background: colors["space-black"],
    requirement: 3.0,
    context: "Large headings (H1, H2)",
  },
  {
    name: "Link text on dark background",
    foreground: colors["nebula-blue"],
    background: colors["space-black"],
    requirement: 4.5,
    context: "Interactive link text",
  },
  {
    name: "Card text on card background",
    foreground: colors["moonlight-gray"],
    background: colors["dark-matter"],
    requirement: 4.5,
    context: "Text inside cards",
  },
  {
    name: "Button text on gradient",
    foreground: colors.white,
    background: colors["nebula-blue"],
    requirement: 4.5,
    context: "Primary button text",
  },
  {
    name: "Secondary button text",
    foreground: colors["nebula-blue"],
    background: colors["space-black"],
    requirement: 4.5,
    context: "Secondary button text",
  },
  {
    name: "Success text",
    foreground: colors["success-green"],
    background: colors["space-black"],
    requirement: 4.5,
    context: "Success messages",
  },
  {
    name: "Error text",
    foreground: colors["error-red"],
    background: colors["space-black"],
    requirement: 4.5,
    context: "Error messages",
  },
  {
    name: "Warning text",
    foreground: colors["warning-amber"],
    background: colors["space-black"],
    requirement: 4.5,
    context: "Warning messages",
  },
];

// Run contrast tests
export function runContrastTests() {
  console.log("🎨 Color Contrast Testing Results\n");

  contrastTests.forEach((test) => {
    const ratio = getContrastRatio(test.foreground, test.background);
    const passes = ratio >= test.requirement;
    const grade = ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA Large" : "FAIL";

    console.log(`${passes ? "✅" : "❌"} ${test.name}`);
    console.log(`   Ratio: ${ratio.toFixed(2)}:1 (${grade})`);
    console.log(`   Required: ${test.requirement}:1`);
    console.log(`   Context: ${test.context}`);
    console.log(`   Colors: ${test.foreground} on ${test.background}\n`);
  });

  const totalTests = contrastTests.length;
  const passedTests = contrastTests.filter(
    (test) => getContrastRatio(test.foreground, test.background) >= test.requirement
  ).length;

  console.log(`📊 Summary: ${passedTests}/${totalTests} tests passed`);

  if (passedTests === totalTests) {
    console.log("🎉 All contrast tests passed! Your design meets WCAG accessibility standards.");
  } else {
    console.log(
      "⚠️ Some contrast tests failed. Consider adjusting colors for better accessibility."
    );
  }
}
