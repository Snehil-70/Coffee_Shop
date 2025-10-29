/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cocoa: "#A3825A", // Cocoa Bean
        beige: "#C6AC8F", // Sandstone Beige
        coffee: "#806547", // Roasted Coffee
        linen: "#E4D1B9", // Creamy Linen
        chocolate: "#4E342E", // Dark Chocolate
      },
    },
  },
  plugins: [],
};
