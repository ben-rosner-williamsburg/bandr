/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add this line to ensure Tailwind scans your components
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    colors: {
      'tahiti': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
        'blue': '#0e7490',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ea580c',
        'green': '#0d9488',
        'yellow': '#fbbf24',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    extend: {},
  },
  plugins: [],
}