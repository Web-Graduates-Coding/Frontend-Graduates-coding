/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      tab: { min: "700px" },
      lap: { min: "950px" },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      dark: {
        'background-color': '#303030',
        'target-color': '#636363',
        'text-color': '#FFFFFF',
      },
      light: {
        'background-color': '#e4eaeb',
        'target-color': '#FFFFFF',
        'text-color': '#000000',
      },
      purple: "#6F3FF5",
      purpleLight: "#cebfff",
    }
  },
  plugins: [],
  darkMode: 'selector',
}

