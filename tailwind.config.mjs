/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables 'class' based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify the paths for your files
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Adds Inter font globally
      }
    },
  },
  plugins: [],
};
