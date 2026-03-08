/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "fg-yellow": "#facc15",
      "heading": "#111827",
      "neutral-quaternary": "#9ca3af"
    }
    },
  },
  plugins: [],
}

