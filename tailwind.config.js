/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        win: "0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)",
        "win-light": "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
      },
      backdropBlur: {
        mica: "40px",
      },
    },
  },
  plugins: [],
};
