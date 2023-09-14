/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '900px',
    },
    extend: {
      colors: {
        primary: "#2B2D42",
        secondary: "#8D99AE",
        textColor: "#EDF2F4",
        accent: "#FF9F1C",
        accent2: "#DE6E4B"
    }
  },
  plugins: [],
}
}
