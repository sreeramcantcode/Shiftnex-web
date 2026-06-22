/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        body: ["Leelawadee UI", "Jost", "sans-serif"],
      },
      colors: {
        ink: "#000000",
        panel: "#0a0a0a",
        steel: "#9a9a9a",
        steeldim: "#6b6b6b",
        ghost: "#1c1c1c",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
}

