/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',   // Dark blue-gray
        secondary: '#0ea5e9', // Sky blue
        accent: '#14b8a6',    // Teal
        background: '#0f172a',
        text: '#e2e8f0',      // Light gray
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

