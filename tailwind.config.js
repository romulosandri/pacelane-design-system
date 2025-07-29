import { tokens } from './src/design-system/tokens/index.js';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Import design tokens
      colors: tokens.colors,
      fontFamily: tokens.fontFamily,
      fontSize: tokens.fontSize,
      fontWeight: tokens.fontWeight,
      letterSpacing: tokens.letterSpacing,
      lineHeight: tokens.lineHeight,
      spacing: tokens.spacing.spacing,
      borderRadius: tokens.cornerRadius.borderRadius,
      borderWidth: tokens.stroke,
      // Add semantic colors as CSS variables for theme switching
      backgroundColor: tokens.colors,
      textColor: tokens.colors,
      borderColor: tokens.colors,
    },
  },
  plugins: [],
} 